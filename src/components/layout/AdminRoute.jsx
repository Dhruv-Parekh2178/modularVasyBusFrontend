import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const AdminRoute = ({children}) => {
   const {isAunthenticated , user} = useSelector((state) => state.auth);
   const isAdmin = user?.role ==="ROLE_ADMIN" || user?.role === "ADMIN";

   if(!isAunthenticated || !isAdmin ){
    return <Navigate to ="/login" replace />
   }
   return children;
}

export default AdminRoute
