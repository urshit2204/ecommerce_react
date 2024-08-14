import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import back_arrow from '../image/back_arrow.png';
import cart_image from '../image/cart_image.png';
import '../Components/cart.css';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const increaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
    } else {
      updatedCart.splice(index, 1);
    }
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-page">
      <header className="cart-header">
        <div className="continue-cart">
          <Link to="/products">
            <img className="arrow-img" src={back_arrow} alt="Back to Products" />
          </Link>
          <span className="con-shop">Continue Shopping</span>
        </div>
        <div className="cart-i">
          <img className="cart-img" src={cart_image} alt="Cart" />
          <p className="cart-num">{cart.length}</p>
        </div>
      </header>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>Your Cart is Empty</h2>
          <Link to="/products" className="continue-shopping-link">Continue Shopping</Link>
        </div>
      ) : (
        <div className="cart-content">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img className="cart-item-image" src={item.image} alt={item.title} />
              <div className="cart-item-details">
                <h3 className="cart-item-title">{item.title}</h3>
                <p className="cart-item-price">${item.price}</p>
                <div className="cart-item-quantity">
                  <button onClick={() => decreaseQuantity(index)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(index)}>+</button>
                </div>
              </div>
              <button className="cart-item-delete" onClick={() => removeFromCart(index)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          ))}

          <div className="cart-total">
            <span className="cart-span">Total Amount :-</span>
            <span className="total-price">${getTotalPrice().toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
