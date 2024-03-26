import React from "react";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import CartContext from "../contexts/CartContext";

export default function ProductCard({ item, isHomepage = true }) {
  const [cartAdded, setCartAdded] = useState(false);

  const { myCartList, setMyCartList } = useContext(CartContext);

  const addToCart = (item) => {
    if (cartAdded) {
      toast.error(item?.title + "Already exist in cart");
    } else {
      setCartAdded(true);
      toast.success(item?.title + "Added to card successfully");
      setMyCartList([...myCartList, item]);
    }
  };

  const removeFromCart = (itemToRemove) => {
    toast.success(item?.title + "Removed from the cart successfully");
    setMyCartList(myCartList.filter((item) => item !== itemToRemove));
  };

  return (
    <div
      key={item?.id}
      className="w-full h-full relative antialiased text-gray-900 card-hover-zoom"
    >
      <div className="bg-white w-full rounded-lg overflow-hidden h-full shadow-2xl">
        <img
          className="h-44 w-full object-cover img-hover-zoom"
          src={
            item?.image ||
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9bf9e69460684667b975aefb00d7e97b_9366/AXELATE_SHOES_Grey_GB2480_01_standard.jpg"
          }
          alt="Home in Countryside"
        />
        <div className="p-6 w-full">
          <h4 className="mt-2 font-semibold text-lg leading-tight truncate">
            {item?.title}
          </h4>
          <div className="flex justify-between">
            <h4 className="mt-2 font-semibold text-lg leading-tight truncate">
              {item?.price}
            </h4>
            {isHomepage ? (
              <button
                onClick={() => addToCart(item)}
                className={`py-3 px-6 focus:outline-none border-none rounded-md bg-[#FF9800] flex justify-center items-center ${
                  cartAdded && "opacity-50"
                }`}
              >
                Add to cart
              </button>
            ) : (
              <button
                onClick={() => removeFromCart(item)}
                className={`py-3 px-6 focus:outline-none text-white border-none rounded-md bg-[#E72929] flex justify-center items-center `}
              >
                Remove
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
