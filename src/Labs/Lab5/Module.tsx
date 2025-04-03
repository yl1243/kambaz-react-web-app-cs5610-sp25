const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
import { useState } from "react";
import { FormControl } from "react-bootstrap";

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
            <a id="wd-retrieve-module"
                className="btn btn-primary "
                href={`${REMOTE_SERVER}/lab5/module`}>
                Get Module
            </a>

            <hr />
            {/* 获取 module 名称的按钮 */}
            <h4>Retrieving Module Name</h4>
            <a id="wd-retrieve-module-name"
                className="btn btn-primary "
                href={`${REMOTE_SERVER}/lab5/module/name`}>
                Get Module Name
            </a>
            <hr />





        </div>
    )
}