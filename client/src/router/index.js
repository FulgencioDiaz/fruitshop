import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import Registro from "../pages/Registro";
import Auth from "../pages/Auth";
import Products from "../pages/Products";



const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,

    children: [
      {
        index: true,
        element: <Registro />,
      },
      {
        path: "/registro",
        element: <Registro />,
      },
      {
        path: "/products",
        element: <Products />,
      },
 
      {
        path: "/auth",
        element: <Auth/>,
      },
    
    ],
  },
]);

export default router;
