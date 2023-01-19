import './index.css';
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router/";
import logger from "./services/loggerService";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import { CartProvider} from './hooks/useCart';
import { AuthProvider } from './hooks/useAuth'
logger.init();


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<CartProvider>
<AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
  </CartProvider>
);
