import RevealItem from './RevealItem';

const steps = [
  { num: 1, color: 'var(--gold)',     bg: 'rgba(212,160,23,0.15)', border: 'rgba(212,160,23,0.5)',  title: 'Contactez-nous',       desc: "Écrivez-nous sur WhatsApp — nous répondons en moins d'une heure, 7j/7. En français ou en arabe." },
  { num: 2, color: 'var(--blue-lt)',  bg: 'rgba(36,113,163,0.15)', border: 'rgba(36,113,163,0.5)',  title: 'Choisissez',           desc: "Vous choisissez votre formule (Lease-to-Own ou mensuelle). Contrat préparé en 24h — bilingue FR + AR." },
  { num: 3, color: 'var(--green-lt)', bg: 'rgba(30,132,73,0.15)',  border: 'rgba(30,132,73,0.5)',   title: 'Signez & roulez',      desc: "Venez à notre atelier à Strasbourg, signez votre contrat, repartez avec votre vélo le jour même." },
  { num: 4, color: 'var(--gold)',     bg: 'rgba(212,160,23,0.2)',  border: 'rgba(212,160,23,0.7)',  title: 'Mois 12 : Propriétaire', desc: "Au 12ème mois, TourDeWheel organise une remise officielle de propriété. Le vélo est à vous. Définitivement." },
];

export default function HowSection() {
  return (
    <section className="px-[5%] py-24" style={{ background: 'var(--navy)' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="f-mono text-[0.68rem] tracking-[0.2em] uppercase text-center mb-4" style={{ color: 'var(--blue)' }}>// Comment ça marche</div>
        <h2 className="f-display font-black leading-none tracking-[-0.01em] text-white text-center mb-14" style={{ fontSize: 'clamp(2.2rem,4vw,3.6rem)' }}>
          Simple. Vraiment.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 relative how-line">
          {steps.map((s, i) => (
            <RevealItem key={i} className="text-center px-5 relative z-10">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 f-display font-black text-[2rem]"
                style={{ background: s.bg, border: `2px solid ${s.border}`, color: s.color }}>
                {s.num}
              </div>
              <div className="f-display font-extrabold text-[1.1rem] uppercase tracking-[0.04em] text-white mb-2.5">{s.title}</div>
              <div className="text-[0.85rem] leading-[1.6] text-white/50">{s.desc}</div>
            </RevealItem>
          ))}
        </div>
      </div>
    </section>
  );
}
