import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Register = () => {
  const [name,setname]=useState();
  const [email,setemail] = useState();
  const [password,setpassword] = useState();
  const data ={ name, email, password };
  const handleregister = (e) =>{
    e.preventDefault();
    alert("user Register");
    regData(data);
  };
  return (
    <div>
      {JSON.stringify(data)}
      <form>
        <div className="form-group">
          <label for="name">Name</label>
          <input
            type="text"  onChange={(e)=>{setname(e.target.value)}}
            className="form-control"
            id="name"
            placeholder="Enter Name"
          />
        </div>
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

        <button type="submit" onClick={handleregister} className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
