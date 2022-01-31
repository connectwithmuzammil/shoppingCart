import React, { createContext, useReducer, useEffect } from 'react';
import './Cart.css'
import { products } from './Product'
import { ContextCart } from './ContextCart';
import { reducer } from './reducer';
export const CartContext = createContext();

const initialState = {
    item: products,
    totalAmount: 0,
    totalItem: 0,
}


export default function Cart() {

    // const [item, setItem] = useState(products);

    const [state, dispatch] = useReducer(reducer, initialState);
    // console.log(state);


    const removeItem = (id) => {
        return dispatch({
            type: "REMOVE_ITEM",
            payload: id,
        })
    }
    // clear the cart
    const clearCart = () => {
        return dispatch({ type: "CLEAR_CART" });
    };

    const increment = (id) => {
        return dispatch({
            type: "INCREMENT",
            payload: id,
        });
    };

    const decrement = (id) => {
        return dispatch({
            type: "DECREMENT",
            payload: id
        })
    };

    // we will use the useEffect to update the data
    useEffect(() => {
        dispatch({ type: "GET_TOTAL" });
        // console.log("Awesome");
    }, [state.item]);
    return (
        <>
            <CartContext.Provider value={{ ...state, removeItem, clearCart, increment, decrement }}>
                <ContextCart />
            </CartContext.Provider>

        </>
    )
}

