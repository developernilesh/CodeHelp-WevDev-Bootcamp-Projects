import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";
import { MdDeleteSweep } from "react-icons/md";

const CartItem = ({item}) => {

  const dispatch = useDispatch();

  function removeFromCart(){
    dispatch(remove(item.id))
    toast.error("Item removed from Cart");
  }

  return (
    <div className="h-full sm:h-[220px] flex flex-col sm:flex-row justify-between gap-1 mb-6 rounded-xl p-6 shadow-[0_0_10px_rgba(0,0,0,0.4)]">

      <div className="w-[270px] h-[180px] sm:h-full flex justify-center">
        <img src={item.image} className="w-fit h-full "/>
      </div>

      <div className="sm:w-[320px] w-full flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
        <h3 className="text-sm">{item.description.split(" ").slice(0,10).join(" ")+"..."}</h3>
        <div className="flex items-center justify-between mt-2">
          <p className="text-lg font-bold text-green-600">${item.price}</p>
          <div onClick={removeFromCart} className="cursor-pointer w-[40px] h-[40px] rounded-full bg-red-300 flex items-center justify-center">
            <MdDeleteSweep className="text-2xl text-red-700"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
