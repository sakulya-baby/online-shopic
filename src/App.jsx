import React from "react";
import { Header } from "./components/Header";
import { Product } from "./components/Product";
import { Cart } from "./components/Cart";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const { isOpenCart } = useSelector((state) => state.fruits);
  console.log(isOpenCart);

  return (
    <div>
      <Header />
      <Product />
      {isOpenCart && <Cart />}
    </div>
  );
};

export default App;
