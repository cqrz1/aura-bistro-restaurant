"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Tag, Sparkles, Clock, MessageCircle } from "lucide-react";
import offersData from "@/data/offers.json";
import restaurantData from "@/data/restaurant.json";

export default function OffersSection() {
  return (
    <section id="offers" className="py-20 bg-stone-50 border-b border-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-bold mb-3 border border-orange-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>عروض أورا الحصرية</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-stone-900 mb-3">
            وفر أكثر واستمتع بالطعم الفاخر
          </h2>
          <p className="text-stone-600 text-sm">
            باقات وعروض حصرية مصممة لتجربة أشهى الأطباق التوفيرية للعائلات والأفراد.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offersData.map((offer, idx) => {
            const whatsappMsg = encodeURIComponent(
              `مرحباً مطعم شاورما أورا! أود الاستفادة من العرض: (${offer.title}) بسعر ${offer.discountPrice} ${offer.currency}.`
            );
            const whatsappUrl = `https://wa.me/${restaurantData.contact.whatsappNumber}?text=${whatsappMsg}`;

            return (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden border border-orange-100 shadow-soft-card hover:shadow-orange-glow transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Image Header */}
                  <div className="relative w-full h-52 bg-stone-100 overflow-hidden">
                    <Image
                      src={offer.image}
                      alt={offer.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Discount badge */}
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold bg-orange-600 text-white shadow-md flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      {offer.discountPercentage}
                    </span>

                    {/* Tag badge */}
                    <span className="absolute bottom-4 right-4 px-3 py-1 rounded-lg text-xs font-semibold bg-stone-900/80 backdrop-blur-sm text-stone-200">
                      {offer.badge}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-stone-900 mb-2 group-hover:text-orange-600 transition-colors">
                      {offer.title}
                    </h3>
                    <p className="text-stone-600 text-xs leading-relaxed mb-4">
                      {offer.subtitle}
                    </p>

                    <div className="flex items-center gap-2 text-[11px] text-stone-500 mb-4 bg-stone-50 p-2.5 rounded-xl border border-stone-100">
                      <Clock className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                      <span>{offer.validUntil}</span>
                    </div>
                  </div>
                </div>

                {/* Card Footer CTA */}
                <div className="px-6 pb-6 pt-0 flex items-center justify-between border-t border-stone-100 mt-2">
                  <div>
                    <span className="text-xs text-stone-400 line-through block font-mono">
                      {offer.originalPrice} {offer.currency}
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="font-heading text-2xl font-black text-orange-600">
                        {offer.discountPrice}
                      </span>
                      <span className="text-xs font-bold text-stone-600">{offer.currency}</span>
                    </div>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4" />
                    اطلب العرض
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
