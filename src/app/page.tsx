import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import OffersSection from "@/components/sections/OffersSection";
import MenuSection from "@/components/sections/MenuSection";
import GallerySection from "@/components/sections/GallerySection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import QRCodeSection from "@/components/sections/QRCodeSection";
import LocationContactSection from "@/components/sections/LocationContactSection";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import LoadingScreen from "@/components/ui/LoadingScreen";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 selection:bg-orange-200 selection:text-orange-950">
      <LoadingScreen />
      <Header />
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <OffersSection />
        <MenuSection />
        <GallerySection />
        <ReviewsSection />
        <QRCodeSection />
        <LocationContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
