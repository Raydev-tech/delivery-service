import { Navigate } from "react-router-dom";
import { supabaseClient } from "../config/supabase-client";

const ProtectedRoute = ({ children }) => {
  const session = supabaseClient.auth.session(); 

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;