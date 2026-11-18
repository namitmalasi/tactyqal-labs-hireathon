
const testimonials = [
  {
    quote:
      "The mentorship and practical guidance helped me understand how to take an idea and turn it into something tangible.",
    name: "Student Name",
    role: "Aspiring Entrepreneur",
    initials: "SN",
  },
  {
    quote:
      "Having a structured process made product building less overwhelming. I learned to focus on solving real problems.",
    name: "Student Name",
    role: "Young Builder",
    initials: "SN",
  },
  {
    quote:
      "The opportunity to learn by building gave me a better understanding of what it takes to develop a real product.",
    name: "Student Name",
    role: "Program Participant",
    initials: "SN",
  },
];

function Testimonials() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-purple-50 px-4 py-2 text-xs font-bold tracking-widest text-[#6C4CF1]">
            WORDS FROM OUR COMMUNITY
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
            The journey is better{" "}
            <span className="text-[#6C4CF1]">together.</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
            Learning, building, and growing becomes easier when you have
            the right people supporting your journey.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="flex flex-col rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-100/50"
            >
              {/* Quote icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-3xl font-bold text-[#6C4CF1]">
                "
              </div>

              {/* Quote */}
              <p className="mt-7 flex-1 text-base leading-8 text-gray-600">
                {testimonial.quote}
              </p>

              {/* Divider */}
              <div className="my-7 border-t border-gray-100" />

              {/* Person details */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-[#6C4CF1]">
                  {testimonial.initials}
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
