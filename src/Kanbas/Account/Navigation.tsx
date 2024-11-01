import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];

  const { pathname } = useLocation();

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <Link 
        to="/Kanbas/Account/Signin" 
        className={`list-group-item ${pathname.includes("Signin") ? "active" : "text-danger"} border border-0`}
      >
        Signin
      </Link> 
      <br />
      <Link 
        to="/Kanbas/Account/Signup" 
        className={`list-group-item ${pathname.includes("Signup") ? "active" : "text-danger"} border border-0`}
      >
        Signup
      </Link> 
      <br />
      <Link 
        to="/Kanbas/Account/Profile" 
        className={`list-group-item ${pathname.includes("Profile") ? "active" : "text-danger"} border border-0`}
      >
        Profile
      </Link> 
      <br />
    </div>
  );
}
