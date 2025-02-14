import { Navigate, Outlet } from "react-router-dom";
import Auth from '../pages/Auth';
import Main from '../pages/Main';

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
    path: "*",  // Все остальные пути ведут на /home
    element: <Navigate to="/home" />,
  },
];
