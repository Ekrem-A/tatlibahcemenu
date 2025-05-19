'use client';

import Image from 'next/image';

export default function Slider() {
  return (
    <section className="relative w-full h-[40vh] sm:h-[60vh] lg:h-[75vh] min-h-[300px] overflow-hidden">
      <Image
        src="/img/slider.jpeg"
        alt="Slider Background"
        fill
        className="object-cover object-center brightness-75"
        priority
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Restaurant Menu
        </h1>
        <p className="text-sm sm:text-base">
          Home / <span className="text-yellow-500">menü</span>
        </p>
      </div>
    </section>
  );
}
