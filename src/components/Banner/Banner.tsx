import type { IBannerProps } from "../../utilities/interface";

const Banner = ({ title, categories }: IBannerProps) => {
  const delayClasses = [
    "delay-0",
    "delay-100",
    "delay-200",
    "delay-300",
    "delay-400",
    "delay-500",
  ];

  return (
    <section className="banner-gradient text-white py-20 px-5 text-center relative overflow-hidden">
      <div className="banner-grain"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <h1 className="animate-fade-up text-4xl md:text-5xl lg:text-6xl font-bold mb-8 drop-shadow-lg tracking-tight leading-tight">
          {title}
        </h1>
        <div className="animate-fade-up-delay text-lg md:text-xl lg:text-2xl font-medium flex justify-center items-center flex-wrap gap-2 md:gap-4 md:flex-row flex-col mt-6">
          {categories.map((category, index) => (
            <span
              key={index}
              className={`animate-fade-up-stagger py-3 px-6 bg-white/15 rounded-full backdrop-blur-md border border-white/20 transition-all duration-300 ease-in-out cursor-pointer hover:bg-white/25 hover:-translate-y-0.5 hover:shadow-lg w-full md:w-auto max-w-72 md:max-w-none text-lg md:text-xl lg:text-2xl ${
                delayClasses[index] || "delay-500"
              }`}
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
