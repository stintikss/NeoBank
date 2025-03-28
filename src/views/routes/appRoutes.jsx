import { Navigate, Outlet } from "react-router-dom";
import Auth from '../pages/Auth';
import Main from '../pages/Main';
import CodeName from "../pages/CodeName";
import Test from "../pages/Test";
import StartClient from '../pages/Startclient'

export const appRoutes = [
  {
    path: "/login",
    element: <Auth />,
  },
  {
    path: "/home",
    element: <Main />,
  },
  {
    path: '/profile',
    element: <CodeName />,
  },
  {
    path: '/test',
    element: <Test />,
  },
  {
    path: '/startclient',
    element: <StartClient />,
  },
  {
    path: "*",  
    element: <Navigate to="/home" />,
  },
];
