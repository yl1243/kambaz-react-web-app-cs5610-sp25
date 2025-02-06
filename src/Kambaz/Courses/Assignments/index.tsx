import { FaSearch, FaPlus } from "react-icons/fa";
import { IoBookOutline, IoEllipsisVertical } from "react-icons/io5";
import { Button, Form, InputGroup, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentDragHandle from "./AssignmentDragHandle"; // Import new component

export default function Assignments() {
    const assignments = [
        { id: "A1", title: "ENV + HTML", due: "May 13 at 11:59pm", points: 100, available: "May 6 at 12:00am" },
        { id: "A2", title: "CSS + BOOTSTRAP", due: "May 20 at 11:59pm", points: 100, available: "May 13 at 12:00am" },
        { id: "A3", title: "JAVASCRIPT + REACT", due: "May 27 at 11:59pm", points: 100, available: "May 20 at 12:00am" }
    ];

    return (
        <div id="wd-assignments" className="p-4">
            <h2 className="text-danger">Assignments</h2>
            <hr />

            {/* Top Section with Search and Buttons */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                {/* Search Bar */}
                <InputGroup style={{ maxWidth: "300px" }}>
                    <InputGroup.Text>
                        <FaSearch />
                    </InputGroup.Text>
                    <Form.Control type="text" placeholder="Search for Assignments" />
                </InputGroup>

                {/* Buttons */}
                <div>
                    <Button variant="secondary" className="me-2">
                        <FaPlus className="me-1" /> Group
                    </Button>
                    <Button variant="danger">
                        <FaPlus className="me-1" /> Assignment
                    </Button>
                </div>
            </div>

            {/* Assignments List */}
            <Card className="p-3">
                {/* HEADER FIX: Add drag handle and align "+" button properly */}
                <Row className="align-items-center">
                    <Col xs="auto">
                        <AssignmentDragHandle /> {/* 8 dots drag handle */}
                    </Col>

                    <Col className="d-flex align-items-center">
                        <span className="fw-bold fs-5">▾ ASSIGNMENTS</span>
                    </Col>


                    <Col className="text-end text-muted">40% of Total</Col>

                    <Col xs="auto">
                        <Button variant="light" className="fs-5">+</Button>
                        <IoEllipsisVertical className="fs-4 text-muted" />
                    </Col>
                </Row>
                <hr />

                <ul id="wd-assignment-list" className="list-unstyled">
                    {assignments.map(({ id, title, due, points, available }) => (
                        <li key={id} className="border-start border-success border-4 p-2 mb-2">
                            <Row className="align-items-center">
                                {/* Eight-dot drag handle */}
                                <Col xs="auto">
                                    <AssignmentDragHandle />
                                </Col>
                                {/* Book with magnifying glass icon */}
                                <Col xs="auto">
                                    <IoBookOutline className="text-success fs-4" />
                                </Col>
                                {/* Assignment Info */}
                                <Col>
                                    <Link className="fw-bold text-dark text-decoration-none" to={`/Kambaz/Courses/1234/Assignments/${id}`}>
                                        {id} - {title}
                                    </Link>
                                    <p className="text-muted mb-0">
                                        <strong className="text-primary">Multiple Modules</strong> | <strong>Not available until</strong> {available} | <strong>Due</strong> {due} | {points} pts
                                    </p>
                                </Col>
                                {/* GreenCheckmark and Control Buttons */}
                                <Col xs="auto">
                                    <AssignmentControlButtons />
                                </Col>
                            </Row>
                        </li>
                    ))}
                </ul>
            </Card>
        </div>
    );
}
