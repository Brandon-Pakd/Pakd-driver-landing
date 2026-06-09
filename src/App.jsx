import { useState, useRef } from "react";
import {
  ArrowRight, Check, ChevronDown, MapPin, Phone, User, Wallet, Clock,
  ShieldCheck, Lock, BadgeCheck, KeyRound, Camera, Star, Sparkles,
  Car, AlertCircle, Plus, Minus, Zap, Package, Unlock, Layers, Mail,
} from "lucide-react";

/* =====================================================================
   PAKD — driver landing page
   Goal: a real driver leaves their name + number.
   Every section is in service of that.
   ===================================================================== */
const C = {
  canvas: "#0b1220", canvas2: "#0f1a2e", bg: "#f5f6fb", card: "#ffffff",
  ink: "#191d21", sub: "#6b7280", muted: "#9aa1ad", line: "#eceef3", lineHi: "#e2e5ed",
  indigo: "#6366f1", indigoDeep: "#5e53f6", indigoLite: "#7c73f0", indigoSoft: "#eef0fe",
  emerald: "#10b981", emeraldSoft: "#e7f9f1", amber: "#f59e0b", red: "#ef4444",
};
const FB = "'Plus Jakarta Sans', sans-serif";
const FH = "'Sora', sans-serif";

function PakdMark({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 400 400" style={{ display: "block", flexShrink: 0 }}>
      <defs><linearGradient id="pmk" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#7c73f0" /><stop offset="100%" stopColor="#5e53f6" /></linearGradient></defs>
      <rect x="40" y="40" width="320" height="320" rx="92" fill="url(#pmk)" />
      <g fill="none" stroke="#fff" strokeWidth="25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 196 132 L 116 175" /><path d="M 196 132 L 234 152" /><path d="M 116 175 L 196 217" />
        <path d="M 116 175 L 116 257" /><path d="M 116 257 L 196 299" /><path d="M 196 217 L 196 299" />
        <path d="M 196 217 L 282 153" /><path d="M 252 153 L 282 153 L 282 184" /><path d="M 276 200 L 276 257 L 196 299" />
      </g>
    </svg>
  );
}

/* ---------- top nav ---------- */
function TopNav({ scrollToSignup }) {
  return (
    <div style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(11,18,32,0.85)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "14px 22px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <PakdMark size={28} />
          <span style={{ fontFamily: FB, fontWeight: 800, fontSize: 20, color: "#fff", letterSpacing: "-0.03em" }}>Pakd</span>
          <span style={{ fontFamily: FB, fontSize: 11.5, color: "#9aa6bd", border: "1px solid #2c395a", borderRadius: 20, padding: "3px 10px", marginLeft: 6 }}>For drivers</span>
        </div>
        <button onClick={scrollToSignup} style={{ background: C.indigo, color: "#fff", border: "none", borderRadius: 11, padding: "9px 18px", fontFamily: FB, fontWeight: 700, fontSize: 13.5, cursor: "pointer", boxShadow: "0 6px 18px rgba(99,102,241,0.35)" }}>Sign up</button>
      </div>
    </div>
  );
}

/* ---------- hero ---------- */
function Hero({ scrollToSignup, scrollToHow, scrollToAlongside }) {
  return (
    <div style={{ background: `linear-gradient(180deg, ${C.canvas} 0%, ${C.canvas2} 100%)`, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -120, right: -120, width: 480, height: 480, background: `radial-gradient(circle, rgba(124,115,240,0.22), transparent 65%)`, borderRadius: "50%" }} />
      <div style={{ position: "absolute", bottom: -160, left: -80, width: 360, height: 360, background: `radial-gradient(circle, rgba(16,185,129,0.10), transparent 65%)`, borderRadius: "50%" }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 22px 90px", position: "relative" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 14px", background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.35)", borderRadius: 50, fontFamily: FB, fontSize: 12.5, fontWeight: 600, color: "#c7c9ff", marginBottom: 22 }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: C.emerald, boxShadow: `0 0 8px ${C.emerald}` }} />
          Launching in Sydney & Melbourne · founding drivers wanted
        </div>
        <h1 style={{ fontFamily: FH, fontSize: "clamp(38px, 6.5vw, 64px)", fontWeight: 700, letterSpacing: "-0.045em", lineHeight: 1.02, color: "#fff", margin: "0 0 22px", maxWidth: 820 }}>
          Drive for Pakd.<br />
          <span style={{ background: `linear-gradient(120deg, ${C.indigoLite}, ${C.indigo})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>One pickup, one drop-off,</span> paid weekly.
        </h1>
        <p style={{ fontFamily: FB, fontSize: 19, color: "#9aa6bd", lineHeight: 1.55, margin: "0 0 32px", maxWidth: 640 }}>
          Just delivery work — pick up an order from a store, drop it to a customer, get paid weekly. Drive Pakd on its own, or add it to the delivery trips you're already making. Accept the jobs that suit you.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 32 }}>
          <button onClick={scrollToSignup} style={{ background: C.indigo, color: "#fff", border: "none", borderRadius: 13, padding: "16px 28px", fontFamily: FB, fontWeight: 700, fontSize: 16, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8, boxShadow: "0 10px 30px rgba(99,102,241,0.4)" }}>
            Sign up to drive <ArrowRight size={18} strokeWidth={2.6} />
          </button>
          <button onClick={scrollToHow} style={{ background: "transparent", color: "#c7c9ff", border: "1.5px solid #2c395a", borderRadius: 13, padding: "14px 26px", fontFamily: FB, fontWeight: 700, fontSize: 16, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8 }}>
            How it works <ChevronDown size={18} strokeWidth={2.4} />
          </button>
        </div>
        <div style={{ display: "flex", gap: 28, flexWrap: "wrap", fontFamily: FB, fontSize: 14, color: "#9aa6bd", marginBottom: 26 }}>
          {[[Wallet, "Weekly payouts"], [ShieldCheck, "Pakd has your back"], [Sparkles, "Founding driver perks"]].map(([Ic, t]) => (
            <span key={t} style={{ display: "inline-flex", alignItems: "center", gap: 7 }}><Ic size={16} color={C.indigoLite} /> {t}</span>
          ))}
        </div>
        <button onClick={scrollToAlongside} style={{ background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.3)", borderRadius: 12, padding: "11px 18px", fontFamily: FB, fontSize: 14, cursor: "pointer", color: "#c7c9ff", display: "inline-flex", alignItems: "center", gap: 8 }}>
          <Layers size={15} color={C.indigoLite} />
          <span>Already doing delivery trips?</span>
          <span style={{ color: "#fff", fontWeight: 700 }}>See how Pakd runs alongside →</span>
        </button>
      </div>
    </div>
  );
}

/* ---------- why drive ---------- */
/* ---------- runs alongside (the multi-app pitch) ---------- */
function AlongsideSection({ refEl, scrollToSignup }) {
  const day = [
    { t: "11:30 AM", label: "Delivery dropped in the CBD", k: "other" },
    { t: "11:42 AM", label: "Pakd ping nearby: pickup at Foot Locker", k: "pakd" },
    { t: "11:48 AM", label: "Accepted · 3-minute detour from your last drop", k: "pakd" },
    { t: "12:05 PM", label: "Delivered to Prahran customer", k: "pakd", pay: "+$14" },
    { t: "12:08 PM", label: "Back to your next delivery — shift continues", k: "other" },
  ];
  return (
    <div ref={refEl}>
      <Section bg={C.bg}>
        <Heading kicker="Already on the road?" title="Add Pakd to your shift." />
        <p style={{ fontFamily: FB, fontSize: 16.5, color: C.sub, textAlign: "center", maxWidth: 640, margin: "-22px auto 38px", lineHeight: 1.55 }}>
          Already doing delivery trips? Pakd fits right in. You're already passing the shops — Pakd just pays you for the quick detour, on top of the work you'd already be doing.
        </p>

        <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 22, padding: 26, maxWidth: 720, margin: "0 auto", boxShadow: "0 4px 24px rgba(16,24,40,0.05)" }}>
          <div style={{ fontFamily: FB, fontWeight: 700, fontSize: 12, color: C.muted, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 18, display: "flex", alignItems: "center", gap: 6 }}><Clock size={13} /> A typical shift on the road</div>
          <div>
            {day.map((d, i) => (
              <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", paddingBottom: i < day.length - 1 ? 14 : 0, position: "relative" }}>
                <div style={{ fontFamily: FB, fontWeight: 700, fontSize: 12.5, color: C.muted, width: 70, flexShrink: 0, paddingTop: 2 }}>{d.t}</div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <span style={{ width: 12, height: 12, borderRadius: "50%", background: d.k === "pakd" ? C.indigo : C.lineHi, boxShadow: d.k === "pakd" ? `0 0 0 4px ${C.indigoSoft}` : "none", marginTop: 4 }} />
                  {i < day.length - 1 && <span style={{ width: 2, flex: 1, minHeight: 26, background: C.line, marginTop: 4 }} />}
                </div>
                <div style={{ flex: 1, paddingBottom: i < day.length - 1 ? 4 : 0, display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: FB, fontSize: 10.5, fontWeight: 700, color: d.k === "pakd" ? C.indigoDeep : C.muted, background: d.k === "pakd" ? C.indigoSoft : C.bg, padding: "2px 8px", borderRadius: 20, marginBottom: 4 }}>
                      {d.k === "pakd" ? "PAKD" : "OTHER DELIVERY"}
                    </div>
                    <div style={{ fontFamily: FB, fontWeight: d.k === "pakd" ? 700 : 500, fontSize: 14, color: d.k === "pakd" ? C.ink : C.sub, lineHeight: 1.45 }}>{d.label}</div>
                  </div>
                  {d.pay && <span style={{ fontFamily: FH, fontWeight: 700, fontSize: 17, color: C.emerald, flexShrink: 0 }}>{d.pay}</span>}
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 22, padding: "14px 16px", background: C.indigoSoft, borderRadius: 12, fontFamily: FB, fontSize: 13.5, color: C.indigoDeep, lineHeight: 1.5 }}>
            <strong>$14 in 23 minutes</strong> — added to a shift you were running anyway. No deadhead, no waiting around. You were already there.
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginTop: 32 }}>
          {[
            { ic: Wallet, t: "Paid for the trips you'd make anyway", d: "Your shifts already take you near most pickups. Pakd pays you for the quick detour." },
            { ic: Unlock, t: "No exclusivity, no penalty", d: "Decline jobs freely. Pakd doesn't ding your acceptance rate — it's designed to fit around you." },
            { ic: Zap, t: "Quick in, quick out", d: "Most jobs are 15–25 minutes door to door. You're free for your next delivery in no time." },
          ].map((x) => (
            <div key={x.t} style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: 20 }}>
              <div style={{ width: 38, height: 38, borderRadius: 10, background: C.indigoSoft, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}><x.ic size={19} color={C.indigo} strokeWidth={2.2} /></div>
              <div style={{ fontFamily: FB, fontWeight: 700, fontSize: 14.5, color: C.ink, marginBottom: 5 }}>{x.t}</div>
              <div style={{ fontFamily: FB, fontSize: 13, color: C.sub, lineHeight: 1.55 }}>{x.d}</div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 32 }}>
          <p style={{ fontFamily: FB, fontSize: 14, color: C.sub, margin: "0 0 16px", lineHeight: 1.5 }}>New to delivery work? Same simple deal — just sign up.</p>
          <button onClick={scrollToSignup} style={{ background: C.indigo, color: "#fff", border: "none", borderRadius: 13, padding: "14px 26px", fontFamily: FB, fontWeight: 700, fontSize: 15, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8, boxShadow: "0 8px 24px rgba(99,102,241,0.35)" }}>
            Sounds good — sign me up <ArrowRight size={17} strokeWidth={2.6} />
          </button>
        </div>
      </Section>
    </div>
  );
}

function WhyDrive() {
  const items = [
    { ic: Zap, t: "Simple jobs", d: "One order, one trip — pick up from a store, deliver to a customer. No bag-juggling, no food temperatures, no multi-stop chaos." },
    { ic: Wallet, t: "Pay you can count on", d: "Every job's pay is shown before you accept it. Weekly payouts straight to your bank. No hidden cuts, no surprise deductions." },
    { ic: ShieldCheck, t: "Real protection", d: "Photo proof at every pickup and drop. 4-digit handoff code or GPS photo. Disputes settle from the records, not from arguments — and you're never personally on the hook for a parcel." },
  ];
  return (
    <Section bg={C.bg}>
      <Heading kicker="Why drive with Pakd" title="A better deal than food delivery." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18 }}>
        {items.map((x) => (
          <div key={x.t} style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 18, padding: 22, boxShadow: "0 1px 2px rgba(16,24,40,0.04)" }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: C.indigoSoft, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}><x.ic size={22} color={C.indigo} strokeWidth={2.2} /></div>
            <h3 style={{ fontFamily: FH, fontSize: 19, fontWeight: 700, color: C.ink, margin: "0 0 8px" }}>{x.t}</h3>
            <p style={{ fontFamily: FB, fontSize: 14.5, color: C.sub, margin: 0, lineHeight: 1.55 }}>{x.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- how it works ---------- */
function HowItWorks({ refEl }) {
  const steps = [
    { n: "01", t: "Sign up", d: "Fill in the form below. Takes under a minute.", ic: User },
    { n: "02", t: "Get verified", d: "Quick ID and background check. We guide you through it.", ic: ShieldCheck },
    { n: "03", t: "Go online", d: "When you're free, open the app. Accept the jobs that suit you.", ic: Zap },
    { n: "04", t: "Get paid", d: "Earnings tracked per job, paid weekly into your bank.", ic: Wallet },
  ];
  return (
    <div ref={refEl}>
      <Section bg={C.card}>
        <Heading kicker="How it works" title="Four steps. No nonsense." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 18 }}>
          {steps.map((s) => (
            <div key={s.n} style={{ background: C.bg, border: `1px solid ${C.line}`, borderRadius: 16, padding: 22, position: "relative" }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: `linear-gradient(135deg, ${C.indigoLite}, ${C.indigoDeep})`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14, boxShadow: "0 8px 18px rgba(99,102,241,0.28)" }}><s.ic size={20} color="#fff" strokeWidth={2.3} /></div>
              <div style={{ fontFamily: FB, fontSize: 11.5, fontWeight: 700, color: C.muted, letterSpacing: "0.1em", marginBottom: 6 }}>{s.n}</div>
              <h3 style={{ fontFamily: FH, fontSize: 17, fontWeight: 600, color: C.ink, margin: "0 0 6px" }}>{s.t}</h3>
              <p style={{ fontFamily: FB, fontSize: 13.5, color: C.sub, margin: 0, lineHeight: 1.5 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

/* ---------- what you earn ---------- */
function EarnSection() {
  return (
    <Section bg={C.bg}>
      <Heading kicker="What you earn" title="See the pay before you accept." />
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 20, alignItems: "center" }} className="earn-grid">
        <div style={{ background: `linear-gradient(135deg, ${C.indigoLite}, ${C.indigoDeep})`, borderRadius: 22, padding: 28, color: "#fff", boxShadow: "0 24px 50px -20px rgba(99,102,241,0.5)" }}>
          <div style={{ fontFamily: FB, fontSize: 12.5, fontWeight: 700, opacity: 0.85, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 6 }}>Typical pay per job</div>
          <div style={{ fontFamily: FH, fontWeight: 700, fontSize: 60, lineHeight: 1, letterSpacing: "-0.03em" }}>$12 – $22</div>
          <div style={{ fontFamily: FB, fontSize: 14, opacity: 0.9, marginTop: 6 }}>Set by distance &amp; pickup type · shown up-front, every time</div>
          <div style={{ marginTop: 22, paddingTop: 18, borderTop: "1px solid rgba(255,255,255,0.22)", display: "flex", gap: 24, flexWrap: "wrap" }}>
            <div><div style={{ fontFamily: FH, fontWeight: 700, fontSize: 22 }}>Weekly</div><div style={{ fontFamily: FB, fontSize: 12.5, opacity: 0.85 }}>Direct to your bank</div></div>
            <div><div style={{ fontFamily: FH, fontWeight: 700, fontSize: 22 }}>No fees</div><div style={{ fontFamily: FB, fontSize: 12.5, opacity: 0.85 }}>No deductions, no waiting</div></div>
            <div><div style={{ fontFamily: FH, fontWeight: 700, fontSize: 22 }}>Transparent</div><div style={{ fontFamily: FB, fontSize: 12.5, opacity: 0.85 }}>See pay before accepting</div></div>
          </div>
        </div>
        <div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              [Check, "No surge gimmicks", "Job pays the same whether it's busy or quiet."],
              [Check, "No expiring promises", "Pay is locked in the moment you accept."],
              [Check, "What you see is what you take home", "The pay shown when you accept a job is yours in full — no per-trip fees, no cut from your job price."],
            ].map(([Ic, t, d]) => (
              <div key={t} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: C.emeraldSoft, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}><Ic size={15} color={C.emerald} strokeWidth={3} /></div>
                <div><div style={{ fontFamily: FB, fontWeight: 700, fontSize: 15, color: C.ink }}>{t}</div><div style={{ fontFamily: FB, fontSize: 13.5, color: C.sub, marginTop: 2, lineHeight: 1.5 }}>{d}</div></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 720px){ .earn-grid{ grid-template-columns: 1fr !important; } }`}</style>
    </Section>
  );
}

/* ---------- FAQ ---------- */
const FAQS = [
  { q: "How much can I actually earn?", a: "Most jobs pay between $12 and $22, set by distance and pickup type. You'll always see the pay before accepting a job — what you see is what you get. Your weekly total depends on how many jobs you take." },
  { q: "When do I get paid?", a: "Weekly, straight to your bank account. Earnings from each week go out at the start of the following week — exact arrival depends on your bank, but it's never any later. No fees, no waiting, no minimum thresholds." },
  { q: "What do I need to start?", a: "The right to work in Australia and an ABN. However you plan to deliver — bike, scooter, motorbike, car, van, or on foot — is up to you. Anything that comes with it (licences, registration, insurance) is yours to sort. We handle ID verification and a background check during onboarding." },
  { q: "What about insurance?", a: "Your transport — car, bike, scooter, whatever you use — is yours to insure, same as any other delivery platform. That's the main thing to sort. Anything to do with the parcels themselves is on us." },
  { q: "What happens if a parcel goes missing or is damaged?", a: "Every pickup is photographed, every drop is locked with a code or GPS photo, and the location trail is recorded the whole way — so honest mistakes are easy to prove, and missing parcels are vanishingly rare. In the unusual case where the records show a driver is responsible for a loss, the value can be deducted from their pending earnings before the next payout. Two things to know: that's capped at what you've earned with us that period (we never chase you for more, no debt collectors, no court), and the records have to actually show fault — we don't blame drivers by default. We've designed it this way so honest drivers are protected and the cost of dishonesty isn't spread across everyone else." },
  { q: "Can I run Pakd alongside other delivery work?", a: "Yes — that's exactly how it's designed. If you're already doing delivery trips, keep doing them. Accept the Pakd jobs that fit your route, decline the ones that don't. There's no exclusivity, no minimums, and no penalty for declining. Pakd just adds to the trips you're already making." },
];
function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <Section bg={C.card}>
      <Heading kicker="Common questions" title="Honest answers up-front." />
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        {FAQS.map((f, i) => {
          const on = open === i;
          return (
            <div key={i} style={{ borderBottom: `1px solid ${C.line}` }}>
              <button onClick={() => setOpen(on ? -1 : i)} style={{ width: "100%", textAlign: "left", cursor: "pointer", background: "none", border: "none", padding: "20px 4px", display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontFamily: FB, fontWeight: 700, fontSize: 16, color: C.ink, flex: 1 }}>{f.q}</span>
                <span style={{ width: 30, height: 30, borderRadius: "50%", background: on ? C.indigo : C.bg, color: on ? "#fff" : C.indigo, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all .2s" }}>{on ? <Minus size={16} strokeWidth={2.8} /> : <Plus size={16} strokeWidth={2.8} />}</span>
              </button>
              {on && <div style={{ padding: "0 4px 20px", fontFamily: FB, fontSize: 14.5, color: C.sub, lineHeight: 1.65, animation: "fade .25s ease" }}>{f.a}</div>}
            </div>
          );
        })}
      </div>
    </Section>
  );
}

/* ---------- signup ---------- */
function SignupSection({ refEl, count, onSubmit }) {
  const [f, setF] = useState({ name: "", phone: "", email: "", city: "", note: "", soon: true });
  const [err, setErr] = useState({});
  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));
  const [submitting, setSubmitting] = useState(false);
  const submit = async () => {
    const e = {};
    if (!f.name.trim()) e.name = "Required";
    if (!f.phone.trim() || f.phone.replace(/\D/g, "").length < 8) e.phone = "Enter a valid phone";
    if (!f.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Enter a valid email";
    if (!f.city) e.city = "Pick a city";
    setErr(e);
    if (Object.keys(e).length > 0) return;
    setSubmitting(true);
    try {
      const res = await fetch("https://formspree.io/f/meewkewb", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: f.name, phone: f.phone, email: f.email, city: f.city,
          note: f.note, canStartSoon: f.soon ? "Yes" : "No",
        }),
      });
      if (res.ok) onSubmit(f);
      else setErr({ phone: "Something went wrong. Please try again." });
    } catch {
      setErr({ phone: "Network error. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div ref={refEl} style={{ background: `linear-gradient(180deg, ${C.canvas2} 0%, ${C.canvas} 100%)`, padding: "70px 22px 90px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -100, left: "50%", transform: "translateX(-50%)", width: 540, height: 540, background: `radial-gradient(circle, rgba(124,115,240,0.18), transparent 65%)`, borderRadius: "50%" }} />
      <div style={{ maxWidth: 540, margin: "0 auto", position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.35)", borderRadius: 50, fontFamily: FB, fontSize: 12, fontWeight: 600, color: "#c7c9ff", marginBottom: 18 }}>
            <Sparkles size={13} /> {count === 0 ? "Be one of our founding 100 drivers" : count === 1 ? "1 driver signed up · founding 100" : `${count} drivers signed up · founding 100`}
          </div>
          <h2 style={{ fontFamily: FH, fontSize: "clamp(28px, 4.5vw, 40px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#fff", margin: "0 0 10px" }}>Be a founding driver</h2>
          <p style={{ fontFamily: FB, fontSize: 15.5, color: "#9aa6bd", margin: 0, lineHeight: 1.55 }}>Takes about 90 seconds. We'll be in touch within 48 hours — no spam, ever.</p>
        </div>
        <div style={{ background: C.card, borderRadius: 22, padding: 26, boxShadow: "0 30px 70px -20px rgba(0,0,0,0.6)" }}>
          <Field icon={User} value={f.name} onChange={set("name")} placeholder="Full name" error={err.name} />
          <Field icon={Phone} value={f.phone} onChange={set("phone")} placeholder="Mobile number" type="tel" error={err.phone} />
          <Field icon={Mail} value={f.email} onChange={set("email")} placeholder="Email address" type="email" error={err.email} />
          <Select icon={MapPin} value={f.city} onChange={set("city")} placeholder="City" options={["Sydney", "Melbourne", "Other (let us know below)"]} error={err.city} />
          <textarea value={f.note} onChange={set("note")} placeholder="Anything we should know? (optional)" rows={3} style={{ width: "100%", boxSizing: "border-box", padding: "13px 14px", borderRadius: 12, border: `1.5px solid ${C.line}`, background: C.card, fontFamily: FB, fontSize: 14, color: C.ink, outline: "none", resize: "vertical", marginBottom: 12 }} onFocus={(e) => (e.target.style.borderColor = C.indigo)} onBlur={(e) => (e.target.style.borderColor = C.line)} />
          <label style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 0 16px", cursor: "pointer" }}>
            <span onClick={() => setF((s) => ({ ...s, soon: !s.soon }))} style={{ width: 22, height: 22, borderRadius: 6, border: `1.5px solid ${f.soon ? C.indigo : C.lineHi}`, background: f.soon ? C.indigo : C.card, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{f.soon && <Check size={14} color="#fff" strokeWidth={3.5} />}</span>
            <span style={{ fontFamily: FB, fontSize: 13, color: C.sub }} onClick={() => setF((s) => ({ ...s, soon: !s.soon }))}>I can start within the next 30 days</span>
          </label>
          <button onClick={submit} disabled={submitting} style={{ width: "100%", background: submitting ? C.muted : C.indigo, color: "#fff", border: "none", borderRadius: 13, padding: "16px", fontFamily: FB, fontWeight: 700, fontSize: 16, cursor: submitting ? "not-allowed" : "pointer", boxShadow: "0 10px 30px rgba(99,102,241,0.4)", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>{submitting ? "Sending…" : <>Sign me up <ArrowRight size={18} strokeWidth={2.6} /></>}</button>
          <p style={{ fontFamily: FB, fontSize: 11.5, color: C.muted, textAlign: "center", marginTop: 12, lineHeight: 1.5 }}>By signing up you agree we may contact you about driving for Pakd. We'll never share your details.</p>
        </div>
      </div>
    </div>
  );
}
function Field({ icon: Icon, value, onChange, placeholder, type = "text", error }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <div style={{ position: "relative" }}>
        <Icon size={17} color={C.muted} strokeWidth={2.2} style={{ position: "absolute", left: 14, top: 14 }} />
        <input type={type} value={value} onChange={onChange} placeholder={placeholder} style={{ width: "100%", boxSizing: "border-box", padding: "13px 14px 13px 40px", borderRadius: 12, border: `1.5px solid ${error ? C.red : C.line}`, background: C.card, fontFamily: FB, fontSize: 14, color: C.ink, outline: "none" }} onFocus={(e) => (e.target.style.borderColor = error ? C.red : C.indigo)} onBlur={(e) => (e.target.style.borderColor = error ? C.red : C.line)} />
      </div>
      {error && <div style={{ fontFamily: FB, fontSize: 11.5, color: C.red, marginTop: 4, marginLeft: 4, display: "flex", alignItems: "center", gap: 4 }}><AlertCircle size={12} /> {error}</div>}
    </div>
  );
}
function Select({ icon: Icon, value, onChange, placeholder, options, error }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <div style={{ position: "relative" }}>
        <Icon size={17} color={C.muted} strokeWidth={2.2} style={{ position: "absolute", left: 14, top: 14, pointerEvents: "none" }} />
        <ChevronDown size={17} color={C.muted} strokeWidth={2.2} style={{ position: "absolute", right: 14, top: 14, pointerEvents: "none" }} />
        <select value={value} onChange={onChange} style={{ width: "100%", boxSizing: "border-box", padding: "13px 38px 13px 40px", borderRadius: 12, border: `1.5px solid ${error ? C.red : C.line}`, background: C.card, fontFamily: FB, fontSize: 14, color: value ? C.ink : C.muted, outline: "none", appearance: "none", cursor: "pointer" }} onFocus={(e) => (e.target.style.borderColor = error ? C.red : C.indigo)} onBlur={(e) => (e.target.style.borderColor = error ? C.red : C.line)}>
          <option value="">{placeholder}</option>
          {options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>
      {error && <div style={{ fontFamily: FB, fontSize: 11.5, color: C.red, marginTop: 4, marginLeft: 4, display: "flex", alignItems: "center", gap: 4 }}><AlertCircle size={12} /> {error}</div>}
    </div>
  );
}

/* ---------- thank you ---------- */
function ThankYou({ name, city, position }) {
  return (
    <div style={{ background: `linear-gradient(180deg, ${C.canvas2} 0%, ${C.canvas} 100%)`, padding: "90px 22px 110px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -120, left: "50%", transform: "translateX(-50%)", width: 540, height: 540, background: `radial-gradient(circle, rgba(16,185,129,0.18), transparent 65%)`, borderRadius: "50%" }} />
      <div style={{ maxWidth: 540, margin: "0 auto", position: "relative", textAlign: "center", color: "#fff" }}>
        <div style={{ width: 84, height: 84, borderRadius: "50%", background: `linear-gradient(135deg, ${C.emerald}, #0d9468)`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", boxShadow: "0 18px 40px rgba(16,185,129,0.5)", animation: "pop .5s ease" }}><Check size={42} color="#fff" strokeWidth={3} /></div>
        <h2 style={{ fontFamily: FH, fontSize: "clamp(28px, 4.5vw, 40px)", fontWeight: 700, letterSpacing: "-0.03em", margin: "0 0 12px" }}>You're in, {name.split(" ")[0]}.</h2>
        <p style={{ fontFamily: FB, fontSize: 16, color: "#c7c9ff", margin: "0 0 28px", lineHeight: 1.55 }}>You're driver <strong style={{ color: "#fff" }}>#{position}</strong> of our founding 100{city && city !== "Other (let us know below)" ? ` in ${city}` : ""}.</p>
        <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 18, padding: 24, textAlign: "left" }}>
          <div style={{ fontFamily: FB, fontWeight: 700, fontSize: 14, color: "#fff", marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}><Clock size={16} color={C.indigoLite} /> What happens next</div>
          {[["We'll text you within 48 hours", "From a real human, not a bot."], ["Quick identity & background check", "Standard for any delivery platform."], ["Start your first delivery soon after", "We're launching in waves — founders go first."]].map(([t, d], i) => (
            <div key={i} style={{ display: "flex", gap: 12, marginBottom: i < 2 ? 14 : 0 }}>
              <div style={{ width: 26, height: 26, borderRadius: "50%", background: C.indigo, color: "#fff", fontFamily: FB, fontWeight: 700, fontSize: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</div>
              <div><div style={{ fontFamily: FB, fontWeight: 600, fontSize: 14, color: "#fff" }}>{t}</div><div style={{ fontFamily: FB, fontSize: 13, color: "#9aa6bd", marginTop: 2 }}>{d}</div></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- footer ---------- */
function Footer() {
  return (
    <div style={{ background: C.canvas, borderTop: "1px solid rgba(255,255,255,0.06)", padding: "30px 22px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}><PakdMark size={22} /><span style={{ fontFamily: FB, fontWeight: 800, fontSize: 16, color: "#fff" }}>Pakd</span></div>
        <span style={{ fontFamily: FB, fontSize: 12.5, color: "#5b6478" }}>© Pakd · Australia · built for the trips that wouldn't otherwise happen.</span>
      </div>
    </div>
  );
}

/* ---------- layout helpers ---------- */
function Section({ children, bg }) { return <div style={{ background: bg, padding: "72px 22px" }}><div style={{ maxWidth: 1100, margin: "0 auto" }}>{children}</div></div>; }
function Heading({ kicker, title }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 36 }}>
      <div style={{ fontFamily: FB, fontWeight: 700, fontSize: 12, color: C.indigo, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>{kicker}</div>
      <h2 style={{ fontFamily: FH, fontSize: "clamp(28px, 4.5vw, 40px)", fontWeight: 700, letterSpacing: "-0.03em", color: C.ink, margin: 0 }}>{title}</h2>
    </div>
  );
}

/* =====================================================================
   APP
   ===================================================================== */
export default function App() {
  const [submitted, setSubmitted] = useState(null);
  const [count, setCount] = useState(0);
  const signupRef = useRef(null);
  const howRef = useRef(null);
  const alongsideRef = useRef(null);
  const scrollTo = (r) => r.current && r.current.scrollIntoView({ behavior: "smooth", block: "start" });

  const handleSubmit = (f) => {
    setCount((c) => c + 1);
    setSubmitted({ ...f, position: count + 1 });
    setTimeout(() => signupRef.current && signupRef.current.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  };

  return (
    <div style={{ fontFamily: FB, background: C.canvas, minHeight: "100vh" }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Sora:wght@500;600;700&display=swap" rel="stylesheet" />
      <style>{`
        @keyframes fade{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
        @keyframes pop{0%{transform:scale(.6);opacity:0}60%{transform:scale(1.08)}100%{transform:scale(1);opacity:1}}
        *{box-sizing:border-box} html{scroll-behavior:smooth}
        select option { color: #191d21; }
      `}</style>
      <TopNav scrollToSignup={() => scrollTo(signupRef)} />
      <Hero scrollToSignup={() => scrollTo(signupRef)} scrollToHow={() => scrollTo(howRef)} scrollToAlongside={() => scrollTo(alongsideRef)} />
      <WhyDrive />
      <HowItWorks refEl={howRef} />
      <EarnSection />
      <AlongsideSection refEl={alongsideRef} scrollToSignup={() => scrollTo(signupRef)} />
      <FAQ />
      {submitted ? <ThankYou name={submitted.name} city={submitted.city} position={submitted.position} /> : <SignupSection refEl={signupRef} count={count} onSubmit={handleSubmit} />}
      <Footer />
    </div>
  );
}
