import { Frown, Home } from "lucide-react";
import { useState } from "react";
import { Navigate } from "react-router";


const ErrorPage = () => {
  const [isHome, setIsHome] = useState(false);

  if (isHome) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-6">
      <div className="max-w-lg w-full text-center">
    
        <div className="text-primary text-9xl font-extrabold mb-6">404</div>

        
        <div className="card bg-base-100 shadow-xl p-8 mb-6">
          <div className="flex flex-col items-center">
          
            <Frown className="text-6xl text-warning mb-4" />

        
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Oops! Page Not Found
            </h1>
            <p className="text-md md:text-lg text-gray-500 mb-6">
              The page you're looking for doesn't exist or has been moved.
            </p>

            <button
              onClick={() => setIsHome(true)}
              className="btn btn-primary btn-wide gap-2"
            >
              <Home size={20} />
              Go to Home Page
            </button>
          </div>
        </div>

        
        <div className="chat chat-start mt-6">
          <div className="chat-bubble bg-error text-white">
            404 - Page Not Found
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble bg-info text-white">
            Let me help you go back home.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
