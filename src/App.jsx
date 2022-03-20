import React from "react";
import { Outlet, useRoutes } from "react-router-dom";

import Header from "./components/Header";

const App = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <>
          <Header />
          <h1>Hi guys!</h1>
          <Outlet />
          <footer>footer</footer>
        </>
      ),
      children: [
        {
          path: "",
          element: <p>home page</p>,
        },
        {
          path: "/home",
          element: <p>messages page</p>,
        },
        { path: "/test", element: <p>task page</p> },
      ],
    },
  ]);

  return routes;
};

export default App;
