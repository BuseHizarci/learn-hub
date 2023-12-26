import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../layouts/user-layout";
import HomePage from "../pages/home-pages";

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
        element: "<CoursePage />",
      },
      {
        path: "about",
        element: "<AboutPage />",
      },
      {
        path: "contact",
        element: "<ContactPage />",
      },
      {
        path: "events",
        element: "<EventsPage />",
      },
      {
        path: "*",
        element: "<NotFoundPage />",
      },
    ],
  },
]);
