import { FaGear } from "react-icons/fa6";
import { RiArrowDownWideFill, RiArrowDownSLine } from "react-icons/ri";
import { CiExport, CiFilter, CiImport } from "react-icons/ci";
import Content from "./content";
export default function Grades() {
    return (
        <div id="wd-grades" className="mt-4 ms-2">
            <div id="wd-grades-control-buttons" className="d-flex flex-row-reverse mb-2">
                <button className="ms-2 btn btn-lg btn-secondary rounded-1">
                    <FaGear />
                </button>
                <button className=" ms-2 btn btn-lg btn-secondary rounded-1">
                    <CiExport className="me-2" />
                    Export
                    <RiArrowDownWideFill className="ms-2" />
                </button>
                <button className=" ms-2 btn btn-lg btn-secondary rounded-1">
                    <CiImport className="me-2" />
                    Import
                </button>
            </div>
            <div className="mb-3">
                <div className="row">
                    <div className="col">
                        <p className="mb-2 fw-bold fs-3">Student Names</p>
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control fs-5"
                                placeholder="&#xf002; Search Students"
                                id="wd-grades-students-search"
                                style={{
                                    fontFamily: "Arial, FontAwesome",
                                    minWidth: "160px",
                                }}
                            />
                            <span className="input-group-text">
                                <RiArrowDownSLine />
                            </span>
                        </div>
                    </div>
                    <div className="col">
                        <p className="mb-2 fw-bold fs-3">Assignment Names</p>
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control fs-5"
                                id="wd-grades-assignments-search"
                                placeholder="&#xf002; Search Assignments"
                                style={{
                                    fontFamily: "Arial, FontAwesome",
                                    minWidth: "160px",
                                }}
                            />
                            <span className="input-group-text">
                                <RiArrowDownSLine />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn btn-lg btn-secondary rounded-1">
                <CiFilter className="fs-3 me-2" />
                Apply Filters
            </button>
            <Content />

        </div>
    )
}