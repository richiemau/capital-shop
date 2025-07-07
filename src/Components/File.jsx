import React from "react";

export default function File({ imageUrl, title, description }) {
  return (
    <div>
      <img src={imageUrl} alt={title} />
      <p style={{ textAlign: "center", fontSize: "10px", fontWeight: "bold" }}>
        {title}
      </p>
      <p
        style={{
          textAlign: "center",
          fontSize: "10px",
          padding: "10px",
          fontWeight: "bold",
        }}
      >
        {description}
      </p>
    </div>
  );
}
