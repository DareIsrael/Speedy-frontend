import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from "../hooks/useAuthContext"

function RouteProtection({ children }) {
  const { user } = useAuthContext();
  const navigate = Navigate();

  if (!user) {
    // User is not authenticated, redirect to the login page
    navigate('/login');
    return null; // Render nothing for this route
  }

  // User is authenticated, render the protected content
  return children;
}

export default RouteProtection;
