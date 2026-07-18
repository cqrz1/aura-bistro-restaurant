"use client";

import { useState, useTransition, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Search, Sparkles, Eye, Flame, Layers } from "lucide-react";
import menuData from "@/data/menu.json";
import FoodModal, { MenuItem } from "@/components/ui/FoodModal";
import SkeletonCard from "@/components/ui/SkeletonCard";

export default function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [bestSellersOnly, setBestSellersOnly] = useState(false);
  const [activeItem, setActiveItem] = useState<MenuItem | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleCategoryChange = (catId: string) => {
    startTransition(() => {
      setSelectedCategory(catId);
    });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    startTransition(() => {
      setSearchQuery(val);
    });
  };

  const filteredItems = useMemo(() => {
    return menuData.items.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesBestSeller = !bestSellersOnly || item.isBestSeller;

      return matchesCategory && matchesSearch && matchesBestSeller;
    });
  }, [selectedCategory, searchQuery, bestSellersOnly]);

  return (
    <section id="menu" className="py-20 bg-white border-b border-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-bold mb-3 border border-orange-200">
            <Flame className="w-3.5 h-3.5 text-orange-600" />
            <span>القائمة الحرفية الرقمية</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-stone-900 mb-3">
            تذوق أشهى أصناف الشاورما والمقبلات
          </h2>
          <p className="text-stone-600 text-sm">
            اختر صنفك المفضل واكتشف المكونات الحرفية، أو اطلب مباشرة عبر الواتساب.
          </p>
        </div>

        {/* Filter controls bar */}
        <div className="bg-stone-50 p-4 sm:p-6 rounded-3xl border border-stone-200/80 mb-10 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="ابحث عن صنف، شاورما، عصير..."
                className="w-full pl-4 pr-10 py-2.5 rounded-xl bg-white text-stone-900 placeholder:text-stone-400 text-xs font-medium border border-stone-200 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600"
                >
                  مسح
                </button>
              )}
            </div>

            {/* Best sellers toggle */}
            <label className="flex items-center gap-2 cursor-pointer bg-white px-4 py-2.5 rounded-xl border border-stone-200 text-xs font-bold text-stone-700 hover:border-orange-300 transition-colors">
              <input
                type="checkbox"
                checked={bestSellersOnly}
                onChange={(e) => setBestSellersOnly(e.target.checked)}
                className="w-4 h-4 text-orange-600 rounded border-stone-300 focus:ring-orange-500"
              />
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>الأكثر طلباً فقط</span>
            </label>
          </div>

          {/* Category Pills Slider */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-2 border-t border-stone-200/50">
            {menuData.categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    active
                      ? "bg-orange-600 text-white shadow-md shadow-orange-600/20"
                      : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-100"
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Grid */}
        {isPending ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-stone-50 rounded-3xl border border-dashed border-stone-200">
            <p className="text-stone-500 font-bold text-base mb-2">لا توجد نتائج مطابقة لبحثك</p>
            <p className="text-stone-400 text-xs mb-4">جرب البحث بكلمة أخرى أو تغيير الفلتر المختارات</p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
                setBestSellersOnly(false);
              }}
              className="px-4 py-2 bg-orange-600 text-white text-xs font-bold rounded-xl"
            >
              عرض كافة الأصناف
            </button>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-soft-card shadow-soft-hover flex flex-col justify-between group cursor-pointer"
                  onClick={() => setActiveItem(item as MenuItem)}
                >
                  <div>
                    {/* Item Image */}
                    <div className="relative w-full h-48 bg-stone-100 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, 300px"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-stone-900 font-bold text-xs shadow-lg">
                          <Eye className="w-3.5 h-3.5 text-orange-600" />
                          معاينة التفاصيل
                        </span>
                      </div>

                      {item.isBestSeller && (
                        <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-500 text-white shadow-md flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          الأكثر طلباً
                        </span>
                      )}
                    </div>

                    {/* Item Text */}
                    <div className="p-5">
                      <div className="flex justify-between items-start gap-2 mb-1.5">
                        <h3 className="font-heading font-bold text-stone-900 text-base group-hover:text-orange-600 transition-colors line-clamp-1">
                          {item.name}
                        </h3>
                      </div>

                      <p className="text-stone-500 text-xs line-clamp-2 leading-relaxed mb-4">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom Price & Action */}
                  <div className="px-5 pb-5 pt-0 flex items-center justify-between border-t border-stone-100 mt-auto pt-3">
                    <div className="flex items-baseline gap-1">
                      <span className="font-heading font-black text-orange-600 text-xl">
                        {item.price}
                      </span>
                      <span className="text-[11px] font-bold text-stone-500">{item.currency}</span>
                    </div>

                    <span className="p-2 rounded-xl bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                      <Eye className="w-4 h-4" />
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Food Details Modal */}
      <FoodModal item={activeItem} onClose={() => setActiveItem(null)} />
    </section>
  );
}
