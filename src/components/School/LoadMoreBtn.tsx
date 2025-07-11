import { LockKeyhole } from 'lucide-react';

const LoadMoreBtn = () => {
    return (
      <div className="absolute inset-0 flex items-start justify-center pt-8">
        <div className="text-center p-8 bg-white/95 rounded-2xl shadow-lg border border-gray-200 max-w-md mx-4 z-20">
          <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-2">
            <LockKeyhole className="w-5 h-5" />
            <span>Load More Universities</span>
          </button>
        </div>
      </div>
    );
};

export default LoadMoreBtn;