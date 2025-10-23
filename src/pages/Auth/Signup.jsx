import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("🧾 Signup Form Data:", data);
    reset();
  };

  return (
    <div className="bg-main py-20">
      <div className="w-main text-center">
        <h1 className="text-3xl md:text-6xl font-semibold">Create your account</h1>
        <p className="md:text-2xl text-lg mt-2 mt:mt-3">
          Or{" "}
          <Link to={`/auth/signin`} className="font-semibold">
            sign in to your existing account
          </Link>
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white max-w-md mx-auto mt-10 p-8 rounded-sm shadow-md text-left"
        >
          {/* Full Name */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              {...register("fullName", { required: "Full name is required" })}
              type="text"
              placeholder="Enter Your Name"
              className={`w-full border rounded-md px-4 py-3 focus:outline-none focus:border-black ${
                errors.fullName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
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
              className={`w-full border rounded-md px-4 py-3 focus:outline-none focus:border-black ${
                errors.email ? "border-red-500" : "border-gray-300"
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

            {/* Wrapper keeps icon aligned */}
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
                className={`w-full border rounded-md px-4 py-3 pr-10 focus:outline-none focus:border-black ${
                  errors.password ? "border-red-500" : "border-gray-300"
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

          {/* Confirm Password */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Confirm Password
            </label>

            <div className="relative flex items-center">
              <input
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                })}
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className={`w-full border rounded-md px-4 py-3 pr-10 focus:outline-none focus:border-black ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
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

            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-center justify-between mb-6 text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                {...register("acceptTerms", {
                  required: "You must accept the terms",
                })}
                type="checkbox"
                className="accent-black w-4 h-4"
              />
              <span>
                I agree to the{" "}
                <span className="font-bold">Terms of Service</span> and{" "}
                <span className="font-bold">Privacy Policy</span>
              </span>
            </label>
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
            Sign Up
          </button>
        </form>

        <p className="md:text-2xl text-lg  mt-10">
          Already have an account?{" "}
          <Link className="font-bold" to={`/auth/signin`}>
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
