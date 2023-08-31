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
	];

	return (
		<div className="w-full h-20 bg-purple-400 sticky top-0">

			<div className="flex bg-slate-400">
				{navigation.map((item) => {
					// <Link
					// 	key={item.name}
					// 	href={item.href}
					// >
					<p className="text-white bg-black">{item.name}</p>
					// </Link>
				})}
			</div>




			{/* <div className="container mx-auto px-4 h-full border-4">
				<div className="flex justify-between items-center h-full border-4 border-yellow-500">
					<div>
						<Link href="/">
							<p>Home</p>
						</Link>
					</div>
					<div>
						<Link href="/stardata">
							<p>Astronomy DB</p>
						</Link>
					</div>
					<div>
						<Link href="/marvel">
							<p>Marvel</p>
						</Link>
					</div>
					<div>
						<Link href="/about">
							<p>About</p>
						</Link>
					</div>
				</div>
			</div> */}
		</div>
	);
};
