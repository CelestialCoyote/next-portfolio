import SideNav from "../components/SideNav/page";


export const metadata = {
	title: 'Marvel API',
	description: 'Marvel API demo',
};

export default function RootLayout({ children }) {
	return (
		<div className="flex flex-row">
			<SideNav />
			{children}
		</div>
	);
};
