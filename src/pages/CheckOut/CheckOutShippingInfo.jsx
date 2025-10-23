import React from 'react'
import { useForm } from 'react-hook-form';
import ShippingOptions from './ShippingOptions';

const CheckOutShippingInfo = () => {
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
        <div>
            <h1 className='font-semibold text-xl md:text-2xl pb-10'>Shipping Information</h1>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8"
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
                        className={`w-full border rounded-md px-4 py-3 md:py-4 placeholder:md:text-md placeholder:text-sm focus:outline-none focus:border-black ${errors.firstName ? "border-red-500" : "border-gray-300"
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
                        className={`w-full border rounded-md px-4 py-3 md:py-4 placeholder:md:text-md placeholder:text-sm focus:outline-none focus:border-black ${errors.lastName ? "border-red-500" : "border-gray-300"
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
                        className={`w-full border rounded-md px-4 py-3 md:py-4 placeholder:md:text-md placeholder:text-sm focus:outline-none focus:border-black ${errors.email ? "border-red-500" : "border-gray-300"
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
                        className={`w-full border rounded-md px-4 py-3 md:py-4 placeholder:md:text-md placeholder:text-sm focus:outline-none focus:border-black ${errors.phone ? "border-red-500" : "border-gray-300"
                            }`}
                    />
                    {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.phone.message}
                        </p>
                    )}
                </div>


                <div className="space-y-3 md:space-y-6 col-span-2  ">
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
                            className={`w-full border rounded-md px-4 py-3 md:py-4 placeholder:md:text-md placeholder:text-sm focus:outline-none focus:border-black ${errors.address ? "border-red-500" : "border-gray-300"
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
                                className={`w-full border rounded-md px-4 py-3 md:py-4 placeholder:md:text-md placeholder:text-sm focus:outline-none focus:border-black ${errors.city ? "border-red-500" : "border-gray-300"
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
                                className={`w-full border rounded-md px-4 py-3 md:py-4 placeholder:md:text-md placeholder:text-sm focus:outline-none focus:border-black ${errors.state ? "border-red-500" : "border-gray-300"
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
                                className={`w-full border rounded-md px-4 py-3 md:py-4 placeholder:md:text-md placeholder:text-sm focus:outline-none focus:border-black ${errors.postalCode ? "border-red-500" : "border-gray-300"
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
                            className={`w-full border rounded-md px-4 py-3 md:py-4 placeholder:md:text-md placeholder:text-sm focus:outline-none focus:border-black ${errors.country ? "border-red-500" : "border-gray-300"
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
                </div>
            </form>


            <h1 className='font-semibold text-xl md:text-2xl py-10'>Shipping Method</h1>

            <ShippingOptions />

        </div>
    )
}

export default CheckOutShippingInfo