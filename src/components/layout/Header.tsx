"use client";

import React, { useState, useEffect } from "react";
import restaurantData from "@/data/restaurant.json";
import { Menu as MenuIcon, X, Phone, UtensilsCrossed } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", href: "#hero" },
    { name: "عن المطعم", href: "#about" },
    { name: "القائمة الرقمية", href: "#menu" },
    { name: "رمز QR الطاولة", href: "#qrcode" },
    { name: "الموقع والساعات", href: "#location" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200/80 py-3"
          : "bg-gradient-to-b from-stone-950/80 via-stone-950/40 to-transparent py-5 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-xl px-1.5 py-1"
        >
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-sm ${
              isScrolled
                ? "bg-amber-700 text-white"
                : "bg-white/20 text-white backdrop-blur-md group-hover:bg-amber-600"
            }`}
          >
            <UtensilsCrossed className="w-5 h-5" />
          </div>
          <span
            className={`font-heading text-xl sm:text-2xl font-bold tracking-tight transition-colors ${
              isScrolled ? "text-stone-900" : "text-white"
            }`}
          >
            {restaurantData.name}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-reverse space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold transition-colors hover:text-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg px-2.5 py-1.5 ${
                isScrolled ? "text-stone-700" : "text-stone-100 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Phone Quick Action */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${restaurantData.contact.phoneClean}`}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all shadow-md ${
              isScrolled
                ? "bg-stone-900 text-white hover:bg-stone-800"
                : "bg-amber-600 text-white hover:bg-amber-500"
            }`}
          >
            <Phone className="w-3.5 h-3.5" />
            <span>اتصل بنا</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="القائمة الرئيسية"
            className={`p-2.5 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 ${
              isScrolled
                ? "text-stone-800 hover:bg-stone-100"
                : "text-white hover:bg-white/10"
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-stone-200 px-5 pt-4 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-stone-800 hover:text-amber-700 font-semibold py-2.5 px-4 rounded-xl hover:bg-amber-50 text-base"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
              <a
                href={`tel:${restaurantData.contact.phoneClean}`}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-amber-700 text-white py-3 rounded-xl text-sm font-bold shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>اتصل بنا: {restaurantData.contact.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
