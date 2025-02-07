import React, { useState, useEffect, useRef } from "react";
import hero_1 from "/src/assets/hero/1.jpg";
import hero_2 from "/src/assets/hero/2.jpg";
import hero_3 from "/src/assets/hero/3.jpg";
import hero_4 from "/src/assets/hero/4.jpg";
import hero_5 from "/src/assets/hero/5.jpg";

const images = [
  { src: hero_1 },
  { src: hero_2 },
  { src: hero_3 },
  { src: hero_4 },
  { src: hero_5 },
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [firstImageLoaded, setFirstImageLoaded] = useState(false);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  const carouselRef = useRef<NodeJS.Timeout | null>(null);
  const loadedImagesCount = useRef(0);

  useEffect(() => {
    // Load first image immediately
    const firstImg = new Image();
    firstImg.src = images[0].src;
    firstImg.onload = () => {
      setFirstImageLoaded(true);
      loadedImagesCount.current++;

      // Start loading remaining images after first one is shown
      images.slice(1).forEach((image) => {
        const img = new Image();
        img.src = image.src;
        img.onload = () => {
          loadedImagesCount.current++;
          if (loadedImagesCount.current === images.length) {
            setAllImagesLoaded(true);
          }
        };
      });
    };
  }, []);

  useEffect(() => {
    if (!allImagesLoaded) return;

    carouselRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => {
      if (carouselRef.current) {
        clearInterval(carouselRef.current);
      }
    };
  }, [allImagesLoaded]);

  if (!firstImageLoaded) {
    return (
      <section className="relative h-screen w-full flex items-center justify-center bg-gray-200">
        <div className="animate-pulse text-gray-500">Loading...</div>
      </section>
    );
  }

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute z-30 left-20 -top-12 w-64">
        <img src="/src/assets/logo.png" alt="Logo" className="w-full h-auto" />
      </div>
      <div className="carousel-container h-full w-full relative">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 
              ${
                index === currentSlide && (index === 0 || allImagesLoaded)
                  ? "opacity-100 z-10"
                  : "opacity-0 z-0"
              }`}
          >
            <img
              src={image.src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}
      </div>
      <div className="absolute bottom-30 left-6 z-20">
        <div className="text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-2 tracking-wider [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)]">
            Andreea Nistor
          </h1>
          <h2 className="text-3xl md:text-4xl font-light [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)]">
            Photographer
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
