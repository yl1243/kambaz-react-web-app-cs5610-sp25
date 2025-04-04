// src/Kambaz/store.ts
import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/reducer";
import accountReducer from "../Account/reducer";
import enrollmentsReducer from "../Courses/Enrollments/reducer"; // 导入 enrollmentsReducer
import assignmentsReducer from "../Courses/Assignments/reducer"; // 导入 assignmentsReducer

const store = configureStore({
    reducer: {
        modules: modulesReducer, // 将 modulesReducer 添加到 store
        account: accountReducer, // 将 accountReducer 添加到 store
        enrollments: enrollmentsReducer, // 将 enrollmentsReducer 添加到 store
        assignments: assignmentsReducer, // 将 assignmentsReducer 添加到 store
    },
});

export default store;
