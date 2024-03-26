import React from "react";
import Header from "./Header";
import axios from "axios";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

function Home() {
  const [products, setPorducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://159.65.146.66/agencies/products.php"
      );
      if (response.status === 200) {
        return setPorducts(response.data);
      } else {
        throw new Error("Failed to fetch products");
      }
    } catch (error) {
      console.error("Error fetching products:", error.message);
      return null;
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="w-full">
      <Header />
      <div className="main-container-parent ">
        <div className="mt-14 main-container-child gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products?.slice(0, 4).map((item) => (
            <ProductCard item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
