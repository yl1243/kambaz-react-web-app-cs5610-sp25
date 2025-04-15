import { useNavigate } from "react-router-dom";
import { addEnrollment, deleteEnrollment } from "./reducer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import * as courseClient from "../Courses/client";
import * as enrollmentsClient from "./client";

export default function EnrolledCourses({
    enrolledCourses,
    allCourses,
    showAllCourses,
    isAdmin,
    isFaculty,
    deleteCourse,
    setCourse,
    enrolling,
    setEnrolling,
    updateEnrollment

}: {
    enrolledCourses: any[];
    allCourses: any[];
    showAllCourses: boolean;
    isAdmin: boolean;
    isFaculty: boolean;
    deleteCourse: (courseId: string) => void;
    setCourse: (courseId: string) => void;
    enrolling: boolean;
    setEnrolling: (enrolling: boolean) => void;
    updateEnrollment: (courseId: string, enrolled: boolean) => void
}) {
    const navigate = useNavigate();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector(
        (state: { enrollmentsReducer: { enrollments: any[] } }) =>
            state.enrollmentsReducer
    );

    // if faculty and showAllCourses
    const displayedCourses = showAllCourses ? allCourses : enrolledCourses;

    const dispatch = useDispatch();

    return (
        <div>
            <h2 id="wd-dashboard-published" className="mt-3">
                {isFaculty || isAdmin
                    ? "All Published Courses"
                    : showAllCourses
                        ? "All Published Courses"
                        : "Enrolled Courses"}{" "}
                ({displayedCourses.length})
            </h2>

            <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {displayedCourses.map((course) => {
                        // 解决不显示问题，但好像没用上
                        // const enrolledCourse = enrolledCourses.find(
                        //     (enrolledCourse) => enrolledCourse._id === course._id
                        // );

                        // 修改enroll button 不显示的问题
                        // const enrollmentObj = enrolledCourse
                        //     ? enrollments.find(
                        //         (enrollment) =>
                        //             enrollment.user === currentUser._id &&
                        //             enrollment.course === enrolledCourse._id
                        //     )
                        //     : null;
                        const enrollmentObj = enrollments.find(
                            (enrollment) =>
                                enrollment.user === currentUser._id &&
                                enrollment.course === course._id
                        );

                        return (
                            <div
                                className="wd-dashboard-course col"
                                style={{ width: "270px", marginBottom: "35px" }}
                            >
                                <div className="card rounded-3 overflow-hidden">
                                    <img
                                        src={
                                            // course.image ? course.image : `/images/${course._id}.jpg` // 之后得根据不同课程显示不同的图片
                                            course.image ? course.image : `/images/kubernetes.jpg`
                                        }
                                        width="100%"
                                        height={160}
                                    />

                                    <div className="card-body">
                                        <h5 className="wd-dashboard-course-title card-title">
                                            {course.name}
                                        </h5>
                                        <p
                                            className="wd-dashboard-course-title card-text overflow-y-hidden"
                                            style={{ maxHeight: 100 }}
                                        >
                                            {course.description}
                                        </p>

                                        <button
                                            className="btn btn-primary"
                                            onClick={() =>
                                                navigate(`/Kambaz/Courses/${course._id}/Home`)
                                            }
                                        >
                                            {" "}
                                            Go{" "}
                                        </button>

                                        {/* student另update enroll, 和老师的不一样*/}
                                        {!(isFaculty || isAdmin) && enrolling && (
                                            <button
                                                onClick={async (event) => {
                                                    event.preventDefault();
                                                    if (enrollmentObj) {
                                                        await enrollmentsClient.unenrollCourse(enrollmentObj._id);
                                                        dispatch(deleteEnrollment(enrollmentObj._id));
                                                    } else {
                                                        const enrollment = await courseClient.enrollCourse(currentUser._id, course._id);
                                                        dispatch(
                                                            addEnrollment({
                                                                _id: enrollment._id,
                                                                user: currentUser._id,
                                                                course: course._id,
                                                            })
                                                        );
                                                    }
                                                    updateEnrollment(course._id, !course.enrolled);
                                                }}
                                                className={`btn ${enrollmentObj ? "btn-danger" : "btn-success"} float-end`}
                                            >
                                                {enrollmentObj ? "Unenroll" : "Enroll"}
                                            </button>
                                        )}
                                        {/* 在老师的HW6中变了 */}
                                        {/* {!(isFaculty || isAdmin) && enrollmentObj && (
                                            <button
                                                className="btn btn-danger float-end"
                                                onClick={async () => {
                                                    await enrollmentsClient.unenrollCourse(enrollmentObj._id);

                                                    console.log("Unenrolled id: ", enrollmentObj._id);

                                                    dispatch(deleteEnrollment(enrollmentObj._id));
                                                }}
                                            >
                                                Unenroll
                                            </button>
                                        )}

                                        {!(isFaculty || isAdmin) && !enrollmentObj && (
                                            <button
                                                className="btn btn-success float-end"
                                                onClick={async () => {
                                                    // send API to enroll course
                                                    const enrollment = await courseClient.enrollCourse(currentUser._id, course._id);

                                                    dispatch(
                                                        addEnrollment({
                                                            _id: enrollment._id,
                                                            user: currentUser._id,
                                                            course: course._id,
                                                        })
                                                    );
                                                }}
                                            >
                                                Enroll
                                            </button>
                                        )} */}

                                        {(isFaculty || isAdmin) && (
                                            <>
                                                <button
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        deleteCourse(course._id);
                                                    }}
                                                    className="btn btn-danger float-end"
                                                    id="wd-delete-course-click"
                                                >
                                                    Delete
                                                </button>

                                                <button
                                                    id="wd-edit-course-click"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        setCourse(course);
                                                    }}
                                                    className="btn btn-warning me-2 float-end"
                                                >
                                                    Edit
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}