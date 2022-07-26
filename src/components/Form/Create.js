import React from "react";
import './../CSS/style.css'
import http from './../http'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Create = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }
   
    const submitForm = () =>{
        axios.get('/sanctum/csrf-cookie').then(response => {
            http.post('/users',inputs).then((res)=>{
                navigate('/');
            });
        });
    }

    return (
        <>
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
                    <button type="button" className="btn btn-secondary w-100" onClick={submitForm}>Submit</button>
                </div>
            </form>
        </>
    )
}
export default Create;