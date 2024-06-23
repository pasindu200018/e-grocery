import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';

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
    element: <App />,
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

  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
