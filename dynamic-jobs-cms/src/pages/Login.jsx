import axios from "axios";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();
	useEffect(() => {
		const token = localStorage.getItem("Authorization");
		if (token) {
			navigate("/jobs");
		}
	}, []);
	const handleLogin = async (e) => {
		try {
			e.preventDefault();
			console.log(e);
			const token = await axios.post(
				"http://35.247.140.194/login",
				loginDetail
			);
			if (token) {
				console.log(token);
				localStorage.setItem(
					"Authorization",
					`Bearer ${token.data.access_token}`
				);
			}
			navigate("/jobs");
		} catch (error) {
			console.log(error);
			setError(error.response.data.message);
		}
	};

	const [loginDetail, setLoginDetail] = useState({
		email: "chris11@mail.com",
		password: "12345",
	});

	const [error, setError] = useState("");

	const handleLoginForm = (e) => {
		e.preventDefault();
		setLoginDetail({...loginDetail, [e.target.name]: e.target.value});
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
				{error && <h1 className="text-red-600">{error}</h1>}
				<div className="mb-4">
					<label
						className="block text-black text-sm font-bold mb-2"
						for="email"
					>
						Email
					</label>
					<input
						className="shadow appearance-none bg-grey-800 border rounded w-full py-2 px-3 text-slate-100 leading-tight focus:outline outline-cyan-500 focus:shadow-outline"
						id="email"
						name="email"
						type="text"
						placeholder="exampleemail@mail.com"
						value={loginDetail.email}
						onChange={handleLoginForm}
					/>
				</div>
				<div className="mb-6">
					<label
						className="block text-black text-sm font-bold mb-2"
						for="password"
					>
						Password
					</label>
					<input
						className="shadow appearance-none bg-grey-800 border rounded w-full py-2 px-3 text-white mb-3 leading-tight focus:outline outline-cyan-500 focus:shadow-outline"
						id="password"
						type="password"
						name="password"
						placeholder="******************"
						value={loginDetail.password}
						onChange={handleLoginForm}
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
