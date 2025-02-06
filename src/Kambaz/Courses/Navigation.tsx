import { NavLink } from "react-router-dom";

export default function CoursesNavigation() {
    return (
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
            <NavLink id="wd-course-home-link"
                className={({ isActive }) => `list-group-item border border-0 ${isActive ? "active" : ""}`}
                to="/Kambaz/Courses/1234/Home">
                Home
            </NavLink>
            <NavLink id="wd-course-modules-link"
                className={({ isActive }) => `list-group-item border border-0 ${isActive ? "active" : ""}`}
                to="/Kambaz/Courses/1234/Modules">
                Modules
            </NavLink>
            <NavLink id="wd-course-piazza-link"
                className={({ isActive }) => `list-group-item border border-0 ${isActive ? "active" : ""}`}
                to="/Kambaz/Courses/1234/Piazza">
                Piazza
            </NavLink>
            <NavLink id="wd-course-zoom-link"
                className={({ isActive }) => `list-group-item border border-0 ${isActive ? "active" : ""}`}
                to="/Kambaz/Courses/1234/Zoom">
                Zoom
            </NavLink>
            <NavLink id="wd-course-assignments-link"
                className={({ isActive }) => `list-group-item border border-0 ${isActive ? "active" : ""}`}
                to="/Kambaz/Courses/1234/Assignments">
                Assignments
            </NavLink>
            <NavLink id="wd-course-quizzes-link"
                className={({ isActive }) => `list-group-item border border-0 ${isActive ? "active" : ""}`}
                to="/Kambaz/Courses/1234/Quizzes">
                Quizzes
            </NavLink>
            <NavLink id="wd-course-people-link"
                className={({ isActive }) => `list-group-item border border-0 ${isActive ? "active" : ""}`}
                to="/Kambaz/Courses/1234/People">
                People
            </NavLink>
        </div>
    );
}
