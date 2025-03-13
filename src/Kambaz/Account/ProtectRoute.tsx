// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";
// export default function ProtectedRoute({ children }: { children: any }) {
//     const { currentUser } = useSelector((state: any) => state.accountReducer);
//     if (currentUser) {
//         return children;
//     } else {
//         return <Navigate to="/Kambaz/Account/Signin" />;
//     }
// }

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: any }) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    console.log("Current User in ProtectedRoute:", currentUser); // Debugging

    if (currentUser && currentUser.role === "FACULTY") {
        return children; // 只有 FACULTY 用户可以访问
    } else {
        return <Navigate to="/Kambaz/Account/Signin" />; // 未登录或没有权限时跳转到登录页面
    }
}
