"use client";

import React from "react";
import restaurantData from "@/data/restaurant.json";
import { MapPin, Phone, Mail, Clock, ExternalLink, MessageCircle } from "lucide-react";

export default function LocationContactSection() {
  const whatsappUrl = `https://wa.me/${restaurantData.contact.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    restaurantData.contact.whatsappDefaultText
  )}`;

  return (
    <section id="location" className="py-20 sm:py-28 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold tracking-wider">
            <MapPin className="w-4 h-4 text-amber-700" />
            <span>نرحب بزيارتكم</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900">
            الموقع وساعات العمل
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            يسعدنا استقبالكم في {restaurantData.name}. تجدون أدناه تفاصيل العنوان وساعات العمل والتواصل المباشر.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Direct Contact Info & Hours Cards */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Address Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-sm space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-extrabold text-stone-900 mb-1.5">عنوان المطعم</h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-3.5 font-medium">{restaurantData.contact.address}</p>
                  <a
                    href={restaurantData.contact.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-900 transition-colors"
                  >
                    <span>فتح اتجاهات الخريطة</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="border-t border-stone-100 pt-6 space-y-4">
                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-xl bg-stone-100 text-stone-700 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-stone-500 font-medium block">الهاتف المباشر</span>
                    <a
                      href={`tel:${restaurantData.contact.phoneClean}`}
                      className="text-sm font-bold text-stone-900 hover:text-amber-700 transition-colors"
                    >
                      {restaurantData.contact.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-xl bg-stone-100 text-stone-700 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-stone-500 font-medium block">البريد الإلكتروني</span>
                    <a
                      href={`mailto:${restaurantData.contact.email}`}
                      className="text-sm font-bold text-stone-900 hover:text-amber-700 transition-colors"
                    >
                      {restaurantData.contact.email}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-stone-500 font-medium block">واتساب</span>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-emerald-700 hover:text-emerald-900 transition-colors"
                    >
                      تواصل معنا عبر واتساب
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-stone-950 text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-stone-800 space-y-6">
              <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
                <Clock className="w-5 h-5 text-amber-400" />
                <h3 className="font-heading text-xl font-extrabold text-white">ساعات العمل الرسمية</h3>
              </div>

              <div className="space-y-3.5">
                {restaurantData.hours.map((schedule, idx) => (
                  <div key={idx} className="flex justify-between items-center text-sm">
                    <span className="text-stone-300 font-medium">{schedule.day}</span>
                    <span className="text-amber-300 font-bold">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Google Maps Embed */}
          <div className="lg:col-span-7 h-full min-h-[440px] rounded-3xl overflow-hidden border border-stone-200 shadow-md bg-stone-200">
            <iframe
              title="موقع المطعم على خرائط جوجل"
              src={restaurantData.contact.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "440px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter contrast-[1.02]"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
