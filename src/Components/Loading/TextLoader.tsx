import React from 'react';

const TextLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] w-full gap-4">
      {/* Animated Text */}
      <div className="flex items-center gap-1">
        <span className="text-2xl md:text-4xl font-black text-primary animate-bounce [animation-delay:-0.3s]">
          L
        </span>
        <span className="text-2xl md:text-4xl font-black text-primary animate-bounce [animation-delay:-0.2s]">
          o
        </span>
        <span className="text-2xl md:text-4xl font-black text-primary animate-bounce [animation-delay:-0.1s]">
          a
        </span>
        <span className="text-2xl md:text-4xl font-black text-primary animate-bounce">
          d
        </span>
        <span className="text-2xl md:text-4xl font-black text-primary animate-pulse">
          i
        </span>
        <span className="text-2xl md:text-4xl font-black text-primary animate-pulse">
          n
        </span>
        <span className="text-2xl md:text-4xl font-black text-primary animate-pulse">
          g
        </span>
        
        {/* Animated Dots */}
        <div className="flex gap-1 ml-1">
          <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]"></span>
          <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.2s]"></span>
          <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.1s]"></span>
        </div>
      </div>

      {/* Optional: Subtle Progress Line */}
      <div className="w-32 md:w-48 h-1 bg-primary/20 rounded-full overflow-hidden">
        <div className="w-full h-full bg-primary origin-left animate-[loading_1.5s_ease-in-out_infinite]"></div>
      </div>

      <style jsx>{`
        @keyframes loading {
          0% { transform: scaleX(0); }
          50% { transform: scaleX(1); }
          100% { transform: scaleX(0); transform-origin: right; }
        }
      `}</style>
    </div>
  );
};

export default TextLoader;