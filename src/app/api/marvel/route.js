import { NextResponse } from "next/server";
import generateMarvelAuthentication from "@/utils/generateMarvelAuthentication";


const BASE_MARVEL_URL = 'http://gateway.marvel.com/v1/public/';
const marvelAuth = generateMarvelAuthentication();


export async function GET(request) {
	const { searchParams } = new URL(request.url);

	//console.log(`searchParams: ${searchParams}`);
	let url = `${BASE_MARVEL_URL}/characters?${searchParams}${marvelAuth}`;

	const response = await fetch(url)
		.then((res) => res.json());

	return NextResponse.json(response);
}