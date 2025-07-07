import React from "react";

export default function Store({ imageUrl, title, price, description }) {
  return (
    <div className="got">
      <img src={imageUrl} alt={title} style={{ width: "80%" }} />
      <div className="div">
        <p
          className="pag"
          style={{
            padding: "10px",
          }}
        >
          {title}
        </p>
        <p>{description}</p>
        <p>{price}</p>
      </div>
    </div>
  );
}
