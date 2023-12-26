import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../layouts/user-layout";
import HomePage from "../pages/home-pages";
import CoursesPage from "../pages/courses-page";
import AboutPage from "../pages/about-page";
import ContactPage from "../pages/contact-page";
import EventsPage from "../pages/events-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
     
    ],
  },
]);
