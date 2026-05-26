import { useLang } from '../context/LangContext';
import RevealItem from './RevealItem';

export default function PainSection() {
  const { t } = useLang();
  const p = t.pain;
  return (
    <section className="px-[5%] py-24" id="livreur" style={{ background:'var(--navy-mid)' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="f-mono text-[0.68rem] tracking-[0.2em] uppercase mb-3" style={{ color:'var(--blue)' }}>{p.label}</div>
        <h2 className="f-display font-black leading-none tracking-[-0.01em] text-white mb-5" style={{ fontSize:'clamp(2.2rem,4vw,3.6rem)' }}>{p.h2}</h2>
        <p className="text-[1.05rem] font-light leading-[1.7] text-white/60 max-w-[600px] mb-14">{p.sub}</p>
        <div className="flex flex-col gap-3">
          {p.rows.map(([bad, good], i) => (
            <RevealItem key={i} className="grid grid-cols-[1fr_60px_1fr] rounded-lg overflow-hidden transition-colors hover:border-white/20"
              style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.05)' }}>
              <div className="p-5 px-6 flex items-center gap-3.5 text-[0.9rem] leading-relaxed" style={{ color:'rgba(255,100,80,0.85)' }}>
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-[0.8rem] font-bold flex-shrink-0" style={{ background:'rgba(192,57,43,0.2)', color:'#E74C3C' }}>✗</div>
                {bad}
              </div>
              <div className="flex items-center justify-center f-display font-extrabold text-base text-white/15" style={{ borderLeft:'1px solid rgba(255,255,255,0.05)', borderRight:'1px solid rgba(255,255,255,0.05)' }}>VS</div>
              <div className="p-5 px-6 flex items-center gap-3.5 text-[0.9rem] leading-relaxed" style={{ color:'rgba(39,174,96,0.9)' }}>
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-[0.8rem] font-bold flex-shrink-0" style={{ background:'rgba(30,132,73,0.2)', color:'#27AE60' }}>✓</div>
                <strong>{good}</strong>
              </div>
            </RevealItem>
          ))}
        </div>
      </div>
    </section>
  );
}
