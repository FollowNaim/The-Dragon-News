import userpng from "@/assets/user.png";
import Header from "@/components/header/Header";
import RightSide from "@/components/layout-components/RightSide";
import ScrollToTop from "@/components/scroll-to-top/ScrollToTop";
import { Button } from "@/components/ui/button";
import { AuthContext } from "@/provider/AuthProvider";
import { Suspense, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

function NewsLayout() {
  const { user, handleSignOut } = useContext(AuthContext);
  return (
    <div>
      <ScrollToTop />
      <div className="mb-20 font-poppins">
        <div className="container mx-auto px-4">
          <header>
            <Header />
            <div className="flex justify-between items-center mb-4">
              <div></div>
              <div className="flex items-center gap-3">
                <img className="w-9" src={userpng} alt="" />
                {user ? (
                  <Button onClick={handleSignOut} className="rounded-none">
                    Log Out
                  </Button>
                ) : (
                  <Link to={"/auth/login"}>
                    <Button className="rounded-none">Login</Button>
                  </Link>
                )}
              </div>
            </div>
          </header>
          <main>
            <div className="grid grid-cols-12 gap-4">
              <Suspense fallback={<h1>Loading...</h1>}>
                <div className="col-span-9">
                  <Outlet />
                </div>
              </Suspense>
              <div className="col-span-3 sticky top-4 h-fit">
                <RightSide />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default NewsLayout;
