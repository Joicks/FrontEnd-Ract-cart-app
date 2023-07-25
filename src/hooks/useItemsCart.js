import { useEffect, useReducer } from "react";
import { itemsReducer } from "../reducer/itemsReducer";
import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "../reducer/itemsActons";

const initialCartItems = JSON.parse(sessionStorage.getItem("cart")) || [];

export const useItemsCart = () => {
 
  const [cartItems, dispacth] = useReducer(itemsReducer, initialCartItems);

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const handlerAddProductCart = (product) => {
    const hasItem = cartItems.find((i) => i.product.id === product.id);
    if (hasItem) {
      // setCartItems([
      //   ...cartItems.filter((i) => i.product.id !== product.id),
      //   {
      //     product,
      //     quantity: hasItem.quantity + 1,
      //   }
      // ])

      // otro metodo de

      dispacth({
        type: UpdateQuantityProductCart,
        payload: product,
      });
    } else {
      dispacth({
        type: AddProductCart,
        payload: product,
      });
    }
  };

  const handlerDeleteProductCart = (id) => {
    dispacth({
      type: DeleteProductCart,
      payload: id,
    })
  }
  

  return{
    cartItems,
    handlerAddProductCart,
    handlerDeleteProductCart,

}
}