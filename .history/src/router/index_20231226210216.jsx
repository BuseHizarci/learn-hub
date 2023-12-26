import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../layouts/user-layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
        
{
    index: true,
    element: <UserLayout />,
}    ]
  },
]);
