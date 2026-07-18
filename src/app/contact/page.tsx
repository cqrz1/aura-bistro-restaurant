import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import LocationContactSection from "@/components/sections/LocationContactSection";
import restaurantData from "@/data/restaurant.json";
import { Phone, Mail, MapPin, Clock, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: `اتصل بنا | ${restaurantData.name}`,
  description: `تواصل مع مطعم ${restaurantData.name} بالعليا الرياض. اتصل مباشرة، استفسر عبر الواتساب أو احصل على الاتجاهات في خرائط قوقل.`,
};

const faqs = [
  {
    question: "هل يتوفر خيار التوصيل للمنازل؟",
    answer: "نعم، يمكنك الطلب والتوصيل المباشر عبر تطبيق الواتساب أو عبر منصات التوصيل المعتمدة (جاهز، هنقرستيشن، تويو)."
  },
  {
    question: "ما هي أنواع الخبز المستخدمة في شاورما أورا؟",
    answer: "نستخدم خبز الصاج الرقيق المحضر طازجاً أمامك يومياً، بالإضافة إلى خبز الصمّون العربي التقليدي."
  },
  {
    question: "هل جميع اللحوم والدواجن طازجة؟",
    answer: "نعم، جميع اللحوم والدواجن طازجة 100% ومحلية معتمدة، ويتم تتبيلها يومياً بخلطاتنا الحرفية دون أي مواد حافظة."
  },
  {
    question: "هل توجد خيارات خاصة بالمناسبات وصناديق الجمعات؟",
    answer: "بالتأكيد! نوفر صندوق أورا جولد بكس بـ 12 قطعة ميني صاج مع تشكيلة الصوصات العائلية والمقبلات."
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 selection:bg-orange-200 selection:text-orange-950">
      <Header />

      <main className="flex-1">
        {/* Contact Hero Banner */}
        <section className="bg-stone-900 text-white py-16 lg:py-20 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold mb-4 border border-orange-500/30">
              مركز خدمة العملاء
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-black mb-4">
              يسعدنا التواصل معكم دائماً
            </h1>
            <p className="text-stone-300 text-sm max-w-xl mx-auto leading-relaxed">
              سواء كنت ترغب بالزيارة، الطلب السريع، أو استفسار عن المناسبات، يسعد فريق مطعم شاورما أورا بمساعدتك.
            </p>
          </div>
        </section>

        {/* Contact Grid & Form Section */}
        <LocationContactSection />

        {/* FAQ Section */}
        <section className="py-16 bg-stone-100/70 border-t border-stone-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-bold mb-3 border border-orange-200">
                <HelpCircle className="w-3.5 h-3.5 text-orange-600" />
                <span>الأسئلة الشائعة</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-stone-900">
                إجابات على استفساراتكم المتكررة
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm">
                  <h3 className="font-heading font-bold text-stone-900 text-base mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
