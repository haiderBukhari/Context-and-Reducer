import React from 'react'
import '../CSS/Header.css'
import { Link } from 'react-router-dom';
import {CartData} from './Context/addContext';
const Header = () => {
  let {total} = CartData();
  return (
    <header>
        <div className='main-header'>
            <div>
                <Link to="/">Home Page</Link>
                <Link to="/cart" className='carts'>View Cart</Link>
            </div>
            <p>Total: <span>{total}</span></p>
        </div>
    </header>
  )
}

export default Header
