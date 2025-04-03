// src/Kambaz/Courses/Assignments/reducer.ts
import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database"; // 假设 db.assignments 已经存在
import { v4 as uuidv4 } from "uuid";





const initialState = {
    assignments: assignments, // 初始化时用 db.assignments 数据
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, { payload: assignment }) => {
            const newAssignment = {
                _id: uuidv4(),
                name: assignment.name,
                course: assignment.course,
                dueDate: assignment.dueDate,
            };
            state.assignments = [...state.assignments, newAssignment] as any;
        },
        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== assignmentId
            );
        },
        updateAssignment: (state, { payload: assignment }) => {
            state.assignments = state.assignments.map((a) =>
                a._id === assignment._id ? assignment : a
            );
        },
        editAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.map((a) =>
                a._id === assignmentId ? { ...a, editing: true } : a
            );
        },
    },
});

export const {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    editAssignment,
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
