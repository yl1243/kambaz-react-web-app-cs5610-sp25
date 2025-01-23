export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description">
                The assignment is available online Subnit alink to the landing page of
                your webapplication running on Netlify. The landingpage should include
                the following: Your ful!name and section Links to each of the
                labassignments Link to the Kambaz applicationLinks to all relevant
                source code repositoriesThe Kambaz application should include a linkto
                navigate back to the landing page.
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
                {/* Assignment Group */}
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group"> Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            {/* 默认值 */}
                            <option value="assignments">ASSIGNMENTS</option>
                        </select>
                    </td>
                </tr>

                {/* Display grade as */}
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>

                    <td>

                        <select id="wd-display-grade-as">
                            <option value="percentage">Percentage</option>
                        </select>
                    </td>
                </tr>

                {/* Submission Type */}
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option value="online">Online</option>
                        </select>
                    </td>
                </tr>

                {/* Online Entry Options */}
                <tr>
                    <td></td>
                    <td>
                        <label htmlFor="wd-online-options">Online Entry Options</label>
                        <br />
                        <input type="checkbox" name="online-entry" id="wd-text-entry" />
                        <label htmlFor="wd-text-entry">Text Entry</label>
                        <br />
                        <input type="checkbox" name="online-entry" id="wd-website-url" />
                        <label htmlFor="wd-website-url">Website URL</label>
                        <br />
                        <input type="checkbox" name="online-entry" id="wd-media-recordings" />
                        <label htmlFor="wd-media-recordings">Media Recordings</label>
                        <br />
                        <input type="checkbox" name="online-entry" id="wd-student-annotation" />
                        <label htmlFor="wd-student-annotation">Student Annotation</label>
                        <br />
                        <input type="checkbox" name="online-entry" id="wd-file-upload" />
                        <label htmlFor="wd-file-upload">File Uploads</label>File Uploads
                    </td>
                </tr>

                {/* Assign */}
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign</label>
                    </td>
                    <td valign="top">
                        <label htmlFor="wd-points">Assign to</label>
                    </td>
                </tr>


                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-space"> </label>
                    </td>
                    <td>
                        <input id="wd-assign-to" value="Everyone" />
                    </td>
                </tr>

                {/* Due Date */}
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-space"> </label>
                    </td>
                    <td valign="top">
                        <br />
                        <label htmlFor="wd-due-date">Due</label>
                    </td>
                </tr>

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-space"> </label>
                    </td>
                    <td>
                        <input type="date" id="wd-due-date" value="2024-05-13" />
                    </td>
                </tr>

                {/* Available from, available until */}
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-space"> </label>
                    </td>
                    <td align="left" valign="top">
                        <br />
                        <label htmlFor="wd-available-from">Available from</label>
                    </td>
                    <td align="left" valign="top">
                        <br />
                        <label htmlFor="wd-available-until">Until</label>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-space"> </label>
                    </td>
                    <td>
                        <input type="date" id="wd-available-from" value="2024-05-06" />
                    </td>
                    <td>
                        <input type="date" id="wd-available-until" value="2024-05-20" />
                    </td>
                </tr>
            </table>
            <br />

            <td align="right" valign="top">
                <button>Cancel</button>
                <button>Save</button>
            </td>

        </div>
    );
}
