import React from "react";
import { Link } from "react-router-dom";
import * as db from "./Database/Database.tsx";
export default function Dashboard() {
  const courses = db.courses;
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
      <div className="row row-cols-1 row-cols-md-5 g-4">
      {courses.map((course) => (
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card rounded-3 overflow-hidden">

          <Link className="wd-dashboard-course-link text-decoration-none text-dark"

                to={`/Kanbas/Courses/${course._id}/Home`}>
            <img src="/images/reactjs.jpg"  width="100%" height={160} />
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
              {course.name}
              </h5>
              <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
              {course.description}
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
          </div>
        </div>
      ))}
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card rounded-3 overflow-hidden">

          <Link className="wd-dashboard-course-link text-decoration-none text-dark"

                to="/Kanbas/Courses/1234/Home">
            <img src="/images/cs5001.jpg"  width="100%" height={160} />
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS5001
              </h5>
              <p className="wd-dashboard-course-title card-text">
              Intensive Foundations of Computer Science
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
          </div>
        </div>
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card rounded-3 overflow-hidden">

          <Link className="wd-dashboard-course-link text-decoration-none text-dark"

                to="/Kanbas/Courses/1234/Home">
            <img src="/images/cs5002.png"  width="100%" height={160} />
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS5002
              </h5>
              <p className="wd-dashboard-course-title card-text">
              Discrete Structures
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
          </div>
        </div>
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card rounded-3 overflow-hidden">

          <Link className="wd-dashboard-course-link text-decoration-none text-dark"

                to="/Kanbas/Courses/1234/Home">
            <img src="/images/cs5004.jpg"  width="100%" height={160} />
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS5004
              </h5>
              <p className="wd-dashboard-course-title card-text">
              Object-Oriented Design
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
          </div>
        </div>
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card rounded-3 overflow-hidden">

          <Link className="wd-dashboard-course-link text-decoration-none text-dark"

                to="/Kanbas/Courses/1234/Home">
            <img src="/images/cs5008.png"  width="100%" height={160} />
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS5008
              </h5>
              <p className="wd-dashboard-course-title card-text">
              Data Structures and Algorithms
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
          </div>
        </div>
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card rounded-3 overflow-hidden">

          <Link className="wd-dashboard-course-link text-decoration-none text-dark"

                to="/Kanbas/Courses/1234/Home">
            <img src="/images/cs5610.png"  width="100%" height={160} />
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS5610
              </h5>
              <p className="wd-dashboard-course-title card-text">
                Web Development
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
          </div>
        </div>
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card rounded-3 overflow-hidden">

          <Link className="wd-dashboard-course-link text-decoration-none text-dark"

                to="/Kanbas/Courses/1234/Home">
            <img src="/images/cs5200.jpg"  width="100%" height={160} />
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS5200
              </h5>
              <p className="wd-dashboard-course-title card-text">
              Database Management Systems
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

