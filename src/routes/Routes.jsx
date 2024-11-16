import Login from "@/components/authentication/Login";
import SignUp from "@/components/authentication/SignUp";
import NewsDetails from "@/components/news-detail/NewsDetails";
import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";
import NewsLayout from "@/layouts/NewsLayout";
import { createBrowserRouter, Navigate } from "react-router-dom";
import MiddleSide from "./../components/layout-components/MiddleSide";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

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
    element: (
      <PrivateRoutes>
        <NewsLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "",
        element: <NewsDetails />,
        loader: ({ params }) =>
          fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
      },
    ],
  },
  {
    path: "/auth",
    element: (
      <PublicRoutes>
        <AuthLayout />
      </PublicRoutes>
    ),
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/signup",
        element: <SignUp />,
      },
    ],
  },
]);
export { routes };
