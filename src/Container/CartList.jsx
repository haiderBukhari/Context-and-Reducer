import React from 'react'
import '../CSS/CartList.css'
import { CartData } from './Context/addContext'
const CartList = () => {
    const {cart} = CartData();
    console.log(cart);
    return (
    <div className='main-cart-list'>
        {
            cart.length!==0?
            cart.map((arr)=>(
                <div className='cart-list'>
                    <div className='flex-apply'>
                        <img src={arr[1]} alt="" />
                        <p>{arr[2]}</p>
                    </div>
                    <p className='price'>${arr[4]}</p>
                </div>
            )):<p className='found'>No Item Found in The cart</p>
        }
    </div>
  )
}

export default CartList
