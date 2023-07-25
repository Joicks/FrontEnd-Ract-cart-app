import { useItemsCart } from "./hooks/useItemsCart";
import { Navbar } from "./components/Navbar";
import { CartRoutes } from "./reducer/routers/CartRoutes";

export const CartApp = () => {
  const { cartItems, handlerAddProductCart, handlerDeleteProductCart } =
    useItemsCart();

  return (
    <>
    <Navbar/>
      <div className="container my-2">
        <h1>Cart App</h1>
       <CartRoutes cartItems={cartItems} 
       handlerAddProductCart={handlerAddProductCart} 
       handlerDeleteProductCart={ handlerDeleteProductCart} />
      </div>
    </>
  );
};
