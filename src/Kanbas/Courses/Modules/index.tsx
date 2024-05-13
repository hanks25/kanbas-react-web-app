export default function Modules() {
    return (
      <div>
        <button>Collapse All</button>
        <button>View Progress</button>
        <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
              </li>
              <li className="wd-lessons">
                <span className="wd-title">Reading</span>
                <ul className="wd-content">
                    <li className="wd-content-item">Full Stack Developer - Chapter 1</li>
                    <li className="wd-content-item">Full Stack Developer - Chapter 2</li>
                </ul>
              </li>
              <li className="wd-lessons">
                <span className="wd-title">Slides</span>
                <ul className="wd-content">
                    <li className="wd-content-item">Introduction to Web Development</li>
                    <li className="wd-content-item">Creating an HTTP server with Node.js</li>
                    <li className="wd-content-item">Creating React Application</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 2</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                    <li className="wd-content-item">Learn how to create user interface with HTML</li>
                    <li className="wd-content-item">Deploy the assignment to Netlify</li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">Slides</span>
                <ul className="wd-content">
                    <li className="wd-content-item">Introduction to HTML and DOM</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
  );
}
  