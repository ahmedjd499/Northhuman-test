const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "483", label: "Happy Client" },
  { value: "150+", label: "Project Finished" },
];

export default function Experiences() {
  return (
    <section id="experiences" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: image placeholder */}
          <div
            className="aspect-[4/3] w-full rounded-2xl"
            style={{
              background:
                "linear-gradient(145deg, #3d2317 0%, #5a3a2a 40%, #8B6914 70%, #4a2c20 100%)",
            }}
          />

          {/* Right: content */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Experiences
            </p>
            <h2 className="mb-6 text-3xl font-bold leading-tight text-secondary md:text-4xl">
              We provide you the best experience
            </h2>
            <p className="mb-8 leading-relaxed text-gray-500">
              We ensure that you receive the best possible experience with our
              furniture. From initial design consultation to delivery and setup,
              our team is dedicated to making every step seamless and enjoyable.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>

            <button className="mt-8 rounded-full bg-primary px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/90">
              More Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
