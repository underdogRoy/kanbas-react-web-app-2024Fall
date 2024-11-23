import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import ProtectedContent from "../Account/ProtectedContent.tsx";

// Types
interface Course {
  _id: string;
  name: string;
  description: string;
  number?: string;
  startDate?: string;
  endDate?: string;
  image?: string;
}

interface Enrollment {
  userId: string;
  courseId: string;
}

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: Course[];
  course: Course;
  setCourse: (course: Course) => void;
  addNewCourse: () => void;
  deleteCourse: (course: Course) => void;
  updateCourse: () => void;
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showAllCourses, setShowAllCourses] = useState(true);
  
  const currentUser = useSelector((state: any) => state.accountReducer.currentUser);
  const enrollments = useSelector((state: any) => 
    state.enrollmentsReducer?.enrollments || []
  );

  // Filter courses based on enrollment status
  const isEnrolled = (courseId: string) => {
    return enrollments.some(
      (enrollment: Enrollment) =>
        enrollment.userId === currentUser._id && enrollment.courseId === courseId
    );
  };

  const displayedCourses = showAllCourses
    ? courses
    : courses.filter((course) => isEnrolled(course._id));

  // Enrollment actions
  const handleEnrollment = (courseId: string, isEnrolling: boolean) => {
    if (isEnrolling) {
      dispatch({
        type: "add-enrollment",
        enrollment: {
          userId: currentUser._id,
          courseId: courseId,
        },
      });
    } else {
      dispatch({
        type: "remove-enrollment",
        enrollment: {
          userId: currentUser._id,
          courseId: courseId,
        },
      });
    }
  };

  // Course navigation with enrollment check
  const handleCourseNavigation = (
    event: React.MouseEvent,
    courseId: string
  ) => {
    event.preventDefault();
    if (currentUser.role === "FACULTY" || isEnrolled(courseId)) {
      navigate(`/Kanbas/Courses/${courseId}/Home`);
    }
  };

  return (
    <div id="wd-dashboard">
      <div className="d-flex justify-content-between align-items-center">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        {currentUser.role === "STUDENT" && (
          <button
            className="btn btn-primary"
            onClick={() => setShowAllCourses(!showAllCourses)}
          >
            {showAllCourses ? "Show My Enrollments" : "Show All Courses"}
          </button>
        )}
      </div>
      <hr />

      <ProtectedContent roles={["FACULTY"]}>
        <div>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <input
            defaultValue={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            defaultValue={course.description}
            className="form-control"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
        </div>
      </ProtectedContent>

      <hr />
      <h2 id="wd-dashboard-published">
        {showAllCourses ? "All Courses" : "My Enrolled Courses"} ({
          displayedCourses.length
        })
      </h2>
      <hr />

      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {displayedCourses.map((course) => (
            <div
              key={course._id}
              className="wd-dashboard-course col"
              style={{ width: "300px" }}
            >
              <div className="card rounded-3 overflow-hidden">
                <div
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                  onClick={(e) => handleCourseNavigation(e, course._id)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={course.image || "/images/reactjs.jpg"}
                    width="100%"
                    height={160}
                    alt={course.name}
                  />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name}
                    </h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}
                    </p>
                    
                    <div className="d-flex justify-content-between align-items-center">
                    <Link
                        to={`/Kanbas/Courses/${course._id}/Home`}
                        className='btn btn-primary'
                      ><button className="btn btn-primary">Go</button></Link>
                      
                      <ProtectedContent roles={["STUDENT"]}>
                        {isEnrolled(course._id) ? (
                          <button
                            className="btn btn-danger"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleEnrollment(course._id, false);
                            }}
                          >
                            Unenroll
                          </button>
                        ) : (
                          <button
                            className="btn btn-success"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleEnrollment(course._id, true);
                            }}
                          >
                            Enroll
                          </button>
                        )}
                      </ProtectedContent>

                      <ProtectedContent roles={["FACULTY"]}>
                        <div>
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              deleteCourse(course);
                            }}
                            className="btn btn-danger float-end"
                            id="wd-delete-course-click"
                          >
                            Delete
                          </button>
                          <button
                            id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="btn btn-warning me-2 float-end"
                          >
                            Edit
                          </button>
                        </div>
                      </ProtectedContent>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}