import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Modules() {
    const { cid } = useParams(); // 获取当前课程 ID
    const modules = db.modules; // 获取所有模块

    return (
        <div className="container">
            <ModulesControls />
            <br />
            <br />
            <br />
            <br />
            <ul id="wd-modules" className="list-group rounded-0">
                {modules
                    .filter((module: any) => module.course === cid) // 过滤出当前课程的模块
                    .map((module: any) => (
                        <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                            {/* 模块标题 */}
                            <div className="wd-title p-3 ps-2 bg-secondary">
                                <BsGripVertical className="me-2 fs-3" />
                                {module.name}
                                <ModuleControlButtons />
                            </div>

                            {/* 模块描述（如果存在） */}
                            {module.description && (
                                <div className="p-3 bg-light text-muted">
                                    {module.description}
                                </div>
                            )}

                            {/* 课程单元 (Lessons) */}
                            {module.lessons && (
                                <ul className="wd-lessons list-group rounded-0">
                                    {module.lessons.map((lesson: any) => (
                                        <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1">
                                            <BsGripVertical className="me-2 fs-3" />
                                            {lesson.name}{" "}
                                            <LessonControlButtons />
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
            </ul>
        </div>
    );
}

// HW2
// import { ListGroup } from "react-bootstrap";
// import { BsGripVertical } from "react-icons/bs";
// import ModulesControls from "./ModulesControls";
// import LessonControlButtons from "./LessonControlButtons";
// import ModuleControlButtons from "./ModuleControlButtons";
// import { useParams } from "react-router";
// import * as db from "../../Database";

// export default function Modules() {
//     const {cid } = useParams();
//     const modules = db.modules;
//     return (
//         <div>
//             {/* Implement Collapse All button, View Progress button, etc. */}
//             <ModulesControls /><br /><br /><br />

//             <ListGroup id="wd-modules" className="rounded-0">
//                 {/* Week 1 */}
//                 <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
//                     <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between">
//                         <div>
//                             <BsGripVertical className="me-2 fs-3" /> Week 1
//                         </div>
//                         <ModuleControlButtons />
//                     </div>

//                     <ListGroup className="wd-lessons rounded-0">
//                         <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex justify-content-between">
//                             <div>
//                                 <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES
//                             </div>
//                             <LessonControlButtons />
//                         </ListGroup.Item>
//                         <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex justify-content-between">
//                             <div>
//                                 <BsGripVertical className="me-2 fs-3" /> Introduction to the course
//                             </div>
//                             <LessonControlButtons />
//                         </ListGroup.Item>
//                         <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex justify-content-between">
//                             <div>
//                                 <BsGripVertical className="me-2 fs-3" /> Learn what is Web Development
//                             </div>
//                             <LessonControlButtons />
//                         </ListGroup.Item>
//                     </ListGroup>
//                 </ListGroup.Item>

//                 {/* Week 2 */}
//                 <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
//                     <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between">
//                         <div>
//                             <BsGripVertical className="me-2 fs-3" /> Week 2
//                         </div>
//                         <ModuleControlButtons />
//                     </div>

//                     <ListGroup className="wd-lessons rounded-0">
//                         <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex justify-content-between">
//                             <div>
//                                 <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES
//                             </div>
//                             <LessonControlButtons />
//                         </ListGroup.Item>
//                         <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex justify-content-between">
//                             <div>
//                                 <BsGripVertical className="me-2 fs-3" /> Implement CSS and Bootstrap
//                             </div>
//                             <LessonControlButtons />
//                         </ListGroup.Item>
//                         <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex justify-content-between">
//                             <div>
//                                 <BsGripVertical className="me-2 fs-3" /> Selectors by tag, ID, classes, and document structure
//                             </div>
//                             <LessonControlButtons />
//                         </ListGroup.Item>
//                         <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex justify-content-between">
//                             <div>
//                                 <BsGripVertical className="me-2 fs-3" /> Styling color and background color
//                             </div>
//                             <LessonControlButtons />
//                         </ListGroup.Item>
//                     </ListGroup>
//                 </ListGroup.Item>
//             </ListGroup>
//         </div>
        
//     );
// }



// export default function Modules() {
//     return (
//         <div>
//             {/* Implement Collapse All button, View Progress button, etc. */}
//             <ul id="wd-modules">
//                 <li className="wd-module">
//                     <div className="wd-title">Week 1,, Lecture 1: Course Introduction, Syllabus, Agenda</div>
//                     <ul className="wd-lessons">

//                         <li className="wd-lesson">
//                             <span className="wd-title">LEARNING OBJECTIVES</span>
//                             <ul className="wd-content">
//                                 <li className="wd-content-item">Introduction to the course</li>
//                                 <li className="wd-content-item">Learn what is Web Development</li>
//                             </ul>
//                         </li>

//                         <li className="wd-lesson">
//                             <span className="wd-title">READING</span>
//                             <ul className="wd-content">
//                                 <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction & Set Up Enviroment</li>
//                                 <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating User Interface</li>
//                             </ul>
//                         </li>

//                         <li className="wd-lesson">
//                             <span className="wd-title">SLIDES</span>
//                             <ul className="wd-content">
//                                 <li className="wd-content-item">Introduction to Web Development</li>
//                                 <li className="wd-content-item">Creating an HTTP server with Node.js</li>
//                                 <li className="wd-content-item">Creating a React Application</li>
//                             </ul>
//                         </li>
//                     </ul>
//                 </li>


//                 {/* Week 1, Lecture 2 */}
//                 <li className="wd-module">
//                     <div className="wd-title">Week 1, Lecture 2 - Formatting User Interfaces with HTML</div>
//                     <ul className="wd-lessons">
//                         <li className="wd-lesson">
//                             <span className="wd-title">LEARNING OBJECTIVES</span>
//                             <ul className="wd-content">
//                                 <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
//                                 <li className="wd-content-item">Deploy the assignment to Netlify</li>
//                             </ul>
//                         </li>

//                         <li className="wd-lesson">
//                             <span className="wd-title">SLIDES</span>
//                             <ul className="wd-content">
//                                 <li className="wd-content-item">Introduction to HTML and the DOM</li>
//                                 <li className="wd-content-item">Formatting Web content with Headings</li>
//                                 <li className="wd-content-item">Formatting content with Lists and Tables</li>
//                             </ul>
//                         </li>
//                     </ul>
//                 </li>



//                 {/* Week 2 */}
//                 <li className="wd-module">
//                     <div className="wd-title">Week 2</div>
//                     <ul className="wd-lessons">
//                         <li className="wd-lesson">
//                             <span className="wd-title">LEARNING OBJECTIVES</span>
//                             <ul className="wd-content">
//                                 <li className="wd-content-item">Emplement css and bootstrap</li>
//                                 <li className="wd-content-item">Selectors by tag ID, classes, and document structure</li>
//                                 <li className="wd-content-item">Styling color and background color</li>
//                             </ul>

//                         </li>
//                     </ul>
//                 </li>
//             </ul>
//         </div>
//     );
// }

