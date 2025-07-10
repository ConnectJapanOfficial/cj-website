import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import type { ISliderProps } from "../../utilities/interface";
import Slide from "./Slide";

const Carousel = ({ universities, language }: ISliderProps) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
      <div className="absolute inset-0  bg-opacity-10"></div>
      <div className="relative z-10">
        <Slider {...settings}>
          {universities.map((university) => (
            <Slide
              key={university.id}
              university={university}
              language={language}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
