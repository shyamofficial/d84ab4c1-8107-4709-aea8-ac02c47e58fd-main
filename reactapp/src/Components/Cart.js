import { alignProperty } from '@mui/material/styles/cssUtils'
import { textAlign } from '@mui/system'
import { display } from '@mui/system'
import React, { useEffect } from 'react'
import { useState } from 'react'
import './Cart.css'
export default function Cart(props) {
  const {  onAdd, onRemove } = props;
  const [count,setCount]=useState(0);
  
  const handleRemoveItem = idx => {
    // assigning the list to temp variable
    const temp = [...props.cartItems];

    // removing the element using splice
    temp.splice(idx, 1);

    // updating the list
    props.setCartItems(temp);
}
  return (
    
    <div className='cartcard-items'>
      <div className='cart-items-header'><h4>Cart items</h4></div>
      {props.cartItems.length === 0 && <h4>Cart is empty</h4>}
        {props.cartItems.map((item) => {
            return(
              <div className="cartcard" style={{ width:"30rem",padding:"10px"}}>
              <img src={item.imageUrl} className="cartcard-img-top" style={{ width: 80, height: 80, borderRadius: "6px" }}/>
              <div className="cartcard-body">
              <h4 className="cartcard-title">{item.productName}</h4>
              <h4 className="cartcard-price">₹{item.price}</h4>
            
       </div>
       <div>{item.quantity}</div>
       
      <button className='plusbutton' onClick={() => onAdd(item)}>+</button>
      <button className='minusbutton' onClick={() => onRemove(item)}>-</button>
      <button className='removebutton' onClick={() => handleRemoveItem(item)}>X</button>
     </div>
            
        )})}
        {/* <div>{props.cartItems.productName}</div> */}
        {props.cartItems.length !== 0 && <button className='orderbutton'>place order</button>}
      </div>
  )
}
