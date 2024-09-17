import React from "react";

export default function Modules() {
    return (
      <div>
        {/* Implement Collapse All button, View Progress button, etc. */}
        <div className="wd-module-buttons">
                <button className="wd-btn wd-btn-secondary wd-collapse-all">Collapse All</button>
                <button className="wd-btn wd-btn-secondary wd-view-progress">View Progress</button>
                <select className="wd-btn wd-btn-secondary wd-publish-all" name="publish-all" id="publish-all">
                    <option value="">Publish All</option>
                    <option value="Draft">Draft</option>
                    <option value="Published">Published</option>
                </select>
                <button className="wd-btn wd-btn-primary wd-add-module" type="button">+ Module</button>
            </div>
            <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1, lecture 1 - Course Introduction, Syllabus, Agenda</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
              </li>
              <li className="wd-lesson">
                            <span className="wd-title">READINGS</span>
                            <ul>
                                <li className="wd-content-item">Full stack Developer - Chapter 1 - Introduction</li>
                                <li className="wd-content-item">Learn what is Web Development</li>
                            </ul>
                        </li>
                        <li className="wd-lesson">
                            <span className="wd-title">SLIDES</span>
                            <ul>
                                <li className="wd-content-item">Introduction to Wev Development</li>
                                <li className="wd-content-item">Creating an HTTP server with NOde.js</li>
                                <li className="wd-content-item">Creating a React Application</li>
                            </ul>
                        </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 1, Lecture 2 - Formating User Interfaces with HTML</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
                  <li className="wd-content-item">Deploy the assignment to Netlify</li>
                </ul>
              </li>
              
                        <li className="wd-lesson">
                            <span className="wd-title">SLIDES</span>
                            <ul>
                                <li className="wd-content-item">Introduction to HTML and the DOM</li>
                                <li className="wd-content-item">Formatting Web content with Headings</li>
                                <li className="wd-content-item">Formatting content with Lists and Tables</li>
                                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
  );}
  
  