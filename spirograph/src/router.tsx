import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/NavBarDetailPage/Main";
import About from "./pages/NavBarDetailPage/About";
import React from "react";

const routers = createBrowserRouter([
  {
    path: "/main",
    element: <Main />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export default routers;
