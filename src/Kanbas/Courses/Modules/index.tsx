import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router";
import { modules } from "../../Database";
export default function Modules() {
  const { cid } = useParams();
  return (
    <div>
      <ModulesControls />
      <br />
      <br />
      <br />
      <br />
      <ul id="wd-modules" className="list-group rounded-0 text-nowrap">
        {modules.filter((m) => m.course === cid).map((m) => (
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary fw-bold d-flex">
              <BsGripVertical className="me-2 fs-3" />
              <p className="wd-title-text flex-fill mb-0">
                {m.name}
              </p>
              <ModuleControlButtons />
            </div>
            {m.lessons && (
              <ul className="wd-lessons list-group rounded-0">
                {m.lessons.map((lesson) => (
                  <li className="wd-lesson list-group-item p-3 ps-1">
                    <span className="wd-title fw-bold d-flex">
                      <BsGripVertical className="me-2 fs-3" />
                      <p className="wd-title-text flex-fill mb-0">
                        {lesson.name}
                      </p>
                      <LessonControlButtons />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}