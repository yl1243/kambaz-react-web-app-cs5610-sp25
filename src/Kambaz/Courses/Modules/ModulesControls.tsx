import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { Button, Dropdown } from "react-bootstrap";
import { MdDoNotDisturbAlt } from "react-icons/md";
import ModuleEditor from "./ModuleEditor";

export default function ModulesControls(
    { moduleName, setModuleName, addModule }:
        { moduleName: string; setModuleName: (title: string) => void; addModule: () => void; }
) {
    return (
        <div id="wd-modules-controls" className="text-nowrap">
            {/* 关键点: 使用Bootstrap原生的data-bs-toggle和data-bs-target属性 */}
            <Button
                variant="danger"
                size="lg"
                className="me-1 float-end"
                id="wd-add-module-btn"
                data-bs-toggle="modal"
                data-bs-target="#wd-add-module-dialog"
            >
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Module
            </Button>

            <Dropdown className="float-end me-2">
                <Dropdown.Toggle variant="secondary" size="lg" id="wd-publish-all-btn">
                    <GreenCheckmark /> Publish All
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item id="wd-publish-all">
                        <GreenCheckmark /> Publish All
                    </Dropdown.Item>
                    <Dropdown.Item id="wd-publish-all-modules-and-items">
                        <GreenCheckmark /> Publish all modules and items
                    </Dropdown.Item>
                    <Dropdown.Item id="wd-publish-modules-only">
                        <GreenCheckmark /> Publish modules only
                    </Dropdown.Item>
                    <Dropdown.Item id="wd-unpublish-all-modules-and-items">
                        <MdDoNotDisturbAlt /> Unpublish all modules and items
                    </Dropdown.Item>
                    <Dropdown.Item id="wd-unpublish-modules-only">
                        <MdDoNotDisturbAlt /> Unpublish modules only
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-view-progress">
                View Progress
            </Button>

            <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-collapse-all">
                Collapse All
            </Button>

            {/* 在这里直接使用ModuleEditor组件，传递需要的props */}
            <ModuleEditor
                dialogTitle="Add Module"
                moduleName={moduleName}
                setModuleName={setModuleName}
                addModule={addModule}
            />
        </div>
    );
}

// HW4 之前的
// import { FaPlus } from "react-icons/fa6";
// import GreenCheckmark from "./GreenCheckmark";
// import { Button, Dropdown } from "react-bootstrap";
// import { FaTimes } from "react-icons/fa";
// import ModuleEditor from "./ModuleEditor";
// import { useState } from "react";

// // 为组件的 props 添加类型
// interface ModulesControlsProps {
//     moduleName: string;
//     setModuleName: (title: string) => void;
//     addModule: () => void;
// }

// export default function ModulesControls({
//     moduleName,
//     setModuleName,
//     addModule
// }: ModulesControlsProps) {
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     return (
//         <div id="wd-modules-controls" className="text-nowrap">
//             <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-module-btn" onClick={handleShow}>
//                 <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
//                 Module
//             </Button>

//             {/* 在这里直接使用ModuleEditor组件，传递需要的props */}
//             <ModuleEditor
//                 show={show}
//                 handleClose={handleClose}
//                 dialogTitle="Add Module"
//                 moduleName={moduleName}
//                 setModuleName={setModuleName}
//                 addModule={addModule}
//             />

//             <Dropdown className="float-end me-2">
//                 <Dropdown.Toggle variant="secondary" size="lg" id="wd-publish-all-btn">
//                     <GreenCheckmark /> Publish All
//                 </Dropdown.Toggle>
//                 <Dropdown.Menu>
//                     <Dropdown.Item id="wd-publish-all">
//                         <GreenCheckmark /> Publish All
//                     </Dropdown.Item>
//                     <Dropdown.Item id="wd-publish-all-modules-and-items">
//                         <GreenCheckmark /> Publish all modules and items
//                     </Dropdown.Item>
//                     <Dropdown.Item id="wd-publish-modules-only">
//                         <GreenCheckmark /> Publish modules only
//                     </Dropdown.Item>
//                     <Dropdown.Divider />
//                     <Dropdown.Item id="wd-unpublish-all-modules-and-items">
//                         <FaTimes className="text-danger me-2" /> Unpublish all modules and items
//                     </Dropdown.Item>
//                     <Dropdown.Item id="wd-unpublish-modules-only">
//                         <FaTimes className="text-danger me-2" /> Unpublish modules only
//                     </Dropdown.Item>
//                 </Dropdown.Menu>
//             </Dropdown>

//             <Button variant="secondary" size="lg" className="me-2 float-end" id="wd-view-progress">
//                 View Progress
//             </Button>

//             <Button variant="secondary" size="lg" className="me-2 float-end" id="wd-collapse-all">
//                 Collapse All
//             </Button>

            
//         </div>
//     );
// }




// import { FaPlus } from "react-icons/fa6";
// import GreenCheckmark from "./GreenCheckmark";
// import { Button, Dropdown } from "react-bootstrap";
// import { FaTimes } from "react-icons/fa";
// import ModuleEditor from "./ModuleEditor";

// export default function ModulesControls() {

//     { moduleName, setModuleName, addModule }:
//     { moduleName: string; setModuleName: (title: string) => void; addModule: () => void; }) {
//         const [show, setShow] = useState(false);
//         const handleClose = () => setShow(false);
//         const handleShow = () => setShow(true);

//         return (
//             <div id="wd-modules-controls" className="text-nowrap">
//                 <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-module-btn" onClick={handleShow} >
//                     <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
//                     Module
//                 </Button>

//                 <ModuleEditor show={show} handleClose={handleClose} dialogTitle="Add Module"
//                     moduleName={moduleName} setModuleName={setModuleName} addModule={addModule} />


//                 <Dropdown className="float-end me-2">
//                     <Dropdown.Toggle variant="secondary" size="lg" id="wd-publish-all-btn">
//                         <GreenCheckmark /> Publish All
//                     </Dropdown.Toggle>
//                     <Dropdown.Menu>
//                         <Dropdown.Item id="wd-publish-all">
//                             <GreenCheckmark /> Publish All
//                         </Dropdown.Item>
//                         <Dropdown.Item id="wd-publish-all-modules-and-items">
//                             <GreenCheckmark /> Publish all modules and items
//                         </Dropdown.Item>
//                         <Dropdown.Item id="wd-publish-modules-only">
//                             <GreenCheckmark /> Publish modules only
//                         </Dropdown.Item>
//                         {/* Create two more items with IDs wd-unpublish-all-modules-and-items and wd-unpublish-modules-only with
//              labels Unpublish all modules and items and Unpublish modules only */}
//                         <Dropdown.Divider />
//                         <Dropdown.Item id="wd-unpublish-all-modules-and-items">
//                             <FaTimes className="text-danger me-2" /> Unpublish all modules and items
//                         </Dropdown.Item>
//                         <Dropdown.Item id="wd-unpublish-modules-only">
//                             <FaTimes className="text-danger me-2" /> Unpublish modules only
//                         </Dropdown.Item>

//                     </Dropdown.Menu>
//                 </Dropdown>

//                 {/* Implement the View Progress and Collapse All buttons with IDs wd-view-progress and wd-collapse-all */}
//                 <Button variant="secondary" size="lg" className="me-2 float-end" id="wd-view-progress">
//                     View Progress
//                 </Button>

//                 <Button variant="secondary" size="lg" className="me-2 float-end" id="wd-collapse-all">
//                     Collapse All
//                 </Button>

//             </div>
//         );
//     }
// }
