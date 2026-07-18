import type { Metadata } from "next";
import restaurantData from "@/data/restaurant.json";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aurabistro.sa"),
  title: `${restaurantData.name} | ${restaurantData.tagline}`,
  description: restaurantData.heroSubtitle,
  keywords: [
    "مطعم",
    "بيسترو حلال",
    "أطباق حرفية",
    "قائمة طعام رقمية",
    "مأكولات فاخرة",
    restaurantData.name,
  ],
  openGraph: {
    title: restaurantData.name,
    description: restaurantData.heroSubtitle,
    type: "website",
    locale: "ar_SA",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: restaurantData.name,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: restaurantData.name,
    image: "/images/hero.png",
    telephone: restaurantData.contact.phoneClean,
    email: restaurantData.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: restaurantData.contact.address,
    },
    servesCuisine: ["حرفي", "عالمي", "فاخر"],
    priceRange: "$$",
  };

  return (
    <html lang="ar" dir="rtl" className="h-full antialiased scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-stone-50 text-stone-900">
        {children}
      </body>
    </html>
  );
}
