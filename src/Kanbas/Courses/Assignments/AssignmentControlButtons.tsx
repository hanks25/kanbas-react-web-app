import GreenCheckmark from "../Modules/GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import DeleteDialog from "./DeleteDialog";
export default function AssignmentControlButtons({
  assignmentTitle,
  assignmentId,
  deleteAssignment,
}: {
  assignmentTitle: string,
  assignmentId: string;
  deleteAssignment: (assignmentId: string) => void;
}) {
  return (
    <div className="float-end d-flex text-nowrap">
      <GreenCheckmark />
      <IoEllipsisVertical className="ms-3 mt-1" />
      <FaTrash
        className="text-danger mt-1 ms-3 me-1 mb-1"
        data-bs-toggle="modal"
        data-bs-target={`#wd-delete-assignment-dialog-${assignmentId}`}
      />
      <DeleteDialog
        assignmentTitle={assignmentTitle}
        assignmentId={assignmentId}
        deleteAssignment={() => deleteAssignment(assignmentId)}
      />
    </div>
  );
}