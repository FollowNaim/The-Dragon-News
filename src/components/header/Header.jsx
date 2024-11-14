import logo from "@/assets/logo.png";
import moment from "moment";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
function Nav() {
  const [breakingNews, setBreakingNews] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/category/01")
      .then((res) => res.json())
      .then((data) => setBreakingNews(data.data));
  }, []);
  return (
    <div className="flex flex-col justify-center items-center py-6 text-center">
      <Link to={"/"}>
        <div>
          <img className="max-w-xs mx-auto" src={logo} alt="" />
        </div>
      </Link>
      <div>
        <p className="text-muted-foreground pt-4 pb-3">
          Journalism Without Fear or Favour
        </p>
        <p>{moment().format("dddd, MMMM Do YYYY")}</p>
      </div>
      <div>
        <div className="bg-muted p-2 flex items-center mt-6">
          <Button className="bg-destructive rounded-none " size="lg">
            Latest
          </Button>
          <Marquee pauseOnHover={true}>
            <div className="space-x-10">
              {breakingNews.map((bn) => (
                <Link to={`/news/${bn._id}`} key={bn._id}>
                  <span>{bn.title}</span>
                </Link>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Nav;