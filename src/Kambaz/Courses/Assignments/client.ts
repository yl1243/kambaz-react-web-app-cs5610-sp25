// // HW5旧的
// import axios from "axios";

// const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;;
// const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

// export const updateAssignment = async (aid: string, assignment: any) => {
//     const { data } = await axios.put(`${ASSIGNMENTS_API}/${aid}`, assignment);
//     return data;
// };

// export const deleteAssignment = async (assignmentId: string) => {
//     const response = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
//     return response.data;
// };

// py 的

import axios from "axios";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
// export const REMOTE_SERVER = process.env.VITE_REMOTE_SERVER || process.env.REACT_APP_REMOTE_SERVER;
const API = `${REMOTE_SERVER}/api`;

// 获取特定课程的所有作业
export const findAssignmentsForCourse = async (courseId: string) => {
    const response = await axios.get(`${API}/courses/${courseId}/assignments`);
    return response.data;
};

// 获取特定作业
export const findAssignmentById = async (assignmentId: string) => {
    const response = await axios.get(`${API}/assignments/${assignmentId}`);
    return response.data;
};

// 创建新作业
export const createAssignment = async (courseId: string, assignment: any) => {
    const response = await axios.post(`${API}/courses/${courseId}/assignments`, assignment);
    return response.data;
};

// 更新作业
export const updateAssignment = async (assignmentId: string, assignment: any) => {
    const response = await axios.put(`${API}/assignments/${assignmentId}`, assignment);
    return response.data;
};

// 删除作业
export const deleteAssignment = async (assignmentId: string) => {
    const response = await axios.delete(`${API}/assignments/${assignmentId}`);
    return response.data;
};