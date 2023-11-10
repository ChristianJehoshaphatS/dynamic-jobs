import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const AddCompany = () => {
	let token;
	const navigate = useNavigate();

	useEffect(() => {
		token = localStorage.getItem("Authorization");
		if (!token) {
			navigate("/login");
		}
	});

	const [companyData, setCompanyData] = useState({
		name: "",
		companyLogo: "",
		location: "",
		email: "",
		description: "",
	});

	const [registeredCompany, setRegisteredCompany] = useState("");

	const handleFormChange = (e) => {
		e.preventDefault();

		setCompanyData({...companyData, [e.target.name]: e.target.value});
	};

	const handleSubmitRegister = async (e) => {
		e.preventDefault();
		setRegisteredCompany("");

		try {
			const register = await axios.post(
				"https://chrisjsuryo.tech/companies",
				companyData,
				{
					headers: {
						Authorization: token,
					},
				}
			);
			console.log(register);
			setRegisteredCompany(register.data.newCompany.name);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div id="Page6" className="min-h-[100dvh] flex flex-col items-center">
			<br />
			<br />
			<h1 className="text-5xl">Add a New Company</h1>
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
						Company Name
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 bg-grey-800 text-white leading-tight focus:outline outline-cyan-500 focus:shadow-outline"
						name="name"
						type="text"
						placeholder="SpaceX"
						value={companyData.name}
						onChange={handleFormChange}
					/>
				</div>
				<div className="mb-4">
					<label
						className="block text-black text-sm font-bold mb-2"
						for="email"
					>
						Company Logo
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 bg-grey-800 text-white leading-tight focus:outline outline-cyan-500 focus:shadow-outline"
						name="companyLogo"
						type="text"
						placeholder="imageurl.com/image.png"
						value={companyData.companyLogo}
						onChange={handleFormChange}
					/>
				</div>
				<div className="mb-6">
					<label
						className="block text-black text-sm font-bold mb-2"
						for="password"
					>
						Location
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 bg-grey-800 text-white mb-3 leading-tight focus:outline outline-cyan-500 focus:shadow-outline"
						name="location"
						type="text"
						placeholder="Highway Road 132"
						value={companyData.location}
						onChange={handleFormChange}
					/>
					{/* <!-- <p className="text-red-500 text-xs italic">Please choose a password.</p> --> */}
				</div>
				<div className="mb-4">
					<label
						className="block text-black text-sm font-bold mb-2"
						for="phoneNumber"
					>
						Email
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 bg-grey-800 text-white leading-tight focus:outline outline-cyan-500 focus:shadow-outline"
						name="email"
						type="email"
						placeholder="example@mail.com"
						value={companyData.email}
						onChange={handleFormChange}
					/>
				</div>
				<div className="mb-4">
					<label
						className="block text-black text-sm font-bold mb-2"
						for="address"
					>
						Description
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 bg-grey-800 text-white leading-tight focus:outline outline-cyan-500 focus:shadow-outline"
						name="description"
						type="text"
						placeholder="West Banks County number 98"
						value={companyData.description}
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
				{registeredCompany && (
					<h1 className="text-red-500">
						Company {registeredCompany} has been created!
					</h1>
				)}
			</form>
			<p className="text-center text-gray-500 text-xs">
				&copy;2023 Chris J. Suryo - All Rights Reserved
			</p>
		</div>
	);
};

export default AddCompany;
