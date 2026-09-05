import { useState } from "react";
import type { ProductType } from "../../../types";
import "./product.css";

export interface ProductProps {
  product: ProductType;
}

export default function Product({ product }: ProductProps) {
  const [addToCart, setAddToCart] = useState(false);

  const handleAddToCart = (): void => {
    setAddToCart(!addToCart);
  };

  return (
    <>
      <div className="product-card">
        {/* image & category tag */}
        <div className="product-image-container">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
          <span className="product-category">{product.category}</span>
        </div>
        {/* product info */}
        <div className="product-details">
          <h2 className="product-title">{product.title}</h2>
          <p className="product-description">{product.description}</p>
          {/* price & rating footer */}
          <div className="product-footer">
            <span className="product-price">${product.price.toFixed(2)}</span>
            <button onClick={handleAddToCart} >
              {addToCart ? "Added" : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
