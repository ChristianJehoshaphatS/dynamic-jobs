import {useEffect} from "react";
import {useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

const Companies = () => {
	let token;
	const navigate = useNavigate();
	const bearerToken =
		"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjcsInVzZXJuYW1lIjoiQ2hyaXMiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2OTg4MzQ0NzR9.gtmd6AELRfq6DdIUOp5aC5qtFtt5ZWvSo4fZSfhquAg";

	const bearerTokenAdmin =
		"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiY2hyaXMiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2OTk1NDE1NDN9.UjUOogYQ92l36dvC_jXLXfWYjSX5VJAD1F7lASbIQDo";
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		token = localStorage.getItem("Authorization");
		if (!token) {
			navigate("/login");
		}
		const fetchJobs = async () => {
			try {
				setIsLoading(true);
				const {data} = await axios.get("https://chrisjsuryo.tech/companies", {
					headers: {
						Authorization: token,
					},
				});
				console.log(data);
				setCompanies(data.companies);
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
				console.log(companies);
			}
		};
		fetchJobs();
	}, []);
	const [companies, setCompanies] = useState([]);

	if (isLoading)
		return (
			<div>
				<h1>Still Loading</h1>
			</div>
		);

	const handleDelete = async (id) => {
		try {
			setIsLoading(true);
			await axios.delete(`https://chrisjsuryo.tech/companies/${id}`, {
				headers: {
					Authorization: token,
				},
			});

			const {data} = await axios.get("https://chrisjsuryo.tech/companies", {
				headers: {
					Authorization: token,
				},
			});
			console.log(data);
			setCompanies(data.companies);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
			console.log(companies);
		}
	};
	return (
		<div id="Page7" className="min-h-[100dvh] flex flex-col items-center">
			<br />
			<br />
			<h1 className="text-5xl text-white">Companies List</h1>
			<br />
			<br />
			<Link to="/addCompany">
				<button className="btn" id="0" name="EditJob">
					Add Job
				</button>
			</Link>
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
							{companies.map((company) => {
								return (
									<tr key={company.id} className="hover">
										<th>{company.id}</th>
										<td>{company.name}</td>
										<td>{company.companyLogo}</td>
										<td>{company.location}</td>
										<td>{company.email}</td>
										<td>{company.description}</td>
										<td>
											<div className="join join-horizontal gap-x-2">
												<button
													className="btn join-item text-xs w-16 ml-1.5 h-3 btn-outline btn-error"
													onClick={() => handleDelete(company.id)}
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
		</div>
	);
};

export default Companies;
