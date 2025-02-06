import { Form, Button, Card, Row, Col } from "react-bootstrap";

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="p-4">
            <h2 className="text-danger">Assignments</h2>
            <hr />

            <Form>
                {/* Assignment Name */}
                <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Assignment Name</Form.Label>
                    <Form.Control id="wd-name" defaultValue="A1 - ENV + HTML" />
                </Form.Group>

                {/* Description Card */}
                <Card className="p-3 mb-3">
                    <p className="text-muted fst-italic">The assignment is <span className="text-danger">available online</span></p>
                    <p>
                        Submit a link to the landing page of your Web application running on <a href="#" className="text-primary">Netlify</a>.
                    </p>
                    <p>The landing page should include the following:</p>
                    <ul>
                        <li>Your full name and section</li>
                        <li>Links to each of the lab assignments</li>
                        <li>Link to the <a href="#" className="text-primary">Kambaz</a> application</li>
                        <li>Links to all relevant source code repositories</li>
                    </ul>
                    <p>The <a href="#" className="text-primary">Kambaz</a> application should include a link to navigate back to the landing page.</p>
                </Card>

                {/* Points - Left Aligned */}
                <Form.Group as={Row} className="mb-3">
                    <Col sm={3}>
                        <Form.Label className="fw-bold text-start">Points</Form.Label>
                    </Col>
                    <Col sm={3}>
                        <Form.Control id="wd-points" type="number" defaultValue={100} />
                    </Col>
                </Form.Group>

                {/* Assignment Group - Left Aligned */}
                <Form.Group as={Row} className="mb-3">
                    <Col sm={3}>
                        <Form.Label className="fw-bold text-start">Assignment Group</Form.Label>
                    </Col>
                    <Col sm={6}>
                        <Form.Select id="wd-group">
                            <option value="assignments">ASSIGNMENTS</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                {/* Display Grade As - Left Aligned */}
                <Form.Group as={Row} className="mb-3">
                    <Col sm={3}>
                        <Form.Label className="fw-bold text-start">Display Grade as</Form.Label>
                    </Col>
                    <Col sm={6}>
                        <Form.Select id="wd-display-grade-as">
                            <option value="percentage">Percentage</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                {/* Submission Type - Full Box */}
                <Card className="p-3 mb-3">
                    <Form.Group className="mb-3">
                        <Form.Label className="fw-bold">Submission Type</Form.Label>
                        <Form.Select id="wd-submission-type">
                            <option value="online">Online</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className="fw-bold">Online Entry Options</Form.Label>
                        {["Text Entry", "Website URL", "Media Recordings", "Student Annotation", "File Uploads"].map((option, index) => (
                            <div key={index} className="form-check">
                                <Form.Check type="checkbox" id={`wd-option-${index}`} label={option} />
                            </div>
                        ))}
                    </Form.Group>
                </Card>

                {/* Assign - Full Box */}
                <Card className="p-3 mb-3">
                    <Form.Group className="mb-3">
                        <Form.Label className="fw-bold">Assign to</Form.Label>
                        <Form.Select id="wd-assign-to">
                            <option value="everyone">Everyone</option>
                        </Form.Select>
                    </Form.Group>

                    {/* Due Date - Native Calendar Picker */}
                    <Form.Group as={Row} className="mb-3">
                        <Col sm={3}>
                            <Form.Label className="fw-bold">Due</Form.Label>
                        </Col>
                        <Col sm={6}>
                            <Form.Control type="datetime-local" id="wd-due-date" defaultValue="2024-05-13T23:59" />
                        </Col>
                    </Form.Group>

                    {/* Available From - Native Calendar Picker */}
                    <Form.Group as={Row} className="mb-3">
                        <Col sm={3}>
                            <Form.Label className="fw-bold">Available from</Form.Label>
                        </Col>
                        <Col sm={6}>
                            <Form.Control type="datetime-local" id="wd-available-from" defaultValue="2024-05-06T00:00" />
                        </Col>
                    </Form.Group>

                    {/* Until - Native Calendar Picker */}
                    <Form.Group as={Row} className="mb-3">
                        <Col sm={3}>
                            <Form.Label className="fw-bold">Until</Form.Label>
                        </Col>
                        <Col sm={6}>
                            <Form.Control type="datetime-local" id="wd-available-until" defaultValue="2024-05-20T00:00" />
                        </Col>
                    </Form.Group>
                </Card>

                {/* Action Buttons */}
                <div className="text-end mt-3">
                    <Button variant="secondary" className="me-2">Cancel</Button>
                    <Button variant="danger">Save</Button>
                </div>
            </Form>
        </div>
    );
}
