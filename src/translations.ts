export type Language = 'en' | 'fr';

export const translations = {
  en: {
    nav: {
      services: 'Services',
      about: 'About',
      contact: 'Contact',
      cta: 'Get Started',
    },
    hero: {
      greeting: 'Hi there',
      intro: "I'm the founder of ADSDO Agency, I am a Meta and Google-certified Marketing analyst with nine years of experience in Digital Marketing. I think the caliber of your business should be reflected in the quality of your website, content, and AD campaigns.",
      cta: 'Work With Us',
      secondary: 'View Services',
      badge: 'Meta & Google Certified',
      stats: [
        { value: '9+', label: 'Years Experience' },
        { value: '200+', label: 'Clients Served' },
        { value: '98%', label: 'Satisfaction Rate' },
      ],
    },
    services: {
      heading: 'Our Services',
      subheading: 'Comprehensive digital solutions tailored to elevate your brand and accelerate growth.',
      items: [
        {
          title: 'Web Development',
          description: 'Custom, high-performance websites and web applications built to convert visitors into clients.',
        },
        {
          title: 'Digital Marketing',
          description: 'Data-driven campaigns across all digital channels designed to maximize your ROI.',
        },
        {
          title: 'Advertising',
          description: 'Precision-targeted paid ad campaigns on Meta, Google, and beyond that deliver measurable results.',
        },
        {
          title: 'Content Strategy',
          description: 'Compelling content that tells your brand story, builds authority, and engages your audience.',
        },
        {
          title: 'SEO Optimization',
          description: 'Technical and on-page SEO strategies that drive organic traffic and improve your search rankings.',
        },
        {
          title: 'Lead Generation',
          description: 'Sophisticated funnels and automation systems that consistently deliver qualified leads.',
        },
      ],
    },
    about: {
      heading: 'About ADSDO Agency',
      subheading: 'Excellence at Every Level',
      body: 'ADSDO Agency is a full-service digital marketing agency founded on the belief that every business deserves world-class digital presence. With certifications from Meta and Google, and nearly a decade of hands-on experience, we deliver strategies that are both creative and analytically rigorous.',
      body2: 'We partner with ambitious brands to craft digital experiences that resonate — from compelling web design to performance-driven advertising campaigns.',
      certBadge1: 'Meta Certified',
      certBadge2: 'Google Certified',
    },
    contact: {
      heading: 'Start Your Project',
      subheading: "Tell us about your goals and we'll create a tailored strategy for your business.",
      fields: {
        name: 'Full Name',
        email: 'Email Address',
        service: 'Service Interested In',
        message: 'Your Message',
        placeholder_name: 'John Smith',
        placeholder_email: 'john@company.com',
        placeholder_message: 'Tell us about your project...',
        service_default: 'Select a service',
        services: [
          'Web Development',
          'Digital Marketing',
          'Advertising',
          'Content Strategy',
          'SEO Optimization',
          'Lead Generation',
        ],
      },
      submit: 'Send Message',
      submitting: 'Sending...',
      success: 'Thank you! Your message has been sent. We will be in touch shortly.',
      error: 'Something went wrong. Please try again or contact us directly.',
    },
    footer: {
      tagline: 'Elevating brands through precision digital marketing.',
      rights: '© 2025 ADSDO Agency. All rights reserved.',
      links: {
        services: 'Services',
        about: 'About',
        contact: 'Contact',
        privacy: 'Privacy Policy',
      },
    },
  },
  fr: {
    nav: {
      services: 'Services',
      about: 'À Propos',
      contact: 'Contact',
      cta: 'Commencer',
    },
    hero: {
      greeting: 'Bonjour',
      intro: "Je suis la fondatrice d'ADSDO Agency, analyste marketing certifiée Meta et Google avec neuf ans d'expérience en marketing digital. Je crois que l'excellence de votre entreprise doit se refléter dans la qualité de votre site web, de votre contenu et de vos campagnes publicitaires.",
      cta: 'Travaillons Ensemble',
      secondary: 'Voir les Services',
      badge: 'Certifiée Meta & Google',
      stats: [
        { value: '9+', label: "Années d'Expérience" },
        { value: '200+', label: 'Clients Servis' },
        { value: '98%', label: 'Taux de Satisfaction' },
      ],
    },
    services: {
      heading: 'Nos Services',
      subheading: 'Des solutions digitales complètes et personnalisées pour élever votre marque et accélérer votre croissance.',
      items: [
        {
          title: 'Développement Web',
          description: 'Sites web et applications sur mesure, haute performance, conçus pour convertir les visiteurs en clients.',
        },
        {
          title: 'Marketing Digital',
          description: 'Campagnes basées sur les données sur tous les canaux digitaux, conçues pour maximiser votre ROI.',
        },
        {
          title: 'Publicité',
          description: 'Campagnes publicitaires payantes ultra-ciblées sur Meta, Google et au-delà, avec des résultats mesurables.',
        },
        {
          title: 'Stratégie de Contenu',
          description: 'Un contenu percutant qui raconte votre histoire de marque, renforce votre autorité et engage votre audience.',
        },
        {
          title: 'Optimisation SEO',
          description: 'Stratégies SEO techniques et on-page qui génèrent du trafic organique et améliorent votre classement.',
        },
        {
          title: 'Génération de Leads',
          description: "Entonnoirs sophistiqués et systèmes d'automatisation qui livrent régulièrement des leads qualifiés.",
        },
      ],
    },
    about: {
      heading: 'À Propos d\'ADSDO Agency',
      subheading: 'L\'Excellence à Chaque Étape',
      body: 'ADSDO Agency est une agence de marketing digital à service complet fondée sur la conviction que chaque entreprise mérite une présence digitale de classe mondiale. Avec des certifications Meta et Google et près d\'une décennie d\'expérience pratique, nous délivrons des stratégies à la fois créatives et analytiquement rigoureuses.',
      body2: 'Nous accompagnons les marques ambitieuses pour créer des expériences digitales qui résonnent — du design web percutant aux campagnes publicitaires axées sur la performance.',
      certBadge1: 'Certifiée Meta',
      certBadge2: 'Certifiée Google',
    },
    contact: {
      heading: 'Démarrez Votre Projet',
      subheading: 'Parlez-nous de vos objectifs et nous créerons une stratégie sur mesure pour votre entreprise.',
      fields: {
        name: 'Nom Complet',
        email: 'Adresse Email',
        service: 'Service Souhaité',
        message: 'Votre Message',
        placeholder_name: 'Jean Dupont',
        placeholder_email: 'jean@entreprise.com',
        placeholder_message: 'Parlez-nous de votre projet...',
        service_default: 'Sélectionner un service',
        services: [
          'Développement Web',
          'Marketing Digital',
          'Publicité',
          'Stratégie de Contenu',
          'Optimisation SEO',
          'Génération de Leads',
        ],
      },
      submit: 'Envoyer le Message',
      submitting: 'Envoi en cours...',
      success: 'Merci ! Votre message a été envoyé. Nous vous contacterons très prochainement.',
      error: 'Une erreur s\'est produite. Veuillez réessayer ou nous contacter directement.',
    },
    footer: {
      tagline: 'Élever les marques grâce au marketing digital de précision.',
      rights: '© 2025 ADSDO Agency. Tous droits réservés.',
      links: {
        services: 'Services',
        about: 'À Propos',
        contact: 'Contact',
        privacy: 'Politique de Confidentialité',
      },
    },
  },
};
