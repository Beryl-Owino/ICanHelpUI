import React from 'react';
import HomePage from "./Components/Header"
import Sidebar from "./Components/Sidebar"
import { HashRouter, Route, Link,Switch } from "react-router-dom";
import Countries from "./Pages/Configurations/Countries"
import Officers from "./Pages/Configurations/Officers"


import Login from "./Pages/Login"
import Register from "./Pages/Register"

import Public from "./Pages/Public"
import PublicAbout from "./Pages/PublicAbout"
import MedicalOfficer from "./Pages/MedicalOfficer"
import Logout from "./Logout"
function App() {
  
  let UserCategory = localStorage.getItem("UserCategory");
  if (UserCategory=="1") {
    return (
      <div id="page-container" className="fade page-sidebar-fixed page-header-fixed">
        <HomePage/>        
        <HashRouter>
        <Sidebar/>        
          <Switch>
            <Route path="/MedicallOfficers" exact component={Officers} />
            <Route path="/home" exact component={Countries} />
            <Route path="/Logout" exact component={Logout} />
            
          </Switch>          
          </HashRouter> 
        
      </div>
    );
  }else{
    return (
      <div id="page-container" className="fade page-sidebar-fixed page-header-fixed">  
       <HashRouter>   
            <Route path="/" exact component={Public} />  
            <Route path="/About" exact component={PublicAbout} />
            <Route path="/MedicalOfficer" exact component={MedicalOfficer} /> 
            <Route path="/Login" exact component={Login} /> 
            <Route path="/Register" exact component={Register} /> 
            
            </HashRouter>   
      </div>
    );
  }
 
}

export default App;
