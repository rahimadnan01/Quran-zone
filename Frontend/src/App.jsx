import * as React from "react";
import "@fontsource/poppins";
import Register from "./components/Authentication/Register.jsx";
import Login from "./components/Authentication/Login.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Course from "./pages/Course.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Contact from "./pages/Contact.jsx";
import CourseDetail from "./pages/CourseDetail.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import DashboardCourses from "./components/UI/DashboardCourses.jsx";
import ClassesTable from "./components/UI/UserClasses.jsx";
import AccountDetailsForm from "./components/UI/UserAccount.jsx";
const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/courses",
    element: <Course />,
  },
  {
    path: "/aboutUs",
    element: <AboutUs />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/courses/:courseId",
    element: <CourseDetail />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/User-courses",
    element: <DashboardCourses />,
  },
  {
    path: "/User-classes",
    element: <ClassesTable />,
  },
  {
    path: "/User-account",
    element: <AccountDetailsForm />,
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
