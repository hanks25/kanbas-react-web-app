import "./styles.css"
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router";
import Courses from "./Courses";

import * as client from "./Courses/client";
import { useEffect, useState } from "react";
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
		description: "New Description"
	});

	const [courses, setCourses] = useState<any[]>([]);

	const fetchCourses = async () => {
		let fetchedCourses = await client.fetchAllCourses();
		setCourses(fetchedCourses);
	};
	useEffect(() => {
		fetchCourses();
	}, []);
	const addNewCourse = async () => {
		let newCourse = await client.createCourse(course);
		setCourses([...courses, newCourse]);
	};

	const deleteCourse = async (courseId: string) => {
		await client.deleteCourse(courseId);
		setCourses(courses.filter(
			(c) => c._id !== courseId));
	};

	const updateCourse = async () => {
		await client.updateCourse(course);
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
