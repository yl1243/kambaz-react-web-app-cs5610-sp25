// import { Link } from "react-router-dom";
// export default function Profile() {
//     return (
//         <div id="wd-profile-screen">
//             <h3>Profile</h3>
//             <input id="wd-username" value="alice" placeholder="username" /><br />
//             <input id="wd-password" value="123" placeholder="password" type="password" /><br />
//             <input id="wd-firstname" value="Alice" placeholder="First Name" /><br />
//             <input id="wd-lastname" value="Wonderland" placeholder="Last Name" /><br />
//             <input id="wd-dob" value="2000-01-01" type="date" /><br />
//             <input id="wd-email" value="alice@wonderland" type="email" /><br />
//             <select id="wd-role">
//                 <option value="USER">User</option>
//                 <option value="ADMIN">Admin</option>
//                 <option value="FACULTY">Faculty</option>
//                 <option value="STUDENT">Student</option>
//             </select><br />
//             <Link to="/Kambaz/Account/Signin" >Sign out</Link>
//         </div>
//     );
// }

// import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
// import { FaRegCalendarAlt } from "react-icons/fa";

export default function Profile() {
    return (
        <div className="p-4">
            <h1>Profile</h1>
            <Form>
                <Form.Control defaultValue="alice" placeholder="username" className="mb-2" />
                <Form.Control defaultValue="123" type="password" placeholder="password" className="mb-2" />
                <Form.Control defaultValue="Alice" placeholder="First Name" className="mb-2" />
                <Form.Control defaultValue="Wonderland" placeholder="Last Name" className="mb-2" />
                <div className="position-relative">
                    <Form.Control type="date" defaultValue="2000-01-01" className="mb-2" />
                    {/* <FaRegCalendarAlt className="position-absolute end-0 top-50 translate-middle-y me-2" /> */}
                </div>
                <Form.Control type="email" defaultValue="alice@wonderland.com" className="mb-2" />
                <Form.Select className="mb-2">
                    <option>User</option>
                    <option>Admin</option>
                    <option>Faculty</option>
                    <option>Student</option>
                </Form.Select>
                <Button variant="danger" className="w-100">Signout</Button>
            </Form>
        </div>
    );
}
