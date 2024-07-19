import React from "react";
import GridPage from "./components/gridpage";

const Page: React.FC = () => {
	return (
		<div className="w-full h-full flex flex-col">
			<header className="bg-gray-800 text-white p-4">
				<h1 className="text-xl font-bold">MoviesNine</h1>
			</header>
			<div className="flex-1 flex min-h-screen flex-col">
				<GridPage />
			</div>
			<footer className="bg-gray-800 text-white p-4 text-center">
				<p>&copy; 2024 MoviesNine. All rights reserved.</p>
			</footer>
		</div>
	);
};

export default Page;
