"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useCart } from "@/context/CartContext";

const products = [
  {
    name: "Sakarias Armchair",
    price: "$392",
    rating: 4.8,
    category: "Chair",
    image: "/img/shop/img-chair1.png",
  },
  {
    name: "Baltsar Chair",
    price: "$299",
    rating: 4.9,
    category: "Chair",
    image: "/img/shop/img-chair2.png",
  },
  {
    name: "Anjay Chair",
    price: "$519",
    rating: 4.7,
    category: "Chair",
    image: "/img/shop/img-chair3.png",
  },
  {
    name: "Nyantuy Chair",
    price: "$921",
    rating: 5.0,
    category: "Chair",
    image: "/img/shop/img-chair4.png",
  },
  {
    name: "Lund Chair",
    price: "$275",
    rating: 4.6,
    category: "Chair",
    image: "/img/shop/img-chair1.png",
  },
  {
    name: "Harrow Chair",
    price: "$315",
    rating: 4.7,
    category: "Chair",
    image: "/img/shop/img-chair2.png",
  },
  {
    name: "Nora Chair",
    price: "$410",
    rating: 4.8,
    category: "Chair",
    image: "/img/shop/img-chair3.png",
  },
  {
    name: "Sora Chair",
    price: "$365",
    rating: 4.5,
    category: "Chair",
    image: "/img/shop/img-chair4.png",
  },
  {
    name: "Elton Chair",
    price: "$448",
    rating: 4.9,
    category: "Chair",
    image: "/img/shop/img-chair1.png",
  },
  {
    name: "Mira Chair",
    price: "$389",
    rating: 4.6,
    category: "Chair",
    image: "/img/shop/img-chair2.png",
  },
  {
    name: "Riva Chair",
    price: "$529",
    rating: 4.9,
    category: "Chair",
    image: "/img/shop/img-chair3.png",
  },
  {
    name: "Kora Chair",
    price: "$298",
    rating: 4.4,
    category: "Chair",
    image: "/img/shop/img-chair4.png",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" role="img" aria-label={`Rated ${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={star <= Math.round(rating) ? "#E58411" : "#E5E7EB"}
          className="h-3.5 w-3.5"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
      ))}
      <span className="ml-1 text-xs text-gray-400">{rating}</span>
    </div>
  );
}

export default function Products() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [perView, setPerView] = useState(4);
  const { addToCart } = useCart();

  useEffect(() => {
    const updatePerView = () => {
      const width = window.innerWidth;
      if (width < 640) setPerView(1);
      else if (width < 1024) setPerView(2);
      else setPerView(4);
    };

    updatePerView();
    window.addEventListener("resize", updatePerView);
    return () => window.removeEventListener("resize", updatePerView);
  }, []);

  const maxIndex = Math.max(products.length - perView, 0);

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
    <section id="products" className="bg-secondary-bg py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="font-heading text-3xl font-normal text-secondary md:text-4xl">
            Best Selling Product
          </h2>
        </div>

        <div className="mb-12 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 p-1.5">
            {[
              "Chair",
              "Beds",
              "Sofa",
              "Lamp",
            ].map((tab, index) => (
              <button
                key={tab}
                className={
                  index === 0
                    ? "rounded-full bg-white px-6 py-2.5 text-base font-medium text-secondary cursor-pointer"
                    : "rounded-full px-6 py-2.5 text-base font-medium text-gray-600 cursor-pointer hover:bg-white hover:text-secondary transition-colors"
                }
                type="button"
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          <button
            aria-label="Previous products"
            className="absolute left-1 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 text-secondary shadow-md lg:-left-8 cursor-pointer"
            type="button"
            onClick={goPrev}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            aria-label="Next products"
            className="absolute right-1 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 text-secondary shadow-md lg:-right-8 cursor-pointer"
            type="button"
            onClick={goNext}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${translatePercent}%)` }}
            >
              {products.map((product) => (
                <div
                  key={product.name}
                  className="flex-shrink-0 overflow-hidden rounded-2xl  shadow-sm"
                  style={{ width: `calc(${100 / perView}% - 18px)` }}>
                  <div className="relative aspect-[4/3] w-full bg-white-40">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-6 drop-shadow-lg"
                    />
                  </div>
                  <div className="px-5 pb-5 pt-4 bg-white">
                    <p className="text-xs text-gray-400">{product.category}</p>
                    <h3 className="mb-2 text-base font-semibold" style={{ color: "#0D1B39" }}>
                      {product.name}
                    </h3>
                    <StarRating rating={product.rating} />
                    <div className="mt-4 flex items-center justify-between">
                      <p className="text-lg font-semibold" style={{ color: "#0D1B39" }}>
                        <span className="text-xs align-super">$</span>{product.price.slice(1)}
                      </p>
                      <button
                        aria-label={`Add ${product.name}`}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white hover:opacity-90 transition-opacity cursor-pointer"
                        style={{ backgroundColor: "#0D1B39" }}
                        type="button"
                        onClick={() =>
                          addToCart({
                            name: product.name,
                            price: product.price,
                            image: product.image,
                            rating: product.rating,
                            category: product.category,
                          })
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          className="h-5 w-5"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m-7-7h14" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <a href="#" className="inline-flex items-center gap-3 text-sm font-medium text-primary">
            View All
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
