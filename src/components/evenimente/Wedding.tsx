import React from "react";
import { GalleryLayout, GalleryImage } from "../GalleryLayout";

// This will get all jpg images from the wedding directory
const imageModules = import.meta.glob(
  "/src/assets/wedding/nunta_galerie/*.jpg",
  {
    eager: true,
    import: "default",
  },
);

// Convert the modules object into an array of image URLs
const weddingImages = Object.values(imageModules).map((url) => ({
  url: url as string,
}));

const Wedding: React.FC = () => {
  return (
    <GalleryLayout title="Nuntă">
      {weddingImages.map((image, index) => (
        <GalleryImage key={index} src={image.url} index={index} />
      ))}
    </GalleryLayout>
  );
};

export default Wedding;
