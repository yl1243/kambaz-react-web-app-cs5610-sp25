// hh的 attempt
import { useState } from "react";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export default function Module() {
    const [module, setModule] = useState({
        id: "1",
        name: "module one",
        description: "this is a module",
        course: "web dev",
        score: "0",
        completed: "false",
    });

    const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;
    return (
        <div id="wd-module">
            <h3>On Your Own - Module</h3>
            <h4>Retrieving Module</h4>
            <a
                id="wd-retrieve-module"
                className="link-spacing"
                href={`${REMOTE_SERVER}/lab5/module`}
            >
                Get Module
            </a>
            <a
                id="wd-retrieve-module-name"
                className="link-spacing"
                href={`${REMOTE_SERVER}/lab5/module/name`}
            >
                Get Module Name
            </a>
            <hr />
            <a
                id="wd-update-module-name"
                className="btn btn-primary float-end"
                href={`${MODULE_API_URL}/name/${module.name}`}
            >
                Update name
            </a>
            <input
                className="form-control w-75"
                id="wd-module-name"
                defaultValue={module.name}
                onChange={(e) => setModule({ ...module, name: e.target.value })}
            />
            <hr />
            <a
                id="wd-update-module-score"
                className="btn btn-primary float-end"
                href={`${MODULE_API_URL}/score/${module.score}`}
            >
                Update score
            </a>
            <input
                className="form-control w-75"
                id="wd-module-score"
                defaultValue={module.score}
                onChange={(e) => setModule({ ...module, score: e.target.value })}
            />
            <hr />
            <a
                id="wd-update-module-completed"
                className="btn btn-primary float-end"
                href={`${MODULE_API_URL}/completed/${module.completed}`}
            >
                Update completed
            </a>
            <input
                type="checkbox"
                className="form-check-input"
                id="wd-module-completed"
                checked={module.completed === "true"} // Set checked attribute to reflect the completed state
                onChange={
                    (e) => setModule({ ...module, completed: e.target.checked.toString() }) // Toggle completed status
                }
            />
            <label htmlFor="wd-module-completed" className="form-check-label ms-2">
                Completed
            </label>
            <hr />

            <a
                id="wd-update-module-description"
                className="btn btn-primary float-end"
                href={`${MODULE_API_URL}/description/${module.description}`}
            >
                Update description
            </a>
            <input
                className="form-control w-75"
                id="wd-module-name"
                defaultValue={module.description}
                onChange={(e) => setModule({ ...module, description: e.target.value })}
            />
            <hr />
        </div>
    );
}


// HW5之前的
// const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
// import { useState } from "react";
// import { FormControl } from "react-bootstrap";

// export default function Module() {
//     const [module, setModule] = useState({
//         id: "1",
//         name: "module one",
//         description: "this is a module",
//         course: "web dev",
//         score: "0",
//         completed: "false",
//     });

//     const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

//     return (
//         <div id="wd-module">
//             <h3>On Your Own - Module</h3>

//             <h4>Retrieving Module</h4>
//             <a id="wd-retrieve-module"
//                 className="btn btn-primary "
//                 href={`${REMOTE_SERVER}/lab5/module`}>
//                 Get Module
//             </a>

//             <hr />
//             {/* 获取 module 名称的按钮 */}
//             <h4>Retrieving Module Name</h4>
//             <a id="wd-retrieve-module-name"
//                 className="btn btn-primary "
//                 href={`${REMOTE_SERVER}/lab5/module/name`}>
//                 Get Module Name
//             </a>
//             <hr />





//         </div>
//     )
// }