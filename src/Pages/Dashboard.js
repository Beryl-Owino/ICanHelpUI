import React,{ useEffect, useState } from "react";
import Table from "../Components/Table"
import useFetch from "../Hooks/useFetch";
import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const Dashboard=(props)=>{
    const [TotalUnEmployed, setTotalUnEmployed] = useState([]);
    const [TotalEmployed, setTotalEmployed] = useState([]);
    const initialState = {
      code: "",
      name: ""
    };
    //const url = "api/MedicalOfficers";
    const { state, FetchAll } = useFetch("/api/Analystics");
    const FetchTotal = () => {
        fetch("/api/Analystics/1", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json" }
            })
            .then(res => res.json())
            .then(Data => {
                if (Data.length > 0) {
                    setTotalEmployed(Data);
                } else {
                  
                }
            })
            .catch(err => {
               
            });
    }
    const FetchTotalUnemployed = () => {
        fetch("/api/Analystics/1/1", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json" }
            })
            .then(res => res.json())
            .then(Data => {
                if (Data.length > 0) {
                    setTotalUnEmployed(Data);
                } else {
                  
                }
            })
            .catch(err => {
               
            });
    }
    useEffect(() => {
      FetchAll();
      FetchTotal();
      FetchTotalUnemployed();
    }, []);
    const options = {
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "Total Officers per Category"
        },
        data: [{
            type: "pie",
            startAngle: 75,
            toolTipContent: "<b>{label}</b>: {y}",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}",
            dataPoints:state.data
        }]
    }
    const optionsUnemployed = {
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "Unemployed Officers per Category "
        },
        data: [{
            type: "pie",
            startAngle: 75,
            toolTipContent: "<b>{label}</b>: {y}",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}",
            dataPoints:TotalUnEmployed
        }]
    }
    return (
        <div id="content" className="content">
			
        <h1 class="page-header mb-3">MedicallOfficers</h1>
  <div>
   
       {/* <div  style={{backgroundColor:"white"}}> */}
       <div class="row">
          <div class="col-lg-4 col-6">          
            <div class="small-box bg-info">
              <div class="inner">
              {TotalEmployed.filter(name => name.employed=="Yes").map(filteredName => (
                
                 <h3>{filteredName.Total}</h3>
            ))}
               
                <p>Total Medical officers</p>
              </div>
              <div class="icon">
                <i class="ion ion-bag"></i>
              </div>
               </div>
          </div>
         
          <div className="col-lg-4 col-6">
            
            <div className="small-box bg-success">
              <div className="inner">
              {TotalEmployed.filter(name => name.employed=="Yes").map(filteredName => (
                
                <h3>{filteredName.count}</h3>
           ))}
              

                <p>Total eployed</p>
              </div>
              <div class="icon">
                <i class="ion ion-bag"></i>
              </div>
              </div>
          </div>
         
          <div className="col-lg-4 col-6">
          
            <div className="small-box bg-warning">
              <div className="inner">
              {TotalEmployed.filter(name => name.employed=="No").map(filteredName => (
                
                <h3>{filteredName.count}</h3>
           ))}
              

                <p>Total Uneployed</p>
              </div>
              <div className="icon">
                <i className="ion ion-person-add"></i>
              </div>
                </div>
          </div>
         
        </div>
        <br/>
       <div class="row">
           
          <div class="col-sm-6">          
            <div class="small-box bg-info">
            <CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
             </div>
          </div>
       
          <div className="col-sm-6">
            
          <div class="small-box bg-info">
          <CanvasJSChart options = {optionsUnemployed}
				/* onRef={ref => this.chart = ref} */
			/>
             </div>
          </div>
         
        
         
        </div>
 {/* </div> */}
       </div>           
</div>

    
     
    )
}
export default Dashboard;