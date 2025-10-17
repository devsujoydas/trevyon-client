import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home';
import ClientLayout from '../Layout/ClientLayout';
import About from '../pages/About/About';
import ContactUs from '../pages/ContactUs/ContactUs';
import Products from '../pages/Products/Products';
import ProductDetails from '../pages/Products/ProductDetails/ProductDetails';
import Signup from '../pages/Auth/Signup';
import Signin from '../pages/Auth/Signin';
import ResetPassword from '../pages/Auth/ResetPassword'; 
import Overview from '../pages/Admin/Overview';
import Admin from '../pages/Admin/Admin';
import AdminProducts from '../pages/Admin/AdminProducts';
import Orders from '../pages/Admin/Orders';
import Customers from '../pages/Admin/Customers';
import Settings from '../pages/Admin/Settings';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <ProductDetails />,
      },
      {
        path: "auth/signup",
        element: <Signup />,
      },
      {
        path: "auth/signin",
        element: <Signin />,
      },
      {
        path: "auth/reset-password",
        element: <ResetPassword />,
      },
    ]
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "",
        element: <Overview />,
      },
      {
        path: "products",
        element: <AdminProducts />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "customers",
        element: <Customers />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ]
  }
]);

export default router;