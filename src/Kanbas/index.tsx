import "./styles.css"
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router";
import Courses from "./Courses";
import * as db from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";

export default function Kanbas() {
	const images = [
		"algorithms.jpg",
		"cloud.jpg",
		"compiler.jpg",
		"java.jpg",
		"Math.jpg",
		"python.jpg",
		"reactjs.jpg",
		"rust.png",
		"teslabot.jpg",
		"pencil.jpg",
		"stacked.jpg"
	];

	const getRandomImage = () => {
		const randomIndex = Math.floor(Math.random() * images.length);
		return images[randomIndex];
	};

	const [course, setCourse] = useState<any>({
		_id: "0", name: "New Course", number: "New Number",
		startDate: "2023-09-10", endDate: "2023-12-15",
		image: "reactjs.jpg", description: "New Description"
	});

	const [courses, setCourses] = useState(db.courses.map(course => (
		{ ...course, image: getRandomImage() })));

	const addNewCourse = () => {
		const newCourse = {
			...course,
			_id: new Date().getTime().toString(),
			image: getRandomImage()
		};
		setCourses([...courses, { ...course, ...newCourse }]);
	};

	const deleteCourse = (courseId: string) => {
		setCourses(courses.filter((course) => course._id !== courseId));
	};

	const updateCourse = () => {
		setCourses(
			courses.map((c) => {
				if (c._id === course._id) {
					return course;
				} else {
					return c;
				}
			})
		);
	};

	return (
		<Provider store={store}>
			<div id="wd-kanbas" className="h-100">
				<div className="d-flex h-100">
					<div className="d-none d-md-block bg-black">
						<KanbasNavigation />
					</div>
					<div className="flex-fill p-4">
						<Routes>
							<Route path="/" element={<Navigate to="Dashboard" />} />
							<Route path="Dashboard" element={<Dashboard
								courses={courses}
								course={course}
								setCourse={setCourse}
								addNewCourse={addNewCourse}
								deleteCourse={deleteCourse}
								updateCourse={updateCourse}
							/>} />
							<Route path="Courses/:cid/*" element={<Courses courses={courses} />} />
						</Routes>
					</div>
				</div>
			</div>
		</Provider>
	);
}
