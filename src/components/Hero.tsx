export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background gradient simulating furniture store image */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #2c1810 0%, #4a2c20 25%, #3d2317 50%, #5a3a2a 75%, #2c1810 100%)",
        }}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Bottom gradient fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
          Best Furniture Collection
        </p>
        <h1 className="mb-8 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
          Make your interior more
          <br />
          minimalistic &amp; modern
        </h1>

        {/* Search bar */}
        <div className="mx-auto flex max-w-lg items-center overflow-hidden rounded-full bg-white/95 shadow-lg">
          <div className="flex items-center pl-5 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search furniture"
            className="flex-1 bg-transparent px-4 py-4 text-sm text-secondary outline-none placeholder:text-gray-400"
          />
          <button className="mr-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary/90">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
