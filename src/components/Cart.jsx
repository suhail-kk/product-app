import React from "react";
import Header from "./Header";
import { useContext } from "react";
import ProductCard from "./ProductCard";
import CartContext from "../contexts/CartContext";

export default function Cart() {
  const { myCartList } = useContext(CartContext);
  return (
    <div className="w-full">
      <Header />
      <div className="main-container-parent ">
        <div className="mt-14 main-container-child gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {myCartList?.map((item) => (
            <ProductCard item={item} isHomepage={false} />
          ))}
        </div>
      </div>
    </div>
  );
}
