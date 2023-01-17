import { createBrowserRouter, Navigate } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import Registro from "../pages/Registro";
import Auth from "../pages/Auth";
/* import Products from "../pages/Products"; */
import Cart from "../pages/Cart";
import Catalog from "../pages/Catalog";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Logout from "../pages/Logout";

import ProtectedRoute from "../utils/ProtectedRoute";



const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,

    children: [
      {
        index: true,
        element: <Catalog />,
      },
    /*   {
        path: "/products",
        element: <Products />,
      }, */
      {
        path: "/cart",
        element: <Cart />,
      },
 
      {
        path: "/login",
        element: (
          <ProtectedRoute isAllowed={"isNotAuth"}>
            <Login />
          </ProtectedRoute>
        ),
      },
      {
        path: "/registro",
        element: (
          <ProtectedRoute isAllowed={"isNotAuth"}>
            <SignUp />
          </ProtectedRoute>
        ),
      },
      {
        path: "/logout",
        element: (
          <ProtectedRoute isAllowed={"isAuth"}>
            <Logout />
          </ProtectedRoute>
        ),
      },
    
    ],
  },
]);

export default router;
