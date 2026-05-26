import { useLang } from '../context/LangContext';
import RevealItem from './RevealItem';

const colors = ['var(--gold)','var(--blue-lt)','var(--green-lt)','white'];

export default function StatsSection() {
  const { t } = useLang();
  return (
    <div className="px-[5%] py-[72px]" style={{ background:'var(--navy-mid)' }}>
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-[1px] rounded-lg overflow-hidden" style={{ background:'rgba(255,255,255,0.06)' }}>
        {t.stats.map((s, i) => (
          <RevealItem key={i} className="text-center px-7 py-9" style={{ background:'rgba(255,255,255,0.03)' }}>
            <div className="f-display font-black text-[3.2rem] leading-none mb-2" style={{ color: colors[i] }}>{s.num}</div>
            <div className="text-[0.82rem] text-white/45 leading-snug whitespace-pre-line">{s.label}</div>
          </RevealItem>
        ))}
      </div>
    </div>
  );
}
