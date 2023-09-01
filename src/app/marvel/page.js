import SideNav from "../components/SideNav/page";

export default function Marvel() {

	return (
		<div className="flex">
			<SideNav />
			<div className="flex w-full border-x-red-500 border-2">
				<label
					className="text-2xl"
				>
					Marvel API
					</label>
			</div>
		</div>
	);
};
