import React from "react";

export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          {/* Complete on your own */}
          <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option value="A1">Assignments</option>
                            <option value="A2">A2</option>
                            <option value="A3">A3</option>
                            <option value="A4">A4</option>
                        </select>
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option value="points">Points</option>
                            <option value="percentage">Percentage</option>
                            <option value="letter">Letter Grade</option>
                        </select>
                    </td>
                </tr>
                <br />



                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <tr>
                        <td align="left" valign="top">
                            <tr>
                                <select id="wd-submission-type">
                                    <option value="online">Online</option>
                                    <option value="file">File</option>
                                </select>
                            </tr>
                            <br />
                            <tr>
                                Online Entry Options <br />
                                <input type="checkbox" name="online-entry-options" id="wd-text-entry" />
                                <label htmlFor="wd-opt-text-entry">Text Entry</label><br />
                                <input type="checkbox" name="online-entry-options" id="wd-website-url" />
                                <label htmlFor="wd-opt-website-url">Website URL</label><br />
                                <input type="checkbox" name="online-entry-options" id="wd-media-recordings" />
                                <label htmlFor="wd-opt-media-recordings">Media Recordings</label><br />
                                <input type="checkbox" name="online-entry-options" id="wd-student-annotation" />
                                <label htmlFor="wd-opt-student-annotation">Student Annotation</label><br />
                                <input type="checkbox" name="online-entry-options" id="wd-file-upload" />
                                <label htmlFor="wd-opt-file-upload">File upload</label>
                            </tr>
                        </td>
                    </tr>
                </tr>
                <br />

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign</label>
                    </td>
                    <tr>
                        <td>
                            <tr>
                                Assign to <br />
                                <input id="wd-assign-to" value="Everyone" /> <br /><br />
                            </tr>
                            <tr>
                                Due <br />
                                <input id="wd-due-date" type="date" /><br /><br />
                            </tr>
                            <tr>
                                <td>
                                    Available from <br />
                                    <input id="wd-available-from" type="date" />
                                </td>
                                <td>
                                    Until <br />
                                    <input id="wd-available-until" type="date" />
                                </td>
                            </tr>
                        </td>
                    </tr>
                </tr>
                <tr><td colSpan={2}><hr /></td></tr>
                {/* Complete on your own */}
                <tr>
                    <td colSpan={2} align="right">
                        <button id="wd-cancel-assignment">Cancel</button>
                        <button id="wd-save-assignment">Save</button>
                    </td>
                </tr>
        </table>
      </div>
  );}
  
  