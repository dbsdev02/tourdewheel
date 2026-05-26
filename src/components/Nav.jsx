import { useLang } from '../context/LangContext';

export default function Nav() {
  const { lang, setLang, t } = useLang();

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] h-16 backdrop-blur-md"
      style={{ background: 'rgba(10,22,40,0.97)', borderBottom: '1px solid rgba(212,160,23,0.2)' }}
    >
      <a href="#" className="f-display font-black text-[1.6rem] tracking-[0.04em] text-white no-underline flex items-center gap-2.5">
        TOURDEWHEEL<span style={{ color: 'var(--gold)' }}>.</span>
        <span className="f-mono text-[0.55rem] tracking-[0.1em]"
          style={{ color: 'var(--gold)', background: 'rgba(212,160,23,0.12)', border: '1px solid rgba(212,160,23,0.3)', padding: '2px 6px', borderRadius: 2 }}>
          STRASBOURG
        </span>
      </a>

      <ul className="hidden md:flex gap-8 list-none">
        {t.nav.links.map(([href, label]) => (
          <li key={href}>
            <a href={href} className="text-[0.85rem] font-medium tracking-[0.06em] uppercase text-white/70 no-underline transition-colors hover:text-[var(--gold)]">
              {label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        {/* FR / EN toggle */}
        <div className="flex items-center f-mono text-[0.7rem] rounded-sm overflow-hidden"
          style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
          <button
            onClick={() => setLang('fr')}
            className="px-2.5 py-1 transition-colors cursor-pointer border-none"
            style={{
              background: lang === 'fr' ? 'var(--gold)' : 'rgba(255,255,255,0.06)',
              color: lang === 'fr' ? 'var(--navy)' : 'rgba(255,255,255,0.5)',
              fontFamily: 'inherit', fontSize: 'inherit',
            }}
          >
            FR
          </button>
          <button
            onClick={() => setLang('en')}
            className="px-2.5 py-1 transition-colors cursor-pointer border-none"
            style={{
              background: lang === 'en' ? 'var(--gold)' : 'rgba(255,255,255,0.06)',
              color: lang === 'en' ? 'var(--navy)' : 'rgba(255,255,255,0.5)',
              fontFamily: 'inherit', fontSize: 'inherit',
            }}
          >
            EN
          </button>
        </div>

        <a
          href="https://wa.me/33XXXXXXXXX"
          className="flex items-center gap-1.5 text-[0.82rem] font-semibold tracking-[0.04em] px-[18px] py-2.5 rounded text-white no-underline transition-all hover:-translate-y-px hover:shadow-[0_4px_16px_rgba(37,211,102,0.3)]"
          style={{ background: 'var(--wa)' }}
        >
          {t.nav.cta}
        </a>
      </div>
    </nav>
  );
}
