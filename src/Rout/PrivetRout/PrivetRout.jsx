import React, { Children, createContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRout = ({children}) => {
     const {user}=createContext(AuthContext)    
     
     if(user){
        return children;                      
     }
  return (
     <Navigate to='/secret'></Navigate>
   );
};

export default PrivetRout;