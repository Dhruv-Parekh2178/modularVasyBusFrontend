import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const AdminRoute = ({children}) => {
   const {isAunthenticated , isAdmin} = useAuth();

   if(!isAunthenticated || !isAdmin ){
    return <Navigate to ="/login" replace />
   }
   return children;
}

export default AdminRoute
