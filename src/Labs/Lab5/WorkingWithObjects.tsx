import { useState } from "react";
import { FormControl } from "react-bootstrap";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10",
        completed: false,
        score: 0,
    });

    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`
    const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;


    const [module, setModule] = useState({
        id: "1",
        name: "Module One",
        description: "This is a module",
        course: "Web Dev",
        score: "0",
        completed: "false",
    });

    return (
        <div id="wd-working-with-objects">
            <h3>Working With Objects</h3>

            {/* Assignment Section */}
            <h4>Modifying Assignment Properties</h4>
            <a id="wd-update-assignment-title"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
                Update Title
            </a>
            <FormControl className="w-75" id="wd-assignment-title"
                defaultValue={assignment.title} onChange={(e) =>
                    setAssignment({ ...assignment, title: e.target.value })} />
            <hr />


            <h4>Retrieving Assignment Objects</h4>
            <a id="wd-retrieve-assignments" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment`}>
                Get Assignment
            </a><hr />


            <h4>Retrieving Properties Assignment Title</h4>
            <a id="wd-retrieve-assignment-title" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment/title`}>
                Get Title
            </a><hr />

            {/* Assignment Score and Completed */}
            <h4>Editing Assignment Score</h4>
            <FormControl type="number" className="w-50"
                value={assignment.score}
                onChange={(e) => setAssignment({ ...assignment, score: Number(e.target.value) })}
            />
            <a className="btn btn-warning mt-2 ms-2"
                href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
                Update Score
            </a>

            <div className="form-check mt-3">
                <input className="form-check-input" type="checkbox"
                    checked={assignment.completed}
                    onChange={(e) =>
                        setAssignment({ ...assignment, completed: e.target.checked })
                    } />
                <label className="form-check-label">Completed</label>
            </div>


            <a className="btn btn-warning mt-2"
                href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
                Update Completed
            </a>
            <hr />


            {/* Module Section */}
            <h3>Working with Module</h3>

            {/* 编辑 Module Name */}
            <h4>Editing Module Name</h4>
            <FormControl className="w-75"
                value={module.name}
                onChange={(e) => setModule({ ...module, name: e.target.value })}
            />
            <a className="btn btn-success mt-2"
                href={`${MODULE_API_URL}/name/${module.name}`}>
                Update Module Name
            </a>
            <hr />

            {/* 编辑 Module Description */}
            <h4>Editing Module Description</h4>
            <FormControl className="w-75"
                value={module.description}
                onChange={(e) => setModule({ ...module, description: e.target.value })}
            />
            <a className="btn btn-success mt-2"
                href={`${MODULE_API_URL}/description/${module.description}`}>
                Update Module Description
            </a>
            <hr />

            {/* 编辑 Module Score */}
            <h4>Editing Module Score</h4>
            <FormControl type="number" className="w-50"
                value={module.score}
                onChange={(e) => setModule({ ...module, score: e.target.value })}
            />
            <a className="btn btn-warning mt-2 ms-2"
                href={`${MODULE_API_URL}/score/${module.score}`}>
                Update Score
            </a>

            {/* 编辑 Module Completed */}
            <div className="form-check mt-3">
                <input className="form-check-input" type="checkbox"
                    checked={module.completed === "true"}
                    onChange={(e) =>
                        setModule({ ...module, completed: e.target.checked.toString() })
                    } />
                <label className="form-check-label">Completed</label>
            </div>
            <a className="btn btn-warning mt-2"
                href={`${MODULE_API_URL}/completed/${module.completed}`}>
                Update Completed
            </a>
            <hr />


        </div>
    );
}
