export default async function Image({ params }) {

	return (
		<div className="flex flex-1 bg-slate-200">
			{params.nasa_id}
		</div>
	)
}