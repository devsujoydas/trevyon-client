import { Pen } from "lucide-react";
import profileImg from "../../../assets/userPhoto.png";
import { useForm } from "react-hook-form";

const UserInformation = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("🧾 User Info Form Data:", data);
    reset();
  };

  return (
    <div className=" space-y-5 md:space-y-10">
      <h1 className="md:text-4xl text-2xl font-semibold ">User Information</h1>

      <div> 
        <div className="md:w-56 w-30 md:h-56 h-30 relative">
          <img
            src={profileImg}
            className="h-full w-full rounded-full object-cover"
            alt="Profile"
          />
          <button
            type="button"
            className="bg-black text-white p-1 md:p-2 rounded-full absolute bottom-3 right-3 hover:bg-zinc-800 border-2 active:scale-95 transition-all active:rotate-180"
          >
            <Pen size={18} />
          </button>
        </div>

        {/* 🧾 User Information Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 mt-10"
        >
          {/* First Name */}
          <div className="">
            <label className="block  font-semibold mb-2">
              First Name
            </label>
            <input
              {...register("firstName", {
                required: "First name is required",
                minLength: {
                  value: 2,
                  message: "First name must be at least 2 characters",
                },
              })}
              type="text"
              placeholder="John"
              className={`w-full border rounded-md px-4 py-3 md:py-4 placeholder:md:text-md placeholder:text-sm focus:outline-none focus:border-black ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div className="">
            <label className="block  font-semibold mb-2">
              Last Name
            </label>
            <input
              {...register("lastName", {
                required: "Last name is required",
                minLength: {
                  value: 2,
                  message: "Last name must be at least 2 characters",
                },
              })}
              type="text"
              placeholder="Doe"
              className={`w-full border rounded-md px-4 py-3 md:py-4 placeholder:md:text-md placeholder:text-sm focus:outline-none focus:border-black ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="">
            <label className="block  font-semibold mb-2">
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
              className={`w-full border rounded-md px-4 py-3 md:py-4 placeholder:md:text-md placeholder:text-sm focus:outline-none focus:border-black ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div className="">
            <label className="block  font-semibold mb-2">
              Phone
            </label>
            <input
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10,15}$/,
                  message: "Invalid phone number",
                },
              })}
              type="text"
              placeholder="+880123456789"
              className={`w-full border rounded-md px-4 py-3 md:py-4 placeholder:md:text-md placeholder:text-sm focus:outline-none focus:border-black ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Submit Button (Full Width) */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-black text-white hover:text-black rounded-full cursor-pointer font-semibold hover:bg-transparent border border-transparent hover:border-black active:scale-95 transition"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserInformation;
