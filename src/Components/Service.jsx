import React from "react";
import File from "./File";
import { serData } from "./ser";
export default function Service() {
  return (
    <div>
      <div className="sev">
        {serData.map((Service, index) => (
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
