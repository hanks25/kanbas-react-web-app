import { useParams } from "react-router";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addAssignment, updateAssignment, deleteAssignment } from "./reducer"
export default function AssignmentEditor() {
	const { aid, cid } = useParams();
	const { assignments } = useSelector(
		(state: any) => state.assignmentsReducer
	);
	const d = new Date();
	const dispatch = useDispatch();
	const findResult = assignments.find((a: any) => a._id === aid);
	const [assignment, setAssignment] = useState(
		findResult
			? findResult
			: {
				_id: aid,
				title: "New Assignment",
				course: cid,
				description:
					"New Assignment Description",
				points: 100,
				due_date: `${d.getFullYear()}-${d.getMonth() < 9 ? ("0" + (d.getMonth() + 1)) : d.getMonth() + 1}-${d.getDate() < 10 ? ("0" + d.getDate()) : d.getDate()}`,
				available_from: `${d.getFullYear()}-${d.getMonth() < 9 ? ("0" + (d.getMonth() + 1)) : d.getMonth() + 1}-${d.getDate() < 10 ? ("0" + d.getDate()) : d.getDate()}`,
				available_untill: `${d.getFullYear()}-${d.getMonth() < 9 ? ("0" + (d.getMonth() + 1)) : d.getMonth() + 1}-${d.getDate() < 10 ? ("0" + d.getDate()) : d.getDate()}`,
			}
	);

	return (
		<div id="wd-assignments-editor" className="container ms-1">
			<div className="">
				<label className="row mb-2" htmlFor="wd-name">
					Assignment Name
				</label>

				<input
					id="wd-name"
					className="form-control row mb-4"
					value={assignment ? assignment.title : "New Assignment"}
					onChange={(e) => setAssignment((old: any) => ({ ...old, title: e.target.value }))}
				/>
			</div>

			<textarea
				id="wd-description"
				className="row form-control mb-3"
				style={{ height: "200px" }}
				onChange={(e) => setAssignment((old: any) => ({ ...old, description: e.target.value }))}
			>
				{assignment?.description}
			</textarea>

			<div className="row mb-3">
				<label
					className="col-4 text-end form-label mt-2"
					htmlFor="wd-points"
				>
					Points
				</label>
				<div className="col-8">
					<input
						className="form-control"
						id="wd-points"
						onChange={(e) => setAssignment((old: any) => ({ ...old, points: e.target.value }))}
						value={assignment?.points}
					/>
				</div>
			</div>

			<div className="row mb-3">
				<label
					className="form-label mt-2 text-end col-4"
					htmlFor="wd-group"
				>
					Assignment Group
				</label>

				<div className="col-8">
					<select id="wd-group" className="form-select">
						<option value="ASSIGNMENTS">ASSIGNMENTS</option>
					</select>
				</div>
			</div>

			<div className="row mb-3">
				<label
					className="form-label col-4 mt-2 text-end"
					htmlFor="wd-display-grade-as"
				>
					Display Grade as
				</label>

				<div className="col">
					<select className="form-select" id="wd-display-grade-as">
						<option value="PERCENTAGE">Percentage</option>
					</select>
				</div>
			</div>

			<div className="row mb-3">
				<label
					className="form-label col-4 mt-2 text-end"
					htmlFor="wd-submission-type"
				>
					Submission Type
				</label>

				<div className="col-8">
					<div className="border rounded-2 p-2">
						<select
							className="form-select mb-2"
							id="wd-submission-type"
						>
							<option value="ONLINE">Online</option>
						</select>
						<p className="fw-bold mb-2">Online Entry Option</p>
						<div className="form-check mb-2">
							<input
								className="form-check-input"
								type="checkbox"
								name="check-entry"
								id="wd-text-entry"
							/>
							<label
								className="form-check-label"
								htmlFor="wd-text-entry"
							>
								Text Entry
							</label>
						</div>
						<div className="form-check mb-2">
							<input
								className="form-check-input"
								type="checkbox"
								name="check-entry"
								id="wd-website-url"
							/>
							<label
								className="form-check-label"
								htmlFor="wd-website-url"
							>
								Website URL
							</label>
						</div>
						<div className="form-check mb-2">
							<input
								className="form-check-input"
								type="checkbox"
								name="check-entry"
								id="wd-media-recordings"
							/>
							<label
								className="form-check-label"
								htmlFor="wd-media-recordings"
							>
								Media Recordings
							</label>
						</div>
						<div className="form-check mb-2">
							<input
								className="form-check-input"
								type="checkbox"
								name="check-entry"
								id="wd-student-annotation"
							/>
							<label
								className="form-check-label"
								htmlFor="wd-student-annotation"
							>
								Student Annotation
							</label>
						</div>
						<div className="form-check mb-2">
							<input
								className="form-check-input"
								type="checkbox"
								name="check-entry"
								id="wd-file-upload"
							/>
							<label
								className="form-check-label"
								htmlFor="wd-file-upload"
							>
								File Upload
							</label>
						</div>
					</div>
				</div>
			</div>

			<div className="row mb-3">
				<label
					className="col-4 text-end mt-2 form-label"
					htmlFor="wd-assign-to"
				>
					Assign
				</label>
				<div className="col">
					<div className="border rounded-2 p-2">
						<label className="form-label" htmlFor="wd-assign-to">
							Assign to
						</label>

						<input
							className="form-control mb-2"
							type="text"
							id="wd-assign-to"
							value="Everyone"
						/>
						<label className="form-label" htmlFor="wd-due-date">
							Due
						</label>
						<input
							className="form-control mb-2"
							type="date"
							id="wd-due-date"
							onChange={(e) => setAssignment((old: any) => ({ ...old, due_date: e.target.value }))}
							value={assignment?.due_date}
						/>
						<div className="container m-0 p-0">
							<div className="row">
								<div className="col-6">
									<label
										className="form-label"
										htmlFor="wd-available-from"
									>
										Available from
									</label>
									<input
										className="form-control"
										type="date"
										id="wd-available-from"
										onChange={(e) => setAssignment((old: any) => ({ ...old, available_from: e.target.value }))}
										value={assignment?.available_from}
									/>
								</div>
								<div className="col-6">
									<label
										className="form-label"
										htmlFor="wd-available-until"
									>
										Until
									</label>

									<input
										className="form-control"
										type="date"
										id="wd-available-until"
										onChange={(e) => setAssignment((old: any) => ({ ...old, available_untill: e.target.value }))}
										value={assignment?.available_untill}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<hr />
			<div id="wd-cancel-save-buttons">
				<Link
					to={`/Kanbas/Courses/${cid}/Assignments`}
					className="btn btn-secondary me-1 rounded-1"
				>
					Cancel
				</Link>
				<Link
					to={`/Kanbas/Courses/${cid}/Assignments`}
					className="btn btn-danger rounded-1"
					onClick={() => {
						findResult ? dispatch(updateAssignment(assignment)) : dispatch(addAssignment(assignment))
					}}
				>
					Save
				</Link>
			</div>
		</div>
	);
}