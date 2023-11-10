import {useState} from "react";
import arrowLogo from "../assets/chevron-svgrepo-com.svg";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";

const Jobs = () => {
	const [queries, setQueries] = useState({
		totalPage: 10,
		search: "",
		filter: [],
		sort: "asc",
		limit: 10,
		page: 1,
	});

	useEffect(() => {
		const getJobs = async () => {
			const {data} = await axios.get("https://chrisjsuryo.tech/pub/jobs");
			console.log(data);
			setJobs(data.result.data);
			setQueries({...queries, totalPage: data.result.totalPage});
		};
		getJobs();

		const getCompanies = async () => {
			const {data} = await axios.get("https://chrisjsuryo.tech/pub/companies");
			console.log(data);
			setCompanies(data);
		};
		getCompanies();
	}, []);

	const handleQuery = async () => {
		let dataReturn;
		try {
			console.log(queries, ">>>>>	");
			const query = async () => {
				const joinFIlter = queries.filter.join(",");
				const {data} = await axios.get(
					`https://chrisjsuryo.tech/pub/jobs?search=${queries.search}&filter=${joinFIlter}&sort=${queries.sort}&limit=${queries.limit}&page=${queries.page}`
				);
				console.log(data);
				dataReturn = data;
				setJobs(data.result.data);
			};
			query();
		} catch (error) {
			console.log(error);
		} finally {
			// setQueries({...queries, totalPage: dataReturn?.result?.totalPage});
			console.log("queried");
		}
	};

	const navigate = useNavigate();

	const [jobs, setJobs] = useState([]);

	const [companies, setCompanies] = useState([]);

	function handleDetailClick(id) {
		navigate(`/jobs/${id}`);
	}

	// bikin state companies, bikin modal untuk checklist companies, update query based on checked companies

	const editQuery = (event) => {
		console.log(event);
		let checkValue;
		let changed;
		let checked;
		if (event) {
			checked = event?.target?.checked;
		}
		if (checked) {
			checkValue = event?.target?.attributes?.id?.value;
		}
		if (event == "pageDn" || event == "pageUp") {
			changed = event;
		} else {
			changed = event?.target?.attributes?.name?.value;
		}

		switch (changed) {
			case "search":
				setQueries({...queries, search: event.target.value});
				break;

			case "filter":
				console.log(checkValue);
				setQueries({...queries, filter: [...queries.filter, checkValue]});
				break;

			case "sortButton":
				queries.sort == "asc"
					? setQueries({...queries, sort: "desc"})
					: setQueries({...queries, sort: "asc"});
				break;

			case "limit":
				setQueries({...queries, limit: event.target.value});
				break;

			case "pageDn":
				if (queries.page < 1) {
					setQueries({...queries, page: 1});
				} else {
					setQueries({...queries, page: queries.page - 1});
				}
				break;

			case "pageUp":
				if (queries.page > queries.totalPage) {
					setQueries({...queries, page: queries.totalPage});
				} else {
					setQueries({...queries, page: queries.page + 1});
				}
				break;

			default:
				break;
		}
		console.log(queries);
	};
	return (
		<div
			id="Page1"
			className="min-h-[100dvh] bg-sky-950 flex flex-col items-center"
		>
			{/* <!-- Query part --> */}
			<br />
			<br />
			<section className="w-full flex justify-center text-slate-200">
				<div className="join join-vertical sm:join-horizontal">
					<div>
						<div>
							<input
								type="text"
								className="input input-bordered join-item"
								placeholder="Search"
								name="search"
								onChange={editQuery}
							/>
						</div>
					</div>
					<button
						name="sortButton"
						onClick={() => document.getElementById("my_modal_5").showModal()}
						className="join-item inline-flex items-center h-12 px-5 text-indigo-100 transition-colors duration-150 bg-zinc-900 rounded-lg focus:shadow-outline hover:bg-indigo-800"
					>
						<span>Filter</span>
					</button>
					<dialog id="my_modal_5" className="modal">
						<div className="modal-box w-12/12 max-w-5xl">
							<h3 className="font-bold text-lg">Select Companies to Show</h3>
							<div className="flex flex-col items-center">
								<form className="container flex flex-wrap" action="">
									{companies.map((company) => {
										return (
											<label
												key={company.id}
												className="label cursor-pointer mx-4 w-1/5 p-2 hover:bg-black/40 rounded-xl"
											>
												<span className="label-text mx-4 hover:text-slate-100">
													{company.name}
												</span>
												<input
													id={company.id}
													type="checkbox"
													className="checkbox"
													name="filter"
													onChange={editQuery}
												/>
											</label>
										);
									})}
								</form>
							</div>
							<p className="py-4">
								Press ESC key or click the button below to close
							</p>
							<div className="modal-action">
								<form method="dialog">
									{/* if there is a button in form, it will close the modal */}
									<button className="btn">Close</button>
								</form>
							</div>
						</div>
					</dialog>
					<div className="indicator">
						<button
							className="btn join-item text-slate-200"
							onClick={handleQuery}
						>
							Search
						</button>
					</div>
					<button
						name="sortButton"
						onClick={editQuery}
						className="join-item inline-flex items-center h-12 px-5 text-indigo-100 transition-colors duration-150 bg-zinc-900 rounded-lg focus:shadow-outline hover:bg-indigo-800"
					>
						{queries.sort == "asc" ? (
							<>
								<span>Latest</span>
								<img
									src={arrowLogo}
									alt=""
									className="w-3 h-3 ml-3 fill-current"
									viewBox="0 0 20 20"
								/>
							</>
						) : (
							<>
								<span>Oldest</span>
								<img
									src={arrowLogo}
									alt=""
									className="w-3 h-3 ml-3 fill-current rotate-180"
									viewBox="0 0 20 20"
								/>
							</>
						)}
					</button>
				</div>
			</section>
			<br />
			<br />
			<h1 className="text-3xl text-gray-100 mx-11">
				Browse Through our massive selection of talent acquisition infos.
			</h1>
			<br />
			<br />
			<section className="w-11/12 flex justify-normal flex-wrap text-slate-200">
				{jobs.map((job) => {
					return (
						<div
							key={job.id}
							className="card lg:card-side bg-base-100 shadow-xl mx-3.5 mt-6 w-12/12 sm:w-5/12"
						>
							<figure className="w-full lg:w-5/12">
								<img
									src={job.imgUrl}
									alt="Album"
									className=" w-full object-cover h-40 lg:h-full"
								/>
							</figure>
							<div className="card-body w-12/12 lg:w-7/12">
								<h2 className="card-title">{job.title}</h2>
								<p>{job.description}</p>
								<div className="card-actions justify-end">
									<button
										className="btn btn-outline btn-info"
										onClick={() => handleDetailClick(job.id)}
										name={job.id}
									>
										Detail
									</button>
								</div>
							</div>
						</div>
					);
				})}
			</section>
			<br />
			<br />
			<div className="join">
				<button
					onClick={() => {
						editQuery("pageDn");
					}}
					name="pageDn"
					className="join-item btn"
				>
					«
				</button>

				<select
					className="select select-bordered join-item"
					onChange={editQuery}
					name="limit"
				>
					<option disabled selected hidden>
						Page: {queries.page}/{queries.totalPage} Show: {queries.limit}
					</option>
					<option value={10}>
						Page: {queries.page}/{queries.totalPage} Show: 10
					</option>
					<option value={15}>
						Page: {queries.page}/{queries.totalPage} Show: 15
					</option>
					<option value={25}>
						Page: {queries.page}/{queries.totalPage} Show: 25
					</option>
				</select>
				<button
					onClick={() => {
						editQuery("pageUp");
					}}
					name="pageUp"
					className="join-item btn"
				>
					»
				</button>
			</div>
			<br />
			<br />
		</div>
	);
};

export default Jobs;
