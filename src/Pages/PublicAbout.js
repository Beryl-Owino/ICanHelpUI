import React,{ useEffect, useState } from "react";
import Publicheader from "./Publicheader"
import Publicfooter from "./Publicfooter"

const PublicAbout=(props)=>{
    return (
        <div >
      <Publicheader/> 
  <section id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h2>About I CAN HELP</h2>
          <p className="lead">This is a great place to register as a medical personel who is ready and willing to help other medicall officers to fight Covid-19 
          or to request medical assistance incase you feel like you have Covid-19 like symptoms from the 
          nearest medical facility or the government.</p>
          
        </div>
      </div>
    </div>
  </section> 
     </div>
        
         
       
      )
  }

export default PublicAbout;