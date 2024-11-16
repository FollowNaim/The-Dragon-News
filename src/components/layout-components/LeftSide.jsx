import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function LeftSide() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);
  return (
    <div className="p-4">
      <div>
        <h4 className="font-medium text-lg">All Category</h4>
        <div className="flex flex-col gap-3 mt-6" id="category">
          {categories.map((c) => (
            <NavLink
              to={`/category/${c.category_id}`}
              className="bg-transparent px-4 py-2"
              key={c._id}
            >
              {c.category_name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
