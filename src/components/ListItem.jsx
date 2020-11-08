import React from "react";

function ListItem({ image }) {
  console.log(image);
  return (
    <div key={image.id} className="grid__item card">
      <div className="card__body">
        <img src={image.urls.small} alt="" />
      </div>
      <div className="card__footer media">
        <img
          src={image.user.profile_image.small}
          alt=""
          className="media__obj"
        />
        <div className="media__body">
          <a href={image.user.portfolio_url} target="_blank" rel="noreferrer">
            {image.user.name}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
