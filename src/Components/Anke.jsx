import React from "react";

export default function Anke({ imageUrl, title, price, description, page }) {
  return (
    <div>
      <div className="mey">
        <img src={imageUrl} alt={title} />
      </div>
      <p style={{ color: "gray", fontSize: "16px" }}>{title}</p>
      <p>{description}</p>
      <p style={{ width: "50%", fontSize: "12px", color: "gray" }}>{price}</p>
      <ol start={{}}>
        <a href="">{page}</a>
      </ol>
    </div>
  );
}
