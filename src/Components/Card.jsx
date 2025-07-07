import React from "react";
import { Data } from "../Components/Data";
export default function Card({ imageUrl, title, price, amount, description }) {
  return (
    <div
      className="go"
      style={{
        width: "100%",
        overflow: "hidden",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "10px",
        alignItems: "center",
      }}
    >
      <img src={imageUrl} alt={title} />
      <div className="div">
        <p
          className="pag"
          style={{
            fontWeight: "bold",
            background: "#0404042b",
            position: "relative",
            textAlign: "center",
            bottom: "58px",
            color: "#bfaeae",
            padding: "11px",
            fontSize: "1.5rem",
            borderInline: "none",
            width: "21.5rem",
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
