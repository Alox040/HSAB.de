// lib/content.ts — Einzige Datenquelle für alle statischen Inhalte der Website

// ─── Unternehmensdaten ────────────────────────────────────────────────────────

export const business = {
  name: "Hanseatische Senioren Alltagsbegleitung",
  shortName: "HSA",
  owner: "Wolfgang Posdziech",
  address: "Wulfsdorfer Weg 108d",
  zip: "22359",
  city: "Hamburg",
  phone: "+49 171 626 60 18",
  phoneDisplay: "+49 171 626 60 18",
  email: "posdziech@t-online.de",
  ustId: "DE313499881",
  serviceArea: "Hamburg Nord & West",
  serviceAreaRadius: "50 km",
  website: "https://www.seniorenbetreuung.de",
} as const;

// ─── Dienstleistungen ─────────────────────────────────────────────────────────

export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
}

export const services: Service[] = [
  {
    id: "24-stunden-betreuung",
    title: "24-Stunden Betreuung",
    description:
      "Rund-um-die-Uhr-Betreuung in der gewohnten häuslichen Umgebung. Eine erfahrene Betreuungsperson wohnt vorübergehend bei Ihrem Angehörigen und sorgt für Sicherheit und Wohlbefinden.",
    details: [
      "Ständige Begleitung und Aufsicht",
      "Hilfe bei allen Alltagsaktivitäten",
      "Nachtbereitschaft und Sicherheit",
      "Kontinuität durch feste Betreuungspersonen",
    ],
  },
  {
    id: "alltaegliche-hilfe",
    title: "Alltägliche Hilfe",
    description:
      "Unterstützung bei den täglichen Anforderungen des Lebens — von der Körperpflege über Mahlzeiten bis hin zu Behördengängen. Wir helfen dort, wo Hilfe benötigt wird.",
    details: [
      "Körperpflege und Ankleiden",
      "Zubereitung von Mahlzeiten",
      "Begleitung zu Terminen",
      "Hilfe bei Behördengängen",
    ],
  },
  {
    id: "gesellschaft",
    title: "Gesellschaft",
    description:
      "Einsamkeit ist eine der größten Herausforderungen im Alter. Unsere Betreuungspersonen schenken echte menschliche Zuwendung, führen Gespräche und teilen gemeinsame Aktivitäten.",
    details: [
      "Gespräche und aktives Zuhören",
      "Gemeinsame Spaziergänge",
      "Begleitung zu kulturellen Veranstaltungen",
      "Förderung sozialer Kontakte",
    ],
  },
  {
    id: "haushalt",
    title: "Haushalt",
    description:
      "Ein gepflegtes Zuhause trägt wesentlich zum Wohlbefinden bei. Wir übernehmen Haushaltsaufgaben, damit Ihre Angehörigen in einer sauberen und ordentlichen Umgebung leben können.",
    details: [
      "Reinigung und Ordnung",
      "Wäsche waschen und bügeln",
      "Einkaufen und Vorratshaltung",
      "Gartenpflege (auf Anfrage)",
    ],
  },
  {
    id: "entlastung-fuer-familien",
    title: "Entlastung für Familien",
    description:
      "Pflegende Angehörige brauchen Auszeiten. Wir übernehmen die Betreuung zuverlässig und ermöglichen Ihnen, sich zu erholen — in gutem Wissen, dass Ihr Angehöriger gut versorgt ist.",
    details: [
      "Urlaubs- und Wochenendvertretung",
      "Stundenweise Entlastung",
      "Professionelle Übergabe",
      "Regelmäßige Rückmeldungen an die Familie",
    ],
  },
];

// ─── Preise ───────────────────────────────────────────────────────────────────

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  priceNote: string;
  description: string;
  features: string[];
  highlighted: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    id: "basis",
    name: "Basis",
    price: "ab 2.490 €",
    priceNote: "pro Monat",
    description: "Grundversorgung für selbstständige Senioren mit leichtem Unterstützungsbedarf.",
    features: [
      "Alltägliche Hilfe & Haushalt",
      "Gesellschaft und Gespräche",
      "Begleitung zu Terminen",
      "Mo–Fr Betreuung",
    ],
    highlighted: false,
  },
  {
    id: "komfort",
    name: "Komfort",
    price: "ab 2.990 €",
    priceNote: "pro Monat",
    description: "Unsere beliebteste Lösung für umfassende Betreuung und Entlastung der Familie.",
    features: [
      "Alles aus Basis",
      "7 Tage / Woche Betreuung",
      "Erweiterte Alltagsbegleitung",
      "Regelmäßige Familienberichte",
    ],
    highlighted: true,
  },
  {
    id: "intensiv",
    name: "Intensiv",
    price: "ab 3.490 €",
    priceNote: "pro Monat",
    description: "Vollumfängliche Betreuung rund um die Uhr für höheren Pflegebedarf.",
    features: [
      "Alles aus Komfort",
      "24-Stunden-Betreuung",
      "Nachtbereitschaft",
      "Koordination mit Pflegediensten",
    ],
    highlighted: false,
  },
];

// ─── Werte & Vertrauen ────────────────────────────────────────────────────────

export interface Value {
  id: string;
  title: string;
  description: string;
}

export const values: Value[] = [
  {
    id: "wuerde",
    title: "Würde und Respekt",
    description:
      "Jeder Mensch verdient es, mit Würde behandelt zu werden. Wir achten die Persönlichkeit und die Geschichte jedes Seniorenbesuchers.",
  },
  {
    id: "zuverlaessigkeit",
    title: "Zuverlässigkeit",
    description:
      "Familien verlassen sich auf uns. Wir halten unsere Zusagen — pünktlich, verlässlich und transparent in unserer Kommunikation.",
  },
  {
    id: "waerme",
    title: "Menschliche Wärme",
    description:
      "Pflege ist mehr als Aufgaben erledigen. Wir schenken echte Zuwendung und behandeln jeden Betreuten wie ein Familienmitglied.",
  },
  {
    id: "zuhause",
    title: "Vertraute Umgebung",
    description:
      "Das eigene Zuhause ist der beste Ort für Senioren. Wir ermöglichen ein selbstbestimmtes Leben in gewohnter Umgebung.",
  },
];

// ─── Häufige Fragen ───────────────────────────────────────────────────────────

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: "Wie schnell kann eine Betreuung beginnen?",
    answer:
      "In dringenden Fällen können wir innerhalb von 48 bis 72 Stunden eine Betreuungsperson bereitstellen. Bei geplanter Betreuung empfehlen wir einen Vorlauf von 1 bis 2 Wochen, damit wir die passende Person sorgfältig auswählen können.",
  },
  {
    question: "Wie werden die Betreuungspersonen ausgewählt?",
    answer:
      "Wir arbeiten ausschließlich mit erfahrenen, geprüften Betreuungspersonen zusammen. Jede Person wird persönlich von Wolfgang Posdziech kennengelernt und auf ihre fachliche Eignung sowie menschliche Qualitäten überprüft. Referenzen werden eingeholt und geprüft.",
  },
  {
    question: "Was kostet die Betreuung und was ist inbegriffen?",
    answer:
      "Unsere Preise beginnen bei 2.490 € pro Monat für das Basis-Paket. Im Preis enthalten sind alle vereinbarten Betreuungsleistungen, die Koordination und Begleitung durch HSA sowie regelmäßige Rückmeldungen an die Familie. Ein transparentes Angebot erstellen wir nach einem kostenlosen Erstgespräch.",
  },
  {
    question: "Werden Leistungen von der Pflegekasse übernommen?",
    answer:
      "Bei anerkanntem Pflegegrad können Leistungen der Pflegekasse für bestimmte Betreuungsangebote in Anspruch genommen werden. Wir beraten Sie gerne zu den Möglichkeiten und helfen bei der Antragstellung. Kontaktieren Sie uns für ein unverbindliches Erstgespräch.",
  },
  {
    question: "In welchem Gebiet sind Sie tätig?",
    answer:
      "Wir sind hauptsächlich in Hamburg Nord und West tätig. Auf Anfrage betreuen wir auch Senioren im Hamburger Umland bis zu einem Radius von 50 km. Sprechen Sie uns an — wir finden gemeinsam eine Lösung.",
  },
  {
    question: "Was passiert, wenn die Betreuungsperson krank wird?",
    answer:
      "Wir stellen sicher, dass immer eine Vertretung verfügbar ist. Im Krankheitsfall organisieren wir umgehend eine qualifizierte Ersatzperson, damit die Betreuung Ihres Angehörigen ohne Unterbrechung fortgesetzt werden kann.",
  },
  {
    question: "Kann ich die Betreuung jederzeit beenden?",
    answer:
      "Unsere Verträge haben faire Kündigungsfristen. Wir verstehen, dass sich Lebenssituationen ändern. Sprechen Sie uns an — wir finden gemeinsam die beste Lösung für Sie und Ihren Angehörigen.",
  },
];

// ─── Prozessschritte ──────────────────────────────────────────────────────────

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Erstkontakt",
    description:
      "Rufen Sie uns an oder schreiben Sie uns. Wir hören Ihnen zu und besprechen Ihre Situation ohne Zeitdruck.",
  },
  {
    step: 2,
    title: "Bedarfsanalyse",
    description:
      "Im persönlichen Gespräch ermitteln wir gemeinsam, welche Unterstützung Ihr Angehöriger benötigt und welche Betreuungsform am besten passt.",
  },
  {
    step: 3,
    title: "Personenauswahl",
    description:
      "Wir wählen eine Betreuungsperson aus, die fachlich und menschlich zu Ihrem Angehörigen passt. Sie lernen die Person vor Beginn kennen.",
  },
  {
    step: 4,
    title: "Betreuungsbeginn",
    description:
      "Die Betreuung beginnt zu Ihrem Wunschtermin. Wir begleiten die Eingewöhnungsphase und stehen für Fragen jederzeit zur Verfügung.",
  },
];
