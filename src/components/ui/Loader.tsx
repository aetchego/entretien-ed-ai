import React from "react";

const CircularProgress: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      {/* Container for Circular Progress */}
      <div className="relative w-20 h-20">
        {/* Background Circle */}
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 36 36"
        >
          <circle
            cx="18"
            cy="18"
            r="15"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="3"
          />
        </svg>

        {/* Animated Progress Circle */}
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 36 36"
        >
          <circle
            className="progress-circle"
            cx="18"
            cy="18"
            r="15"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="3"
            strokeDasharray="94.2" // Circumference of the circle
            strokeDashoffset="0"
            strokeLinecap="round"
            transform="rotate(-90 18 18)"
          />
        </svg>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes spin {
          0% {
            stroke-dashoffset: 94.2;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        .progress-circle {
          animation: spin 1.5s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default CircularProgress;
