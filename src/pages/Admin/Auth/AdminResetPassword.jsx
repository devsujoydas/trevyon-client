import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import HeaderLogo from "../../../components/HeaderLogo/HeaderLogo";

const AdminResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("🧾 Reset Password Form Data:", data);
    reset();
  };

  return (
    <div className="h-screen overflow-hidden flex justify-center items-center">
      <div className="w-main text-center">
        <div>
          <HeaderLogo />
          <h1 className="font-bold text-4xl mt-10">Reset password</h1>
          <p className="text-xl text-zinc-500 mt-2">Enter your email to receive the OTP</p>
        </div>
        <div className="w-md mx-auto">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-8 rounded-sm  text-left"
          >
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
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 cursor-pointer active:scale-95 bg-black text-white rounded-md font-semibold hover:bg-gray-800 transition"
            >
              Send
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default AdminResetPassword;
