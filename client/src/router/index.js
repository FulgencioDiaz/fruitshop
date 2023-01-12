import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import Registro from "../pages/Registro";
import Products from "../pages/Products";
import ProductsList from "../pages/ProductsList";


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
        path: "/products/list",
        element: <ProductsList />,
      },
    
    ],
  },
]);

export default router;
