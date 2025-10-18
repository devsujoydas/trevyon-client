import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Trash, ShoppingBag } from "lucide-react";

import { useState } from "react";
import img from "../../assets/products/product_1.png";
import { Link } from "react-router-dom";

// 🧩 Single Cart Product Card
const CartProductCard = ({ item, onIncrease, onDecrease, onRemove }) => {
    return (
        <div
            key={item.id}
            className="flex items-center justify-between border-b border-zinc-200 pb-3 "
        >
            {/* Left Section */}
            <div className="flex gap-3 items-center ">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md "
                />
                <div>
                    <div className="text-left">
                        <Link to={`/products/${item.id}`} className="font-medium text-gray-800 select-text">{item.name}</Link>
                        <p className="select-text text-zinc-600 ">Quantity: {item.qty}</p>
                    </div>

                    {/* Quantity Control */}
                    <div className="flex items-center gap-2 mt-2">
                        <button
                            className="border border-zinc-400 hover:border-transparent active:shadow-none hover:shadow-md w-8 h-8 rounded-sm flex justify-center items-center text-3xl cursor-pointer bg-transparent hover:bg-black text-black hover:text-white transition-all duration-300 active:scale-95"
                            onClick={() => onDecrease(item.id)}
                        >
                            <Minus />
                        </button>
                        <span className="border border-zinc-400  w-8 h-8 rounded-sm flex justify-center items-center text-xl  bg-transparent  text-black  transition-all">{item.qty}</span>
                        <button
                            className="border border-zinc-400 hover:border-transparent active:shadow-none hover:shadow-md w-8 h-8 rounded-sm flex justify-center items-center text-3xl cursor-pointer bg-transparent hover:bg-black text-black hover:text-white transition-all duration-300 active:scale-95"
                            onClick={() => onIncrease(item.id)}
                        >
                            <Plus />
                        </button>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col items-end justify-between h-20">
                <div className="">
                    <p className="text-lg font-semibold text-gray-800 select-text">
                        ${(item.price * item.qty).toFixed(2)}
                    </p>
                </div>
                <div>
                    <button
                        className="text-red-500 hover:text-red-600  cursor-pointer"
                        onClick={() => onRemove(item.id)}
                    >
                        <Trash size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

// 🧱 Sidebar Component
const CartSideBar = ({ showCartSide, setShowCartSide }) => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Hydrating Essence",
            price: 49,
            qty: 2,
            image: img,
        },
        {
            id: 2,
            name: "Cherry Lip Oil Gloss",
            price: 25,
            qty: 1,
            image: img,
        },
    ]);

    // 🪄 Handlers
    const handleIncrease = (id) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, qty: item.qty + 1 } : item
            )
        );
    };

    const handleDecrease = (id) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id && item.qty > 1
                    ? { ...item, qty: item.qty - 1 }
                    : item
            )
        );
    };

    const handleRemove = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    // 💰 Calculate total price
    const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

    return (
        <AnimatePresence>
            {showCartSide && (
                <div className="fixed inset-0 z-50">
                    {/* Overlay */}
                    <div
                        className="absolute inset-0 bg-black/40 z-40"
                        onClick={() => setShowCartSide(false)}
                    ></div>

                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 80, damping: 20 }}
                        className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl flex flex-col z-50"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-5 border-b border-zinc-200">
                            <h1 className="text-2xl font-semibold flex justify-center items-center gap-2 select-text">
                                Shopping Cart <ShoppingBag />
                            </h1>
                            <button
                                onClick={() => setShowCartSide(false)}
                                className="p-1 cursor-pointer rounded-full hover:bg-gray-100 transition"
                            >
                                <X size={22} />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-5 space-y-4">
                            {cartItems.length > 0 ? (
                                cartItems.map((item) => (
                                    <CartProductCard
                                        key={item.id}
                                        item={item}
                                        onIncrease={handleIncrease}
                                        onDecrease={handleDecrease}
                                        onRemove={handleRemove}
                                    />
                                ))
                            ) : (
                                <p className="text-center text-gray-500 mt-10">
                                    Your cart is empty 🛍️
                                </p>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="p-5 border-t border-zinc-200">
                            <div className="flex justify-between mb-3 text-lg font-semibold">
                                <span>Total:</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <Link to={`/checkout`} className="w-full inline-block py-3 bg-black text-white rounded-md font-semibold hover:bg-gray-800 transition cursor-pointer active:scale-95">
                                Checkout
                            </Link>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CartSideBar;
