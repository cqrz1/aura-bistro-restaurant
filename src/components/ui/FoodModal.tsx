"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Flame, Sparkles, MessageCircle, Clock, Check } from "lucide-react";
import Image from "next/image";
import restaurantData from "@/data/restaurant.json";

export interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  currency: string;
  description: string;
  image: string;
  isBestSeller?: boolean;
  calories?: string;
  spicyLevel?: number;
  tags?: string[];
}

interface FoodModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export default function FoodModal({ item, onClose }: FoodModalProps) {
  if (!item) return null;

  const whatsappMessage = encodeURIComponent(
    `مرحباً مطعم شاورما أورا! أود طلب صنف: (${item.name}) - السعر: ${item.price} ${item.currency}.`
  );
  const whatsappUrl = `https://wa.me/${restaurantData.contact.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-stone-900/60 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden z-10 my-8 border border-orange-100"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 left-4 z-20 flex items-center justify-center w-10 h-10 bg-white/80 backdrop-blur-md text-stone-700 hover:text-stone-900 rounded-full shadow-md hover:bg-white transition-all"
            aria-label="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Image */}
          <div className="relative w-full h-64 bg-stone-100">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 500px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {item.isBestSeller && (
              <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-amber-500 text-white shadow-lg">
                <Sparkles className="w-3.5 h-3.5" />
                الأكثر طلباً
              </span>
            )}
          </div>

          {/* Modal Content */}
          <div className="p-6">
            <div className="flex justify-between items-start gap-4 mb-3">
              <h3 className="font-heading text-2xl font-bold text-stone-900 leading-snug">
                {item.name}
              </h3>
              <div className="text-right whitespace-nowrap">
                <span className="font-heading text-2xl font-extrabold text-orange-600">
                  {item.price}
                </span>
                <span className="text-xs text-stone-500 font-bold mr-1">{item.currency}</span>
              </div>
            </div>

            {/* Badges & Tags */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {item.calories && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-stone-100 text-stone-600">
                  <Clock className="w-3.5 h-3.5 text-stone-400" />
                  {item.calories}
                </span>
              )}

              {item.spicyLevel && item.spicyLevel > 0 ? (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-red-50 text-red-600 border border-red-100">
                  <Flame className="w-3.5 h-3.5 fill-red-500" />
                  درجة الحرارة: {item.spicyLevel}/3
                </span>
              ) : null}

              {item.tags?.map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-100"
                >
                  <Check className="w-3 h-3 text-orange-500" />
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-stone-600 text-sm leading-relaxed mb-6 bg-stone-50 p-4 rounded-2xl border border-stone-100">
              {item.description}
            </p>

            {/* Ordering CTA */}
            <div className="flex items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-600 text-white font-bold text-sm shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 active:scale-[0.98] transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                اطلب عبر الواتساب مباشرة
              </a>
              <button
                onClick={onClose}
                className="px-5 py-3.5 rounded-2xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold text-sm transition-all"
              >
                إغلاق
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
