"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Flame, ShieldCheck, Sparkles, Wheat } from "lucide-react";
import restaurantData from "@/data/restaurant.json";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white border-b border-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image composition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-stone-200 aspect-[4/3]">
              <Image
                src="/images/shawarma_about.png"
                alt={restaurantData.about.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>

            {/* Experience badge overlay */}
            <div className="absolute -bottom-6 left-6 bg-gradient-to-tr from-stone-900 to-stone-800 text-white p-5 rounded-2xl shadow-xl border border-stone-700 max-w-xs">
              <span className="font-heading font-black text-3xl text-orange-500 block">
                100%
              </span>
              <span className="text-xs text-stone-300 font-medium block">
                مكونات بلدية طازجة يومياً بدون أي زيوت مكررة أو مواد حافظة
              </span>
            </div>
          </motion.div>

          {/* Text & Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 space-y-6"
          >
            <div>
              <span className="text-orange-600 font-bold text-xs uppercase tracking-wider block mb-1">
                {restaurantData.about.subtitle}
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-stone-900 leading-tight">
                {restaurantData.about.title}
              </h2>
            </div>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              {restaurantData.about.paragraph1}
            </p>

            <p className="text-stone-600 text-sm leading-relaxed">
              {restaurantData.about.paragraph2}
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 hover:border-orange-200 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-2">
                  <Flame className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-stone-900 text-sm mb-0.5">
                  شواء على الحطب
                </h4>
                <p className="text-stone-500 text-xs">نكهة دخانية غنية مميزة لا تُنسى</p>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 hover:border-orange-200 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-2">
                  <Wheat className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-stone-900 text-sm mb-0.5">
                  خبز صاج طازج
                </h4>
                <p className="text-stone-500 text-xs">يخبز فورياً لكل طلب لضمان الطراوة والقرمشة</p>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 hover:border-orange-200 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-2">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-stone-900 text-sm mb-0.5">
                  مكونات طازجة 100%
                </h4>
                <p className="text-stone-500 text-xs">لحوم ودواجن معتمدة طازجة يومياً</p>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 hover:border-orange-200 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-2">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-stone-900 text-sm mb-0.5">
                  صلصات أورا السرية
                </h4>
                <p className="text-stone-500 text-xs">ثومية ملكية وطحينة خاصة بنا</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
