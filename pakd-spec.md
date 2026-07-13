# PAKD — SYSTEM SPEC (v1 trial stack)
For: porting to production with Claude Code. Current stack is 3 static HTML files on Vercel + Firebase Firestore (free tier, test-mode rules).

## The product
Pakd delivers click & collect orders. Customer uploads their order confirmation/barcode screenshot; a verified driver collects at the store counter (barcode + Collection Authority naming the driver + driver's photo ID) and delivers. Competitive wedge vs Uber Store pickup: Pakd handles stores that require ID / named collectors (Apple, Myer, strict Kmarts); Uber explicitly excludes those and caps items at AUD$500.

## Surfaces (all in Vercel /public, all share one FIREBASE_CONFIG block)
1. pakd-order.html — CUSTOMER. Upload screenshot (canvas-compressed to ≤1100px JPEG 0.82 dataURL) + mobile + delivery suburb → writes doc to Firestore `orders` collection; Formspree POST kept as email notification only. Success screen shows a save-this-link URL `?order=<id>` — reopening in that mode lets the customer upload the barcode later (merge {barcode, barcodeAt, status:"barcode-added"}). Fallback paths: email forward (orders.pakd@gmail.com placeholder, config var PAKD_EMAIL) and a 3-field form (name/mobile/suburb → Formspree only — NOT in Firestore; port should unify).
2. pakd-ops.html — FOUNDER (single device, localStorage pipeline + Firestore sync). Tabs: Orders / Inbox / +New order / Drivers.
   - Inbox: onSnapshot(`orders` where !imported) → cards with screenshots; "Use → new order" prefills the form (phone, attaches barcode||screenshot as pendingBarcode, importingDocId held); after pipeline save, marks source doc {imported:true, pipelineId}.
   - Pipeline statuses: new → barcode (awaiting) → ready → out → done. Attaching a barcode auto-advances barcode→ready.
   - Publish live: per order button writes/merges doc to `jobs/{pipelineOrderId}` {store, orderNo, customer, address, notes, pay, pickupArea, dropArea, barcode, status:"open", createdAt, publishedAt}.
   - Live sync back: onSnapshot(`jobs`) → claimed sets pipeline status "out" + shows driverName badge; delivered sets "done".
   - Job card modal: branded card w/ barcode + Collection Authority auto-naming customer + assigned driver (screenshot → WhatsApp).
3. pakd-jobs.html — DRIVER (the link shared in WhatsApp). One-time registration {name, suburb, phone} → localStorage "pakd-driver-me". Open jobs list (store, area, pay; details hidden). Claim = Firestore transaction: only succeeds if status==="open" → sets {status:"claimed", driverName, driverPhone, driverId, claimedAt}; loser sees "just missed it". Claimed view: full details + barcode + authority naming the driver + 5 steps + "Mark delivered" → {status:"delivered", deliveredAt}.

## Firestore data model
- orders/{ord_<ts>_<rand>}: {phone, suburb, screenshot(dataURL), createdAt(ISO), status: new|barcode-added, imported(bool), pipelineId?, barcode?, barcodeAt?, source:"order-page"}
- jobs/{pipelineOrderId}: {store, orderNo, customer, address, notes, pay(string), pickupArea, dropArea, window, barcode(dataURL|null), status: open|claimed|delivered, driverName?, driverPhone?, driverId?, createdAt, publishedAt, claimedAt?, deliveredAt?}
- Doc size caution: dataURL images must stay <1MB/doc (Firestore limit). Compression keeps ~200-350KB.

## Known gaps for production port (priority order)
1. Security: test-mode rules are open + expire in 30 days. Need auth (drivers: phone/anonymous+claim token; ops: founder login) and rules. Customer PII (phone, address) currently readable by anyone with config.
2. Images → Firebase Storage (or S3) instead of inline dataURLs.
3. Notifications: driver push/SMS on new job (currently WhatsApp manual ping); customer SMS on claim/delivery (currently founder texts manually).
4. Payments: customer fee via Stripe Payment Links first, then integrated; driver payouts tracked (currently bank transfer + honour system).
5. Unify the 3-field form path into Firestore; kill Formspree once notifications exist.
6. Driver identity: registration is self-asserted; needs verification flow (licence/ID check) before scale.
7. Ops multi-device: pipeline lives in localStorage; move pipeline itself into Firestore.
8. Store registry (separate file pakd-field-log.html, localStorage): 63 stores, per-branch pickup requirements + tier1 flags — port into Firestore `stores` collection; drives "will this store hand over to a third party" logic. Driver post-delivery probe ("what did the counter ask for") should write back to it.

## Brand
Indigo #6366f1 (deep #5e53f6, light #7c73f0), canvas #0b1220→#101b30, emerald #10b981, fonts Sora (headlines) + Plus Jakarta Sans (body). Logo: rounded square, white box+arrow linework. No emojis in driver/ops/professional surfaces.

## Ops reality (context for product decisions)
Founder: Brandon, non-technical, Sydney launch (Brisbane next). ~29 driver signups, ~7 in WhatsApp. Delivery #1 completed at Kmart Marrickville (driver Juan Pedro Medel, barcode scanned at counter, no issues). Dispatch trigger is "order ready", not "order placed" — stores take up to ~24h+ to pick. Free-trial phase; target price point ~$15-20/delivery.
