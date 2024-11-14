import NewsDetails from "@/components/news-detail/NewsDetails";
import MainLayout from "@/layouts/MainLayout";
import NewsLayout from "@/layouts/NewsLayout";
import { createBrowserRouter, Navigate } from "react-router-dom";
import MiddleSide from "./../components/layout-components/MiddleSide";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Navigate to={"/category/01"} />,
      },
      {
        path: "/category/:id",
        element: <MiddleSide />,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/news/:id",
    element: <NewsLayout />,
    children: [
      {
        path: "",
        element: <NewsDetails />,
        loader: ({ params }) =>
          fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
      },
    ],
  },
]);
export { routes };
