import React from "react";
import Card from "./Card";
export default function ProductList() {
  return (
    <div>
      <div className="product-list">
        {Data.map((product, index) => (
          <Card
            key={index}
            imageUrl={product.imageUrl}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}
