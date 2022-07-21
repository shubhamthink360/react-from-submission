import React from "react";
import './../CSS/style.css'
import http from '../http.js'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const IndexTable = () => {
  const [users, setUsers] = useState([]);
//[] :: passed a array
  useEffect(() =>{
    fetchAllUsers();
  },[]);

  const fetchAllUsers = () => {
    http.get('/users').then(res=>{
      setUsers(res.data);
    });
  }
  const deleteUser = (id) => {
    http.delete('/users/'+id).then(res=>{
      fetchAllUsers();
    });
  }
    return (
        <>
          <h2 className="mt-5">User Data</h2>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">City</th>
                <th scope="col">Pin Code</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user,index) => (
              <tr key={user.id}>
                <th scope="row">{++index}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>{user.city}</td>
                <td>{user.pin}</td>
                <td>
                  <Link to={{ pathname:"/edit/"+user.id }}><button className="btn btn-secondary btn-sm m-1"><i className="bi bi-pencil mx-2"></i></button></Link>
                  <button className="btn btn-default btn-sm border"><i className="bi bi-trash mx-2" onClick={()=>{deleteUser(user.id)}}></i></button>
                </td>
              </tr>
              ))}
             
            
            </tbody>
          </table>
        </>
    )
}
export default IndexTable;