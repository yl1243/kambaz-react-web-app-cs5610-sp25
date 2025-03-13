// import { Route, Routes, Navigate } from "react-router";
import { Link } from "react-router-dom"



export default function Landing() {
    return (
        <div>
            {/* Full name and section number */}
            <div style={{ marginBottom: "20px" }}>
                <h1>Yujie Li - CS5610</h1>
            </div>

            {/* Heading for GitHub link */}
            <h2>Repositories Link</h2>
            <div style={{ marginTop: "20px" }}>
                <a
                    href="https://github.com/yl1243/kambaz-react-web-app-cs5610-sp25/tree/a1"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub Repo Info
                </a>
            </div>

            <h2>Labs</h2>
            <ul>
                <li><Link to="Lab1">Labs</Link></li>
                <li><Link to="Lab1">Lab 1</Link></li>
                <li><Link to="Lab2">Lab 2</Link></li>
                <li><Link to="Lab3">Lab 3</Link></li>
                <li><Link to="Lab3">Lab 4</Link></li>
            </ul>

            <h2>Kambaz</h2>

            <ul>
                <li><Link to="/Kambaz/Account/Signin">Kambaz</Link></li>
            </ul>
        </div>
    );
}