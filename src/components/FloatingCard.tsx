import React from "react";

interface ImageCardProps {
  imageSrc: string;
  imageAlt: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageSrc, imageAlt }) => {
  return (
    <div className="relative transition-transform">
      <div className="w-80 h-96 md:w-[500px] md:h-[650px] rounded-3xl overflow-hidden animate-float-delayed transition-transform">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </div>
      <style>{`
                @keyframes floatFade {
                    0% { transform: translateY(0px) translateX(0px); opacity: 1; }
                    25% { transform: translateY(-8px) translateX(4px); opacity: 0.95; }
                    50% { transform: translateY(-15px) translateX(0px); opacity: 0.9; }
                    75% { transform: translateY(-8px) translateX(-4px); opacity: 0.95; }
                    100% { transform: translateY(0px) translateX(0px); opacity: 1; }
                }
                @keyframes floatDelayed {
                    0% { transform: translate(0px, 0px); }
                    25% { transform: translate(-4px, -4px); }
                    50% { transform: translate(-8px, -8px); }
                    75% { transform: translate(-4px, -4px); }
                    100% { transform: translate(0px, 0px); }
                }
                .animate-float-fade { animation: floatFade 10s ease-in-out infinite; }
                .animate-float-delayed { animation: floatDelayed 10s ease-in-out infinite; }
            `}</style>
    </div>
  );
};

export default ImageCard;
