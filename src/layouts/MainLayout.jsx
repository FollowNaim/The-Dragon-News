import Header from "@/components/header/Header";
import Nav from "@/components/header/Nav";
import LeftSide from "@/components/layout-components/LeftSide";
import RightSide from "@/components/layout-components/RightSide";
import Spinner from "@/components/spinner/Spinner";
import { Suspense } from "react";
import { Outlet, useNavigation } from "react-router-dom";

function MainLayout() {
  const state = useNavigation();
  return (
    <div className="mb-20 font-poppins">
      <div className="container mx-auto px-4">
        <header>
          <Header />
          <Nav />
        </header>
        <main>
          <div className="grid md:grid-cols-12 gap-4">
            <div className="hidden md:block col-span-3 md:sticky top-4 h-fit">
              <LeftSide />
            </div>
            <Suspense fallback={<h1>Loading...</h1>}>
              <div className="order-first md:order-none col-span-12 md:col-span-6">
                {state.state === "loading" ? <Spinner /> : <Outlet />}
              </div>
            </Suspense>
            <div className="col-span-12 md:col-span-3 md:sticky top-4 h-fit">
              <RightSide />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
