
import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import Courses from "../Courses/Courses";
import Faq from "../Faq/Faq";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Notfound from "../Notfound/Notfound";
import Signup from "../SignUp/Signup";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <Notfound />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/courses",
          loader: () => fetch("https://next-coder-server.vercel.app/courses"),
          element: <Courses />,
        },
        { path: "/blog", element: <Blog /> },
        { path: "/signup", element: <Signup /> },
        { path: "/login", element: <Login /> },
        { path: "/faq", element: <Faq /> },
        {
          path: "option/:id",
          loader: async ({ params }) => {
            return fetch(
              `https://next-coder-server.vercel.app/option/${params.id}`
            );
          },
        //   element: <CourseDetails />,
        },
        {
          path: "course/:name",
          loader: async ({ params }) => {
            return fetch(
              `https://next-coder-server.vercel.app/course/${params.name}`
            );
          },
        //   element: <CheekOut />,
        },
      ],
    },
  ]);