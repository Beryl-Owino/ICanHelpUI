import React from "react";
import { Link } from "react-router-dom";
const Sidebar=()=>{
    return(<div id="sidebar" className="sidebar">
    <div data-scrollbar="true" data-height="100%">
        <ul className="nav">
            <li className="nav-profile">
                <a href="javascript:;" data-toggle="nav-profile">
                    <div className="cover with-shadow"></div>
                    {/* <div className="image">
                        <img src="../assets/img/user/user-13.jpg" alt="" />
                    </div> */}
                    <div className="info">
                        <b className="caret pull-right"></b>{localStorage.getItem("UserName")}
                        
                    </div>
                </a>
            </li>
        
        </ul>
        <ul className="nav"><li className="nav-header">Navigation</li>
            <li className="has-sub active">
                <a href="javascript:;">
                    <b className="caret"></b>
                    <i className="fa fa-address-book"></i>
                    <span>Menu</span>
                </a>
                <ul className="sub-menu">                    
                    <li><Link to={{pathname:"/home",Title:"Countries"}} >Dashboard </Link></li>
                    <li><Link to={{pathname:"/approveuser"}} >Approve Users </Link></li>
                    <li><Link to={{pathname:"/MedicallOfficers",Title:"Countries"}} >Medical officers </Link></li>
                            
                </ul>
            </li>

            
        

        </ul>
        
    </div>
    
</div>)
}
export default Sidebar;