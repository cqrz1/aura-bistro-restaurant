"use client";

import Link from "next/link";
import { Flame, Phone, Mail, MapPin, Clock, ArrowUp } from "lucide-react";
import restaurantData from "@/data/restaurant.json";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-8 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-tr from-orange-600 to-amber-500 text-white shadow-md shadow-orange-600/30">
                <Flame className="w-6 h-6" />
              </div>
              <span className="font-heading text-2xl font-black tracking-tight text-white">
                شاورما <span className="text-orange-500">أورا</span>
              </span>
            </div>

            <p className="text-stone-400 text-xs leading-relaxed">
              تجربة شاورما بيسترو فاخرة محشوة بشرائح اللحم والدجاج المحمصة على جمر الحطب ومخبوزة على الصاج الطازج يومياً.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {/* Instagram SVG */}
              <a
                href={restaurantData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-stone-800 hover:bg-orange-600 text-stone-300 hover:text-white flex items-center justify-center transition-all"
                aria-label="إنستغرام"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* X / Twitter SVG */}
              <a
                href={restaurantData.socials.x}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-stone-800 hover:bg-orange-600 text-stone-300 hover:text-white flex items-center justify-center transition-all"
                aria-label="منصة إكس"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* TikTok SVG */}
              <a
                href={restaurantData.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-stone-800 hover:bg-orange-600 text-stone-300 hover:text-white flex items-center justify-center transition-all"
                aria-label="تيك توك"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.39a6.33 6.33 0 0 0-1-.08 6.34 6.34 0 1 0 6.34 6.34V8.58A8.28 8.28 0 0 0 20.73 10V6.54a4.85 4.85 0 0 1-1.14.15z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-bold text-white mb-4">روابط سريعة</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/" className="hover:text-orange-400 transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-orange-400 transition-colors">
                  عن شاورما أورا
                </Link>
              </li>
              <li>
                <Link href="/#offers" className="hover:text-orange-400 transition-colors">
                  العروض والتخفيضات
                </Link>
              </li>
              <li>
                <Link href="/#menu" className="hover:text-orange-400 transition-colors">
                  القائمة الرقمية الكاملة
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="hover:text-orange-400 transition-colors">
                  معرض الصور
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-400 transition-colors">
                  صفحة الاتصال والفرع
                </Link>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="font-heading text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-orange-500" />
              أوقات العمل
            </h4>
            <ul className="space-y-3 text-xs">
              {restaurantData.hours.map((h, idx) => (
                <li key={idx} className="bg-stone-800/60 p-3 rounded-xl border border-stone-800">
                  <span className="block text-stone-400 font-semibold mb-1">{h.day}</span>
                  <span className="block text-orange-400 font-bold">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-heading text-lg font-bold text-white mb-4">معلومات الاتصال</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span className="text-stone-300 leading-relaxed">{restaurantData.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <a
                  href={`tel:${restaurantData.contact.phoneClean}`}
                  className="text-stone-300 hover:text-orange-400 font-mono dir-ltr"
                >
                  {restaurantData.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <a
                  href={`mailto:${restaurantData.contact.email}`}
                  className="text-stone-300 hover:text-orange-400 font-mono"
                >
                  {restaurantData.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} مطعم شاورما أورا (Aura Shawarma). جميع الحقوق محفوظة.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-800 hover:bg-orange-600 text-stone-300 hover:text-white transition-all"
          >
            <span>أعلى الصفحة</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
