import userpng from "@/assets/user.png";
import { AuthContext } from "@/provider/AuthProvider";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../ui/button";

function Nav() {
  const { user, handleSignOut } = useContext(AuthContext);
  const handleLogOut = () => {
    // console.log("clikced log out");
    handleSignOut()
      .then(() => {
        toast.success("sign out successful");
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <div>
      <div className="flex justify-between items-center px-4 pb-4">
        <div className="flex items-center gap-2 min-w-24">
          {user?.photoURL ? (
            <>
              <img
                className="size-10 object-cover rounded-full"
                src={user?.photoURL ? user?.photoURL : userpng}
                alt=""
              />
              <p>{user?.displayName ? user?.displayName : ""}</p>
            </>
          ) : (
            ""
          )}
        </div>
        <div
          className="items-center gap-4 text-muted-foreground hidden md:flex"
          id="navlinks"
        >
          <NavLink to={"/category/01"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/career"}>Career</NavLink>
        </div>
        <div className="flex items-center gap-3">
          {!user?.photoURL ? <img className="w-9" src={userpng} alt="" /> : ""}
          {user ? (
            <Button onClick={handleLogOut} className="rounded-none">
              Log Out
            </Button>
          ) : (
            <Link to={"/auth/login"}>
              <Button className="rounded-none">Login</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
