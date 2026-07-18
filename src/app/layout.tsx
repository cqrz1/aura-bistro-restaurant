import type { Metadata } from "next";
import restaurantData from "@/data/restaurant.json";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aurashawarma.sa"),
  title: `${restaurantData.name} | ${restaurantData.tagline}`,
  description: restaurantData.heroSubtitle,
  keywords: [
    "شاورما",
    "مطعم شاورما",
    "شاورما على الحطب",
    "خبز صاج",
    "شاورما دجاج",
    "شاورما لحم بلدي",
    "قائمة طعام رقمية",
    "مطاعم الرياض العليا",
    restaurantData.name,
  ],
  openGraph: {
    title: `${restaurantData.name} - ${restaurantData.tagline}`,
    description: restaurantData.heroSubtitle,
    type: "website",
    locale: "ar_SA",
    images: [
      {
        url: "/images/shawarma_hero.png",
        width: 1200,
        height: 630,
        alt: restaurantData.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: restaurantData.name,
    description: restaurantData.heroSubtitle,
    images: ["/images/shawarma_hero.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FastFoodRestaurant",
    name: restaurantData.name,
    image: "https://aurashawarma.sa/images/shawarma_hero.png",
    telephone: restaurantData.contact.phoneClean,
    email: restaurantData.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: restaurantData.contact.address,
      addressLocality: "الرياض",
      addressCountry: "SA",
    },
    servesCuisine: ["شاورما", "مشويات على الحطب", "مأكولات شرقية"],
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
