const benefits = [
  {
    icon: "🎯",
    title: "1:1 Expert Mentorship",
    description:
      "Get personal guidance from experienced mentors who help you make better decisions at every stage.",
    color: "bg-purple-100",
  },
  {
    icon: "💻",
    title: "Hands-on Product Building",
    description:
      "Learn by doing. Work on your own idea and turn it into a functional real-world product.",
    color: "bg-blue-100",
  },
  {
    icon: "🧠",
    title: "Practical Learning",
    description:
      "Build useful skills by solving real problems instead of relying only on theory.",
    color: "bg-orange-100",
  },
  {
    icon: "🚀",
    title: "From Idea to Launch",
    description:
      "Get support throughout your journey, from validating your idea to preparing your product for launch.",
    color: "bg-green-100",
  },
];

function Benefits() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Left content */}
        <div>
          <span className="inline-flex rounded-full bg-purple-50 px-4 py-2 text-xs font-bold tracking-widest text-[#6C4CF1]">
            WHY TACTYQAL LABS
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
            More than just an idea.
            <span className="block text-[#6C4CF1]">
              A team behind your vision.
            </span>
          </h2>

          <p className="mt-6 max-w-lg text-base leading-8 text-gray-600 sm:text-lg">
            Building a product can feel overwhelming when you're starting out.
            With the right guidance, practical experience, and support, you can
            move forward with confidence.
          </p>

          <a
            href="#contact"
            className="mt-9 inline-flex items-center gap-2 rounded-xl bg-[#6C4CF1] px-7 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:bg-[#5938DB]"
          >
            Get Started Today
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Right benefit cards */}
        <div className="grid gap-5 sm:grid-cols-2">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-100/50 ${
                index % 2 === 1 ? "sm:translate-y-8" : ""
              }`}
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${benefit.color}`}
              >
                {benefit.icon}
              </div>

              <h3 className="mt-6 text-lg font-bold text-gray-900">
                {benefit.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
