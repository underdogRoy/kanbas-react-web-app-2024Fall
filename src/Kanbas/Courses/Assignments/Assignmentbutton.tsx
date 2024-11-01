import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark.tsx";
import { deleteAssignment } from "./reducer.ts";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import React from "react";
export default function AssignmentButton({assignment,setAssignment} : {setAssignment: (assignment: any) => void; assignment : any; } ) {
  const dispatch = useDispatch();
  return (
    <div className="ms-auto">
      <FaTrash className="fs-4 me-2 text-danger" 
      onClick={() => {
        dispatch(deleteAssignment(assignment._id));
      }}/>
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
);}