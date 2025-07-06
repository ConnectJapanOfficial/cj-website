import { createBrowserRouter, RouterProvider } from "react-router";
import Bars from "../components/Loaders/Bars";
import About from "../pages/About";
import Achievements from "../pages/Achievements";
import Apply from "../pages/Apply";
import ErrorPage from "../pages/ErrorPage";
import Guides from "../pages/Guides";
import Home from "../pages/Home";
import Root from "../pages/Root";
import ServicesDetails from "../pages/ServicesDetails";
import {
  appDataLoader,
  homepageLoader,
  servicesLoader,
} from "../utilities/loaders";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    loader: appDataLoader,
    children: [
      {
        index: true,
        Component: Home,
        loader: homepageLoader,
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
        Component: ServicesDetails,
        loader: servicesLoader,
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
        path: "guides",
        Component: Guides,
        errorElement: <ErrorPage />,
        HydrateFallback: Bars,
      },
      {
        path: "about",
        Component: About,
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
