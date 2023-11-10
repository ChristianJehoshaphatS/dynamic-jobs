import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Register = () => {
	let token;
	const navigate = useNavigate();

	useEffect(() => {
		token = localStorage.getItem("Authorization");
		if (!token) {
			navigate("/login");
		}
	});

	const [registerData, setRegisterData] = useState({
		email: "",
		password: "",
		username: "",
		address: "",
		phoneNumber: "",
	});

	const [registeredUser, setRegisteredUser] = useState("");

	const handleFormChange = (e) => {
		e.preventDefault();

		setRegisterData({...registerData, [e.target.name]: e.target.value});
	};

	const handleSubmitRegister = async (e) => {
		e.preventDefault();
		setRegisteredUser("");

		try {
			const register = await axios.post(
				"http://35.247.140.194/user",
				registerData,
				{
					headers: {
						Authorization: token,
					},
				}
			);
			setRegisteredUser(register.data.output.username);
		} catch (error) {
			console.log(error);
		}
	};
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
				onSubmit={handleSubmitRegister}
			>
				<div className="mb-4">
					<label
						className="block text-black text-sm font-bold mb-2"
						for="username"
					>
						Username
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 bg-grey-800 text-white leading-tight focus:outline outline-cyan-500 focus:shadow-outline"
						name="username"
						type="text"
						placeholder="Tim Cooks"
						value={registerData.username}
						onChange={handleFormChange}
					/>
				</div>
				<div className="mb-4">
					<label
						className="block text-black text-sm font-bold mb-2"
						for="email"
					>
						Email
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 bg-grey-800 text-white leading-tight focus:outline outline-cyan-500 focus:shadow-outline"
						name="email"
						type="text"
						placeholder="example@mail.com"
						value={registerData.email}
						onChange={handleFormChange}
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
						className="shadow appearance-none border rounded w-full py-2 px-3 bg-grey-800 text-white mb-3 leading-tight focus:outline outline-cyan-500 focus:shadow-outline"
						name="password"
						type="password"
						placeholder="******************"
						value={registerData.password}
						onChange={handleFormChange}
					/>
					{/* <!-- <p className="text-red-500 text-xs italic">Please choose a password.</p> --> */}
				</div>
				<div className="mb-4">
					<label
						className="block text-black text-sm font-bold mb-2"
						for="phoneNumber"
					>
						Phone Number
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 bg-grey-800 text-white leading-tight focus:outline outline-cyan-500 focus:shadow-outline"
						name="phoneNumber"
						type="text"
						placeholder="+1 222 4562 7890"
						value={registerData.phoneNumber}
						onChange={handleFormChange}
					/>
				</div>
				<div className="mb-4">
					<label
						className="block text-black text-sm font-bold mb-2"
						for="address"
					>
						Address
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 bg-grey-800 text-white leading-tight focus:outline outline-cyan-500 focus:shadow-outline"
						name="address"
						type="text"
						placeholder="West Banks County number 98"
						value={registerData.address}
						onChange={handleFormChange}
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
				<br />
				{registeredUser && (
					<h1 className="text-red-500">
						Username {registeredUser} has been created!
					</h1>
				)}
			</form>
			<p className="text-center text-gray-500 text-xs">
				&copy;2023 Chris J. Suryo - All Rights Reserved
			</p>
		</div>
	);
};

export default Register;
