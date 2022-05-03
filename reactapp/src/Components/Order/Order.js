import React, { useEffect, useState } from "react";
// import Data from './Data.json'
import "./order.css";
import axios from 'axios';
import PostForm from "./PostForm";

const Order = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:8081/order/admin/orders').then(response => {
        setPosts(response.data)
        console.log(posts.quantity)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])


  return (
    //       <div className='PCard'>
    //         {posts.map((product) =>{
    //           return(
    //         <div className="card" style={{ width:"18rem",padding:"30px"}}>
    //          {/* <img src={product.imageUrl} className="card-img-top" style={{ width: 230, height: 230, borderRadius: "6px" }}/> */}
    //          <div className="card-body">
    //          <h3 className="card-title">{product.productName}</h3>
    //          <h5 className="cart-subtitle">₹{product.price}</h5>
    //          <h4 className='cart-quantity'>{product.quantity} Pieces</h4>
    //     <button className="btn-addtocart">Add to cart</button>

    //   </div>
    // </div>
    //           )}
    //  )}
    //       </div>

    <div>
      

      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Total price</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {
            posts.map((product) => {
              return (

                <tr>
                  <td>{product.productName}</td>
                  <td>{product.price}</td>
                  <td>{product.totalPrice}</td>
                  <td>{product.quantity}</td>
                </tr>

              )
            })
          }
        </tbody>
      </table>
      {/* <button type="button" class="btn btn-lg">Pay Now</button> */}
      
    </div>
  )
}




export default Order;
