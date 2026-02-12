export default function Materials() {
  return (
    <section className="bg-secondary-bg py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: content */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Materials
            </p>
            <h2 className="mb-6 font-heading text-3xl font-normal leading-tight text-secondary md:text-4xl lg:text-[40px]">
              Very serious materials
              <br className="hidden lg:block" />
              for making furniture
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-gray-500">
              We source only the highest quality materials for our furniture. From
              sustainably harvested hardwoods to premium upholstery fabrics, every
              component is carefully selected to ensure durability and beauty.
            </p>
            <button className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90">
              More Info
            </button>
          </div>

          {/* Right: image grid placeholder */}
          <div className="grid grid-cols-2 gap-4">
            <div
              className="aspect-square overflow-hidden rounded-2xl"
              style={{
                background:
                  "linear-gradient(135deg, #A0522D 0%, #8B4513 100%)",
              }}
            />
            <div
              className="aspect-square overflow-hidden rounded-2xl"
              style={{
                background:
                  "linear-gradient(135deg, #D2B48C 0%, #BC9E72 100%)",
              }}
            />
            <div
              className="aspect-square overflow-hidden rounded-2xl"
              style={{
                background:
                  "linear-gradient(135deg, #5a3a2a 0%, #3d2317 100%)",
              }}
            />
            <div
              className="aspect-square overflow-hidden rounded-2xl"
              style={{
                background:
                  "linear-gradient(135deg, #C4A882 0%, #8B7355 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
