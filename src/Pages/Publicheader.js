import React,{ useEffect, useState } from "react";
import './scrolling-nav.css';
const Publicheader=(props)=>{
    return (        
<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#/">I can help</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#/">Home </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#/About">About </a>
          </li>
         
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#/Login">Login </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#/Register">Register </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
       
    
        
         
       
      )
  }

export default Publicheader;