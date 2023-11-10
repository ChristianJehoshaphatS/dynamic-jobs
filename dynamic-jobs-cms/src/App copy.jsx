import {useState} from "react";

import Navigation from "./components/Navigation";
// import './App.css'

function App() {
	const [currentlyShowing, setCurrentlyShowing] = useState("Login");
	const [jobs, setJobs] = useState([
		{
			id: 1,
			title: "Pharmacist",
			description: "2-621 - Foundatation Drainage Piping",
			imgUrl: "http://dummyimage.com/250x250.png/dddddd/000000",
			jobType: "part time",
			companyId: 33,
			authorId: 39,
		},
		{
			id: 2,
			title: "Operator",
			description: "10-200 - Louvers and Vents",
			imgUrl: "http://dummyimage.com/250x250.png/ff4444/ffffff",
			jobType: "part time",
			companyId: 36,
			authorId: 16,
		},
		{
			id: 3,
			title: "Cost Accountant",
			description: "17-040 - Profit",
			imgUrl: "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
			jobType: "full time",
			companyId: 50,
			authorId: 5,
		},
		{
			id: 4,
			title: "Software Test Engineer III",
			description: "11-200 - Water Supply and Treatment Equipment",
			imgUrl: "http://dummyimage.com/250x250.png/cc0000/ffffff",
			jobType: "part time",
			companyId: 13,
			authorId: 26,
		},
		{
			id: 5,
			title: "Staff Scientist",
			description: "2-780 - Clay Unit Pavers",
			imgUrl: "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
			jobType: "full time",
			companyId: 29,
			authorId: 44,
		},
		{
			id: 6,
			title: "Sales Representative",
			description: "9-400 - Terrazzo",
			imgUrl: "http://dummyimage.com/250x250.png/dddddd/000000",
			jobType: "full time",
			companyId: 11,
			authorId: 17,
		},
		{
			id: 7,
			title: "Teacher",
			description: "9-800 - Acoustical Treatment",
			imgUrl: "http://dummyimage.com/250x250.png/ff4444/ffffff",
			jobType: "part time",
			companyId: 6,
			authorId: 31,
		},
		{
			id: 8,
			title: "Electrical Engineer",
			description: "8-500 - Windows",
			imgUrl: "http://dummyimage.com/250x250.png/cc0000/ffffff",
			jobType: "part time",
			companyId: 3,
			authorId: 23,
		},
		{
			id: 9,
			title: "Help Desk Operator",
			description: "7-700 - Roof Specialties and Accessories",
			imgUrl: "http://dummyimage.com/250x250.png/dddddd/000000",
			jobType: "part time",
			companyId: 3,
			authorId: 34,
		},
		{
			id: 10,
			title: "Quality Engineer",
			description: "13-030 - Special Purpose Rooms",
			imgUrl: "http://dummyimage.com/250x250.png/ff4444/ffffff",
			jobType: "part time",
			companyId: 39,
			authorId: 20,
		},
		{
			id: 11,
			title: "Developer IV",
			description: "2-621 - Foundatation Drainage Piping",
			imgUrl: "http://dummyimage.com/250x250.png/cc0000/ffffff",
			jobType: "full time",
			companyId: 32,
			authorId: 15,
		},
		{
			id: 12,
			title: "Accountant III",
			description: "12-700 - Systems Furniture",
			imgUrl: "http://dummyimage.com/250x250.png/dddddd/000000",
			jobType: "full time",
			companyId: 6,
			authorId: 22,
		},
	]);
	const [addJob, setAddjob] = useState(false);
	const [jobDetail, setJobDetail] = useState({
		id: 6,
		title: "Sales Representative",
		description: "9-400 - Terrazzo",
		imgUrl: "http://dummyimage.com/250x250.png/dddddd/000000",
		jobType: "full time",
		companyId: 11,
		authorId: 17,
		createdAt: "2023-11-02T10:46:59.409Z",
		updatedAt: "2023-11-02T10:46:59.409Z",
	});
	const [editJobId, seteditJobId] = useState("1");

	const changeView = (e) => {
		e.preventDefault();

		if (e.target.attributes.id) {
			if (+e.target.attributes.id.value == 0) {
				setAddjob(true);
				console.log(addJob);
			} else {
				seteditJobId(e.target.attributes.id.value);
				setJobDetail(jobs[+editJobId - 1]);
				setAddjob(false);
				console.log(+e.target.attributes.id.value);
			}

			console.log(jobDetail);
		}

		setCurrentlyShowing(e.target.name);
	};
	return (
		<>
			<Navigation changeView={changeView} />
			{/* <!-- Login Form --> */}
			{currentlyShowing == "Login" && (
				<div id="Page3" className="min-h-[100dvh] flex flex-col items-center">
					<br />
					<br />
					<h1 className="text-5xl text-white">Login</h1>
					<br />
					<br />
					<form
						className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-5/12 mx-11"
						action=""
						method="post"
					>
						<div className="mb-4">
							<label
								className="block text-white text-sm font-bold mb-2"
								for="email"
							>
								Email
							</label>
							<input
								className="shadow appearance-none bg-grey-800 border rounded w-full py-2 px-3 text-slate-100 leading-tight focus:outline outline-cyan-500 focus:shadow-outline"
								id="email"
								type="text"
								placeholder="exampleemail@mail.com"
							/>
						</div>
						<div className="mb-6">
							<label
								className="block text-white text-sm font-bold mb-2"
								for="password"
							>
								Password
							</label>
							<input
								className="shadow appearance-none bg-grey-800 border rounded w-full py-2 px-3 text-white mb-3 leading-tight focus:outline outline-cyan-500 focus:shadow-outline"
								id="password"
								type="password"
								placeholder="******************"
							/>
							{/* <!-- <p className="text-red-500 text-xs italic">Please choose a password.</p> --> */}
						</div>
						<div className="flex items-center justify-between">
							<button
								className="bg-blue-500 hover:bg-blue-700 text-gray-100 font-bold py-2 px-4 rounded focus:outline outline-cyan-500 focus:shadow-outline"
								type="submit"
								name="Jobs"
								onClick={changeView}
							>
								Sign In
							</button>
						</div>
					</form>
					<p className="text-center text-gray-100 text-xs">
						&copy;2023 Chris J. Suryo - All Rights Reserved
					</p>
				</div>
			)}

			{/* Main entity List Page */}
			{currentlyShowing == "Jobs" && (
				<div id="Page4" className="min-h-[100dvh] flex flex-col items-center">
					<br />
					<br />
					<h1 className="text-5xl text-white">Jobs List</h1>
					<br />
					<br />
					<button className="btn" id="0" name="EditJob" onClick={changeView}>
						Add Job
					</button>
					<br />
					<br />
					{/* <!-- Table Part --> */}
					<div className="overflow-x-auto mx-11 text-center">
						<table className="table text-white">
							{/* <!-- head --> */}
							<thead>
								<tr className="text-white">
									<th>ID </th>
									<th>Title</th>
									<th>Description</th>
									<th>Image Url</th>
									<th>Job Type</th>
									<th>Company Name</th>
									<th>Author Name</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{/* <!-- row 1 --> */}
								{jobs.map((job) => {
									return (
										<tr className="hover">
											{/* job.id */}
											<td>{job.id}</td>

											<th>{job.title}</th>
											<td>{job.description}</td>
											<td>{job.imgUrl}</td>
											<td>{job.jobType}</td>
											<td>{job.companyId}</td>
											<td>{job.authorId}</td>
											<td>
												<div className="join join-horizontal gap-x-2">
													<button
														className="btn join-item text-xs w-16 ml-1.5 h-3 btn-outline btn-warning"
														// ganti ke job.id
														id={job.id}
														name="EditJob"
														onClick={changeView}
													>
														Edit
													</button>
													<button
														className="btn join-item text-xs w-16 ml-1.5 h-3 btn-outline btn-error"
														// ganti ke job.id
														name={job.id}
													>
														Delete
													</button>
												</div>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
			)}

			{/* <!-- Main Entity Edit Form --> */}
			{currentlyShowing == "EditJob" && (
				<div id="Page5" className="min-h-[100dvh] flex flex-col items-center">
					<br />
					<br />
					<br />
					<h1 className="text-5xl text-white">
						{addJob == true ? "Add a New Job" : `Edit Job With ID ${editJobId}`}
					</h1>
					<br />
					<br />
					<form className="w-11/12 mx-11">
						<div className="flex flex-wrap -mx-3 mb-6">
							<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
								<label
									className="block uppercase tracking-wide  text-xs font-bold mb-2 text-white"
									for="grid-first-name"
								>
									Position Title
								</label>

								<input
									className="text-black appearance-none block w-full bg-gray-200  border rounded py-3 px-4 mb-3 leading-tight focus:outline outline-cyan-500 focus:bg-white"
									id="grid-first-name"
									type="text"
									placeholder="Back-End Engineer at Google"
									value={addJob ? null : jobDetail.title}
								/>

								{/* <!-- <p className="text-red-500 text-xs italic">
							Please fill out this field.
						</p> --> */}
							</div>
							{/* <!-- MULTER FILE UPLOAD	 --> */}
							<div className="w-full md:w-3/6 px-3 flex items-center -translate-y-2">
								<div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
									<img
										className="w-auto translate-y-3"
										alt=""
										src={
											addJob
												? "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/little-hawksbill-crag-over-the-white-river-arkansas-landscape-1x1-gregory-ballos.jpg"
												: jobDetail.imgUrl
										}
									/>
								</div>
								<div className="w-full md:w-2/6 px-3">
									<label
										className="block uppercase tracking-wide  text-xs font-bold mb-2 text-white"
										for="grid-last-name"
									>
										Image Url
									</label>
									<input
										className="text-black appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline outline-cyan-500 focus:bg-white focus:border-gray-500"
										id="grid-last-name"
										type="text"
										placeholder="imagekit Link"
										value={addJob ? null : jobDetail.imgUrl}
									/>
								</div>
								<div className="w-full md:w-1/6 translate-y-3">
									<input
										type="file"
										id="myfile"
										name="myfile"
										className="text-white"
									/>
								</div>
							</div>
						</div>
						<div className="flex flex-wrap -mx-3 mb-6">
							<div className="w-full px-3">
								<label
									className="block uppercase tracking-wide  text-xs font-bold mb-2 text-white"
									for="grid-password"
								>
									Description
								</label>
								<input
									className="text-black appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline outline-cyan-500 focus:bg-white focus:border-gray-500"
									id="grid-password"
									type="text"
									placeholder="A Back-End engineer is needed, salary range from $56.000 - $112.000.000"
									value={addJob ? null : jobDetail.description}
								/>
								<p className="text-white text-xs italic">
									Make it as long and as crazy as you'd like
								</p>
							</div>
						</div>
						<div className="flex flex-wrap -mx-3 mb-2">
							<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
								<label
									className="block uppercase tracking-wide  text-xs font-bold mb-2 text-white"
									for="grid-city"
								>
									Job Type
								</label>
								<input
									className="text-black appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline outline-cyan-500 focus:bg-white focus:border-gray-500"
									id="grid-city"
									type="text"
									placeholder="Full Time"
									value={addJob ? null : jobDetail.jobType}
								/>
							</div>
							<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
								<label
									className="block uppercase tracking-wide  text-xs font-bold mb-2 text-white"
									for="grid-state"
								>
									Company ID
								</label>
								<div className="relative">
									{/* populate from companies */}
									<select
										className="text-black block appearance-none w-full bg-gray-200 border border-gray-200  py-3 px-4 pr-8 rounded leading-tight focus:outline outline-cyan-500 focus:bg-white focus:border-gray-500"
										id="grid-state"
									>
										<option>Choose...</option>
										<option>New Mexico</option>
										<option>Missouri</option>
										<option>Texas</option>
									</select>
									<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ">
										<svg
											className="fill-current h-4 w-4"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
										>
											<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
										</svg>
									</div>
								</div>
							</div>
							<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
								<label
									className="block uppercase tracking-wide  text-xs font-bold mb-2 text-white"
									for="grid-zip"
								>
									Author ID
								</label>
								<input
									className="text-black appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline outline-cyan-500 focus:bg-white focus:border-gray-500"
									id="grid-zip"
									type="text"
									placeholder="212"
									value={addJob ? null : jobDetail.authorId}
								/>
							</div>
						</div>
						<a href="">
							<button className="bg-transparent hover:bg-indigo-500 hover:scale-110 transition-transform text-white font-semibold hover:text-white py-2 px-4 border border-indigo-500 hover:border-transparent rounded">
								Submit
							</button>
						</a>
					</form>
				</div>
			)}

			{/* <!-- CMS Secondary Entity Page --> */}
			{currentlyShowing == "Companies" && (
				<div id="Page7" className="min-h-[100dvh] flex flex-col items-center">
					<br />
					<br />
					<h1 className="text-5xl text-white">Companies List</h1>
					<br />
					<br />
					{/* <!-- Table Part --> */}
					<div className="overflow-x-auto mx-11 text-center">
						<div className="overflow-x-auto">
							<table className="table text-white">
								{/* <!-- head --> */}
								<thead>
									<tr className="text-white">
										<th></th>
										<th>Name</th>
										<th>Company Logo</th>
										<th>Location</th>
										<th>Email</th>
										<th>Description</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									{/* <!-- row 1 --> */}
									<tr className="hover">
										<th>1</th>
										<td>Cy Ganderton</td>
										<td>Quality Control Specialist</td>
										<td>Blue</td>
										<td>Quality Control Specialist</td>
										<td>Blue</td>
										<td>
											<div className="join join-horizontal gap-x-2">
												<button className="btn join-item text-xs w-16 ml-1.5 h-3 btn-outline btn-info">
													Detail
												</button>
												<button className="btn join-item text-xs w-16 ml-1.5 h-3 btn-outline btn-warning">
													Edit
												</button>
												<button className="btn join-item text-xs w-16 ml-1.5 h-3 btn-outline btn-error">
													Delete
												</button>
											</div>
										</td>
									</tr>
									{/* <!-- row 2 --> */}
									<tr className="hover">
										<th>2</th>
										<td>Hart Hagerty</td>
										<td>Desktop Support Technician</td>
										<td>Purple</td>
										<td>Desktop Support Technician</td>
										<td>Purple</td>
										<td>
											<div className="join join-horizontal gap-x-2">
												<button className="btn join-item text-xs w-16 ml-1.5 h-3 btn-outline btn-info">
													Detail
												</button>
												<button className="btn join-item text-xs w-16 ml-1.5 h-3 btn-outline btn-warning">
													Edit
												</button>
												<button className="btn join-item text-xs w-16 ml-1.5 h-3 btn-outline btn-error">
													Delete
												</button>
											</div>
										</td>
									</tr>
									{/* <!-- row 3 --> */}
									<tr className="hover">
										<th>3</th>
										<td>Brice Swyre</td>
										<td>Tax Accountant</td>
										<td>Red</td>
										<td>Tax Accountant</td>
										<td>Red</td>
										<td>
											<div className="join join-horizontal gap-x-2">
												<button className="btn join-item text-xs w-16 ml-1.5 h-3 btn-outline btn-info">
													Detail
												</button>
												<button className="btn join-item text-xs w-16 ml-1.5 h-3 btn-outline btn-warning">
													Edit
												</button>
												<button className="btn join-item text-xs w-16 ml-1.5 h-3 btn-outline btn-error">
													Delete
												</button>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			)}

			{/* <!-- Register Form --> */}
			{currentlyShowing == "Register" && (
				<div id="Page6" className="min-h-[100dvh] flex flex-col items-center">
					<br />
					<br />
					<h1 className="text-5xl">Register</h1>
					<br />
					<br />
					<form
						className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-5/12 mx-11"
						action=""
						method="get"
					>
						<div className="mb-4">
							<label
								className="block text-white text-sm font-bold mb-2"
								for="username"
							>
								Username
							</label>
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 bg-grey-800 text-white leading-tight focus:outline outline-cyan-500 focus:shadow-outline"
								id="username"
								type="text"
								placeholder="Tim Cooks"
							/>
						</div>
						<div className="mb-4">
							<label
								className="block text-white text-sm font-bold mb-2"
								for="email"
							>
								Email
							</label>
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 bg-grey-800 text-white leading-tight focus:outline outline-cyan-500 focus:shadow-outline"
								id="email"
								type="text"
								placeholder="example@mail.com"
							/>
						</div>
						<div className="mb-6">
							<label
								className="block text-white text-sm font-bold mb-2"
								for="password"
							>
								Password
							</label>
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 bg-grey-800 text-white mb-3 leading-tight focus:outline outline-cyan-500 focus:shadow-outline"
								id="password"
								type="password"
								placeholder="******************"
							/>
							{/* <!-- <p className="text-red-500 text-xs italic">Please choose a password.</p> --> */}
						</div>
						<div className="mb-4">
							<label
								className="block text-white text-sm font-bold mb-2"
								for="phoneNumber"
							>
								Phone Number
							</label>
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 bg-grey-800 text-white leading-tight focus:outline outline-cyan-500 focus:shadow-outline"
								id="phoneNumber"
								type="text"
								placeholder="+1 222 4562 7890"
							/>
						</div>
						<div className="mb-4">
							<label
								className="block text-white text-sm font-bold mb-2"
								for="address"
							>
								Address
							</label>
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 bg-grey-800 text-white leading-tight focus:outline outline-cyan-500 focus:shadow-outline"
								id="address"
								type="text"
								placeholder="West Banks County number 98"
							/>
						</div>
						<div className="flex items-center justify-between">
							<button
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline outline-cyan-500 focus:shadow-outline"
								type="submit"
							>
								Submit
							</button>
						</div>
					</form>
					<p className="text-center text-gray-500 text-xs">
						&copy;2023 Chris J. Suryo - All Rights Reserved
					</p>
				</div>
			)}
		</>
	);
}

export default App;
