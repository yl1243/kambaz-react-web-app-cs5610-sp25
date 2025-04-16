import axios from "axios";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;


// export const unenrollCourse = async (enrollmentId: string) => {
//     const response = await axios.delete(
//         `${ENROLLMENTS_API}/${enrollmentId}`
//     );
//     return response.data;
// }

// g的新的
export const unenrollCourse = async (userId: string, courseId: string) => {
    const response = await axios.delete(
        `${ENROLLMENTS_API}/user/${userId}/course/${courseId}`
    );
    return response.data;
};

export const fetchAllEnrollments = async () => {
    const response = await axios.get(`${ENROLLMENTS_API}`);
    return response.data;
}