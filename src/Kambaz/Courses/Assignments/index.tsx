import { IoBookOutline } from "react-icons/io5";
import { FaSearch, FaPlus } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { Button, InputGroup, FormControl, Row, Col, Card, Modal, Form } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import * as db from "../../Database";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentDragHandle from "./AssignmentDragHandle";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { addAssignment, deleteAssignment, updateAssignment, editAssignment } from "./reducer";

export default function Assignments() {
    const { cid } = useParams(); // 获取当前课程 ID
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { assignments } = useSelector((state: any) => state.assignmentsReducer); // 从 Redux 获取作业数据
    const { currentUser } = useSelector((state: any) => state.accountReducer); // 获取当前用户
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [assignmentToDelete, setAssignmentToDelete] = useState<any>(null);
    const [searchQuery, setSearchQuery] = useState('');

    // 删除作业的处理函数
    const handleDeleteClick = (assignment: any) => {
        setAssignmentToDelete(assignment);
        setShowDeleteModal(true);
    };

    const handleConfirmDelete = () => {
        dispatch(deleteAssignment(assignmentToDelete._id)); // 使用 dispatch 删除作业
        setShowDeleteModal(false);
    };

    const handleCancelDelete = () => {
        setShowDeleteModal(false);
    };

    // 编辑作业的处理函数
    const handleEditClick = (assignmentId: string) => {
        dispatch(editAssignment(assignmentId)); // 设置作业为编辑状态
        navigate(`/Kambaz/Courses/${cid}/Assignments/${assignmentId}`); // 跳转到编辑页面
    };

    return (
        <div className="container">
            <h2 className="text-danger">Assignments</h2>
            <hr />

            {/* 搜索框和新增按钮 */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                {/* 搜索栏 */}
                <InputGroup style={{ maxWidth: "300px" }}>
                    <InputGroup.Text>
                        <FaSearch />
                    </InputGroup.Text>
                    <Form.Control
                        type="text"
                        placeholder="Search for Assignments"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </InputGroup>

                {/* 按钮组 */}
                {currentUser && currentUser.role === "FACULTY" && (
                    <div>
                        <Button
                            variant="secondary"
                            className="me-2"
                            onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments/new`)}
                        >
                            <FaPlus className="me-1" /> New Assignment
                        </Button>
                    </div>
                )}
            </div>

            {/* 作业列表 */}
            <Card className="p-3">
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
                    {assignments
                        .filter((assignment: any) =>
                            assignment.course === cid &&
                            assignment.title.toLowerCase().includes(searchQuery.toLowerCase())
                        ) // 搜索作业
                        .map((assignment: any) => (
                            <li key={assignment._id} className="border-start border-success border-4 p-2 mb-2">
                                <Row className="align-items-center">
                                    <Col xs="auto">
                                        <AssignmentDragHandle />
                                    </Col>
                                    <Col xs="auto">
                                        <IoBookOutline className="text-success fs-4" />
                                    </Col>
                                    <Col>
                                        <Link
                                            className="fw-bold text-dark text-decoration-none"
                                            to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                                        >
                                            {assignment.title}
                                        </Link>
                                        <p className="text-muted mb-0">
                                            <strong className="text-primary">Multiple Modules</strong> |
                                            <strong> Not available until</strong> {new Date(assignment.availableDate).toLocaleString()} |
                                            <strong> Available from </strong>{new Date(assignment.availableFrom).toLocaleString()} |
                                            <strong> Until</strong> {new Date(assignment.dueDate).toLocaleString()} |
                                            {assignment.point} pts
                                        </p>
                                        {/* 显示作业描述 */}
                                        {assignment.description && (
                                            <div className="p-f2 bg-light text-muted rounded">
                                                {assignment.description}
                                            </div>
                                        )}
                                    </Col>
                                    <Col xs="auto">
                                        {currentUser && currentUser.role === "FACULTY" && (
                                            <>
                                                <Button
                                                    variant="warning"
                                                    onClick={() => handleEditClick(assignment._id)}
                                                >
                                                    Edit
                                                </Button>
                                                <Button
                                                    variant="danger"
                                                    onClick={() => handleDeleteClick(assignment)}
                                                >
                                                    Delete
                                                </Button>
                                            </>
                                        )}
                                    </Col>
                                </Row>
                            </li>
                        ))}
                </ul>
            </Card>

            {/* 删除确认模态框 */}
            <Modal show={showDeleteModal} onHide={handleCancelDelete}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this assignment?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCancelDelete}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleConfirmDelete}>
                        Yes, Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}




// // import { BsGripVertical } from "react-icons/bs";
// import { IoBookOutline } from "react-icons/io5";
// import { FaSearch, FaPlus } from "react-icons/fa";
// import { IoEllipsisVertical } from "react-icons/io5";
// import { Button, FormControl, Form, InputGroup, Row, Col, Card } from "react-bootstrap";
// import { Link, useParams } from "react-router-dom";
// import * as db from "../../Database";
// import AssignmentControlButtons from "./AssignmentControlButtons";
// import AssignmentDragHandle from "./AssignmentDragHandle";


// export default function Assignments() {
//     const { cid } = useParams(); // 获取当前课程 ID
//     const assignments = db.assignments; // 获取所有作业

//     return (
//         <div className="container">
//             <h2 className="text-danger">Assignments</h2>
//             <hr />

//             {/* 搜索框和新增按钮 */}
//             <div className="d-flex justify-content-between align-items-center mb-3">
//                 {/* 搜索栏 */}
//                 <InputGroup style={{ maxWidth: "300px" }}>
//                     <InputGroup.Text>
//                         <FaSearch />
//                     </InputGroup.Text>
//                     <Form.Control type="text" placeholder="Search for Assignments" />
//                 </InputGroup>

//                 {/* 按钮组 */}
//                 <div>
//                     <Button variant="secondary" className="me-2">
//                         <FaPlus className="me-1" /> Group
//                     </Button>
//                     <Button variant="danger">
//                         <FaPlus className="me-1" /> Assignment
//                     </Button>
//                 </div>
//             </div>

//             {/* 作业列表 */}
//             <Card className="p-3">
//                 <Row className="align-items-center">
//                     <Col xs="auto">
//                         <AssignmentDragHandle /> {/* 8 dots drag handle */}
//                     </Col>
//                     <Col className="d-flex align-items-center">
//                         <span className="fw-bold fs-5">▾ ASSIGNMENTS</span>
//                     </Col>
//                     <Col className="text-end text-muted">40% of Total</Col>
//                     <Col xs="auto">
//                         <Button variant="light" className="fs-5">+</Button>
//                         <IoEllipsisVertical className="fs-4 text-muted" />
//                     </Col>
//                 </Row>
//                 <hr />

//                 <ul id="wd-assignment-list" className="list-unstyled">
//                     {assignments
//                         .filter((assignment: any) => assignment.course === cid) // 过滤当前课程作业
//                         .map((assignment: any) => (
//                             <li key={assignment._id} className="border-start border-success border-4 p-2 mb-2">
//                                 <Row className="align-items-center">
//                                     {/* 拖拽图标 */}
//                                     <Col xs="auto">
//                                         <AssignmentDragHandle />
//                                     </Col>
//                                     {/* 书本图标 */}
//                                     <Col xs="auto">
//                                         <IoBookOutline className="text-success fs-4" />
//                                     </Col>
//                                     {/* 作业详情 */}
//                                     <Col>
//                                         <Link
//                                             className="fw-bold text-dark text-decoration-none"
//                                             to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
//                                         >
//                                             {assignment.title}
//                                         </Link>
//                                         <p className="text-muted mb-0">
//                                             <strong className="text-primary">Multiple Modules</strong> |
//                                             <strong> Not available until</strong> {new Date(assignment.availableDate).toLocaleString()} |
//                                             <strong> Due</strong> {new Date(assignment.dueDate).toLocaleString()} |
//                                             {assignment.point} pts
//                                         </p>
//                                         {/* 显示作业描述 */}
//                                         {assignment.description && (
//                                             <div className="p-2 bg-light text-muted rounded">
//                                                 {assignment.description}
//                                             </div>
//                                         )}
//                                     </Col>
//                                     {/* 操作按钮 */}
//                                     <Col xs="auto">
//                                         <AssignmentControlButtons />
//                                     </Col>
//                                 </Row>
//                             </li>
//                         ))}
//                 </ul>
//             </Card>
//         </div>
//     );
// }


// import GreenCheckPlus from "./GreenCheckPlus";
// import { BsGripVertical } from "react-icons/bs";
// import { GiNotebook } from "react-icons/gi";
// import { HiMagnifyingGlass } from "react-icons/hi2";
// import { AiFillCaretDown, AiOutlinePlus } from "react-icons/ai";
// import { BiDotsVerticalRounded } from "react-icons/bi";
// import { Link, useParams } from "react-router-dom"; // 用 Link 代替 href
// import "./index.css";
// import * as db from "../../Database";

// export default function Assignments() {
//     const { cid } = useParams(); // 获取当前课程 ID
//     const assignments = db.assignments;

//     return (
//         <div>
//             <div id="wd-assignments" className="d-flex align-items-center justify-content-between mb-3">
//                 <div className="input-group w-50">
//                     <span className="input-group-text bg-white border-end-0">
//                         <HiMagnifyingGlass />
//                     </span>
//                     <input type="text" className="form-control border-start-0" id="wd-search-assignment" placeholder="Search..." />
//                 </div>
//                 <div className="d-flex">
//                     <button id="wd-add-assignment-group" className="btn btn-lg btn-outline-secondary me-1">+ Group</button>
//                     <button id="wd-add-assignment" className="btn btn-lg btn-danger">+ Assignment</button>
//                 </div>
//             </div>

//             {/* Assignments Section */}
//             <ul id="wd-assignment-list" className="list-group rounded-0">
//                 <li className="list-group-item p-1 mb-3 fs-5 border-grey">
//                     <div className="wd-title p-3 ps-2 bg-secondary text-black">
//                         <BsGripVertical className="me-2 fs-3" />
//                         <AiFillCaretDown /> ASSIGNMENTS
//                         <BiDotsVerticalRounded className="float-end mt-2" />
//                         <AiOutlinePlus className="float-end mt-2" />
//                         <button type="button" className="btn btn-outline-secondary text-black float-end me-1">
//                             40% of Total
//                         </button>
//                     </div>

//                     {/* 过滤并渲染作业 */}
//                     <ul className="list-group list-group-flush">
//                         {assignments
//                             .filter((assignment) => assignment.course === cid) // 只显示当前课程的作业
//                             .map((assignment: any) => (
//                                 <li key={assignment._id} className="wd-assignment-list-item list-group-item p-3 ps-1" style={{ borderLeft: "5px solid green" }}>
//                                     <div className="d-flex justify-content-between align-items-center">
//                                         <div className="d-flex align-items-center">
//                                             <BsGripVertical className="me-2 fs-3" />
//                                             <GiNotebook className="me-2 fs-3" />
//                                             <div>
//                                                 {/* 改为 Link，保证 React Router 的正确跳转 */}
//                                                 <Link to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
//                                                     className="wd-assignment-link" style={{ color: "black", textDecoration: "none", fontWeight: "bold" }}>
//                                                     {assignment.title}
//                                                 </Link>
//                                                 <br />
//                                                 <span className="text-red">Multiple Modules</span>
//                                                 <span style={{ color: "black" }}>
//                                                     <b> | Not available until</b> {assignment.availableDate}
//                                                 </span>
//                                                 <br />
//                                                 <span className="text-black">
//                                                     <b>Due</b> {assignment.dueDate} | {assignment.point} pts <br />
//                                                 </span>
//                                             </div>
//                                         </div>
//                                         <GreenCheckPlus />
//                                     </div>
//                                 </li>
//                             ))}
//                     </ul>
//                 </li>
//             </ul>
//         </div>
//     );
// }




// // H2
// import { FaSearch, FaPlus } from "react-icons/fa";
// import { IoBookOutline, IoEllipsisVertical } from "react-icons/io5";
// import { Button, Form, InputGroup, Card, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import AssignmentControlButtons from "./AssignmentControlButtons";
// import AssignmentDragHandle from "./AssignmentDragHandle"; // Import new component

// export default function Assignments() {
//     const assignments = [
//         { id: "A1", title: "ENV + HTML", due: "May 13 at 11:59pm", points: 100, available: "May 6 at 12:00am" },
//         { id: "A2", title: "CSS + BOOTSTRAP", due: "May 20 at 11:59pm", points: 100, available: "May 13 at 12:00am" },
//         { id: "A3", title: "JAVASCRIPT + REACT", due: "May 27 at 11:59pm", points: 100, available: "May 20 at 12:00am" }
//     ];

//     return (
//         <div id="wd-assignments" className="p-4">
//             <h2 className="text-danger">Assignments</h2>
//             <hr />

//             {/* Top Section with Search and Buttons */}
//             <div className="d-flex justify-content-between align-items-center mb-3">
//                 {/* Search Bar */}
//                 <InputGroup style={{ maxWidth: "300px" }}>
//                     <InputGroup.Text>
//                         <FaSearch />
//                     </InputGroup.Text>
//                     <Form.Control type="text" placeholder="Search for Assignments" />
//                 </InputGroup>

//                 {/* Buttons */}
//                 <div>
//                     <Button variant="secondary" className="me-2">
//                         <FaPlus className="me-1" /> Group
//                     </Button>
//                     <Button variant="danger">
//                         <FaPlus className="me-1" /> Assignment
//                     </Button>
//                 </div>
//             </div>

//             {/* Assignments List */}
//             <Card className="p-3">
//                 {/* HEADER FIX: Add drag handle and align "+" button properly */}
//                 <Row className="align-items-center">
//                     <Col xs="auto">
//                         <AssignmentDragHandle /> {/* 8 dots drag handle */}
//                     </Col>

//                     <Col className="d-flex align-items-center">
//                         <span className="fw-bold fs-5">▾ ASSIGNMENTS</span>
//                     </Col>


//                     <Col className="text-end text-muted">40% of Total</Col>

//                     <Col xs="auto">
//                         <Button variant="light" className="fs-5">+</Button>
//                         <IoEllipsisVertical className="fs-4 text-muted" />
//                     </Col>
//                 </Row>
//                 <hr />

//                 <ul id="wd-assignment-list" className="list-unstyled">
//                     {assignments.map(({ id, title, due, points, available }) => (
//                         <li key={id} className="border-start border-success border-4 p-2 mb-2">
//                             <Row className="align-items-center">
//                                 {/* Eight-dot drag handle */}
//                                 <Col xs="auto">
//                                     <AssignmentDragHandle />
//                                 </Col>
//                                 {/* Book with magnifying glass icon */}
//                                 <Col xs="auto">
//                                     <IoBookOutline className="text-success fs-4" />
//                                 </Col>
//                                 {/* Assignment Info */}
//                                 <Col>
//                                     <Link className="fw-bold text-dark text-decoration-none" to={`/Kambaz/Courses/1234/Assignments/${id}`}>
//                                         {id} - {title}
//                                     </Link>
//                                     <p className="text-muted mb-0">
//                                         <strong className="text-primary">Multiple Modules</strong> | <strong>Not available until</strong> {available} | <strong>Due</strong> {due} | {points} pts
//                                     </p>
//                                 </Col>
//                                 {/* GreenCheckmark and Control Buttons */}
//                                 <Col xs="auto">
//                                     <AssignmentControlButtons />
//                                 </Col>
//                             </Row>
//                         </li>
//                     ))}
//                 </ul>
//             </Card>
//         </div>
//     );
// }
