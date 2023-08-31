import SideNav from "../components/SideNav/page"


export const metadata = {
	title: 'Marvel API',
	description: 'Marvel API',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="flex">
				<SideNav/>
				{children}
			</body>
		</html>
	);
};
