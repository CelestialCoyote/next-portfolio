import Link from 'next/link';


export default function SideNav({ navigation }) {

	return (
		<div className="bg-black w-40 pt-8 h-[calc(100vh-5rem)] ">
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
