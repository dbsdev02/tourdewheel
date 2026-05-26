import { useState } from 'react';

const COMP_MONTHLY = 89;
const TDW_TOTAL = 1500;

export default function Hero() {
  const [years, setYears] = useState(3);
  const months = years * 12;
  const comp = COMP_MONTHLY * months;
  const savings = comp - TDW_TOTAL;
  const pct = Math.round(((years - 1) / 4) * 100);

  return (
    <section
      className="min-h-screen relative overflow-hidden flex items-center pt-24 pb-20 px-[5%]"
      style={{ background: 'var(--navy)' }}
    >
      <div className="absolute inset-0 hero-grid-bg" />
      <div className="absolute pointer-events-none" style={{ width: 700, height: 700, background: 'radial-gradient(circle, rgba(36,113,163,0.18) 0%, transparent 70%)', top: -200, right: -100 }} />
      <div className="absolute pointer-events-none" style={{ width: 400, height: 400, background: 'radial-gradient(circle, rgba(212,160,23,0.08) 0%, transparent 70%)', bottom: 0, left: '10%' }} />

      <div className="relative z-10 max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-16 items-center">

        {/* ── Left copy ── */}
        <div>
          <div
            className="inline-flex items-center gap-2 f-mono text-[0.7rem] tracking-[0.15em] uppercase mb-7 px-3 py-1.5 rounded-sm fade-up"
            style={{ color: 'var(--gold)', background: 'rgba(212,160,23,0.1)', border: '1px solid rgba(212,160,23,0.25)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: 'var(--gold)' }} />
            Premier opérateur professionnel à Strasbourg
          </div>

          <h1
            className="f-display font-black leading-[0.92] tracking-[-0.01em] text-white mb-7 fade-up delay-1"
            style={{ fontSize: 'clamp(3.5rem, 7vw, 6.5rem)' }}
          >
            Votre vélo.
            <span className="block" style={{ color: 'var(--gold)' }}>Votre propriété.</span>
            <span className="block font-light italic text-white/50 tracking-[0.02em]" style={{ fontSize: '0.65em', marginTop: 8 }}>
              en 12 mois. tout inclus.
            </span>
          </h1>

          <p className="text-[1.15rem] font-light leading-[1.7] text-white/65 max-w-[560px] mb-10 fade-up delay-2">
            Le seul programme à Strasbourg qui vous fait passer de{' '}
            <strong className="text-white/90 font-medium">locataire à propriétaire en 12 mois.</strong>{' '}
            Maintenance, assurance, GPS et réparation locale inclus.{' '}
            <strong className="text-white/90 font-medium">Jamais de surprise sur votre facture.</strong>
          </p>

          <div className="flex gap-3.5 flex-wrap mb-14 fade-up delay-3">
            <a
              href="https://wa.me/33XXXXXXXXX"
              className="flex items-center gap-2.5 f-display font-bold text-[1.05rem] tracking-[0.06em] uppercase px-8 py-4 rounded text-white no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(37,211,102,0.35)]"
              style={{ background: 'var(--wa)' }}
            >
              💬 Démarrer sur WhatsApp
            </a>
            <a
              href="#plans"
              className="flex items-center gap-2 f-display font-semibold text-[1.05rem] tracking-[0.06em] uppercase px-7 py-4 rounded no-underline transition-all hover:border-white/50 hover:text-white"
              style={{ color: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.2)' }}
            >
              Voir les formules →
            </a>
          </div>

          <div className="flex flex-wrap gap-5 fade-up delay-4">
            {['Maintenance incluse','Assurance incluse','GPS IoT inclus','Réparation J+0','Propriété en 12 mois'].map(t => (
              <div key={t} className="flex items-center gap-1.5 text-[0.82rem] font-medium text-white/55">
                <div
                  className="w-[18px] h-[18px] rounded-full flex items-center justify-center text-[0.6rem] flex-shrink-0"
                  style={{ background: 'rgba(30,132,73,0.25)', border: '1px solid var(--green-lt)', color: 'var(--green-lt)' }}
                >✓</div>
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* ── Calculator card ── */}
        <div
          className="relative rounded-xl p-9 backdrop-blur-md overflow-hidden fade-up delay-3"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg, var(--gold), var(--blue-lt), transparent)' }} />

          <div className="f-mono text-[0.65rem] tracking-[0.15em] uppercase mb-5" style={{ color: 'var(--gold)' }}>
            // Calculateur d'économies
          </div>

          {/* VS row */}
          <div className="grid grid-cols-[1fr_auto_1fr] gap-3 mb-5">
            <div className="text-center">
              <div className="f-display font-black text-[2.4rem] leading-none mb-1" style={{ color: 'var(--red-lt)' }}>
                €{comp.toLocaleString('fr-FR')}
              </div>
              <div className="text-[0.72rem] font-light text-white/50 leading-snug">Location pure<br /><small>aucune propriété</small></div>
            </div>
            <div className="f-display font-black text-[1.4rem] text-white/20 pt-2">VS</div>
            <div className="text-center">
              <div className="f-display font-black text-[2.4rem] leading-none mb-1" style={{ color: 'var(--green-lt)' }}>
                €{TDW_TOTAL.toLocaleString('fr-FR')}
              </div>
              <div className="text-[0.72rem] font-light text-white/50 leading-snug">TourDeWheel<br /><small>+ vous possédez</small></div>
            </div>
          </div>

          {/* Savings badge */}
          <div className="rounded-lg px-5 py-4 text-center mb-5" style={{ background: 'linear-gradient(135deg, var(--gold), #E67E22)' }}>
            <div className="f-mono text-[0.62rem] tracking-[0.12em] uppercase mb-1" style={{ color: 'rgba(0,0,0,0.65)' }}>
              Vous économisez
            </div>
            <div className="f-display font-black text-[2.8rem] leading-none" style={{ color: 'var(--navy)' }}>
              €{savings.toLocaleString('fr-FR')}
            </div>
            <div className="text-[0.75rem] mt-0.5" style={{ color: 'rgba(0,0,0,0.6)' }}>
              sur {years} an{years > 1 ? 's' : ''} — et vous avez le vélo
            </div>
          </div>

          {/* Slider */}
          <div className="flex justify-between text-[0.78rem] text-white/50 mb-2">
            <span>Durée de location</span>
            <span className="f-mono" style={{ color: 'var(--gold)' }}>{years} an{years > 1 ? 's' : ''}</span>
          </div>
          <div className="flex justify-between f-mono text-[0.65rem] text-white/40 mb-1">
            {['1 an','2 ans','3 ans','4 ans','5 ans'].map(l => <span key={l}>{l}</span>)}
          </div>
          <input
            type="range" min={1} max={5} step={1} value={years}
            onChange={e => setYears(Number(e.target.value))}
            className="mb-4"
            style={{ background: `linear-gradient(90deg, var(--green) ${pct}%, rgba(255,255,255,0.1) ${pct}%)` }}
          />
          <p className="f-mono text-[0.72rem] text-white/35 text-center italic">
            Concurrent : €89/mois × durée. TourDeWheel : €1,500 fixe puis €0.
          </p>
        </div>
      </div>
    </section>
  );
}
