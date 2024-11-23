import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { MdAssignment } from 'react-icons/md';
import { FaTrash } from "react-icons/fa6";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoEllipsisVertical } from "react-icons/io5";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import LessonControlButtons from "../Modules/LessonControlButtons.tsx";
import ProtectedContent from "../../Account/ProtectedContent.tsx";
import * as assignmentsClient from './client.ts';
import { 
  setAssignments, 
  addAssignment, 
  updateAssignment, 
  deleteAssignment 
} from "./reducer.ts";
import "./AssignmentStyles.css";

// Define the Assignment interface
interface Assignment {
  _id: string;
  title: string;
  description?: string;
  points?: number;
  due_date?: string;
  available_from_date?: string;
  available_until_date?: string;
  course: string;
}

export default function Assignments() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchAssignments = async () => {
    try {
      const assignments = await assignmentsClient.findAssignmentsForCourse(cid as string);
      dispatch(setAssignments(assignments));
    } catch (error) {
      console.error("Error fetching assignments:", error);
    }
  };

  useEffect(() => {
    if (cid) {
      fetchAssignments();
    }
  }, [cid]);

  const handleCreateAssignment = async () => {
    if (!cid) return;
    const newAssignment: Partial<Assignment> = {
      title: "New Assignment",
      description: "",
      points: 100,
      due_date: "2024-05-13T23:59:00",
      available_from_date: "2024-05-06T00:00:00",
      available_until_date: "2024-05-13T23:59:00",
      course: cid
    };

    try {
      const createdAssignment = await assignmentsClient.createAssignment(cid, newAssignment);
      dispatch(addAssignment(createdAssignment));
    } catch (error) {
      console.error("Error creating assignment:", error);
    }
  };

  const handleDeleteAssignment = async (assignmentId: string) => {
    try {
      await assignmentsClient.deleteAssignment(assignmentId);
      dispatch(deleteAssignment(assignmentId));
    } catch (error) {
      console.error("Error deleting assignment:", error);
    }
  };

  const handleUpdateAssignment = async (assignment: Assignment) => {
    try {
      const updatedAssignment = await assignmentsClient.updateAssignment(assignment);
      dispatch(updateAssignment(updatedAssignment));
    } catch (error) {
      console.error("Error updating assignment:", error);
    }
  };

  const filteredAssignments = assignments
    .filter((assignment: Assignment) => assignment.course === cid)
    .filter((assignment: Assignment) => 
      assignment.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div>
      <div id="wd-assignments">
        <div className="input-group search-bar-container">
          <span className="input-group-text">
            <HiMagnifyingGlass />
          </span>
          <input
            type="text"
            placeholder="Search for Assignment"
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <button
            id="wd-add-assignment-group"
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            + Group
          </button>
          
          <ProtectedContent roles={['FACULTY']}>
            <button
              id="wd-add-assignment"
              className="px-4 py-2 bg-danger text-white rounded hover:bg-red-700"
              onClick={handleCreateAssignment}
            >
              + Assignment
            </button>
          </ProtectedContent>
        </div>
        <br />

        <ul id="wd-modules" className="list-group rounded-0 w-100">
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary flex items-center">
              <BsGripVertical className="me-2 fs-3" />
              <IoMdArrowDropdownCircle className="me-2" />
              Assignments
              
              <div className="float-end">
                <span className="rounded-box p-3">
                  40% of Total
                </span>
                <BsPlus className="ms-2" />
                <IoEllipsisVertical className="fs-4" />
              </div>
            </div>
            
            <ul className="wd-lessons list-group rounded-0">
              {filteredAssignments.map((assignment: Assignment) => (
                <li key={assignment._id} className="wd-lesson list-group-item p-3 ps-1">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <BsGripVertical className="me-2 fs-3" />
                      <MdAssignment className="me-2 fs-5 text-success" />
                      <div className="p-2">
                        <a
                          className="wd-assignment-link"
                          href={`/#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                        >
                          {assignment.title}
                        </a>
                        <br />
                        <span className="text-danger">Multiple Modules</span> |{" "}
                        <span className="fw-bold">Not available until</span>{" "}
                        {new Date(assignment.available_from_date || "").toLocaleDateString()} |<br />
                        <span className="fw-bold">Due</span>{" "}
                        {new Date(assignment.due_date || "").toLocaleString()} |{" "}
                        {assignment.points}pts
                      </div>
                    </div>
                    
                    <ProtectedContent roles={['FACULTY']}>
                      <FaTrash
                        className="text-danger me-2 mb-1"
                        data-bs-toggle="modal"
                        data-bs-target={`#delete-modal-${assignment._id}`}
                      />
                      <div
                        className="modal fade"
                        id={`delete-modal-${assignment._id}`}
                        tabIndex={-1}
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title">Delete Assignment</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div className="modal-body">
                              Are you sure you want to delete "{assignment.title}"?
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Cancel
                              </button>
                              <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                                onClick={() => handleDeleteAssignment(assignment._id)}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <LessonControlButtons />
                    </ProtectedContent>
                  </div>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}