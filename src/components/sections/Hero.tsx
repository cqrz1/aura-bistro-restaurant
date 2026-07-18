"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Utensils, PhoneCall, Flame, Star, Award, MessageCircle } from "lucide-react";
import restaurantData from "@/data/restaurant.json";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${restaurantData.contact.whatsappNumber}?text=${encodeURIComponent(
    restaurantData.contact.whatsappDefaultText
  )}`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/50 via-white to-stone-50 py-12 lg:py-20 border-b border-stone-100">
      {/* Background ambient lighting blobs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-200/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-right"
          >
            {/* Tag badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100/80 border border-orange-200 text-orange-700 text-xs font-bold shadow-sm">
              <Flame className="w-4 h-4 text-orange-600 animate-pulse" />
              <span>{restaurantData.tagline}</span>
            </div>

            {/* Main title */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-stone-900 leading-[1.15]">
              {restaurantData.heroTitle.split("فاخرة")[0]}
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-orange-600 via-amber-600 to-orange-500">
                فاخرة
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-stone-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              {restaurantData.heroSubtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/#menu"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold text-sm shadow-xl shadow-orange-600/25 hover:from-orange-700 hover:to-amber-700 active:scale-95 transition-all"
              >
                <Utensils className="w-5 h-5" />
                <span>استعرض القائمة كاملة</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-6 py-4 rounded-2xl bg-white text-stone-800 font-bold text-sm border border-stone-200 shadow-soft-card hover:bg-stone-50 hover:border-orange-300 transition-all active:scale-95"
              >
                <PhoneCall className="w-4 h-4 text-orange-600" />
                <span>تواصل معنا</span>
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-4 rounded-2xl bg-emerald-600 text-white font-bold text-sm shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 active:scale-95 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>طلب سريع واتساب</span>
              </a>
            </div>

            {/* Ratings & Social proof */}
            <div className="pt-6 border-t border-stone-200/60 flex flex-wrap items-center justify-center lg:justify-start gap-8 text-xs text-stone-600">
              <div className="flex items-center gap-2">
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-stone-900">4.9 / 5.0</span>
                <span className="text-stone-400">(أكثر من 3500 تقييم)</span>
              </div>

              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-orange-600" />
                <span className="font-semibold text-stone-800">100% مكونات طازجة يومياً</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Image Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-[4/4] rounded-3xl p-3 bg-white shadow-2xl shadow-orange-500/15 border border-orange-100 overflow-hidden group">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/shawarma_hero.png"
                  alt={restaurantData.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                  sizes="(max-width: 768px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 via-transparent to-transparent" />
                
                {/* Floating pill badge */}
                <div className="absolute bottom-4 right-4 left-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-white/60 shadow-lg flex items-center justify-between">
                  <div>
                    <span className="block font-heading font-extrabold text-stone-900 text-sm">
                      شاورما دجاج الصاج الكلاسيكية
                    </span>
                    <span className="text-[11px] text-stone-500 font-medium">
                      محضرة يومياً على الحطب النقي
                    </span>
                  </div>
                  <span className="font-heading font-black text-orange-600 text-lg">
                    ١٨ ر.س
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
