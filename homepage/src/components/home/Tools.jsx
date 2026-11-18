
const tools = [
  {
    icon: "🧭",
    category: "IDEA VALIDATION",
    title: "Idea Validator",
    description:
      "Evaluate your startup idea, identify your target audience, and understand the problem you're solving.",
    color: "bg-purple-100",
    label: "Validate your idea",
  },
  {
    icon: "📊",
    category: "BUSINESS PLANNING",
    title: "Business Model Canvas",
    description:
      "Organize your business idea and map out its key activities, customers, and revenue streams.",
    color: "bg-blue-100",
    label: "Plan your business",
  },
  {
    icon: "💰",
    category: "FINANCIAL PLANNING",
    title: "Startup Cost Calculator",
    description:
      "Estimate your initial investment and understand the basic costs involved in starting up.",
    color: "bg-green-100",
    label: "Estimate your costs",
  },
  {
    icon: "🎯",
    category: "PRODUCT STRATEGY",
    title: "MVP Planner",
    description:
      "Identify essential product features and decide what to build first for your minimum viable product.",
    color: "bg-orange-100",
    label: "Plan your MVP",
  },
  {
    icon: "🔍",
    category: "MARKET RESEARCH",
    title: "Competitor Analysis",
    description:
      "Research competing products and discover opportunities to make your idea stand out.",
    color: "bg-pink-100",
    label: "Explore your market",
  },
  {
    icon: "📈",
    category: "GROWTH STRATEGY",
    title: "Launch Checklist",
    description:
      "Prepare for your product launch with a simple checklist covering the important steps.",
    color: "bg-indigo-100",
    label: "Prepare to launch",
  },
];

function Tools() {
  return (
    <section
      id="tools"
      className="bg-[#F8FAFC] px-5 py-20 sm:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-purple-100 px-4 py-2 text-xs font-bold tracking-widest text-[#6C4CF1]">
            FREE RESOURCES
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
            Everything you need to{" "}
            <span className="text-[#6C4CF1]">get started.</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
            Starting a business doesn't have to be complicated. Explore
            useful resources to help you take your first steps with
            confidence.
          </p>
        </div>

        {/* Tools grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <article
              key={tool.title}
              className="group rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-100/50"
            >
              <div className="flex items-start justify-between">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${tool.color}`}
                >
                  {tool.icon}
                </div>

                <span className="text-gray-300 transition-colors group-hover:text-[#6C4CF1]">
                  ↗
                </span>
              </div>

              <p className="mt-7 text-xs font-bold tracking-wider text-[#6C4CF1]">
                {tool.category}
              </p>

              <h3 className="mt-2 text-xl font-bold text-gray-900">
                {tool.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                {tool.description}
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-gray-800 transition-colors group-hover:text-[#6C4CF1]">
                {tool.label}
                <span aria-hidden="true">→</span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Have an idea but don't know where to start?
          </p>

          <a
            href="#contact"
            className="mt-4 inline-flex items-center gap-2 font-semibold text-[#6C4CF1] hover:text-[#5938DB]"
          >
            Let's figure it out together
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Tools;
