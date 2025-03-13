



import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Signin from "./Signin";
import Signup from "./Signup";
import Profile from "./Profile";
import ProtectedRoute from "./ProtectRoute"; // Import the ProtectedRoute component
import Dashboard from "../Dashboard";

export default function AccountNavigation() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    // const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
    // const { pathname } = useLocation();

    return (
        <div className="list-group">
            <Routes>
                <Route path="/" element={<Navigate to={currentUser ? "/Kambaz/Account/Profile" : "/Kambaz/Account/Signin"} />} />
                <Route path="/Signin" element={<Signin />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/Profile" element={<Profile />} />

                {/* Protect Dashboard and other routes with ProtectedRoute */}
                <Route path="/Dashboard" element={<ProtectedRoute><Dashboard courses={[]} course={undefined} setCourse={function (course: any): void {
                    throw new Error("Function not implemented.");
                }} addNewCourse={function (): void {
                    throw new Error("Function not implemented.");
                }} deleteCourse={function (courseId: string): void {
                    throw new Error("Function not implemented.");
                }} updateCourse={function (): void {
                    throw new Error("Function not implemented.");
                }} /></ProtectedRoute>} />
            </Routes>
        </div>
    );
}


// import { Link } from "react-router-dom";
// export default function AccountNavigation() {
//     return (
//         <div id="wd-account-navigation">
//             <Link to={`/Kambaz/Account/Signin`} > Signin </Link> <br />
//             <Link to={`/Kambaz/Account/Signup`} > Signup </Link> <br />
//             <Link to={`/Kambaz/Account/Profile`} > Profile </Link> <br />
//         </div>
//     );
// }









// import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";
// import Signin from "./Signin";
// import Signup from "./Signup";
// import Profile from "./Profile";


// export default function AccountNavigation() {
//     const { currentUser } = useSelector((state: any) => state.accountReducer);
//     const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
//     const { pathname } = useLocation();

//     return (
//         <div className="list-group">
//             <Routes>
//                 <Route path="/" element={<Navigate to={currentUser ? "/Kambaz/Account/Profile" : "/Kambaz/Account/Signin"} />} />
//                 <Route path="/Signin" element={<Signin />} />
//                 <Route path="/Signup" element={<Signup />} />
//                 <Route path="/Profile" element={<Profile />} />
//             </Routes>

//         </div>
//     );
// }
