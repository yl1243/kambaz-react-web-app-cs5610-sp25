import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import Lab5 from "./Lab5";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC"
import store from "./store";
import { Provider } from "react-redux";


export default function Labs() {
    return (
        <Provider store={store}>
            <div>

                <h1>Labs</h1>

                {/* Full name and section number */}
                <div style={{ marginBottom: '20px' }}>
                    <h2>Yujie Li</h2>
                </div>

                {/* Heading for GitHub link */}
                <h2>Repositories Link</h2>
                <div style={{ marginTop: '20px' }}>
                    <a
                        id="wd-github" // add id attributes
                        href="https://github.com/yl1243/kambaz-react-web-app-cs5610-sp25/tree/a1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        All Source Code Repositories on GitHub
                    </a>
                </div>

                {/* 将Labs中的TOC.tsx文件传入过来 */}
                <TOC />
                <Routes>
                    <Route path="/" element={<Navigate to="Lab1" />} />
                    <Route path="Lab1" element={<Lab1 />} />
                    <Route path="Lab2/*" element={<Lab2 />} />
                    <Route path="Lab3/*" element={<Lab3 />} />
                    <Route path="Lab4/*" element={<Lab4 />} />
                    <Route path="Lab5/*" element={<Lab5 />} />
                </Routes>
            </div>
        </Provider>
    );
}
