import {useEffect} from "react";
import {useState} from "react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Jobs = () => {
	const bearerToken =
		"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjcsInVzZXJuYW1lIjoiQ2hyaXMiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2OTg4MzQ0NzR9.gtmd6AELRfq6DdIUOp5aC5qtFtt5ZWvSo4fZSfhquAg";

	const bearerTokenAdmin =
		"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiY2hyaXMiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2OTk1NDE1NDN9.UjUOogYQ92l36dvC_jXLXfWYjSX5VJAD1F7lASbIQDo";
	let token;
	const navigate = useNavigate();

	const [isLoading, setIsLoading] = useState(false);

	const [error, setError] = useState();

	useEffect(() => {
		token = localStorage.getItem("Authorization");
		if (!token) {
			navigate("/login");
		}
	});

	useEffect(() => {
		const fetchJobs = async () => {
			try {
				setIsLoading(true);
				const {data} = await axios.get("https://chrisjsuryo.tech/jobs", {
					headers: {
						Authorization: token,
					},
				});
				// console.log(data);
				setJobs(data.jobs);
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchJobs();
	}, []);

	const [jobs, setJobs] = useState([]);

	const handleDelete = async (id) => {
		try {
			setIsLoading(true);
			await axios.delete(`https://chrisjsuryo.tech/jobs/${id}`, {
				headers: {
					Authorization: token,
				},
			});

			const {data} = await axios.get("https://chrisjsuryo.tech/jobs", {
				headers: {
					Authorization: token,
				},
			});
			// console.log(data);
			setJobs(data.jobs);
		} catch (error) {
			console.log(error);
			setError(error.response.data.message);
		} finally {
			setIsLoading(false);
			// console.log(jobs);
		}
	};

	if (isLoading)
		return (
			<div>
				<h1>Still Loading</h1>
			</div>
		);

	const openDetail = (id) => {
		navigate(`/editJob/${id}`);
	};

	return (
		<div id="Page4" className="min-h-[100dvh] flex flex-col items-center">
			<br />
			<br />
			<h1 className="text-5xl text-white">Jobs List</h1>
			{error && <h1 className="text-red-500">{error}</h1>}
			<br />
			<br />
			<Link to="/addJob">
				<button className="btn" id="0" name="EditJob">
					Add Job
				</button>
			</Link>

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
												onClick={() => openDetail(job.id)}
											>
												Edit
											</button>

											<button
												className="btn join-item text-xs w-16 ml-1.5 h-3 btn-outline btn-error"
												// ganti ke job.id
												name={job.id}
												onClick={() => handleDelete(job.id)}
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
	);
};

export default Jobs;
