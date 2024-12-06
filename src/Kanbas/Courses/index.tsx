import React from "react";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { useSelector } from "react-redux";
import CoursesNavigation from "./Navigation.tsx";
import Modules from "./Modules/index.tsx";
import Home from "./Home/index.tsx";
import Assignments from "./Assignments/index.tsx";
import AssignmentEditor from "./Assignments/Editor.tsx";
import PeopleTable from "./People/Table.tsx";
import { FaAlignJustify } from "react-icons/fa6";

export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const { pathname } = useLocation();
  // const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  // const isEnrolled = enrollments.some((enrollment: any) => enrollment.course === cid);

  // if (!isEnrolled) {
  //   return <Navigate to="/Kanbas/Dashboard" />;
  // }

  const course = courses.find((course) => course._id === cid);

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to={`/Kanbas/Courses/${cid}/Home`} />} />
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
        </div>
      </div>
    </div>
  );
}