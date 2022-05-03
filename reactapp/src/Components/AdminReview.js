import React ,{useEffect, useState} from 'react'
import  axios  from 'axios';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { display } from '@mui/system';
import { textAlign } from '@mui/system';
import './AdminReview.css'
toast.configure()
export default function AdminReview() {
  const [rev, setRev] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8080/Review').then((response) => {
      setRev(response.data);
    });
  }, []);
  const HandleDelete = (reviewId) => {
    axios.delete(`http://localhost:8080/deleteReview/${reviewId}`).then(() => {
      toast.success("Deleted Successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        window.location.reload(false);
      }, 3000);
      
    });
  };
    return (
        <div className='Adminreview'>
        <div className='Adminreview-header'>User Reviews</div>
       <div className='PCard' style={{width:"1500px",padding:"30px",display:"flex",alignItems:"center",flexDirection:"column"}}>
        {rev.map(person =>
         
         <div class="card" style={{ width:"80rem",padding:"5px"}}>
         <div class="card-body">
         <h4 class="card-title">User Name : {person.userName}</h4>
         <h4 class="cart-subtitle">Rating :{person.rating}</h4>
         <h4 className='cart-quantity'>Quality :{person.quality}</h4>
         <h4 className='cart-userReview'>Review :{person.userReview}</h4>
          <IconButton aria-label="delete" onClick={() => {
              HandleDelete(person.reviewId);
            }}>
        <DeleteIcon />
      </IconButton> 
    
  </div>
</div>
 )}
      </div>
        </div>
  
    )
  }

