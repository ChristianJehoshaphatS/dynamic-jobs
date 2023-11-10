import {Link} from "react-router-dom";
const Login = () => {
	const handleLogin = (e) => {
		e.preventDefault();
		console.log(e);
	};
	return (
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
						onClick={handleLogin}
					>
						Sign In
					</button>
				</div>
			</form>
			<p className="text-center text-gray-100 text-xs">
				&copy;2023 Chris J. Suryo - All Rights Reserved
			</p>
		</div>
	);
};

export default Login;
