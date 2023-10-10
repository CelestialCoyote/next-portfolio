import { BsPatchCheckFill } from 'react-icons/bs';


export default function Home() {
	return (
		<div className="flex flex-col h-[calc(100vh-5rem)] items-center">

			<div className="flex flex-col items-center mt-10 w-full border-2">
				<label className="text-3xl mb-8">Paul Stearns</label>
				<label className="">Full Stack Developer</label>
			</div>

			<div className="w-full text-center border-2">
				<label>Skills</label>

				<div className="flex w-full">

					<div className="flex flex-col w-1/2 border-2">
						<h3>Frontend Development</h3>
						<div className="grid grid-cols-2 gap-4">
							<div className="flex gap-2 p-2">
								<BsPatchCheckFill className='experience-details-icon' />
								<div>
									<h4>HTML</h4>
									<small className='text-light'>Experienced</small>
								</div>
							</div>
							<div className="flex gap-2 p-2">
								<BsPatchCheckFill className='experience-details-icon' />
								<div>
									<h4>CSS</h4>
									<small className='text-light'>Experienced</small>
								</div>
							</div>
							<div className="flex gap-2 p-2">
								<BsPatchCheckFill className='experience-details-icon' />
								<div>
									<h4>JavaScript</h4>
									<small className='text-light'>Experienced</small>
								</div>
							</div>
							<div className="flex gap-2 p-2">
								<BsPatchCheckFill className='experience-details-icon' />
								<div>
									<h4>Bootstrap</h4>
									<small className='text-light'>Experienced</small>
								</div>
							</div>
							<div className="flex gap-2 p-2">
								<BsPatchCheckFill className='experience-details-icon' />
								<div>
									<h4>jQuery</h4>
									<small className='text-light'>Experienced</small>
								</div>
							</div>
							<div className="flex gap-2 p-2">
								<BsPatchCheckFill className='experience-details-icon' />
								<div>
									<h4>React</h4>
									<small className='text-light'>Experienced</small>
								</div>
							</div>
						</div>
					</div>

					<div className="flex flex-col w-1/2 border-2">
						<h3>Backend Development</h3>
						<div className="grid grid-cols-2 gap-4">
							<div className="flex gap-2 p-2">
								<BsPatchCheckFill className='experience-details-icon' />
								<div>
									<h4>Node JS</h4>
									<small className='text-light'>Experienced</small>
								</div>
							</div>
							<div className="flex gap-2 p-2">
								<BsPatchCheckFill className='experience-details-icon' />
								<div>
									<h4>MongoDB</h4>
									<small className='text-light'>Experienced</small>
								</div>
							</div>
							<div className="flex gap-2 p-2">
								<BsPatchCheckFill className='experience-details-icon' />
								<div>
									<h4>mySQL</h4>
									<small className='text-light'>Experienced</small>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>

		</div>
	);
};
