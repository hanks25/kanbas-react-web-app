const student = [
    {
        name: "Jane Adams",
        a1: 100,
        a2: 96,
        a3: 100,
        a4: 85,
    },
    {
        name: "Christian Allen",
        a1: 87,
        a2: 76,
        a3: 89,
        a4: 100,
    },
    {
        name: "Samreen Ansari",
        a1: 89,
        a2: 45,
        a3: 12,
        a4: 78,
    },
    {
        name: "Han Bao",
        a1: 90,
        a2: 56,
        a3: 23,
        a4: 34,
    },
    {
        name: "Luka Doncic",
        a1: 12,
        a2: 67,
        a3: 34,
        a4: 89,
    },
    {
        name: "Siran Cao",
        a1: 56,
        a2: 78,
        a3: 12,
        a4: 90,
    },
    {
        name: "Json Huang",
        a1: 78,
        a2: 12,
        a3: 90,
        a4: 56,
    },
    {
        name: "Chris Evan",
        a1: 73,
        a2: 84,
        a3: 65,
        a4: 87,
    },
    {
        name: "Justin Nunu",
        a1: 67,
        a2: 89,
        a3: 23,
        a4: 87,
    },
    {
        name: "Mallory Wilson",
        a1: 84,
        a2: 92,
        a3: 78,
        a4: 90,
    },
    {
        name: "Nazi Reid",
        a1: 89,
        a2: 23,
        a3: 67,
        a4: 45,
    },
    {
        name: "Reggy Miller",
        a1: 45,
        a2: 67,
        a3: 34,
        a4: 23,
    },
];

export default function Content() {
    return (
        <div className="mt-4 table-responsive">
            <table className="table table-striped text-nowrap">
                <thead>
                    <tr>
                        <th scope="col" className="border align-middle">
                            Student Name
                        </th>
                        <th
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
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {student.map((s, ind) => <TableRow {...s} key={ind} />)}
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