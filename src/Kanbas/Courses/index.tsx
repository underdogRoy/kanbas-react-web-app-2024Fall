import React from "react";
import CoursesNavigation from "./Navigation.tsx";
import Modules from "./Modules/index.tsx";
import { Navigate, Route, Routes,useParams,useLocation } from "react-router";
import Home from "./Home/index.tsx";
import Assignments from "./Assignments/index.tsx";
import AssignmentEditor from "./Assignments/Editor.tsx";
import PeopleTable from "./People/Table.tsx";
import { FaAlignJustify } from "react-icons/fa6";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment,updateAssignment,deleteAssignment } from "./Assignments/reducer.ts";
//import { courses } from "../Database/Database.tsx";
export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  const [assignment, setAssignment] = useState({
    _id: "-1",
    title: "New Assignment",
    points: 100,
    description: "New Assignment Description",
    due: "2024-10-20T23:59",
    course: cid,
    availableFrom: "2024-10-13T23:59",
    availableUntil: "2024-10-20T23:59"
  });
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();
    return (
      <div id="wd-courses">
        <h2 className="text-danger">
      <FaAlignJustify className="me-4 fs-4 mb-1" />
      {course && course.name}  &gt; {pathname.split("/")[4]}
      </h2> <hr />
      <div className="d-flex">
      <div className="d-none d-md-block">
            <CoursesNavigation />
            </div>
            <div className="flex-fill">
            <Routes>
              <Route path="/" element={<Navigate to="/Kanbas/Courses/1234/Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments assignments={assignments}
      assignment={assignment}
      setAssignment={setAssignment}/>} />
              <Route path="Assignments/:aid" element={<AssignmentEditor assignments={assignments}
      assignment={assignment}
      setAssignment={setAssignment}/>} />
              <Route path="Quizzes" element={<h1>Quizzes</h1>} />
              <Route path="Grades" element={<h1>Grades</h1>} />
              <Route path="People" element={<PeopleTable />} />
              <Route path="Piazza" element={<h1>Piazza</h1>} />
              <Route path="Zoom" element={<h1>Zoom</h1>} />
              </Routes>
              </div></div>
      </div>
  );}
  
  