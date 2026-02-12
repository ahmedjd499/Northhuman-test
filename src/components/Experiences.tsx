import Image from "next/image";



export default function Experiences() {
  return (
    <section id="experiences" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: image */}
          <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl relative order-2 lg:order-1">
            <Image
              src="/img/furniture/img-exper.png"
              alt="Experience showcase"
              fill
              className="object-cover"
            />
          </div>

          {/* Right: content */}
          <div className="order-1 lg:order-2">
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">
              Experiences
            </p>
            <h2 className="mb-6 font-heading text-4xl font-normal leading-tight text-secondary md:text-5xl lg:text-5xl">
              We Provide You The
              <br />
              Best Experience
            </h2>
            <p className="mb-8 text-base leading-relaxed text-gray-600">
              You don&apos;t have to worry about the result because all of these
              interiors are made by people who are professionals in their fields
              with an elegant and lucurious style and with premium quality
              materials
            </p>

            {/* More Info link */}
            <a href="#" className="inline-flex items-center gap-3 text-base font-medium text-primary hover:underline">
              More Info
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

