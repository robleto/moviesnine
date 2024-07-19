import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

export async function GET(req: NextRequest) {
	try {
		const response = await axios.get(
			`https://api.themoviedb.org/3/movie/popular`,
			{
				params: {
					api_key: apiKey,
				},
			}
		);
		return NextResponse.json(response.data.results);
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to fetch data from TMDB" },
			{ status: 500 }
		);
	}
}
