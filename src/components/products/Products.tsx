import { use } from "react";
import type { ProductType } from "../../types";
import Product from "./product/Product";
import './Products.css'

export interface ProductsProps {
  productsPromise: Promise<ProductType[]>;
}


export default function Products({ productsPromise }: ProductsProps) {
  const products = use(productsPromise);

  return (
    <>
      <div className="products-parent">
        {products.map((product) => (
          <Product product={product}></Product>
        ))}
      </div>
    </>
  );
}
