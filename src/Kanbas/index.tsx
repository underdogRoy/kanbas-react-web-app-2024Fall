import React from "react";

import { Routes, Route, Navigate } from "react-router";
import Account from "./Account/index.tsx";
import Dashboard from "./Dashboard.tsx";
import KanbasNavigation from "./Navigation.tsx";
import Courses from "./Courses/index.tsx";
import ProtectedRoute from "./Account/ProtectedRoute.tsx";
import * as db from "./Database/Database.tsx";
import { useState } from "react";
import "./styles.css";
export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>(db.courses);
  const [course, setCourse] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
  });
  const addNewCourse = () => {
    setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
  };
  const deleteCourse = (courseId: any) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <div id="wd-kanbas">
      <KanbasNavigation />
      <div className="wd-main-content-offset p-3">
            <Routes>
              <Route path="/" element={<Navigate to="/Kanbas/Account" />} />
              <Route path="/Account/*" element={<Account />} />
              <Route path="/Dashboard" element={
            <ProtectedRoute><Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/></ProtectedRoute>
          } />

              <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses}/></ProtectedRoute>} />
              <Route path="/Calendar" element={<h1>Calendar</h1>} />
              <Route path="/Inbox" element={<h1>Inbox</h1>} />
            </Routes>

    </div>
    </div>
);}



