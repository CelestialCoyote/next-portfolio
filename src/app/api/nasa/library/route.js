import { NextResponse } from "next/server";


export async function GET(request) {
	const { searchParams } = new URL(request.url);

	console.log(`searchParams: ${searchParams}`);

	const response = await fetch(`https://images-api.nasa.gov/search?media_type=image&q=${searchParams}`)
		.then((res) => res.json());

	return NextResponse.json(response);
}