import { Route, Routes, Navigate } from "react-router";
import { Link } from "react-router-dom"

import Lab3 from "../Labs/Lab3";
import Lab2 from "../Labs/Lab2";
import Lab1 from "../Labs/Lab2";


export default function Landing() {
    return (
        <div>
            {/* Full name and section number */}
            <div style={{ marginBottom: "20px" }}>
                <h1>Yujie Li - CS5610</h1>
            </div>

            {/* Heading for GitHub link */}
            <h1>Repositories Link</h1>
            <div style={{ marginTop: "20px" }}>
                <a
                    href="https://github.com/yl1243/kambaz-react-web-app-cs5610-sp25/tree/a1"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub Repo Info
                </a>
            </div>

            <h1>Labs</h1>

            <ul>
                <li><Link to="/Labs/Lab1">Labs</Link></li>
                <li><Link to="/Labs/Lab1">Lab 1</Link></li>
                <li><Link to="/Labs/Lab2">Lab 2</Link></li>
                <li><Link to="/Labs/Lab3">Lab 3</Link></li>
            </ul>

            <h1>Kambaz</h1>

            <ul>
                <li><Link to="/Kambaz/Account/Signin">Kambaz</Link></li>
            </ul>
        </div>
    );
}