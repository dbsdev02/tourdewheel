import { useState, useEffect, useRef } from "react";

// ── CUSTOM STYLES injected once ─────────────────────────────────────────────
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=Barlow:ital,wght@0,300;0,400;0,500;0,600;1,300&family=JetBrains+Mono:wght@400;500&display=swap');

  :root {
    --navy: #0A1628;
    --navy-mid: #122040;
    --steel: #1B4F72;
    --blue: #2471A3;
    --blue-lt: #3498DB;
    --gold: #D4A017;
    --gold-lt: #F1C40F;
    --green: #1E8449;
    --green-lt: #27AE60;
    --wa: #25D366;
    --red: #C0392B;
    --red-lt: #E74C3C;
    --light: #EAF2FB;
    --pale: #F4F9FF;
    --off: #F8FAFB;
    --mid: #7F8C8D;
    --dark: #1A1A2E;
    --text: #2C3E50;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { font-family: 'Barlow', sans-serif; background: var(--off); color: var(--text); overflow-x: hidden; }

  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: var(--navy); }
  ::-webkit-scrollbar-thumb { background: var(--gold); border-radius: 2px; }

  .font-display { font-family: 'Barlow Condensed', sans-serif; }
  .font-mono { font-family: 'JetBrains Mono', monospace; }
  .font-body { font-family: 'Barlow', sans-serif; }

  @keyframes pulse-dot {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.4; transform: scale(1.3); }
  }
  @keyframes bounce-in {
    0% { transform: scale(0) rotate(-20deg); opacity: 0; }
    70% { transform: scale(1.15) rotate(3deg); }
    100% { transform: scale(1) rotate(0); opacity: 1; }
  }
  @keyframes fadeUp {
    to { opacity: 1; transform: translateY(0); }
  }

  .pulse-dot { animation: pulse-dot 2s infinite; }
  .bounce-in { animation: bounce-in 0.6s 1s both; }
  .fade-up { opacity: 0; transform: translateY(28px); animation: fadeUp 0.7s ease forwards; }
  .delay-1 { animation-delay: 0.1s; }
  .delay-2 { animation-delay: 0.25s; }
  .delay-3 { animation-delay: 0.4s; }
  .delay-4 { animation-delay: 0.55s; }
  .delay-5 { animation-delay: 0.7s; }

  .hero-grid-bg {
    background-image:
      linear-gradient(rgba(27,79,114,0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(27,79,114,0.08) 1px, transparent 1px);
    background-size: 60px 60px;
  }

  input[type='range'] {
    -webkit-appearance: none;
    height: 4px;
    border-radius: 2px;
    outline: none;
    cursor: pointer;
  }
  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 18px; height: 18px;
    border-radius: 50%;
    background: var(--gold);
    cursor: pointer;
    box-shadow: 0 0 8px rgba(212,160,23,0.5);
  }

  .how-line::before {
    content: '';
    position: absolute;
    top: 40px; left: 12.5%; right: 12.5%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(212,160,23,0.4) 20%, rgba(212,160,23,0.4) 80%, transparent);
  }

  .plan-card-featured { border: 1px solid var(--gold); box-shadow: 0 0 0 1px var(--gold); }
  .plan-card-default { border: 1px solid rgba(0,0,0,0.07); }

  .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
  .reveal.visible { opacity: 1; transform: translateY(0); }

  .nav-cta-hover:hover { transform: translateY(-1px); box-shadow: 0 4px 16px rgba(37,211,102,0.3); }
  .cta-primary-hover:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(37,211,102,0.35); }
  .cta-secondary-hover:hover { border-color: rgba(255,255,255,0.5); color: white; }
  .plan-card-hover:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(0,0,0,0.1); }
  .b2b-card-hover:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(0,0,0,0.09); }
  .pain-row-hover:hover { border-color: rgba(255,255,255,0.12); }
  .ft-row-hover:hover { background: var(--pale); }
  .inc-item-hover:hover { background: rgba(255,255,255,0.07); }
  .footer-link-hover:hover { color: rgba(255,255,255,0.9); }
  .nav-link-hover:hover { color: var(--gold); }
  .plan-cta-green { background: var(--wa); color: white; box-shadow: 0 4px 16px rgba(37,211,102,0.2); }
  .plan-cta-green:hover { box-shadow: 0 8px 28px rgba(37,211,102,0.4); transform: translateY(-1px); }
  .plan-cta-outline { border: 1.5px solid var(--steel); color: var(--steel); }
  .plan-cta-outline:hover { background: var(--steel); color: white; }
  .b2b-link-hover:hover { gap: 10px; color: var(--blue); }
  .fmd-card-hover:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.08); }
  .testi-card { background: var(--pale); border: 1px solid rgba(0,0,0,0.06); border-radius: 10px; padding: 28px; position: relative; }
`;

// ── SCROLL REVEAL HOOK ──────────────────────────────────────────────────────
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

// ── NAV ─────────────────────────────────────────────────────────────────────
function Nav() {
  return (
    <nav style={{ background: "rgba(10,22,40,0.97)", borderBottom: "1px solid rgba(212,160,23,0.2)" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md flex items-center justify-between px-[5%] h-16">
      <a href="#" className="font-display font-black text-[1.6rem] tracking-[0.04em] text-white no-underline flex items-center gap-2.5">
        TOURDEWHEEL<span style={{ color: "var(--gold)" }}>.</span>
        <span className="font-mono text-[0.55rem] tracking-[0.1em]"
          style={{ color: "var(--gold)", background: "rgba(212,160,23,0.12)", border: "1px solid rgba(212,160,23,0.3)", padding: "2px 6px", borderRadius: 2 }}>
          STRASBOURG
        </span>
      </a>
      <ul className="hidden md:flex gap-8 list-none">
        {[["#livreur","Livreurs"],["#plans","Formules"],["#entreprises","Entreprises"],["#fmd","FMD"],["#tarifs","Tarifs"]].map(([href,label]) => (
          <li key={href}>
            <a href={href} className="font-body font-medium text-[0.85rem] tracking-[0.06em] uppercase text-white/70 no-underline transition-colors nav-link-hover">{label}</a>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-3">
        <a href="#" className="font-mono text-[0.7rem] text-white/50 no-underline px-2.5 py-1 rounded-[3px]"
          style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
          FR | عر
        </a>
        <a href="https://wa.me/33XXXXXXXXX"
          className="flex items-center gap-1.5 font-body font-semibold text-[0.82rem] tracking-[0.04em] px-[18px] py-2.5 rounded text-white no-underline transition-all nav-cta-hover"
          style={{ background: "var(--wa)" }}>
          💬 Obtenir un devis
        </a>
      </div>
    </nav>
  );
}

// ── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
  const [years, setYears] = useState(3);
  const COMP_MONTHLY = 89;
  const TDW_TOTAL = 1500;
  const months = years * 12;
  const comp = COMP_MONTHLY * months;
  const savings = comp - TDW_TOTAL;
  const pct = Math.round(((years - 1) / 4) * 100);

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center pt-24 pb-20 px-[5%]"
      style={{ background: "var(--navy)" }}>
      <div className="absolute inset-0 hero-grid-bg" />
      <div className="absolute pointer-events-none" style={{ width: 700, height: 700, background: "radial-gradient(circle, rgba(36,113,163,0.18) 0%, transparent 70%)", top: -200, right: -100 }} />
      <div className="absolute pointer-events-none" style={{ width: 400, height: 400, background: "radial-gradient(circle, rgba(212,160,23,0.08) 0%, transparent 70%)", bottom: 0, left: "10%" }} />

      <div className="relative z-10 max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-20 items-center">
        {/* LEFT */}
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.15em] uppercase mb-7 px-3 py-1.5 rounded-[2px] fade-up"
            style={{ color: "var(--gold)", background: "rgba(212,160,23,0.1)", border: "1px solid rgba(212,160,23,0.25)" }}>
            <span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: "var(--gold)" }} />
            Premier opérateur professionnel à Strasbourg
          </div>
          <h1 className="font-display font-black leading-[0.92] tracking-[-0.01em] text-white mb-7 fade-up delay-1"
            style={{ fontSize: "clamp(3.5rem, 7vw, 6.5rem)" }}>
            Votre vélo.
            <span className="block" style={{ color: "var(--gold)" }}>Votre propriété.</span>
            <span className="block font-light italic text-white/50 tracking-[0.02em]" style={{ fontSize: "0.65em", marginTop: 8 }}>
              en 12 mois. tout inclus.
            </span>
          </h1>
          <p className="text-[1.15rem] font-light leading-[1.7] text-white/65 max-w-[560px] mb-10 fade-up delay-2">
            Le seul programme à Strasbourg qui vous fait passer de{" "}
            <strong className="text-white/90 font-medium">locataire à propriétaire en 12 mois.</strong>{" "}
            Maintenance, assurance, GPS et réparation locale inclus.{" "}
            <strong className="text-white/90 font-medium">Jamais de surprise sur votre facture.</strong>
          </p>
          <div className="flex gap-3.5 flex-wrap mb-14 fade-up delay-3">
            <a href="https://wa.me/33XXXXXXXXX"
              className="flex items-center gap-2.5 font-display font-bold text-[1.05rem] tracking-[0.06em] uppercase px-8 py-4 rounded text-white no-underline transition-all cta-primary-hover"
              style={{ background: "var(--wa)" }}>
              💬 Démarrer sur WhatsApp
            </a>
            <a href="#plans"
              className="flex items-center gap-2 font-display font-semibold text-[1.05rem] tracking-[0.06em] uppercase px-7 py-4 rounded no-underline transition-all cta-secondary-hover"
              style={{ color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.2)" }}>
              Voir les formules →
            </a>
          </div>
          <div className="flex flex-wrap gap-5 fade-up delay-4">
            {["Maintenance incluse","Assurance incluse","GPS IoT inclus","Réparation J+0","Propriété en 12 mois"].map(t => (
              <div key={t} className="flex items-center gap-1.5 text-[0.82rem] font-medium text-white/55">
                <div className="w-[18px] h-[18px] rounded-full flex items-center justify-center text-[0.6rem] flex-shrink-0"
                  style={{ background: "rgba(30,132,73,0.25)", border: "1px solid var(--green-lt)", color: "var(--green-lt)" }}>✓</div>
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* CALCULATOR CARD */}
        <div className="relative rounded-xl p-9 backdrop-blur-md overflow-hidden fade-up delay-3"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="absolute top-0 left-0 right-0 h-[2px]"
            style={{ background: "linear-gradient(90deg, var(--gold), var(--blue-lt), transparent)" }} />
          <div className="font-mono text-[0.65rem] tracking-[0.15em] uppercase mb-5" style={{ color: "var(--gold)" }}>
            // Calculateur d'économies
          </div>
          <div className="grid grid-cols-[1fr_auto_1fr] gap-3 mb-5">
            <div className="text-center">
              <div className="font-display font-black text-[2.4rem] leading-none mb-1" style={{ color: "var(--red-lt)" }}>
                €{comp.toLocaleString("fr-FR")}
              </div>
              <div className="text-[0.72rem] font-light text-white/50 leading-snug">Location pure<br /><small>aucune propriété</small></div>
            </div>
            <div className="font-display font-black text-[1.4rem] text-white/20 pt-2">VS</div>
            <div className="text-center">
              <div className="font-display font-black text-[2.4rem] leading-none mb-1" style={{ color: "var(--green-lt)" }}>
                €{TDW_TOTAL.toLocaleString("fr-FR")}
              </div>
              <div className="text-[0.72rem] font-light text-white/50 leading-snug">TourDeWheel<br /><small>+ vous possédez</small></div>
            </div>
          </div>
          <div className="rounded-lg px-5 py-4 text-center mb-5"
            style={{ background: "linear-gradient(135deg, var(--gold), #E67E22)" }}>
            <div className="font-mono text-[0.62rem] tracking-[0.12em] uppercase mb-1" style={{ color: "rgba(0,0,0,0.65)" }}>
              Vous économisez
            </div>
            <div className="font-display font-black text-[2.8rem] leading-none" style={{ color: "var(--navy)" }}>
              €{savings.toLocaleString("fr-FR")}
            </div>
            <div className="text-[0.75rem] mt-0.5" style={{ color: "rgba(0,0,0,0.6)" }}>
              sur {years} an{years > 1 ? "s" : ""} — et vous avez le vélo
            </div>
          </div>
          <div className="flex justify-between text-[0.78rem] text-white/50 mb-2.5">
            <span>Durée de location</span>
            <span className="font-mono" style={{ color: "var(--gold)" }}>{years} an{years > 1 ? "s" : ""}</span>
          </div>
          <div className="flex justify-between font-mono text-[0.65rem] text-white/40 mb-1">
            {["1 an","2 ans","3 ans","4 ans","5 ans"].map(l => <span key={l}>{l}</span>)}
          </div>
          <input type="range" min={1} max={5} value={years} step={1}
            onChange={e => setYears(Number(e.target.value))}
            className="w-full mb-4"
            style={{ background: `linear-gradient(90deg, var(--green) ${pct}%, rgba(255,255,255,0.1) ${pct}%)` }} />
          <p className="text-[0.72rem] text-white/35 text-center italic mt-1">
            Concurrent : €89/mois × durée. TourDeWheel : €1,500 fixe puis €0.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── PAIN vs GAIN ─────────────────────────────────────────────────────────────
const painData = [
  ["Panne = journée perdue = zéro revenu. Support à Paris, atelier à 4h de route.",
   "Réparation locale le même jour à Strasbourg — vous reprenez la route."],
  ["€89/mois × 5 ans = €5,340 dépensés — et vous ne possédez toujours rien.",
   "12 mois × €125 = €1,500 — le vélo vous appartient définitivement."],
  ["Coûts cachés : réparations non couvertes, assurance séparée, GPS en option payante.",
   "€125/mois. Tout inclus. Jamais de surprise. Un seul montant, une seule facture."],
  ["Contrat uniquement en français — compréhension difficile pour les riders arabophone.",
   "Contrat disponible en français ET en arabe. Équipe locale qui vous parle."],
];

function PainSection() {
  return (
    <section className="px-[5%] py-24" id="livreur" style={{ background: "var(--navy-mid)" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="font-mono text-[0.68rem] tracking-[0.2em] uppercase mb-3" style={{ color: "var(--blue)" }}>
          // Pourquoi TourDeWheel
        </div>
        <h2 className="font-display font-black leading-none tracking-[-0.01em] text-white mb-5"
          style={{ fontSize: "clamp(2.2rem, 4vw, 3.6rem)" }}>
          On connaît votre quotidien.
        </h2>
        <p className="text-[1.05rem] font-light leading-[1.7] text-white/60 max-w-[600px] mb-14">
          Vous livrez tous les jours. Votre vélo doit être aussi fiable que vous.
        </p>
        <div className="flex flex-col gap-3">
          {painData.map(([bad, good], i) => {
            const ref = useReveal();
            return (
              <div key={i} ref={ref}
                className="reveal grid grid-cols-[1fr_60px_1fr] rounded-lg overflow-hidden pain-row-hover transition-colors"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="p-5 px-6 flex items-center gap-3.5 text-[0.9rem] leading-[1.5]" style={{ color: "rgba(255,100,80,0.85)" }}>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-[0.8rem] font-bold flex-shrink-0"
                    style={{ background: "rgba(192,57,43,0.2)", color: "#E74C3C" }}>✗</div>
                  {bad}
                </div>
                <div className="flex items-center justify-center font-display font-extrabold text-base text-white/15"
                  style={{ borderLeft: "1px solid rgba(255,255,255,0.05)", borderRight: "1px solid rgba(255,255,255,0.05)" }}>
                  VS
                </div>
                <div className="p-5 px-6 flex items-center gap-3.5 text-[0.9rem] leading-[1.5]" style={{ color: "rgba(39,174,96,0.9)" }}>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-[0.8rem] font-bold flex-shrink-0"
                    style={{ background: "rgba(30,132,73,0.2)", color: "#27AE60" }}>✓</div>
                  <strong>{good}</strong>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── PLANS ────────────────────────────────────────────────────────────────────
function PlansSection() {
  const plans = [
    {
      featured: true,
      badge: "Recommandé",
      icon: "🏆",
      name: "Lease-to-Own",
      tagline: "Devenez propriétaire en 12 mois",
      amount: "€125",
      unit: "/mois",
      period: "TTC · Tout inclus · Engagement 12 mois",
      features: [
        "Maintenance & entretien inclus",
        "Assurance vol & dommages incluse",
        "GPS IoT temps réel inclus",
        "Réparation locale J+0 à Strasbourg",
        [true, "Propriété transférée au mois 12"],
        "Résiliation possible (pénalité unique €200)",
        "Contrat bilingue FR + AR",
      ],
      ctaLabel: "💬 Je veux être propriétaire",
      ctaClass: "plan-cta-green",
      ctaHref: "https://wa.me/33XXXXXXXXX",
    },
    {
      icon: "🔄",
      name: "Location Mensuelle",
      tagline: "Flexibilité totale, sans engagement",
      amount: "€100",
      unit: "/mois",
      period: "TTC · Tout inclus · Sans engagement",
      features: [
        "Maintenance & entretien inclus",
        "Assurance vol & dommages incluse",
        "GPS IoT temps réel inclus",
        "Réparation locale J+0 à Strasbourg",
        "Préavis résiliation : 30 jours",
        "Contrat bilingue FR + AR",
        [false, "Propriété non incluse"],
      ],
      ctaLabel: "Louer ce mois-ci →",
      ctaClass: "plan-cta-outline",
      ctaHref: "https://wa.me/33XXXXXXXXX",
    },
    {
      icon: "🏢",
      name: "Flotte B2B",
      tagline: "Pour restaurants, logistique, artisans",
      amount: "€100",
      unit: "/vélo",
      period: "HT · À partir de 3 vélos · Engagement 12 mois",
      features: [
        "Maintenance & réparations incluses",
        "Assurance flotte complète",
        "GPS + tableau de bord web",
        "Remplacement vélo sous 24h",
        [true, "Attestations FMD pour vos salariés"],
        "Réduction IS 25% + TVA récupérable",
        "Facture mensuelle unique",
      ],
      ctaLabel: "Demander un devis flotte →",
      ctaClass: "plan-cta-outline",
      ctaHref: "#entreprises",
    },
  ];

  return (
    <section className="px-[5%] py-24" id="plans" style={{ background: "var(--pale)" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="font-mono text-[0.68rem] tracking-[0.2em] uppercase mb-3" style={{ color: "var(--blue)" }}>
          // Nos formules
        </div>
        <h2 className="font-display font-black leading-none tracking-[-0.01em] mb-5" style={{ fontSize: "clamp(2.2rem,4vw,3.6rem)", color: "var(--navy)" }}>
          Choisissez votre formule.
        </h2>
        <p className="text-[1.05rem] font-light leading-[1.7] mb-14" style={{ color: "var(--mid)", maxWidth: 600 }}>
          Deux options pour les livreurs indépendants, une solution complète pour les entreprises.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p, i) => {
            const ref = useReveal();
            return (
              <div key={i} ref={ref}
                className={`reveal bg-white rounded-xl overflow-hidden relative transition-all plan-card-hover ${p.featured ? "plan-card-featured" : "plan-card-default"}`}>
                {p.badge && (
                  <div className="absolute top-[-1px] right-6 font-mono text-[0.6rem] font-medium tracking-[0.12em] uppercase px-2.5 py-1 rounded-b-md"
                    style={{ background: "var(--gold)", color: "var(--navy)" }}>
                    {p.badge}
                  </div>
                )}
                <div className="px-7 pt-7 pb-5" style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                  <div className="text-[1.8rem] mb-3">{p.icon}</div>
                  <div className="font-display font-extrabold text-[1.4rem] tracking-[0.02em] uppercase mb-1" style={{ color: "var(--navy)" }}>
                    {p.name}
                  </div>
                  <div className="text-[0.82rem] font-light" style={{ color: "var(--mid)" }}>{p.tagline}</div>
                </div>
                <div className="px-7 py-5" style={{ background: "var(--pale)" }}>
                  <div className="font-display font-black text-[3rem] leading-none" style={{ color: "var(--navy)" }}>
                    {p.amount}<span className="text-[1.1rem] font-normal" style={{ color: "var(--mid)" }}>{p.unit}</span>
                  </div>
                  <div className="text-[0.8rem] mt-1" style={{ color: "var(--mid)" }}>{p.period}</div>
                </div>
                <div className="px-7 py-5 flex flex-col gap-2.5">
                  {p.features.map((f, j) => {
                    const isTuple = Array.isArray(f);
                    const active = isTuple ? f[0] : true;
                    const label = isTuple ? f[1] : f;
                    return (
                      <div key={j} className="flex items-start gap-2.5 text-[0.86rem] leading-snug"
                        style={{ color: "var(--text)", opacity: active ? 1 : 0.4 }}>
                        <div className="w-[18px] h-[18px] rounded-full flex items-center justify-center text-[0.6rem] font-bold flex-shrink-0 mt-[1px]"
                          style={{ background: active ? "rgba(30,132,73,0.12)" : "rgba(0,0,0,0.06)", color: active ? "var(--green)" : "#999" }}>
                          {active ? "✓" : "–"}
                        </div>
                        {isTuple && active ? <strong>{label}</strong> : label}
                      </div>
                    );
                  })}
                </div>
                <a href={p.ctaHref}
                  className={`mx-7 mb-7 block text-center py-3.5 rounded-md font-display font-bold text-[0.95rem] tracking-[0.06em] uppercase no-underline transition-all ${p.ctaClass}`}>
                  {p.ctaLabel}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── ALL-INCLUSIVE STRIP ───────────────────────────────────────────────────────
const inclItems = [
  { emoji: "🔧", name: "Maintenance", sub: "Entretien préventif planifié" },
  { emoji: "🔒", name: "Assurance", sub: "Vol, casse & responsabilité" },
  { emoji: "📍", name: "GPS IoT", sub: "Temps réel sur votre vélo" },
  { emoji: "🛠", name: "Réparation J+0", sub: "Atelier local Strasbourg" },
  { emoji: "📄", name: "Contrat Bilingue", sub: "Français + Arabe" },
  { emoji: "🏆", name: "Propriété", sub: "Le vélo est à vous au mois 12", highlight: true },
];

function InclusiveStrip() {
  return (
    <div className="px-[5%] py-16" style={{ background: "var(--navy)" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-center mb-3" style={{ color: "var(--gold)" }}>
          // Toujours inclus — sans discussion
        </div>
        <h2 className="font-display font-black text-center text-white mb-12 tracking-[-0.01em]"
          style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)" }}>
          €125/mois. Pas un centime de plus.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-[1px] rounded-lg overflow-hidden"
          style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.06)" }}>
          {inclItems.map(item => (
            <div key={item.name}
              className="text-center px-4 py-7 transition-colors inc-item-hover"
              style={{ background: item.highlight ? "rgba(30,132,73,0.15)" : "rgba(255,255,255,0.03)" }}>
              <div className="text-[2rem] mb-3">{item.emoji}</div>
              <div className="font-display font-bold text-[0.85rem] tracking-[0.04em] uppercase mb-1"
                style={{ color: item.highlight ? "var(--green-lt)" : "white" }}>
                {item.name}
              </div>
              <div className="text-[0.72rem] text-white/40 leading-snug">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── STATS ─────────────────────────────────────────────────────────────────────
const stats = [
  { num: "80", label: "Vélos disponibles\ndès juin 2026", color: "var(--gold)" },
  { num: "J+0", label: "Réparation locale\nà Strasbourg", color: "var(--blue-lt)" },
  { num: "12", label: "Mois pour devenir\npropriétaire", color: "var(--green-lt)" },
  { num: "100%", label: "Tout inclus\nsans surprise", color: "white" },
];

function StatsSection() {
  return (
    <div className="px-[5%] py-[72px]" style={{ background: "var(--navy-mid)" }}>
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-[1px] rounded-lg overflow-hidden"
        style={{ background: "rgba(255,255,255,0.06)" }}>
        {stats.map((s, i) => {
          const ref = useReveal();
          return (
            <div key={i} ref={ref} className="reveal text-center px-7 py-9" style={{ background: "rgba(255,255,255,0.03)" }}>
              <div className="font-display font-black text-[3.2rem] leading-none mb-2" style={{ color: s.color }}>
                {s.num}
              </div>
              <div className="text-[0.82rem] text-white/45 leading-snug whitespace-pre-line">{s.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── FMD SECTION ───────────────────────────────────────────────────────────────
const fmdCards = [
  { type: "blue", label: "Forfait Mobilités Durables", title: "Jusqu'à 600 €/an", amount: "600€", desc: "Par salarié, exonéré d'impôts et de charges sociales. 900€ en cumul avec abonnement transport." },
  { type: "green", label: "Réduction IS vélo de fonction", title: "IS réduit de 25%", amount: "25%", desc: "Sur les frais de location ou d'achat d'une flotte de vélos mise à disposition des salariés. Valable jusqu'en 2027." },
  { type: "gold", label: "Nouveau — Rescrit DGFiP Avril 2025", title: "TVA récupérable", amount: "20%", desc: "Depuis le 30 avril 2025, la TVA est récupérable sur les loyers de vélos de fonction. Une avancée majeure." },
  { type: "navy", label: "Avantage en nature", title: "Zéro cotisation", amount: "€0", desc: "Le vélo de fonction n'est pas un avantage en nature selon l'URSSAF. Aucune cotisation sociale supplémentaire." },
];
const fmdGradients = {
  blue: "linear-gradient(90deg, var(--blue), var(--blue-lt))",
  green: "linear-gradient(90deg, var(--green), var(--green-lt))",
  gold: "linear-gradient(90deg, var(--gold), #E67E22)",
  navy: "linear-gradient(90deg, var(--navy), var(--steel))",
};

function FmdSection() {
  return (
    <section className="px-[5%] py-24" id="fmd" style={{ background: "white" }}>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <div className="font-mono text-[0.68rem] tracking-[0.2em] uppercase mb-3" style={{ color: "var(--blue)" }}>
            // Forfait Mobilités Durables
          </div>
          <h2 className="font-display font-black leading-none tracking-[-0.01em] mb-5" style={{ fontSize: "clamp(2.2rem,4vw,3.6rem)", color: "var(--navy)" }}>
            Votre entreprise finance le vélo. L'État paie une partie.
          </h2>
          <p className="text-[1.05rem] font-light leading-[1.7] mb-8" style={{ color: "var(--mid)" }}>
            Trois dispositifs cumulables pour réduire votre coût réel à moins de €71/vélo/mois.
          </p>
          <div className="rounded-xl p-7 relative overflow-hidden" style={{ background: "var(--navy)" }}>
            <div className="font-mono text-[0.62rem] tracking-[0.15em] uppercase mb-4" style={{ color: "var(--gold)" }}>
              // Simulation — flotte de 10 vélos
            </div>
            <div className="grid grid-cols-2 gap-5">
              {[
                { title: "Sans optimisation", bad: true, rows: [["10 vélos × €120 × 12","€14,400",true],["TVA non récupérée","— €0",true],["Réduction IS","— €0",true]], total: ["Coût réel","€14,400",true] },
                { title: "Avec TourDeWheel + FMD", bad: false, rows: [["10 vélos × €120 × 12","€14,400",false],["TVA récupérée (20%)","−€2,880",false,true],["Réduction IS (25%)","−€3,000",false,true]], total: ["Coût réel","€8,520",false,true] },
              ].map((col, ci) => (
                <div key={ci}>
                  <div className={`text-[0.78rem] font-medium mb-3`} style={{ color: col.bad ? "rgba(231,76,60,0.8)" : "rgba(39,174,96,0.8)" }}>
                    {col.title}
                  </div>
                  {col.rows.map(([label, val, isRed, isGreen], ri) => (
                    <div key={ri} className="flex justify-between text-[0.8rem] leading-[1.8]" style={{ color: "rgba(255,255,255,0.55)" }}>
                      <span>{label}</span>
                      <span className="font-mono font-medium" style={{ color: isRed ? "#E74C3C" : isGreen ? "#27AE60" : undefined }}>{val}</span>
                    </div>
                  ))}
                  <div className="flex justify-between font-display font-extrabold text-base mt-2 pt-2.5"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)" }}>
                    <span>{col.total[0]}</span>
                    <span style={{ color: col.total[2] ? "#E74C3C" : col.total[3] ? "#27AE60" : undefined }}>{col.total[1]}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-4">
            {fmdCards.map((c, i) => {
              const ref = useReveal();
              return (
                <div key={i} ref={ref}
                  className="reveal relative rounded-xl p-7 overflow-hidden transition-shadow fmd-card-hover"
                  style={{ background: "var(--pale)", border: "1px solid rgba(0,0,0,0.06)" }}>
                  <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: fmdGradients[c.type] }} />
                  <div className="font-mono text-[0.62rem] tracking-[0.15em] uppercase mb-2.5" style={{ color: "var(--mid)" }}>{c.label}</div>
                  <div className="font-display font-extrabold text-[1.2rem] uppercase tracking-[0.02em] mb-2.5" style={{ color: "var(--navy)" }}>{c.title}</div>
                  <div className="font-display font-black text-[2.8rem] leading-none mb-1.5" style={{ color: "var(--steel)" }}>{c.amount}</div>
                  <p className="text-[0.86rem] leading-[1.6]" style={{ color: "var(--mid)" }}>{c.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-5">
            <a href="#" className="block text-center py-3.5 rounded-md font-display font-bold text-[0.9rem] tracking-[0.06em] uppercase no-underline transition-all plan-cta-outline"
              style={{ border: "1.5px solid var(--steel)", color: "var(--steel)" }}
              onMouseOver={e => { e.currentTarget.style.background = "var(--steel)"; e.currentTarget.style.color = "white"; }}
              onMouseOut={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--steel)"; }}>
              → Obtenir mon dossier FMD complet (gratuit)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── B2B SECTION ───────────────────────────────────────────────────────────────
const b2bCards = [
  { ico: "🍽", name: "Restaurateurs & Chaînes", desc: "3 à 20 vélos pour votre équipe de livraison. Contrat flotte unique, facturation mensuelle, maintenance incluse. Vos livreurs ne perdent plus de temps avec des pannes.", link: "Devis restauration" },
  { ico: "🚚", name: "Transport & Logistique", desc: "Flottes de 10 à 50 vélos pour la livraison du dernier kilomètre. GPS temps réel sur chaque véhicule. Reporting mensuel d'utilisation et tableau de bord web.", link: "Devis logistique" },
  { ico: "🏗", name: "Artisans & Professions", desc: "Vélo électrique pour vos déplacements professionnels. Éligible vélo de fonction — réduction IS 25% et TVA récupérable depuis avril 2025.", link: "Devis artisan" },
];

const fleetRows = [
  ["3–5 vélos","€120 / vélo / mois","12 mois","Disponible",false],
  ["6–15 vélos","€110 / vélo / mois","12 mois","Disponible",false],
  ["16–50 vélos","€100 / vélo / mois","12 mois","Sur devis",false],
  ["50+ vélos","Tarif négocié","Flexible","Contactez-nous",true],
];

function B2bSection() {
  return (
    <section className="px-[5%] py-24" id="entreprises" style={{ background: "var(--pale)" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="font-mono text-[0.68rem] tracking-[0.2em] uppercase mb-3" style={{ color: "var(--blue)" }}>// Solutions entreprises</div>
        <h2 className="font-display font-black leading-none tracking-[-0.01em] mb-5" style={{ fontSize: "clamp(2.2rem,4vw,3.6rem)", color: "var(--navy)" }}>
          Une flotte. Un contrat. Zéro gestion.
        </h2>
        <p className="text-[1.05rem] font-light leading-[1.7] mb-14" style={{ color: "var(--mid)", maxWidth: 600 }}>
          TourDeWheel gère tout pour votre équipe — livraison, maintenance, assurance, réparations, attestations FMD.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {b2bCards.map((c, i) => {
            const ref = useReveal();
            return (
              <div key={i} ref={ref}
                className="reveal bg-white rounded-xl p-8 relative overflow-hidden transition-all b2b-card-hover"
                style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
                <div className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{ background: "linear-gradient(90deg, var(--steel), var(--blue-lt))" }} />
                <div className="text-[2.2rem] mb-4.5">{c.ico}</div>
                <div className="font-display font-extrabold text-[1.3rem] uppercase tracking-[0.03em] mb-2.5" style={{ color: "var(--navy)" }}>{c.name}</div>
                <div className="text-[0.88rem] leading-[1.65] mb-5" style={{ color: "var(--mid)" }}>{c.desc}</div>
                <a href="#" className="font-display font-bold text-[0.82rem] tracking-[0.08em] uppercase no-underline flex items-center gap-1.5 transition-all b2b-link-hover"
                  style={{ color: "var(--steel)" }}>
                  {c.link} →
                </a>
              </div>
            );
          })}
        </div>
        {/* Fleet table */}
        <div className="rounded-xl overflow-hidden" id="tarifs" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
          <div className="grid grid-cols-[2fr_1.5fr_1fr_1fr] px-6 py-4 font-mono text-[0.68rem] tracking-[0.1em] uppercase text-white/60"
            style={{ background: "var(--navy)" }}>
            <span>Taille de flotte</span><span>Tarif mensuel / vélo (HT)</span><span>Engagement</span><span>Statut</span>
          </div>
          {fleetRows.map(([size, price, commit, status, gold], i) => (
            <div key={i}
              className="grid grid-cols-[2fr_1.5fr_1fr_1fr] px-6 py-4 items-center transition-colors ft-row-hover"
              style={{ borderBottom: i < fleetRows.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none", background: gold ? "rgba(212,160,23,0.04)" : undefined }}>
              <div className="font-display font-bold text-[1rem]" style={{ color: gold ? "var(--gold)" : "var(--navy)" }}>{size}</div>
              <div className="font-mono text-[0.9rem] font-medium" style={{ color: gold ? "var(--gold)" : "var(--steel)" }}>{price}</div>
              <div className="text-[0.82rem]" style={{ color: "var(--mid)" }}>{commit}</div>
              <div>
                <span className="inline-flex items-center font-mono text-[0.62rem] tracking-[0.08em] uppercase px-2 py-[3px] rounded-[3px]"
                  style={{ background: gold ? "rgba(212,160,23,0.15)" : "rgba(30,132,73,0.1)", color: gold ? "var(--gold)" : "var(--green)" }}>
                  {status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── HOW IT WORKS ──────────────────────────────────────────────────────────────
const howSteps = [
  { num: 1, color: "var(--gold)", bg: "rgba(212,160,23,0.15)", border: "rgba(212,160,23,0.5)", title: "Contactez-nous", desc: "Écrivez-nous sur WhatsApp — nous répondons en moins d'une heure, 7j/7. En français ou en arabe." },
  { num: 2, color: "var(--blue-lt)", bg: "rgba(36,113,163,0.15)", border: "rgba(36,113,163,0.5)", title: "Choisissez", desc: "Vous choisissez votre formule (Lease-to-Own ou mensuelle). Contrat préparé en 24h — bilingue FR + AR." },
  { num: 3, color: "var(--green-lt)", bg: "rgba(30,132,73,0.15)", border: "rgba(30,132,73,0.5)", title: "Signez & roulez", desc: "Venez à notre atelier à Strasbourg, signez votre contrat, repartez avec votre vélo le jour même." },
  { num: 4, color: "var(--gold)", bg: "rgba(212,160,23,0.2)", border: "rgba(212,160,23,0.7)", title: "Mois 12 : Propriétaire", desc: "Au 12ème mois, TourDeWheel organise une remise officielle de propriété. Le vélo est à vous. Définitivement." },
];

function HowSection() {
  return (
    <section className="px-[5%] py-24" style={{ background: "var(--navy)" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="font-mono text-[0.68rem] tracking-[0.2em] uppercase text-center mb-4" style={{ color: "var(--blue)" }}>
          // Comment ça marche
        </div>
        <h2 className="font-display font-black leading-none tracking-[-0.01em] text-white text-center mb-14"
          style={{ fontSize: "clamp(2.2rem,4vw,3.6rem)" }}>
          Simple. Vraiment.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 relative how-line">
          {howSteps.map((s, i) => {
            const ref = useReveal();
            return (
              <div key={i} ref={ref} className="reveal text-center px-5 relative z-10">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 font-display font-black text-[2rem]"
                  style={{ background: s.bg, border: `2px solid ${s.border}`, color: s.color }}>
                  {s.num}
                </div>
                <div className="font-display font-extrabold text-[1.1rem] uppercase tracking-[0.04em] text-white mb-2.5">{s.title}</div>
                <div className="text-[0.85rem] leading-[1.6] text-white/50">{s.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── TESTIMONIALS ──────────────────────────────────────────────────────────────
const testis = [
  { initial: "M", name: "Mohamed A.", platform: "Uber Eats", city: "Strasbourg", text: "Avant je payais €90/mois et j'avais peur de la panne. Avec TourDeWheel c'est tout inclus — et dans 8 mois le vélo m'appartient. Jamais vu ça en France." },
  { initial: "K", name: "Karim D.", platform: "Deliveroo", city: "Strasbourg", text: "La réparation le même jour c'est ce qui change tout pour moi. Un vélo cassé = zéro revenu. Ici on répare vite, l'atelier est à Strasbourg. C'est local, c'est humain." },
  { initial: "R", name: "Restaurant Le Bouclier", platform: "Flotte 4 vélos", city: "Strasbourg", text: "Pour notre restaurant, une seule facture, un seul contact. Nos livreurs ne perdent plus de temps avec des pannes. TourDeWheel gère tout, nous on se concentre sur la cuisine." },
];

function TestiSection() {
  return (
    <section className="px-[5%] py-24" style={{ background: "white" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="font-mono text-[0.68rem] tracking-[0.2em] uppercase mb-3" style={{ color: "var(--blue)" }}>
          // Ils roulent, ils livrent, ils possèdent
        </div>
        <h2 className="font-display font-black leading-none tracking-[-0.01em] mb-3" style={{ fontSize: "clamp(2.2rem,4vw,3.6rem)", color: "var(--navy)" }}>
          Ce qu'ils disent.
        </h2>
        <p className="text-[1.05rem] font-light leading-[1.7] mb-10" style={{ color: "var(--mid)" }}>
          Bientôt les vrais témoignages de nos premiers riders. En attendant, voici ce que nous promettons.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testis.map((t, i) => {
            const ref = useReveal();
            return (
              <div key={i} ref={ref} className="reveal testi-card">
                <div className="font-display font-black text-[4rem] leading-[0.8] mb-3" style={{ color: "rgba(27,79,114,0.1)" }}>"</div>
                <p className="text-[0.92rem] leading-[1.7] italic mb-5" style={{ color: "var(--text)" }}>{t.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-display font-extrabold text-base text-white flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, var(--steel), var(--navy))" }}>
                    {t.initial}
                  </div>
                  <div>
                    <div className="font-semibold text-[0.86rem]" style={{ color: "var(--navy)" }}>{t.name}</div>
                    <div className="text-[0.75rem] flex items-center gap-1.5" style={{ color: "var(--mid)" }}>
                      <span className="font-mono text-[0.6rem] tracking-[0.08em] uppercase px-1.5 py-[2px] rounded-[2px]"
                        style={{ background: "rgba(27,79,114,0.08)", color: "var(--steel)" }}>
                        {t.platform}
                      </span>
                      · {t.city}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── FINAL CTA ─────────────────────────────────────────────────────────────────
function FinalCta() {
  return (
    <section className="px-[5%] py-24 text-center relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--steel) 100%)" }}>
      <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 50% 50%, rgba(212,160,23,0.08), transparent 60%)" }} />
      <div className="relative z-10 max-w-[700px] mx-auto">
        <div className="font-mono text-[0.68rem] tracking-[0.2em] uppercase mb-4 text-center" style={{ color: "rgba(212,160,23,0.7)" }}>
          // Prêt à commencer ?
        </div>
        <h2 className="font-display font-black leading-[0.95] tracking-[-0.01em] text-white mb-5"
          style={{ fontSize: "clamp(2.4rem,5vw,4.5rem)" }}>
          Votre vélo vous attend<br />à <em className="not-italic" style={{ color: "var(--gold)" }}>Strasbourg</em>.
        </h2>
        <p className="text-[1.05rem] font-light leading-[1.7] text-white/65 mb-10">
          Parlez-nous sur WhatsApp — nous répondons en moins d'une heure, 7j/7.<br />
          En français et en arabe. Premier vélo disponible dès juin 2026.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="https://wa.me/33XXXXXXXXX"
            className="font-display font-bold text-base tracking-[0.06em] uppercase px-9 py-4 rounded text-white no-underline transition-all cta-primary-hover"
            style={{ background: "var(--wa)" }}>
            💬 Démarrer sur WhatsApp
          </a>
          <a href="#"
            className="font-display font-semibold text-base tracking-[0.06em] uppercase px-7 py-4 rounded no-underline transition-all cta-secondary-hover"
            style={{ color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.2)" }}>
            Formulaire de devis →
          </a>
        </div>
        <p className="mt-5 text-[0.8rem] text-white/35">
          ✓ Réponse en moins d'1h  ·  ✓ Aucun engagement avant signature  ·  ✓ Contrat FR + AR
        </p>
      </div>
    </section>
  );
}

// ── FOOTER ────────────────────────────────────────────────────────────────────
function Footer() {
  const cols = [
    { title: "Solutions", links: [["#livreur","Livreur indépendant"],["#plans","Lease-to-Own"],["#plans","Location mensuelle"],["#entreprises","Flotte entreprise"],["#fmd","Forfait Mobilités"]] },
    { title: "Strasbourg", links: [["#","Notre atelier"],["#","Qui sommes-nous"],["#","Tarifs"],["#","Contact"],["#","عربي — النسخة العربية"]] },
    { title: "Liens utiles", links: [["#","Mentions légales"],["#","Politique de confidentialité"],["#","CGV"],["#","LinkedIn"],["#","↗ VéloRouge — Tourisme"]] },
  ];
  return (
    <footer style={{ background: "var(--dark)", borderTop: "1px solid rgba(255,255,255,0.06)" }} className="px-[5%] pt-14 pb-7">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12">
        <div>
          <div className="font-display font-black text-[1.5rem] tracking-[0.04em] text-white mb-3.5">
            TOURDE<span style={{ color: "var(--gold)" }}>WHEEL</span>
          </div>
          <p className="text-[0.84rem] leading-[1.7] mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>
            Premier opérateur professionnel de vélos électriques à Strasbourg. Location mensuelle, Lease-to-Own, et solutions flotte pour entreprises. Lancement juin 2026.
          </p>
          <a href="https://wa.me/33XXXXXXXXX"
            className="inline-flex items-center gap-2 font-mono text-[0.72rem] px-3.5 py-2 rounded no-underline transition-colors"
            style={{ background: "rgba(37,211,102,0.12)", border: "1px solid rgba(37,211,102,0.25)", color: "var(--wa)" }}>
            💬 WhatsApp — Réponse en 1h
          </a>
        </div>
        {cols.map((col, i) => (
          <div key={i}>
            <div className="font-mono text-[0.65rem] tracking-[0.15em] uppercase mb-4" style={{ color: "rgba(255,255,255,0.35)" }}>
              {col.title}
            </div>
            <ul className="list-none flex flex-col gap-2.5">
              {col.links.map(([href, label], j) => (
                <li key={j}>
                  <a href={href} className="text-[0.84rem] no-underline transition-colors footer-link-hover"
                    style={{ color: "rgba(255,255,255,0.5)" }}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center pt-6 text-[0.78rem]"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.25)" }}>
        <span>© 2026 TourDeWheel SAS · Strasbourg, Grand Est, France</span>
        <span>Site distinct de VéloRouge (tourisme & location courte durée)</span>
      </div>
    </footer>
  );
}

// ── APP ───────────────────────────────────────────────────────────────────────
export default function TourDeWheel() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = globalStyles;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <PainSection />
      <PlansSection />
      <InclusiveStrip />
      <StatsSection />
      <FmdSection />
      <B2bSection />
      <HowSection />
      <TestiSection />
      <FinalCta />
      <Footer />
      {/* Sticky WhatsApp */}
      <a href="https://wa.me/33XXXXXXXXX"
        className="fixed bottom-7 right-7 z-50 w-14 h-14 rounded-full flex items-center justify-center text-2xl no-underline transition-transform hover:scale-110 bounce-in"
        style={{ background: "var(--wa)", boxShadow: "0 4px 20px rgba(37,211,102,0.4)" }}
        title="WhatsApp">
        💬
      </a>
    </>
  );
}
