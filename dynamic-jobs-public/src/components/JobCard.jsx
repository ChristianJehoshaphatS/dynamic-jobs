const JobCard = ({job, handleDetailClick}) => {
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
};

export default JobCard;
