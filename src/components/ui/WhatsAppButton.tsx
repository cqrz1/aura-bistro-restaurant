"use client";

import React from "react";
import restaurantData from "@/data/restaurant.json";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${restaurantData.contact.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    restaurantData.contact.whatsappDefaultText
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل معنا عبر واتساب"
      className="fixed bottom-6 left-6 z-40 group flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400"
    >
      <span className="absolute -inset-1 rounded-full bg-emerald-500/40 animate-ping group-hover:animate-none opacity-75 -z-10" />

      <MessageCircle className="w-6 h-6 fill-white stroke-emerald-600" />
      <span className="hidden sm:inline text-sm font-bold tracking-wide">
        تحدث معنا عبر واتساب
      </span>
    </a>
  );
}
