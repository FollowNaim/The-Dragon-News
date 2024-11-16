import Spinner from "@/components/spinner/Spinner";
import { AuthContext } from "@/provider/AuthProvider";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

function PublicRoutes({ children }) {
  const { state } = useLocation();
  const { loading, user } = useContext(AuthContext);
  let pathname = state ? state : "/";
  //   console.log(user, loading);
  if (loading) return <Spinner />;
  //   console.log(pathname);
  if (user) return <Navigate state={pathname} to={pathname} />;
  return children;
}

export default PublicRoutes;
