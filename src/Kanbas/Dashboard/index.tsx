export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
        <div id="wd-dashboard-courses">
          <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS1234 React JS
              </a>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/java.jpg" width={200} height={200}/>
            <div>
              <a className="wd-dashboard-couse-link"
                href="#/Kanbas/Courses/1200/Home">
                CS1200 Introduction to Java
              </a>
              <p className="wd-dashboard-course-title">
                Learn Object-Oriented Programming
              </p>
              <a href="#/Kanbas/Courses/1200/Home"> Go </a>
            </div>
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/python.jpg" width={200} height={200} />
              <div>
                <a className="wd-dashboard-couse-link"
                  href="#/Kanbas/Courses/1100/Home">
                  CS1100 Introduction to Python
                </a>
                <p className="wd-dashboard-course-title">
                  Learn Python
                </p>
                <a href="#/Kanbas/Courses/1100/Home"> Go </a>
              </div>
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/rust.png" width={200} height={200} />
              <div>
                <a className="wd-dashboard-couse-link"
                  href="#/Kanbas/Courses/1600/Home">
                  CS1600 Introduction to Rust
                </a>
                <p className="wd-dashboard-course-title">
                  Learn Rust to impove security
                </p>
                <a href="#/Kanbas/Courses/1600/Home"> Go </a>
              </div>
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/cloud.jpg" width={200} height={200} />
              <div>
                <a className="wd-dashboard-couse-link"
                  href="#/Kanbas/Courses/3400/Home">
                  CS3400 Introduction to Cloud Computing
                </a>
                <p className="wd-dashboard-course-title">
                  Learn Cloud computing to build scable project
                </p>
                <a href="#/Kanbas/Courses/3400/Home"> Go </a>
              </div>
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/compiler.jpg" width={200} height={200} />
              <div>
                <a className="wd-dashboard-couse-link"
                  href="#/Kanbas/Courses/2100/Home">
                  CS2100 Computer Compiler
                </a>
                <p className="wd-dashboard-course-title">
                  Learn compiler and what it does
                </p>
                <a href="#/Kanbas/Courses/2100/Home"> Go </a>
              </div>
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/algorithms.jpg" width={200} height={200} />
              <div>
                <a className="wd-dashboard-couse-link"
                  href="#/Kanbas/Courses/5600/Home">
                  CS5600 Algorithm
                </a>
                <p className="wd-dashboard-course-title">
                  Learing different algorithm and data structure
                </p>
                <a href="#/Kanbas/Courses/5600/Home"> Go </a>
              </div>
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/math.jpg" width={200} height={200} />
              <div>
                <a className="wd-dashboard-couse-link"
                  href="#/Kanbas/Courses/5100/Home">
                  CS5100 Discrete Math
                </a>
                <p className="wd-dashboard-course-title">
                  Learing the math need for CS
                </p>
                <a href="#/Kanbas/Courses/5100/Home"> Go </a>
              </div>
          </div>
        </div>
      </div>
  );}
  
  