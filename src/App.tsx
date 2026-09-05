import { Suspense, useState } from "react";
import "./App.css";
import type { ProductType } from "./types";
import Products from "./components/products/Products";

// promise
const productsPromise = async (): Promise<ProductType[]> => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
};

function App() {


  return (
    <>

      <Suspense fallback={<h2>Loading...</h2>}>
        <Products productsPromise={productsPromise()}></Products>
      </Suspense>
    </>
  );
}

export default App;
