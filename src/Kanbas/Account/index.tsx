import Profile from "./Profile.tsx";
import Signin from "./Signin.tsx";
import Signup from "./Signup.tsx";
import { Routes, Route, Navigate } from "react-router";
import AccountNavigation from "./Navigation.tsx";
import React from "react";


export default function Account() {
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
                                <Route path="/" element={<Navigate to="/Kanbas/Account/Signin" />} />
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
