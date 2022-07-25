import axios from 'axios';
import React, { useState } from 'react'

axios.defaults.baseURL = "http://127.0.0.1:8000/api";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

axios.defaults.withCredentials = true;

const Registration = () => {
    const [registerInput, setRegisterInput] = useState({
        name: '',
        email: '',
        password:''
    }) 
    const inputHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setRegisterInput({...registerInput,[name]:value})
    }
    const formHandler = (event) => {
        event.preventDefault();
        const data = {
            name:registerInput.name,
            email:registerInput.email,
            password:registerInput.password
        }
        axios.get('/sanctum/csrf-cookie').then(response => {        
            axios.post('/register',data).then(res => {

            });
        });
    }
  return (
    <>
    <div className='col-md-6 mt-5'>
        <div className='card'>
            <div className='card-header'>
                <h4>Registration Form</h4>
            </div>
            <fieldset className='border radius p-2 bg-light'>
                <form className='p-3' onSubmit={formHandler}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input type="email" className="form-control"  id="exampleInputEmail1" name='name' onChange={inputHandler} value={registerInput.name}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control"  id="exampleInputEmail1" name='email' onChange={inputHandler} value={registerInput.email}/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' onChange={inputHandler} value={registerInput.password}/>
                    </div>
                   
                    <button type="submit" className="btn btn-primary w-100">Register</button>
                </form>
            </fieldset>
        </div>
    </div>
    </>
  )
}

export default Registration