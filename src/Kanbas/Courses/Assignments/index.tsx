import React from "react";
import { Search, MoreVertical, GripVertical } from "lucide-react";
import ModulesControls from "../Modules/ModulesControls.tsx";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons.tsx";
import ModuleControlButtons from "../Modules/ModuleControlButtons.tsx";
import { MdAssignment } from 'react-icons/md';
import { FaMagnifyingGlass } from "react-icons/fa6";
import "./AssignmentStyles.css";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoEllipsisVertical } from "react-icons/io5";

export default function Assignments() {
  return (
    <div>
      <div id="wd-assignments">
      {/* Wrapping all JSX inside a single parent div */}
      <div className="input-group search-bar-container">
        <span className="input-group-text"><HiMagnifyingGlass /></span>
      <input
        type="text"
        placeholder="Search for Assignment"
        className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

        {/* Buttons */}

          <button
            id="wd-add-assignment-group"
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            + Group
          </button>
          <button
            id="wd-add-assignment"
            className="px-4 py-2 bg-danger text-white rounded hover:bg-red-700"
          >
            + Assignment
          </button>
        </div><br/>

        {/* Modules List */}
        <ul id="wd-modules" className="list-group rounded-0 w-100">
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            {/* Module Header */}
            <div className="wd-title p-3 ps-2 bg-secondary flex items-center">
              <BsGripVertical className="me-2 fs-3" />
              Assignment
              
              <div className="float-end">
        
      <span className="rounded-box p-3">
        40% of Total
      </span>
      <BsPlus className="ms-2" />
      <IoEllipsisVertical className="fs-4" />
    </div>
            </div>
            
            {/* Assignment List */}
      
            <ul className="wd-lessons list-group rounded-0">
              <li className="wd-lesson list-group-item p-3 ps-1">
              <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <MdAssignment className="me-2 fs-5 text-success" />
                <div className="p-2">
                  <a
                    className="wd-assignment-link"
                    href="#/Kanbas/Courses/1234/Assignments/123"
                  >
                    A1
                  </a>
                  <br />
                  <span className="text-danger">Multiple Modules</span> | <span className="fw-bold">Not available until</span> May 6 at 12:00am |<br/> 
                  <span className="fw-bold">Due</span> May 13 at 11:59pm | 100pts
                </div>
                </div>
                <LessonControlButtons />
                </div></li>

                <li className="wd-lesson list-group-item p-3 ps-1">
              <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <MdAssignment className="me-2 fs-5 text-success" />
                <div className="p-2">
                  <a
                    className="wd-assignment-link"
                    href="#/Kanbas/Courses/1234/Assignments/123"
                  >
                    A2
                  </a>
                  <br />
                  <span className="text-danger">Multiple Modules</span> | <span className="fw-bold">Not available until</span> May 13 at 12:00am |<br/> 
                  <span className="fw-bold">Due</span> May 20 at 11:59pm | 100pts
                </div>
                </div>
                <LessonControlButtons />
                </div></li>

                <li className="wd-lesson list-group-item p-3 ps-1">
              <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <MdAssignment className="me-2 fs-5 text-success" />
                <div className="p-2">
                  <a
                    className="wd-assignment-link"
                    href="#/Kanbas/Courses/1234/Assignments/123"
                  >
                    A3
                  </a>
                  <br />
                  <span className="text-danger">Multiple Modules</span> | <span className="fw-bold">Not available until</span> May 20 at 12:00am |<br/> 
                  <span className="fw-bold">Due</span> May 27 at 11:59pm | 100pts
                </div>
                </div>
                <LessonControlButtons />
                </div></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
