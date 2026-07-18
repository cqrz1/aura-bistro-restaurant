"use client";

import React from "react";
import restaurantData from "@/data/restaurant.json";
import { UtensilsCrossed, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-amber-600 text-white flex items-center justify-center">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <span className="font-heading text-xl font-extrabold text-white tracking-tight">
                {restaurantData.name}
              </span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed max-w-sm font-medium">
              {restaurantData.tagline}. نلتزم بتقديم تجربة طعام حرفية راقية باستخدام أفضل المكونات العضوية الطازجة.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-heading text-base font-bold">روابط سريعة</h4>
            <ul className="space-y-2.5 text-sm text-stone-400 font-medium">
              <li>
                <a href="#hero" className="hover:text-amber-400 transition-colors">الرئيسية</a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">عن المطعم</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">القائمة الرقمية</a>
              </li>
              <li>
                <a href="#qrcode" className="hover:text-amber-400 transition-colors">رمز QR الطاولة</a>
              </li>
              <li>
                <a href="#location" className="hover:text-amber-400 transition-colors">الموقع والساعات</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-white font-heading text-base font-bold">معلومات التواصل والعنوان</h4>
            <ul className="space-y-3 text-sm text-stone-400 font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{restaurantData.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`tel:${restaurantData.contact.phoneClean}`} className="hover:text-amber-400 transition-colors">
                  {restaurantData.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`mailto:${restaurantData.contact.email}`} className="hover:text-amber-400 transition-colors">
                  {restaurantData.contact.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4 font-medium">
          <p>© {currentYear} {restaurantData.name}. جميع الحقوق محفوظة.</p>
          <p className="text-stone-500">موقع استعراضي - الباقة الأساسية</p>
        </div>

      </div>
    </footer>
  );
}
