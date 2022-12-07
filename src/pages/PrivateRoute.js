import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import loadingGif from '../images/preloader.gif';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, user, isLoading, error } = useAuth0();
  const isUser = isAuthenticated && user;

  if (isLoading) {
    return (
      <img
        style={{ width: '12rem', margin: 'calc(50vh - 6rem) auto' }}
        src={loadingGif}
        alt="loading..."
      />
    );
  }
  if (error) {
    return <Navigate to={'*'} />;
  }

  return isUser ? children : <Navigate to="/login" />;
};
export default PrivateRoute;
