import SideNav from "../components/SideNav/page";


export const metadata = {
	title: 'Marvel API',
	description: 'Marvel API demo',
};


export default function RootLayout({ children }) {
	const navigation = [
		{
			name: "Artists",
			href: "/marvel/artists",
			//icon: UserIcon
		},
		{
			name: "Characters",
			href: "/marvel/characters",
			//icon: UsersIcon
		},
	];


	return (
		<div className="flex flex-row">
			<SideNav navigation = {navigation}/>
			{children}
		</div>
	);
};
