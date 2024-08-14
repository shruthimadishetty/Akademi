import React from 'react'
import './Left.css'
// import img1 from '../LeftComponent/leftAssets/Placeholder.png';
import {useNavigate} from 'react-router-dom'
import { FaUser } from "react-icons/fa";


const Left = () => {
    const navigate=useNavigate();
    const useName=JSON.parse(localStorage.getItem("user"));
    const handleLogout =()=>{
        localStorage.removeItem("loggedIn");
        navigate("/login")
    }
  return (
    <div className='leftComponent'>
      <div className='menu-container'>
           <div className='user-info'>
            <p className='username'>Welcome {useName.name}
            </p>
            {/* <img src={img1} alt="" /> */}
            <FaUser className='icon' size={"15%"}/>
           </div>
           <button className="button_logout" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}

export default Left
