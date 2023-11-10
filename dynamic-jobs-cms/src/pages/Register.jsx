const Register = () => {
	return (
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
	);
};

export default Register;
