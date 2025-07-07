import React from "react";
import { Bash } from "./Bash";
import Test from "./Test";

export default function Petey() {
  return (
    <div>
      <div className="petey-list">
        {Bash.map((Petey, index) => (
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
