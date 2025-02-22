import * as React from "react";
import "@fontsource/poppins";
import Register from "./components/Authentication/Register.jsx";
import Login from "./components/Authentication/Login.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
