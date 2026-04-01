import React from 'react';

const TextLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-50 w-full gap-4">
      {/* Animated Text */}
      <div className="flex items-center gap-1">
        {["L", "o", "a", "d"].map((char, index) => (
          <span 
            key={index} 
            className="text-2xl md:text-4xl font-black text-primary animate-bounce"
            style={{ animationDelay: `${-0.3 + index * 0.1}s` }}
          >
            {char}
          </span>
        ))}
        {["i", "n", "g"].map((char, index) => (
          <span key={index} className="text-2xl md:text-4xl font-black text-primary animate-pulse">
            {char}
          </span>
        ))}
        
        {/* Animated Dots */}
        <div className="flex gap-1 ml-1">
          <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]"></span>
          <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.2s]"></span>
          <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.1s]"></span>
        </div>
      </div>

      {/* Progress Line using Tailwind pulse/ping instead of custom @keyframes */}
      <div className="w-32 md:w-48 h-1 bg-primary/20 rounded-full overflow-hidden">
        <div className="h-full bg-primary animate-[pulse_1.5s_ease-in-out_infinite]"></div>
      </div>
    </div>
  );
};

export default TextLoader;