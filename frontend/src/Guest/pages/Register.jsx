import axios from 'axios'
import { AccountContextVariable } from '../../GlobalContext/AccountContext'
import React, { useState, useContext } from 'react'
import Swal from 'sweetalert2'
import { AppRoute } from '../../App'
import { Link } from 'react-router-dom'


export default function Register() {


    const { account_state, account_dispatch } = useContext(AccountContextVariable)
    //for form
    const [UserName, setUserName] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
  const [errors, setErrors] = useState({});     //validation k liye normal walidation


    const validateForm = () => {
        const errors = {};
    
        if ( !UserName.trim()) {
          errors.UserName = 'UserName is required';
        }
        if ( !Email.trim()) {
          errors.Email = 'Email is required';
        }
        if ( !Password.trim()) {
          errors.Password = 'Password is required';
        }
        
    
    
        setErrors(errors);
        return Object.keys(errors).length === 0;
      };

    const [loading, setLoading] = useState(false);


    const RegisterUser = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
          }

        const payload = {
            UserName: UserName,
            Email: Email,
            Password: Password
        };

        setLoading(true);

        try {
            const RegisterResponse = await axios.post(`${AppRoute}api/register-user`, payload);
            console.log("Register response:", RegisterResponse);

            const AfterRegisterLogin = {
                Email: Email,
                Password: Password
            };

            const json = await axios.post(`${AppRoute}api/login-user`, AfterRegisterLogin);
            console.log(json.data.token); // yahan hamara token agaya
            Swal.fire({
                title: 'Account Created',
                text: 'Thank you for Opening Account',
                confirmButtonText: 'Continue'
            });
            account_dispatch({
                type: "LOGIN",
                token: json.data.token
            });


        } catch (error) {
            console.error("Account creation failed:", error);
            // Handle error if necessary
        }

        setLoading(false);
    };



    return (

        <div style={{ backgroundColor: "#f9e0b7" }}>
            (

            <div className="d-flex flex-column ms-5">



                <h2 className='text-center pt-5'>Create Your Account:</h2>


                <div className='container d-flex justify-content-center my-5'>

                    <form className="" onSubmit={RegisterUser}>
                        <div className="title my-2">Username:</div>
                        <input
                            className="form-control"
                            placeholder="Name"
                            type="name"
                            value={UserName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        {errors.UserName && <small className="text-danger">{errors.UserName}</small>}

                        <div className="title my-2">Email Address:</div>

                        <input
                            className="form-control"
                            name="email"
                            placeholder="Email"
                            type="email"
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.Email && <small className="text-danger">{errors.Email}</small>}

                        <div className="title my-2">Set your Password:</div>

                        <input
                            className="form-control"
                            name="password"
                            placeholder="Password"
                            type="password"
                            value={Password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.Password && <small className="text-danger">{errors.Password}</small>}

                        <div>

                            <button type="submit" disabled={loading} className='btn btn-warning me-3 mt-3 w-100'>
                                {loading ? "Creating Account..." : "Create Account"}
                            </button>
                        </div>
                    </form>
                </div>

                <div className="text-sm text-center my-5">
                    Already have an account? {'   '}
                    <Link to={'/login'} className="text-decoration-none text-center text-sm hover:underline font-bold">Continue</Link>
                </div>


                <div className="text-center">
                    <img src="https://freedesignfile.com/upload/2021/08/Bakery-logo-vector.jpg"
                        style={{ width: '185px' }} alt="logo" className='rounded-circle' />
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


            )
        </div>
    )
}

