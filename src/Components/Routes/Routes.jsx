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
        element: <Dasboard></Dasboard>,
        children: [
            {
                path: "userProfile",
                element: <UserProfile></UserProfile>
            },
            {
                path: "userAnnaousment",
                element: <Annaousement></Annaousement>

            },
            {
                path: "memberProfile",
                element: <MemberProfile></MemberProfile>
            },
            {
                path: "makePayment",
                element: <MakePayment></MakePayment>
            },
            {
                path: "paymentHistory",
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: "memberAnnaousment",
                element: <Annaousement></Annaousement>
            },
            {
                path: "manageMember",
                element: <ManageMember></ManageMember>
            },
            {
                path: "agreementRequest",
                element: <AgreementResuest></AgreementResuest>
            },
            {
                path: "makeAnnousement",
                element: <MakeAnnaousement></MakeAnnaousement>
            }
        ]
    }
])

export default Routes;