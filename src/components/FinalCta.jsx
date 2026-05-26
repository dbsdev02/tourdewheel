import { useLang } from '../context/LangContext';

export default function FinalCta() {
  const { t } = useLang();
  const f = t.finalCta;
  return (
    <section className="px-[5%] py-24 text-center relative overflow-hidden" style={{ background:'linear-gradient(135deg, var(--navy) 0%, var(--steel) 100%)' }}>
      <div className="absolute inset-0" style={{ background:'radial-gradient(circle at 50% 50%, rgba(212,160,23,0.08), transparent 60%)' }} />
      <div className="relative z-10 max-w-[700px] mx-auto">
        <div className="f-mono text-[0.68rem] tracking-[0.2em] uppercase mb-4" style={{ color:'rgba(212,160,23,0.7)' }}>{f.label}</div>
        <h2 className="f-display font-black leading-[0.95] tracking-[-0.01em] text-white mb-5" style={{ fontSize:'clamp(2.4rem,5vw,4.5rem)' }}>
          {f.h2a}<br />à <em className="not-italic" style={{ color:'var(--gold)' }}>{f.h2b}</em>.
        </h2>
        <p className="text-[1.05rem] font-light leading-[1.7] text-white/65 mb-10">{f.sub}</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="https://wa.me/33XXXXXXXXX" className="f-display font-bold text-base tracking-[0.06em] uppercase px-9 py-4 rounded text-white no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(37,211,102,0.35)]" style={{ background:'var(--wa)' }}>{f.cta1}</a>
          <a href="#" className="f-display font-semibold text-base tracking-[0.06em] uppercase px-7 py-4 rounded no-underline transition-all hover:border-white/50 hover:text-white" style={{ color:'rgba(255,255,255,0.7)', border:'1px solid rgba(255,255,255,0.2)' }}>{f.cta2}</a>
        </div>
        <p className="mt-5 text-[0.8rem] text-white/35">{f.note}</p>
      </div>
    </section>
  );
}
