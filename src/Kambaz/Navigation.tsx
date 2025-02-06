import { NavLink } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { BsAirplane } from "react-icons/bs";
import { ImLab } from "react-icons/im";


export default function KambazNavigation() {
    return (
        <div id="wd-kambaz-navigation" style={{ width: 120 }}
            className="list-group rounded-0 position-fixed
                        bottom-0 top-0 d-none d-md-block bg-black z-2">
            <a id="wd-neu-link"
                target="_blank"
                href="https://www.northeastern.edu/"
                className="list-group-item bg-black border-0 text-center">
                <img src="/images/NEU.jpg" width="75px" alt="Northeastern University Logo" />
            </a>

            <NavLink to="/Kambaz/Account" id="wd-account-link"
                className={({ isActive }) => isActive ? "list-group-item text-center border-0 bg-white text-danger" : "list-group-item text-center border-0 bg-black text-white"}>
                <FaRegCircleUser className="fs-1" /><br />
                Account
            </NavLink>

            <NavLink to="/Kambaz/Dashboard" id="wd-dashboard-link"
                className={({ isActive }) => isActive ? "list-group-item text-center border-0 bg-white text-danger" : "list-group-item text-center border-0 bg-black text-white"}>
                <AiOutlineDashboard className="fs-1" /><br />
                Dashboard
            </NavLink>

            {/*  !!!!!!! Set to specific course 1234 for now */}
            <NavLink to="/Kambaz/Courses/1234" id="wd-course-link"
                className={({ isActive }) => isActive ? "list-group-item text-center border-0 bg-white text-danger" : "list-group-item text-center border-0 bg-black text-white"}>
                <LiaBookSolid className="fs-1" /><br />
                Courses
            </NavLink>

            <NavLink to="/Kambaz/Calendar" id="wd-calendar-link"
                className={({ isActive }) => isActive ? "list-group-item text-center border-0 bg-white text-danger" : "list-group-item text-center border-0 bg-black text-white"}>
                <IoCalendarOutline className="fs-1" /><br />
                Calendar
            </NavLink>

            <NavLink to="/Kambaz/Inbox" id="wd-inbox-link"
                className={({ isActive }) => isActive ? "list-group-item text-center border-0 bg-white text-danger" : "list-group-item text-center border-0 bg-black text-white"}>
                <FaInbox className="fs-1" /><br />
                Inbox
            </NavLink>

            <NavLink to="/Kambaz/Settings" id="wd-settings-link"
                className={({ isActive }) => isActive ? "list-group-item text-center border-0 bg-white text-danger" : "list-group-item text-center border-0 bg-black text-white"}>
                <LiaCogSolid className="fs-1" /><br />
                Settings
            </NavLink>

            <NavLink
                to="/Labs"
                id="wd-labs-link"
                className={({ isActive }) => isActive ? "list-group-item text-center border-0 bg-white text-danger" : "list-group-item text-center border-0 bg-black text-white"}>
                <ImLab className="fs-1" /><br />
                Labs
            </NavLink>

            <NavLink
                to="/Kambaz/Landing"
                id="wd-landing-link"
                className={({ isActive }) => isActive ? "list-group-item text-center border-0 bg-white text-danger" : "list-group-item text-center border-0 bg-black text-white"}>
                <BsAirplane className="fs-1" /><br />
                Landing Page
            </NavLink>
        </div>
    );
}
