import React, { useEffect, useState } from 'react'
import '../CSS/Cart.css'
import {CartData} from './Context/addContext';
export const Cart = ({ product }) => {

  let [add, setadd] = useState(true);
  let {addtocart, updatetotal, removefromcart, cart} = CartData();
  const handlecart = ()=>{
    cart.indexOf(product)===-1?addtocart(product):removefromcart(product);
    updatetotal();
  }
  function add_stars(rating) {
    let ratings = [1, 2, 3, 4, 5];
    if (rating >= 4.0) {
      return (
        ratings.map((rat) => (
          <>
            {
              <i class="fa-solid fa-star"></i>
            }
          </>
        )))
    }
    else if (rating >= 3.0 && rating < 4.0) {
      return (
        ratings.map((rat) => (
          <>
            {
              rat == 5 ? <i className="fa-solid fa-star-half"></i> : <i className="fa-solid fa-star"></i>
            }
          </>
        )))
    }
    else if (rating >= 2.0 && rating < 3.0) {
      return (
        ratings.map((rat) => (
          <>
            {
              rat == 5 || rat == 4 ? <i class="fa-regular fa-star"></i> : <i class="fa-solid fa-star"></i>
            }
          </>
        )))
    }
    else {
      return (
        ratings.map((rat) => (
          <>
            {
              rat === 5 || rat === 4 || rat == 3 ? <i class="fa-regular fa-star"></i> : <i class="fa-solid fa-star"></i>
            }
          </>
        )))
    }
  }
  let [id, image, title, description, price, rating] = product;
  if(title.includes("Samsung 49-Inch CHG90 144Hz Curved")){
    title = "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor";
  }
  return (
    <div key={id} className='main-div'>
      <div className="price">
        <p className='price-tag'>Price<br/> <span>$ {price}</span></p>
      </div>
      <div className="img">
        <img src={image} alt="" srcset="" />
      </div>
      <div className="bottom">
        <h1>{title}</h1>
        <div className="rate-price">
          <div className='rating-stars'>
            {add_stars(rating)}
          </div>
        </div>
        <div className="price">
          <button className={cart.indexOf(product)===-1?`add-to-cart`:`remove-from-cart`} onClick={handlecart}>{cart.indexOf(product)===-1?"Add to cart":"Remove from cart"}<i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
    </div>
  )
}
