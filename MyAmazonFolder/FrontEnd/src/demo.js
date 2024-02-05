import React, { useReducer } from 'react';
 
// Action types
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
 
// Reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingCartItem = state.cart.find((item) => item.id === action.payload.id);
 
      if (existingCartItem) {
        // Product is already in the cart, increment quantity
 
        const updatedCart = state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1, price: (item.price / item.quantity) + item.price } : item
        );
 
       
 
 
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity - 1 }
              : product,
          ),
          cart: updatedCart,
         
        };
      } else {
       
 
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity - 1 }
              : product
          ),
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
    case REMOVE_FROM_CART:
      const updatedCart = state.cart.map((item) =>
        item.id === action.payload.id ? { ...item, quantity: item.quantity - 1, price: item.price - (item.price / item.quantity) } : item
      );
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
        cart: updatedCart.filter((item) => item.quantity > 0),
      };
    default:
      return state;
  }
};
 
// Initial state
const initialState = {
  products: [
    { id: 1, name: 'Mobile', price: 40000.0, quantity: 10 },
    { id: 2, name: 'Laptop', price: 80000.0, quantity: 8 },
    { id: 3, name: 'earbuds', price: 5000.0, quantity: 15 },
    // ... more products
  ],
  cart: [],
  total: 0,
};
 
const ShoppingCart = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
 
  const addToCart = (product) => {
    if (product.quantity > 0) {
      dispatch({ type: ADD_TO_CART, payload: product });
    }
  };
 
  const removeFromCart = (product) => {
    dispatch({ type: REMOVE_FROM_CART, payload: product });
  };
 
  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        <h2>Products</h2>
        <ul>
          {state.products.map((product) => (
            <li key={product.id}>
              {product.name} - rs: {product.price} - Quantity: {product.quantity}
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Cart</h2>
        <ul>
          {state.cart.map((cartItem) => (
            <li key={cartItem.id}>
              {cartItem.name} - rs: {cartItem.price} - Quantity: {cartItem.quantity}
              <button onClick={() => removeFromCart(cartItem)}>Remove from Cart</button>
            </li>
          ))}
       
        </ul>
     
      </div>
    </div>
  );
};
 
export default ShoppingCart;