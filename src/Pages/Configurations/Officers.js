import React,{ useEffect, useState } from "react";
import Table from "../../Components/Table"
import useFetch from "../../Hooks/useFetch";
import {  Link } from "react-router-dom";
const Officers=(props)=>{
    const [Editing, setEditing] = useState(false);
    const initialState = {
      code: "",
      name: ""
    };
    const url = "api/MedicalOfficers";
    const { state, FetchAll } = useFetch(url);
    // const { HandleDelete, HandleEditData } = useDelete(url);
    // const { values, HandleChange, reset, FillData } = useInput(initialState);
  
    useEffect(() => {
      FetchAll();
    }, []);
    const ColumnData = [
        {
          label: "Name",
          field: "name",
          sort: "asc"
        },
        {
          label: "Employed",
          field: "employed",
          sort: "asc"
        },
        {
          label: "Qualification",
          field: "qualification",
          sort: "asc"
        },
        {
          label: "Registered",
          field: "registered",
          sort: "asc"
        },
        {
          label: "Category",
          field: "category",
          sort: "asc"
        },
        {
          label: "Country",
          field: "country",
          sort: "asc"
        }
      ];
    return (
      <div id="content" className="content">
			
			 <h1 class="page-header mb-3">MedicallOfficers</h1>
       <div  >
        
			<div  style={{backgroundColor:"white"}}>
      <Table Rows={state.data} columns={ColumnData} />
      </div>
			</div>           
   </div>
      
       
     
    )
}
export default Officers;