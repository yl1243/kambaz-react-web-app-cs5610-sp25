// hh 旧的 dashboard 中的reducer 是用来处理 enrollments 的
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    // enrollments: enrollments,
    enrollments: [] as any[],
};

const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        setEnrollments: (state, action) => {
            state.enrollments = action.payload;
        },

        addEnrollment: (state, { payload: enrollment }) => {
            const newId = `A${uuidv4().substring(0, 6)}`;
            const newEnrollment: any = {
                _id: newId,
                user: enrollment.user,
                course: enrollment.course
            }

            console.log("newEnrollment: ", newEnrollment);

            state.enrollments = [...state.enrollments, newEnrollment] as any;
        },

        deleteEnrollment: (state, { payload: enrollmentId }) => {
            state.enrollments = state.enrollments.filter(
                (e: any) => e._id != enrollmentId
            )

            console.log("enrollments: ", state.enrollments)
        },
    }
});

export const { setEnrollments, addEnrollment, deleteEnrollment } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;