import { useForm } from "react-hook-form";

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("🔐 Change Password Data:", data);
    reset();
  };

  const newPassword = watch("newPassword");

  return (
    <div className=" space-y-5 md:space-y-10">
      <h1 className="text-4xl font-semibold">Change Password</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5 md:space-y-6 mt-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
         
          <div>
            <label className="block text-black font-semibold mb-2">
              Current Password
            </label>
            <input
              {...register("currentPassword", {
                required: "Current password is required",
              })}
              type="password"
              placeholder="Enter current password"
              className={`w-full border rounded-md px-4 py-3 md:py-4 placeholder:md:text-md placeholder:text-sm focus:outline-none focus:border-black ${
                errors.currentPassword ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.currentPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.currentPassword.message}
              </p>
            )}
          </div>
 
          <div>
            <label className="block text-black font-semibold mb-2">
              New Password
            </label>
            <input
              {...register("newPassword", {
                required: "New password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              type="password"
              placeholder="Enter new password"
              className={`w-full border rounded-md px-4 py-3 md:py-4 placeholder:md:text-md placeholder:text-sm focus:outline-none focus:border-black ${
                errors.newPassword ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.newPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.newPassword.message}
              </p>
            )}
          </div>
 
          <div>
            <label className="block text-black font-semibold mb-2">
              Confirm New Password
            </label>
            <input
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === newPassword || "Passwords do not match",
              })}
              type="password"
              placeholder="Re-enter new password"
              className={`w-full border rounded-md px-4 py-3 md:py-4 placeholder:md:text-md placeholder:text-sm focus:outline-none focus:border-black ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        </div>
 
        <div>
          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 bg-black text-white hover:text-black rounded-full cursor-pointer font-semibold hover:bg-transparent border border-transparent hover:border-black active:scale-95 transition"
          >
            Update Password
          </button>
        </div>
      </form>

      <div className="">
        <button className="w-full md:w-auto px-8 py-3 bg-red-600 text-white hover:text-black rounded-full cursor-pointer font-semibold hover:bg-transparent border border-transparent hover:border-black active:scale-95 transition">Log Out</button>
      </div>
    </div>
  );
};

export default ChangePassword;
