import type { IBannerProps } from "../../utilities/interface";

const Banner = ({ title, categories, quote, author }: IBannerProps) => {
  const delayClasses = [
    "delay-0",
    "delay-100",
    "delay-200",
    "delay-300",
    "delay-400",
    "delay-500",
  ];

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Enhanced gradient background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 via-transparent to-cyan-400/20"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Enhanced grain texture */}
      <div className="absolute inset-0 opacity-40 mix-blend-soft-light">
        <div className="banner-grain"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center text-white">
        {/* Title with enhanced typography */}
        <div className="mb-12">
          <h1 className="animate-fade-up text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 tracking-tight leading-none">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent drop-shadow-2xl">
              {title}
            </span>
          </h1>

          {/* Decorative line */}
          <div className="animate-fade-up-delay flex justify-center mb-8">
            <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full shadow-lg"></div>
          </div>
        </div>

        {/* Enhanced categories with better spacing and effects */}
        <div className="animate-fade-up-delay mb-16">
          <div className="flex justify-center items-center flex-wrap gap-4 md:gap-6 max-w-5xl mx-auto">
            {categories.map((category, index) => (
              <span
                key={index}
                className={`group animate-fade-up-stagger category-card relative py-4 px-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl transition-all duration-500 ease-out cursor-pointer hover:bg-white/20 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 text-lg md:text-xl lg:text-2xl font-semibold ${
                  delayClasses[index] || "delay-500"
                }`}
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                {/* Category text */}
                <span className="relative z-10">{category}</span>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </span>
            ))}
          </div>
        </div>

        {/* Enhanced quote section with better visual hierarchy */}
        <div className="animate-fade-up-delay max-w-4xl mx-auto">
          <div className="relative p-8 md:p-12 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl">
            {/* Quote decoration */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center shadow-lg">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>
            </div>

            <blockquote className="text-xl md:text-2xl lg:text-3xl font-light italic leading-relaxed mb-6 text-white/95">
              "{quote}"
            </blockquote>

            <div className="flex justify-center">
              <cite className="text-lg md:text-xl font-medium text-blue-200 not-italic">
                — {author}
              </cite>
            </div>

            {/* Bottom decoration */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-up-delay mt-16">
          <div className="flex justify-center">
            <div className="animate-bounce">
              <svg
                className="w-6 h-6 text-white/60"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
