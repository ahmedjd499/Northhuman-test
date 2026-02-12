import Image from "next/image";

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "483", label: "Happy Client" },
  { value: "150+", label: "Project Finished" },
];

export default function Experiences() {
  return (
    <section id="experiences" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: image */}
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl relative">
            <Image
              src="/img/furniture/img-exper.png"
              alt="Experience showcase"
              fill
              className="object-cover"
            />
          </div>

          {/* Right: content */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Experiences
            </p>
            <h2 className="mb-6 font-heading text-3xl font-normal leading-tight text-secondary md:text-4xl lg:text-[40px]">
              We provide you the
              <br className="hidden lg:block" />
              best experience
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-gray-500">
              We ensure that you receive the best possible experience with our
              furniture. From initial design consultation to delivery and setup,
              our team is dedicated to making every step seamless and enjoyable.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>

            <button className="mt-8 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90">
              More Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
