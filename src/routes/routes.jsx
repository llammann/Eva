import About from "../pages/user/about";
import Contact from "../pages/user/contact";
import Wishlist from "../pages/user/wishlist";
import Login from "../pages/user/login";
import Register from "../pages/user/register";
import Shop from "../pages/user/shop";
import Basket from "../pages/user/basket";
import Detail from "../pages/user/detail";
import Home from "../pages/user/home";
import UserProfile from "../pages/user/userProfile";
import UserRoot from "../pages/user/userRoot";
import Checkout from "../pages/user/checkout";
import Dashboard from "../pages/admin/dashboard";
import Users from "../pages/admin/users";
import Products from "../pages/admin/products";
import AddProducts from "../pages/admin/addProducts";
import AdminHome from "../pages/admin/adminHome";
import AdminLogin from "../pages/admin/adminLogin";
import AddUsers from "../pages/admin/addUsers";
export const routes = [
  {
    path: "/",
    element: <UserRoot />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "detail",
        element: <Detail />,
      },
      {
        path: "profile",
        element: <UserProfile />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "basket",
        element: <Basket />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminHome />,
    children: [
      {
        index: true,
        element: <AdminLogin />,
      },
      {
        path: "/admin/users",
        element: <Users />,
      },
      {
        path: "/admin/products",
        element: <Products />,
      },
      {
        path: "/admin/addProducts",
        element: <AddProducts />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/addUsers",
        element: <AddUsers />,
      },
    ],
  },
]