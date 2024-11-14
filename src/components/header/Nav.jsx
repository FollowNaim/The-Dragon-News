import user from "@/assets/user.png";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";

function Nav() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="w-24"></div>
        <div
          className="flex items-center gap-4 text-muted-foreground"
          id="navlinks"
        >
          <NavLink to={"/category/01"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/career"}>Career</NavLink>
        </div>
        <div className="flex items-center gap-3">
          <img className="w-9" src={user} alt="" />
          <Button className="rounded-none">Login</Button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
