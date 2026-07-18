"use client";

export default function SkeletonCard() {
  return (
    <div className="bg-white rounded-3xl p-4 border border-stone-200/80 shadow-soft-card animate-pulse">
      <div className="w-full h-48 bg-stone-200 rounded-2xl mb-4" />
      <div className="flex justify-between items-start mb-2">
        <div className="h-5 bg-stone-200 rounded-md w-3/5" />
        <div className="h-5 bg-stone-200 rounded-md w-1/5" />
      </div>
      <div className="h-4 bg-stone-200 rounded-md w-full mb-2" />
      <div className="h-4 bg-stone-200 rounded-md w-4/5 mb-4" />
      <div className="flex items-center justify-between pt-2 border-t border-stone-100">
        <div className="h-6 bg-stone-200 rounded-full w-20" />
        <div className="h-9 bg-stone-200 rounded-xl w-24" />
      </div>
    </div>
  );
}
