import { NextResponse } from "next/server";


async function fetchImages() {
    //const response = await fetch(`https://images-api.nasa.gov/search?media_type=image&q=${searchParams}`, {
	const response = await fetch(`https://images-api.nasa.gov/search?media_type=image`, {
        "method": "GET",
        "headers": {
                'NasaAPI-Key': `${process.env.NASA_API_KEY}`,
                'NasaAPI-Host': 'images-api.nasa.gov'
        }

        })
        
        const images = await response.json();
        return images;
}


export async function GET(request) {
    const images = await fetchImages();
    const { searchParams } = new URL(request.url);
    
	
	console.log(`query from search: ${searchParams.get('query')}`);
	console.log(`fecthed images: ${images}`);
    //const query = searchParams.get('query');

    return NextResponse.json(images);
}
