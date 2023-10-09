import About from "./components/Portfolio/About";


export default function Home() {
	return (
		<div className="flex flex-col h-[calc(100vh-5rem)] items-center">
			<label
				className="text-3xl text-center mt-10"
			>
				Main Page
			</label>

			<About />
			
		</div>
	);
};
