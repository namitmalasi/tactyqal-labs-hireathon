
const steps = [
  {
    number: "01",
    phase: "WEEK 1–2",
    title: "Discover",
    description:
      "Start with your idea. Understand the problem, identify your audience, and validate whether your idea solves a real need.",
    icon: "💡",
    color: "bg-purple-100 text-purple-700",
  },
  {
    number: "02",
    phase: "WEEK 3–4",
    title: "Plan & Design",
    description:
      "Turn your idea into a clear product roadmap. Plan the features and create the initial design of your product.",
    icon: "📝",
    color: "bg-blue-100 text-blue-700",
  },
  {
    number: "03",
    phase: "WEEK 5–6",
    title: "Build",
    description:
      "Bring your idea to life. Work on developing a functional product with hands-on guidance and mentorship.",
    icon: "🛠️",
    color: "bg-orange-100 text-orange-700",
  },
  {
    number: "04",
    phase: "WEEK 7–8",
    title: "Launch",
    description:
      "Test, improve, and prepare your product for launch. Take your first step towards bringing it to real users.",
    icon: "🚀",
    color: "bg-green-100 text-green-700",
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-[#F8FAFC] px-5 py-20 sm:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-purple-100 px-4 py-2 text-xs font-bold tracking-widest text-[#6C4CF1]">
            YOUR JOURNEY
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
            From idea to launch in{" "}
            <span className="text-[#6C4CF1]">8 weeks.</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
            A structured journey that helps you move from an early idea to a
            working product, with expert guidance at every step.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-4">

          {/* Connecting line - desktop */}
          <div className="absolute left-[12%] right-[12%] top-8 hidden border-t-2 border-dashed border-purple-200 lg:block" />

          {steps.map((step) => (
            <div key={step.number} className="relative">
              
              {/* Number and icon */}
              <div className="relative z-10 mb-7 flex items-center justify-between lg:justify-start">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-4 border-[#F8FAFC] bg-white text-2xl shadow-md">
                  {step.icon}
                </div>

                <span className="text-4xl font-extrabold text-gray-200 lg:hidden">
                  {step.number}
                </span>

                <span className="hidden text-sm font-bold text-purple-300 lg:ml-auto lg:block">
                  {step.number}
                </span>
              </div>

              {/* Card */}
              <div className="h-full rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-100/50">
                <span
                  className={`inline-flex rounded-lg px-3 py-1.5 text-xs font-bold tracking-wide ${step.color}`}
                >
                  {step.phase}
                </span>

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="mb-5 text-gray-600">
            Have an idea you'd like to bring to life?
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-[#6C4CF1] px-7 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:bg-[#5938DB]"
          >
            Start Your Journey
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
