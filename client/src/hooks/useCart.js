import { createContext, useContext, useReducer, useState } from "react";




/* const initialState = !currentUser
  ? { isAuth: false }
  : currentUser.isAdmin
  ? { isAuth: true, isAdmin: true }
  : { isAuth: true };
 */
const CartContext = createContext();
CartContext.displayName = "CartContext";


export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
}

export default function CartConsumer() {
  return useContext(CartContext);
}
