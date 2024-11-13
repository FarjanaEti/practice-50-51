import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';


const Header = () => {
   const { user,signOutUser }=useContext(AuthContext);
   console.log(user)
  //sigmOut
  const handleSignout=()=>{
    signOutUser()
    .then(()=>{
      console.log('User sign out successfully')
    })
    .catch(error=>console.log(error.massage))
  }

    const link=<div className='font-bold text-2xl  space-x-4'>
       <NavLink className='hover:text-blue-300' to='/'>Home</NavLink>
       <NavLink className='hover:text-blue-400' to='/login'>LogIn</NavLink>
       <NavLink className='hover:text-blue-500' to='/register'>Register</NavLink>
       {
        user && 
        <NavLink className='hover:text-blue-500' to='/secret'>Secret</NavLink>
       }
     </div>                          

 return (
   <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content
         bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-x-5">
        {link}
      </ul>
    </div>
    <a className="btn btn-ghost text-3xl">Secret</a>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 gap-4">
    {link}
    </ul>
  </div>
  <div className="navbar-end">
    {
    user?<>
    <span className='btn'>{user.email}</span>
    <a onClick={handleSignout} className='btn'>Sign Out</a>
    </>:<Link className='btn' to='/login'>Login</Link>
    }
  </div>
</div>
 );
};

export default Header;