import { createContext, useContext, useReducer } from "react";
import { useState } from "react";
import { addReducer } from "../Reducer/addReducer";
let initial_data = {
    cart: [],
    total: 0
}
const CartContext = createContext(initial_data);
export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(addReducer, initial_data);
    
    const addtocart = (product) => {
        state.cart.push(product);
    }
    const removefromcart = (product) => {
        let index = state.cart.indexOf(product);
        if (index !== -1) {
            state.cart.splice(index, 1);
        }
        let updated = state.cart;
        dispatch({
            type: "Remove_from_Cart",
            payload: {product: updated}
        })
    }
    const updatetotal = () => {
        let update = state.cart.length;
        dispatch({
            type: "Update_total",
            payload: {length: update}
        })
    }
    let value = {
        cart: state.cart,
        total: state.total,
        addtocart,
        removefromcart,
        updatetotal
    }
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}
export const CartData = ()=>{
    return useContext(CartContext);
}