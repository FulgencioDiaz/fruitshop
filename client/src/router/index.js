import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import Home from "../pages/Home";
import Landings from "../pages/Landings";
import Products from "../pages/Products";
import ProductsList from "../pages/ProductsList";


const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/list",
        element: <ProductsList />,
      },
      {
        path: "/landings",
        element: <Landings />,
      },
    ],
  },
]);

export default router;
