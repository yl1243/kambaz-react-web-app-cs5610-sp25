// import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import DisplayCourses from "./DisplayCourses";
import * as courseClient from "../Courses/client";

export default function Dashboard({
    courses,
    course,
    setCourse,
    addNewCourse,
    deleteCourse,
    updateCourse,
    enrolling,
    setEnrolling,
    updateEnrollment

}: {
    courses: any[];
    course: any;
    setCourse: (course: any) => void;
    addNewCourse: () => void;
    deleteCourse: (course: any) => void;
    updateCourse: () => void;
    enrolling: boolean;
    setEnrolling: (enrolling: boolean) => void;
    updateEnrollment: (courseId: string, enrolled: boolean) => void

}) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);

    const [allCourses, setAllCourses] = useState<any[]>([]);


    // fetch all courses from the server
    // const fetchAllCourses = async () => {
    //     const allCourses = await courseClient.fetchAllCourses();
    //     setAllCourses(allCourses);
    // }


    //g的
    const fetchAllCourses = async () => {
        const allCourses = await courseClient.fetchAllCourses();

        // 用 Redux 中的 enrollment 信息判断哪些课已经报名
        const enrolledCourseIds = new Set(
            enrollments
                .filter((e: { user: any; }) => e.user === currentUser._id)
                .map((e: { course: any; }) => e.course)
        );

        const updatedCourses = allCourses.map((course: any) => ({
            ...course,
            enrolled: enrolledCourseIds.has(course._id),
        }));

        setAllCourses(updatedCourses);
    };


    useEffect(() => {
        fetchAllCourses();
    }, []); //只运行一次

    // Removed duplicate state declaration for enrolling and setEnrolling


    const isFaculty = currentUser.role == "FACULTY";
    const isAdmin = currentUser.role == "ADMIN";
    const isStudent = currentUser.role == "STUDENT";

    const [showAllCourses, setShowAllCourses] = useState(false);

    return (
        <div id="wd-dashboard" style={{ paddingLeft: "120px" }}>
            <h1 id="wd-dashboard-title">
                Dashboard
                <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary" >
                    {enrolling ? "My Courses" : "All Courses"}
                </button>

                {currentUser?.role && (
                    <span className="fs-5 ms-3 text-muted">({currentUser.role})</span>
                )}
            </h1>
            <hr />
            {/* only Faculty can add/update course */}
            {isFaculty && (
                <>
                    <h5>
                        New Course
                        <button
                            className="btn btn-primary float-end"
                            id="wd-add-new-course-click"
                            onClick={addNewCourse}
                        >
                            Add
                        </button>
                        <button
                            className="btn btn-warning float-end me-2"
                            onClick={updateCourse}
                            id="wd-update-course-click"
                        >
                            Update
                        </button>
                    </h5>
                    <br />

                    <input
                        value={course.name}
                        className="form-control mb-2"
                        onChange={(e) => setCourse({ ...course, name: e.target.value })}
                    />

                    <textarea
                        value={course.description}
                        className="form-control"
                        onChange={(e) =>
                            setCourse({ ...course, description: e.target.value })
                        }
                    />
                </>
            )}

            {/* admin can add/save course, like Prof showed in demo*/}
            {(isAdmin) && (
                <>
                    <h5>
                        New Course
                        <button
                            className="btn btn-primary float-end"
                            id="wd-add-new-course-click"
                            onClick={addNewCourse}
                        >
                            {isAdmin ? "Add" : "Add"}
                        </button>
                        <button
                            className="btn btn-success float-end me-2"
                            onClick={updateCourse}
                            id="wd-update-course-click"
                        >
                            {isAdmin ? "Save" : "Save"}
                        </button>
                    </h5>
                    <br />

                    <input
                        value={course.name}
                        className="form-control mb-2"
                        onChange={(e) => setCourse({ ...course, name: e.target.value })}
                    />

                    <textarea
                        value={course.description}
                        className="form-control"
                        onChange={(e) =>
                            setCourse({ ...course, description: e.target.value })
                        }
                    />
                </>
            )}

            {/* student */}
            {isStudent && (
                <>
                    <button
                        className="btn btn-primary float-end"
                        id="wd-add-new-course-click"
                        onClick={async () =>
                            showAllCourses
                                ? setShowAllCourses(false)
                                : setShowAllCourses(true)
                        }
                    >
                        Enrollments
                    </button>
                </>
            )}

            <DisplayCourses
                enrolledCourses={courses}
                allCourses={allCourses}
                showAllCourses={showAllCourses}
                isAdmin={isAdmin}
                isFaculty={isFaculty}
                deleteCourse={deleteCourse}
                setCourse={setCourse}
                enrolling={enrolling}
                setEnrolling={setEnrolling}
                updateEnrollment={updateEnrollment}
            />
        </div>
    );
}
