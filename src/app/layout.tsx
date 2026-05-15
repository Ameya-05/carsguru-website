import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "CarsGuru — Pune's Most Trusted Pre-Owned Car Dealer | Buy, Sell & Exchange",
  icons: {
    icon: "/favicon.svg"
  },
  description:
    "CarsGuru is Pune's premier multi-brand pre-owned car showroom. Buy verified, quality-checked used cars at honest prices. Easy finance, RTO, insurance. 500+ cars sold. Visit us today!",
  keywords: [
    "used cars Pune",
    "pre-owned cars Pune",
    "second hand cars Pune",
    "CarsGuru",
    "buy used cars",
    "sell used cars",
    "car exchange Pune",
    "verified used cars",
    "best car dealer Pune",
    "multi-brand cars",
  ],
  openGraph: {
    title: "CarsGuru — Pune's Most Trusted Pre-Owned Car Dealer",
    description:
      "Buy verified, quality-checked pre-owned cars at honest prices. 500+ happy customers. Easy finance & RTO support.",
    url: "https://carsguru.in",
    siteName: "CarsGuru",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/showroom-1.jpg",
        width: 1200,
        height: 630,
        alt: "CarsGuru Showroom Pune",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CarsGuru — Pune's Most Trusted Pre-Owned Car Dealer",
    description:
      "Buy verified, quality-checked pre-owned cars at honest prices in Pune.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#ffffff" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoDealer",
              name: "CarsGuru",
              description:
                "Pune's most trusted multi-brand pre-owned car dealer. Buy, sell & exchange verified vehicles at honest prices.",
              url: "https://carsguru.in",
              telephone: "+919923113292",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Pune",
                addressRegion: "Maharashtra",
                addressCountry: "IN",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                  ],
                  opens: "10:00",
                  closes: "20:00",
                }
              ],
              sameAs: [
                "https://www.instagram.com/cars_guru_pune?igsh=cjBsNW42cXl5Ynp3",
                "https://www.facebook.com/profile.php?id=100067693997731&mibextid=rS40aB7S9Ucbxw6v",
              ],
            }),
          }}
        />
      </head>
      <body className={`${montserrat.variable} ${inter.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
