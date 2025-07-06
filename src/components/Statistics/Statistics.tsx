import { useContext } from "react";
import CountUp from "react-countup";
import { TrendingUp, Users, Award, Globe } from "lucide-react";
import { LanguageContext } from "../../contexts/LanguageContext";
import type { IStatisticsSection } from "../../utilities/interface";

interface StatisticsProps {
  statistics: IStatisticsSection;
}

const Statistics = ({ statistics }: StatisticsProps) => {
  const { language } = useContext(LanguageContext);
  
  // Icons for each statistic item (you can customize these based on your data)
  const icons = [TrendingUp, Users, Award, Globe];

  return (
    <div className="py-20 px-5 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-300 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-300 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-purple-300 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4 leading-tight">
            {statistics.title[language]}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {statistics.items.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 text-center border border-white/20 hover:scale-105 hover:bg-white/90"
                style={{ 
                  animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both` 
                }}
              >
                {/* Icon background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {/* Counter */}
                <div className="relative z-10 mb-4">
                  <div className="flex items-center justify-center gap-1">
                    <CountUp
                      start={0}
                      end={item.total}
                      duration={2.5}
                      separator=","
                      className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-700 to-blue-600 bg-clip-text text-transparent"
                    />
                    <span className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                      +
                    </span>
                  </div>
                </div>
                
                {/* Title */}
                <h2 className="relative z-10 text-lg md:text-xl font-semibold text-slate-700 leading-tight group-hover:text-slate-800 transition-colors duration-300">
                  {item.title[language]}
                </h2>
                
                {/* Decorative bottom accent */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full group-hover:w-3/4 transition-all duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
