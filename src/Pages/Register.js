import React,{ useEffect, useState } from "react";
import Publicheader from "./Publicheader"
import swal from 'sweetalert';
import Select from "react-select";
import useFetch from "./../Hooks/useFetch";
const Register=(props)=>{  
  const [inputs, setInputs] = useState({});
  const { state, FetchAll } = useFetch("/api/Countries");
  //const { MedicalOptions, FetchAll } = useFetch("/api/Medicalcategories");
  useEffect(()=>{
      FetchAll();
  },[])
  const sleep=(time)=>{
    return new Promise((resolve)=>setTimeout(resolve,time)
  )
}
  const handleSubmit = (event) => {
    
      event.preventDefault();
      fetch("/api/Register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"},
        body: JSON.stringify(inputs)
      })
        .then(response =>
          response.json().then(data => {              
            if (data.success) {
              swal("", "saved! Your account will be approved shortly", "success");
              sleep(3000).then(() => {
                return (window.location = "/");
              })
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
  const handleSelectChange = (UserGroup, actionMeta) => {
    setInputs(inputs => ({...inputs, [actionMeta.name]:UserGroup.value }));
   
  };
  const CompanyOptions = state.data.map((k, i) => {
    return {
      value: k.id.toString(),
      label: k.name.toString()
    };
  });
    return (
        <div >
        <Publicheader/>
        <br/>        
        <div className="container" style={{height: "100%"}}>    
        <h3 className="text-center text-success">Register here!</h3>   
        
        <form onSubmit={handleSubmit}>
        <div className="row">
        <div className="col-sm-4">
        </div>
        <div className="col-sm-4">
        <div className="form-group">
        <label>Name</label>
          <input type="text" name="Name" onChange={handleInputChange} defaultValue={inputs.Name} required className="form-control" id="exampleInputEmail1" aria-describedby="NameHelp" placeholder="Enter Name"/>
          </div> 
          </div>      
        </div>
        <div className="row">
        <div className="col-sm-4">
        </div>
        <div className="col-sm-4">
        <div className="form-group">
        <label>MobileNo</label>
          <input type="text" name="MobileNo" onChange={handleInputChange} defaultValue={inputs.MobileNo} required className="form-control" id="exampleInputEmail1" aria-describedby="NameHelp" placeholder="Enter MobileNo"/>
          </div>    
          </div>   
        </div> <div className="row">
        <div className="col-sm-4">
        </div>
        <div className="col-sm-4">
        <div className="form-group">
        <label>Email</label>
          <input type="text" name="Email" onChange={handleInputChange} defaultValue={inputs.Name} required className="form-control" id="exampleInputEmail1" aria-describedby="NameHelp" placeholder="Enter Email"/>
          </div>   
          </div>    
        </div> <div className="row">
        <div className="col-sm-4">
        </div>
        <div className="col-sm-4">
        <div className="form-group">
        <label>Password</label>
          <input type="password" name="Password" onChange={handleInputChange} defaultValue={inputs.Name} required className="form-control" id="exampleInputEmail1" aria-describedby="NameHelp" placeholder="Enter Password"/>
          </div> 
          </div>      
        </div>
        <div className="row">
        <div className="col-sm-4">
        </div>
        <div className="col-sm-4">
        <div className="form-group">
        <label>Country</label>
        <Select
            name="Country"
            defaultInputValue={inputs.Country}            
            onChange={handleSelectChange}
            options={CompanyOptions}
            required
          /></div>  
          </div>     
        </div>
        
        <div className="row">
        <div className="col-sm-5">
        </div>
        <button type="submit" className="btn btn-primary">Register</button>      
        </div>
        
      </form>       
      </div> 
      
      </div>
      )
  }

export default Register;
