import Nav from "@/components/header/Nav";
import { Outlet } from "react-router-dom";
function AuthLayout() {
  return (
    <div>
      <div className="container mx-auto p-4">
        <Nav />
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
