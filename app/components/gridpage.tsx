"use client";

import React, { useEffect, useState } from "react";

const GridPage: React.FC = () => {
	const [movies, setMovies] = useState<any[]>([]);

	useEffect(() => {
		const fetchMovies = async () => {
			const response = await fetch("/api/route");
			const movieData = await response.json();
			setMovies(movieData);
		};

		fetchMovies();
	}, []);

	return (
		<div className="min-h-screen bg-gray-100 flex items-center justify-center">
			<div className="grid grid-cols-4 grid-rows-4 gap-4 p-4">
				<div className="p-4"></div>
				<div className="p-4 text-center text-sm font-semibold text-black">
					Lorem
				</div>
				<div className="p-4 text-center text-sm font-semibold text-black">
					Ipsum
				</div>
				<div className="p-4 text-center text-sm font-semibold text-black">
					Dolor
				</div>
				<div className="p-4 text-center text-sm font-semibold text-black">
					Lorem
				</div>
				{movies.slice(0, 3).map((movie, index) => (
					<div
						key={index}
						className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center text-center text-lg font-semibold"
						style={{
							width: "200px",
							height: "130px",
							border: "2px solid black",
						}}
					>
						{movie.title}
					</div>
				))}
				<div className="p-4 text-center text-sm font-semibold text-black">
					Ipsum
				</div>
				{movies.slice(3, 6).map((movie, index) => (
					<div
						key={index}
						className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center text-center text-lg font-semibold"
						style={{
							width: "200px",
							height: "130px",
							border: "2px solid black",
						}}
					>
						{movie.title}
					</div>
				))}
				<div className="p-4 text-center text-sm font-semibold text-black">
					Dolor
				</div>
				{movies.slice(6, 9).map((movie, index) => (
					<div
						key={index}
						className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center text-center text-lg font-semibold"
						style={{
							width: "200px",
							height: "130px",
							border: "2px solid black",
						}}
					>
						{movie.title}
					</div>
				))}
			</div>
		</div>
	);
};

export default GridPage;
