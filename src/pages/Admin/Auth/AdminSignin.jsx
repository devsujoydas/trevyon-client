import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import HeaderLogo from "../../../components/HeaderLogo/HeaderLogo";

const AdminSignin = () => {
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("🧾 Admin Sign In Form Data:", data);
        reset();
    };

    return (
        <div className="h-screen overflow-hidden flex justify-center items-center">
            <div className="w-main text-center">
                <div>
                    <HeaderLogo />
                    <h1 className="font-bold text-4xl mt-10">Welcome back</h1>
                    <p className="text-xl text-zinc-500 mt-2">Please enter your credentials to continue</p>
                </div>
                <div className="w-md mx-auto">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="bg-white p-8 rounded-sm  text-left"
                    >
                        {/* Email */}
                        <div className="mb-6">
                            <label className="block text-gray-700 font-medium mb-2">
                                Email
                            </label>
                            <div className={`w-full flex items-center gap-2 border rounded-md px-4 py-3 focus:outline-none  ${errors.email ? "border-red-500" : "border-gray-300"
                                } `}>
                                <Mail className="text-zinc-400" />
                                <input
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Invalid email address",
                                        },
                                    })}
                                    type="email"
                                    placeholder="Enter your email"
                                    className={`outline-none w-full h-full`}
                                />
                            </div>
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        {/* Password */}
                        <div className="mb-6">
                            <label className="block text-gray-700 font-medium mb-2">
                                Password
                            </label>
                            <div className={`w-full flex items-center gap-2 relative border rounded-md px-4 py-3 pr-10 focus:outline-none focus:border-black ${errors.password ? "border-red-500" : "border-gray-300"
                                }`}>
                                <Lock className="text-zinc-400" />
                                <input
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 6,
                                            message: "Password must be at least 6 characters",
                                        },
                                    })}
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    className={`w-full h-full outline-none`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 text-gray-500 hover:text-black cursor-pointer"
                                >
                                    {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>

                        {/* Terms + Forgot Password */}
                        <div className="flex items-center justify-between mb-6 text-sm">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    {...register("remember", {
                                        required: "You must check Remember me",
                                    })}
                                    type="checkbox"
                                    className="accent-black w-4 h-4"
                                />
                                <span>Remember me</span>
                            </label>

                            <Link
                                to="/admin/reset-password"
                                className="text-black font-medium hover:underline"
                            >
                                Forgot password?
                            </Link>
                        </div>
                        {errors.remember && (
                            <p className="text-red-500 text-sm mb-4">
                                {errors.remember.message}
                            </p>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full py-3 cursor-pointer active:scale-95 bg-black text-white rounded-md font-semibold hover:bg-gray-800 transition"
                        >
                            Sign In
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default AdminSignin;
