import React from "react";
import * as db from "../../Database/Database.tsx"
import { useParams } from "react-router";

export default function AssignmentEditor() {
    const assignments= db.assignments;
    const {cid, aid} = useParams();
    const assignment = assignments.find((assignment) => assignment._id === aid && assignment.course === cid);
    return (
        <div id="wd-assignments-editor" className="container mt-4">
            
            <div className="row mb-3">
                <div className="col-md-8">
                    <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                    <input id="wd-name" className="form-control" value={`${assignment && assignment.title}`}  />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-8">
                    <label htmlFor="wd-description" className="form-label">Description</label>
                    <textarea id="wd-description" className="form-control" rows="4">
                        The assignment is available online Submit a link to the landing page of
                    </textarea>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-4">
                    <label htmlFor="wd-points" className="form-label float-start">Points</label>
                    <input id="wd-points" className="form-control" value={100} />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-4">
                    <label htmlFor="wd-group" className="form-label float-start">Assignment Group</label>
                    <select id="wd-group" className="form-select">
                        <option value="A1">Assignments</option>
                        <option value="A2">A2</option>
                        <option value="A3">A3</option>
                        <option value="A4">A4</option>
                    </select>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-4">
                    <label htmlFor="wd-display-grade-as" className="form-label float-start">Display grade as</label>
                    <select id="wd-display-grade-as" className="form-select">
                        <option value="points">Points</option>
                        <option value="percentage">Percentage</option>
                        <option value="letter">Letter Grade</option>
                    </select>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-4">
                    <label htmlFor="wd-submission-type" className="form-label float-start">Submission Type</label>
                    <select id="wd-submission-type" className="form-select mb-2">
                        <option value="online">Online</option>
                        <option value="file">File</option>
                    </select>
                    <div className="ms-3">
                        <p className="mb-2">Online Entry Options</p>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="wd-text-entry" />
                            <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="wd-website-url" />
                            <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="wd-media-recordings" />
                            <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="wd-student-annotation" />
                            <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="wd-file-upload" />
                            <label className="form-check-label" htmlFor="wd-file-upload">File upload</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-4">
                    <label htmlFor="wd-assign-to" className="form-label float-start">Assign</label>
                    <input id="wd-assign-to" className="form-control mb-2" value="Everyone" />
                    <label htmlFor="wd-due-date" className="form-label">Due</label>
                    <input id="wd-due-date" className="form-control mb-2" type="date" />
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="wd-available-from" className="form-label">Available from</label>
                            <input id="wd-available-from" className="form-control" type="date" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="wd-available-until" className="form-label">Until</label>
                            <input id="wd-available-until" className="form-control" type="date" />
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-12 text-end">
                    <button id="wd-cancel-assignment" className="btn btn-light me-2">Cancel</button>
                    <button id="wd-save-assignment" className="btn btn-danger">Save</button>
                </div>
            </div>
        </div>
    );
}
  