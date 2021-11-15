import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../context/auth/authContext';

const PrivateRoute = () => {
  const { isAuthenticated, loading } = useContext(AuthContext);
  console.log(isAuthenticated, loading);
  return isAuthenticated && !loading ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateRoute;
