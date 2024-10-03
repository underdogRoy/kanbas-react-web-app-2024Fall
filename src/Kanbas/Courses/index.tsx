import React from "react";
import CoursesNavigation from "./Navigation.tsx";
import Modules from "./Modules/index.tsx";
import { Navigate, Route, Routes } from "react-router";
import Home from "./Home/index.tsx";
import Assignments from "./Assignments/index.tsx";
import AssignmentEditor from "./Assignments/Editor.tsx";
import PeopleTable from "./People/Table.tsx";
import { FaAlignJustify } from "react-icons/fa6";
export default function Courses() {
    return (
      <div id="wd-courses">
        <h2 className="text-danger">
      <FaAlignJustify className="me-4 fs-4 mb-1" />
      Course 1234 </h2> <hr />
      <div className="d-flex">
      <div className="d-none d-md-block">
            <CoursesNavigation />
            </div>
            <div className="flex-fill">
            <Routes>
              <Route path="/" element={<Navigate to="/Kanbas/Courses/1234/Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:aid" element={<AssignmentEditor />} />
              <Route path="Quizzes" element={<h1>Quizzes</h1>} />
              <Route path="Grades" element={<h1>Grades</h1>} />
              <Route path="People" element={<PeopleTable />} />
              <Route path="Piazza" element={<h1>Piazza</h1>} />
              <Route path="Zoom" element={<h1>Zoom</h1>} />
              </Routes>
              </div></div>
      </div>
  );}
  
  