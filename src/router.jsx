
import { createBrowserRouter } from "react-router-dom";
import instance from "./API/AxiosInstance";

import Navcom from "./Components/Navcom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Products from "./Pages/Products";

const productsLoader = async () => {
  const response = await instance.get("/products/category/jewelery");
  return response.data;
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navcom />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "Products",
        element: <Products />,
        loader: productsLoader,
      },
    ],
  },
]);

export default routes;
