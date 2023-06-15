import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./Reducers";

const Cart = createContext();

const Context = ({ children }) => {
  const products = [
    {
      id: "1",
      name: "Cappuccino",
      img: "https://www.acouplecooks.com/wp-content/uploads/2021/08/Cafe-Au-Lait-001s.jpg",
      price: "30",
    },
    {
      id: "2",
      name: "Espresso",
      img: "https://images.news18.com/ibnlive/uploads/2022/04/painting-of-filter-coffee.jpg",
      price: "40",
    },
    {
      id: "3",
      name: "Americano",
      img: "https://www.vegrecipesofindia.com/wp-content/uploads/2018/02/cafe-style-hot-coffee-recipe-1.jpg",
      price: "50",
    },
  ];

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const cartState = () => {
  return useContext(Cart);
};
