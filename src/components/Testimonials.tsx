"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Bang Upin",
    role: "Pedagang Asongan",
    text: "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal",
    image: "/img/testi/person1.png",
    bg: "/img/testi/bg-testi1.png",
    rating: 4,
  },
  {
    name: "Ibuk Sukijan",
    role: "Ibu Rumah Tangga",
    text: "Makasih Panto, aku sekarang beragal tinggal di apartment karena barang-barang yang terlihat mewah",
    image: "/img/testi/person2.png",
    bg: "/img/testi/bg-testi1.png",
    rating: 4,
  },
  {
    name: "Mpok Ina",
    role: "Karyawan Swasta",
    text: "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak",
    image: "/img/testi/person3.png",
    bg: "/img/testi/bg-testi1.png",
    rating: 4,
  },
  {
    name: "Pak Budi",
    role: "Pengusaha Mebel",
    text: "Produk berkualitas tinggi dengan harga yang sangat kompetitif di pasaran",
    image: "/img/testi/person1.png",
    bg: "/img/testi/bg-testi1.png",
    rating: 5,
  },
  {
    name: "Ibu Siti",
    role: "Desainer Interior",
    text: "Koleksi furniture terbaik yang pernah saya temukan, sangat merekomendasikan",
    image: "/img/testi/person2.png",
    bg: "/img/testi/bg-testi2.png",
    rating: 5,
  },
  {
    name: "Pak Roni",
    role: "Kontraktor Bangunan",
    text: "Layanan pelanggan yang luar biasa dan pengiriman sangat cepat",
    image: "/img/testi/person3.png",
    bg: "/img/testi/bg-testi3.png",
    rating: 4,
  },
];

const StarIcon = () => (
  <svg
    className="h-5 w-5 fill-primary"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    const updatePerView = () => {
      const width = window.innerWidth;
      if (width < 640) setPerView(1);
      else if (width < 1024) setPerView(2);
      else setPerView(3);
    };

    updatePerView();
    window.addEventListener("resize", updatePerView);
    return () => window.removeEventListener("resize", updatePerView);
  }, []);

  const maxIndex = Math.max(testimonials.length - perView, 0);

  const translatePercent = useMemo(() => {
    if (perView === 0) return 0;
    return (100 / perView) * currentIndex;
  }, [currentIndex, perView]);

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className=" py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-primary">
            Testimonials
          </p>
          <h2 className="font-heading text-4xl font-bold leading-tight text-secondary md:text-5xl">
            Our Client Reviews
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            aria-label="Previous testimonial"
            className="absolute left-1 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 text-secondary shadow-md lg:-left-8"
            type="button"
            onClick={goPrev}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            aria-label="Next testimonial"
            className="absolute right-1 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 text-secondary shadow-md lg:-right-8"
            type="button"
            onClick={goNext}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonial Cards */}
          <div className="overflow-hidden">
            <div
              className="flex gap-6 py-5 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${translatePercent}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="shrink-0 rounded-3xl overflow-hidden shadow-lg relative"
                  style={{ width: `calc(${100 / perView}% - 18px)`, minHeight: '400px' }}
                >
                  {/* Background Image - Full card height */}
                  <div className="absolute inset-0">
                    <Image
                      src={testimonial.bg}
                      alt={`Background for ${testimonial.name}`}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* White Card Content - overlaying background */}
                  <div className="relative z-10 h-full flex flex-col pt-48  px-4 md:px-6 pb-6">
                    {/* White Card Container */}
                    <div className="rounded-2xl bg-white shadow-xl flex flex-col flex-1">
                      {/* Avatar - part of white card, positioned at top with negative margin */}
                      <div className="flex justify-center -mt-4 md:-mt-6 mb-2">
                        <div className="relative h-8 md:h-12 w-8 md:w-12 rounded-full border-2 border-white overflow-hidden bg-gray-200 shadow-lg">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>

                      {/* Info */}
                      <div className="text-center flex flex-col flex-1 px-6 md:px-8 pb-6">
                        <h3 className="font-heading text-lg md:text-xl font-bold text-secondary">
                          {testimonial.name}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600 mb-3">
                          {testimonial.role}
                        </p>

                        {/* Quote */}
                        <p className="mb-5 text-sm md:text-base leading-relaxed text-gray-700 flex-1">
                          &quot;{testimonial.text}&quot;
                        </p>

                        {/* Rating */}
                        <div className="flex justify-center gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <div key={i}>
                              {i < testimonial.rating ? (
                                <StarIcon />
                              ) : (
                                <svg
                                  className="h-5 w-5 fill-gray-300"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
