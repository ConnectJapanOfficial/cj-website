import { createBrowserRouter, RouterProvider } from "react-router";
import ErrorPage from "../pages/ErrorPage";
import Bars from "../components/Loaders/Bars";
import Home from "../pages/Home";
import Root from "../pages/Root";
import Achievements from "../pages/Achievements";
import Apply from "../pages/Apply";
import LanguageProvider from "../contexts/LanguageProvider";
import Guides from "../pages/Guides";
import About from "../pages/About";
import ServicesDetails from "../pages/ServicesDetails";


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
        Component: ServicesDetails,
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
  return (
    <LanguageProvider>
      <RouterProvider router={routes} />
    </LanguageProvider>
  );
};

export default Routes;
