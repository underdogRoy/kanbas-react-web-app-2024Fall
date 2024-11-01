import Profile from "./Profile.tsx";
import Signin from "./Signin.tsx";
import Signup from "./Signup.tsx";
import { Routes, Route, Navigate } from "react-router";
import AccountNavigation from "./Navigation.tsx";
import React from "react";
import { useSelector } from "react-redux";


export default function Account() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    return (
        <div id="wd-account-screen">
            <h2>Account</h2>
            <table>
                <tbody>
                    <tr>
                        <td valign="top">
                            <AccountNavigation />
                        </td>
                        <td valign="top">
                            <Routes>
                                <Route path="/" element={<Navigate to={ currentUser ? "/Kanbas/Account/Profile" : "/Kanbas/Account/Signin" }/>}/>
                                
                                <Route path="/Signin" element={<Signin />} />
                                <Route path="/Profile" element={<Profile />} />
                                <Route path="/Signup" element={<Signup />} />
                            </Routes>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}
