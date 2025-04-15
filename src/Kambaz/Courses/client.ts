import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
// const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

// createCourse
export const createCourse = async (course: any) => {
    const { data } = await axiosWithCredentials.post(COURSES_API, course);
    return data;
};

// fetchAllCourses
export const fetchAllCourses = async () => {
    const { data } = await axiosWithCredentials.get(COURSES_API);
    return data;
};


// delete course
export const deleteCourse = async (id: string) => {
    const { data } = await axiosWithCredentials.delete(`${COURSES_API}/${id}`);
    return data;
};

// update course
export const updateCourse = async (course: any) => {
    const { data } = await axiosWithCredentials.put(`${COURSES_API}/${course._id}`, course);
    return data;
};

// find Modules For Course
export const findModulesForCourse = async (courseId: string) => {
    const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/modules`);
    return response.data;
};

//createModuleForCourse
export const createModuleForCourse = async (courseId: string, module: any) => {
    const response = await axiosWithCredentials.post(`${COURSES_API}/${courseId}/modules`, module);
    return response.data;
};

export const findAssignementsForCourse = async (courseId: string) => {
    const response = await axios
        .get(`${COURSES_API}/${courseId}/assignments`);
    return response.data;
};

export const createAssignmentForCourse = async (courseId: string, assignment: any) => {
    const response = await axios.post(
        `${COURSES_API}/${courseId}/assignments`,
        assignment
    );
    return response.data;
};

export const enrollCourse = async (userId: string, courseId: string) => {
    const response = await axios.post(
        `${COURSES_API}/${courseId}/enrollments`,
        { userId: userId }
    );
    return response.data;
}