import React from "react";
import CoursesNavigation from "./Navigation.tsx";
import Modules from "./Modules/index.tsx";
import { Navigate, Route, Routes } from "react-router";
import Home from "./Home/index.tsx";
import Assignments from "./Assignments/index.tsx";
import AssignmentEditor from "./Assignments/Editor.tsx";
export default function Courses() {
    return (
      <div id="wd-courses">
        <h2>Course 1234</h2>
        <hr />
      <table>
        <tr>
          <td valign="top">
            <CoursesNavigation />
          </td>
          <td valign="top">
            <Routes>
              <Route path="/" element={<Navigate to="/Kanbas/Courses/1234/Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:aid" element={<AssignmentEditor />} />
              <Route path="Quizzes" element={<h1>Quizzes</h1>} />
              <Route path="Grades" element={<h1>Grades</h1>} />
              <Route path="People" element={<h1>People</h1>} />
              <Route path="Piazza" element={<h1>Piazza</h1>} />
              <Route path="Zoom" element={<h1>Zoom</h1>} />
              </Routes>
          </td>
        </tr>
      </table>
      </div>
  );}
  
  