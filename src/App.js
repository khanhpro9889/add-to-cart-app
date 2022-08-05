import "./App.css";
import { useEffect } from "react";
import {
  addToCart,
  deleteFromCart,
  addQuantity,
  removeQuantity,
} from "./redux/actions/cartActions/cartActions";
import { useDispatch, useSelector } from "react-redux";
//import { fetchBag } from './redux/actions/bagActions/bagActions';
import { fetchBagApi } from "./redux/actions/bagActions/bagActions";

import React from "react";

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cartReducer);
  const bag = useSelector((store) => store.bagReducer);

  useEffect(() => {
    dispatch(fetchBagApi());
    // eslint-disable-next-line
  }, []);

  const addToCartFunc = (item) => {
    dispatch(addToCart(item));
  };

  const deleteFromCartFunc = (item) => {
    dispatch(deleteFromCart(item));
  };

  const addQuantityFunc = (item) => {
    dispatch(addQuantity(item));
  };

  const removeQuantityFunc = (item) => {
    dispatch(removeQuantity(item));
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          {bag.loading ? (
            <div>Loading</div>
          ) : (
            bag.list.map((item) => {
              return (
                <div className="box">
                  <div>{item.name}</div>
                  <button
                    onClick={() => {
                      addToCartFunc(item);
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              );
            })
          )}
        </div>
        <hr />
        <div>
          <h2>Cart</h2>
        </div>
        <div className="container">
          {cart &&
            cart.items.map((i) => {
              return (
                <div className="box">
                  <div>{i.item.name}</div>
                  <div>Quanity: {i.quantity}</div>
                  <button
                    onClick={() => {
                      deleteFromCartFunc(i.item);
                    }}
                  >
                    Remove
                  </button>
                  <button
                    onClick={() => {
                      addQuantityFunc(i.item);
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      removeQuantityFunc(i.item);
                    }}
                  >
                    -
                  </button>
                  <br />
                </div>
              );
            })}
        </div>
      </header>
    </div>
  );
}

export default App;
