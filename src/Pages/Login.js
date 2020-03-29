import React,{ useEffect, useState } from "react";
import Publicheader from "./Publicheader"
import swal from 'sweetalert';
const Login=(props)=>{  
  const [inputs, setInputs] = useState({});
  const handleSubmit = (event) => {
    
    event.preventDefault();
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs)
    })
      .then(response =>
        response.json().then(data => {              
          if (data.success) {
            console.log(data.userdata)
            localStorage.setItem("UserName",inputs.Email);
            localStorage.setItem("UserData", JSON.stringify(data.userdata));
            localStorage.setItem("UserCategory", data.userdata.role);
            localStorage.setItem("xtoken", data.token);
            return (window.location = "#/home");
            //window.location.reload(); 
          } else {
            swal("", data.message, "error");
          }
        })
      )
      .catch(err => {           
        swal("", "Failed", "error");
      });
} 
  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    
  }
    return (
        <div >
        <Publicheader/>
        <br/>        
        <div className="container" style={{height: "100%"}}>    
        <h3 className="text-center text-success">Login here!</h3>   
        <br></br> 
        <form onSubmit={handleSubmit}>
        <div className="row">
        <div className="col-sm-4">
        </div>
        <div className="col-sm-4">
        <div className="form-group">
        <label>Email</label>
          <input type="text" name="Email" onChange={handleInputChange} defaultValue={inputs.Email} required className="form-control" id="exampleInputEmail1" aria-describedby="NameHelp" placeholder="Enter Email"/>
          </div> 
          </div>      
        </div>
        <div className="row">
        <div className="col-sm-4">
        </div>
        <div className="col-sm-4">
        <div className="form-group">
        <label>Password</label>
          <input type="password" name="Password" onChange={handleInputChange} defaultValue={inputs.Password} required className="form-control" id="exampleInputEmail1" aria-describedby="NameHelp" placeholder="Enter Password"/>
          </div> 
          </div>      
        </div>
        <br/>
        <div className="row">
        <div className="col-sm-5">
        </div>
        <button type="submit" className="btn btn-primary">Login</button>      
        </div>
        
      </form>       
      </div> 
      
      </div>
      )
  }

export default Login;
