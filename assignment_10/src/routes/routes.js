import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Main from "../Layout/Main";
import AllCourses from "../Pages/AllCourses";
import Blog from "../Pages/Blog";
import Courses from "../Pages/Courses";
import CoursesDetail from "../Pages/CourseDetail";
import ErrorPage from "../Pages/ErrorPage";
import FAQ from "../Pages/FAQ";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/courses/:category_id",
        loader: ({ params }) =>
          fetch(
            `https://learners-quest.vercel.app/courses/${params.category_id}`
          ),
        element: (
          <Courses>
            <AllCourses />
          </Courses>
        ),
      },
    ],
  },
]);
