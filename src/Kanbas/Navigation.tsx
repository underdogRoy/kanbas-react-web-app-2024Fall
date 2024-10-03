import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export default function KanbasNavigation() {
  const { pathname } = useLocation();

  // Function to determine the appropriate class for the nav links
  const getNavLinkClass = (path) => 
    `list-group-item text-center border-0 ${
      pathname.includes(path) ? "bg-white text-danger" : "text-white bg-black"
    }`;

  return (
    <div 
      id="wd-kanbas-navigation"
      style={{ width: 120 }} 
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <a 
        id="wd-neu-link" 
        target="_blank" 
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center"
      >
        <img src="/images/NEU.png" width="75px" alt="Northeastern University" />
      </a>
      <br />
      <NavLink to="/Kanbas/Account" id="wd-account-link" className={getNavLinkClass("Account")}>
        <FaRegCircleUser className="fs-1" /><br />
        Account 
      </NavLink>
      <br />
      <NavLink to="/Kanbas/Dashboard" id="wd-dashboard-link" className={getNavLinkClass("Dashboard")}>
        <AiOutlineDashboard className="fs-1 text-danger" /><br />
        Dashboard 
      </NavLink>
      <br />
      <NavLink to="/Kanbas/Course" id="wd-course-link" className={getNavLinkClass("Course")}>
        <LiaBookSolid className="fs-1 text-danger" /><br />
        Courses 
      </NavLink>
      <br />
      <NavLink to="/Kanbas/Calendar" id="wd-calendar-link" className={getNavLinkClass("Calendar")}>
        <IoCalendarOutline className="fs-1 text-danger" /><br />
        Calendar
      </NavLink>
      <br />
      <NavLink to="/Kanbas/Inbox" id="wd-inbox-link" className={getNavLinkClass("Inbox")}>
        <FaInbox className="fs-1 text-danger" /><br />
        Inbox
      </NavLink>
      <br />
      <NavLink to="/Labs" id="wd-labs-link" className={getNavLinkClass("Labs")}>
        <LiaCogSolid className="fs-1 text-danger" /><br />
        Labs
      </NavLink>
    </div>
  );
}
