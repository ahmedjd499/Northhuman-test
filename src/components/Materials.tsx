import Image from "next/image";

export default function Materials() {
  return (
    <section className="bg-secondary-bg py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: content */}
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">
              Materials
            </p>
            <h2 className="mb-6 font-heading text-4xl font-normal leading-tight text-secondary md:text-5xl">
              Very Serious
              <br />
              Materials For Making
              <br />
              Furniture
            </h2>
            <p className="mb-8 text-base leading-relaxed text-gray-600">
              Because panto was very serious about designing furniture for our
              environment, using a very expensive and famous capital but at a
              relatively low price
            </p>
            <a href="#" className="inline-flex items-center gap-3 text-base font-medium text-primary hover:underline">
              More Info
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
              </svg>
            </a>
          </div>

          {/* Right: image layout */}
          <div className="grid grid-cols-2 gap-6 items-start">
            <div className="col-span-1 row-span-2 aspect-[3/4] overflow-hidden rounded-3xl relative order-2">
              <Image
                src="/img/furniture/img-material.png"
                alt="Material sample 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="col-span-1 aspect-square overflow-hidden rounded-3xl relative order-1">
              <Image
                src="/img/furniture/img-material1.png"
                alt="Material sample 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="col-span-1 aspect-square overflow-hidden rounded-3xl relative order-3">
              <Image
                src="/img/furniture/img-material2.png"
                alt="Material sample 3"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
