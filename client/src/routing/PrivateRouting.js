import React, { useContext, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Spinner from '../components/layout/Spinner';
import AuthContext from '../context/auth/authContext';

const PrivateRoute = () => {
  const { isAuthenticated, loading, loadUser } = useContext(AuthContext);
  useEffect(() => {
    loadUser();
  }, []);

  if (loading) return <Spinner />;

  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateRoute;
