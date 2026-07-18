"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { QrCode, Smartphone, Sparkles, ArrowLeft } from "lucide-react";
import QRCodeModal from "@/components/ui/QRCodeModal";

export default function QRCodeSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-16 bg-gradient-to-r from-stone-900 via-stone-900 to-stone-800 text-white relative overflow-hidden">
      {/* Glow shapes */}
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-orange-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-tr from-stone-800/90 to-stone-900/90 p-8 sm:p-12 rounded-3xl border border-stone-700/80 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 text-center md:text-right max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>سهولة تصفح القائمة من أي مكان</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-black text-white leading-tight">
              مسح سريع لرمز QR للقائمة الرقمية
            </h2>

            <p className="text-stone-300 text-sm leading-relaxed">
              استمتع بتجربة طلب سلسة وسريعة على طاولتك أو من سيارتك من خلال مسح الكود بهاتفك المحمول مباشرة بلمسة واحدة.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm shadow-lg shadow-orange-600/30 transition-all active:scale-95"
              >
                <QrCode className="w-5 h-5" />
                عرض رمز الـ QR المكبر
              </button>

              <a
                href="#menu"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-bold text-sm border border-stone-600 transition-all"
              >
                <span>تصفح القائمة هنا</span>
                <ArrowLeft className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Graphic QR Preview box */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            onClick={() => setModalOpen(true)}
            className="w-48 h-48 bg-white p-3.5 rounded-3xl shadow-xl shadow-orange-500/10 border-4 border-orange-500/40 cursor-pointer hover:scale-105 transition-transform shrink-0 flex flex-col items-center justify-center text-stone-900 group"
          >
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full fill-stone-900 group-hover:scale-95 transition-transform"
            >
              <path d="M0 0h30v30H0zM5 5v20h20V5zM10 10h10v10H10zM70 0h30v30H70zM75 5v20h20V5zM80 10h10v10H80zM0 70h30v30H0zM5 75v20h20V75zM10 80h10v10H10zM35 5h10v10H35zM50 0h10v20H50zM35 25h20v10H35zM60 20h10v15H60zM40 40h20v20H40zM0 35h15v25H0zM20 40h15v10H20zM65 45h35v10H65zM75 60h25v15H75zM35 70h10v30H35zM50 85h20v15H50zM80 80h20v20H80z" />
            </svg>
            <span className="text-[10px] font-bold text-orange-600 mt-1 flex items-center gap-1">
              <Smartphone className="w-3 h-3" /> اضغط للمسح
            </span>
          </motion.div>
        </div>
      </div>

      <QRCodeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
