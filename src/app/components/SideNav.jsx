import Link from 'next/link';


export default function SideNav({ navigation }) {

	return (
		<div className="h-[calc(100vh-5rem)] bg-purple-500 w-48 pt-8 pl-4">
			<label
				className="text-blue-300"
			>
				Search Marvel API by:
			</label>

			{navigation.map((item) => (
				<Link
					key={item.name}
					href={item.href}
				>
					<div className="mt-8">
						{item.name}
					</div>
				</Link>
			))}
		</div>
	);
};
