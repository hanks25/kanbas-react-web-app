import { useParams } from "react-router";
import { assignments, enrollments, grades, users } from "../../Database";

export default function Content() {
    const { cid } = useParams();
    const students = enrollments.filter((e) => e.course === cid);
    const courseAssignments = assignments.filter((a) => a.course === cid);
    return (
        <div className="mt-4 table-responsive">
            <table className="table table-striped text-nowrap">
                <thead>
                    <tr>
                        <th scope="col" className="border align-middle">
                            Student Name
                        </th>
                        {courseAssignments.map((a) => (
                            <th scope="col"
                                className="text-center align-middle border"
                                key={`${a._id}`}>
                                <span className="d-block">{a.title}</span>
                                <span className="fs-6 fw-medium">out of 100</span>
                            </th>
                        ))}
                        {/* <th
                            scope="col"
                            className="text-center align-middle border"
                        >
                            <span className="d-block">A1 SETUP</span>
                            <span className="fs-6 fw-medium">out of 100</span>
                        </th>
                        <th
                            scope="col"
                            className="text-center align-middle border"
                        >
                            <span className="d-block">A2 HTML</span>
                            <span className="fs-6 fw-medium">out of 100</span>
                        </th>
                        <th
                            scope="col"
                            className="text-center align-middle border"
                        >
                            <span className="d-block">A3 CSS</span>
                            <span className="fs-6 fw-medium">out of 100</span>
                        </th>
                        <th
                            scope="col"
                            className="text-center align-middle border"
                        >
                            <span className="d-block">A4 BOOTSTRAP</span>
                            <span className="fs-6 fw-medium">out of 100</span>
                        </th> */}
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => {
                        const info = users.find(u => u._id === student.user);
                        return (
                            <tr>
                                <th scope="row" className="text-danger border align-middle">
                                    {`${info?.firstName} ${info?.lastName}`}
                                </th>
                                {courseAssignments.map((a) => {
                                    const grade = grades.find((g) => g.assignment === a._id
                                        && g.student === student.user);
                                    return(
                                        <td className="text-center border align-middle">
                                            {grade? grade.grade : "-" }
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

function TableRow({
    name,
    a1,
    a2,
    a3,
    a4,
}: {
    name: string;
    a1: number;
    a2: number;
    a3: number;
    a4: number;
}) {
    return (
        <tr>
            <th scope="row" className="text-danger border align-middle">
                {name}
            </th>
            <td className="text-center border align-middle">
                <div className="d-flex align-items-center">
                    <input
                        type="number"
                        defaultValue={a3}
                        className="form-control form-control-sm text-center"
                        style={{ width: '80px', display: 'inline-block' }}
                    />
                    %
                </div>
            </td>
            <td className="text-center border align-middle">{a2}%</td>
            <td className="text-center border align-middle">{a3}%</td>
            <td className="text-center border align-middle">{a4}%</td>
        </tr>
    );
}