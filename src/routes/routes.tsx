import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "@/Layout/MainLayout";

const About = lazy(() => import("@/pages/About/About"));
// Placeholder components - you can create these later
const Projects = lazy(() => import("@/pages/Projects/Projects"));
const Contact = lazy(() => import("@/pages/Contact/Contact"));

//Route Element
export default function RoutesElement() {
  const routeElements = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "about",
          element: <About />,
        },
        {
          path: "projects",
          element: <Projects />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return routeElements;
}
