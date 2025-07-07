import React from "react";
import File from "./File";
import { Ser } from ".Ser";
export default function Service() {
  return (
    <div>
      <div className="sev">
        {Ser.map((Service, index) => (
          <File
            key={index}
            imageUrl={Service.imageUrl}
            title={Service.title}
            description={Service.description}
          />
        ))}
      </div>
    </div>
  );
}
