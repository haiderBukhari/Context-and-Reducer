import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Cart } from './Container/Cart';
import { Route, Routes } from 'react-router-dom';
import Header from './Container/Header';
import CartList from './Container/CartList';
function App() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  let [data, setdata] = useState([]);
  let [product, setproduct] = useState([]);
  const fetchData = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    setdata(data);
  };
  let moveupward = ()=>{
    scrollToTop();   
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<main className='all-data'>{
        data.map((arr) => (
          <>
            <Cart key={arr.id} product={[arr.id, arr.image, arr.title, arr.description, arr.price, arr.rating.rate]} />
          </>
        ))
      }
      </main>}/>
        <Route path='/cart' element={<CartList/>}/>
      </Routes>
      <i className="fa-sharp fa-solid fa-arrow-up up-arrow" onClick={moveupward}></i>
    </>
  );
}
export default App;
