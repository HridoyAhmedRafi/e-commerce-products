import { use, useState } from "react";
import type { ProductType } from "../../types";
import Product from "./product/Product";
import "./Products.css";

export interface ProductsProps {
  productsPromise: Promise<ProductType[]>;
}

export default function Products({ productsPromise }: ProductsProps) {
  const products = use(productsPromise);

  const [cartProduct, setCartProduct] = useState<ProductType[]>([]);

  const handleCartCount = (product: ProductType): void => {
    let newCart = [...cartProduct, product];
    if (cartProduct.includes(product)) {
      return;
    }
    setCartProduct(newCart);
  };

  return (
    <>
      <h2 className="border-2 border-[#9ca3af] rounded w-40 px-6 py-2 my-2 mx-4 font-bold text-[#31353a]">
        Cart item : {cartProduct.length}
      </h2>
      <div className="products-parent">
        {products.map((product) => (
          <Product
            handleCartCount={handleCartCount}
            product={product}
          ></Product>
        ))}
      </div>
    </>
  );
}
