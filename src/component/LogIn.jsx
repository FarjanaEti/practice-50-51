import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const LogIn = () => {
    const {signInUser,signInwithGoogle}=useContext(AuthContext);
    const navigate=useNavigate();
     //state
     const [success,setSuccess]=useState(false);
     
     //log in with email and password
     const handleLogin=e=>{
      e.preventDefault();

      const email=e.target.email.value;
      const password=e.target.pass.value;
      console.log(email,password)
      
      setSuccess(false)
      signInUser(email,password)
      .then(res=>{
        console.log(res)
        e.target.reset();
        setTimeout(() => {
          navigate('/');
        }, 3000); 
       setSuccess(true)
      })
      .catch(error=>console.log(error))
     }  
     //log in with google
     const handleGoogle=()=>{
      signInwithGoogle()
      .then(res=>{
        console.log(res.user)
        navigate('/')
      })
      .catch(error=>{
        console.log(error.massage)
      })
     }

  return (
  <div className="card  w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='pass' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>

        <p onClick={handleGoogle} className='btn'>Log in with Google</p>
        {
          success?<p className='text-xl font-bold text-green-900'>User logIn Successfully <br /> Now going to home page</p> 
          :<p className='text-pink-200 font-bold'>New to this website? Please <Link to='/register'>Register</Link> First</p>
        }
        
      </form>
    </div>
 );
};

export default LogIn;