import SideNav from "../components/SideNav";


export const metadata = {
	title: 'Marvel API',
	description: 'Marvel API demo',
};


export default function MarvelAPILayout({ children }) {
	const navigation = [
		{
			name: "Characters",
			href: "/marvel/characters",
			//icon: UserIcon
		},
		{
			name: "Comics",
			href: "/marvel/comics",
			//icon: UsersIcon
		},
		{
			name: "Creators",
			href: "/marvel/creators",
			//icon: UserIcon
		},
	];


	return (
		<div className="flex">
			<div className="self-start sticky top-20">
				<SideNav navigation={navigation} />
			</div>
			{children}
		</div>
	);
};
