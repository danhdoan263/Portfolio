import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "@/Layout/MainLayout";
const About = lazy(() => import("@/pages/About/About"));

//Route Element
export default function RoutesElement() {
  const routeElements = useRoutes([
    {
      path: "/Portfolio",
      element: <MainLayout />,
      children: [
        {
          path: "about",
          element: <About />,
        },
      ],
    },
  ]);
  return routeElements;
}
