"use client";

import { MessageCircle } from "lucide-react";
import restaurantData from "@/data/restaurant.json";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${restaurantData.contact.whatsappNumber}?text=${encodeURIComponent(
    restaurantData.contact.whatsappDefaultText
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل عبر الواتساب"
      className="fixed bottom-6 left-6 z-40 group flex items-center gap-3 p-3.5 rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-500/30 hover:bg-emerald-600 hover:scale-105 transition-all duration-300"
    >
      <span className="relative flex h-6 w-6 items-center justify-center">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
        <MessageCircle className="w-6 h-6 relative z-10 fill-white text-emerald-500" />
      </span>
      
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-bold transition-all duration-300 group-hover:max-w-xs pl-1">
        تحدث مع المطعم
      </span>
    </a>
  );
}
