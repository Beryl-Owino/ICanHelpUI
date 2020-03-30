import React,{ useEffect, useState } from "react";
import Table from "../Components/Table"
import useFetch from "../Hooks/useFetch";
import swal from 'sweetalert';
const Approveuser=(props)=>{
    const [Editing, setEditing] = useState(false);
    const initialState = {
      code: "",
      name: ""
    };
    const url = "/api/Register";
    const { state, FetchAll } = useFetch(url);
    // const { HandleDelete, HandleEditData } = useDelete(url);
    // const { values, HandleChange, reset, FillData } = useInput(initialState);
  
    useEffect(() => {
      FetchAll();
    }, []);
  const  handleEdit = k => {
    fetch("/api/Register/"+k.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"}
      })
        .then(response =>
          response.json().then(data => {              
            if (data.success) {
              swal("", "Approved", "success");
              
            } else {
              swal("", data.message, "error");
            }
          })
        )
        .catch(err => {           
          swal("", "Failed", "error");
        });
      };
   const   handleDelete = k => {
    fetch("/api/Register/"+k.id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"}
      })
        .then(response =>
          response.json().then(data => {              
            if (data.success) {
              swal("", "Deleted", "success");
              
            } else {
              swal("", data.message, "error");
            }
          })
        )
        .catch(err => {           
          swal("", "Failed", "error");
        });
      };
     
    const ColumnData = [
        {
          label: "Name",
          field: "name",
          sort: "asc"
        },
        {
          label: "Email",
          field: "email",
          sort: "asc"
        },
        {
          label: "Mobile",
          field: "mobile",
          sort: "asc"
        },
        {
          label: "Approved",
          field: "approved",
          sort: "asc"
        },
        {
          label: "Role",
          field: "role",
          sort: "asc"
        },
        {
          label: "Action",
          field: "action",
          sort: "asc"
        }
      ];
      let Rowdata1 = [];
    
      const Rows = state.data;
  
      if (Rows.length > 0) {
        Rows.map((k, i) => {
          let Rowdata = {
            name: k.name,
            email: k.email,
            mobile: k.mobile,
            approved: k.approved,
            role: k.role,         
           
            action: (
              <span>
              
                &nbsp;
               
                  <a
                    className="text-blue"
                    style={{ color: "#007bff" }}
                    onClick={e => handleEdit(k, e)}
                  >
                    Approve |
                  </a>
                   &nbsp;
                  <a
                    className="text-red"
                    style={{ color: "#f44542" }}
                    onClick={e => handleDelete(k, e)}
                  >
                    Delete
                  </a>               
              </span>
            )
          };
          Rowdata1.push(Rowdata);
        });
      }
    return (
      <div id="content" className="content">
			
			 <h1 class="page-header mb-3">Users</h1>
       <div>
        
			<div  style={{backgroundColor:"white"}}>
      <Table Rows={Rowdata1} columns={ColumnData} />
      </div>
			</div>           
   </div>
      
       
     
    )
}
export default Approveuser;