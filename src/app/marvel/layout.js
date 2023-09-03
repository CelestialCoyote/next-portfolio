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
		<div className="flex">
			<div className="self-start sticky top-20">
				<SideNav navigation={navigation} />
			</div>

			<div className="flex flex-col">
				<div className="flex justify-center h-20 sticky top-20 z-40">
					<div className="flex justify-center items-center bg-purple-500 w-full mt-6 mb-6">
						<label className="text-2xl">Search Bar Here</label>
					</div>

				</div>
				{children}
			</div>
		</div>
	);
};
