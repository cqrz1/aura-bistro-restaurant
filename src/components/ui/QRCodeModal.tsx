"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, QrCode, Smartphone, ExternalLink, Download } from "lucide-react";

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QRCodeModal({ isOpen, onClose }: QRCodeModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-stone-900/60 backdrop-blur-md"
        />

        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl z-10 border border-orange-100 text-center"
        >
          <button
            onClick={onClose}
            className="absolute top-4 left-4 flex items-center justify-center w-9 h-9 bg-stone-100 text-stone-600 hover:text-stone-900 rounded-full hover:bg-stone-200 transition-all"
            aria-label="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 mb-3">
            <QrCode className="w-6 h-6" />
          </div>

          <h3 className="font-heading text-xl font-bold text-stone-900 mb-1">
            رمز QR للقائمة الرقمية
          </h3>
          <p className="text-xs text-stone-500 mb-6">
            وجه كاميرا هاتفك لتصفح قائمة شاورما أورا كاملة بحرّية
          </p>

          {/* QR Code Container */}
          <div className="relative mx-auto w-48 h-48 bg-gradient-to-tr from-amber-500 to-orange-600 p-2.5 rounded-2xl shadow-lg shadow-orange-500/20 mb-6">
            <div className="w-full h-full bg-white p-3 rounded-xl flex items-center justify-center">
              {/* Crisp SVG QR code illustration */}
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full fill-stone-900"
              >
                <path d="M0 0h30v30H0zM5 5v20h20V5zM10 10h10v10H10zM70 0h30v30H70zM75 5v20h20V5zM80 10h10v10H80zM0 70h30v30H0zM5 75v20h20V75zM10 80h10v10H10zM35 5h10v10H35zM50 0h10v20H50zM35 25h20v10H35zM60 20h10v15H60zM40 40h20v20H40zM0 35h15v25H0zM20 40h15v10H20zM65 45h35v10H65zM75 60h25v15H75zM35 70h10v30H35zM50 85h20v15H50zM80 80h20v20H80z" />
              </svg>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-stone-500 mb-6 bg-stone-50 py-2.5 px-4 rounded-xl border border-stone-100">
            <Smartphone className="w-4 h-4 text-orange-500" />
            <span>متوافق مع أجهزة آيفون وأندرويد</span>
          </div>

          <div className="flex flex-col gap-2">
            <a
              href="#menu"
              onClick={onClose}
              className="w-full py-3 px-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-md shadow-orange-600/20 transition-all flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              الانتقال للقائمة مباشرة
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
