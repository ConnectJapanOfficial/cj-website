import type { ISlideProps } from "../../utilities/interface";

const Slide = ({ university, language }: ISlideProps) => {
  return (
    <div className="px-4 my-2 h-full">
      <div className="card bg-white w-full max-w-96 h-full rounded-3xl shadow-2xl mx-auto border border-white/20 backdrop-blur-sm overflow-hidden flex flex-col transform-none transition-none hover:scale-100">
        <figure className="relative overflow-hidden rounded-t-3xl flex-shrink-0">
          <img
            src={
              university.successful_applicants_pic || "/api/placeholder/400/300"
            }
            alt={university.candidate_name[language]}
            className="w-full h-64 object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src =
                "https://via.placeholder.com/400x300/f3f4f6/9ca3af?text=Student+Photo";
            }}
          />
        </figure>
        <div className="card-body bg-gradient-to-b from-white to-gray-50 rounded-b-3xl flex-grow flex flex-col justify-between p-4">
          <div className="flex-grow">
            <h2 className="card-title text-center justify-center text-gray-800 font-bold min-h-[2rem] flex items-center">
              {university.candidate_name[language]}
            </h2>

            {/* Location */}
            <div className="flex items-center justify-center mt-2">
              <div className="flex items-center gap-1">
                <svg
                  className="w-3 h-3 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-xs text-gray-600">
                  {university.location[language]}
                </p>
              </div>
            </div>

            {/* University Logo */}
            <div className="flex justify-center mt-3 p-2 bg-white rounded-xl shadow-md">
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

            {/* University Name */}
            <p className="text-center text-sm text-gray-700 mt-2 font-medium min-h-[3rem] flex items-center justify-center">
              {university.name[language]}
            </p>
          </div>

          {/* Scholarship */}
          <div className="mt-3 text-center min-h-[2.5rem] flex items-center justify-center">
            {university.scholarship[language] && (
              <span className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                {university.scholarship[language]}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
