"use client";

import React from "react";
import restaurantData from "@/data/restaurant.json";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-stone-50 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Right Column (First in RTL): Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold tracking-wider">
              قصتنا وفلسفتنا
            </div>
            
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 leading-tight">
              {restaurantData.about.title}
            </h2>

            <div className="w-16 h-1 bg-amber-600 rounded-full" />

            <p className="text-stone-700 text-base sm:text-lg leading-relaxed font-normal">
              {restaurantData.about.paragraph1}
            </p>

            <p className="text-stone-600 text-base leading-relaxed">
              {restaurantData.about.paragraph2}
            </p>

            <div className="pt-4 grid grid-cols-2 gap-6 border-t border-stone-200/80">
              <div>
                <span className="block font-heading text-2xl sm:text-3xl font-extrabold text-amber-700">١٠٠٪ طبيعي</span>
                <span className="text-stone-600 text-xs sm:text-sm font-medium">محاصيل عضوية طازجة</span>
              </div>
              <div>
                <span className="block font-heading text-2xl sm:text-3xl font-extrabold text-amber-700">تحضير يومي</span>
                <span className="text-stone-600 text-xs sm:text-sm font-medium">أطباق مصنوعة بشغف</span>
              </div>
            </div>
          </div>

          {/* Left Column: Image Presentation */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border border-stone-200">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/about.png"
                  alt="أجواء مطعم أورا بيسترو الحرفي"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-amber-200/50 rounded-full filter blur-2xl -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}
