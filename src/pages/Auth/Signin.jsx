import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("🧾 Sign In Form Data:", data);
    reset();
  };

  return (
    <div className="bg-main py-20">
      <div className="w-main text-center">
        <h1 className=" text-3xl md:text-6xl font-semibold">Sign in to your account</h1>
        <p className="md:text-2xl text-lg mt-2 mt:mt-3">
          Or{" "}
          <Link to={`/auth/signup`} className="font-semibold ">
            create a new account
          </Link>
        </p>

        {/* 🧾 Sign In Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white max-w-md mx-auto mt-10 p-8 rounded-sm shadow-md text-left"
        >
          {/* Email */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              type="email"
              placeholder="you@example.com"
              className={`w-full border rounded-md px-4 py-3 focus:outline-none focus:border-black ${errors.email ? "border-red-500" : "border-gray-300"
                }`}
            />
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
            <div className="relative flex items-center">
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className={`w-full border rounded-md px-4 py-3 pr-10 focus:outline-none focus:border-black ${errors.password ? "border-red-500" : "border-gray-300"
                  }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 text-gray-500 hover:text-black cursor-pointer"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
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
                {...register("acceptTerms", {
                  required: "You must accept the terms",
                })}
                type="checkbox"
                className="accent-black w-4 h-4"
              />
              <span>I accept the terms</span>
            </label>

            <Link
              to="/auth/forgot-password"
              className="text-black font-medium hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          {errors.acceptTerms && (
            <p className="text-red-500 text-sm mb-4">
              {errors.acceptTerms.message}
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

        <p className="md:text-2xl text-lg mt-10">
          By signing in, you agree to our{" "}
          <span className="font-bold">Terms of Service</span> and{" "}
          <span className="font-bold">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
};

export default Signin;
