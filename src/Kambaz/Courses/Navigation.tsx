import { Link, useParams, useLocation } from "react-router-dom";

export default function CourseNavigation() {
    const { cid } = useParams();
    const { pathname } = useLocation();

    const links = [
        { to: "Home", label: "Home", id: "home" },
        { to: "Modules", label: "Modules", id: "modules" },
        { to: "Piazza", label: "Piazza", id: "piazza" },
        { to: "Zoom", label: "Zoom", id: "zoom" },
        { to: "Assignments", label: "Assignments", id: "assignments" },
        { to: "Quizzes", label: "Quizzes", id: "quizzes" },
        { to: "People", label: "People", id: "people" }
    ];

    return (
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
            {links.map((link) => (
                <Link
                    key={link.id}
                    to={`/Kambaz/Courses/${cid}/${link.to}`}
                    id={`wd-course-${link.id}-link`}
                    className={`list-group-item border border-0 ${pathname.includes(link.to)
                        ? "active"
                        : "text-danger"
                        }`}
                >
                    {link.label}
                </Link>
            ))}
        </div>
    );
}

// HW4 之前的
// import { Link, useParams, useLocation } from "react-router-dom";


// export default function CoursesNavigation() {
//     const { cid } = useParams();
//     const location = useLocation();

//     const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

//     return (
//         <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
//             {links.map((link) => {
//                 const isActive = location.pathname.includes(link);
//                 return (
//                     <Link
//                         key={link}
//                         to={`/Kambaz/Courses/${cid}/${link}`}
//                         className={`list-group-item border border-0 ${isActive ? "active" : "text-danger"}`}
//                     >
//                         {link}
//                     </Link>
//                 );
//             })}
//         </div>
//     );
// }

// HW2
// import { NavLink } from "react-router-dom";

// export default function CoursesNavigation() {
//     return (
//         <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
//             <NavLink id="wd-course-home-link"
//                 className={({ isActive }) => `list-group-item border border-0 ${isActive ? "active" : ""}`}
//                 to="/Kambaz/Courses/1234/Home">
//                 Home
//             </NavLink>
//             <NavLink id="wd-course-modules-link"
//                 className={({ isActive }) => `list-group-item border border-0 ${isActive ? "active" : ""}`}
//                 to="/Kambaz/Courses/1234/Modules">
//                 Modules
//             </NavLink>
//             <NavLink id="wd-course-piazza-link"
//                 className={({ isActive }) => `list-group-item border border-0 ${isActive ? "active" : ""}`}
//                 to="/Kambaz/Courses/1234/Piazza">
//                 Piazza
//             </NavLink>
//             <NavLink id="wd-course-zoom-link"
//                 className={({ isActive }) => `list-group-item border border-0 ${isActive ? "active" : ""}`}
//                 to="/Kambaz/Courses/1234/Zoom">
//                 Zoom
//             </NavLink>
//             <NavLink id="wd-course-assignments-link"
//                 className={({ isActive }) => `list-group-item border border-0 ${isActive ? "active" : ""}`}
//                 to="/Kambaz/Courses/1234/Assignments">
//                 Assignments
//             </NavLink>
//             <NavLink id="wd-course-quizzes-link"
//                 className={({ isActive }) => `list-group-item border border-0 ${isActive ? "active" : ""}`}
//                 to="/Kambaz/Courses/1234/Quizzes">
//                 Quizzes
//             </NavLink>
//             <NavLink id="wd-course-people-link"
//                 className={({ isActive }) => `list-group-item border border-0 ${isActive ? "active" : ""}`}
//                 to="/Kambaz/Courses/1234/People">
//                 People
//             </NavLink>
//         </div>
//     );
// }
