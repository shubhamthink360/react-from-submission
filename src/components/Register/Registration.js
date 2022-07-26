import axios from 'axios';
import React, { useState } from 'react'

const Registration = () => {
    const [registerInput, setRegisterInput] = useState({
        name: '',
        email: '',
        password:'',
        error_list:[],
    });
    const inputHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setRegisterInput({...registerInput,[name]:value})
    }
    const formHandler = (e) => {
        e.preventDefault();

        const data = {
            name:registerInput.name,
            email:registerInput.email,
            password:registerInput.password
        }
        
         axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`api/register`,data).then(res => {
                
                if(res.data.status === 200){
                
                }
                else{
                    alert("hello ");
                    setRegisterInput({...registerInput,  error_list:res.data.errors});
                }
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
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" name='name' onChange={inputHandler} value={registerInput.name}/>
                        <span>{registerInput.error_list.name}</span>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control"  id="exampleInputEmail1" name='email' onChange={inputHandler} value={registerInput.email}/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        <span>{registerInput.error_list.email}</span>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' onChange={inputHandler} value={registerInput.password}/>
                        <span>{registerInput.error_list.password}</span>
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