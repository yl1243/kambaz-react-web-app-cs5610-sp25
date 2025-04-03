// py的
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
// import * as db from "../Database";

import * as client from "./client"; // HW5

export default function Signin() {
    // 添加credentials状态变量用于存储用户输入的凭据
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // 登录函数，验证用户凭据并处理登录逻辑

    // hw5新的
    const signin = async () => {
        const user = await client.signin(credentials);
        if (!user) return;
        dispatch(setCurrentUser(user));
        navigate("/Kambaz/Dashboard");
    };

    // const { currentUser } = useSelector((state: any) => state.accountReducer);

    // if (currentUser) {
    //     return null;
    // }

    // 旧的
    // const signin = () => {
    //     // 在数据库中搜索匹配的用户
    //     const user = db.users.find(
    //         (u) => u.username === credentials.username && u.password === credentials.password
    //     );

    //     // 如果找到匹配的用户
    //     if (user) {
    //         // 将用户存储到Redux中
    //         dispatch(setCurrentUser(user));
    //         // 导航到Dashboard页面
    //         navigate("/Kambaz/Dashboard");
    //     }
    // };

    return (
        <div id="wd-signin-screen">
            <h1>Sign in</h1>
            <input
                id="wd-username"
                placeholder="username"
                className="form-control mb-2"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
            />
            <input
                id="wd-password"
                placeholder="password"
                type="password"
                className="form-control mb-2"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            />
            <button
                id="wd-signin-btn"
                className="btn btn-primary w-100 mb-2"
                onClick={signin}
            >
                Sign in
            </button>
            <Link id="wd-signup-link" to="/Kambaz/Account/Signup">Sign up</Link>
        </div>
    );
}

// // hw4旧的
// import { Button, FormControl } from "react-bootstrap";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { setCurrentUser } from "./reducer";
// import { useDispatch } from "react-redux";
// import * as db from "../Database";
// import * as client from "./client";

// export default function Signin() {
//     const [credentials, setCredentials] = useState<any>({});
//     const [error, setError] = useState<string>('');
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const signin = async () => {
//         const user = await client.signin(credentials);

//         if (!user) {
//             setError("Invalid username or password.");
//             return; // Return early if no match found
//         }

//         console.log("User found:", user); // Debugging

//         // 添加 role 字段
//         // const userWithRole = { ...user, role: "FACULTY" }; // 或者根据实际情况设置 role
//         dispatch(setCurrentUser(user));
//         navigate("Kambaz/Dashboard");
//     };

//     return (
//         <div id="wd-signin-screen">
//             <h1>Sign in</h1>
//             <FormControl
//                 defaultValue={credentials.username}
//                 onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
//                 className="mb-2"
//                 placeholder="username"
//                 id="wd-username"
//             />
//             <FormControl
//                 defaultValue={credentials.password}
//                 onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
//                 className="mb-2"
//                 placeholder="password"
//                 type="password"
//                 id="wd-password"
//             />
//             <Button onClick={signin} id="wd-signin-btn" className="w-100">
//                 Sign in
//             </Button>
//             {error && <p style={{ color: "red" }}>{error}</p>}
//             <Link id="wd-signup-link" to="/Kambaz/Account/Signup"> Sign up </Link>
//         </div>
//     );
// }



// import { Form, Button, FormControl } from "react-bootstrap";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { setCurrentUser } from "./reducer";
// import { useDispatch } from "react-redux";
// import * as db from "../Database";

// export default function Signin() {

//     const [credentials, setCredentials] = useState<any>({});
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const signin = () => {
//         const user = db.users.find(
//             (u: any) => u.username === credentials.username && u.password === credentials.password);
//         if (!user) return;
//         dispatch(setCurrentUser(user));
//         navigate("/Kambaz/Dashboard")
//     };

//     return (
//         <div id="wd-signin-screen">
//             <h1>Sign in</h1>
//             <FormControl defaultValue={credentials.username}
//                 onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
//                 className="mb-2" placeholder="username" id="wd-username" />
//             <FormControl defaultValue={credentials.password}
//                 onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
//                 className="mb-2" placeholder="password" type="password" id="wd-password" />
//             <Button onClick={signin} id="wd-signin-btn" className="w-100" > Sign in </Button>
//             <Link id="wd-signup-link" to="/Kambaz/Account/Signup"> Sign up </Link>
//         </div>
//     );
// }

// import { Link } from "react-router-dom";
// export default function Signin() {
//     return (
//         <div id="wd-signin-screen">
//             <h3>Sign in</h3>
//             <input placeholder="username" id="wd-username" /> <br />
//             <input placeholder="password" id="wd-password" type="password" /> <br />
//             <Link to="/Kambaz/Dashboard" id="wd-signin-btn">Sign in</Link><br />
//             <Link to="/Kambaz/Account/Signup" id="wd-signup-link">Sign up</Link>
//         </div>

//     );
// }
