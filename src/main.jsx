import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main';
import Home from './components/Home/Home';
import Blogs from './components/Home/Blogs';
import AllToys from './components/AllToys/AllToys';
import ErrorPage from './ErrorPage/ErrorPage';
import MyToys from './components/AllToys/MyToys';
import AddToys from './components/AllToys/AddToys';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './AuthProvider/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/allToys',
        element: <AllToys></AllToys>
      },
      {
        path: '/myToys',
        element: <MyToys></MyToys>
      },
      {
        path: '/addToys',
        element: <AddToys></AddToys>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
