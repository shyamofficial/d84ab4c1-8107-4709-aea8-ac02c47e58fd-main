import React, {useEffect } from 'react'
import './HomePage.css'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import  axios  from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import Cart from './Cart';
toast.configure()
export default function HomePage( {handleAddProduct}){
  const baseURL='http://localhost:8080/products/home';
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setProducts(response.data);
    });
  }, []);
    return (
      <>
      <div className='PCard'>
        
        {products.map((item) =>{
          return(
         <div className="card" style={{ width:"18rem",padding:"30px"}}>
         <img src={item.imageUrl} className="card-img-top" style={{ width: 230, height: 230, borderRadius: "6px" }}/>
         <div className="card-body">
         <h3 className="card-title">{item.productName}</h3>
         <h5 className="cart-subtitle">₹{item.price}</h5>
         <h4 className='cart-quantity'>{item.quantity} Pieces</h4>
    <button className="btn-addtocart" onClick={()=>handleAddProduct(item)}>Add to cart</button>
        
  </div>
</div>)
          }
 )}
      </div></>
    
    )
  }

