import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("🔑 Forgot Password Form Data:", data);
    reset();
  };

  return (
    <div className="bg-[#F9E4CB] py-20">
      <div className="w-main text-center">
        <h1 className="text-3xl md:text-6xl font-semibold">
          Reset your password
        </h1>
        <p className="md:text-2xl text-lg mt-3">
          Remember your password?{" "}
          <Link to="/auth/signin" className="font-semibold hover:underline">
            Sign in
          </Link>
        </p>

        {/* 🔐 Forgot Password Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white max-w-md mx-auto mt-10 p-8 rounded-sm shadow-md text-left"
        >
          {/* Email Input */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Email address
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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 cursor-pointer active:scale-95 bg-black text-white rounded-md font-semibold hover:bg-gray-800 transition"
          >
            Send Reset Link
          </button>
        </form>

        <p className="md:text-2xl text-lg mt-10">
          We’ll send you an email with instructions to reset your password.
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
