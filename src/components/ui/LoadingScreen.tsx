"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Flame } from "lucide-react";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-stone-50"
        >
          <div className="relative flex flex-col items-center">
            {/* Pulsing ring */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-4 rounded-full bg-orange-200/50 blur-lg"
            />

            <div className="relative flex items-center justify-center w-20 h-20 bg-gradient-to-tr from-orange-600 to-amber-500 rounded-2xl shadow-xl shadow-orange-500/20 text-white mb-4">
              <Flame className="w-10 h-10 animate-bounce" />
            </div>

            <motion.h1
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-heading text-2xl font-bold text-stone-900 tracking-tight"
            >
              شاورما <span className="text-orange-600">أورا</span>
            </motion.h1>

            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xs font-medium text-stone-500 mt-1"
            >
              جاري تحضير تجربة الطعم الحرفي...
            </motion.p>

            {/* Progress line */}
            <div className="w-36 h-1 bg-stone-200 rounded-full overflow-hidden mt-6">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
                className="w-full h-full bg-gradient-to-r from-amber-500 to-orange-600 rounded-full"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
