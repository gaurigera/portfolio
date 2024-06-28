import {  RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/portfolio/",
    element: <App />,
    children: [
      {
        path: "/portfolio/",
        element: <Layout />,
      },
    ],
  },
]);

export default function App() {
  return (
    <main className="font-mono">
      <RouterProvider router={router} />
    </main>
  );
}
