import { createContext, useContext, useState } from 'react';

const translations = {
  fr: {
    nav: {
      links: [['#livreur','Livreurs'],['#plans','Formules'],['#entreprises','Entreprises'],['#fmd','FMD'],['#tarifs','Tarifs']],
      cta: '💬 Obtenir un devis',
    },
    hero: {
      eyebrow: 'Premier opérateur professionnel à Strasbourg',
      h1a: 'Votre vélo.', h1b: 'Votre propriété.', h1c: 'en 12 mois. tout inclus.',
      sub1: 'Le seul programme à Strasbourg qui vous fait passer de',
      sub2: 'locataire à propriétaire en 12 mois.',
      sub3: 'Maintenance, assurance, GPS et réparation locale inclus.',
      sub4: 'Jamais de surprise sur votre facture.',
      cta1: '💬 Démarrer sur WhatsApp', cta2: 'Voir les formules →',
      trust: ['Maintenance incluse','Assurance incluse','GPS IoT inclus','Réparation J+0','Propriété en 12 mois'],
      calcLabel: "// Calculateur d'économies",
      calcLoc: 'Location pure', calcLocSub: 'aucune propriété', calcTdwSub: '+ vous possédez',
      calcSaves: 'Vous économisez', calcDuration: 'Durée de location',
      calcNote: 'Concurrent : €89/mois × durée. TourDeWheel : €1,500 fixe puis €0.',
      calcYears: (y) => `${y} an${y > 1 ? 's' : ''}`,
    },
    pain: {
      label: '// Pourquoi TourDeWheel',
      h2: 'On connaît votre quotidien.',
      sub: 'Vous livrez tous les jours. Votre vélo doit être aussi fiable que vous.',
      rows: [
        ['Panne = journée perdue = zéro revenu. Support à Paris, atelier à 4h de route.','Réparation locale le même jour à Strasbourg — vous reprenez la route.'],
        ['€89/mois × 5 ans = €5,340 dépensés — et vous ne possédez toujours rien.','12 mois × €125 = €1,500 — le vélo vous appartient définitivement.'],
        ['Coûts cachés : réparations non couvertes, assurance séparée, GPS en option payante.','€125/mois. Tout inclus. Jamais de surprise. Un seul montant, une seule facture.'],
        ['Contrat uniquement en français — compréhension difficile pour les riders arabophone.','Contrat disponible en français ET en arabe. Équipe locale qui vous parle.'],
      ],
    },
    plans: {
      label: '// Nos formules', h2: 'Choisissez votre formule.', badge: 'Recommandé',
      sub: 'Deux options pour les livreurs indépendants, une solution complète pour les entreprises.',
      items: [
        { icon:'🏆', name:'Lease-to-Own', tagline:'Devenez propriétaire en 12 mois', amount:'€125', unit:'/mois', period:'TTC · Tout inclus · Engagement 12 mois', cta:'💬 Je veux être propriétaire', ctaClass:'plan-cta-green', href:'https://wa.me/33XXXXXXXXX', featured:true, features:['Maintenance & entretien inclus','Assurance vol & dommages incluse','GPS IoT temps réel inclus','Réparation locale J+0 à Strasbourg',[true,'Propriété transférée au mois 12'],'Résiliation possible (pénalité unique €200)','Contrat bilingue FR + AR'] },
        { icon:'🔄', name:'Location Mensuelle', tagline:'Flexibilité totale, sans engagement', amount:'€100', unit:'/mois', period:'TTC · Tout inclus · Sans engagement', cta:'Louer ce mois-ci →', ctaClass:'plan-cta-outline', href:'https://wa.me/33XXXXXXXXX', features:['Maintenance & entretien inclus','Assurance vol & dommages incluse','GPS IoT temps réel inclus','Réparation locale J+0 à Strasbourg','Préavis résiliation : 30 jours','Contrat bilingue FR + AR',[false,'Propriété non incluse']] },
        { icon:'🏢', name:'Flotte B2B', tagline:'Pour restaurants, logistique, artisans', amount:'€100', unit:'/vélo', period:'HT · À partir de 3 vélos · Engagement 12 mois', cta:'Demander un devis flotte →', ctaClass:'plan-cta-outline', href:'#entreprises', features:['Maintenance & réparations incluses','Assurance flotte complète','GPS + tableau de bord web','Remplacement vélo sous 24h',[true,'Attestations FMD pour vos salariés'],'Réduction IS 25% + TVA récupérable','Facture mensuelle unique'] },
      ],
    },
    inclusive: { label:'// Toujours inclus — sans discussion', h2:'€125/mois. Pas un centime de plus.' },
    stats: [
      { num:'80',   label:'Vélos disponibles\ndès juin 2026' },
      { num:'J+0',  label:'Réparation locale\nà Strasbourg' },
      { num:'12',   label:'Mois pour devenir\npropriétaire' },
      { num:'100%', label:'Tout inclus\nsans surprise' },
    ],
    fmd: {
      label:'// Forfait Mobilités Durables',
      h2:"Votre entreprise finance le vélo. L'État paie une partie.",
      sub:'Trois dispositifs cumulables pour réduire votre coût réel à moins de €71/vélo/mois.',
      simLabel:'// Simulation — flotte de 10 vélos',
      cta:'→ Obtenir mon dossier FMD complet (gratuit)',
    },
    b2b: {
      label:'// Solutions entreprises', h2:'Une flotte. Un contrat. Zéro gestion.',
      sub:"TourDeWheel gère tout pour votre équipe — livraison, maintenance, assurance, réparations, attestations FMD.",
      cards:[
        { ico:'🍽', name:'Restaurateurs & Chaînes', desc:"3 à 20 vélos pour votre équipe de livraison. Contrat flotte unique, facturation mensuelle, maintenance incluse.", link:'Devis restauration' },
        { ico:'🚚', name:'Transport & Logistique', desc:"Flottes de 10 à 50 vélos pour la livraison du dernier kilomètre. GPS temps réel sur chaque véhicule.", link:'Devis logistique' },
        { ico:'🏗', name:'Artisans & Professions', desc:"Vélo électrique pour vos déplacements professionnels. Éligible vélo de fonction — réduction IS 25%.", link:'Devis artisan' },
      ],
      tableHead:['Taille de flotte','Tarif mensuel / vélo (HT)','Engagement','Statut'],
    },
    how: {
      label:'// Comment ça marche', h2:'Simple. Vraiment.',
      steps:[
        { title:'Contactez-nous', desc:"Écrivez-nous sur WhatsApp — nous répondons en moins d'une heure, 7j/7. En français ou en arabe." },
        { title:'Choisissez', desc:"Vous choisissez votre formule (Lease-to-Own ou mensuelle). Contrat préparé en 24h — bilingue FR + AR." },
        { title:'Signez & roulez', desc:"Venez à notre atelier à Strasbourg, signez votre contrat, repartez avec votre vélo le jour même." },
        { title:'Mois 12 : Propriétaire', desc:"Au 12ème mois, TourDeWheel organise une remise officielle de propriété. Le vélo est à vous. Définitivement." },
      ],
    },
    testi: {
      label:"// Ils roulent, ils livrent, ils possèdent", h2:"Ce qu'ils disent.",
      sub:'Bientôt les vrais témoignages de nos premiers riders. En attendant, voici ce que nous promettons.',
    },
    finalCta: {
      label:'// Prêt à commencer ?', h2a:'Votre vélo vous attend', h2b:'Strasbourg',
      sub:"Parlez-nous sur WhatsApp — nous répondons en moins d'une heure, 7j/7. En français et en arabe. Premier vélo disponible dès juin 2026.",
      cta1:'💬 Démarrer sur WhatsApp', cta2:'Formulaire de devis →',
      note:"✓ Réponse en moins d'1h · ✓ Aucun engagement avant signature · ✓ Contrat FR + AR",
    },
    footer: {
      desc:"Premier opérateur professionnel de vélos électriques à Strasbourg. Location mensuelle, Lease-to-Own, et solutions flotte pour entreprises. Lancement juin 2026.",
      wa:'💬 WhatsApp — Réponse en 1h',
      cols:[
        { title:'Solutions', links:[['#livreur','Livreur indépendant'],['#plans','Lease-to-Own'],['#plans','Location mensuelle'],['#entreprises','Flotte entreprise'],['#fmd','Forfait Mobilités']] },
        { title:'Strasbourg', links:[['#','Notre atelier'],['#','Qui sommes-nous'],['#','Tarifs'],['#','Contact']] },
        { title:'Liens utiles', links:[['#','Mentions légales'],['#','Politique de confidentialité'],['#','CGV'],['#','LinkedIn'],['#','↗ VéloRouge — Tourisme']] },
      ],
      copy:'© 2026 TourDeWheel SAS · Strasbourg, Grand Est, France',
      copy2:'Site distinct de VéloRouge (tourisme & location courte durée)',
    },
  },

  en: {
    nav: {
      links:[['#livreur','Riders'],['#plans','Plans'],['#entreprises','Business'],['#fmd','FMD'],['#tarifs','Pricing']],
      cta:'💬 Get a quote',
    },
    hero: {
      eyebrow:'First professional operator in Strasbourg',
      h1a:'Your bike.', h1b:'Your property.', h1c:'in 12 months. all included.',
      sub1:'The only program in Strasbourg that takes you from',
      sub2:'renter to owner in 12 months.',
      sub3:'Maintenance, insurance, GPS and local repair included.',
      sub4:'Never a surprise on your bill.',
      cta1:'💬 Start on WhatsApp', cta2:'See plans →',
      trust:['Maintenance included','Insurance included','IoT GPS included','Same-day repair','Ownership in 12 months'],
      calcLabel:'// Savings Calculator',
      calcLoc:'Pure rental', calcLocSub:'no ownership', calcTdwSub:'+ you own it',
      calcSaves:'You save', calcDuration:'Rental duration',
      calcNote:'Competitor: €89/month × duration. TourDeWheel: €1,500 fixed then €0.',
      calcYears:(y) => `${y} year${y > 1 ? 's' : ''}`,
    },
    pain: {
      label:'// Why TourDeWheel', h2:'We know your daily life.',
      sub:'You deliver every day. Your bike must be as reliable as you.',
      rows:[
        ['Breakdown = lost day = zero income. Support in Paris, workshop 4h away.','Local same-day repair in Strasbourg — you get back on the road.'],
        ['€89/month × 5 years = €5,340 spent — and you still own nothing.','12 months × €125 = €1,500 — the bike is yours permanently.'],
        ['Hidden costs: uncovered repairs, separate insurance, GPS as paid option.','€125/month. All included. Never a surprise. One amount, one invoice.'],
        ['Contract only in French — difficult for Arabic-speaking riders.','Contract available in French AND Arabic. Local team that speaks your language.'],
      ],
    },
    plans: {
      label:'// Our plans', h2:'Choose your plan.', badge:'Recommended',
      sub:'Two options for independent riders, one complete solution for businesses.',
      items:[
        { icon:'🏆', name:'Lease-to-Own', tagline:'Become owner in 12 months', amount:'€125', unit:'/month', period:'VAT incl. · All included · 12-month commitment', cta:'💬 I want to own my bike', ctaClass:'plan-cta-green', href:'https://wa.me/33XXXXXXXXX', featured:true, features:['Maintenance & servicing included','Theft & damage insurance included','Real-time IoT GPS included','Local same-day repair in Strasbourg',[true,'Ownership transferred at month 12'],'Cancellation possible (€200 one-time fee)','Bilingual contract FR + AR'] },
        { icon:'🔄', name:'Monthly Rental', tagline:'Total flexibility, no commitment', amount:'€100', unit:'/month', period:'VAT incl. · All included · No commitment', cta:'Rent this month →', ctaClass:'plan-cta-outline', href:'https://wa.me/33XXXXXXXXX', features:['Maintenance & servicing included','Theft & damage insurance included','Real-time IoT GPS included','Local same-day repair in Strasbourg','30-day cancellation notice','Bilingual contract FR + AR',[false,'Ownership not included']] },
        { icon:'🏢', name:'B2B Fleet', tagline:'For restaurants, logistics, tradespeople', amount:'€100', unit:'/bike', period:'excl. VAT · From 3 bikes · 12-month commitment', cta:'Request fleet quote →', ctaClass:'plan-cta-outline', href:'#entreprises', features:['Maintenance & repairs included','Full fleet insurance','GPS + web dashboard','Bike replacement within 24h',[true,'FMD certificates for your employees'],'25% IS reduction + recoverable VAT','Single monthly invoice'] },
      ],
    },
    inclusive:{ label:'// Always included — no discussion', h2:'€125/month. Not a cent more.' },
    stats:[
      { num:'80',   label:'Bikes available\nfrom June 2026' },
      { num:'J+0',  label:'Local repair\nin Strasbourg' },
      { num:'12',   label:'Months to become\nan owner' },
      { num:'100%', label:'All included\nno surprises' },
    ],
    fmd:{
      label:'// Sustainable Mobility Package',
      h2:'Your company funds the bike. The state pays part.',
      sub:'Three stackable schemes to reduce your real cost to under €71/bike/month.',
      simLabel:'// Simulation — fleet of 10 bikes',
      cta:'→ Get my complete FMD file (free)',
    },
    b2b:{
      label:'// Business solutions', h2:'One fleet. One contract. Zero management.',
      sub:'TourDeWheel handles everything for your team — delivery, maintenance, insurance, repairs, FMD certificates.',
      cards:[
        { ico:'🍽', name:'Restaurants & Chains', desc:"3 to 20 bikes for your delivery team. Single fleet contract, monthly billing, maintenance included.", link:'Restaurant quote' },
        { ico:'🚚', name:'Transport & Logistics', desc:"Fleets of 10 to 50 bikes for last-mile delivery. Real-time GPS on each vehicle.", link:'Logistics quote' },
        { ico:'🏗', name:'Tradespeople & Professionals', desc:"Electric bike for your professional travel. Eligible as company bike — 25% IS reduction.", link:'Tradesperson quote' },
      ],
      tableHead:['Fleet size','Monthly rate / bike (excl. VAT)','Commitment','Status'],
    },
    how:{
      label:'// How it works', h2:'Simple. Really.',
      steps:[
        { title:'Contact us', desc:"Message us on WhatsApp — we reply in under an hour, 7 days a week. In French or Arabic." },
        { title:'Choose', desc:"Choose your plan (Lease-to-Own or monthly). Contract ready in 24h — bilingual FR + AR." },
        { title:'Sign & ride', desc:"Come to our workshop in Strasbourg, sign your contract, leave with your bike the same day." },
        { title:'Month 12: Owner', desc:"At month 12, TourDeWheel organises an official ownership handover. The bike is yours. Forever." },
      ],
    },
    testi:{
      label:'// They ride, they deliver, they own', h2:'What they say.',
      sub:'Real testimonials from our first riders coming soon. In the meantime, here is what we promise.',
    },
    finalCta:{
      label:'// Ready to start?', h2a:'Your bike is waiting', h2b:'Strasbourg',
      sub:"Message us on WhatsApp — we reply in under an hour, 7 days a week. In French and Arabic. First bike available from June 2026.",
      cta1:'💬 Start on WhatsApp', cta2:'Quote form →',
      note:'✓ Reply in under 1h · ✓ No commitment before signing · ✓ Contract FR + AR',
    },
    footer:{
      desc:"First professional electric bike operator in Strasbourg. Monthly rental, Lease-to-Own, and fleet solutions for businesses. Launch June 2026.",
      wa:'💬 WhatsApp — Reply in 1h',
      cols:[
        { title:'Solutions', links:[['#livreur','Independent rider'],['#plans','Lease-to-Own'],['#plans','Monthly rental'],['#entreprises','Business fleet'],['#fmd','Mobility Package']] },
        { title:'Strasbourg', links:[['#','Our workshop'],['#','About us'],['#','Pricing'],['#','Contact']] },
        { title:'Useful links', links:[['#','Legal notice'],['#','Privacy policy'],['#','T&Cs'],['#','LinkedIn'],['#','↗ VéloRouge — Tourism']] },
      ],
      copy:'© 2026 TourDeWheel SAS · Strasbourg, Grand Est, France',
      copy2:'Separate from VéloRouge (tourism & short-term rental)',
    },
  },
};

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState('fr');
  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
