import RevealItem from './RevealItem';

const plans = [
  {
    featured: true, badge: 'Recommandé', icon: '🏆',
    name: 'Lease-to-Own', tagline: 'Devenez propriétaire en 12 mois',
    amount: '€125', unit: '/mois', period: 'TTC · Tout inclus · Engagement 12 mois',
    features: [
      'Maintenance & entretien inclus', 'Assurance vol & dommages incluse',
      'GPS IoT temps réel inclus', 'Réparation locale J+0 à Strasbourg',
      [true, 'Propriété transférée au mois 12'],
      'Résiliation possible (pénalité unique €200)', 'Contrat bilingue FR + AR',
    ],
    ctaLabel: '💬 Je veux être propriétaire', ctaClass: 'plan-cta-green', ctaHref: 'https://wa.me/33XXXXXXXXX',
  },
  {
    icon: '🔄', name: 'Location Mensuelle', tagline: 'Flexibilité totale, sans engagement',
    amount: '€100', unit: '/mois', period: 'TTC · Tout inclus · Sans engagement',
    features: [
      'Maintenance & entretien inclus', 'Assurance vol & dommages incluse',
      'GPS IoT temps réel inclus', 'Réparation locale J+0 à Strasbourg',
      'Préavis résiliation : 30 jours', 'Contrat bilingue FR + AR',
      [false, 'Propriété non incluse'],
    ],
    ctaLabel: 'Louer ce mois-ci →', ctaClass: 'plan-cta-outline', ctaHref: 'https://wa.me/33XXXXXXXXX',
  },
  {
    icon: '🏢', name: 'Flotte B2B', tagline: 'Pour restaurants, logistique, artisans',
    amount: '€100', unit: '/vélo', period: 'HT · À partir de 3 vélos · Engagement 12 mois',
    features: [
      'Maintenance & réparations incluses', 'Assurance flotte complète',
      'GPS + tableau de bord web', 'Remplacement vélo sous 24h',
      [true, 'Attestations FMD pour vos salariés'],
      'Réduction IS 25% + TVA récupérable', 'Facture mensuelle unique',
    ],
    ctaLabel: 'Demander un devis flotte →', ctaClass: 'plan-cta-outline', ctaHref: '#entreprises',
  },
];

export default function PlansSection() {
  return (
    <section className="px-[5%] py-24" id="plans" style={{ background: 'var(--pale)' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="f-mono text-[0.68rem] tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--blue)' }}>// Nos formules</div>
        <h2 className="f-display font-black leading-none tracking-[-0.01em] mb-5" style={{ fontSize: 'clamp(2.2rem,4vw,3.6rem)', color: 'var(--navy)' }}>
          Choisissez votre formule.
        </h2>
        <p className="text-[1.05rem] font-light leading-[1.7] mb-14" style={{ color: 'var(--mid)', maxWidth: 600 }}>
          Deux options pour les livreurs indépendants, une solution complète pour les entreprises.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <RevealItem
              key={i}
              className={`bg-white rounded-xl overflow-hidden relative transition-all hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)] ${p.featured ? 'plan-card-featured' : 'plan-card-default'}`}
            >
              {p.badge && (
                <div className="absolute top-[-1px] right-6 f-mono text-[0.6rem] font-medium tracking-[0.12em] uppercase px-2.5 py-1 rounded-b-md" style={{ background: 'var(--gold)', color: 'var(--navy)' }}>
                  {p.badge}
                </div>
              )}
              <div className="px-7 pt-7 pb-5" style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                <div className="text-[1.8rem] mb-3">{p.icon}</div>
                <div className="f-display font-extrabold text-[1.4rem] tracking-[0.02em] uppercase mb-1" style={{ color: 'var(--navy)' }}>{p.name}</div>
                <div className="text-[0.82rem] font-light" style={{ color: 'var(--mid)' }}>{p.tagline}</div>
              </div>
              <div className="px-7 py-5" style={{ background: 'var(--pale)' }}>
                <div className="f-display font-black text-[3rem] leading-none" style={{ color: 'var(--navy)' }}>
                  {p.amount}<span className="text-[1.1rem] font-normal" style={{ color: 'var(--mid)' }}>{p.unit}</span>
                </div>
                <div className="text-[0.8rem] mt-1" style={{ color: 'var(--mid)' }}>{p.period}</div>
              </div>
              <div className="px-7 py-5 flex flex-col gap-2.5">
                {p.features.map((f, j) => {
                  const isTuple = Array.isArray(f);
                  const active = isTuple ? f[0] : true;
                  const label = isTuple ? f[1] : f;
                  return (
                    <div key={j} className="flex items-start gap-2.5 text-[0.86rem] leading-snug" style={{ color: 'var(--text)', opacity: active ? 1 : 0.4 }}>
                      <div className="w-[18px] h-[18px] rounded-full flex items-center justify-center text-[0.6rem] font-bold flex-shrink-0 mt-[1px]"
                        style={{ background: active ? 'rgba(30,132,73,0.12)' : 'rgba(0,0,0,0.06)', color: active ? 'var(--green)' : '#999' }}>
                        {active ? '✓' : '–'}
                      </div>
                      {isTuple && active ? <strong>{label}</strong> : label}
                    </div>
                  );
                })}
              </div>
              <a href={p.ctaHref} className={`mx-7 mb-7 block text-center py-3.5 rounded-md f-display font-bold text-[0.95rem] tracking-[0.06em] uppercase no-underline transition-all ${p.ctaClass}`}>
                {p.ctaLabel}
              </a>
            </RevealItem>
          ))}
        </div>
      </div>
    </section>
  );
}
