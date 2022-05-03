import React, {  useState} from 'react'
import {Navbar,Nav,Button,Container} from 'react-bootstrap'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	NavLink,
    Navigate
} from 'react-router-dom';
import './NavbarComp.css';
import Cart from './Cart';
import HomePage from './HomePage';
import MyOrder from './MyOrder';
import AdminReview from './AdminReview';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
export default function NavbarComp () {
  const [orgcartItems, setOrgcartItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const handleAddProduct =(product)=>{
    const exist = cartItems.find((x) => x.productId === product.productId);
    if(exist){
      toast.warning("item already added")
    }
    else{
    toast.success("item added to the cart");
    orgcartItems.push(product);
    product.quantity=1;
    cartItems.push(product);
    }
  }
  const onAdd = (product) => {
    
    const exist = cartItems.find((x) => x.productId === product.productId);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.productId === product.productId ? { ...exist, quantity: parseInt(exist.quantity) + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.productId === product.productId);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.productId !== product.productId));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.productId === product.productId ? { ...exist, quantity: parseInt(exist.quantity) - 1 } : x
        )
      );
    }
  };
  console.log(cartItems);
    return (
        <Router>
      <div>
      <nav
      className="Navbar"
      style={{ backgroundColor: "whitesmoke", boxShadow: 10 }}
    >
      <h1>Frozen Cup </h1>
      <ul>
        <li>
          <NavLink to="/Home" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Cart" activeClassName="active">
            Cart
          </NavLink>
        </li>
        <li>
          <NavLink to="/MyOrder" activeClassName="active">
            Order
          </NavLink>
        </li>
        <li>
        <NavLink to="/Review" activeClassName="active">
            Review
          </NavLink>
        </li>
        <div className='btn'>
        <button className='button-83'>Logout</button> 
        </div>
      </ul>
      
    </nav> 
     </div>
      <div>
      <Routes cartItems={cartItems} handleAddProduct={handleAddProduct}>
        
          <Route path="" element={<Navigate to="/Home"/>}/>
          <Route path="/MyOrder" element={< MyOrder />}/>
          <Route path="/Home" element={<HomePage handleAddProduct={handleAddProduct}/>}/>
          <Route path="/Cart" element={< Cart  cartItems={cartItems} setCartItems={setCartItems} onAdd={onAdd}
          onRemove={onRemove}/>}/>
          <Route path="Review" element={<AdminReview/>}/>
        </Routes>
      </div>
      </Router>
    )
  }