
import './globals.css';
import Navbar from './components/NavBar';


export const metadata = {
	title: 'CelestialCoyote',
	description: 'Portfolio',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				{children}
			</body>
		</html>
	);
};
