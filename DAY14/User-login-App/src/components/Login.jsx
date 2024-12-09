import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

const Login = (regLogin) => {
  const [email,setemail] = useState();
  const [password,setpassword] = useState();
  const handlelogin = (e)=>{
    e.preventDefault();
    if(email==regLogin.email && password == regLogin.password){
      alert("Login Success");
    }
    else{
      alert("Login Credentials");
    }
  }
  return (
    <div>
         <form>
        <div className="form-group">
          <label for="Email1">Email address</label>
          <input
            type="email" onChange={(e)=>{setemail(e.target.value)}}
            className="form-control"
            id="Email1"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label for="Password1">Password</label>
          <input
            type="password" onChange={(e)=>{setpassword(e.target.value)}}
            className="form-control"
            id="Password1"
            placeholder="Password"
          />
        </div>

        <button type="submit" onClick={handlelogin} className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login