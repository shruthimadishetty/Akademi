import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router'

const Login = () => {
    const navigate=useNavigate();
    const [input,setInput]=useState({
        email:"",
        password:""
    })
    const handleLogin =(e)=>{
        e.preventDefault();
        const loggedUser=JSON.parse(localStorage.getItem('user'));
        if(
            input.email===loggedUser.email &&
            input.password===loggedUser.password
        )
        {
            localStorage.setItem("loggedIn",true);
            navigate("/")
        }
        else{
            alert("wrong email or password")
        }

    }
  return (
    <>
    <div className='login'>
    <div className="login_container">
        <h1>Login</h1>
        <form action="" className="input-container" onSubmit={handleLogin}>
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
          <button className="buttons" type="submit">Login</button>
          <p>Don't have an account?<a href="/register">Register Now</a></p>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login
