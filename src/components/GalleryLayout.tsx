import React, { useState, useEffect, useCallback } from "react";
import "../index.css";

interface GalleryProps {
  title: string;
  children: React.ReactNode;
}

interface GalleryImageProps {
  src: string;
  index: number;
  onImageClick: (imageUrl: string, index: number, alt?: string) => void;
}

export const GalleryImage: React.FC<GalleryImageProps> = ({
  src,
  index,
  onImageClick,
}) => {
  return (
    <div
      className="gallery-card relative cursor-pointer hover:opacity-80 transition-opacity duration-300"
      onClick={() => onImageClick(src, index)}
    >
      <img src={src} className="w-full h-full object-cover rounded-lg" />
    </div>
  );
};

export const GalleryLayout: React.FC<GalleryProps> = ({ title, children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [currentAlt, setCurrentAlt] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [galleryImages, setGalleryImages] = useState<
    Array<{ src: string; alt?: string }>
  >([]);

  useEffect(() => {
    const images = React.Children.toArray(children)
      .map((child) => {
        if (React.isValidElement(child)) {
          return {
            src: child.props.src,
            alt: child.props.alt,
          };
        }
        return null;
      })
      .filter((img): img is { src: string; alt?: string } => img !== null);
    setGalleryImages(images);
  }, [children]);

  const showImage = useCallback(
    (index: number) => {
      const normalizedIndex =
        (index + galleryImages.length) % galleryImages.length;
      setCurrentIndex(normalizedIndex);
      setCurrentImage(galleryImages[normalizedIndex].src);
      setCurrentAlt(galleryImages[normalizedIndex].alt || "");
    },
    [galleryImages],
  );

  const handleImageClick = (imageUrl: string, index: number, alt?: string) => {
    setCurrentImage(imageUrl);
    setCurrentAlt(alt || "");
    setCurrentIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;

      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowLeft") {
        showImage(currentIndex - 1);
      } else if (e.key === "ArrowRight") {
        showImage(currentIndex + 1);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, currentIndex, showImage]);

  const childrenWithProps = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        onImageClick: handleImageClick,
        index,
      });
    }
    return child;
  });

  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            {title}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {childrenWithProps}
        </div>

        <div className="text-center mt-12">
          <a
            href="/"
            className="inline-block px-6 py-3 bg-pink-200 hover:bg-pink-300 text-gray-800 rounded-full transition-colors duration-300"
          >
            Back to Portfolio
          </a>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-white/70 backdrop-blur-sm z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 flex items-center justify-center"
            onClick={(e) => e.target === e.currentTarget && closeModal()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-800 text-4xl hover:text-pink-500 z-50 transition-colors duration-300 w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-100"
            >
              ×
            </button>

            <div className="flex items-center justify-between w-full px-4 md:px-8">
              <button
                onClick={() => showImage(currentIndex - 1)}
                className="transform -translate-y-1/2 text-gray-800 hover:text-pink-500 transition-colors duration-300 w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-100 text-5xl"
              >
                ‹
              </button>

              <div className="relative max-w-[80vw] max-h-[80vh]">
                <img
                  src={currentImage}
                  alt={currentAlt}
                  className="max-h-[80vh] max-w-[80vw] object-contain"
                />
              </div>

              <button
                onClick={() => showImage(currentIndex + 1)}
                className="transform -translate-y-1/2 text-gray-800 hover:text-pink-500 transition-colors duration-300 w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-100 text-5xl"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default GalleryLayout;
