import React,{ useEffect, useState } from "react";
import Publicheader from "./Publicheader"
import Publicfooter from "./Publicfooter"
import useFetch from "./../Hooks/useFetch";
import swal from 'sweetalert';
import Select from "react-select";
const MedicalOfficer=(props)=>{  
  const [inputs, setInputs] = useState({});
  const sleep=(time)=>{
    return new Promise((resolve)=>setTimeout(resolve,time)
  )
}
  const handleSubmit = event => {   
      event.preventDefault();    
    fetch("/api/MedicalOfficers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"},
      body: JSON.stringify(inputs)
    })
      .then(response =>
        response.json().then(data => {              
          if (data.success) {
            swal("", "saved!", "success");
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
  const { state, FetchAll } = useFetch("/api/Countries");
  //const { MedicalOptions, FetchAll } = useFetch("/api/Medicalcategories");
  useEffect(()=>{
      FetchAll();
  },[])
  const handleSelectChange = (UserGroup, actionMeta) => {
    setInputs(inputs => ({...inputs, [actionMeta.name]:UserGroup.value }));
   
  };
  const handleInputChange = (event) => {
    event.persist();
    const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
    setInputs(inputs => ({...inputs, [name]: value}));
    
  }
  const CompanyOptions = state.data.map((k, i) => {
      return {
        value: k.id.toString(),
        label: k.name.toString()
      };
    });
 
  const EmployedOptions=[{
    value: "Yes",
    label: "Yes"
  },
  {
    value: "No",
    label: "No"
  }]
  const  QualificationOptions=[{
    value: "Certificate",
    label: "Certificate"
  },
  {
    value: "Degree",
    label: "Degree"
  },,
  {
    value: "Higher Diploma",
    label: "Higher Diploma"
  },
  {
    value: "Masters",
    label: "Masters"
  },
  {
    value: "PHD",
    label: "PHD"
  }]

  const SelectCategories=()=>{
    const { state, FetchAll } = useFetch("/api/Medicalcategories");
    const CategoryOptions= state.data.map((k, i) => {
      return {
        value: k.id.toString(),
        label: k.description.toString()
      };
    });
    useEffect(()=>{
      FetchAll();
  },[])
    return (
      <Select
            name="Category"
            defaultInputValue={inputs.Category}            
            onChange={handleSelectChange}
            options={CategoryOptions}
           
          />
    )
  }

    return (
        <div>
        <Publicheader/>
        <br/>
        
        <div className="container" style={{height:"100%"}}>    
        <h3 className="text-center text-success">Register as Medical Personnel</h3>   
        <br></br> 
        <form onSubmit={handleSubmit}>
        <div className="row">
        <div className="col-sm-1">
        <label>Name</label></div>
        <div className="col-sm-4">
        <div className="form-group">
         
          <input type="text" name="Name" onChange={handleInputChange} defaultValue={inputs.Name} required className="form-control" id="exampleInputEmail1" aria-describedby="NameHelp" placeholder="Enter Name"/>
          </div>
        </div>
        <div className="col-sm-2">
        <label>Email address</label>
        </div>
        <div className="col-sm-4">
        <div className="form-group">
        
          <input type="email" name="Email" onChange={handleInputChange} defaultValue={inputs.Email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
         </div>
        </div>
        </div>

        <div className="row">
        <div className="col-sm-1">
        <label>Category</label>
        </div>
        <div className="col-sm-4">

        <div className="form-group">
      
          <SelectCategories/>
           </div>
        </div>
        <div className="col-sm-2">
        <label>Country</label>
        </div>
        <div className="col-sm-4">
        <div className="form-group">
        
          <Select
            name="Country"
            defaultInputValue={inputs.Country}            
            onChange={handleSelectChange}
            options={CompanyOptions}
            required
          />
          </div>
        </div>
        </div>
        <div className="row">
        <div className="col-sm-1">
        <label>Mobile</label>
        </div>
        <div className="col-sm-4">
        <div className="form-group">
         
          <input type="text" name="Mobile" onChange={handleInputChange} value={inputs.Location}  className="form-control" id="exampleInputEmail1" aria-describedby="LocationHelp" placeholder="Enter Mobile"/>
          </div>
        </div>
        <div className="col-sm-2">
        <label>Address</label>
        </div>
        <div className="col-sm-4">
        <div className="form-group">
         
          <input type="text" name="Address" onChange={handleInputChange} value={inputs.Address}className="form-control" id="Address" placeholder="Address"/>
        </div>
        </div>
        </div>

        <div className="row">
        <div className="col-sm-1">
        <label>Employed</label>
        </div>
        <div className="col-sm-4">
        <div className="form-group">
        
          <Select
            name="Employed"
            defaultInputValue={inputs.Employed}            
            onChange={handleSelectChange}
            options={EmployedOptions}
            required
          />
          </div>
        </div>
        <div className="col-sm-2">
        <label>Graduation Date</label>
        </div>
        <div className="col-sm-4">
        <div className="form-group">
          
          <input type="date" name="GraduationDate" onChange={handleInputChange} value={inputs.GraduationDate}className="form-control" />
        </div>
        </div>
        </div>

        <div className="row">
        <div className="col-sm-1">
        <label>Highest Qualification</label>
        </div>
        <div className="col-sm-4">
        <div className="form-group">
         
          <Select
            name="Qualification"
            defaultInputValue={inputs.Qualification} 
            // value={inputs.Qualification}            
            onChange={handleSelectChange}
            options={QualificationOptions}
            required
          />
          </div>
        </div>
        <div className="col-sm-2">
       
        </div>
        <div className="col-sm-4">
        <div className="form-group">
        <div className="form-check">
          <input type="checkbox" onChange={handleInputChange} className="form-check-input" name="Registered" id="exampleCheck1"/>
          <label className="form-check-label" >Registered with regulatory body  </label>
        </div>
         </div>
        </div>
        </div>     
        <div className="row">
        <div className="col-sm-10"></div>  
        <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>       
      </div> 
      <br/>
      <Publicfooter/> 
      </div>
      )
  }

export default MedicalOfficer;
