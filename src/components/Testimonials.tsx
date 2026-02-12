"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Bang Upin",
    role: "Pedagang Asongan",
    text: "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal",
    image: "/img/testi/person1.png",
    bg: "/img/furniture/img-exper.png",
    rating: 4,
  },
  {
    name: "Ibuk Sukijan",
    role: "Ibu Rumah Tangga",
    text: "Makasih Panto, aku sekarang beragal tinggal di apartment karena barang-barang yang terlihat mewah",
    image: "/img/testi/person2.png",
    bg: "/img/furniture/img-material1.png",
    rating: 4,
  },
  {
    name: "Mpok Ina",
    role: "Karyawan Swasta",
    text: "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak",
    image: "/img/testi/person3.png",
    bg: "/img/furniture/img-material2.png",
    rating: 4,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const goPrev = () => {
    setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goNext = () => {
    setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">
            Testimonials
          </p>
          <h2 className="font-heading text-4xl font-normal text-secondary md:text-5xl">
            Our Client Reviews
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative mx-auto max-w-4xl">
          {/* Testimonial Card */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] order-2 lg:order-1">
              <Image
                src={testimonials[active].bg}
                alt={testimonials[active].name}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                {/* Avatar */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-14 w-14 rounded-full overflow-hidden relative flex-shrink-0">
                    <Image
                      src={testimonials[active].image}
                      alt={testimonials[active].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-secondary">{testimonials[active].name}</p>
                    <p className="text-sm text-gray-500">{testimonials[active].role}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill={star <= testimonials[active].rating ? "#E58411" : "#E5E7EB"}
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  &quot; {testimonials[active].text}&quot;
                </p>

                {/* Dots */}
                <div className="flex gap-2 justify-center">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      className={`h-2 rounded-full transition-all ${active === i ? "w-6 bg-primary" : "w-2 bg-gray-300"
                        }`}
                      onClick={() => setActive(i)}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Arrow buttons */}
          <button
            onClick={goPrev}
            className="absolute left-0 top-1/3 -translate-x-16 lg:-translate-x-20 z-10 rounded-full bg-white p-3 text-secondary shadow-md hover:shadow-lg"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goNext}
            className="absolute right-0 top-1/3 translate-x-16 lg:translate-x-20 z-10 rounded-full bg-white p-3 text-secondary shadow-md hover:shadow-lg"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
