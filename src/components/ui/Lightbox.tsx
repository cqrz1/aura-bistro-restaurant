"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

interface LightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export default function Lightbox({ item, onClose, onNext, onPrev }: LightboxProps) {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-stone-950/85 backdrop-blur-lg"
        />

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative max-w-4xl w-full bg-stone-900 rounded-3xl overflow-hidden shadow-2xl z-10 border border-stone-800"
        >
          <button
            onClick={onClose}
            className="absolute top-4 left-4 z-20 flex items-center justify-center w-10 h-10 bg-black/50 text-white hover:bg-black/80 rounded-full transition-all"
            aria-label="إغلاق المعرض"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Navigation Arrows */}
          {onPrev && (
            <button
              onClick={onPrev}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 bg-black/40 hover:bg-orange-600 text-white rounded-full transition-all"
              aria-label="الصورة السابقة"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {onNext && (
            <button
              onClick={onNext}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 bg-black/40 hover:bg-orange-600 text-white rounded-full transition-all"
              aria-label="الصورة التالية"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          <div className="relative w-full h-[60vh] max-h-[500px] bg-stone-950">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-contain"
              sizes="(max-width: 1200px) 100vw, 1000px"
              priority
            />
          </div>

          <div className="p-6 bg-stone-900 text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/20 text-orange-400 border border-orange-500/30">
                {item.category}
              </span>
            </div>
            <h4 className="font-heading text-xl font-bold text-white mb-1">{item.title}</h4>
            <p className="text-stone-400 text-sm">{item.description}</p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
