import { createBrowserRouter } from "react-router";

import Layout from "./components/Layout/Layout";
import CourseListPage from "./pages/Courses/CourseListPage";
import UserRegisterPage from "./pages/Users/UserRegisterPage";
import EnrollmentsPage from "./pages/Enrollments/EnrollmentsPage";

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
      {
        path: "users/register",
        element: <UserRegisterPage />,
      },
      {
        path: "enrollments",
        element: <EnrollmentsPage />,
        loader: async () => {
          const res = await fetch(
            "http://localhost:3000/users?page=1&limit=100",
          );
          return res.json();
        },
      },
    ],
  },
]);

export default router;
