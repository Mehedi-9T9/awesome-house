import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import Apertments from '../Pages/Apertments/Apertments';
import Login from '../Pages/Authintication/Login';
import Rejister from '../Pages/Authintication/Rejister';
import Dasboard from '../Layout/Dasboard/Dasboard';
import UserProfile from '../Pages/UserPages/UserProfile';
import MemberProfile from '../Pages/MemberPages/MemberProfile';
import ManageMember from '../Pages/AdminPages/ManageMember';
import AgreementResuest from '../Pages/AdminPages/AgreementResuest';
import MakeAnnaousement from '../Pages/AdminPages/MakeAnnaousement';
import Annaousement from '../Pages/UserPages/Annaousement';
import MakePayment from '../Pages/MemberPages/MakePayment';
import PaymentHistory from '../Pages/MemberPages/PaymentHistory';
import AdminProfile from '../Pages/AdminPages/AdminProfile';
import UserRoute from '../PrivateRoute/UserRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import MemberRoute from '../PrivateRoute/MemberRoute';
import AdminRoute from '../PrivateRoute/AdminRoute';
import ManageCoupons from '../Pages/AdminPages/ManageCoupons';

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
    },
    {
        path: "dasboard",
        element: <PrivateRoute><Dasboard></Dasboard></PrivateRoute>,
        children: [
            {
                path: "userProfile",
                element: <UserRoute><UserProfile></UserProfile></UserRoute>
            },
            {
                path: "userAnnaousment",
                element: <UserRoute><Annaousement></Annaousement></UserRoute>

            },
            {
                path: "memberProfile",
                element: <MemberRoute><MemberProfile></MemberProfile></MemberRoute>
            },
            {
                path: "makePayment",
                element: <MemberRoute><MakePayment></MakePayment></MemberRoute>
            },
            {
                path: "paymentHistory",
                element: <MemberRoute><PaymentHistory></PaymentHistory></MemberRoute>
            },
            {
                path: "memberAnnaousment",
                element: <MemberRoute><Annaousement></Annaousement></MemberRoute>
            },
            {
                path: "adminProfile",
                element: <AdminRoute><AdminProfile></AdminProfile></AdminRoute>
            },
            {
                path: "manageMember",
                element: <AdminRoute><ManageMember></ManageMember></AdminRoute>
            },
            {
                path: "agreementRequest",
                element: <AdminRoute><AgreementResuest></AgreementResuest></AdminRoute>
            },
            {
                path: "makeAnnousement",
                element: <AdminRoute><MakeAnnaousement></MakeAnnaousement></AdminRoute>
            },
            {
                path: "manageCoupons",
                element: <ManageCoupons></ManageCoupons>
            }
        ]
    }
])

export default Routes;