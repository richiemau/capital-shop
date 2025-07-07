import React from "react";
import Anke from "./Anke";
import { Sam } from "./sam";
export default function Mor() {
  return (
    <div>
      <div className="petey-list">
        {Sam.map((mor, index) => (
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
