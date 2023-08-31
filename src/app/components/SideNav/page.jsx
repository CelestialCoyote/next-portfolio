import Link from 'next/link';


export default function SideNav() {
	//const router = useRouter();

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
		<div className="bg-black w-40 pt-8 h-screen">
			{navigation.map((item) => (
				<Link
					key={item.name}
					href={item.href}
				>
					<div className="">
						{item.name}
					</div>
				</Link>
			))}
		</div>
	);
};
