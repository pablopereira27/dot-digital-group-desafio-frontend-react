import { createBrowserRouter } from "react-router";

import Layout from "./components/Layout/Layout";
import CourseListPage from "./pages/Courses/CourseListPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "courses",
        element: <CourseListPage />,
        loader: async () => {
          const now = new Date().toISOString().split("T")[0];
          const start_date = now;
          const end_date = now;

          const res = await fetch(
            "http://localhost:3000/courses?page=1&limit=10&status=disponível&start_date=" +
              start_date +
              "&end_date=" +
              end_date,
          );
          return res.json();
        },
      },
    ],
  },
]);

export default router;
