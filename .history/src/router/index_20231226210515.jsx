import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../layouts/user-layout";
import HomePage from "../pages/home-pages";
import CoursesPage from "../pages/courses-page";
import AboutPage from "../pages/about-page";
import ContactPage from "../pages/contact-page";


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
        element: "<CoursesPage />",
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
