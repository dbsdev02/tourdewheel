import RevealItem from './RevealItem';

const painData = [
  ['Panne = journée perdue = zéro revenu. Support à Paris, atelier à 4h de route.',
   'Réparation locale le même jour à Strasbourg — vous reprenez la route.'],
  ['€89/mois × 5 ans = €5,340 dépensés — et vous ne possédez toujours rien.',
   '12 mois × €125 = €1,500 — le vélo vous appartient définitivement.'],
  ['Coûts cachés : réparations non couvertes, assurance séparée, GPS en option payante.',
   '€125/mois. Tout inclus. Jamais de surprise. Un seul montant, une seule facture.'],
  ['Contrat uniquement en français — compréhension difficile pour les riders arabophone.',
   'Contrat disponible en français ET en arabe. Équipe locale qui vous parle.'],
];

export default function PainSection() {
  return (
    <section className="px-[5%] py-24" id="livreur" style={{ background: 'var(--navy-mid)' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="f-mono text-[0.68rem] tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--blue)' }}>
          // Pourquoi TourDeWheel
        </div>
        <h2 className="f-display font-black leading-none tracking-[-0.01em] text-white mb-5" style={{ fontSize: 'clamp(2.2rem,4vw,3.6rem)' }}>
          On connaît votre quotidien.
        </h2>
        <p className="text-[1.05rem] font-light leading-[1.7] text-white/60 max-w-[600px] mb-14">
          Vous livrez tous les jours. Votre vélo doit être aussi fiable que vous.
        </p>

        <div className="flex flex-col gap-3">
          {painData.map(([bad, good], i) => (
            <RevealItem
              key={i}
              className="grid grid-cols-[1fr_60px_1fr] rounded-lg overflow-hidden transition-colors hover:border-white/20"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}
            >
              <div className="p-5 px-6 flex items-center gap-3.5 text-[0.9rem] leading-relaxed" style={{ color: 'rgba(255,100,80,0.85)' }}>
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-[0.8rem] font-bold flex-shrink-0" style={{ background: 'rgba(192,57,43,0.2)', color: '#E74C3C' }}>✗</div>
                {bad}
              </div>
              <div className="flex items-center justify-center f-display font-extrabold text-base text-white/15" style={{ borderLeft: '1px solid rgba(255,255,255,0.05)', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
                VS
              </div>
              <div className="p-5 px-6 flex items-center gap-3.5 text-[0.9rem] leading-relaxed" style={{ color: 'rgba(39,174,96,0.9)' }}>
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-[0.8rem] font-bold flex-shrink-0" style={{ background: 'rgba(30,132,73,0.2)', color: '#27AE60' }}>✓</div>
                <strong>{good}</strong>
              </div>
            </RevealItem>
          ))}
        </div>
      </div>
    </section>
  );
}
