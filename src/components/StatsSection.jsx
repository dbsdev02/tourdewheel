import RevealItem from './RevealItem';

const stats = [
  { num: '80',   label: 'Vélos disponibles\ndès juin 2026',    color: 'var(--gold)' },
  { num: 'J+0',  label: 'Réparation locale\nà Strasbourg',     color: 'var(--blue-lt)' },
  { num: '12',   label: 'Mois pour devenir\npropriétaire',     color: 'var(--green-lt)' },
  { num: '100%', label: 'Tout inclus\nsans surprise',          color: 'white' },
];

export default function StatsSection() {
  return (
    <div className="px-[5%] py-[72px]" style={{ background: 'var(--navy-mid)' }}>
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-[1px] rounded-lg overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
        {stats.map((s, i) => (
          <RevealItem key={i} className="text-center px-7 py-9" style={{ background: 'rgba(255,255,255,0.03)' }}>
            <div className="f-display font-black text-[3.2rem] leading-none mb-2" style={{ color: s.color }}>{s.num}</div>
            <div className="text-[0.82rem] text-white/45 leading-snug whitespace-pre-line">{s.label}</div>
          </RevealItem>
        ))}
      </div>
    </div>
  );
}
