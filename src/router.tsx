import { createBrowserRouter } from "react-router";

import Layout from "./components/Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
    ],
  },
]);

export default router;
