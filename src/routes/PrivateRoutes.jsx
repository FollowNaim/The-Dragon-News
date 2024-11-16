import Spinner from "@/components/spinner/Spinner";
import { AuthContext } from "@/provider/AuthProvider";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoutes({ children }) {
  const { pathname } = useLocation();
  //   console.log(location);
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Spinner />;
  }
  if (!user) {
    return <Navigate state={pathname} to={"/auth/login"} />;
  }
  return (
    <>
      <Navigate to={pathname} />
      {children}
    </>
  );
}

export default PrivateRoutes;
