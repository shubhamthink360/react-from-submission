import React from "react";
import './../CSS/style.css'
import http from '../http'
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Edit = (props) => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    
    //*****useParams hook returns an object of key/value pairs 
    //of the dynamic params from the current url that were matched by the <Route path>*****//
    const {id} = useParams();
    //[] :: for one time call
    useEffect(() => {
        fetchUser()
    },[]);

    const fetchUser = () => {
        http.get('/users/'+id+'/edit').then((res)=>{
            setInputs({
                name:res.data.name,
                email:res.data.email,
                address:res.data.address,
                city:res.data.city,
                pin:res.data.pin
            })
        })
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }

    const submitForm = () =>{
        axios.get('/sanctum/csrf-cookie').then(response => {
        http.put('/users/'+id,inputs).then((res)=>{
            alert('Success');
            navigate('/');
        });
        });
    }

    return (
        <>
            <h2 className="mt-5">Update Details</h2>
            <form className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="inputName" className="form-label">Name<span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="inputName" placeholder="Your name" autoComplete="off" name="name" value={inputs.name} onChange={handleChange}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputEmail" className="form-label">Email<span className="text-danger">*</span></label>
                    <input type="email" className="form-control" id="inputEmail" placeholder="Your email" autoComplete="off" name="email" value={inputs.email} onChange={handleChange} />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address<span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Your address" value={inputs.address } name="address" onChange={handleChange}/>
                </div>
                
                <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">City<span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="inputCity" name="city" placeholder="Your city name" value={inputs.city} onChange={handleChange} />
                </div>
                
                <div className="col-md-6">
                    <label htmlFor="inputZip" className="form-label">Zip<span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="inputZip" name="pin" placeholder="zip code" value={inputs.pin } onChange={handleChange}/>
                </div>
                <div className="col-12">
                    <button type="button" className="btn btn-secondary w-100" onClick={submitForm}>Update</button>
                </div>
            </form>
        </>
    )
}
export default Edit;