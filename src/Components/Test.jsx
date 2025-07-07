import React from "react";

export default function Test({ imageUrl, title, price, description }) {
  return (
    <div className="got">
      <img src={imageUrl} alt={title} style={{ width: "80%" }} />

      <div className="div">
        <p
          className="pag"
          style={{
            fontSize: "1rem",
            color: "#333",
            textAlign: "center",
            margin: "10px 0",
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
