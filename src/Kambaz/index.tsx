import { Routes, Route, Navigate } from "react-router-dom";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import KambazNavigation from "./Navigation";
import { addEnrollment, deleteEnrollment } from "./Dashboard/reducer";

// import * as db from "./Database";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";

import { setEnrollments } from "./Dashboard/reducer";

import { useEffect, useState } from "react";

import "./styles.css";
import ProtectedRoute from "./Account/ProtectRoute";

import Session from "./Account/Session";
import { useSelector, useDispatch } from "react-redux";
// import { setCourses } from "./Courses/reducer";
import * as dashboardClient from "./Dashboard/client";


export default function Kambaz() {
    const dispatch = useDispatch();

    // a different user logs in, the courses will be reloaded from the serve
    const [courses, setCourses] = useState<any[]>([]);
    const [enrolling, setEnrolling] = useState<boolean>(false);

    const [course, setCourse] = useState<any>({
        _id: "0",
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        description: "New Description",
    });

    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);


    const findCoursesForUser = async () => {
        try {
            const courses = await userClient.findCoursesForUser(currentUser._id);
            setCourses(courses);
        } catch (error) {
            console.error(error);
        }
    };

    // update enrollment

    const updateEnrollment = async (courseId: string, enrolled: boolean) => {
        if (enrolled) {
            await userClient.enrollIntoCourse(currentUser._id, courseId);
        } else {
            await userClient.unenrollFromCourse(currentUser._id, courseId);
        }

        // ⚠️ 在这里更新 enrollments store 后再更新 course 状态
        const updatedEnrollments = await dashboardClient.fetchAllEnrollments();
        dispatch(setEnrollments(updatedEnrollments));

        // ⚠️ 更新 enrolled 标记
        setCourses((prevCourses) =>
            prevCourses.map((course) =>
                course._id === courseId
                    ? { ...course, enrolled: enrolled }
                    : course
            )
        );
    };


    // fetch courses
    const fetchCourses = async () => {
        try {
            const allCourses = await courseClient.fetchAllCourses();
            const enrolledCourses = await userClient.findCoursesForUser(
                currentUser._id
            );
            const courses = allCourses.map((course: any) => {
                if (enrolledCourses.find((c: any) => c._id === course._id)) {
                    return { ...course, enrolled: true };
                } else {
                    return course;
                }
            });
            setCourses(courses);
        } catch (error) {
            console.error(error);
        }
    };


    useEffect(() => {
        if (enrolling) {
            fetchCourses();
        } else {
            findCoursesForUser();
        }
    }, [currentUser, enrolling]);

    // fetch all enrollments
    const fetchAllEnrollments = async () => {
        const enrollments = await dashboardClient.fetchAllEnrollments();
        dispatch(setEnrollments(enrollments));
    }

    // add course
    const addNewCourse = async () => {
        const newCourse = await courseClient.createCourse(course);
        setCourses([...courses, newCourse]);
    };

    // delete course
    const deleteCourse = async (courseId: string) => {
        const status = await courseClient.deleteCourse(courseId);
        console.log("Delete status:", status); // 使用 status 就不会报 warning
        setCourses(courses.filter((course) => course._id !== courseId));
    };


    // update course
    const updateCourse = async () => {
        await courseClient.updateCourse(course);

        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };


    useEffect(() => {
        fetchAllEnrollments();
    }, []); // empty dependency array means it only runs once on mount

    return (
        <Session>
            <div id="wd-kambaz">
                <KambazNavigation />
                <div className="wd-main-content-offset p-3">
                    <Routes>
                        <Route path="/" element={<Navigate to="Dashboard" />} />
                        <Route path="/Account/*" element={<Account />} />
                        <Route
                            path="/Dashboard"
                            element={
                                <ProtectedRoute>
                                    <Dashboard
                                        courses={courses}
                                        course={course}
                                        setCourse={setCourse}
                                        addNewCourse={addNewCourse}
                                        deleteCourse={deleteCourse}
                                        updateCourse={updateCourse}
                                        enrolling={enrolling}
                                        setEnrolling={setEnrolling}
                                        updateEnrollment={updateEnrollment}
                                    />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/Courses/:cid/*"
                            element={
                                <ProtectedRoute>
                                    <Courses courses={courses} />
                                </ProtectedRoute>
                            }
                        />
                        <Route path="/Calendar" element={<h1>Calendar</h1>} />
                        <Route path="/Inbox" element={<h1>Inbox</h1>} />
                    </Routes>
                </div>
            </div>
        </Session>
    );
}

// import { Routes, Route, Navigate } from "react-router-dom";
// import Account from "./Account";
// import Dashboard from "./Dashboard";
// import Courses from "./Courses";
// import KambazNavigation from "./Navigation";
// import Landing from "../Landing";  // ⬅️ 确保你导入了 Landing 组件
// import * as db from "./Database";
// import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";

// import "./styles.css";
// import ProtectedRoute from "./Account/ProtectRoute";


// export default function Kambaz() {

//     const [courses, setCourses] = useState<any[]>(db.courses);

//     const [course, setCourse] = useState<any>({
//         _id: "0", name: "New Course", number: "New Number",
//         startDate: "2023-09-10", endDate: "2023-12-15",
//         image: "/images/reactjs.jpg", description: "New Description"
//     });

//     // add new course
//     const addNewCourse = () => {
//         const newCourse = { ...course, _id: uuidv4() };
//         setCourses([...courses, newCourse]);

//     };

//     // delete course
//     const deleteCourse = (courseId: string) => {
//         setCourses(courses.filter((course) => course._id !== courseId));
//     };

//     // update course
//     const updateCourse = () => {
//         setCourses(
//             courses.map((c) => {
//                 if (c._id === course._id) {
//                     return course;
//                 } else {
//                     return c;
//                 }
//             })
//         );
//     };

//     return (
//         // Add Account Screen to Kambaz Landing Page
//         <div id="wd-kambaz">


//             <KambazNavigation />
//             <div className="wd-main-content-offset p-3">
//                 <Routes>
//                     <Route path="/" element={<Navigate to="Account" />} />
//                     <Route path="/Account/*" element={<Account />} />
//                     <Route path="Dashboard" element={
//                         <ProtectedRoute><Dashboard
//                             courses={courses}
//                             course={course}
//                             setCourse={setCourse}
//                             addNewCourse={addNewCourse}
//                             deleteCourse={deleteCourse}
//                             updateCourse={updateCourse} />
//                         </ProtectedRoute>
//                     } />
//                     <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute>} />
//                     <Route path="/Calendar" element={<h1>Calendar</h1>} />
//                     <Route path="/Inbox" element={<h1>Inbox</h1>} />

//                     <Route path="/Landing" element={<Landing />} />
//                 </Routes>
//             </div>


//         </div>
//     );
// }