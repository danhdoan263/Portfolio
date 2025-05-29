import { useRoutes } from "react-router-dom";
import HomePage from "../pages/Home/Home";
import MainLayout from "@/Layout/MainLayout";

//Route Element
export default function RoutesElement() {
  const routeElements = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
      ],
    },
  ]);
  return routeElements;
}
