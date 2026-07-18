"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Maximize2, Camera } from "lucide-react";
import galleryData from "@/data/gallery.json";
import Lightbox, { GalleryItem } from "@/components/ui/Lightbox";

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState("الكل");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = ["الكل", ...Array.from(new Set(galleryData.map((g) => g.category)))];

  const filteredItems =
    activeTab === "الكل" ? galleryData : galleryData.filter((g) => g.category === activeTab);

  const currentLightboxItem =
    activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <section id="gallery" className="py-20 bg-stone-50 border-b border-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-bold mb-3 border border-orange-200">
            <Camera className="w-3.5 h-3.5 text-orange-600" />
            <span>معرض الصور</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-stone-900 mb-3">
            لمحات من جودة وطراوة أطباقنا
          </h2>
          <p className="text-stone-600 text-sm">
            شاهد كواليس تحضير الشاورما على الحطب والأجواء الفاخرة لمطعم أورا.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === cat
                  ? "bg-orange-600 text-white shadow-md shadow-orange-600/20"
                  : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveLightboxIndex(idx)}
                className="relative h-64 rounded-3xl overflow-hidden shadow-soft-card group cursor-pointer border border-stone-200/80 bg-stone-100"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 400px"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute bottom-0 right-0 left-0 p-5 text-white flex justify-between items-end">
                  <div>
                    <span className="text-[10px] font-bold text-orange-400 bg-orange-950/60 px-2.5 py-0.5 rounded-full border border-orange-500/30 mb-1 inline-block">
                      {item.category}
                    </span>
                    <h3 className="font-heading text-lg font-bold leading-tight">{item.title}</h3>
                  </div>

                  <span className="p-2.5 rounded-2xl bg-white/20 backdrop-blur-md text-white group-hover:bg-orange-600 transition-colors">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {currentLightboxItem && (
        <Lightbox
          item={currentLightboxItem as GalleryItem}
          onClose={() => setActiveLightboxIndex(null)}
          onNext={() =>
            setActiveLightboxIndex((prev) =>
              prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0
            )
          }
          onPrev={() =>
            setActiveLightboxIndex((prev) =>
              prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1
            )
          }
        />
      )}
    </section>
  );
}
