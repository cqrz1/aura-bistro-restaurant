"use client";

import React from "react";
import restaurantData from "@/data/restaurant.json";
import { QrCode, Smartphone, Sparkles, CheckCircle2 } from "lucide-react";

export default function QRCodeSection() {
  return (
    <section id="qrcode" className="py-20 sm:py-28 bg-stone-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text & Steps Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-amber-300 border border-white/15 text-xs font-bold uppercase tracking-wider">
              <QrCode className="w-4 h-4 text-amber-400" />
              <span>تجربة قائمة الطعام التفاعلية</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
              رمز QR لقائمة الطعام على الطاولة
            </h2>

            <p className="text-stone-300 text-base sm:text-lg leading-relaxed max-w-xl">
              استمتع بتجربة سلسة ومريحة عند جلوسك في المطعم. بضغطة واحدة من جوالك، وجه الكاميرا نحو رمز QR على طاولة الطعام لتصفح الأطباق والمشروبات مباشرة.
            </p>

            {/* Simple Steps */}
            <div className="pt-4 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 border border-amber-500/30">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">افتح كاميرا الجوال</h3>
                  <p className="text-stone-400 text-sm">وجه كاميرا هاتفك الذكي نحو الرمز الموجود على طاولتك.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 border border-amber-500/30">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">عرض القائمة التفاعلية</h3>
                  <p className="text-stone-400 text-sm">اضغط على رابط الإشعار لتظهر لك قائمة الطعام بجودة عالية فوراً.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 border border-amber-500/30">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">بدون تحميل أي تطبيق</h3>
                  <p className="text-stone-400 text-sm">يعمل مباشرة على متصفح الأيفون والأندرويد بكل سهولة.</p>
                </div>
              </div>
            </div>
          </div>

          {/* QR Code Graphic Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="bg-white text-stone-900 rounded-3xl p-8 shadow-2xl max-w-sm w-full border border-stone-200 text-center space-y-6">
              
              <div className="space-y-1">
                <span className="text-xs uppercase font-extrabold tracking-widest text-amber-700">امسح الكود لتصفح القائمة</span>
                <h3 className="font-heading text-2xl font-extrabold text-stone-900">{restaurantData.name}</h3>
                <p className="text-xs text-stone-500 font-medium">رمز كود الطاولة الخاص بالعملاء</p>
              </div>

              {/* QR Graphic */}
              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 inline-block shadow-inner">
                <svg
                  className="w-48 h-48 mx-auto"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="رمز الكيو آر كود للقائمة"
                >
                  <rect width="200" height="200" rx="12" fill="white" />
                  <rect x="20" y="20" width="50" height="50" rx="6" fill="#1C1917" />
                  <rect x="28" y="28" width="34" height="34" rx="3" fill="white" />
                  <rect x="36" y="36" width="18" height="18" rx="2" fill="#D97706" />

                  <rect x="130" y="20" width="50" height="50" rx="6" fill="#1C1917" />
                  <rect x="138" y="28" width="34" height="34" rx="3" fill="white" />
                  <rect x="146" y="36" width="18" height="18" rx="2" fill="#D97706" />

                  <rect x="20" y="130" width="50" height="50" rx="6" fill="#1C1917" />
                  <rect x="28" y="138" width="34" height="34" rx="3" fill="white" />
                  <rect x="36" y="146" width="18" height="18" rx="2" fill="#D97706" />

                  <rect x="80" y="20" width="12" height="12" rx="2" fill="#1C1917" />
                  <rect x="100" y="20" width="12" height="12" rx="2" fill="#1C1917" />
                  <rect x="80" y="40" width="12" height="12" rx="2" fill="#D97706" />
                  <rect x="100" y="40" width="12" height="12" rx="2" fill="#1C1917" />

                  <rect x="20" y="80" width="12" height="12" rx="2" fill="#1C1917" />
                  <rect x="40" y="80" width="12" height="12" rx="2" fill="#1C1917" />
                  <rect x="60" y="80" width="12" height="12" rx="2" fill="#D97706" />
                  <rect x="80" y="80" width="12" height="12" rx="2" fill="#1C1917" />
                  <rect x="100" y="80" width="12" height="12" rx="2" fill="#1C1917" />
                  <rect x="120" y="80" width="12" height="12" rx="2" fill="#1C1917" />
                  <rect x="140" y="80" width="12" height="12" rx="2" fill="#D97706" />
                  <rect x="160" y="80" width="12" height="12" rx="2" fill="#1C1917" />

                  <rect x="20" y="100" width="12" height="12" rx="2" fill="#1C1917" />
                  <rect x="50" y="100" width="12" height="12" rx="2" fill="#1C1917" />
                  <rect x="90" y="100" width="12" height="12" rx="2" fill="#D97706" />
                  <rect x="110" y="100" width="12" height="12" rx="2" fill="#1C1917" />
                  <rect x="150" y="100" width="12" height="12" rx="2" fill="#1C1917" />

                  <rect x="80" y="130" width="12" height="12" rx="2" fill="#1C1917" />
                  <rect x="100" y="130" width="12" height="12" rx="2" fill="#D97706" />
                  <rect x="120" y="130" width="12" height="12" rx="2" fill="#1C1917" />
                  <rect x="140" y="130" width="12" height="12" rx="2" fill="#1C1917" />
                  <rect x="160" y="130" width="12" height="12" rx="2" fill="#1C1917" />

                  <rect x="80" y="150" width="12" height="12" rx="2" fill="#1C1917" />
                  <rect x="100" y="160" width="12" height="12" rx="2" fill="#1C1917" />
                  <rect x="130" y="150" width="12" height="12" rx="2" fill="#D97706" />
                  <rect x="150" y="160" width="12" height="12" rx="2" fill="#1C1917" />
                </svg>
              </div>

              <div className="pt-2 text-stone-600 text-xs font-semibold">
                مدعوم بتكنولوجيا المتصفح السريع
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
