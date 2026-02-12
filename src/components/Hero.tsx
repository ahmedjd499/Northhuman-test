import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-start justify-center overflow-hidden pt-20">
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



      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">

        <h1 className="my-5 font-heading text-5xl font-normal leading-tight text-white md:text-6xl lg:text-7xl lg:leading-[1.1]">
          Make Your Interior More
          Minimalistic & Modern

        </h1>
        <p className="text-lg my-4 text-white/80">Turn your room with panto into a lot minimalist
          <br /> and modern with ease and speed</p>

        {/* Search bar */}
        <div className="mx-auto flex max-w-sm items-center overflow-hidden rounded-full bg-white/10 shadow-lg ring-1 ring-white/20">

          <input
            type="text"
            placeholder="Search furniture"
            className="flex-1 bg-transparent px-4 py-3.5 text-sm text-secondary outline-none placeholder:text-white"
          />
          <button
            aria-label="Search"
            className="mr-1.5 rounded-full bg-primary px-4 py-2.5 text-white transition-colors hover:bg-primary/90"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              className="h-5 w-5 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
