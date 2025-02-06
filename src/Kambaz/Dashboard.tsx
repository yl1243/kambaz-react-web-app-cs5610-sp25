import { Link } from "react-router-dom";
import { Row, Col, Card, Button } from "react-bootstrap";

export default function Dashboard() {
    return (
        <div id="wd-dashboard" className="p-4">
            {/* 标题 */}
            <h1 id="wd-dashboard-title" className="text-danger">Dashboard</h1>
            <hr />
            <h2 id="wd-dashboard-published" className="fw-bold">Published Courses (12)</h2>
            <hr />

            {/* 课程网格布局 */}
            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    {/* 课程 1 */}
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1234/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS1234 React JS</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Full Stack software developer
                                    </Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>

                    {/* 课程 2 */}
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/7890/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/terraform.jpg" width="100%" height={160} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS7890 Terraform Crash Course</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Terraform Crash Course for Beginners
                                    </Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>

                    {/* 课程 3 */}
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/2345/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/nodejs.jpg" width="100%" height={160} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS2345 Node.js</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Learn Node.js
                                    </Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>

                    {/* 课程 4 */}
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/3456/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/python.jpg" width="100%" height={160} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS3456 Data Mining in Python</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Data mining in Python
                                    </Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>

                    {/* 课程 5 */}
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/4567/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/docker.jpg" width="100%" height={160} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS4567 Docker Essentials</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Container Essentials with CI/CD pipelines
                                    </Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>

                    {/* 课程 6 */}
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/5678/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/kubernetes.jpg" width="100%" height={160} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS5678 Kubernetes</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Container orchestration
                                    </Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>

                    {/* 课程 7 */}
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/6789/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/git.jpg" width="100%" height={160} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS6789 Git Version Control</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Master Git and GitHub
                                    </Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>

                </Row>
            </div>
        </div>
    );
}



// // Create 7 courses on Dashboard
// import { Link } from "react-router-dom";

// export default function Dashboard() {
//     return (
//         <div id="wd-dashboard">
//             <h1 id="wd-dashboard-title">Dashboard</h1>
//             <hr />
//             <h2 id="wd-dashboard-published">Published Courses (12)</h2>
//             <hr />
//             <div id="wd-dashboard-courses">
//                 {/* Course 1 */}
//                 <div className="wd-dashboard-course">
//                     <Link
//                         className="wd-dashboard-course-link"
//                         to="/Kambaz/Courses/1234/Home"
//                     >
//                         <img src="/images/reactjs.jpg" width={200} />
//                         <div>
//                             <h5>CS1234 React JS</h5>
//                         </div>
//                     </Link>
//                     <p className="wd-dashboard-course-title">
//                         Full Stack software developer
//                     </p>
//                     <button>Go</button>
//                 </div>

//                 {/* Course 2 */}
//                 <div className="wd-dashboard-course">
//                     <Link className="wd-dashboard-course-link" to="/Kambaz/Courses/7890/Home">
//                         <img src="/images/terraform.jpg" width={200} />
//                         <div>
//                             <h5>CS7890 Terraform Crash Course </h5>
//                         </div>
//                     </Link>
//                     <p className="wd-dashboard-course-title">
//                         Terraform Crash Course for Beginners
//                     </p>
//                     <button>Go</button>
//                 </div>

//                 {/* Course 3 */}
//                 <div className="wd-dashboard-course">
//                     <Link
//                         className="wd-dashboard-course-link"
//                         to="/Kambaz/Courses/2345/Home"
//                     >
//                         <img src="/images/nodejs.jpg" width={200} alt="Node.js" />
//                         <div>
//                             <h5>CS2345 Node.js</h5>
//                         </div>
//                     </Link>
//                     <p className="wd-dashboard-course-title"> Learn Node.js</p>
//                     <button>Go</button>
//                 </div>

//                 {/* Course 4 */}
//                 <div className="wd-dashboard-course">
//                     <Link className="wd-dashboard-course-link" to="/Kambaz/Courses/3456/Home">
//                         <img src="/images/python.jpg" width={200} />
//                         <div>
//                             <h5>CS3456 Data Mining in Python</h5>
//                         </div>
//                     </Link>
//                     <p className="wd-dashboard-course-title">
//                         Data mining in Python
//                     </p>
//                     <button>Go</button>
//                 </div>

//                 {/* Course 5 */}
//                 <div className="wd-dashboard-course">
//                     <Link className="wd-dashboard-course-link" to="/Kambaz/Courses/4567/Home">
//                         <img src="/images/docker.jpg" width={200} />
//                         <div>
//                             <h5>CS4567 Docker Essentials</h5>
//                         </div>
//                     </Link>
//                     <p className="wd-dashboard-course-title">
//                         Containder Essentials with CI/CD pipelines
//                     </p>
//                     <button>Go</button>
//                 </div>

//                 {/* Course 6 */}
//                 <div className="wd-dashboard-course">
//                     <Link className="wd-dashboard-course-link" to="/Kambaz/Courses/5678/Home">
//                         <img src="/images/kubernetes.jpg" width={200} />
//                         <div>
//                             <h5>CS5678 Kubernetes</h5>
//                         </div>
//                     </Link>
//                     <p className="wd-dashboard-course-title">
//                         Container orchestration
//                     </p>
//                     <button>Go</button>
//                 </div>

//                 {/* Course 7 */}
//                 <div className="wd-dashboard-course">
//                     <Link className="wd-dashboard-course-link" to="/Kambaz/Courses/6789/Home">
//                         <img src="/images/git.jpg" width={200} />
//                         <div>
//                             <h5>CS6789 Git Version Control</h5>
//                         </div>
//                     </Link>
//                     <p className="wd-dashboard-course-title">
//                         Master Git and GitHub
//                     </p>
//                     <button>Go</button>
//                 </div>


//             </div>
//         </div>
//     );
// }
