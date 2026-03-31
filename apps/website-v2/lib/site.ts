export type Cta = {
  label: string;
  href: string;
};

export type BaseSectionContent = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
};

export type ListSectionContent = BaseSectionContent & {
  items: string[];
};

export type HeroSectionContent = BaseSectionContent & {
  cta: Cta;
};

export type PreiseSectionContent = BaseSectionContent & {
  hint: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqSectionContent = BaseSectionContent & {
  items: FaqItem[];
};

export type KontaktSectionContent = BaseSectionContent & {
  details: string[];
  phone: string;
  email: string;
  area: string;
  notes: string[];
  formTitle: string;
  formDescription: string;
  formLabels: {
    name: string;
    email: string;
    message: string;
    submit: string;
  };
  formPlaceholders: {
    name: string;
    email: string;
    message: string;
  };
};

export type CtaSectionContent = BaseSectionContent & {
  cta: Cta;
};

export type LeistungenPageSection = {
  title: string;
  text: string;
};

export type LeistungenPageContent = {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  areas: string[];
  sections: LeistungenPageSection[];
};

export type SiteContent = {
  hero: HeroSectionContent;
  leistungen: ListSectionContent;
  leistungenPage: LeistungenPageContent;
  vorteile: ListSectionContent;
  ablauf: ListSectionContent;
  vertrauen: ListSectionContent;
  preise: PreiseSectionContent;
  faq: FaqSectionContent;
  kontakt: KontaktSectionContent;
  cta: CtaSectionContent;
};

export const site: SiteContent = {
  hero: {
    id: "hero",
    eyebrow: "Hanseatische Senioren-Alltagsbetreuung",
    title: "Ruhe und Verlaesslichkeit im Alltag",
    description:
      "Wir begleiten Seniorinnen und Senioren in ihrem Alltag mit Zeit, Respekt und klaren Absprachen.",
    cta: {
      label: "Kontakt aufnehmen",
      href: "/kontakt",
    },
  },
  leistungen: {
    id: "leistungen",
    eyebrow: "Leistungen",
    title: "Uebersicht aller Leistungen",
    description:
      "Unsere Unterstuetzung passt sich der Lebenssituation an und bleibt gut nachvollziehbar.",
    items: [
      "24h Betreuung",
      "Alltagsbegleitung",
      "Haushaltshilfe",
      "Gesellschaft",
      "Entlastung Angehoerige",
    ],
  },
  leistungenPage: {
    id: "leistungen-uebersicht",
    eyebrow: "Unsere Leistungen",
    title: "Alltagsnahe Unterstuetzung fuer Seniorinnen und Senioren",
    intro:
      "Wir bieten praktische Hilfe im Alltag, damit Seniorinnen und Senioren moeglichst sicher und ruhig in ihrer gewohnten Umgebung leben koennen.",
    areas: [
      "Alltagsbegleitung",
      "Arzt- und Terminbegleitung",
      "Einkaufen",
      "Spaziergaenge",
      "Gesellschaft und Aktivierung",
      "Unterstuetzung im Alltag",
      "Demenzbegleitung",
      "Entlastung fuer Angehoerige",
    ],
    sections: [
      {
        title: "Begleitung im Tagesablauf",
        text:
          "Wir begleiten bei Terminen, Einkaeufen und Wegen im Alltag. Dabei achten wir auf klare Absprachen, Verlaesslichkeit und ein ruhiges Tempo.",
      },
      {
        title: "Zuwendung und Aktivierung",
        text:
          "Gemeinsame Gespraeche, kleine Aktivitaeten und Spaziergaenge helfen dabei, den Tag zu strukturieren und soziale Teilhabe zu erhalten.",
      },
      {
        title: "Unterstuetzung bei Demenz und Entlastung",
        text:
          "Bei Demenz begleiten wir mit Geduld und Orientierungshilfen. Gleichzeitig entlasten wir Angehoerige durch verlaessliche Uebernahme vereinbarter Aufgaben.",
      },
    ],
  },
  vorteile: {
    id: "vorteile",
    eyebrow: "Vorteile",
    title: "Sicher, nah und gut nachvollziehbar",
    description:
      "Angehoerige und Seniorinnen sowie Senioren erhalten eine ruhige und verlaessliche Begleitung.",
    items: [
      "Feste Ansprechperson",
      "Ruhige Kommunikation ohne Zeitdruck",
      "Absprachen in klarer Sprache",
    ],
  },
  ablauf: {
    id: "ablauf",
    eyebrow: "Ablauf",
    title: "Schritt fuer Schritt zum Start",
    description:
      "Der Beginn ist einfach und transparent, damit alle Beteiligten Sicherheit haben.",
    items: [
      "Erstgespraech am Telefon",
      "Persoenliches Kennenlernen vor Ort",
      "Beginn der Begleitung nach gemeinsamer Planung",
    ],
  },
  vertrauen: {
    id: "vertrauen",
    eyebrow: "Vertrauen",
    title: "Respektvoller Umgang steht im Mittelpunkt",
    description:
      "Wir arbeiten verbindlich und mit einem klaren Blick auf die persoenliche Lebenssituation.",
    items: [
      "Puenktlichkeit und Verlaesslichkeit",
      "Diskreter Umgang mit persoenlichen Themen",
      "Wertschaetzende Haltung im Alltag",
    ],
  },
  preise: {
    id: "preise",
    eyebrow: "Preise",
    title: "Uebersichtliche Kosten ohne Ueberraschungen",
    description:
      "Die Kosten ergeben sich aus Dauer und Umfang der vereinbarten Unterstuetzung.",
    hint: "Eine verstaendliche Uebersicht erhalten Sie vor dem Start.",
  },
  faq: {
    id: "faq",
    eyebrow: "Haeufige Fragen",
    title: "Antworten in klarer Sprache",
    description: "Hier finden Sie kurze Antworten auf wichtige Fragen zum Ablauf.",
    items: [
      {
        question: "Wie schnell kann die Betreuung beginnen?",
        answer: "Nach dem Erstgespraech stimmen wir den passenden Starttermin ab.",
      },
      {
        question: "Gibt es feste Besuchszeiten?",
        answer: "Ja, die Zeiten werden gemeinsam vereinbart und klar festgehalten.",
      },
      {
        question: "Wer ist die Ansprechperson?",
        answer:
          "Sie haben eine feste Ansprechperson fuer alle organisatorischen Fragen.",
      },
    ],
  },
  kontakt: {
    id: "kontakt",
    eyebrow: "Kontakt",
    title: "Wir nehmen uns Zeit fuer Ihr Anliegen",
    description:
      "Melden Sie sich gern fuer ein ruhiges Erstgespraech und eine erste Einordnung.",
    phone: "040 000000",
    email: "kontakt@hanseatische-alltagsbetreuung.de",
    area: "Hamburg",
    notes: [
      "Ihre Anfrage ist unverbindlich.",
      "Wir melden uns zeitnah bei Ihnen zurueck.",
      "Sie sprechen mit einer festen Ansprechperson.",
    ],
    details: [
      "Telefon: 040 000000",
      "E-Mail: kontakt@hanseatische-alltagsbetreuung.de",
      "Einsatzgebiet: Hamburg",
    ],
    formTitle: "Kontaktformular",
    formDescription:
      "Nutzen Sie das Formular fuer eine kurze Nachricht. Wir melden uns zeitnah zurueck.",
    formLabels: {
      name: "Name",
      email: "E-Mail",
      message: "Nachricht",
      submit: "Unverbindlich anfragen",
    },
    formPlaceholders: {
      name: "Ihr Name",
      email: "Ihre E-Mail-Adresse",
      message: "Worum geht es Ihnen?",
    },
  },
  cta: {
    id: "cta",
    eyebrow: "Naechster Schritt",
    title: "Unverbindliches Erstgespraech vereinbaren",
    description:
      "In einem ersten Gespraech klaeren wir gemeinsam, welche Unterstuetzung sinnvoll ist.",
    cta: {
      label: "Zum Kontakt",
      href: "/kontakt",
    },
  },
};
