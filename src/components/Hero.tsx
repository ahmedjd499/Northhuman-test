import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/img/background/bg-hero.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay for better readability */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(160deg, rgba(26, 14, 10, 0.7) 0%, rgba(44, 24, 16, 0.7) 20%, rgba(74, 44, 32, 0.7) 40%, rgba(61, 35, 23, 0.7) 60%, rgba(44, 24, 16, 0.7) 80%, rgba(26, 14, 10, 0.7) 100%)",
      }} />

      {/* Bottom gradient fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-primary">
          Best Furniture Collection
        </p>
        <h1 className="mb-10 font-heading text-4xl font-normal leading-tight text-white md:text-5xl lg:text-[56px] lg:leading-[1.15]">
          Make your interior more
          <br />
          minimalistic &amp; modern
        </h1>

        {/* Search bar */}
        <div className="mx-auto flex max-w-md items-center overflow-hidden rounded-full bg-white shadow-lg">
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
            className="flex-1 bg-transparent px-4 py-3.5 text-sm text-secondary outline-none placeholder:text-gray-400"
          />
          <button className="mr-1.5 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary/90">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
