import React, { useState, useEffect } from "react";
import { Gift } from "lucide-react";

const BirthdayPresent = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  // EASILY CHANGE THESE IMAGES!
  const images = [
    "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop", // Cat
    "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&h=400&fit=crop", // Funny dog
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop", // Monkey
    "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=400&h=400&fit=crop", // Surprised cat
    "https://images.unsplash.com/photo-1615789591457-74a63395c990?w=400&h=400&fit=crop", // Funny dog with tongue
  ];

  const handleOpenPresent = () => {
    setIsOpened(true);
    setShowConfetti(true);
    setIsSpinning(true);

    // Rapidly cycle through images
    let imageCounter = 0;
    const spinInterval = setInterval(() => {
      setCurrentImageIndex(imageCounter % images.length);
      imageCounter++;
    }, 100); // Change image every 100ms

    // Stop spinning after 3 seconds
    setTimeout(() => {
      clearInterval(spinInterval);
      setIsSpinning(false);
      setCurrentImageIndex(Math.floor(Math.random() * images.length)); // Land on random image
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-700 via-slate-800 to-black flex items-center justify-center overflow-hidden relative">
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none z-50">
          {[...Array(80)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                top: "-20px",
                animationDelay: `${Math.random() * 0.5}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            >
              <div
                className="w-4 h-4"
                style={{
                  backgroundColor: [
                    "#00D9FF",
                    "#FF6B00",
                    "#FFD700",
                    "#00FF88",
                    "#FF00FF",
                    "#FFFFFF",
                  ][Math.floor(Math.random() * 6)],
                  transform: `rotate(${Math.random() * 360}deg)`,
                  borderRadius: Math.random() > 0.5 ? "50%" : "0",
                }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Birthday Message - Flies out when opened */}
      {isOpened && (
        <div className="absolute inset-0 flex items-center justify-center animate-zoom-in z-40">
          <div className="text-center px-8">
            <h1 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 mb-8 drop-shadow-2xl animate-bounce-slow">
              HAPPY BIRTHDAY DAD! 🎉
            </h1>

            {/* Birthday Image - Spins rapidly then stops */}
            <div
              className={`${
                isSpinning ? "animate-spin-fast" : "animate-float"
              } transition-all duration-500`}
            >
              <img
                src={images[currentImageIndex]}
                alt="Birthday Surprise"
                className="w-96 h-96 rounded-3xl shadow-2xl mx-auto object-cover border-8 border-orange-500 ring-8 ring-yellow-400"
              />
            </div>

            <p className="text-4xl font-bold text-white mt-8 drop-shadow-lg animate-fade-in">
              Placeholder Text;
            </p>
            <p className="text-2xl font-semibold text-orange-400 mt-4 drop-shadow-lg animate-fade-in-delay">
              Placeholder Text;
            </p>

            <button
              onClick={() => {
                setIsOpened(false);
                setShowConfetti(false);
                setIsSpinning(false);
              }}
              className="mt-8 px-10 py-5 bg-gradient-to-r from-orange-500 to-red-600 text-white font-black text-2xl rounded-xl shadow-2xl hover:scale-110 transition-transform duration-300 hover:rotate-3"
            >
              CLOSE IT UP 🎁
            </button>
          </div>
        </div>
      )}

      {/* Present Box - Only show when not opened */}
      {!isOpened && (
        <div className="text-center animate-bounce-gentle">
          <h2 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 mb-12 drop-shadow-2xl">
            Click to Open!
          </h2>

          <button
            onClick={handleOpenPresent}
            className="group relative transition-transform duration-300 hover:scale-110 active:scale-95"
          >
            {/* Present Box */}
            <div className="relative">
              {/* Box Body */}
              <div className="w-80 h-80 bg-gradient-to-br from-orange-600 via-red-600 to-orange-800 rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden border-8 border-yellow-500">
                {/* Ribbon Vertical */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-full bg-gradient-to-b from-yellow-400 to-yellow-600 shadow-lg"></div>
                {/* Ribbon Horizontal */}
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-20 bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-lg"></div>

                {/* Gift Icon */}
                <Gift
                  className="w-32 h-32 text-white z-10 group-hover:animate-wiggle drop-shadow-2xl"
                  strokeWidth={3}
                />
              </div>

              {/* Bow on top */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-9xl filter drop-shadow-2xl">
                🎀
              </div>
            </div>

            {/* Sparkles around the box */}
            <div className="absolute -top-8 -left-8 text-6xl animate-pulse"></div>
            <div className="absolute -top-8 -right-8 text-6xl animate-pulse animation-delay-300"></div>
            <div className="absolute -bottom-8 -left-8 text-6xl animate-pulse animation-delay-600"></div>
            <div className="absolute -bottom-8 -right-8 text-6xl animate-pulse animation-delay-900"></div>
          </button>

          <p className="text-3xl font-black text-orange-400 mt-12 drop-shadow-lg animate-pulse">
            who eez eet?
          </p>
        </div>
      )}

      <style>{`
        @keyframes fall {
          to {
            transform: translateY(120vh) rotate(720deg);
            opacity: 0;
          }
        }
        
        @keyframes zoom-in {
          from {
            opacity: 0;
            transform: scale(0.1) rotate(-180deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes bounce-gentle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-30px);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-40px) scale(1.05);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(-3deg);
          }
          50% {
            transform: translateY(-25px) rotate(3deg);
          }
        }

        @keyframes spin-fast {
          from {
            transform: rotate(0deg) scale(0.8);
          }
          to {
            transform: rotate(1440deg) scale(1);
          }
        }

        @keyframes wiggle {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-15deg) scale(1.1);
          }
          75% {
            transform: rotate(15deg) scale(1.1);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-delay {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fall {
          animation: fall linear forwards;
        }

        .animate-zoom-in {
          animation: zoom-in 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-spin-fast {
          animation: spin-fast 3s ease-out;
        }

        .animate-wiggle {
          animation: wiggle 0.5s ease-in-out;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-in 0.8s both;
        }

        .animate-fade-in-delay {
          animation: fade-in-delay 1s ease-in 1.3s both;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-900 {
          animation-delay: 0.9s;
        }
      `}</style>
    </div>
  );
};

export default BirthdayPresent;
