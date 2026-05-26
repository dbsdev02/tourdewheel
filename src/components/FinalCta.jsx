export default function FinalCta() {
  return (
    <section className="px-[5%] py-24 text-center relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, var(--navy) 0%, var(--steel) 100%)' }}>
      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(212,160,23,0.08), transparent 60%)' }} />
      <div className="relative z-10 max-w-[700px] mx-auto">
        <div className="f-mono text-[0.68rem] tracking-[0.2em] uppercase mb-4" style={{ color: 'rgba(212,160,23,0.7)' }}>// Prêt à commencer ?</div>
        <h2 className="f-display font-black leading-[0.95] tracking-[-0.01em] text-white mb-5" style={{ fontSize: 'clamp(2.4rem,5vw,4.5rem)' }}>
          Votre vélo vous attend<br />à <em className="not-italic" style={{ color: 'var(--gold)' }}>Strasbourg</em>.
        </h2>
        <p className="text-[1.05rem] font-light leading-[1.7] text-white/65 mb-10">
          Parlez-nous sur WhatsApp — nous répondons en moins d'une heure, 7j/7.<br />
          En français et en arabe. Premier vélo disponible dès juin 2026.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="https://wa.me/33XXXXXXXXX"
            className="f-display font-bold text-base tracking-[0.06em] uppercase px-9 py-4 rounded text-white no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(37,211,102,0.35)]"
            style={{ background: 'var(--wa)' }}>
            💬 Démarrer sur WhatsApp
          </a>
          <a href="#"
            className="f-display font-semibold text-base tracking-[0.06em] uppercase px-7 py-4 rounded no-underline transition-all hover:border-white/50 hover:text-white"
            style={{ color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.2)' }}>
            Formulaire de devis →
          </a>
        </div>
        <p className="mt-5 text-[0.8rem] text-white/35">
          ✓ Réponse en moins d'1h · ✓ Aucun engagement avant signature · ✓ Contrat FR + AR
        </p>
      </div>
    </section>
  );
}
