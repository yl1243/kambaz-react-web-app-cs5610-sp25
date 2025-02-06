import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

export default function Signin() {
    return (
        <div className="p-4">
            <h1>Signin</h1>
            <Form>
                <Form.Control placeholder="username" className="mb-2" />
                <Form.Control type="password" placeholder="password" className="mb-2" />
                <Button variant="primary" className="w-100 mb-2">Signin</Button>
            </Form>
            <Link to="/Kambaz/Account/Signup">Signup</Link>
        </div>
    );
}

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
