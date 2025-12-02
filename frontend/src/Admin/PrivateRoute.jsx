import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
  const isAuthenticatedTq = useSelector(state => state.auth.isAuthenticatedTq);
  
  return (
    isAuthenticatedTq ? element : <Navigate to='/Login' replace />
  );
};



export default PrivateRoute;
