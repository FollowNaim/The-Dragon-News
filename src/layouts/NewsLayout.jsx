import Header from "@/components/header/Header";
import RightSide from "@/components/layout-components/RightSide";
import ScrollToTop from "@/components/scroll-to-top/ScrollToTop";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

function NewsLayout() {
  return (
    <div>
      <ScrollToTop />
      <div className="mb-20 font-poppins">
        <div className="container mx-auto px-4">
          <header>
            <Header />
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
