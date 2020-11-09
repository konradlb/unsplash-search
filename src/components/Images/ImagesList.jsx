import React from "react";
import ImageItem from "./ImageItem";

function ImagesList({ images, notFound }) {
  return (
    <>
      {notFound && (
        <div>
          <h3>No images found</h3>
          <img
            alt="No images found"
            src="https://unsplash.com/a/img/empty-states/photos.png"
          />
        </div>
      )}
      <div className="grid">
        {images.map((image) => (
          <ImageItem key={image.id} image={image} />
        ))}
      </div>
    </>
  );
}

export default ImagesList;
