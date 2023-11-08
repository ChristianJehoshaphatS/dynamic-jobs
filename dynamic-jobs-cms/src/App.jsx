import {useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'

function App() {
	return (
		<>
			{/* <!-- Login Form --> */}
			<div
				id="Page3"
				className="min-h-[100dvh] flex flex-col items-center bg-sky-950"
			>
				<nav className="navbar bg-indigo-900">
					<div className="dropdown">
						<label tabindex="0" className="btn btn-ghost btn-circle">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6h16M4 12h16M4 18h7"
								/>
							</svg>
						</label>
						<ul
							tabindex="0"
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-slate-200"
						>
							<li>
								<a>Homepage</a>
							</li>
							<li>
								<a>CMS</a>
							</li>
							<li>
								<a>About</a>
							</li>
						</ul>
					</div>
					<div className="flex-1">
						<a className="btn btn-ghost normal-case text-xl text-slate-200">
							Dynamic Jobs
						</a>
					</div>
					<div className="flex-none">
						<button className="btn btn-square btn-ghost">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								className="inline-block w-5 h-5 stroke-current"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
								></path>
							</svg>
						</button>
					</div>
				</nav>
				<br />
				<br />
				<h1 className="text-5xl">Login</h1>
				<br />
				<br />
				<form
					className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-5/12 mx-11"
					action=""
					method="post"
				>
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							for="email"
						>
							Email
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="email"
							type="text"
							placeholder="exampleemail@mail.com"
						/>
					</div>
					<div className="mb-6">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							for="password"
						>
							Password
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
							id="password"
							type="password"
							placeholder="******************"
						/>
						{/* <!-- <p className="text-red-500 text-xs italic">Please choose a password.</p> --> */}
					</div>
					<div className="flex items-center justify-between">
						<button
							className="bg-blue-500 hover:bg-blue-700 text-gray-100 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="submit"
						>
							Sign In
						</button>
					</div>
				</form>
				<p className="text-center text-gray-100 text-xs">
					&copy;2023 Chris J. Suryo - All Rights Reserved
				</p>
			</div>

			{/* Main entity List Page */}
			<div id="Page4" className="min-h-[100dvh] flex flex-col items-center">
				<nav className="navbar bg-indigo-900">
					<div className="dropdown">
						<label tabindex="0" className="btn btn-ghost btn-circle">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6h16M4 12h16M4 18h7"
								/>
							</svg>
						</label>
						<ul
							tabindex="0"
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-slate-200"
						>
							<li>
								<a>Homepage</a>
							</li>
							<li>
								<a>CMS</a>
							</li>
							<li>
								<a>About</a>
							</li>
						</ul>
					</div>
					<div className="flex-1">
						<a className="btn btn-ghost normal-case text-xl text-slate-200">
							Dynamic Jobs - Admin Panel
						</a>
					</div>
					<div className="flex-none">
						<button className="btn btn-square btn-ghost">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								className="inline-block w-5 h-5 stroke-current"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
								></path>
							</svg>
						</button>
					</div>
				</nav>
				<br />
				<br />
				<h1 className="text-5xl text-white">Jobs List</h1>
				<br />
				<br />
				{/* <!-- Table Part --> */}
				<div className="overflow-x-auto mx-11 text-center">
					<table className="table text-white">
						{/* <!-- head --> */}
						<thead>
							<tr className="text-white">
								<th></th>
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
							<tr className="hover">
								<th>1</th>
								<td>Cy Ganderton</td>
								<td>Quality Control Specialist</td>
								<td>Blue</td>
								<td>Quality Control Specialist</td>
								<td>Blue</td>
								<td>Cy Ganderton</td>
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
								<td>Hart Hagerty</td>
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
								<td>Brice Swyre</td>
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
			<br />
			<br />
			{/* <!-- Main Entity Post Form --> */}
			<div id="Page5" className="min-h-[100dvh] flex flex-col items-center">
				<nav className="navbar bg-indigo-900">
					<div className="dropdown">
						<label tabindex="0" className="btn btn-ghost btn-circle">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6h16M4 12h16M4 18h7"
								/>
							</svg>
						</label>
						<ul
							tabindex="0"
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-slate-200"
						>
							<li>
								<a>Homepage</a>
							</li>
							<li>
								<a>CMS</a>
							</li>
							<li>
								<a>About</a>
							</li>
						</ul>
					</div>
					<div className="flex-1">
						<a className="btn btn-ghost normal-case text-xl text-slate-200">
							Dynamic Jobs - Admin Panel
						</a>
					</div>
					<div className="flex-none">
						<button className="btn btn-square btn-ghost">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								className="inline-block w-5 h-5 stroke-current"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
								></path>
							</svg>
						</button>
					</div>
				</nav>
				<br />
				<br />
				<br />
				<h1 className="text-5xl text-white">Post a new Job</h1>
				<br />
				<br />
				<form className="w-11/12 mx-11">
					<div className="flex flex-wrap -mx-3 mb-6">
						<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
							<label
								className="block uppercase tracking-widetext-xs font-bold mb-2 text-white"
								for="grid-first-name"
							>
								Position Title
							</label>
							<input
								className="text-white appearance-none block w-full bg-gray-200border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
								id="grid-first-name"
								type="text"
								placeholder="Back-End Engineer at Google"
							/>
							{/* <!-- <p className="text-red-500 text-xs italic">
							Please fill out this field.
						</p> --> */}
						</div>
						<div className="w-full md:w-1/2 px-3">
							<label
								className="text-white block uppercase tracking-widetext-xs font-bold mb-2"
								for="grid-last-name"
							>
								Image Url
							</label>
							<input
								className="text-white appearance-none block w-full bg-gray-200border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="grid-last-name"
								type="text"
								placeholder="imagekit Link"
							/>
						</div>
					</div>
					<div className="flex flex-wrap -mx-3 mb-6">
						<div className="w-full px-3">
							<label
								className="text-white block uppercase tracking-widetext-xs font-bold mb-2"
								for="grid-password"
							>
								Description
							</label>
							<input
								className="text-white appearance-none block w-full bg-gray-200border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="grid-password"
								type="text"
								placeholder="A Back-End engineer is needed, salary range from $56.000 - $112.000.000"
							/>
							<p className="text-white text-xs italic">
								Make it as long and as crazy as you'd like
							</p>
						</div>
					</div>
					<div className="flex flex-wrap -mx-3 mb-2">
						<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
							<label
								className="text-white block uppercase tracking-widetext-xs font-bold mb-2"
								for="grid-city"
							>
								Job Type
							</label>
							<input
								className="appearance-none block w-full bg-gray-200border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="grid-city"
								type="text"
								placeholder="Full Time"
							/>
						</div>
						<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
							<label
								className="text-white block uppercase tracking-widetext-xs font-bold mb-2"
								for="grid-state"
							>
								Company ID
							</label>
							<div className="relative">
								<select
									className="block appearance-none w-full bg-gray-200 border border-gray-200py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
									id="grid-state"
								>
									<option>Choose...</option>
									<option>New Mexico</option>
									<option>Missouri</option>
									<option>Texas</option>
								</select>
								<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
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
								className="text-white block uppercase tracking-widetext-xs font-bold mb-2"
								for="grid-zip"
							>
								Author ID
							</label>
							<input
								className="appearance-none block w-full bg-gray-200border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="grid-zip"
								type="text"
								placeholder="212"
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

			{/* <!-- Main Entity Edit Form --> */}
			<div id="Page5" className="min-h-[100dvh] flex flex-col items-center">
				<nav className="navbar bg-indigo-900">
					<div className="dropdown">
						<label tabindex="0" className="btn btn-ghost btn-circle">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6h16M4 12h16M4 18h7"
								/>
							</svg>
						</label>
						<ul
							tabindex="0"
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-slate-200"
						>
							<li>
								<a>Homepage</a>
							</li>
							<li>
								<a>CMS</a>
							</li>
							<li>
								<a>About</a>
							</li>
						</ul>
					</div>
					<div className="flex-1">
						<a className="btn btn-ghost normal-case text-xl text-slate-200">
							Dynamic Jobs - Admin Panel
						</a>
					</div>
					<div className="flex-none">
						<button className="btn btn-square btn-ghost">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								className="inline-block w-5 h-5 stroke-current"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
								></path>
							</svg>
						</button>
					</div>
				</nav>
				<br />
				<br />
				<br />
				<h1 className="text-5xl text-white">Edit an Existing Job</h1>
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
								className="appearance-none block w-full bg-gray-200  border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
								id="grid-first-name"
								type="text"
								placeholder="Back-End Engineer at Google"
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
									src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/little-hawksbill-crag-over-the-white-river-arkansas-landscape-1x1-gregory-ballos.jpg"
									alt=""
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
									className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
									id="grid-last-name"
									type="text"
									placeholder="imagekit Link"
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
								className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="grid-password"
								type="text"
								placeholder="A Back-End engineer is needed, salary range from $56.000 - $112.000.000"
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
								className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="grid-city"
								type="text"
								placeholder="Full Time"
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
								<select
									className="block appearance-none w-full bg-gray-200 border border-gray-200  py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
								className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="grid-zip"
								type="text"
								placeholder="212"
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

			{/* <!-- CMS Secondary Entity Page --> */}
			<div id="Page7" className="min-h-[100dvh] flex flex-col items-center">
				<nav className="navbar bg-indigo-900">
					<div className="dropdown">
						<label tabindex="0" className="btn btn-ghost btn-circle">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6h16M4 12h16M4 18h7"
								/>
							</svg>
						</label>
						<ul
							tabindex="0"
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-slate-200"
						>
							<li>
								<a>Homepage</a>
							</li>
							<li>
								<a>CMS</a>
							</li>
							<li>
								<a>About</a>
							</li>
						</ul>
					</div>
					<div className="flex-1">
						<a className="btn btn-ghost normal-case text-xl text-slate-200">
							Dynamic Jobs - Admin Panel
						</a>
					</div>
					<div className="flex-none">
						<button className="btn btn-square btn-ghost">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								className="inline-block w-5 h-5 stroke-current"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
								></path>
							</svg>
						</button>
					</div>
				</nav>
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
			{/* <!-- Register Form --> */}
			<div id="Page6" className="min-h-[100dvh] flex flex-col items-center">
				<nav className="navbar bg-indigo-900">
					<div className="dropdown">
						<label tabindex="0" className="btn btn-ghost btn-circle">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6h16M4 12h16M4 18h7"
								/>
							</svg>
						</label>
						<ul
							tabindex="0"
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-slate-200"
						>
							<li>
								<a>Homepage</a>
							</li>
							<li>
								<a>CMS</a>
							</li>
							<li>
								<a>About</a>
							</li>
						</ul>
					</div>
					<div className="flex-1">
						<a className="btn btn-ghost normal-case text-xl text-slate-200">
							Dynamic Jobs - Admin Panel
						</a>
					</div>
					<div className="flex-none">
						<button className="btn btn-square btn-ghost">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								className="inline-block w-5 h-5 stroke-current"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
								></path>
							</svg>
						</button>
					</div>
				</nav>
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
							className="block text-gray-700 text-sm font-bold mb-2"
							for="username"
						>
							Username
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="username"
							type="text"
							placeholder="Tim Cooks"
						/>
					</div>
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							for="email"
						>
							Email
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="email"
							type="text"
							placeholder="example@mail.com"
						/>
					</div>
					<div className="mb-6">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							for="password"
						>
							Password
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
							id="password"
							type="password"
							placeholder="******************"
						/>
						{/* <!-- <p className="text-red-500 text-xs italic">Please choose a password.</p> --> */}
					</div>
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							for="phoneNumber"
						>
							Phone Number
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="phoneNumber"
							type="text"
							placeholder="+1 222 4562 7890"
						/>
					</div>
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							for="address"
						>
							Address
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="address"
							type="text"
							placeholder="West Banks County number 98"
						/>
					</div>
					<div className="flex items-center justify-between">
						<button
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
		</>
	);
}

export default App;
