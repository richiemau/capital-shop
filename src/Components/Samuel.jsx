import React from "react";
import Anke from "./Anke";
import { samData } from "./sam";
export default function Samuel() {
  return (
    <div>
      <div className="petey-list">
        {samData.map((samuel, index) => (
          <Anke
            key={index}
            imageUrl={samuel.imageUrl}
            title={samuel.title}
            price={samuel.price}
            description={samuel.description}
            page={samuel.page}
          />
        ))}
      </div>
    </div>
  );
}
