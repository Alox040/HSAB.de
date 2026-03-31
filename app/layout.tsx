import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { business } from "@/lib/content";

const merriweather = Merriweather({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${business.shortName} – Senioren Alltagsbegleitung Hamburg`,
    template: `%s | ${business.shortName}`,
  },
  description:
    "Professionelle Seniorenbetreuung in Hamburg. Erfahrene Betreuungspersonen für zuhause — persönlich ausgewählt, zuverlässig begleitet.",
  metadataBase: new URL(business.website),
  openGraph: {
    siteName: business.name,
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <html lang="de" className={merriweather.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
