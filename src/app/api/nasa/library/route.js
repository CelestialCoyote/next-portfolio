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
    console.log(searchParams.get('query'))
    const query = searchParams.get('query');

    // const response = coins.data.coins.filter((coin) => {
    //     return coin.name.toLowerCase().includes(query.toLowerCase()) || coin.symbol.toLowerCase().includes(query.toLowerCase())
    // })

    return NextResponse.json(images);
}
