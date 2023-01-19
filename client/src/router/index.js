import { createBrowserRouter, Navigate } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";


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
       
        path: "/catalog",
        element: (
          <ProtectedRoute isAllowed={"isAuth"}>
            <Catalog />
          </ProtectedRoute>
        ),
      },
  
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
      {
        path: "/dataadmin",
        element: (
          <ProtectedRoute isAllowed={"isAdmin"}>
            hola
          </ProtectedRoute>
        ),
      },
    
    ],
  },
]);

export default router;
