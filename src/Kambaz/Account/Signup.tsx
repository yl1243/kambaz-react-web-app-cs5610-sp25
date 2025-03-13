import { Link, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import * as db from "../Database";

export default function Signup() {
    const [credentials, setCredentials] = useState<any>({});
    const [error, setError] = useState<string>("");
    const navigate = useNavigate();

    const handleSignup = () => {
        const existingUser = db.users.find(
            (u: any) => u.username === credentials.username
        );

        if (existingUser) {
            setError("Username already exists.");
            return; // Return early if user already exists
        }



        // Assuming db.users is an array, you can push the new user
        // !!!!!
        db.users.push({ ...credentials, role: "FACULTY" }); // Add role to user, DEFAULT "FACULTY"

        navigate("/Kambaz/Account/Signin"); // Redirect to sign in after successful signup
    };

    return (
        <div className="p-4">
            <h1>Signup</h1>
            <Form>
                <Form.Control
                    placeholder="username"
                    className="mb-2"
                    onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                />
                <Form.Control
                    type="password"
                    placeholder="password"
                    className="mb-2"
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                />
                <Form.Control
                    type="password"
                    placeholder="verify password"
                    className="mb-2"
                />
                <Button variant="primary" className="w-100 mb-2" onClick={handleSignup}>
                    Signup
                </Button>
            </Form>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <Link to="/Kambaz/Account/Signin">Signin</Link>
        </div>
    );
}



// import { Link } from "react-router-dom";
// import { Form, Button } from "react-bootstrap";

// export default function Signup() {
//     return (
//         <div className="p-4">
//             <h1>Signup</h1>
//             <Form>
//                 <Form.Control placeholder="username" className="mb-2" />
//                 <Form.Control type="password" placeholder="password" className="mb-2" />
//                 <Form.Control type="password" placeholder="verify password" className="mb-2" />
//                 <Button variant="primary" className="w-100 mb-2">Signup</Button>
//             </Form>
//             <Link to="/Kambaz/Account/Signin">Signin</Link>
//         </div>
//     );
// }

// import { Link } from "react-router-dom";
// export default function Signup() {
//     return (
//         <div id="wd-signup-screen">
//             <h3>Sign up</h3>
//             <input placeholder="username" className="wd-username" /><br />
//             <input placeholder="password" type="password" className="wd-password" /><br />
//             <input placeholder="verify password" type="password" className="wd-password-verify" /><br />
//             <Link to="/Kambaz/Account/Profile" > Sign up </Link><br />
//             <Link to="/Kambaz/Account/Signin" >Sign in</Link>
//         </div>
//     );
// }
