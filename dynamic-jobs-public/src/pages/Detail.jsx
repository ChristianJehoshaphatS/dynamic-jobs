const Detail = ({detail, showJobsPage}) => {
	return (
		<div id="Page2" className="min-h-[80dvh] first-letter:bg-sky-950">
			{/* <!-- Items Part --> */}
			<div className=" flex flex-col sm:flex-row items-center sm:justify-center flex-wrap sm:py-12">
				<span className="w-0 md:w-1/12"></span>
				<br />
				<br />
				<div className="w-full md:w-7/12 flex flex-col items-center">
					<section className="container w-full flex justify-center flex-wrap">
						<img
							src={detail.imgUrl}
							alt="Album"
							className="object-contain w-11/12 object-cover h-72 md:h-[30rem] rounded-t-xl"
						/>
					</section>
					<div className="container w-11/12 flex flex-wrap bg-teal-900 rounded-b-xl min-h-[20rem]">
						<article className="prose lg:prose-lg prose-headings:underline prose-a:text-blue-600 mx-11 text-teal-100 text-xl">
							<br />
							<p>
								Role:
								<strong className="text-gray-100"> {detail.title}</strong>
							</p>
							<p>{detail.description}</p>
							<p>
								Job Type:
								<strong className="text-gray-100"> {detail.jobType}</strong>
							</p>
							<p>
								Company Name:
								<strong className="text-gray-100">{detail.companyId}</strong>
							</p>
							<p>
								Author Name:
								<strong className="text-gray-100">{detail.authorId}</strong>
							</p>
							<br />
						</article>
					</div>
				</div>
				<br />
				<br />
				<div className="w-11/12 md:w-3/12 flex flex-col items-center">
					<div className="container w-full flex justify-center flex-wrap bg-teal-900 rounded-xl">
						<h1 className="text-3xl text-gray-100 my-4">Company Detail</h1>

						<section className="container w-full flex justify-center flex-wrap">
							<img
								src="https://www.neosho.edu/portals/0/Academics_Services/Academic_Programs/CareerandTechED/Plumbing/Plumbing%20Image.jpg?ver=2023-01-01-234336-647"
								alt="Album"
								className="object-contain w-40 object-cover h-40 rounded-full shadow-[0_25px_15px_-15px_rgba(75,0,130,0.4)] my-4 border-8"
							/>
						</section>
						<article className="prose lg:prose-lg prose-headings:underline prose-a:text-blue-600 mx-11 text-teal-100 text-center my-4">
							<p>
								<strong className="text-gray-100">Luzotica LLC</strong>
							</p>

							<p>
								Location:
								<strong className="text-gray-100">Utah, United States</strong>
							</p>
							<p>
								Email:
								<strong className="text-gray-100"> Coca cola Indomie</strong>
							</p>
							<p>
								Description: Lorem ipsum dolor sit amet, consectetur adipiscing
								elit. Quisque sit amet ex id est pellentesque auctor at
								elementum orci. Nunc et quam sagittis, lacinia turpis non,
								mattis sem.
							</p>
						</article>
					</div>
				</div>
				<br />
				<br />
				<button
					className="btn mt-12 btn-outline btn-info"
					onClick={showJobsPage}
				>
					Back to Selection
				</button>
			</div>
		</div>
	);
};

export default Detail;
