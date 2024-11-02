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
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import * as db from "../../Database/Database.tsx";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment, deleteAssignment }
  from "./reducer.ts";
import { useState } from "react";
import AssignmentButton from "./Assignmentbutton.tsx";
import ProtectedContent from "../../Account/ProtectedContent.tsx";



export default function Assignments({assignment, assignments,setAssignment} : {setAssignment: (assignment: any) => void;
  assignment : any; assignments : any[];
}) {
  const { cid } = useParams();
  //const assignments = db.assignments;
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
          <a 
        href={`/#/Kanbas/Courses/${cid}/Assignments/${cid}`}>
          <ProtectedContent roles={['FACULTY']}><button
            id="wd-add-assignment"
            className="px-4 py-2 bg-danger text-white rounded hover:bg-red-700"
            
          >
            + Assignment
          </button></ProtectedContent></a>
        </div><br/>

        {/* Modules List */}
        <ul id="wd-modules" className="list-group rounded-0 w-100">
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            {/* Module Header */}
            <div className="wd-title p-3 ps-2 bg-secondary flex items-center">
              <BsGripVertical className="me-2 fs-3" />
              <IoMdArrowDropdownCircle className="me-2"/>
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
            {assignments.filter((assignment:any)=> assignment.course===cid)
            .map((assignment:any)=>(
            
              <li className="wd-lesson list-group-item p-3 ps-1">
              <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <MdAssignment className="me-2 fs-5 text-success" />
                <div className="p-2">
                  <a
                    className="wd-assignment-link"
                    href={`/#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                    onClick={() => setAssignment(assignment)}>
                    {assignment&&assignment.title}
                  </a>
                  <br />
                  <span className="text-danger">Multiple Modules</span> | <span className="fw-bold">Not available until</span> May 6 at 12:00am |<br/> 
                  <span className="fw-bold">Due</span> May 13 at 11:59pm | 100pts
                </div>
                </div>
                <ProtectedContent roles={['FACULTY']}><AssignmentButton assignment={assignment} setAssignment={setAssignment} /></ProtectedContent>
                </div></li>

                
                ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
