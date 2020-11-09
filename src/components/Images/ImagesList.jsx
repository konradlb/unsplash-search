import React from "react";
import ImageItem from "./ImageItem";

function ImagesList({ images }) {
  return (
    <div className="grid">
      {images.map((image) => (
        <ImageItem key={image.id} image={image} />
      ))}
    </div>
  );
}

export default ImagesList;
