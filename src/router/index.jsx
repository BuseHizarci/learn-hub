import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutPage from "../pages/about-page";
import ContactPage from "../pages/contact-page";
import CoursesPage from "../pages/courses-page";
import EventsPage from "../pages/events-page";
import UserLayout from "../layouts/user-layout";
import HomePage from "../pages/home-pages";
import LoginPage from "../pages/login-page";

import AdminPage from "../pages/dashboard/admin-page";
import PrivateRoute from "./private-route";
import Error404Page from "../pages/errors/error404-page";
import DashboardPage from "../pages/dashboard/dashboard-page";
const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "courses",
        element: <CoursesPage />,
      },
      {
        path: "events",
        element: <EventsPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "dashboard",
        children: [
          {
            index: true,
            element: <DashboardPage />,
          },
          {
            path: "admin-management",
            element: <AdminPage />,
          },
          {
            path: "**",
            element: <Error404Page />,
          },
        ],
      },
    ],
  },
]);
const AppRouter = () => {
  return <RouterProvider router={router} />;
};
export default AppRouter;
