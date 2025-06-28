import { createBrowserRouter, RouterProvider } from "react-router";
import ErrorPage from "../pages/ErrorPage";
import Bars from "../components/Loaders/Bars";
import Home from "../pages/Home";
import Root from "../pages/Root";
import Services from "../pages/Services";
import Achievements from "../pages/Achievements";
import Blogs from "../pages/Blogs";
import Apply from "../pages/Apply";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        errorElement: <ErrorPage />,
        HydrateFallback: Bars,
      },

      {
        path: "/*",
        Component: ErrorPage,
        errorElement: <ErrorPage />,
        HydrateFallback: Bars,
      },

      {
        path: "services",
        Component: Services,
        errorElement: <ErrorPage />,
        HydrateFallback: Bars,
      },

      {
        path: "achievements",
        Component: Achievements,
        errorElement: <ErrorPage />,
        HydrateFallback: Bars,
      },

      {
        path: "blogs",
        Component: Blogs,
        errorElement: <ErrorPage />,
        HydrateFallback: Bars,
      },
      {
        path: "apply",
        Component: Apply,
        errorElement: <ErrorPage />,
        HydrateFallback: Bars,
      },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={routes} />;
};

export default Routes;
