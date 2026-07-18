"use client";

import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2, ThumbsUp } from "lucide-react";
import reviewsData from "@/data/reviews.json";

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 bg-white border-b border-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold mb-3 border border-amber-200">
            <ThumbsUp className="w-3.5 h-3.5 text-amber-600" />
            <span>آراء وتقييمات زوارنا</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-stone-900 mb-3">
            ثقة تجعلنا في الصدارة دائماً
          </h2>
          <p className="text-stone-600 text-sm">
            انطباعات وتجارب حقيقية لعملائنا في مطعم شاورما أورا.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviewsData.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-stone-50 p-6 rounded-3xl border border-stone-200/80 shadow-soft-card flex flex-col justify-between hover:border-orange-200 transition-all group"
            >
              <div>
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-orange-200 group-hover:text-orange-400 transition-colors" />
                </div>

                <p className="text-stone-700 text-xs leading-relaxed mb-6 italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-3 pt-4 border-t border-stone-200/60">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center font-bold text-orange-700 text-sm border border-orange-200 shrink-0">
                  {rev.name[0]}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-stone-900 text-sm flex items-center gap-1">
                    {rev.name}
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 inline" />
                  </h4>
                  <span className="text-[11px] text-stone-400 block">{rev.role} • {rev.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
