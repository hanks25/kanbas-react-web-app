import { BsPlus } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { BsGripVertical } from "react-icons/bs";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaPenToSquare } from "react-icons/fa6";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import * as client from "./client";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment, addAssignment, updateAssignment, setAssignments } from "./reducer";
export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchAssignments = async () => {
    const assignments = await client.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };
  useEffect(() => {
    fetchAssignments();
  }, []);

  return (
    <div id="wd-assignments">
      <div className="d-flex text-nowrap mb-5">
        <span className="input-group-text bg-white border-end-0">
          <CiSearch className="text-muted" />
        </span>
        <input
          id="wd-search-assignment"
          placeholder="Search..."
          className="flex-fill ms-1 me-5 form-control form-control-sm fs-4"
          style={{
            fontFamily: "Arial, FontAwesome",
            minWidth: "160px",
          }}
        />
        <button
          id="wd-add-assignment-group"
          className="float-end btn btn-lg btn-secondary me-1"
          style={{ borderRadius: "0.20rem" }}
        >
          <BsPlus className="fs-2" style={{ marginBottom: "2px" }} />
          Group
        </button>
        <button
          id="wd-add-assignment"
          className="float-end btn btn-lg btn-danger"
          style={{ borderRadius: "0.20rem" }}
          onClick={() => {
            navigate(
              `/Kanbas/Courses/${cid}/Assignments/${new Date()
                .getTime()
                .toString()}`
            );
          }}
        >
          <BsPlus style={{ marginBottom: "2px" }} className="fs-2" />
          Assignment
        </button>
      </div>
      <div
        id="wd-assignments-title"
        className="bg-secondary p-2 ps-2 d-flex align-items-center"
      >
        <BsGripVertical
          className="fs-3 me-1 float-start"
          style={{ minWidth: "28px" }}
        />

        <IoMdArrowDropdown
          className="fs-3 me-2"
          style={{ minWidth: "28px" }}
        />

        <span className="fs-3 flex-fill">ASSIGNMENTS</span>

        <span className="float-end me-1 fs-6 p-1 text-center border rounded-start-5 rounded-end-5 border-secondary">
          40% of Total
        </span>
        <AssignmentsControlButtons />
      </div>

      <ul id="wd-assignment-list" className="list-group rounded-0">
        {assignments.filter((a: any) => a.course === cid)
          .map((a: any) => (
            <li key={`${a._id}`}
              className="wd-assignment-list-item list-group-item d-flex align-items-center p-4">
              <BsGripVertical className="me-3 fs-3" style={{ minWidth: "28px" }} />
              <FaPenToSquare
                className="fs-4 me-3 text-success"
                style={{ minWidth: "28px" }}
              />
              <div className="text-secondaty flex-fill fs-5 me-3">
                <Link to={`/Kanbas/Courses/${cid}/Assignments/${a._id}`}
                  className="wd-assignment-link text-black text-decoration-none fs-4 fw-bold">
                  {a.title}
                </Link>
                <br />
                <span className="text-danger fw-medium">
                  Multiple Modules
                </span>{" "}
                | <strong>Not available until</strong> {a.available_from ? a.available_from : "TBD"} | <strong>Due</strong> {a.due_date ? a.due_date : "TBD"} |
                {a.points ? a.points : "-"} pts{" "}
              </div>
              <AssignmentControlButtons
                key={a._id}
                assignmentTitle={a.title}
                assignmentId={a._id}
                deleteAssignment={(assignmentId) =>
                  dispatch(deleteAssignment(assignmentId))
                } />
            </li>
          ))}
      </ul>
    </div>
  );
}