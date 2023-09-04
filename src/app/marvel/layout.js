import SideNav from "../components/SideNav/page";


export const metadata = {
	title: 'Marvel API',
	description: 'Marvel API demo',
};


export default function MarvelAPILayout({ children }) {
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
		<div className="flex pl-4 pr-4">
			<div className="self-start sticky top-20">
				<SideNav navigation={navigation} />
			</div>
			{children}
		</div>
	);
};
