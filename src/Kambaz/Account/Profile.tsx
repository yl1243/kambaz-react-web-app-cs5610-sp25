import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import { Button, FormControl } from "react-bootstrap";
import * as client from "./client";

export default function Profile() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [profile, setProfile] = useState<any>({ currentUser });


    // updateProfile函数用于更新用户信息
    const updateProfile = async () => {
        const updatedProfile = await client.updateUser(profile);
        dispatch(setCurrentUser(updatedProfile));
    };


    const fetchProfile = () => {
        if (!currentUser) return navigate("/Kambaz/Account/Signin");
        setProfile(currentUser);
    };

    const signout = async () => {
        await client.signout();
        dispatch(setCurrentUser(null));
        navigate("/Kambaz/Account/Signin");
    };

    useEffect(() => { fetchProfile(); }, []);
    return (
        <div className="wd-profile-screen">
            <h3>Profile</h3>
            {profile && (
                <div>
                    <FormControl defaultValue={profile.username} id="wd-username" className="mb-2"
                        onChange={(e) => setProfile({ ...profile, username: e.target.value })} />
                    <FormControl defaultValue={profile.password} id="wd-password" className="mb-2"
                        onChange={(e) => setProfile({ ...profile, password: e.target.value })} />


                    <FormControl
                        placeholder="First Name"
                        defaultValue={profile.firstName}
                        id="wd-firstname"
                        className="mb-2"
                        onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                    />

                    <FormControl
                        placeholder="Last Name"
                        defaultValue={profile.lastName}
                        id="wd-lastname"
                        className="mb-2"
                        onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                    />

                    <FormControl defaultValue={profile.dob} id="wd-dob" className="mb-2"
                        onChange={(e) => setProfile({ ...profile, dob: e.target.value })} type="date" />

                    <FormControl placeholder="Email" defaultValue={profile.email} id="wd-email" className="mb-2"
                        onChange={(e) => setProfile({ ...profile, email: e.target.value })} />

                    <select onChange={(e) => setProfile({ ...profile, role: e.target.value })}
                        className="form-control mb-2" id="wd-role">
                        <option value="USER">User</option>            <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>      <option value="STUDENT">Student</option>
                    </select>

                    <button onClick={updateProfile} className="btn btn-primary w-100 mb-2"> Update </button>

                    <Button onClick={signout} className="w-100 mb-2" id="wd-signout-btn">
                        Sign out
                    </Button>
                </div>
            )}
        </div>);
}




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

// // import { Link } from "react-router-dom";
// import { Form, Button } from "react-bootstrap";
// // import { FaRegCalendarAlt } from "react-icons/fa";

// export default function Profile() {
//     return (
//         <div className="p-4">
//             <h1>Profile</h1>
//             <Form>
//                 <Form.Control defaultValue="alice" placeholder="username" className="mb-2" />
//                 <Form.Control defaultValue="123" type="password" placeholder="password" className="mb-2" />
//                 <Form.Control defaultValue="Alice" placeholder="First Name" className="mb-2" />
//                 <Form.Control defaultValue="Wonderland" placeholder="Last Name" className="mb-2" />
//                 <div className="position-relative">
//                     <Form.Control type="date" defaultValue="2000-01-01" className="mb-2" />
//                     {/* <FaRegCalendarAlt className="position-absolute end-0 top-50 translate-middle-y me-2" /> */}
//                 </div>
//                 <Form.Control type="email" defaultValue="alice@wonderland.com" className="mb-2" />
//                 <Form.Select className="mb-2">
//                     <option>User</option>
//                     <option>Admin</option>
//                     <option>Faculty</option>
//                     <option>Student</option>
//                 </Form.Select>
//                 <Button variant="danger" className="w-100">Signout</Button>
//             </Form>
//         </div>
//     );
// }

