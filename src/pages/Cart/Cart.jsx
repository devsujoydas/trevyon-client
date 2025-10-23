import React, { useState } from 'react'
import img from "../../assets/products/product_1.png";
import { Link, useNavigate } from "react-router-dom";
import { Plus, Minus, Trash } from "lucide-react";



const CartProductCard = ({ item, onIncrease, onDecrease, onRemove }) => {
    return (
        <div>
            <div
                key={item.id}
                className="flex items-center justify-between "
            >
                {/* Left Section */}
                <div className="flex gap-5 items-center ">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="md:w-30 w-20 md:h-30 h-20 object-cover rounded-md "
                    />
                    <div>
                        <div className="text-left">
                            <Link to={`/products/${item.id}`} className=" text-xl font-semibold">{item.name}</Link>
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
                        <p className="text-xl font-semibold text-gray-800 select-text">
                            ${(item.price * item.qty).toFixed(2)}
                        </p>
                    </div>
                    <div>
                        <button
                            className="text-red-500 hover:text-red-600  cursor-pointer"
                            onClick={() => onRemove(item.id)}
                        >
                            <Trash size={26} />
                        </button>
                    </div>
                </div>
            </div>

            <hr className='my-8 text-zinc-400' />
        </div>
    );
};

const Cart = () => {
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

    const navigate = useNavigate()

    return (
        <div className='w-main py-10 md:py-20'>

            <h1 className='text-3xl md:text-6xl pb-10 md:pb-20'>Shopping Cart</h1>

            <div className='flex gap-6 md:gap-16 md:flex-row flex-col'>
                <div className='bg-white  md:w-10/16 rounded-md '>
                    <div className="flex-1 overflow-y-auto space-y-4">
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
                </div>



                <div className='bg-[#F5D2A866] md:w-6/16 p-5 md:p-8 rounded-md '>
                    <h1 className='font-semibold text-xl md:text-2xl pb-5'>Order Summary</h1>

                    <div>
                        <div className='space-y-1.5 md:space-y-3'>
                            <div className='font-medium text-sm md:text-xl flex justify-between items-center'>
                                <h1>Subtotal</h1>
                                <h1>$152.00</h1>
                            </div>
                            <div className='font-medium text-sm md:text-xl flex justify-between items-center'>
                                <h1>Shipping</h1>
                                <h1>$5.99</h1>
                            </div>
                        </div>

                        <hr className='text-zinc-300 my-3 md:my-5' />

                        <div className='text-lg md:text-2xl font-bold flex justify-between items-center'>
                            <h1>Total</h1>
                            <h1>$157.99</h1>
                        </div>
                    </div>

                    <div className='flex  items-center justify-center gap-5 py-10'>
                        <div className='bg-white rounded-sm px-4 py-3 border border-zinc-400 w-4/5'>
                            <input type="text" className='h-full w-full outline-none' placeholder='Promo Code' />
                        </div>
                        <div className='w-1/5 flex items-end justify-end'>
                            <button className='bg-white px-4 py-3 border rounded-md border-zinc-400 cursor-pointer hover:shadow-md active:shadow-none'>Apply</button>
                        </div>
                    </div>

                    <div>
                        <button onClick={()=>navigate("/checkout")} className='bg-black text-white w-full py-3 rounded-md hover:bg-transparent active:bg-transparent hover:text-black active:text-black border border-transparent hover:border-black active:border-black cursor-pointer active:scale-95 transition-all duration-300
                        '>Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart