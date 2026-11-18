const stories = [
  {
    category: "EDTECH",
    title: "Making learning more accessible",
    description:
      "A digital learning platform designed to make education more engaging and accessible for students.",
    number: "01",
    color: "bg-purple-100 text-purple-700",
    tags: ["Education", "Web App"],
  },
  {
    category: "HEALTHTECH",
    title: "Simplifying everyday healthcare",
    description:
      "A technology-driven concept focused on making healthcare services easier to discover and access.",
    number: "02",
    color: "bg-blue-100 text-blue-700",
    tags: ["Healthcare", "Technology"],
  },
  {
    category: "SAAS",
    title: "Helping businesses work smarter",
    description:
      "A productivity-focused application concept built to simplify everyday business workflows.",
    number: "03",
    color: "bg-green-100 text-green-700",
    tags: ["Productivity", "SaaS"],
  },
];

function SuccessStories() {
  return (
    <section
      id="success-stories"
      className="bg-white px-5 pt-12 pb-20 sm:px-8 sm:pt-14 lg:pt-16 lg:pb-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-purple-50 px-4 py-2 text-xs font-bold tracking-widest text-[#6C4CF1]">
            IDEAS INTO REALITY
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
            Great ideas deserve to be{" "}
            <span className="text-[#6C4CF1]">built.</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
            Every great product starts with an idea. Explore the kinds of
            real-world solutions young builders can create with the right
            guidance and support.
          </p>
        </div>

        {/* Story cards */}
        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <article
              key={story.number}
              className="group rounded-3xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-100/60"
            >
              <div className="flex items-center justify-between">
                <span
                  className={`rounded-full px-3 py-1.5 text-xs font-bold tracking-wide ${story.color}`}
                >
                  {story.category}
                </span>

                <span className="text-sm font-semibold text-gray-300">
                  {story.number}
                </span>
              </div>

              {/* Visual placeholder */}
              <div className="my-8 flex h-44 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
                <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-white bg-white/80 text-5xl shadow-lg transition-transform duration-300 group-hover:scale-110">
                  {story.number === "01"
                    ? "📚"
                    : story.number === "02"
                      ? "🏥"
                      : "⚡"}
                </div>
              </div>

              <h3 className="text-xl font-bold leading-snug text-gray-900">
                {story.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                {story.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {story.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-[#6C4CF1] px-7 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:bg-[#5938DB]"
          >
            Start Building Your Idea
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default SuccessStories;
