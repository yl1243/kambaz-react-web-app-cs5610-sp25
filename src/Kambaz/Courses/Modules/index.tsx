import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { useParams } from "react-router";
// import * as db from "../../Database";

import * as courseClient from "../client";
import * as modulesClient from "./client";


import { useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
import { FormControl, ListGroup } from "react-bootstrap";

// add delete update modules
import { setModules, addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";

export default function Modules() {
    const { cid } = useParams(); // 获取当前课程 ID
    // const modules = db.modules; // 获取所有模块
    // const [modules, setModules] = useState<any[]>(db.modules);
    const [moduleName, setModuleName] = useState("");

    const { modules } = useSelector((state: any) => state.modulesReducer);


    const dispatch = useDispatch();

    // saveModule 函数用于保存模块
    const saveModule = async (module: any) => {
        await modulesClient.updateModule(module);
        dispatch(updateModule(module));
    };

    // createModuleForCourse 函数用于创建新模块
    const createModuleForCourse = async () => {
        if (!cid) return;
        const newModule = { name: moduleName, course: cid };
        const module = await courseClient.createModuleForCourse(cid, newModule);
        dispatch(addModule(module));
    };


    // fetchModules 
    const fetchModulesForCourse = async () => {
        try {
            const modules = await courseClient.findModulesForCourse(cid!);
            dispatch(setModules(modules));
        } catch (error) {
            console.error("Error fetching modules:", error);
        }
        
        
    };

    useEffect(() => {
        fetchModulesForCourse();
    }, [cid]);

    // const fetchModules = async () => {
    //     const modules = await courseClient.findModulesForCourse(cid as string);
    //     dispatch(setModules(modules));
    // };





    const { currentUser } = useSelector((state: any) => state.accountReducer); // 获取当前用户

    // add Module Handler
    const addModuleHandler = async () => {
        const newModule = await courseClient.createModuleForCourse(cid!, {
            name: moduleName,
            course: cid,
        });
        dispatch(addModule(newModule));
        setModuleName("");
    };

    // remove Module Handler 
    const deleteModuleHandler = async (moduleId: any) => {
        await modulesClient.deleteModule(moduleId);
        dispatch(deleteModule(moduleId));
    };

    // update Module Handler
    const updateModuleHandler = async (module: any) => {
        await modulesClient.updateModule(module);
        dispatch(updateModule(module));
    };



    return (
        <div className="container">
            {currentUser && (currentUser.role === "FACULTY" || currentUser.role === "ADMIN") && (
                <ModulesControls
                    // addModule={createModuleForCourse}
                    addModule={addModuleHandler}
                    setModuleName={setModuleName}  // 将 setModuleName 传递给 ModulesControls
                    moduleName={moduleName}  // 将 moduleName 传递给 ModulesControls
                    // addModule={() => {
                    //     dispatch(addModule({ name: moduleName, course: cid }));
                    //     setModuleName("");
                    // }} // 将 addModule 传递给 ModulesControls
                    
            />)
            }
            <br />
            <br />
            <br />
            <br />
            <ListGroup id="wd-modules" className="rounded-0">
                {modules
                    // .filter((module: any) => module.course === cid) // 过滤出当前课程的模块
                    .map((module: any) => (
                        <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                            {/* 模块标题 */}
                            <div className="wd-title p-3 ps-2 bg-secondary">

                                {/* 新加 */}
                                <BsGripVertical className="me-2 fs-3" />
                                {!module.editing && module.name}
                                {module.editing && (
                                    <FormControl className="w-50 d-inline-block"
                                        onChange={(e) => updateModuleHandler({ ...module, name: e.target.value })}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                updateModuleHandler({ ...module, editing: false });
                                            }
                                        }}
                                        defaultValue={module.name} />
                                )}

                                {currentUser && (currentUser.role === "FACULTY" || currentUser.role === "ADMIN") && (
                                    <ModuleControlButtons
                                        moduleId={module._id}
                                        // deleteModule={(moduleId) => {
                                        //     dispatch(deleteModule(moduleId));
                                        // }}
                                        deleteModule={(moduleId) => deleteModuleHandler(moduleId)} // HW5删除模块
                                        editModule={(moduleId) => dispatch(editModule(moduleId))} />)}
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
            </ListGroup>
        </div>
    );
}

// // addModule 函数用于添加新模块
// const addModule = () => {
//     setModules([...modules, { _id: uuidv4(), name: moduleName, course: cid, lessons: [] }]);
//     setModuleName("");
// };

// // deleteModule 函数用于删除模块
// const deleteModule = (moduleId: string) => {
//     setModules(modules.filter((m) => m._id !== moduleId));
// };

// // editModule 函数用于编辑模块
// const editModule = (moduleId: string) => {
//     setModules(modules.map((m) => (m._id === moduleId ? { ...m, editing: true } : m)));
// };

// // updateModule 函数用于更新模块
// const updateModule = (module: any) => {
//     setModules(modules.map((m) => (m._id === module._id ? module : m)));
// };


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

