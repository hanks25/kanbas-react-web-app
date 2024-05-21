export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: "300px", marginTop: "35px" }}>
            <div className="card">
              <img src="/images/reactjs.jpg" height={250} />
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1234/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS1234 React JS
                </a>
                <p className="wd-dashboard-course-title">
                  Full Stack software developer
                </p>
                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary">{" "}
                  Go{" "}</a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px", marginTop: "35px" }}>
            <div className="card">
              <img src="/images/java.jpg" height={250} />
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1234/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS1200 Introduction to Java
                </a>
                <p className="wd-dashboard-course-title">
                  Object-Oriented Programming
                </p>
                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px", marginTop: "35px" }}>
            <div className="card">
              <img src="/images/python.jpg" height={250} />
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1234/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS1100 Introduction to Python
                </a>
                <p className="wd-dashboard-course-title">
                  Learn Python
                </p>
                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px", marginTop: "35px" }}>
            <div className="card">
              <img src="/images/rust.png" height={250} />
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1234/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS1600 Introduction to Rust
                </a>
                <p className="wd-dashboard-course-title">
                  Learn Rust to impove security
                </p>
                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px", marginTop: "35px" }}>
            <div className="card">
              <img src="/images/cloud.jpg" height={250} />
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1234/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS3400 Cloud Computing
                </a>
                <p className="wd-dashboard-course-title">
                  Build Project using cloud
                </p>
                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px", marginTop: "35px" }}>
            <div className="card">
              <img src="/images/compiler.jpg" height={250} />
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1234/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS2100 Computer Compiler
                </a>
                <p className="wd-dashboard-course-title">
                  The Basic of Compiler
                </p>
                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px", marginTop: "35px" }}>
            <div className="card">
              <img src="/images/algorithms.jpg" height={250} />
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1234/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS5600 Algorithm
                </a>
                <p className="wd-dashboard-course-title">
                  Learing Different Algorithms
                </p>
                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px", marginTop: "35px" }}>
            <div className="card">
              <img src="/images/math.jpg" height={250} />
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1234/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS5100 Discrete Math
                </a>
                <p className="wd-dashboard-course-title">
                  Learing the math need for CS
                </p>
                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}