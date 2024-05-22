import React, { useState, useContext } from 'react'
import axios from 'axios'
import { AccountContextVariable } from '../../GlobalContext/AccountContext'
  import { AppRoute } from '../../App'
  import { Link } from 'react-router-dom'

import Swal from 'sweetalert2'


export default function LoginPage() {

  const [Email, setEmail]= useState("")
const [Password, setPassword]= useState("")
const {account_state, account_dispatch} = useContext(AccountContextVariable)
const [loading, setLoading] = useState(false);
const [errors, setErrors] = useState({});     //validation k liye normal walidation


    const validateForm = () => {
        const errors = {};
    
        if ( !Email.trim()) {
          errors.Email = 'Email is required';
        }
        if ( !Password.trim()) {
          errors.Password = 'Password is required';
        }
        
    
    
        setErrors(errors);
        return Object.keys(errors).length === 0;
      };



const Login=async(e)=>{
  e.preventDefault()

  if (!validateForm()) {
    return;
  }

  setLoading(true);


const payload = {
  Email: Email,
  Password: Password
}

try {

  const json = await axios.post(`${AppRoute}api/login-user`, payload);
            console.log(json.data.token); // yahan hamara token agaya
            
            account_dispatch({
                type: "LOGIN",
                token: json.data.token
            });
            Swal.fire({
                title: 'Logged In Successfully',
                text: 'Welcome Back',
                confirmButtonText: 'Continue'
            }).then(() => {
            });
            
            setLoading(false);

  
} catch (error) {
  console.error("Account creation failed:", error);
  
}





}
  return (
    <div style={{ backgroundColor: "#f9e0b7" }}>

      <div className="d-flex flex-column ms-5">


        <h2 className='text-center pt-5'>Welcome Back, Please Login!</h2>


        {/* yaha hum form laga skty */}

        <div className='container d-flex justify-content-center my-5'>
          <form onSubmit={Login} >
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address:</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                />
                        {errors.Email && <small className="text-danger">{errors.Email}</small>}


            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password: </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                />
                        {errors.Password && <small className="text-danger">{errors.Password}</small>}

            </div>

            <button type="submit" disabled={loading} className='btn btn-warning me-3 mt-3 w-100'>
                                {loading ? "Logging in..." : "Log In"}
                            </button>
          </form>
        </div>
        <div className="text-sm text-center my-5">
                            Don't have an account? {'   '}
                            <Link to={'/register'} className="text-decoration-none text-center text-sm hover:underline font-bold">Continue</Link>
                        </div>

        
        <div className="text-center">
          <img src="https://freedesignfile.com/upload/2021/08/Bakery-logo-vector.jpg"
            style={{ width: '185px' }} alt="logo" className='rounded-circle'/>
          <h4 className="mt-1 mb-5 pb-1">We are The Bakers!</h4>
        </div>
      </div>


      <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
          <h4 className="mb-4 text-dark">We are more than just a Bakery!</h4>
          <p className="small mb-0 text-dark">We Follow the Traditions, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

      </div>


                </div>
    
  )
}





