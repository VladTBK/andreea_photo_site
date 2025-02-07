import React from "react";
import { GalleryLayout, GalleryImage } from "../GalleryLayout";


const weddingImages = [
  {
    url: "src/assets/wedding/profile.avif",
  },
  {
    url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a",
  },
  {
    url: "https://images.unsplash.com/photo-1519741497674-611481863552",
  },
  {
    url: "src/assets/wedding/profile.avif",
  },
];

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
