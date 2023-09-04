import Link from "next/link";


export default function Navbar() {

	const navigation = [
		{
			name: "Home",
			href: "/",
			//icon: UserIcon
		},
		{
			name: "Astronomy DB",
			href: "/astronomy",
			//icon: UsersIcon
		},
		{
			name: "Marvel API",
			href: "/marvel",
			//icon: UsersIcon
		},
	];

	return (
		<div className="w-full h-20 bg-purple-500 sticky top-0 z-50">
			<div className="container mx-auto flex items-center h-full">
				{navigation.map((item) => (
					<Link
						key={item.name}
						href={item.href}
						className="pl-10 text-2xl text-blue-300"
					>
						{item.name}
					</Link>
				))}
			</div>
		</div>
	);
};
