import React from "react";

function NotFound() {
  return (
    <div className="notFound">
      <h2>No images found</h2>
      <img
        alt="No images found"
        src="https://unsplash.com/a/img/empty-states/photos.png"
      />
    </div>
  );
}

export default NotFound;
