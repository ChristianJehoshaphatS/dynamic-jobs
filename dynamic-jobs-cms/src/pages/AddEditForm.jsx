import {useEffect} from "react";
import {useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

const AddEditForm = ({addJob}) => {
	let {id} = useParams();

	const bearerToken =
		"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjcsInVzZXJuYW1lIjoiQ2hyaXMiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2OTg4MzQ0NzR9.gtmd6AELRfq6DdIUOp5aC5qtFtt5ZWvSo4fZSfhquAg";

	const bearerTokenAdmin =
		"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiY2hyaXMiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2OTk1NDE1NDN9.UjUOogYQ92l36dvC_jXLXfWYjSX5VJAD1F7lASbIQDo";
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchJob = async () => {
			try {
				setIsLoading(true);
				const {data} = await axios.get(`http://35.247.140.194/jobs/${id}`, {
					headers: {
						Authorization: bearerTokenAdmin,
					},
				});
				setJobDetail(data.foundJob);
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		};
		// console.log(addJob);
		if (!addJob) {
			fetchJob();
		}

		const getCompanies = async () => {
			const {data} = await axios.get("http://35.247.140.194/pub/companies");
			setCompanies(data);
		};
		getCompanies();
	}, []);

	const [companies, setCompanies] = useState([]);

	const [jobDetail, setJobDetail] = useState({
		authorId: 5,
		companyId: 50,
		description: "17-040 - Profit",
		id: 3,
		imgUrl: "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
		jobType: "full time",
		title: "Cost Accountant",
	});

	const jobId = jobDetail.id;

	// Handle form change using this jobDetail
	const handleFormChange = (e) => {
		e.preventDefault();
		let changed;
		if (e) {
			changed = e.target.attributes.name.value;
		}
		console.log(changed);

		switch (changed) {
			case "title":
				setJobDetail({...jobDetail, title: e.target.value});
				break;

			case "imgUrl":
				setJobDetail({...jobDetail, imgUrl: e.target.value});
				break;

			case "imgFile":
				console.log("image file changed");
				uploadImage(e.target.files[0]);
				break;

			case "description":
				setJobDetail({...jobDetail, description: e.target.value});
				break;

			case "jobType":
				setJobDetail({...jobDetail, jobType: e.target.value});
				break;

			case "companyId":
				setJobDetail({...jobDetail, companyId: e.target.value});
				break;

			case "authorId":
				setJobDetail({...jobDetail, authorId: e.target.value});
				break;

			default:
				break;
		}
		console.log(jobDetail);
	};

	const uploadImage = async (file) => {
		try {
			console.log(file, "?image file");
			const formData = new FormData();

			formData.append("image", file);
			const patchReturn = await axios.patch(
				`http://35.247.140.194/jobs/${jobId}`,
				formData,
				{
					headers: {
						Authorization: bearerTokenAdmin,
					},
				}
			);
			console.log(patchReturn, "Patch Data");
			setJobDetail({...jobDetail, imgUrl: patchReturn.data.url});
		} catch (error) {
			console.log(error);
		}
	};

	const handleSubmit = async (e) => {
		try {
			e.preventDefault();
			console.log(e);
			if (addJob) {
				const postJob = await axios.post(
					"http://35.247.140.194/jobs",
					jobDetail,
					{
						headers: {
							Authorization: bearerTokenAdmin,
						},
					}
				);
				console.log(postJob);
			} else {
				const updateJob = await axios.put(
					`http://35.247.140.194/jobs/${jobId}`,
					jobDetail,
					{
						headers: {
							Authorization: bearerTokenAdmin,
						},
					}
				);

				console.log(updateJob);
			}
		} catch (error) {
			console.log(error);
		}
	};

	if (isLoading)
		return (
			<div>
				<h1>Still Loading</h1>
			</div>
		);

	return (
		<div id="Page5" className="min-h-[100dvh] flex flex-col items-center">
			<br />
			<br />
			<br />
			<h1 className="text-5xl text-white">
				{addJob == true ? "Add a New Job" : `Edit Job With ID ${id}`}
			</h1>
			<br />
			<br />
			<form
				className="w-11/12 mx-11"
				onSubmit={handleSubmit}
				name={addJob ? null : jobDetail.id}
			>
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
							name="title"
							value={addJob ? null : jobDetail.title}
							onChange={handleFormChange}
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
								value={jobDetail.imgUrl}
								name="imgUrl"
								onChange={handleFormChange}
							/>
						</div>
						<div className="w-full md:w-1/6 translate-y-3">
							<input
								type="file"
								id="myfile"
								name="imgFile"
								className="text-white"
								onChange={handleFormChange}
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
							name="description"
							placeholder="A Back-End engineer is needed, salary range from $56.000 - $112.000.000"
							value={addJob ? null : jobDetail.description}
							onChange={handleFormChange}
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
						<div className="relative">
							{/* populate from companies */}
							<select
								className="text-black block appearance-none w-full bg-gray-200 border border-gray-200  py-3 px-4 pr-8 rounded leading-tight focus:outline outline-cyan-500 focus:bg-white focus:border-gray-500"
								id="grid-state"
								name="jobType"
								onChange={handleFormChange}
								value={addJob ? null : jobDetail.jobType}
							>
								<option value={"Full Time"}>Full Time</option>
								<option value={"Part Time"}>Part Time</option>
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
							for="grid-state"
						>
							Company Name
						</label>
						<div className="relative">
							{/* populate from companies */}
							<select
								className="text-black block appearance-none w-full bg-gray-200 border border-gray-200  py-3 px-4 pr-8 rounded leading-tight focus:outline outline-cyan-500 focus:bg-white focus:border-gray-500"
								id="grid-state"
								name="companyId"
								onChange={handleFormChange}
							>
								<option>Choose...</option>
								{companies.map((company) => {
									return <option value={company.id}>{company.name}</option>;
								})}
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
							for="grid-state"
						>
							Author ID
						</label>
						<div className="relative">
							{/* populate from companies */}
							<select
								className="text-black block appearance-none w-full bg-gray-200 border border-gray-200  py-3 px-4 pr-8 rounded leading-tight focus:outline outline-cyan-500 focus:bg-white focus:border-gray-500"
								id="grid-state"
								name="authorId"
								onChange={handleFormChange}
								value={addJob ? null : jobDetail.authorId}
							>
								<option>Choose...</option>
								<option value={1}>New Mexico</option>
								<option value={2}>Missouri</option>
								<option value={3}>Texas</option>
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
				</div>
				<a href="">
					<button className="bg-transparent hover:bg-indigo-500 hover:scale-110 transition-transform text-white font-semibold hover:text-white py-2 px-4 border border-indigo-500 hover:border-transparent rounded">
						Submit
					</button>
				</a>
			</form>
		</div>
	);
};

export default AddEditForm;