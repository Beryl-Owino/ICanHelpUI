import { useState } from 'react';
import swal from 'sweetalert';
const usePostData = (url = ``, data = {}) => {   
        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzdGV2ZSIsImp0aSI6ImIyNmJjZDdhLWI2M2MtNDhjZC1iZjE2LWM2NjFjNzVhN2QwYyIsImV4cCI6MTU4MjU0NjE2NSwiaXNzIjoiaHR0cDovL2NpdGltYXguY28ua2UiLCJhdWQiOiJodHRwOi8vY2l0aW1heC5jby5rZSJ9.DCGQKiV_BESHJDAbJsNckFpwfD9K1mOVYHVwwR4WyBE" //localStorage.getItem("token")
          },
          body: JSON.stringify(data)
        })
          .then(response =>
            response.json().then(data => {              
              if (data.errors==null) {
                swal("Saved!", "saved!", "success");
                 window.location.reload(); 
              } else {
                swal("Saved!", data.errors.Name[0], "error");
              }
            })
          )
          .catch(err => {           
            swal("", "Failed", "error");
          });
      }

 
export default usePostData;