import React from "react";
import { MDBDataTable } from "mdbreact";
const Table=(props)=>{  
  
    const data = {
        columns: props.columns,
        rows: props.Rows
      };
      return (
        <div className="wrapper wrapper-content animated fadeInRight">
        <div className="row" >
          <div className="col-lg-12" >
            <div className="ibox ">
              <div className="ibox-content">
              <div className="table-responsive">
                    <MDBDataTable striped bordered hover data={data} />
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        
      );
}
export default Table;