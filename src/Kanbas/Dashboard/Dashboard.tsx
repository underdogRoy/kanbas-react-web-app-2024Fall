import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as enrollmentsClient from "../Enrollments/client.ts";
import { enroll, unenroll, toggleViewAllCourses, setEnrollments } from "../Enrollments/reducer.ts";
import React, { useEffect } from "react";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments, viewAllCourses } = useSelector((state: any) => state.enrollmentsReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isFaculty = currentUser?.role === "FACULTY";
  const isStudent = currentUser?.role === "STUDENT";
  useEffect(() => {
    if (isStudent) {
      enrollmentsClient.getUserEnrollments(currentUser._id).then((data) => {
        dispatch(setEnrollments(data));
      });
    }
  }, [currentUser, dispatch, isStudent]);

  const handleEnrollToggle = async (courseId: string, enrolled: boolean) => {
    if (!currentUser) return;

    try {
      if (enrolled) {
        await enrollmentsClient.unenrollUserFromCourse(currentUser._id, courseId);
        dispatch(unenroll({ user: currentUser._id, course: courseId }));
      } else {
        const newEnrollment = await enrollmentsClient.enrollUserInCourse(currentUser._id, courseId);
        dispatch(enroll(newEnrollment));
      }
    } catch (error) {
      console.error("Failed to toggle enrollment:", error);
    }
  };

  const navigateToCourse = (courseId: string) => {
    const isEnrolled = enrollments.some((enrollment: any) => enrollment.course === courseId);
    if (isEnrolled) {
      navigate(`/Kanbas/Courses/${courseId}/Home`);
    } else {
      alert("You are not enrolled in this course.");
    }
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      {isFaculty && (
        <>
          <h5>
            New Course
            <button className="btn btn-primary float-end" onClick={addNewCourse}>
              Add
            </button>
            <button className="btn btn-warning float-end me-2" onClick={updateCourse}>
              Update
            </button>
          </h5>
          <br />
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
        </>
      )}

      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />

      <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-md-5 g-4">
        {courses
        .filter((course) => viewAllCourses || enrollments.some((enrollment: any) => enrollment.course === course._id))
        .map((course) => (
          <div key={course._id} className="col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                to={`/Kanbas/Courses/${course._id}/Home`}
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <img
                    src={course.image || "/images/reactjs.jpg"}
                    width="100%"
                    height={160}
                    alt={course.name}
                  />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
                  <p className="card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                    {course.description}
                  </p>

                  {isStudent && (
                      <button
                        className={`btn ${enrollments.some((enrollment: any) => enrollment.course === course._id) ? "btn-danger" : "btn-success"}`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleEnrollToggle(course._id, enrollments.some((enrollment: any) => enrollment.course === course._id));
                        }}
                      >
                        {enrollments.some((enrollment: any) => enrollment.course === course._id) ? "Unenroll" : "Enroll"}
                      </button>
                  )}

                  <button
                    className="btn btn-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateToCourse(course._id);
                    }}
                  >
                    Go
                  </button>

                  {isFaculty && (
                    <>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          deleteCourse(course._id);
                        }}
                        className="btn btn-danger float-end"
                      >
                        Delete
                      </button>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setCourse(course);
                        }}
                        className="btn btn-warning me-2 float-end"
                      >
                        Edit
                      </button>
                    </>
                  )}
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}