import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route } from 'react-router-dom';
import { RootState } from '../../store/store';

interface PrivateRouteProps {
  element: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const token = useSelector((state: RootState) => state.auth.token);

  return token ? element : <Navigate to="/login" replace />;
};

export default PrivateRoute;
