"use client";

import React, { useState, useMemo } from "react";
import menuData from "@/data/menu.json";
import { Search, Utensils } from "lucide-react";
import Image from "next/image";

export default function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = useMemo(() => {
    return menuData.items.filter((item) => {
      const matchesCategory =
        selectedCategory === "الكل" || item.category === selectedCategory;

      const queryLower = searchQuery.toLowerCase().trim();
      const matchesSearch =
        queryLower === "" ||
        item.name.toLowerCase().includes(queryLower) ||
        item.description.toLowerCase().includes(queryLower);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="menu" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold tracking-wider">
            <Utensils className="w-4 h-4 text-amber-700" />
            <span>القائمة الرقمية التفاعلية</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900">
            تشكيلة الأطباق الحرفية
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            استكشف قائمة طعامنا الخاصة المحضرة يومياً بأعلى معايير الجودة والتصميم الحرفي.
          </p>
        </div>

        {/* Controls: Search Bar & Category Filter Pills */}
        <div className="max-w-4xl mx-auto space-y-6 mb-14">
          
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-stone-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث باسم الطبق أو المكونات..."
              className="w-full pr-11 pl-4 py-3.5 rounded-full border border-stone-300 bg-stone-50 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:bg-white transition-all text-sm shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 left-0 pl-4 flex items-center text-xs text-stone-500 hover:text-stone-800 font-bold"
              >
                مسح
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2.5 pt-2">
            {menuData.categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                  selectedCategory === category
                    ? "bg-amber-700 text-white shadow-lg shadow-amber-900/15 scale-105"
                    : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Premium Dishes Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-3xl border border-stone-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Dish Image Container */}
                <div className="relative aspect-[16/11] overflow-hidden bg-stone-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  {/* Category Pill Tag */}
                  <div className="absolute top-3 right-3">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-md text-amber-900 text-xs font-bold rounded-full shadow-sm border border-white/60">
                      {item.category}
                    </span>
                  </div>
                  {/* Price Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-3.5 py-1 bg-stone-950/85 backdrop-blur-md text-amber-300 font-heading text-sm font-extrabold rounded-full shadow-md border border-stone-800">
                      {item.price}
                    </span>
                  </div>
                </div>

                {/* Dish Details Card Body */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 bg-gradient-to-b from-white to-stone-50/50">
                  <h3 className="font-heading text-xl font-extrabold text-stone-900 group-hover:text-amber-800 transition-colors mb-3 leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed flex-1 font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 bg-stone-50 rounded-3xl border border-dashed border-stone-300 max-w-md mx-auto">
            <p className="text-stone-700 text-base font-semibold mb-3">
              لم نجد أي طبق يطابق &quot;{searchQuery}&quot;
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("الكل");
              }}
              className="text-amber-700 hover:text-amber-900 font-bold text-sm underline underline-offset-4"
            >
              إعادة تصفير خيارات البحث والتصنيف
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
