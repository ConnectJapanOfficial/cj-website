import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";

const ComingSoon = () => {
  const [mounted, setMounted] = useState(false);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Simple translation object
  const translations = {
    en: "Coming Soon",
    ja: "近日公開",
    bn: "শীঘ্রই আসছে",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-48 h-48 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-32 w-40 h-40 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div
          className={`text-center transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-loose">
            {translations[language as keyof typeof translations]}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
