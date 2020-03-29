import React,{ useEffect, useState } from "react";
import Table from "./../../Components/Table"
import useFetch from "../../Hooks/useFetch";
import {  Link } from "react-router-dom";
const Countries=(props)=>{
    const [Editing, setEditing] = useState(false);
    const initialState = {
      code: "",
      name: ""
    };
    const url = "api/Countries";
    const { state, FetchAll } = useFetch(url);
    // const { HandleDelete, HandleEditData } = useDelete(url);
    // const { values, HandleChange, reset, FillData } = useInput(initialState);
  
    useEffect(() => {
      FetchAll();
    }, []);
    const ColumnData = [
        {
          label: "Names",
          field: "name",
          sort: "asc"
        },
        {
          label: "a2_ISO",
          field: "a2_ISO",
          sort: "asc"
        },
        {
          label: "a3_UN",
          field: "a3_UN",
          sort: "asc"
        },
        
        {
          label: "nuM_UN",
          field: "nuM_UN",
          sort: "asc"
        },
         {
          label: "dialinG_CODE",
          field: "dialinG_CODE",
          sort: "asc"
        }
      ];
    return (
      <div id="content" className="content">
			<ol class="breadcrumb float-xl-right">
				<li class="breadcrumb-item"> <Link to="/">Home </Link> </li>
				<li class="breadcrumb-item active">Countires</li>
			</ol>		
			 <h1 class="page-header mb-3">Countires</h1>
			<div  style={{backgroundColor:"white"}}>
      <Table Rows={state.data} columns={ColumnData} />
			</div>           
   </div>
      
       
     
    )
}
export default Countries;