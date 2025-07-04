import { useContext, useEffect, useState } from "react";
import CountUp from "react-countup";
import { LanguageContext } from "../../contexts/LanguageContext";
import type { IHomepage, IStatistic } from "../../utilities/interface";

const Statistics = () => {
  const [statistics, setStatistics] = useState<IStatistic[]>([]);
  const [loading, setLoading] = useState(true);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await fetch("/homepage.json");
        const data: IHomepage = await response.json();
        setStatistics(data.statistics || []);
      } catch (error) {
        console.error("Error fetching statistics:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStatistics();
  }, []);

  if (loading) {
    return (
      <div className="py-16 px-5 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-pulse">Loading statistics...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 px-5 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 italic underline decoration-gray-800 decoration-4 decoration-wavy underline-offset-[16px]">
          ConnectJapan by Numbers
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statistics.map((item, index) => (
            <div
              key={index}
              className=" bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 text-center border border-gray-100"
            >
              <div className="mb-4">
                <CountUp
                  end={item.total}
                  duration={2.5}
                  separator=","
                  className="text-4xl md:text-5xl font-bold text-indigo-600"
                />
                {
                  <span className="text-4xl md:text-5xl font-bold text-indigo-600">
                    +
                  </span>
                }
              </div>
              <h2 className="text-lg md:text-xl font-semibold text-gray-700 leading-tight">
                {item.title[language]}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
