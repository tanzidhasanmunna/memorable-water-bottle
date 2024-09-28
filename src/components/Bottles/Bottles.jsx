import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addToLS, getStoredCart, removeFromLS} from "../../utilities/localstorage";
import Cart from "../Cart/Cart";

export default function Bottles() {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  useEffect(() => {

    if (bottles.length) {
      const storedCart = getStoredCart();
      // console.log(storedCart);
      const savedCart = [];
      for(const cart of storedCart){
        const bottle = bottles.find( bottle => bottle.id === cart)
        if(bottle){
          savedCart.push(bottle);
        }
      }
      console.log(savedCart)
      setCart(savedCart);
    }
  }, [bottles]);
  const handelAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLS(bottle.id);
  };
  const handelRemoveFromCart = (id) => {
    // visual remove
    const remainingCart = cart.filter(bottles => bottles.id !== id);
    setCart(remainingCart);
    // remove from LocalStorage
    removeFromLS(id);

  }
  return (
    <div>
      <h2>Bottles Available: {bottles.length}</h2>
      <Cart cart= {cart} handelRemoveFromCart={handelRemoveFromCart}/>
      <div className="bottle-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handelAddToCart={handelAddToCart}
          />
        ))}
      </div>
    </div>
  );
}
