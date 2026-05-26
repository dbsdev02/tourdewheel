import RevealItem from './RevealItem';

const items = [
  { emoji: '🔧', name: 'Maintenance', sub: 'Entretien préventif planifié' },
  { emoji: '🔒', name: 'Assurance', sub: 'Vol, casse & responsabilité' },
  { emoji: '📍', name: 'GPS IoT', sub: 'Temps réel sur votre vélo' },
  { emoji: '🛠', name: 'Réparation J+0', sub: 'Atelier local Strasbourg' },
  { emoji: '📄', name: 'Contrat Bilingue', sub: 'Français + Arabe' },
  { emoji: '🏆', name: 'Propriété', sub: 'Le vélo est à vous au mois 12', highlight: true },
];

export default function InclusiveStrip() {
  return (
    <div className="px-[5%] py-16" style={{ background: 'var(--navy)' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="f-mono text-[0.65rem] tracking-[0.2em] uppercase text-center mb-3" style={{ color: 'var(--gold)' }}>
          // Toujours inclus — sans discussion
        </div>
        <h2 className="f-display font-black text-center text-white mb-12 tracking-[-0.01em]" style={{ fontSize: 'clamp(1.8rem,3vw,2.8rem)' }}>
          €125/mois. Pas un centime de plus.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-[1px] rounded-lg overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.06)' }}>
          {items.map(item => (
            <div key={item.name} className="text-center px-4 py-7 transition-colors hover:bg-white/[0.07]"
              style={{ background: item.highlight ? 'rgba(30,132,73,0.15)' : 'rgba(255,255,255,0.03)' }}>
              <div className="text-[2rem] mb-3">{item.emoji}</div>
              <div className="f-display font-bold text-[0.85rem] tracking-[0.04em] uppercase mb-1" style={{ color: item.highlight ? 'var(--green-lt)' : 'white' }}>
                {item.name}
              </div>
              <div className="text-[0.72rem] text-white/40 leading-snug">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
