"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Navigation, MessageSquare } from "lucide-react";
import restaurantData from "@/data/restaurant.json";

export default function LocationContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "استفسار عام",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "استفسار عام", message: "" });
    }, 4000);
  };

  return (
    <section id="contact-section" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-bold mb-3 border border-orange-200">
            <MapPin className="w-3.5 h-3.5 text-orange-600" />
            <span>موقعنا وحجز الطاولات</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-stone-900 mb-3">
            تفضل بزيارتنا أو تواصل معنا
          </h2>
          <p className="text-stone-600 text-sm">
            يسعدنا استقبالكم في فرعنا بالعليا أو الإجابة على جميع استفساراتكم.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Store Info & Interactive Map */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-stone-50 p-6 sm:p-8 rounded-3xl border border-stone-200/80 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-stone-900 text-base mb-1">
                    عنوان الفرع الرئيسي
                  </h3>
                  <p className="text-stone-600 text-xs leading-relaxed mb-2">
                    {restaurantData.contact.address}
                  </p>
                  <a
                    href={restaurantData.contact.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    فتح الاتجاهات في خرائط قوقل
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-stone-200/60">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-stone-400 block">الهاتف المباشر</span>
                    <a
                      href={`tel:${restaurantData.contact.phoneClean}`}
                      className="text-xs font-bold text-stone-900 hover:text-orange-600 font-mono dir-ltr"
                    >
                      {restaurantData.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-stone-400 block">البريد الإلكتروني</span>
                    <a
                      href={`mailto:${restaurantData.contact.email}`}
                      className="text-xs font-bold text-stone-900 hover:text-orange-600 font-mono"
                    >
                      {restaurantData.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Operating hours list */}
              <div className="pt-4 border-t border-stone-200/60">
                <h4 className="font-heading font-bold text-stone-900 text-xs mb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-orange-600" />
                  ساعات استقبال الزوار:
                </h4>
                <div className="space-y-1 text-xs text-stone-600">
                  {restaurantData.hours.map((h, i) => (
                    <div key={i} className="flex justify-between">
                      <span>{h.day}</span>
                      <span className="font-bold text-stone-800">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Google Maps Embed iframe */}
            <div className="w-full h-72 rounded-3xl overflow-hidden border border-stone-200/90 shadow-sm relative">
              <iframe
                title="موقع مطعم شاورما أورا"
                src={restaurantData.contact.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[20%] contrast-[1.05]"
              />
            </div>
          </div>

          {/* Right: Interactive Contact Form */}
          <div className="lg:col-span-6 bg-stone-50 p-6 sm:p-8 rounded-3xl border border-stone-200/80 shadow-soft-card">
            <h3 className="font-heading text-2xl font-bold text-stone-900 mb-2 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-orange-600" />
              أرسل لنا رسالة مباشرة
            </h3>
            <p className="text-stone-500 text-xs mb-6">
              سواء كان لديك استفسار عن طلب خاص، مناسبة، أو ملاحظة، نحن يسعدنا دائماً الاستماع إليك.
            </p>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center space-y-2 my-8"
              >
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-heading font-bold text-lg">تم إرسال رسالتك بنجاح!</h4>
                <p className="text-xs text-emerald-700">
                  شكراً لتواصلك مع مطعم شاورما أورا. سيتواصل معك فريقنا خلال أقرب وقت ممكن.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      الاسم الكامل *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="عبدالله محمد"
                      className="w-full px-4 py-2.5 rounded-xl bg-white text-stone-900 text-xs border border-stone-200 focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      رقم الجوال *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="050XXXXXXX"
                      className="w-full px-4 py-2.5 rounded-xl bg-white text-stone-900 text-xs border border-stone-200 focus:outline-none focus:border-orange-500 transition-colors dir-ltr text-right"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      البريد الإلكتروني *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@domain.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white text-stone-900 text-xs border border-stone-200 focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      موضوع الرسالة
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white text-stone-900 text-xs border border-stone-200 focus:outline-none focus:border-orange-500 transition-colors"
                    >
                      <option value="استفسار عام">استفسار عام</option>
                      <option value="حجز أو طلبات خفيفة">حجز أو مناسبة خاصة</option>
                      <option value="ملاحظة أو اقتراح">ملاحظة أو اقتراح</option>
                      <option value="طلب عروض شركات">طلب عروض شركات</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    تفاصيل الرسالة *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="اكتب نص رسالتك هنا..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white text-stone-900 text-xs border border-stone-200 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-md shadow-orange-600/20 transition-all flex items-center justify-center gap-2 active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>إرسال الرسالة الآن</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
