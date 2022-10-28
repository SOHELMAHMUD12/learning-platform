import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import CheekOut from "../CheckOut/Checkout";
import Courses from "../Courses/Courses";
import Faq from "../Faq/Faq";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Notfound from "../Notfound/Notfound";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Signup from "../SignUp/Signup";
import CourseDetails from "../CourseDetails/CourseDetails"

export const router = createBrowserRouter([
   
    {
      path: "/",
      element: <Main />,
      errorElement: <Notfound />,
      children: [
        { path: "/home", element: <Home /> },
        {
          path: "/courses",
          loader: () => fetch("http://localhost:5000/courses"),
          element: <Courses />,
        },
        { path: "/blog", element: <Blog /> },
        { path: "/register", element: <Signup /> },
        { path: "/login", element: <Login /> },
        { path: "/faq", element: <Faq /> },
        {
          path: "option/:id",
          loader: async ({ params }) => {
            return fetch(
              `http://localhost:5000/courses/${params.id}`
            );
          },
          element: <CourseDetails />,
        },
        {
          path: "course/:name",
          loader: async ({ params }) => {
            return fetch(
              `http://localhost:5000/courses/${params.name}`
            );
          },
          element: (
            <PrivateRoute>
              <CheekOut />
            </PrivateRoute>
          ),
        },
        { index: true, element: <Home /> },
      ],
    },

  ]);