import React, { useState } from "react";
import './Register.css'
import { useNavigate } from "react-router";

function Register() {
  const navigate=useNavigate();
  const [input,setInput]=useState({
    name:"",
    email:"",
    password:""
  })
  const handleSubmit =(e)=>{
   e.preventDefault();
   localStorage.setItem("user",JSON.stringify(input));
   navigate('/login')
  }
  return (
    <>
      <div className="register_container">
        <h1>Register</h1>
        <form action="" className="input-container" onSubmit={handleSubmit}>
          <div className="input-box">
            <label>Name</label><br></br>
            <input type="text" 
            name="name"
            value={input.name}
            onChange={(e)=>
              setInput(
                {
                  ...input,[e.target.name]:e.target.value
                }
              )
            }/>
          </div>
          <div className="input-box">
            <label>Email</label><br></br>
            <input type="email" 
            name="email"
            value={input.email}
            onChange={(e)=>
              setInput(
                {
                  ...input,[e.target.name]:e.target.value
                }
              )
            } />
          </div>
          <div className="input-box">
           <label>Password</label><br></br>
           <input type="password"
           name="password"
           value={input.password}
           onChange={(e)=>
             setInput(
               {
                 ...input,[e.target.name]:e.target.value
               }
             )
           }/>
          </div>
          <div className='button_container'>
          <button className="buttons" type="submit">Register Now</button>
          <p>Already have an account? <a href="/login">Login now</a></p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
