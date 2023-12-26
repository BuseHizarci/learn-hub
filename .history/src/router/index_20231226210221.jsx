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
    element: <HomePage/>,
}    ]
  },
]);
