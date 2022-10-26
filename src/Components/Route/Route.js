
import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    //   errorElement: <ErrorPage />,
      children: [
        // { path: "/", element: <Home /> },
        {
          path: "/courses",
          loader: () => fetch("https://next-coder-server.vercel.app/courses"),
        //   element: <Courses />,
        },
        // { path: "/blog", element: <Blog /> },
        // { path: "/register", element: <Register /> },
        // { path: "/login", element: <Login /> },
        // { path: "/faq", element: <FAQ /> },
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