import { useLang } from '../context/LangContext';
import RevealItem from './RevealItem';

const fleetRows = [
  ['3–5 vélos','€120 / vélo / mois','12 mois','Disponible',false],
  ['6–15 vélos','€110 / vélo / mois','12 mois','Disponible',false],
  ['16–50 vélos','€100 / vélo / mois','12 mois','Sur devis',false],
  ['50+ vélos','Tarif négocié','Flexible','Contactez-nous',true],
];

export default function B2bSection() {
  const { t } = useLang();
  const b = t.b2b;
  return (
    <section className="px-[5%] py-24" id="entreprises" style={{ background:'var(--pale)' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="f-mono text-[0.68rem] tracking-[0.2em] uppercase mb-3" style={{ color:'var(--blue)' }}>{b.label}</div>
        <h2 className="f-display font-black leading-none tracking-[-0.01em] mb-5" style={{ fontSize:'clamp(2.2rem,4vw,3.6rem)', color:'var(--navy)' }}>{b.h2}</h2>
        <p className="text-[1.05rem] font-light leading-[1.7] mb-14" style={{ color:'var(--mid)', maxWidth:600 }}>{b.sub}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {b.cards.map((c, i) => (
            <RevealItem key={i} className="bg-white rounded-xl p-8 relative overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.09)]" style={{ border:'1px solid rgba(0,0,0,0.07)' }}>
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background:'linear-gradient(90deg, var(--steel), var(--blue-lt))' }} />
              <div className="text-[2.2rem] mb-4">{c.ico}</div>
              <div className="f-display font-extrabold text-[1.3rem] uppercase tracking-[0.03em] mb-2.5" style={{ color:'var(--navy)' }}>{c.name}</div>
              <div className="text-[0.88rem] leading-[1.65] mb-5" style={{ color:'var(--mid)' }}>{c.desc}</div>
              <a href="#" className="f-display font-bold text-[0.82rem] tracking-[0.08em] uppercase no-underline flex items-center gap-1.5 transition-all hover:gap-2.5 hover:text-[var(--blue)]" style={{ color:'var(--steel)' }}>{c.link} →</a>
            </RevealItem>
          ))}
        </div>
        <div className="rounded-xl overflow-hidden" id="tarifs" style={{ border:'1px solid rgba(0,0,0,0.07)' }}>
          <div className="grid grid-cols-[2fr_1.5fr_1fr_1fr] px-6 py-4 f-mono text-[0.68rem] tracking-[0.1em] uppercase text-white/60" style={{ background:'var(--navy)' }}>
            {b.tableHead.map((h, i) => <span key={i}>{h}</span>)}
          </div>
          {fleetRows.map(([size, price, commit, status, gold], i) => (
            <div key={i} className="grid grid-cols-[2fr_1.5fr_1fr_1fr] px-6 py-4 items-center transition-colors hover:bg-[var(--pale)]"
              style={{ borderBottom: i < fleetRows.length-1 ? '1px solid rgba(0,0,0,0.05)' : 'none', background: gold ? 'rgba(212,160,23,0.04)' : 'white' }}>
              <div className="f-display font-bold text-[1rem]" style={{ color: gold ? 'var(--gold)' : 'var(--navy)' }}>{size}</div>
              <div className="f-mono text-[0.9rem] font-medium" style={{ color: gold ? 'var(--gold)' : 'var(--steel)' }}>{price}</div>
              <div className="text-[0.82rem]" style={{ color:'var(--mid)' }}>{commit}</div>
              <div><span className="inline-flex items-center f-mono text-[0.62rem] tracking-[0.08em] uppercase px-2 py-[3px] rounded-sm"
                style={{ background: gold ? 'rgba(212,160,23,0.15)' : 'rgba(30,132,73,0.1)', color: gold ? 'var(--gold)' : 'var(--green)' }}>{status}</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
