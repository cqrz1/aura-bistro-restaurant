"use client";

import React from "react";
import restaurantData from "@/data/restaurant.json";
import { ArrowDown, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-stone-950 text-white"
    >
      {/* Background Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="أطباق فاخرة مطهوة بحرفية"
          fill
          priority
          className="object-cover object-center filter brightness-[0.4] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-stone-900/60" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-xs sm:text-sm font-bold tracking-wide mb-6">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>{restaurantData.name}</span>
        </div>

        {/* Headline */}
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.2] mb-6">
          {restaurantData.tagline}
        </h1>

        {/* Subtitle */}
        <p className="text-stone-300 text-base sm:text-xl max-w-2xl font-normal leading-relaxed mb-10">
          {restaurantData.heroSubtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-amber-600 hover:bg-amber-500 text-white font-bold text-base transition-all shadow-xl shadow-amber-950/50 focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            تصفح القائمة الرقمية
          </a>
          <a
            href="#location"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-base backdrop-blur-md border border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            <MapPin className="w-5 h-5 text-amber-400" />
            <span>تحديد موقعنا</span>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 sm:mt-20">
          <a
            href="#about"
            aria-label="الانتقال إلى قسم عن المطعم"
            className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white/50 transition-colors animate-bounce"
          >
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
