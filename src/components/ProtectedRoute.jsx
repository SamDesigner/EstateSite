// src/components/ProtectedRoute.js
import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../firebase";

const ProtectedRoute = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen for Firebase Auth state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => unsubscribe(); // cleanup
  }, []);

  if (loading) return <div>Loading...</div>; // Optional: loading state

  // If user exists, render nested routes
  // Otherwise, redirect to login
  return currentUser ? <Outlet /> : <Navigate to="/admin/login" replace />;
};

export default ProtectedRoute;
