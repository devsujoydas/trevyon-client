import React, { useState } from "react";
import Product from "./Product";
import JoinOurCommunity from "../../components/JoinOurCommunity/JoinOurCommunity";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All Products");

  const categories = ["Face", "Brow", "Eye", "Lip", "Sets"];

  return (
    <div>
      {/* Top Filter Bar */}
      <div className="bg-main py-5 sticky top-0 z-30 border-b border-zinc-200">
        <div className="w-main mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-lg">
          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-10">
            {/* All Products */}
            <button
              onClick={() => setActiveCategory("All Products")}
              className={`font-semibold transition-all cursor-pointer  pb-0.5 ${
                activeCategory === "All Products"
                  ? "text-black border-b-2 border-black "
                  : "text-zinc-700 hover:text-black border-b-2 border-transparent"
              }`}
            >
              All Products
            </button>

            {/* Other Categories */}
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`cursor-pointer font-medium transition-all pb-0.5 ${
                  activeCategory === cat
                    ? "text-black border-b-2 border-black "
                    : "text-zinc-700 hover:text-black border-b-2 border-transparent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <p className="text-zinc-700 font-medium">Sort:</p>
            <select
              className="bg-transparent border border-zinc-400 rounded-md px-2 py-1 text-sm cursor-pointer outline-none hover:border-black transition-colors"
            >
              <option value="featured">Featured</option>
              <option value="max">Max</option>
              <option value="min">Min</option>
              <option value="date">Date</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="py-10 w-main mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-10">
        {/* You can later filter based on activeCategory */}
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>

      {/* Join Section */}
      <JoinOurCommunity />
    </div>
  );
};

export default Products;
