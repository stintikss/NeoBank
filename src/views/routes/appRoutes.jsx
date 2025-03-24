import { Navigate, Outlet } from "react-router-dom";
import Auth1 from '../pages/Auth1';
import Main from '../pages/Main';
import CodeName from "../pages/CodeName";
import Test from "../pages/Test";
import StartClient from '../pages/Startclient'
import History from '../pages/History'
import Admin from '../../content/Admin'
import Support from '../pages/Support'
import Transfer from '../pages/Transfer'

export const appRoutes = [
  {
    path: "/login",
    element: <Auth1 />,
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
    path: '/history',
    element: <History />,
  },
  {
    path: '/admin',
    element: <Admin />,
  },
  {
    path: '/support',
    element: <Support />,
  },
  {
    path: "transfer/*",  
    element: <Transfer />
  },
  {
    path: "*",  
    element: <Navigate to="/home" />,
  },
];
