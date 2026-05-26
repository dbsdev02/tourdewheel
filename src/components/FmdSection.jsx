import RevealItem from './RevealItem';

const fmdCards = [
  { type: 'blue',  label: 'Forfait Mobilités Durables',       title: "Jusqu'à 600 €/an",  amount: '600€', desc: "Par salarié, exonéré d'impôts et de charges sociales. 900€ en cumul avec abonnement transport." },
  { type: 'green', label: 'Réduction IS vélo de fonction',    title: 'IS réduit de 25%',  amount: '25%',  desc: "Sur les frais de location ou d'achat d'une flotte de vélos mise à disposition des salariés. Valable jusqu'en 2027." },
  { type: 'gold',  label: 'Nouveau — Rescrit DGFiP Avril 2025', title: 'TVA récupérable', amount: '20%',  desc: "Depuis le 30 avril 2025, la TVA est récupérable sur les loyers de vélos de fonction. Une avancée majeure." },
  { type: 'navy',  label: 'Avantage en nature',               title: 'Zéro cotisation',   amount: '€0',   desc: "Le vélo de fonction n'est pas un avantage en nature selon l'URSSAF. Aucune cotisation sociale supplémentaire." },
];

const gradients = {
  blue:  'linear-gradient(90deg, var(--blue), var(--blue-lt))',
  green: 'linear-gradient(90deg, var(--green), var(--green-lt))',
  gold:  'linear-gradient(90deg, var(--gold), #E67E22)',
  navy:  'linear-gradient(90deg, var(--navy), var(--steel))',
};

const simCols = [
  { title: 'Sans optimisation', bad: true,
    rows: [['10 vélos × €120 × 12','€14,400',true],['TVA non récupérée','— €0',true],['Réduction IS','— €0',true]],
    total: ['Coût réel','€14,400',true,false] },
  { title: 'Avec TourDeWheel + FMD', bad: false,
    rows: [['10 vélos × €120 × 12','€14,400',false,false],['TVA récupérée (20%)','−€2,880',false,true],['Réduction IS (25%)','−€3,000',false,true]],
    total: ['Coût réel','€8,520',false,true] },
];

export default function FmdSection() {
  return (
    <section className="px-[5%] py-24" id="fmd" style={{ background: 'white' }}>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Left */}
        <div>
          <div className="f-mono text-[0.68rem] tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--blue)' }}>// Forfait Mobilités Durables</div>
          <h2 className="f-display font-black leading-none tracking-[-0.01em] mb-5" style={{ fontSize: 'clamp(2.2rem,4vw,3.6rem)', color: 'var(--navy)' }}>
            Votre entreprise finance le vélo. L'État paie une partie.
          </h2>
          <p className="text-[1.05rem] font-light leading-[1.7] mb-8" style={{ color: 'var(--mid)' }}>
            Trois dispositifs cumulables pour réduire votre coût réel à moins de €71/vélo/mois.
          </p>
          <div className="rounded-xl p-7 relative overflow-hidden" style={{ background: 'var(--navy)' }}>
            <div className="f-mono text-[0.62rem] tracking-[0.15em] uppercase mb-4" style={{ color: 'var(--gold)' }}>// Simulation — flotte de 10 vélos</div>
            <div className="grid grid-cols-2 gap-5">
              {simCols.map((col, ci) => (
                <div key={ci}>
                  <div className="text-[0.78rem] font-medium mb-3" style={{ color: col.bad ? 'rgba(231,76,60,0.8)' : 'rgba(39,174,96,0.8)' }}>{col.title}</div>
                  {col.rows.map(([label, val, isRed, isGreen], ri) => (
                    <div key={ri} className="flex justify-between text-[0.8rem] leading-[1.8]" style={{ color: 'rgba(255,255,255,0.55)' }}>
                      <span>{label}</span>
                      <span className="f-mono font-medium" style={{ color: isRed ? '#E74C3C' : isGreen ? '#27AE60' : undefined }}>{val}</span>
                    </div>
                  ))}
                  <div className="flex justify-between f-display font-extrabold text-base mt-2 pt-2.5" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.7)' }}>
                    <span>{col.total[0]}</span>
                    <span style={{ color: col.total[2] ? '#E74C3C' : col.total[3] ? '#27AE60' : undefined }}>{col.total[1]}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right */}
        <div>
          <div className="grid grid-cols-2 gap-4">
            {fmdCards.map((c, i) => (
              <RevealItem key={i} className="relative rounded-xl p-7 overflow-hidden transition-shadow hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
                style={{ background: 'var(--pale)', border: '1px solid rgba(0,0,0,0.06)' }}>
                <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: gradients[c.type] }} />
                <div className="f-mono text-[0.62rem] tracking-[0.15em] uppercase mb-2.5" style={{ color: 'var(--mid)' }}>{c.label}</div>
                <div className="f-display font-extrabold text-[1.2rem] uppercase tracking-[0.02em] mb-2.5" style={{ color: 'var(--navy)' }}>{c.title}</div>
                <div className="f-display font-black text-[2.8rem] leading-none mb-1.5" style={{ color: 'var(--steel)' }}>{c.amount}</div>
                <p className="text-[0.86rem] leading-[1.6]" style={{ color: 'var(--mid)' }}>{c.desc}</p>
              </RevealItem>
            ))}
          </div>
          <div className="mt-5">
            <a href="#"
              className="block text-center py-3.5 rounded-md f-display font-bold text-[0.9rem] tracking-[0.06em] uppercase no-underline transition-all hover:bg-[var(--steel)] hover:text-white"
              style={{ border: '1.5px solid var(--steel)', color: 'var(--steel)' }}>
              → Obtenir mon dossier FMD complet (gratuit)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
