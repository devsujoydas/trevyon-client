import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { IoStar } from "react-icons/io5";
import productImg from "../../assets/products/product_1.png";
import { Link } from "react-router-dom";

const Product = ({ product }) => {

  console.log(product)
  
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="border border-transparent group hover:border-zinc-200 p-1 md:p-3 rounded-xl cursor-pointer bg-white transition-all duration-300 hover:shadow-md"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.01 }}

    >
      {/* Image Wrapper */}
      <div className="relative w-full  rounded-lg overflow-hidden">
        {/* Product Image */}
        <motion.img
          src={productImg}
          alt="Product"
          className="w-full h-full object-cover rounded-md"
          initial={{ scale: 1 }}
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />

        {/* Overlay with button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/30 flex justify-center items-center z-10"
        >
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-sm md:rounded-md flex justify-center items-center md:gap-2 gap-1 md:px-5 px-2 py-0.5 md:py-2 font-semibold shadow-sm hover:shadow-md active:scale-95 cursor-pointer md:text-[16px] text-xs"
          >
            <ShoppingBag className="md:w-5 w-3" /> Add to Cart
          </motion.button>
        </motion.div>
      </div>

      {/* Product Info */}
      <div className="mt-4 space-y-0.5 md:space-y-1.5">
        <p className="text-gray-600 md:text-[16px] text-sm c">Serums</p>
        <Link to={"/products/productDetails"} className=" font-semibold text-gray-900 md:text-xl text-[18px] c group-hover:text-[#F092B0] transition-all">Body Lotion Serum</Link>
        <p className="md:text-3xl text-lg font-bold text-gray-900 ">$65</p>

        <div className="flex items-center gap-2  text-sm md:text-lg">
          4.5 <IoStar className="inline-block" />{" "}
          <span className="text-gray-500 text-sm">(86)</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Product;
