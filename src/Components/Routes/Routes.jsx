import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import Apertments from '../Pages/Apertments/Apertments';
import Login from '../Pages/Authintication/Login';
import Rejister from '../Pages/Authintication/Rejister';

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,

        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/apertments",
                element: <Apertments></Apertments>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/rejister",
                element: <Rejister></Rejister>
            }
        ]
    }
])

export default Routes;