import React, { useContext, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../context/auth/authContext';

const PrivateRoute = () => {
  const { isAuthenticated, loading, loadUser } = useContext(AuthContext);
  useEffect(() => {
    loadUser();
  }, []);

  return isAuthenticated && !loading ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateRoute;
