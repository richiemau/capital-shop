import React from "react";
import Store from "./Store";
import { User } from "../Components/User";

export default function Items() {
  return (
    <div>
      <div className="item-list">
        {User.map((Items, index) => (
          <Store
            key={index}
            imageUrl={Items.imageUrl}
            title={Items.title}
            price={Items.price}
            description={Items.description}
          />
        ))}
      </div>
    </div>
  );
}
