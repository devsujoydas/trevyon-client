import { User } from "lucide-react";
import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const MyAccount = () => {
  const location = useLocation();

  // Active path check
  const isProfileActive = location.pathname === "/profile";
  const isOrderHistoryActive = location.pathname === "/profile/order-history";

  // Styles
  const activeClass =
    "flex items-center gap-2 bg-black rounded-full px-8 py-4 text-white border border-transparent duration-300 transition-all cursor-pointer active:scale-95";
  const inactiveClass =
    "flex items-center gap-2 rounded-full px-8 py-4 text-black border border-black bg-transparent duration-300 transition-all cursor-pointer active:scale-95";

  return (
    <div className="w-main py-20 space-y-14">
      <h1 className="text-6xl">My Account</h1>

      <div className="flex items-center gap-8">
        <Link
          to="/profile"
          className={isProfileActive ? activeClass : inactiveClass}
        >
          <User /> Profile
        </Link>

        <Link
          to="/profile/order-history"
          className={isOrderHistoryActive ? activeClass : inactiveClass}
        >
          <User /> Order History
        </Link>
      </div>

      <Outlet />
    </div>
  );
};

export default MyAccount;
