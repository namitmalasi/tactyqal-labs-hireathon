function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC]">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-purple-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-10 lg:py-28">
        {/* Left content */}
        <div className="max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#6C4CF1]" />
            <span className="text-xs font-bold tracking-widest text-[#6C4CF1]">
              BUILD SOMETHING REAL
            </span>
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
            Have an idea?
            <span className="mt-2 block text-[#6C4CF1]">
              Let's turn it into a real product.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
            Tactyqal Labs helps aspiring entrepreneurs and young builders turn
            their ideas into real-world applications through expert mentoring
            and hands-on product development.
          </p>

          {/* Highlights */}
          <div className="mt-8 flex flex-wrap gap-3">
            {["8-week journey", "1:1 Mentorship", "Build & Launch"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm"
                >
                  {item}
                </span>
              ),
            )}
          </div>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#6C4CF1] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-purple-200 transition-all hover:-translate-y-1 hover:bg-[#5938DB]"
            >
              Book a Free Consultation
              <span aria-hidden="true">→</span>
            </a>

            <a
              href="#success-stories"
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-7 py-4 text-sm font-semibold text-gray-800 transition-all hover:border-[#6C4CF1] hover:text-[#6C4CF1]"
            >
              Explore Success Stories
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            From your first idea to a product ready for the world.
          </p>
        </div>

        {/* Right visual */}
        <div className="relative mx-auto w-full max-w-lg lg:ml-auto">
          {/* Main illustration card */}
          <div className="relative rounded-3xl border border-gray-200 bg-white p-5 shadow-2xl shadow-purple-100/70 sm:p-7">
            <div className="flex items-center justify-between border-b border-gray-100 pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  YOUR NEXT BIG IDEA
                </p>
                <h3 className="mt-1 text-lg font-bold text-gray-900">
                  Build. Launch. Grow.
                </h3>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-xl">
                💡
              </div>
            </div>

            {/* Journey steps */}
            <div className="mt-7 space-y-5">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-xl">
                  ✨
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-gray-900">
                      Idea & Discovery
                    </h4>
                    <span className="text-xs font-medium text-purple-600">
                      Step 01
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    Shape your idea into a clear plan.
                  </p>
                </div>
              </div>

              <div className="ml-6 h-5 border-l-2 border-dashed border-purple-200" />

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-xl">
                  🛠️
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-gray-900">
                      Build & Prototype
                    </h4>
                    <span className="text-xs font-medium text-blue-600">
                      Step 02
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    Turn your plan into a working product.
                  </p>
                </div>
              </div>

              <div className="ml-6 h-5 border-l-2 border-dashed border-purple-200" />

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-xl">
                  🚀
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-gray-900">
                      Launch & Grow
                    </h4>
                    <span className="text-xs font-medium text-green-600">
                      Step 03
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    Take your product to the next level.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom note */}
            <div className="mt-8 flex items-center gap-3 rounded-2xl bg-[#F5F2FF] p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-lg">
                🎯
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">
                  Your idea deserves a chance.
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Get guidance at every step of the journey.
                </p>
              </div>
            </div>
          </div>

          {/* Floating decorative card */}
          <div className="absolute -right-3 -top-6 hidden rounded-2xl border border-gray-100 bg-white px-4 py-3 shadow-xl sm:block">
            <p className="text-xs font-medium text-gray-500">
              The journey starts here
            </p>
            <p className="mt-1 font-bold text-[#6C4CF1]">
              Think. Create. Launch.
            </p>
          </div>

          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-gray-100 bg-white px-4 py-3 shadow-xl sm:block">
            <p className="text-sm font-semibold text-gray-900">
              Built with mentorship
            </p>
            <p className="mt-1 text-xs text-gray-500">
              Learn by building real products
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
