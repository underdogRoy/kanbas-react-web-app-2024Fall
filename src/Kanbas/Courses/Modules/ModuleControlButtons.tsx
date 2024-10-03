import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark.tsx";
import React from "react";

export default function ModuleControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <BsPlus className="fs-4 mx-2" /> {/* Added BsPlus icon with spacing */}
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}