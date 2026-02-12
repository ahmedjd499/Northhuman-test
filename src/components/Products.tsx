const products = [
  {
    name: "Warm Lamp",
    price: "$199",
    rating: 4.8,
    gradient: "linear-gradient(135deg, #d4a574 0%, #c4956a 50%, #b8865c 100%)",
  },
  {
    name: "Cool Chair",
    price: "$299",
    rating: 4.9,
    gradient: "linear-gradient(135deg, #8B7355 0%, #6B5B3E 50%, #5A4A32 100%)",
  },
  {
    name: "Mini Table",
    price: "$149",
    rating: 4.7,
    gradient: "linear-gradient(135deg, #C4A882 0%, #A68B5B 50%, #8B7248 100%)",
  },
  {
    name: "Modern Sofa",
    price: "$499",
    rating: 5.0,
    gradient: "linear-gradient(135deg, #7B6B5A 0%, #5C4E3D 50%, #4A3F30 100%)",
  },
  {
    name: "Wooden Shelf",
    price: "$179",
    rating: 4.6,
    gradient: "linear-gradient(135deg, #A0522D 0%, #8B4513 50%, #6B3410 100%)",
  },
  {
    name: "Classic Desk",
    price: "$349",
    rating: 4.8,
    gradient: "linear-gradient(135deg, #D2B48C 0%, #BC9E72 50%, #A58858 100%)",
  },
  {
    name: "Floor Vase",
    price: "$89",
    rating: 4.5,
    gradient: "linear-gradient(135deg, #E8D5B7 0%, #D4BFA0 50%, #C0A988 100%)",
  },
  {
    name: "Accent Chair",
    price: "$259",
    rating: 4.9,
    gradient: "linear-gradient(135deg, #9B8B7A 0%, #7D6E5D 50%, #635545 100%)",
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
  return (
    <section id="products" className="bg-secondary-bg py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Our Products
          </p>
          <h2 className="font-heading text-3xl font-normal text-secondary md:text-4xl">
            Best Selling Products
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.name}
              className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              {/* Product image placeholder */}
              <div
                className="aspect-square w-full transition-transform duration-300 group-hover:scale-105"
                style={{ background: product.gradient }}
              />
              <div className="p-4">
                <h3 className="mb-1 text-sm font-semibold text-secondary">
                  {product.name}
                </h3>
                <StarRating rating={product.rating} />
                <p className="mt-2 text-base font-bold text-primary">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
