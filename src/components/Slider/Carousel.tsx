import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import type { ISliderProps } from "../../utilities/interface";

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
    pauseOnHover: false,
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
    <div className=" py-8 bg-gradient-to-br from-purple-50 to-pink-100">
      <Slider {...settings}>
        {universities.map((university) => (
          <div key={university.id} className="px-4">
            <div className="card bg-base-100 w-full max-w-96 rounded-3xl shadow-sm mx-auto">
              <figure>
                <img
                  src={university.candidate_pic || "/api/placeholder/400/300"}
                  alt={university.candidate_name[language]}
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src =
                      "https://via.placeholder.com/400x300/f3f4f6/9ca3af?text=Student+Photo";
                  }}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-center justify-center">
                  {university.candidate_name[language]}
                </h2>
                <div className="flex justify-center mt-2">
                  <img
                    src={university.logo}
                    alt={university.name[language]}
                    className="h-16 w-auto object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src =
                        "https://via.placeholder.com/150x60/f3f4f6/9ca3af?text=University+Logo";
                    }}
                  />
                </div>
                <p className="text-center text-sm text-gray-600 mt-2">
                  {university.name[language]}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
