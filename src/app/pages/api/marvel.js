import CryptoJS from 'crypto-js';


const generateMarvelAuthentication = () => {
    const API_KEY = process.env.MARVEL_API_KEY;
    const PRIVATE_KEY = process.env.MARVEL_PRIVATE_KEY;

    let ts = new Date().getTime();
    let message = CryptoJS.MD5(ts + PRIVATE_KEY + API_KEY);
    let hash = message.toString();
    let marvelAuth = `&ts=${ts}&apikey=${API_KEY}&hash=${hash}`
    
    return marvelAuth;
};

const BASE_MARVEL_URL = 'http://gateway.marvel.com/v1/public/';
const marvelAuth = generateMarvelAuthentication();

export default handler = async (req, res) => {
	const { query, method } = req;

	let url = `${BASE_MARVEL_URL}/characters?nameStartsWith=${query,startswith}${marvelAuth}`;

	const data = await fetch(url)
		.then(response => response.json());

	res.json(data);
	console.log(data);
};