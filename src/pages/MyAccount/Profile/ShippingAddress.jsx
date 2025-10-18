import { useForm } from "react-hook-form";

const ShippingAddress = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("🏠 Shipping Address Data:", data);
    reset();
  };

  return (
    <div className="space-y-10">
      <h1 className="text-4xl font-semibold">Shipping Address</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 mt-10 "
      >
        {/* Address Line */}
        <div>
          <label className="block text-black font-semibold mb-2">
            Apartment, suite, etc. (optional)
          </label>
          <input
            {...register("address", {
              required: "Address is required",
              minLength: {
                value: 5,
                message: "Address must be at least 5 characters",
              },
            })}
            type="text"
            placeholder="House 12, Road 7, Block C"
            className={`w-full border rounded-md p-4 focus:outline-none focus:border-black ${
              errors.address ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.address && (
            <p className="text-red-500 text-sm mt-1">
              {errors.address.message}
            </p>
          )}
        </div>

        {/* City, State, Postal Code */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* City */}
          <div>
            <label className="block text-black font-semibold mb-2">
              City
            </label>
            <input
              {...register("city", {
                required: "City is required",
              })}
              type="text"
              placeholder="Dhaka"
              className={`w-full border rounded-md p-4 focus:outline-none focus:border-black ${
                errors.city ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.city && (
              <p className="text-red-500 text-sm mt-1">
                {errors.city.message}
              </p>
            )}
          </div>

          {/* State / Province */}
          <div>
            <label className="block text-black font-semibold mb-2">
              State / Province
            </label>
            <select
              {...register("state", {
                required: "Please select a state/province",
              })}
              className={`w-full border rounded-md p-4 focus:outline-none focus:border-black ${
                errors.state ? "border-red-500" : "border-gray-300"
              }`}
              defaultValue=""
            >
              <option value="" disabled>
                Select State/Province
              </option>
              <option value="Dhaka">Dhaka</option>
              <option value="Chittagong">Chittagong</option>
              <option value="Khulna">Khulna</option>
              <option value="Rajshahi">Rajshahi</option>
              <option value="Sylhet">Sylhet</option>
              <option value="Barishal">Barishal</option>
              <option value="Rangpur">Rangpur</option>
              <option value="Mymensingh">Mymensingh</option>
            </select>
            {errors.state && (
              <p className="text-red-500 text-sm mt-1">
                {errors.state.message}
              </p>
            )}
          </div>

          {/* Postal Code */}
          <div>
            <label className="block text-black font-semibold mb-2">
              Postal Code
            </label>
            <input
              {...register("postalCode", {
                required: "Postal code is required",
                pattern: {
                  value: /^[0-9]{4,10}$/,
                  message: "Invalid postal code",
                },
              })}
              type="text"
              placeholder="1207"
              className={`w-full border rounded-md p-4 focus:outline-none focus:border-black ${
                errors.postalCode ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.postalCode && (
              <p className="text-red-500 text-sm mt-1">
                {errors.postalCode.message}
              </p>
            )}
          </div>
        </div>

        {/* Country */}
        <div>
          <label className="block text-black font-semibold mb-2">
            Country
          </label>
          <select
            {...register("country", {
              required: "Please select a country",
            })}
            className={`w-full border rounded-md p-4 focus:outline-none focus:border-black ${
              errors.country ? "border-red-500" : "border-gray-300"
            }`}
            defaultValue=""
          >
            <option value="" disabled>
              Select Country
            </option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="India">India</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Nepal">Nepal</option>
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
          </select>
          {errors.country && (
            <p className="text-red-500 text-sm mt-1">
              {errors.country.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 bg-black text-white hover:text-black rounded-full cursor-pointer font-semibold hover:bg-transparent border border-transparent hover:border-black active:scale-95 transition"
          >
            Update Shipping Address
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShippingAddress;
