import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../layouts/user-layout";
import HomePage from "../pages/home-pages";
import CoursesPage from "../pages/courses-page";
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
      {
        path: "courses",
        element: <CoursesPage />,
      },
      {
        path: "events",
        element: <EventsPage />,
      },
      {
        path: "abo",
        element: <HomePage />,
      }
     
    ],
  },
]);
