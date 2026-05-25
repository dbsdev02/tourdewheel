import React from "react";
import { useLang } from "@/i18n/LanguageContext";
import {
  Bike, Shield, Wrench, Package, Award,
  Check, X, Mail, Phone, MapPin,
  Quote, ArrowRight,
} from "lucide-react";
import SavingsCalculator from "./SavingsCalculator.tsx";

function TopBar() {
  const { t, lang, setLang } = useLang();
  return (
    <header className="bg-navy-deep border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="text-white font-black text-[17px] tracking-tight">
            TOURDE<span className="text-orange">WHEEL</span>
          </div>
          <span className="text-white/40 text-lg font-light">.</span>
          <span className="text-[10px] font-black tracking-widest border border-orange/50 text-orange px-2 py-0.5 rounded">
            STRASBOURG
          </span>
        </div>

        {/* Nav — centered */}
        <nav className="hidden md:flex items-center gap-8 text-[12px] font-bold tracking-widest text-white/60">
          <a className="hover:text-white transition cursor-pointer">{t.nav.livreurs}</a>
          <a className="hover:text-white transition cursor-pointer">{t.nav.formules}</a>
          <a className="hover:text-white transition cursor-pointer">{t.nav.entreprises}</a>
          <a className="hover:text-white transition cursor-pointer">{t.nav.fmd}</a>
          <a className="hover:text-white transition cursor-pointer">{t.nav.tarifs}</a>
        </nav>

        {/* Right */}
        <div className="flex items-center gap-3 shrink-0">
          {/* FR | ع toggle */}
          <div className="flex items-center gap-1.5 text-[13px] border border-white/15 rounded px-2.5 py-1.5">
            <button
              onClick={() => setLang("fr")}
              className={`font-semibold transition ${
                lang === "fr" ? "text-white" : "text-white/35 hover:text-white/60"
              }`}
            >
              FR
            </button>
            <span className="text-white/20">|</span>
            <button
              onClick={() => setLang("en")}
              className={`font-semibold transition ${
                lang === "en" ? "text-white" : "text-white/35 hover:text-white/60"
              }`}
            >
              ع
            </button>
          </div>
          {/* CTA */}
          <button className="bg-grass text-white font-bold text-[13px] px-4 py-2 rounded-lg hover:brightness-105 transition flex items-center gap-2">
            <span>💬</span> {t.nav.cta}
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const { t } = useLang();
  return (
    <section className="bg-navy text-white pt-14 pb-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest border border-white/20 rounded px-3 py-1.5 mb-8 text-white/80">
            <span className="size-1.5 rounded-full bg-orange inline-block" />
            {t.hero.badge}
          </div>
          <h1 className="text-6xl md:text-7xl font-black leading-[1.0] tracking-tight">
            {t.hero.title1}<br />
            <span className="text-orange">{t.hero.title2}</span>
          </h1>
          <p className="text-3xl md:text-4xl font-light text-white/55 mt-3 italic">{t.hero.title3}</p>
          <p className="mt-7 text-white/70 leading-relaxed max-w-lg text-[15px]">{t.hero.desc}</p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <button className="bg-grass text-grass-foreground font-bold px-6 py-3.5 rounded-lg hover:brightness-105 transition flex items-center gap-2 text-sm tracking-wide">
              <span className="text-base">💬</span> {t.hero.ctaPrimary}
            </button>
            <button className="border border-white/25 text-white font-bold px-6 py-3.5 rounded-lg hover:bg-white/5 transition text-sm tracking-wide">
              {t.hero.ctaSecondary}
            </button>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-white/60">
            {[t.hero.tagPro, t.hero.tagInsured, t.hero.tagMyBike, t.hero.tagSavings, t.hero.tagOwnership].map((tag, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <span className="size-4 rounded-full border border-grass flex items-center justify-center text-grass text-[10px]">✓</span>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Calculator card */}
        <div className="flex justify-center lg:justify-end">
          <SavingsCalculator />
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
        <div className="text-[11px] font-bold tracking-widest text-white/40 mb-3">{t.daily.kicker}</div>
        <h2 className="text-4xl md:text-5xl font-black">{t.daily.title}</h2>
        <p className="text-white/55 mt-3 max-w-2xl text-[15px]">{t.daily.desc}</p>
        <div className="mt-10 space-y-3">
          {t.daily.pains.map((pain, i) => (
            <div key={i} className="grid grid-cols-[1fr_auto_1fr] items-center gap-0 border border-white/10 rounded-xl overflow-hidden">
              {/* Pain side */}
              <div className="flex items-center gap-4 px-6 py-5">
                <span className="shrink-0 size-7 rounded-full bg-pinky/20 border border-pinky/40 flex items-center justify-center">
                  <X className="size-3.5 text-pinky" />
                </span>
                <span className="text-sm text-pinky/90 leading-snug">{pain}</span>
              </div>
              {/* VS divider */}
              <div className="px-5 text-[11px] font-bold text-white/25 tracking-widest">VS</div>
              {/* Fix side */}
              <div className="flex items-center gap-4 px-6 py-5 border-l border-white/10">
                <span className="shrink-0 size-7 rounded-full bg-grass/20 border border-grass/40 flex items-center justify-center">
                  <Check className="size-3.5 text-grass" />
                </span>
                <span className="text-sm leading-snug">
                  <span className="text-grass font-semibold">{t.daily.fixes[i][0]}</span>
                  <span className="text-white/35">{t.daily.fixes[i][1]}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Plans() {
  const { t } = useLang();
  const icons = ["\uD83C\uDFC6", "\uD83D\uDD04", "\uD83C\uDFE2"];
  const cards = [t.plans.lease, t.plans.monthly, t.plans.fleet];
  return (
    <section className="bg-section py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-[11px] font-bold tracking-widest text-orange mb-2">{t.plans.kicker}</div>
        <h2 className="text-4xl md:text-5xl font-black text-foreground">{t.plans.title}</h2>
        <p className="text-muted-foreground mt-3 max-w-xl text-[15px]">{t.plans.desc}</p>
        <div className="grid md:grid-cols-3 gap-5 mt-10">
          {cards.map((c, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-2xl p-6 border-2 flex flex-col ${
                i === 0 ? "border-orange shadow-[0_8px_30px_-8px_rgba(245,166,35,0.4)]" : "border-transparent shadow-sm"
              }`}
            >
              {i === 0 && (
                <div className="absolute -top-3 right-5 bg-orange text-white text-[10px] font-black tracking-widest px-3 py-1 rounded">
                  {t.plans.recommended}
                </div>
              )}
              {/* Icon + name */}
              <div className="text-3xl mb-3">{icons[i]}</div>
              <div className="text-[13px] font-black tracking-wider text-foreground">{c.name}</div>
              <div className="text-[13px] text-muted-foreground mt-0.5 mb-5">{c.sub}</div>
              {/* Price */}
              <div className="flex items-baseline gap-0.5 mb-1">
                <span className="text-5xl font-black text-foreground">{c.price}</span>
                <span className="text-base font-semibold text-muted-foreground">{c.unit}</span>
              </div>
              <div className="text-[12px] text-muted-foreground mb-6">{c.priceSub}</div>
              {/* Features */}
              <ul className="space-y-2.5 mb-8 flex-1">
                {c.feats.map((f, j) => (
                  <li key={j} className={`flex items-start gap-2.5 text-[13px] ${
                    (f as any).dim ? "text-muted-foreground/50" : "text-foreground/80"
                  }`}>
                    <Check className={`size-4 shrink-0 mt-0.5 ${
                      (f as any).dim ? "text-muted-foreground/40" : "text-grass"
                    }`} />
                    <span className={(f as any).bold ? "font-bold text-foreground" : ""}>{f.t}</span>
                  </li>
                ))}
              </ul>
              {/* CTA */}
              <button className={`w-full font-bold rounded-lg py-3 text-sm tracking-wide transition ${
                c.ctaPrimary
                  ? "bg-grass text-white hover:brightness-105"
                  : "border-2 border-foreground/20 text-foreground hover:bg-foreground/5"
              }`}>
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
  const statColors = ["text-orange", "text-sky", "text-grass", "text-white"];
  return (
    <>
      <section className="bg-navy-deep text-white pt-16 pb-0">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-[11px] font-bold tracking-widest text-white/40 mb-4">{t.included.kicker}</div>
          <h3 className="text-4xl md:text-5xl font-black">{t.included.title}</h3>
          <div className="mt-10 border border-white/10 rounded-2xl overflow-hidden grid grid-cols-3 md:grid-cols-6">
            {t.included.items.map((it, i) => (
              <div
                key={i}
                className={`p-6 text-center border-r border-white/10 last:border-r-0 ${
                  (it as any).highlight ? "bg-[oklch(0.22_0.08_155/0.5)]" : ""
                }`}
              >
                <div className="text-3xl mb-3">{(it as any).emoji}</div>
                <div className={`text-[11px] font-black tracking-widest ${
                  (it as any).highlight ? "text-grass" : "text-white"
                }`}>{it.t}</div>
                <div className="text-[12px] text-white/45 mt-1.5 leading-snug">{it.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Stats band */}
      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="border border-white/10 rounded-2xl grid grid-cols-2 md:grid-cols-4">
            {t.stats.map((s, i) => (
              <div key={i} className="p-8 text-center border-r border-white/10 last:border-r-0">
                <div className={`text-5xl md:text-6xl font-black ${statColors[i]}`}>{s.v}</div>
                <div className="text-[13px] text-white/50 mt-3 leading-snug whitespace-pre-line">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Employer() {
  const { t } = useLang();
  const accentBorder: Record<string, string> = {
    sky: "border-t-sky",
    grass: "border-t-grass",
    orange: "border-t-orange",
    navy: "border-t-[oklch(0.22_0.05_258)]",
  };
  const accentText: Record<string, string> = {
    sky: "text-sky",
    grass: "text-grass",
    orange: "text-orange",
    navy: "text-foreground",
  };
  return (
    <section className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div>
          <div className="text-[11px] font-bold tracking-widest text-orange mb-3">{t.employer.kicker}</div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">{t.employer.title}</h2>
          <p className="text-muted-foreground mt-4 max-w-lg text-[15px]">{t.employer.desc}</p>
          {/* Simulation card */}
          <div className="mt-8 bg-navy-deep text-white rounded-2xl p-6">
            <div className="text-[11px] font-bold tracking-widest text-orange mb-5">{t.employer.simTitle}</div>
            <div className="grid grid-cols-2 gap-6">
              {/* Col A */}
              <div>
                <div className="text-[12px] font-bold text-pinky mb-3">{t.employer.simColA}</div>
                <div className="space-y-2 text-sm">
                  {t.employer.simRows.map((r, i) => (
                    <div key={i} className="flex justify-between">
                      <span className="text-white/60">{r[0]}</span>
                      <span className="text-white font-mono">{r[1]}</span>
                    </div>
                  ))}
                  <div className="flex justify-between pt-3 border-t border-white/10 mt-2">
                    <span className="font-bold text-white">{t.employer.simTotalA}</span>
                    <span className="font-black text-pinky">{t.employer.simTotalAVal}</span>
                  </div>
                </div>
              </div>
              {/* Col B */}
              <div>
                <div className="text-[12px] font-bold text-grass mb-3">{t.employer.simColB}</div>
                <div className="space-y-2 text-sm">
                  {t.employer.simRows.map((r, i) => (
                    <div key={i} className="flex justify-between">
                      <span className="text-white/60">{r[2]}</span>
                      <span className={`font-mono ${i === 0 ? "text-white" : "text-grass"}`}>{r[3]}</span>
                    </div>
                  ))}
                  <div className="flex justify-between pt-3 border-t border-white/10 mt-2">
                    <span className="font-bold text-white">{t.employer.simTotalB}</span>
                    <span className="font-black text-grass">{t.employer.simTotalBVal}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right — 4 cards + CTA */}
        <div>
          <div className="grid grid-cols-2 gap-4">
            {t.employer.cards.map((c, i) => (
              <div key={i} className={`bg-section border border-border border-t-4 ${accentBorder[c.accent]} rounded-xl p-5`}>
                <div className="text-[10px] font-bold tracking-widest text-muted-foreground mb-1">{c.kicker}</div>
                <div className="text-[13px] font-black text-foreground mb-2">{c.title}</div>
                <div className={`text-4xl font-black mb-3 ${accentText[c.accent]}`}>{c.v}</div>
                <div className="text-[12px] text-muted-foreground leading-snug">{c.d}</div>
              </div>
            ))}
          </div>
          <button className="w-full mt-5 border-2 border-foreground/20 rounded-xl py-3.5 text-[13px] font-bold tracking-wide text-foreground hover:bg-foreground/5 transition">
            {t.employer.cta}
          </button>
        </div>
      </div>
    </section>
  );
}

function Fleet() {
  const { t } = useLang();
  const statusStyle: Record<string, string> = {
    available: "bg-grass/15 text-grass border border-grass/30",
    quote: "bg-orange/15 text-orange border border-orange/30",
    contact: "bg-orange/20 text-orange border border-orange/40",
  };
  return (
    <section className="bg-section py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-[11px] font-bold tracking-widest text-orange mb-3">{t.fleet.kicker}</div>
        <h2 className="text-4xl md:text-5xl font-black text-foreground">{t.fleet.title}</h2>
        <p className="text-muted-foreground mt-3 max-w-xl text-[15px]">{t.fleet.desc}</p>

        {/* Sector cards */}
        <div className="grid md:grid-cols-3 gap-5 mt-10">
          {t.fleet.sectors.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border-t-4 border-t-sky shadow-sm flex flex-col">
              <div className="text-3xl mb-4">{(s as any).emoji}</div>
              <div className="text-[13px] font-black tracking-wider text-foreground mb-3">{s.t}</div>
              <p className="text-[13px] text-muted-foreground leading-relaxed flex-1">{s.d}</p>
              <a className="inline-block mt-4 text-[12px] font-bold tracking-wider text-sky hover:underline cursor-pointer">{(s as any).cta}</a>
            </div>
          ))}
        </div>

        {/* Pricing table */}
        <div className="mt-10 rounded-2xl overflow-hidden border border-border">
          <div className="bg-navy-deep text-white grid grid-cols-4 text-[11px] font-bold tracking-widest px-6 py-4">
            {t.fleet.tableHead.map((h, i) => <div key={i}>{h}</div>)}
          </div>
          {t.fleet.tableRows.map((row, i) => {
            const r = row as any;
            return (
              <div key={i} className={`grid grid-cols-4 px-6 py-4 items-center border-t border-border ${
                i % 2 === 0 ? "bg-white" : "bg-section"
              }`}>
                <div className={`font-bold text-[14px] ${r.highlight ? "text-orange" : "text-foreground"}`}>{r.cols[0]}</div>
                <div className={`font-bold text-[14px] ${r.highlight ? "text-orange" : "text-foreground"}`}>{r.cols[1]}</div>
                <div className="text-[13px] text-muted-foreground">{r.cols[2]}</div>
                <div>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded tracking-wider ${statusStyle[r.status]}`}>
                    {r.cols[3]}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Simple() {
  const { t } = useLang();
  const ringColor: Record<string, string> = {
    orange: "bg-[oklch(0.28_0.08_55)] text-orange border-2 border-orange/60",
    sky: "bg-[oklch(0.25_0.06_220)] text-sky border-2 border-sky/60",
    grass: "bg-[oklch(0.24_0.07_145)] text-grass border-2 border-grass/60",
  };
  return (
    <section className="bg-navy text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-[11px] font-bold tracking-widest text-sky text-center mb-4">{t.simple.kicker}</div>
        <h2 className="text-5xl md:text-6xl font-black text-center">{t.simple.title}</h2>
        <div className="relative mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Connector line */}
          <div className="hidden md:block absolute top-[28px] left-[12.5%] right-[12.5%] h-px bg-white/15" />
          {t.simple.steps.map((s, i) => {
            const color = (s as any).color as string;
            return (
              <div key={i} className="text-center relative">
                <div className={`size-14 rounded-full flex items-center justify-center mx-auto relative z-10 text-2xl font-black ${ringColor[color] ?? ringColor.orange}`}>
                  {i + 1}
                </div>
                <div className="text-[12px] font-black tracking-widest mt-5 text-white">{s.t}</div>
                <p className="text-[13px] text-white/55 mt-2 leading-relaxed">{s.d}</p>
              </div>
            );
          })}
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
        <div className="text-[11px] font-bold tracking-widest text-sky mb-3">{t.testimonials.kicker}</div>
        <h2 className="text-4xl md:text-5xl font-black text-foreground">{t.testimonials.title}</h2>
        <p className="text-muted-foreground mt-3 max-w-lg text-[15px]">{t.testimonials.desc}</p>
        <div className="grid md:grid-cols-3 gap-5 mt-10">
          {t.testimonials.items.map((it, i) => (
            <div key={i} className="bg-section rounded-2xl p-7 border border-border flex flex-col">
              <div className="text-3xl font-black text-foreground/10 leading-none mb-6">““</div>
              <p className="text-[14px] text-foreground/70 leading-relaxed italic flex-1">{it.q}</p>
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-border">
                <div className="size-10 rounded-full bg-navy-deep text-white flex items-center justify-center text-sm font-black shrink-0">
                  {it.name.charAt(0)}
                </div>
                <div>
                  <div className="text-[14px] font-bold text-foreground">{it.name}</div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[10px] font-black tracking-widest bg-navy-deep text-white px-2 py-0.5 rounded">{(it as any).badge}</span>
                    <span className="text-[12px] text-muted-foreground">· {it.role}</span>
                  </div>
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
    <section className="text-white py-24 text-center" style={{ background: "linear-gradient(135deg, oklch(0.18 0.05 240) 0%, oklch(0.22 0.08 210) 50%, oklch(0.20 0.06 230) 100%)" }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-[11px] font-bold tracking-widest text-orange mb-6">{t.cta.kicker}</div>
        <h2 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight">
          {t.cta.title1}<br />
          {t.cta.title2} <span className="text-orange">{t.cta.city}</span>.
        </h2>
        <p className="text-white/65 mt-6 max-w-xl mx-auto text-[15px] leading-relaxed">{t.cta.desc}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button className="bg-grass text-white font-bold px-8 py-4 rounded-lg hover:brightness-105 transition text-sm tracking-wide flex items-center gap-2">
            {t.cta.primary}
          </button>
          <button className="border-2 border-white/30 text-white font-bold px-8 py-4 rounded-lg hover:bg-white/5 transition text-sm tracking-wide">
            {t.cta.secondary}
          </button>
        </div>
        <div className="text-[12px] text-white/35 mt-6">{t.cta.footnote}</div>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useLang();
  const cols = [t.footer.colProgram, t.footer.colCompany, t.footer.colSupport, t.footer.colLegal];
  return (
    <footer className="bg-navy-deep text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-lg font-black tracking-tight mb-3">
              TOURDE<span className="text-orange">WHEEL</span>
            </div>
            <p className="text-[13px] text-white/50 leading-relaxed mb-5">{t.footer.tagline}</p>
            <div className="inline-flex items-center gap-1.5 bg-grass/15 border border-grass/30 text-grass text-[12px] font-semibold rounded px-3 py-1.5">
              <span className="text-grass">&#10003;</span> {t.footer.stamp}
            </div>
          </div>
          {/* Link cols */}
          {cols.map((c, i) => (
            <div key={i}>
              <div className="text-[11px] font-black tracking-widest text-white/50 mb-5">{c.t}</div>
              <ul className="space-y-3.5">
                {c.l.map((link, j) => (
                  <li key={j}>
                    <a className="text-[14px] text-white/80 hover:text-white cursor-pointer transition">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Bottom bar */}
        <div className="mt-14 pt-5 border-t border-white/10 flex flex-wrap justify-between items-center gap-3">
          <div className="text-[13px] text-white/40">{t.footer.copy}</div>
          <div className="flex items-center gap-6 text-[13px] text-white/50">
            <span className="flex items-center gap-2"><Mail className="size-3.5" /> hello@tourdewheel.fr</span>
            <span className="flex items-center gap-2"><Phone className="size-3.5" /> +33 3 88 00 00 00</span>
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
