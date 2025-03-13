import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from "uuid";

interface Course {
    _id: string;
    name: string;
    number: string;
    startDate: string;
    endDate: string;
    image?: string;
    description: string;
}

interface CoursesState {
    courses: Course[];
}

const initialState: CoursesState = {
    courses: [],
};

const coursesSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        setCourses: (state, action: PayloadAction<Course[]>) => {
            state.courses = action.payload;
        },
        addCourse: (state, action: PayloadAction<Course>) => {
            state.courses.push(action.payload);
        },
        deleteCourse: (state, action: PayloadAction<string>) => {
            state.courses = state.courses.filter((course) => course._id !== action.payload);
        },
        updateCourse: (state, action: PayloadAction<Course>) => {
            state.courses = state.courses.map((course) =>
                course._id === action.payload._id ? action.payload : course
            );
        },
    },
});

export const { setCourses, addCourse, deleteCourse, updateCourse } = coursesSlice.actions;
export default coursesSlice.reducer;