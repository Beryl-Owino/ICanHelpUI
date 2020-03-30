import React,{ useEffect, useState } from "react";
import Publicheader from "./Publicheader"
import Publicfooter from "./Publicfooter"
import PublicAbout from "./PublicAbout"
import { Link } from "react-router-dom";
const Public=(props)=>{
    return (
        <div >
      <Publicheader/>

  <header class="bg-primary text-white">
    <div class="container text-center">
      <h1>We shall overcome COVID-19</h1>
      <p class="lead">Yes we shall overcome this pandemic when we team up and volunteer to help each other.</p>
      <p >Click the button(s) below to register your will to help or to submit your request to the relevant authority.</p>
      <Link to="/MedicalOfficer"><button class="btn btn-success"> 
     
      I am Medical personnel</button></Link>&nbsp;
      {/* <button class="btn btn-secondary">I am infected</button>&nbsp;
      <button class="btn btn-info">I Need Help</button> */}
    </div>
  </header>
<PublicAbout/>
<Publicfooter/>      
     </div>   
      )
  }

export default Public;