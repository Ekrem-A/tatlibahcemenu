'use client';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-[#0e0e0e] text-white flex flex-col items-center justify-center z-50">
      <h1 className="text-4xl md:text-6xl font-bold font-mono">
        Tatlı <span className="italic font-cursive">Bahçe</span>
      </h1>

      {/* Loading bar container */}
      <div className="mt-6 w-48 h-1 bg-neutral-700 relative overflow-hidden rounded-full">
        <div className="absolute top-0 left-0 h-full w-1/3 bg-yellow-500 animate-loading-bar" />
      </div>
    </div>
  );
}
