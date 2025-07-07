import React from "react";
import Test from "./Test";
import { BashData } from "./bash";

export default function Petey() {
  return (
    <div>
      <div className="petey-list">
        {BashData.map((Petey, index) => (
          <Test
            key={index}
            imageUrl={Petey.imageUrl}
            title={Petey.title}
            price={Petey.price}
            description={Petey.description}
          />
        ))}
      </div>
    </div>
  );
}
