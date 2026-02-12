"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Interior Designer",
    text: "Panto furniture completely transformed my clients' living spaces. The quality is exceptional and the designs are timeless. Highly recommended!",
    color: "#E58411",
    image: "/img/testi/person1.png",
  },
  {
    name: "Michael Chen",
    role: "Homeowner",
    text: "The best furniture shopping experience I've ever had. From browsing to delivery, everything was seamless. The sofa we got is absolutely stunning.",
    color: "#8B6914",
    image: "/img/testi/person2.png",
  },
  {
    name: "Emily Roberts",
    role: "Architect",
    text: "I always recommend Panto to my clients. Their attention to detail and commitment to quality materials sets them apart from the competition.",
    color: "#5a3a2a",
    image: "/img/testi/person3.png",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Testimonials
          </p>
          <h2 className="font-heading text-3xl font-normal text-secondary md:text-4xl">
            What our customers say
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`rounded-2xl border p-6 transition-all cursor-pointer ${active === i
                ? "border-primary bg-primary/5 shadow-md"
                : "border-gray-100 bg-white shadow-sm hover:shadow-md"
                }`}
              onClick={() => setActive(i)}
              role="button"
              tabIndex={0}
              aria-pressed={active === i}
              onKeyDown={(e) => e.key === "Enter" && setActive(i)}
            >
              {/* Avatar */}
              <div className="mb-4 flex items-center gap-3">
                <div className="h-11 w-11 overflow-hidden rounded-full relative">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-secondary">
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="mb-3 flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#E58411"
                    className="h-3.5 w-3.5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>

              <p className="text-sm leading-relaxed text-gray-500">{t.text}</p>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${active === i ? "w-8 bg-primary" : "w-2.5 bg-gray-300"
                }`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
