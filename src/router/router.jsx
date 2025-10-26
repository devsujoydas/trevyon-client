import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home';
import ClientLayout from '../Layout/ClientLayout';
import About from '../pages/About/About';
import ContactUs from '../pages/ContactUs/ContactUs';
import Products from '../pages/Products/Products';
import ProductDetails from '../pages/Products/ProductDetails/ProductDetails';
import Signup from '../pages/Auth/Signup';
import Signin from '../pages/Auth/Signin';
import Settings from '../pages/Admin/Dashboard/Settings';
import CheckOut from '../pages/CheckOut/CheckOut';
import ForgotPassword from '../pages/Auth/ForgotPassword';

import MyAccount from '../pages/MyAccount/MyAccount';
import Profile from '../pages/MyAccount/Profile/Profile';
import Orderhistory from '../pages/MyAccount/OrderHistory/Orderhistory';
import OrderHistoryDetails from '../pages/MyAccount/OrderHistory/OrderHistoryDetails';
import PaymentCencel from '../pages/CheckOut/PaymentBox/PaymentCenceled';
import PaymentSuccessfully from '../pages/CheckOut/PaymentBox/PaymentSuccessfully';

import Cart from '../pages/Cart/Cart';
import api from '../services/api';

import Dashboard from '../pages/Admin/Dashboard/Dashboard';
import Overview from '../pages/Admin/Dashboard/Overview';
import Admin from '../pages/Admin/Admin';
import AdminProducts from '../pages/Admin/AdminProducts';
import Orders from '../pages/Admin/Dashboard/Orders';
import Customers from '../pages/Admin/Dashboard/Customers';
import AdminResetPassword from '../pages/Admin/Auth/AdminResetPassword';
import AdminSignin from '../pages/Admin/Auth/AdminSignin';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      { path: "", element: <Home />, },
      { path: "about", element: <About />, },
      { path: "contact", element: <ContactUs />, },


      // Profile
      {
        path: "profile",
        element: <MyAccount />,
        children: [
          { path: "", element: <Profile />, },
          { path: "order-history", element: <Orderhistory />, },
        ]
      },

      {
        path: "order-history/:id",
        element: <OrderHistoryDetails />,
      },


      // Products
      { path: "products", element: <Products />, },
      {
        path: "products/:id",
        element: <ProductDetails />,
        loader: ({ params }) => api.get(`/products/${params.id}`)
      },


      // Cart
      { path: "cart", element: <Cart />, },


      // Checkout
      { path: "checkout", element: <CheckOut />, },
      { path: "paymentSuccess", element: <PaymentSuccessfully />, },
      { path: "paymentCencel", element: <PaymentCencel />, },


      // Authentication
      { path: "auth/signup", element: <Signup />, },
      { path: "auth/signin", element: <Signin />, },
      { path: "auth/forgot-password", element: <ForgotPassword />, },
    ]
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      { path: "reset-password", element: <AdminResetPassword />, },
      { path: "signin", element: <AdminSignin />, },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          { path: "", element: <Overview />, },
          { path: "products", element: <AdminProducts />, },
          { path: "orders", element: <Orders />, },
          { path: "customers", element: <Customers />, },
          { path: "settings", element: <Settings />, },
        ]
      }
    ]
  }
]);

export default router;