import React from "react";
import {
  Link,
  Route,
  Router,
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";
import Root from "./pages/root";

const Routing = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    },
  ]);
  return <RouterProvider router={router} />
  
};
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}

export default Routing;
