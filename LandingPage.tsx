import React, { useState, useEffect } from 'react';
import { NAVY_MOTTO, LIBRARY_INTRO } from '../constants';
import { ChevronRight } from 'lucide-react';

interface LandingPageProps {
  onEnter: () => void;
}

const IMAGES = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTxHxpR2BT_Wmms0-GuC09zXTqxcFGlW-Dqw&s", // Dogs/Animals (Placeholder) -> changed to general
  "https://i.pinimg.com/736x/2d/1e/71/2d1e71e28ee7cf159f66f786bf28b8de.jpg", // Nature/Waves
  "https://i.pinimg.com/736x/2c/bd/8d/2cbd8d253e409d97d3fa8e98ad972482.jpg", // Mountains
  "https://w0.peakpx.com/wallpaper/702/823/HD-wallpaper-ins-trikand-f51-ins-talwar-f40-ins-f40-tabar-talwar-class-frigate-military-ships-indian-frigates-indian-navy.jpg",
  "https://p4.wallpaperbetter.com/wallpaper/423/680/23/ship-ins-viraat-r22-ins-jalashwa-l41-indian-navy-wallpaper-preview.jpg",
  "https://w0.peakpx.com/wallpaper/119/810/HD-wallpaper-ins-vikramaditya-vikramaditya-ins-ship-indian.jpg",
  "https://w0.peakpx.com/wallpaper/1001/651/HD-wallpaper-ships-sarich-cruiser-project-956-destroyer-navy.jpg",
  "https://e1.pxfuel.com/desktop-wallpaper/882/71/desktop-wallpaper-navy-ship-group-indian-ship.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2d/INS_Viraat_front_view.jpg",
  "https://c4.wallpaperflare.com/wallpaper/909/237/146/mig-29-k-indian-navy-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/763/63/771/warship-indian-navy-wallpaper-preview.jpg",
  "https://static.vecteezy.com/system/resources/thumbnails/053/871/824/small/naval-ships-navigating-through-misty-waters-at-sunset-photo.jpeg",
  "https://img1.wallspic.com/previews/0/3/0/1/3/131030/131030-warship-destroyer-battleship-navy-heavy_cruiser-550x310.jpg",
];

const LandingPage: React.FC<LandingPageProps> = ({ onEnter }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
        onClick={onEnter}
        className="relative w-full h-screen overflow-hidden bg-black cursor-pointer group"
    >
      {/* Background Slideshow */}
      {IMAGES.map((img, index) => (
        <div 
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-60' : 'opacity-0'}`}
        >
            <img 
                src={img} 
                alt="Slide" 
                className={`w-full h-full object-cover ${index === currentImageIndex ? 'slide-enter' : ''}`}
            />
        </div>
      ))}

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10 bg-gradient-to-t from-blue-950/90 via-transparent to-blue-950/60">
        
        {/* Logos Area */}
        <div className="flex items-center justify-center gap-4 md:gap-12 mb-8 animate-in fade-in zoom-in duration-1000">
            {/* Indian Navy Logo Placeholder */}
            <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full p-2 shadow-[0_0_20px_rgba(255,215,0,0.6)] border-4 border-yellow-500 flex items-center justify-center">
                <span className="text-4xl">⚓</span>
            </div>
            
            {/* INS Shivaji Logo Placeholder */}
            <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full p-2 shadow-[0_0_20px_rgba(255,215,0,0.6)] border-4 border-yellow-500 flex items-center justify-center">
                 <span className="text-4xl">🛡️</span>
            </div>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-2 tracking-widest drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
            INDIAN NAVY
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-display text-yellow-400 mb-6 font-bold tracking-wide">
            INS SHIVAJI
        </h2>

        {/* Motto */}
        <div className="mb-12">
            <p className="text-xl md:text-2xl text-white font-serif italic tracking-widest border-b border-yellow-500 inline-block pb-1">
                {NAVY_MOTTO}
            </p>
        </div>

        {/* Intro Paragraph */}
        <div className="max-w-2xl bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-white/20 shadow-2xl">
            <p className="text-slate-100 text-lg leading-relaxed font-light">
                {LIBRARY_INTRO}
            </p>
        </div>

        {/* Tap to Enter Prompt */}
        <div className="absolute bottom-12 animate-bounce flex flex-col items-center text-yellow-400">
            <span className="text-sm uppercase tracking-[0.3em] font-bold mb-2">Tap Anywhere to Enter</span>
            <ChevronRight size={32} className="rotate-90" />
        </div>

      </div>
    </div>
  );
};

export default LandingPage;