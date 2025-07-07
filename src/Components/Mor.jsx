import React from "react";
import Anke from "./Anke";
import { samData } from "../Components/sam";
export default function Mor() {
  return (
    <div>
      <div className="petey-list">
        {samData.map((mor, index) => (
          <Anke
            key={index}
            imageUrl={mor.imageUrl}
            title={mor.title}
            price={mor.price}
            description={mor.description}
            page={mor.page}
          />
        ))}
      </div>
    </div>
  );
}
