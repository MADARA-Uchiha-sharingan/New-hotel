import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1538279288577-f2551fb138ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 animate-fade-in">
          Where Nature Embraces Comfort
        </h1>
        <p className="text-xl md:text-2xl text-center mb-12 animate-fade-in-delay">
          and Every Journey Begins
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
          <button className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-full font-semibold transition-all">
            Book Now
          </button>
          <button className="px-8 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full font-semibold transition-all">
            Explore Rooms
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
