import React from 'react';

interface AssignmentButtonProps {
  assignment: any;  // Replace 'any' with your assignment type
  deleteAssignment: (assignment: any) => void;
}

const AssignmentButton: React.FC<AssignmentButtonProps> = ({ assignment, deleteAssignment }) => {
  return (
    <div className="modal fade" id="wd-remove-assignment-dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Delete Assignment</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div className="modal-body">
            Are you sure you want to delete this assignment?
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
              onClick={() => deleteAssignment(assignment)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentButton;