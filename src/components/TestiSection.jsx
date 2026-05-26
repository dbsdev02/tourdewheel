import RevealItem from './RevealItem';

const testis = [
  { initial: 'M', name: 'Mohamed A.',           platform: 'Uber Eats',    city: 'Strasbourg', text: "Avant je payais €90/mois et j'avais peur de la panne. Avec TourDeWheel c'est tout inclus — et dans 8 mois le vélo m'appartient. Jamais vu ça en France." },
  { initial: 'K', name: 'Karim D.',             platform: 'Deliveroo',    city: 'Strasbourg', text: "La réparation le même jour c'est ce qui change tout pour moi. Un vélo cassé = zéro revenu. Ici on répare vite, l'atelier est à Strasbourg. C'est local, c'est humain." },
  { initial: 'R', name: 'Restaurant Le Bouclier', platform: 'Flotte 4 vélos', city: 'Strasbourg', text: "Pour notre restaurant, une seule facture, un seul contact. Nos livreurs ne perdent plus de temps avec des pannes. TourDeWheel gère tout, nous on se concentre sur la cuisine." },
];

export default function TestiSection() {
  return (
    <section className="px-[5%] py-24" style={{ background: 'white' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="f-mono text-[0.68rem] tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--blue)' }}>// Ils roulent, ils livrent, ils possèdent</div>
        <h2 className="f-display font-black leading-none tracking-[-0.01em] mb-3" style={{ fontSize: 'clamp(2.2rem,4vw,3.6rem)', color: 'var(--navy)' }}>
          Ce qu'ils disent.
        </h2>
        <p className="text-[1.05rem] font-light leading-[1.7] mb-10" style={{ color: 'var(--mid)' }}>
          Bientôt les vrais témoignages de nos premiers riders. En attendant, voici ce que nous promettons.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testis.map((t, i) => (
            <RevealItem key={i} className="testi-card">
              <div className="f-display font-black text-[4rem] leading-[0.8] mb-3" style={{ color: 'rgba(27,79,114,0.1)' }}>"</div>
              <p className="text-[0.92rem] leading-[1.7] italic mb-5" style={{ color: 'var(--text)' }}>{t.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center f-display font-extrabold text-base text-white flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, var(--steel), var(--navy))' }}>
                  {t.initial}
                </div>
                <div>
                  <div className="font-semibold text-[0.86rem]" style={{ color: 'var(--navy)' }}>{t.name}</div>
                  <div className="text-[0.75rem] flex items-center gap-1.5" style={{ color: 'var(--mid)' }}>
                    <span className="f-mono text-[0.6rem] tracking-[0.08em] uppercase px-1.5 py-[2px] rounded-sm"
                      style={{ background: 'rgba(27,79,114,0.08)', color: 'var(--steel)' }}>
                      {t.platform}
                    </span>
                    · {t.city}
                  </div>
                </div>
              </div>
            </RevealItem>
          ))}
        </div>
      </div>
    </section>
  );
}
