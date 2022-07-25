import React, { useState } from 'react'

const Login = () => {
    const [inputValue, setInputValue] = useState({});
    const inputHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputValue(values => ({...values,[name]:value}));
    }
    
    const formSubmitHandler = (event) => {
        event.preventDefault();
    }
  return (
    <>
        <div className='col-md-6 mt-5'>
            <div className='card'>
                <div className='card-header'>
                    <h4 className='text-primary'>Login Form</h4>
                </div>
                <fieldset className='border radius p-2 bg-light'>
                    <form className='p-3' onSubmit={formSubmitHandler}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" name='email' value={inputValue.email} onChange={ inputHandler } />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" name='password' value={inputValue.password} onChange={ inputHandler }/>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Submit</button>
                    </form>
                </fieldset>
            </div>
        </div>
    </>
  )
}

export default Login