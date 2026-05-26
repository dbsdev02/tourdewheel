import { useLang } from '../context/LangContext';
import RevealItem from './RevealItem';

export default function PlansSection() {
  const { t } = useLang();
  const p = t.plans;
  return (
    <section className="px-[5%] py-24" id="plans" style={{ background:'var(--pale)' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="f-mono text-[0.68rem] tracking-[0.2em] uppercase mb-3" style={{ color:'var(--blue)' }}>{p.label}</div>
        <h2 className="f-display font-black leading-none tracking-[-0.01em] mb-5" style={{ fontSize:'clamp(2.2rem,4vw,3.6rem)', color:'var(--navy)' }}>{p.h2}</h2>
        <p className="text-[1.05rem] font-light leading-[1.7] mb-14" style={{ color:'var(--mid)', maxWidth:600 }}>{p.sub}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {p.items.map((plan, i) => (
            <RevealItem key={i} className={`bg-white rounded-xl overflow-hidden relative transition-all hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)] ${plan.featured ? 'plan-card-featured' : 'plan-card-default'}`}>
              {plan.featured && (
                <div className="absolute top-[-1px] right-6 f-mono text-[0.6rem] font-medium tracking-[0.12em] uppercase px-2.5 py-1 rounded-b-md" style={{ background:'var(--gold)', color:'var(--navy)' }}>{p.badge}</div>
              )}
              <div className="px-7 pt-7 pb-5" style={{ borderBottom:'1px solid rgba(0,0,0,0.06)' }}>
                <div className="text-[1.8rem] mb-3">{plan.icon}</div>
                <div className="f-display font-extrabold text-[1.4rem] tracking-[0.02em] uppercase mb-1" style={{ color:'var(--navy)' }}>{plan.name}</div>
                <div className="text-[0.82rem] font-light" style={{ color:'var(--mid)' }}>{plan.tagline}</div>
              </div>
              <div className="px-7 py-5" style={{ background:'var(--pale)' }}>
                <div className="f-display font-black text-[3rem] leading-none" style={{ color:'var(--navy)' }}>
                  {plan.amount}<span className="text-[1.1rem] font-normal" style={{ color:'var(--mid)' }}>{plan.unit}</span>
                </div>
                <div className="text-[0.8rem] mt-1" style={{ color:'var(--mid)' }}>{plan.period}</div>
              </div>
              <div className="px-7 py-5 flex flex-col gap-2.5">
                {plan.features.map((f, j) => {
                  const isTuple = Array.isArray(f);
                  const active = isTuple ? f[0] : true;
                  const label = isTuple ? f[1] : f;
                  return (
                    <div key={j} className="flex items-start gap-2.5 text-[0.86rem] leading-snug" style={{ color:'var(--text)', opacity: active ? 1 : 0.4 }}>
                      <div className="w-[18px] h-[18px] rounded-full flex items-center justify-center text-[0.6rem] font-bold flex-shrink-0 mt-[1px]"
                        style={{ background: active ? 'rgba(30,132,73,0.12)' : 'rgba(0,0,0,0.06)', color: active ? 'var(--green)' : '#999' }}>
                        {active ? '✓' : '–'}
                      </div>
                      {isTuple && active ? <strong>{label}</strong> : label}
                    </div>
                  );
                })}
              </div>
              <a href={plan.href} className={`mx-7 mb-7 block text-center py-3.5 rounded-md f-display font-bold text-[0.95rem] tracking-[0.06em] uppercase no-underline transition-all ${plan.ctaClass}`}>{plan.cta}</a>
            </RevealItem>
          ))}
        </div>
      </div>
    </section>
  );
}
