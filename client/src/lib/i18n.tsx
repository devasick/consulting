import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "de" | "en";

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  de: {
    "nav.home": "Startseite",
    "nav.services": "Leistungen",
    "nav.about": "Kanzlei",
    "nav.contact": "Kontakt",
    "hero.title": "Kompetente Steuerberatung in Hamburg",
    "hero.subtitle": "Verlässliche Partner für KMU, Startups, Freiberufler und Privatpersonen. Wir optimieren Ihre Finanzen mit modernster Kanzleitechnik.",
    "hero.cta": "Kostenlose Erstberatung",
    "hero.secondary": "Unsere Leistungen",
    "services.title": "Unsere Leistungen",
    "services.subtitle": "Umfassende Beratung aus einer Hand",
    "services.learn_more": "Mehr erfahren",
    "about.title": "Über Vivek Padghan Consulting",
    "about.subtitle": "Ihr Vertrauen ist unser Kapital",
    "contact.title": "Kontaktieren Sie uns",
    "contact.subtitle": "Wir sind für Sie da. Vereinbaren Sie einen unverbindlichen Termin.",
    "contact.name": "Name",
    "contact.email": "E-Mail",
    "contact.phone": "Telefon",
    "contact.message": "Nachricht",
    "contact.submit": "Nachricht senden",
    "contact.submitting": "Wird gesendet...",
    "footer.rights": "Alle Rechte vorbehalten.",
    "legal.impressum": "Impressum",
    "legal.privacy": "Datenschutzerklärung",
  },
  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.about": "About Us",
    "nav.contact": "Contact",
    "hero.title": "Expert Tax Consulting in Hamburg",
    "hero.subtitle": "Reliable partners for SMEs, startups, freelancers, and individuals. We optimize your finances with state-of-the-art firm technology.",
    "hero.cta": "Free Initial Consultation",
    "hero.secondary": "Our Services",
    "services.title": "Our Services",
    "services.subtitle": "Comprehensive consulting from a single source",
    "services.learn_more": "Learn more",
    "about.title": "About Vivek Padghan Consulting",
    "about.subtitle": "Your trust is our capital",
    "contact.title": "Contact Us",
    "contact.subtitle": "We are here for you. Schedule a non-binding appointment.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.message": "Message",
    "contact.submit": "Send Message",
    "contact.submitting": "Sending...",
    "footer.rights": "All rights reserved.",
    "legal.impressum": "Legal Notice",
    "legal.privacy": "Privacy Policy",
  }
};

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("de");

  const t = (key: string) => {
    return translations[lang][key] || key;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
