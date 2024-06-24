import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import Layout from "./Layout";
import ProductPage from "./pages/ProductPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <LoginPage/>
    },
    {
    path: "/register",
    element: <RegisterPage/>
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/product",
          element: <ProductPage />,
        },
        {
          path:"/cart",
          element:<>Cart</>
        },
        {
          path:"/checkout",
          element:<>Checkout</>
        },
        {
          path:"/orders",
          element:<>Orders</>
        },
      ],
    },
    ]);


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
