"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Menu as MenuIcon, X, QrCode, Phone, MessageCircle } from "lucide-react";
import restaurantData from "@/data/restaurant.json";
import QRCodeModal from "@/components/ui/QRCodeModal";

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/#about", label: "عن أورا" },
  { href: "/#offers", label: "العروض" },
  { href: "/#menu", label: "القائمة الرقمية" },
  { href: "/#gallery", label: "المعرض" },
  { href: "/#reviews", label: "آراء العملاء" },
  { href: "/contact", label: "تواصل معنا" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [qrModalOpen, setQrModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${restaurantData.contact.whatsappNumber}?text=${encodeURIComponent(
    restaurantData.contact.whatsappDefaultText
  )}`;

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-orange-100 shadow-sm py-3"
            : "bg-white/70 backdrop-blur-sm py-4 border-b border-stone-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-tr from-orange-600 to-amber-500 text-white shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <span className="font-heading text-xl font-black tracking-tight text-stone-900 block leading-none">
                شاورما <span className="text-orange-600">أورا</span>
              </span>
              <span className="text-[10px] font-semibold text-stone-500 tracking-wider block mt-0.5">
                AURA SHAWARMA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-stone-100/80 p-1.5 rounded-full border border-stone-200/50">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    isActive
                      ? "bg-orange-600 text-white shadow-sm"
                      : "text-stone-700 hover:text-orange-600 hover:bg-white/60"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setQrModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-orange-50 text-orange-700 text-xs font-bold border border-orange-200 hover:bg-orange-100 transition-colors"
              title="تصفح رمز QR"
            >
              <QrCode className="w-4 h-4 text-orange-600" />
              <span>رمز QR</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md shadow-emerald-600/20 transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>الواتساب</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setQrModalOpen(true)}
              className="p-2 rounded-xl bg-orange-50 text-orange-600 border border-orange-200"
              aria-label="QR Code"
            >
              <QrCode className="w-5 h-5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-stone-100 text-stone-800 hover:bg-stone-200 transition-colors"
              aria-label="القائمة"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[65px] z-30 bg-white border-b border-stone-200 shadow-xl lg:hidden overflow-hidden"
          >
            <div className="p-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-bold text-stone-800 hover:bg-orange-50 hover:text-orange-600 transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-stone-400">←</span>
                </Link>
              ))}

              <div className="pt-4 border-t border-stone-100 flex flex-col gap-2.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 text-white font-bold text-sm text-center flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  اطلب الآن عبر الواتساب
                </a>
                <a
                  href={`tel:${restaurantData.contact.phoneClean}`}
                  className="w-full py-3 px-4 rounded-xl bg-stone-100 text-stone-800 font-bold text-sm text-center flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-orange-600" />
                  اتصال مباشر: {restaurantData.contact.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* QR Modal */}
      <QRCodeModal isOpen={qrModalOpen} onClose={() => setQrModalOpen(false)} />
    </>
  );
}
