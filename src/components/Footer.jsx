import { useLang } from '../context/LangContext';

export default function Footer() {
  const { t } = useLang();
  const f = t.footer;
  return (
    <footer className="px-[5%] pt-14 pb-7" style={{ background:'var(--dark)', borderTop:'1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12">
        <div>
          <div className="f-display font-black text-[1.5rem] tracking-[0.04em] text-white mb-3.5">TOURDE<span style={{ color:'var(--gold)' }}>WHEEL</span></div>
          <p className="text-[0.84rem] leading-[1.7] mb-5" style={{ color:'rgba(255,255,255,0.4)' }}>{f.desc}</p>
          <a href="https://wa.me/33XXXXXXXXX" className="inline-flex items-center gap-2 f-mono text-[0.72rem] px-3.5 py-2 rounded no-underline transition-colors hover:bg-[rgba(37,211,102,0.2)]"
            style={{ background:'rgba(37,211,102,0.12)', border:'1px solid rgba(37,211,102,0.25)', color:'var(--wa)' }}>{f.wa}</a>
        </div>
        {f.cols.map((col, i) => (
          <div key={i}>
            <div className="f-mono text-[0.65rem] tracking-[0.15em] uppercase mb-4" style={{ color:'rgba(255,255,255,0.35)' }}>{col.title}</div>
            <ul className="list-none flex flex-col gap-2.5">
              {col.links.map(([href, label], j) => (
                <li key={j}><a href={href} className="text-[0.84rem] no-underline transition-colors hover:text-white/90" style={{ color:'rgba(255,255,255,0.5)' }}>{label}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center pt-6 text-[0.78rem]"
        style={{ borderTop:'1px solid rgba(255,255,255,0.05)', color:'rgba(255,255,255,0.25)' }}>
        <span>{f.copy}</span>
        <span>{f.copy2}</span>
      </div>
    </footer>
  );
}
