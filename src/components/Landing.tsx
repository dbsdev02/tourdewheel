import React from "react";
import { useLang } from "@/i18n/LanguageContext";
import {
  Bike, Shield, Wrench, Truck, Package, Award,
  Check, X, AlertCircle, Mail, Phone, MapPin,
  Quote, ArrowRight, Globe,
} from "lucide-react";

function TopBar() {
  const { t, lang, setLang } = useLang();
  return (
    <header className="bg-navy-deep border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between text-sm text-white/80">
        <div className="flex items-center gap-8">
          <div className="font-bold text-white tracking-tight">
            TOURDE<span className="text-orange">WHEEL</span>
            <span className="ml-2 text-[10px] text-white/40 font-normal">STRASBOURG</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-[13px]">
            <a className="hover:text-white">{t.nav.employees}</a>
            <a className="hover:text-white">{t.nav.employers}</a>
            <a className="hover:text-white">{t.nav.models}</a>
            <a className="hover:text-white">{t.nav.community}</a>
            <a className="hover:text-white">{t.nav.blog}</a>
            <a className="hover:text-white">{t.nav.faq}</a>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "en" ? "fr" : "en")}
            className="flex items-center gap-1.5 text-xs border border-white/15 rounded px-2.5 py-1.5 hover:bg-white/5 transition"
            aria-label="Switch language"
          >
            <Globe className="size-3.5" />
            <span className={lang === "en" ? "text-white font-semibold" : "text-white/50"}>EN</span>
            <span className="text-white/30">/</span>
            <span className={lang === "fr" ? "text-white font-semibold" : "text-white/50"}>FR</span>
          </button>
          <a className="text-[13px] hover:text-white hidden sm:inline">{t.nav.login}</a>
          <button className="bg-grass text-grass-foreground font-semibold text-[13px] px-3 py-1.5 rounded hover:brightness-105 transition">
            ✓ {t.nav.cta}
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const { t } = useLang();
  const c = t.calculator;
  const [years, setYears] = React.useState(1);
  const competitor = 89 * 12 * years;
  const tdw = 1500;
  const savings = competitor - tdw;
  return (
    <section className="bg-navy text-white pt-12 pb-16">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <div className="inline-block text-[11px] font-semibold tracking-wider text-orange border border-orange/40 rounded px-2.5 py-1 mb-6">
            ⚡ {t.hero.badge}
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.05]">
            {t.hero.title1}<br />
            <span className="text-orange">{t.hero.title2}</span>
          </h1>
          <p className="text-2xl md:text-3xl font-light text-white/60 mt-2 italic">{t.hero.title3}</p>
          <p className="mt-6 text-white/70 leading-relaxed max-w-xl">{t.hero.desc}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="bg-grass text-grass-foreground font-semibold px-5 py-3 rounded hover:brightness-105 transition">
              → {t.hero.ctaPrimary}
            </button>
            <a className="text-white/80 text-sm hover:text-white underline-offset-4 hover:underline">{t.hero.ctaSecondary}</a>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/50">
            <span>✓ {t.hero.tagPro}</span>
            <span>✓ {t.hero.tagInsured}</span>
            <span>✓ {t.hero.tagMyBike}</span>
            <span>✓ {t.hero.tagSavings}</span>
          </div>
        </div>

        {/* Savings calculator card */}
        <div className="bg-navy-soft/60 border border-white/10 rounded-xl p-5">
          <div className="text-[11px] font-semibold tracking-wider text-orange text-center mb-5">
            {c.kicker}
          </div>
          <div className="flex items-end justify-center gap-6 mb-5">
            <div className="text-center">
              <div className="text-4xl font-extrabold text-pinky">€{competitor.toLocaleString()}</div>
              <div className="text-sm text-white/60 mt-1">{c.pureRental}</div>
              <div className="text-xs text-white/40">{c.noOwnership}</div>
            </div>
            <div className="text-white/40 text-sm font-semibold mb-3">vs</div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-grass">€{tdw.toLocaleString()}</div>
              <div className="text-sm text-white/60 mt-1">{c.tourdewheel}</div>
              <div className="text-xs text-white/40">{c.youOwn}</div>
            </div>
          </div>
          <div className="bg-orange rounded-xl p-4 text-center text-navy-deep mb-5">
            <div className="text-xs font-bold tracking-widest opacity-70">{c.youSave}</div>
            <div className="text-4xl font-extrabold mt-1">€{savings > 0 ? "+" : ""}{savings.toLocaleString()}</div>
            <div className="text-sm opacity-70 mt-1">{c.overYear(years)}</div>
          </div>
          <div className="flex justify-between text-xs text-white/50 mb-1">
            <span>{c.duration}</span>
            <span className="text-white font-semibold">{c.years[years - 1]}</span>
          </div>
          <div className="flex justify-between text-xs text-white/40 mb-2">
            {c.years.map((y, i) => <span key={i}>{y}</span>)}
          </div>
          <input
            type="range" min={1} max={5} value={years}
            onChange={e => setYears(Number(e.target.value))}
            className="w-full accent-orange cursor-pointer"
          />
          <div className="text-[11px] text-white/30 text-center mt-4 italic">{c.note}</div>
        </div>
      </div>
    </section>
  );
}

function Daily() {
  const { t } = useLang();
  return (
    <section className="bg-navy-deep text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-[11px] font-semibold tracking-wider text-white/40 mb-2">{t.daily.kicker}</div>
        <h2 className="text-3xl md:text-4xl font-extrabold">{t.daily.title}</h2>
        <p className="text-white/60 mt-2 max-w-2xl">{t.daily.desc}</p>
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <div className="space-y-3">
            {t.daily.pains.map((p, i) => (
              <div key={i} className="flex items-start gap-3 bg-navy/60 border border-white/5 rounded-lg p-4">
                <AlertCircle className="size-5 shrink-0 text-pinky mt-0.5" />
                <span className="text-sm text-white/85">{p}</span>
              </div>
            ))}
          </div>
          <div className="space-y-3">
            {t.daily.fixes.map((f, i) => (
              <div key={i} className="flex items-start gap-3 bg-navy/60 border border-white/5 rounded-lg p-4">
                <Check className="size-5 shrink-0 text-grass mt-0.5" />
                <span className="text-sm text-white/85">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Plans() {
  const { t } = useLang();
  const cards = [
    { ...t.plans.lease, icon: <Award className="size-6 text-orange" />, popular: true, price: "€125", primary: true },
    { ...t.plans.monthly, icon: <Bike className="size-6 text-sky" />, popular: false, price: "€100", primary: false },
    { ...t.plans.fleet, icon: <Package className="size-6 text-sky" />, popular: false, price: "€100", primary: false },
  ];
  return (
    <section className="bg-section py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-[11px] font-semibold tracking-wider text-muted-foreground mb-2">{t.plans.kicker}</div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">{t.plans.title}</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl">{t.plans.desc}</p>
        <div className="grid md:grid-cols-3 gap-5 mt-10">
          {cards.map((c, i) => (
            <div
              key={i}
              className={`relative bg-card rounded-xl p-6 border ${
                c.popular ? "border-grass shadow-[0_10px_40px_-10px_oklch(0.68_0.18_145/0.35)]" : "border-border"
              }`}
            >
              {c.popular && (
                <div className="absolute -top-3 right-5 bg-orange text-orange-foreground text-[10px] font-bold tracking-wider px-2 py-1 rounded">
                  {t.plans.mostPopular}
                </div>
              )}
              <div className="flex items-center gap-2 mb-4">
                {c.icon}
                <span className="text-[12px] font-bold tracking-wider text-foreground">{c.name}</span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-4xl font-extrabold text-foreground">{c.price}</span>
                <span className="text-sm text-muted-foreground">{t.plans.perMonth}</span>
              </div>
              <div className="text-[11px] text-muted-foreground mb-5">{t.plans.tax}</div>
              <ul className="space-y-2.5 mb-6">
                {c.feats.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-foreground/80">
                    <Check className="size-4 text-grass shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full font-semibold rounded py-2.5 transition ${
                  c.primary
                    ? "bg-grass text-grass-foreground hover:brightness-105"
                    : "border border-border text-foreground hover:bg-secondary"
                }`}
              >
                {c.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Included() {
  const { t } = useLang();
  const icons = [
    <Wrench className="size-5 text-orange" />,
    <Shield className="size-5 text-grass" />,
    <MapPin className="size-5 text-pinky" />,
    <Package className="size-5 text-sky" />,
    <Bike className="size-5 text-sunny" />,
    <Award className="size-5 text-grass" />,
  ];
  return (
    <section className="bg-navy-deep text-white py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-[11px] font-semibold tracking-wider text-white/40 text-center mb-2">{t.included.kicker}</div>
        <h3 className="text-xl md:text-2xl font-extrabold text-center">{t.included.title}</h3>
        <div className="bg-navy-soft/50 border border-white/10 rounded-xl mt-6 grid grid-cols-2 md:grid-cols-6 divide-x divide-white/10">
          {t.included.items.map((it, i) => (
            <div key={i} className="p-5 text-center">
              <div className="flex justify-center mb-2">{icons[i]}</div>
              <div className="text-[12px] font-bold">{it.t}</div>
              <div className="text-[11px] text-white/50 mt-1">{it.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const { t } = useLang();
  const colors = ["text-orange", "text-sky", "text-grass", "text-white"];
  return (
    <section className="bg-navy text-white py-12 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {t.stats.map((s, i) => (
          <div key={i} className="text-center">
            <div className={`text-4xl md:text-5xl font-extrabold ${colors[i]}`}>{s.v}</div>
            <div className="text-[11px] text-white/50 mt-2 uppercase tracking-wider">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Employer() {
  const { t } = useLang();
  const accents = ["border-t-orange", "border-t-grass", "border-t-sky", "border-t-pinky"];
  return (
    <section className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <div className="text-[11px] font-semibold tracking-wider text-muted-foreground mb-2">{t.employer.kicker}</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight">{t.employer.title}</h2>
          <p className="text-muted-foreground mt-4 max-w-lg">{t.employer.desc}</p>
          <a className="inline-block mt-4 text-sm text-orange font-semibold">{t.employer.seeMore}</a>

          {/* Simulation card */}
          <div className="mt-6 bg-navy-deep text-white rounded-xl p-5">
            <div className="text-[11px] font-semibold tracking-wider text-white/50 mb-3">{t.employer.simTitle}</div>
            <div className="space-y-2 text-sm">
              {t.employer.simRows.map((r, i) => (
                <div key={i} className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="text-white/70">{r[0]}</span>
                  <span className="font-mono">{r[1]}</span>
                </div>
              ))}
              <div className="flex justify-between pt-2 items-center">
                <span className="font-bold">{t.employer.simTotal}</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-grass text-grass-foreground rounded px-1.5 py-0.5 font-bold">{t.employer.simBadge}</span>
                  <span className="text-orange font-extrabold text-lg">{t.employer.simTotalValue}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-4">
            {t.employer.cards.map((c, i) => (
              <div key={i} className={`bg-card border border-border ${accents[i]} border-t-4 rounded-lg p-5`}>
                <div className="text-[10px] font-semibold tracking-wider text-muted-foreground">{c.kicker}</div>
                <div className="text-3xl font-extrabold mt-1 text-foreground">{c.v}</div>
                <div className="text-xs text-muted-foreground mt-2 leading-snug">{c.d}</div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 border border-border rounded-lg py-3 text-xs font-bold tracking-wider text-foreground hover:bg-secondary transition">
            {t.employer.runNumbers}
          </button>
        </div>
      </div>
    </section>
  );
}

function Fleet() {
  const { t } = useLang();
  const sectorIcons = [
    <span className="text-xl">🍴</span>,
    <Truck className="size-5 text-foreground" />,
    <Wrench className="size-5 text-foreground" />,
  ];
  return (
    <section className="bg-section py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-[11px] font-semibold tracking-wider text-muted-foreground mb-2">{t.fleet.kicker}</div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">{t.fleet.title}</h2>
        <p className="text-muted-foreground mt-3 max-w-2xl">{t.fleet.desc}</p>

        <div className="grid md:grid-cols-3 gap-5 mt-8">
          {t.fleet.sectors.map((s, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-5">
              <div className="mb-3">{sectorIcons[i]}</div>
              <div className="text-[12px] font-bold tracking-wider text-foreground">{s.t}</div>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.d}</p>
              <a className="inline-block text-xs text-orange font-semibold mt-3">{t.fleet.learnMore}</a>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl overflow-hidden border border-border">
          <div className="bg-navy-deep text-white grid grid-cols-4 text-[11px] font-bold tracking-wider px-5 py-3">
            {t.fleet.tableHead.map((h, i) => <div key={i}>{h}</div>)}
          </div>
          {t.fleet.tableRows.map((r, i) => (
            <div key={i} className={`grid grid-cols-4 px-5 py-3 text-sm items-center ${i % 2 === 0 ? "bg-card" : "bg-section"}`}>
              <div className="font-semibold text-foreground">{r[0]}</div>
              <div className="text-muted-foreground">{r[1]}</div>
              <div className="text-muted-foreground">{r[2]}</div>
              <div>
                <span className={`text-[11px] font-bold px-2 py-1 rounded ${
                  r[3] === t.fleet.statusOn ? "bg-grass/15 text-grass" : "bg-sunny/20 text-foreground"
                }`}>{r[3]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Simple() {
  const { t } = useLang();
  const stepColors = ["bg-orange", "bg-sky", "bg-grass", "bg-orange"];
  return (
    <section className="bg-navy text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-[11px] font-semibold tracking-wider text-white/40 text-center mb-2">{t.simple.kicker}</div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">{t.simple.title}</h2>
        <div className="relative mt-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-white/15" />
          {t.simple.steps.map((s, i) => (
            <div key={i} className="text-center relative">
              <div className={`size-14 ${stepColors[i]} text-navy-deep font-extrabold text-xl rounded-full flex items-center justify-center mx-auto relative z-10 border-4 border-navy`}>
                {i + 1}
              </div>
              <div className="text-[12px] font-bold tracking-wider mt-4">{s.t}</div>
              <p className="text-xs text-white/60 mt-2 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const { t } = useLang();
  return (
    <section className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-[11px] font-semibold tracking-wider text-muted-foreground mb-2">{t.testimonials.kicker}</div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">{t.testimonials.title}</h2>
        <p className="text-muted-foreground mt-3 max-w-2xl">{t.testimonials.desc}</p>
        <div className="grid md:grid-cols-3 gap-5 mt-10">
          {t.testimonials.items.map((it, i) => (
            <div key={i} className="bg-section rounded-xl p-6 border border-border">
              <Quote className="size-5 text-orange mb-3" />
              <p className="text-sm text-foreground/80 leading-relaxed">{it.q}</p>
              <div className="flex items-center gap-3 mt-5 pt-4 border-t border-border">
                <div className="size-9 rounded-full bg-navy text-white flex items-center justify-center text-xs font-bold">
                  {it.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">{it.name}</div>
                  <div className="text-[11px] text-muted-foreground">{it.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  const { t } = useLang();
  return (
    <section className="bg-navy text-white py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="text-[11px] font-semibold tracking-wider text-white/40 mb-3">{t.cta.kicker}</div>
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          {t.cta.title1}{" "}
          {t.cta.title2 && <><span className="block md:inline">{t.cta.title2}</span><br /></>}
          {t.cta.title3} <span className="text-orange underline decoration-orange/40 underline-offset-4">{t.cta.city}</span>.
        </h2>
        <p className="text-white/65 mt-5 max-w-2xl mx-auto">{t.cta.desc}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button className="bg-grass text-grass-foreground font-bold px-6 py-3 rounded hover:brightness-105 transition flex items-center gap-2">
            <ArrowRight className="size-4" /> {t.cta.primary}
          </button>
          <a className="text-sm text-white/70 hover:text-white">{t.cta.secondary}</a>
        </div>
        <div className="text-[11px] text-white/40 mt-5">{t.cta.footnote}</div>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useLang();
  const cols = [t.footer.colProgram, t.footer.colCompany, t.footer.colSupport, t.footer.colLegal];
  return (
    <footer className="bg-navy-deep text-white pt-14 pb-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-1">
            <div className="font-bold tracking-tight">
              TOURDE<span className="text-orange">WHEEL</span>
            </div>
            <p className="text-[12px] text-white/50 mt-3 leading-relaxed">{t.footer.tagline}</p>
            <div className="inline-block mt-4 bg-grass/15 border border-grass/30 text-grass text-[10px] font-semibold tracking-wider rounded px-2 py-1">
              ✓ {t.footer.stamp}
            </div>
          </div>
          {cols.map((c, i) => (
            <div key={i}>
              <div className="text-[11px] font-bold tracking-wider text-white/60 mb-3">{c.t}</div>
              <ul className="space-y-2">
                {c.l.map((link, j) => (
                  <li key={j}>
                    <a className="text-[13px] text-white/70 hover:text-white">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-5 border-t border-white/5 flex flex-wrap justify-between items-center gap-3">
          <div className="text-[11px] text-white/40">{t.footer.copy}</div>
          <div className="flex items-center gap-4 text-[11px] text-white/40">
            <span className="flex items-center gap-1"><Mail className="size-3" /> hello@tourdewheel.fr</span>
            <span className="flex items-center gap-1"><Phone className="size-3" /> +33 3 88 00 00 00</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Landing() {
  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <Hero />
      <Daily />
      <Plans />
      <Included />
      <Stats />
      <Employer />
      <Fleet />
      <Simple />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}

// Unused import guard
void X;
