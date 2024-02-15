import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Shared/Secret/Secret";
import Dashbord from "../Layout/Dashbord";
import Card from "../Pages/Dashbord/Card/Card";
import AddItems from "../Pages/Dashbord/AddItems/AddItems";
import AllUsers from "../Pages/Dashbord/AllUsers/AllUsers";
import AdmenRouts from "./AdmenRouts";
import ManageItems from "../Pages/Dashbord/ManageItems/ManageItems";
import Pyment from "../Pages/Dashbord/Pyment/Pyment";
import UserHome from "../Pages/Dashbord/UserHome/UserHome";
import AdmonHome from "../Pages/Dashbord/AdminHome/AdmonHome";
import Bookong from "../Pages/Dashbord/Booking/Bookong";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/menu',
            element: <Menu></Menu>
        },
        {
            path: '/order',
            element: <Order></Order>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
            path: '/secret',
            element: <PrivateRoute><Secret></Secret></PrivateRoute>
        }
      ]
      
    },
    {
      path: 'dashbord',
      element: <PrivateRoute><Dashbord></Dashbord></PrivateRoute>,
      children: [
        //normal users routs
        {
          path: 'userHome',
          element: <UserHome></UserHome>
        },
        {
          path: 'cart',
          element: <Card></Card>
        },
        {
          path: 'payment',
          element: <Pyment></Pyment>
        },


        //admin only Routs
        {
           path: 'adminHome',
            element: <AdmenRouts><AdmonHome></AdmonHome></AdmenRouts>
        },
        {
           path: 'addItems',
            element: <AdmenRouts><AddItems></AddItems></AdmenRouts>
        },
        {
           path: 'manageItems',
            element: <AdmenRouts><ManageItems></ManageItems></AdmenRouts>
        },
        {
           path: 'booking',
            element: <AdmenRouts><Bookong></Bookong></AdmenRouts>
        },
        {
          path: 'users',
          element: <AdmenRouts><AllUsers></AllUsers></AdmenRouts>
        }
      ]
    }
  ]);