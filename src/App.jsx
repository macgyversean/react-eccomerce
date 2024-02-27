import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Items, { loader as itemLoader } from "./routes/Items";
import ErrorPage from "./pages/ErrorPage";
import Cart from "./routes/Cart";
import Home from "./routes/Home";
import SingleItem, { loader as singleitemLoader } from "./routes/SingleItem";
const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Items",
        element: <Items />,
        loader: itemLoader,
      },
      {
        path: "/Items/:slug",
        element: <SingleItem />,
        loader: singleitemLoader,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
