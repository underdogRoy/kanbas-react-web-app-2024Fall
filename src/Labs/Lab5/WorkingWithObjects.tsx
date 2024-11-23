import React, { useState } from "react";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const [module, setModule] = useState({
    id: "NodeJs Module",
    name: "Web Development",
    description: "Learn full-stack web development",
    course: "CS5610"
  });

  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      
      {/* Assignment Section */}
      <h4>Assignment</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary me-2"
         href={`${ASSIGNMENT_API_URL}`}>
        Get Assignment
      </a>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary"
         href={`${ASSIGNMENT_API_URL}/title`}>
        Get Title
      </a>
      
      <div className="mt-3">
        <h5>Update Assignment</h5>
        <div className="mb-2">
          <input
            className="form-control w-75 mb-2"
            id="wd-assignment-title"
            value={assignment.title}
            onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
          />
          <a
            id="wd-update-assignment-title"
            className="btn btn-primary"
            href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
          >
            Update Title
          </a>
        </div>

        <div className="mb-2">
          <input
            type="number"
            className="form-control w-75 mb-2"
            value={assignment.score}
            onChange={(e) => setAssignment({ ...assignment, score: parseInt(e.target.value) })}
          />
          <a
            className="btn btn-primary"
            href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
          >
            Update Score
          </a>
        </div>

        <div className="mb-2">
          <div className="form-check mb-2">
            <input
              type="checkbox"
              className="form-check-input"
              checked={assignment.completed}
              onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })}
            />
            <label className="form-check-label">Completed</label>
          </div>
          <a
            className="btn btn-primary"
            href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
          >
            Update Completed Status
          </a>
        </div>
      </div>

      <hr />
      
      {/* Module Section */}
      <h4>Module</h4>
      <a id="wd-retrieve-module" className="btn btn-primary me-2"
         href={`${MODULE_API_URL}`}>
        Get Module
      </a>
      <a id="wd-retrieve-module-name" className="btn btn-primary"
         href={`${MODULE_API_URL}/name`}>
        Get Module Name
      </a>

      <div className="mt-3">
        <h5>Update Module</h5>
        <div className="mb-2">
          <input
            className="form-control w-75 mb-2"
            value={module.name}
            onChange={(e) => setModule({ ...module, name: e.target.value })}
          />
          <a
            className="btn btn-primary"
            href={`${MODULE_API_URL}/name/${module.name}`}
          >
            Update Name
          </a>
        </div>

        <div className="mb-2">
          <textarea
            className="form-control w-75 mb-2"
            value={module.description}
            onChange={(e) => setModule({ ...module, description: e.target.value })}
          />
          <a
            className="btn btn-primary"
            href={`${MODULE_API_URL}/description/${module.description}`}
          >
            Update Description
          </a>
        </div>
      </div>
    </div>
  );
}