import {useState} from "react";
import arrowLogo from "./assets/chevron-svgrepo-com.svg";
import viteLogo from "/vite.svg";
import Home from "./pages/home";
import Jobs from "./pages/Jobs";
// import './App.css'

function App() {
	const [currentlyShowing, setCurrentlyShowing] = useState("Home");

	const [jobs, setJobs] = useState([
		{
			title: "Pharmacist",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar nisi nec aliquam tempus. Nam quis tellus nec nulla lobortis iaculis vel in elit. Vivamus lacinia commodo convallis. Donec rutrum commodo ligula, quis semper sem convallis ac. Quisque sollicitudin tempus diam ac cursus.",
			imgUrl:
				"https://www.neosho.edu/portals/0/Academics_Services/Academic_Programs/CareerandTechED/Plumbing/Plumbing%20Image.jpg?ver=2023-01-01-234336-647",
			jobtype: "Full Time",
			companyId: 4,
			authorId: 2,
		},
		{
			title: "Operator",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar nisi nec aliquam tempus. Nam quis tellus nec nulla lobortis iaculis vel in elit. Vivamus lacinia commodo convallis. Donec rutrum commodo ligula, quis semper sem convallis ac. Quisque sollicitudin tempus diam ac cursus.",
			imgUrl:
				"https://plus.unsplash.com/premium_photo-1682092016074-b136e1acb26e?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwZmFybWVyfGVufDB8fDB8fHww",
			jobtype: "Part Time",
			companyId: 3,
			authorId: 1,
		},
	]);

	const [companies, setCompanies] = useState([
		{
			name: "Dabshots",
			companyLogo: "http://dummyimage.com/133x250.png/ff4444/ffffff",
			location: "8214 Aberg Hill",
			email: "sfrankiewicz0@arizona.edu",
			description: "2-900 - Landscaping",
		},
		{
			name: "Digitube",
			companyLogo: "http://dummyimage.com/190x155.png/cc0000/ffffff",
			location: "57154 Jay Trail",
			email: "astandering1@usgs.gov",
			description: "17-020 - Insurance",
		},
		{
			name: "Realfire",
			companyLogo: "http://dummyimage.com/223x164.png/ff4444/ffffff",
			location: "4746 Steensland Way",
			email: "sstegers2@biblegateway.com",
			description: "3-500 - Cementitious Decks and Underlayments",
		},
		{
			name: "Divape",
			companyLogo: "http://dummyimage.com/203x185.png/5fa2dd/ffffff",
			location: "2 Mallard Parkway",
			email: "drathbone3@webnode.com",
			description: "1-523 - Sanitary Facilities",
		},
		{
			name: "Avamm",
			companyLogo: "http://dummyimage.com/193x240.png/dddddd/000000",
			location: "026 Oneill Alley",
			email: "hwinckles4@tripod.com",
			description: "15-300 - Fire Protection Piping",
		},
		{
			name: "Twiyo",
			companyLogo: "http://dummyimage.com/147x227.png/dddddd/000000",
			location: "49703 Buena Vista Street",
			email: "zpahler5@squarespace.com",
			description: "12-900 - Furnishings Restoration and Repair",
		},
		{
			name: "Livepath",
			companyLogo: "http://dummyimage.com/118x226.png/cc0000/ffffff",
			location: "97509 Gateway Crossing",
			email: "cstrangeways6@t.co",
			description: "11-500 - Industrial and Process Equipment",
		},
		{
			name: "Topiczoom",
			companyLogo: "http://dummyimage.com/200x138.png/cc0000/ffffff",
			location: "72 Lotheville Lane",
			email: "sbeards7@reuters.com",
			description: "14-500 - Material Handling",
		},
		{
			name: "Leexo",
			companyLogo: "http://dummyimage.com/240x194.png/cc0000/ffffff",
			location: "28240 Blaine Parkway",
			email: "bbrimblecombe8@amazon.co.jp",
			description: "1-570 - Temporary Controls",
		},
		{
			name: "Zoomlounge",
			companyLogo: "http://dummyimage.com/124x124.png/dddddd/000000",
			location: "081 Glacier Hill Pass",
			email: "mbolderoe9@parallels.com",
			description: "14-300 - Escalators and Moving Walks",
		},
		{
			name: "Jatri",
			companyLogo: "http://dummyimage.com/241x196.png/ff4444/ffffff",
			location: "43 Spohn Street",
			email: "gabbisona@seattletimes.com",
			description: "7-700 - Roof Specialties and Accessories",
		},
		{
			name: "Livetube",
			companyLogo: "http://dummyimage.com/162x200.png/dddddd/000000",
			location: "29 Dayton Court",
			email: "srankcomb@cornell.edu",
			description: "8-050 - Basic Door and Window Materials and Methods",
		},
		{
			name: "Youfeed",
			companyLogo: "http://dummyimage.com/248x232.png/dddddd/000000",
			location: "3 Kensington Junction",
			email: "pilewiczc@exblog.jp",
			description: "2-230 - Site Clearing",
		},
		{
			name: "Yakijo",
			companyLogo: "http://dummyimage.com/110x211.png/cc0000/ffffff",
			location: "6 Monica Park",
			email: "goffieldd@mlb.com",
			description: "10-250 - Service Walls",
		},
		{
			name: "Photospace",
			companyLogo: "http://dummyimage.com/161x202.png/5fa2dd/ffffff",
			location: "8092 Autumn Leaf Way",
			email: "feastese@skyrock.com",
			description: "4-400 - Stone",
		},
		{
			name: "Linklinks",
			companyLogo: "http://dummyimage.com/230x215.png/dddddd/000000",
			location: "2 Charing Cross Circle",
			email: "wbenkhef@elegantthemes.com",
			description: "12-500 - Furniture",
		},
		{
			name: "Blogtags",
			companyLogo: "http://dummyimage.com/160x189.png/cc0000/ffffff",
			location: "606 Clarendon Parkway",
			email: "acaldesg@google.de",
			description: "2-220 - Site Demolition",
		},
		{
			name: "Yata",
			companyLogo: "http://dummyimage.com/246x127.png/cc0000/ffffff",
			location: "26 Northview Circle",
			email: "rdavenporth@miibeian.gov.cn",
			description: "12-500 - Furniture",
		},
		{
			name: "Twitterworks",
			companyLogo: "http://dummyimage.com/241x140.png/dddddd/000000",
			location: "52 Fremont Junction",
			email: "wspinelloi@opera.com",
			description: "4 - Masonry",
		},
		{
			name: "Mymm",
			companyLogo: "http://dummyimage.com/129x140.png/ff4444/ffffff",
			location: "5 Browning Junction",
			email: "afallawej@soup.io",
			description: "13-200 - Storage Tanks",
		},
		{
			name: "Latz",
			companyLogo: "http://dummyimage.com/128x155.png/cc0000/ffffff",
			location: "7479 Reindahl Place",
			email: "ajoseburyk@wikia.com",
			description: "8-400 - Entrances and Storefronts",
		},
	]);
	console.log(currentlyShowing);
	function showHomePage(e) {
		e.preventDefault();
		setCurrentlyShowing("Home");
	}
	function showJobsPage(e) {
		e.preventDefault();
		setCurrentlyShowing("Jobs");
	}
	function showJobDetailPage(e) {
		e.preventDefault();
		setCurrentlyShowing("Detail");
		let openedDetailId = e.target.attributes.name.value;
		console.log(openedDetailId);
		if (openedDetailId == 3) {
			setDetail({
				id: 3,
				title: "Cost Accountant",
				description: "17-040 - Profit",
				imgUrl:
					"https://plus.unsplash.com/premium_photo-1682092016074-b136e1acb26e?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwZmFybWVyfGVufDB8fDB8fHww",
				jobType: "full time",
				companyId: 50,
				authorId: 5,
				createdAt: "2023-11-02T10:46:59.409Z",
				updatedAt: "2023-11-02T10:46:59.409Z",
			});
		} else if (openedDetailId == 4) {
			setDetail({
				id: 4,
				title: "Software Test Engineer III",
				description: "11-200 - Water Supply and Treatment Equipment",
				imgUrl:
					"https://www.neosho.edu/portals/0/Academics_Services/Academic_Programs/CareerandTechED/Plumbing/Plumbing%20Image.jpg?ver=2023-01-01-234336-647",
				jobType: "part time",
				companyId: 13,
				authorId: 26,
				createdAt: "2023-11-02T10:46:59.409Z",
				updatedAt: "2023-11-02T10:46:59.409Z",
			});
		}
	}

	const [detail, setDetail] = useState({
		id: 2,
		title: "Operator",
		description: "10-200 - Louvers and Vents",
		imgUrl: "https://ik.imagekit.io/Chris02/745109290314104904_XbrEznrWF.webp",
		jobType: "part time",
		companyId: 36,
		authorId: 16,
		createdAt: "2023-11-02T10:46:59.409Z",
		updatedAt: "2023-11-03T04:15:14.466Z",
	});
	return (
		<>
			{/* <!-- Home Screen --> */}
			{currentlyShowing === "Home" && (
				<Home showHomePage={showHomePage} showJobsPage={showJobsPage} />
			)}

			{/* <!-- All Jobs Page --> */}
			{currentlyShowing === "Jobs" && (
				<Jobs
					jobs={jobs}
					showHomePage={showHomePage}
					showJobDetailPage={showJobDetailPage}
					companies={companies}
					arrowLogo={arrowLogo}
				/>
			)}

			{/* <!-- Job Detail Page --> */}
			{currentlyShowing === "Detail" && (
				<div id="Page2" className="min-h-[100dvh]">
					{/* <!-- Items Part --> */}
					<div className="bg-sky-950 flex flex-col sm:flex-row items-center sm:justify-center flex-wrap sm:py-12">
						<span className="w-0 md:w-1/12"></span>
						<br />
						<br />
						<div className="w-full md:w-7/12 flex flex-col items-center">
							<section className="container w-full flex justify-center flex-wrap">
								<img
									src={detail.imgUrl}
									alt="Album"
									className="object-contain w-11/12 object-cover h-72 md:h-96 rounded-t-xl"
								/>
							</section>
							<div className="container w-11/12 flex justify-center flex-wrap bg-teal-900 rounded-b-xl">
								<article className="prose lg:prose-lg prose-headings:underline prose-a:text-blue-600 mx-11 text-teal-100">
									<br />
									<p>
										Role:
										<strong className="text-gray-100">{detail.title}</strong>
									</p>
									<p>{detail.description}</p>
									<p>
										Job Type:
										<strong className="text-gray-100"> {detail.jobType}</strong>
									</p>
									<p>
										Company Name:
										<strong className="text-gray-100">
											{detail.companyId}
										</strong>
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
										<strong className="text-gray-100">
											Utah, United States
										</strong>
									</p>
									<p>
										Email:
										<strong className="text-gray-100">
											{" "}
											Coca cola Indomie
										</strong>
									</p>
									<p>
										Description: Lorem ipsum dolor sit amet, consectetur
										adipiscing elit. Quisque sit amet ex id est pellentesque
										auctor at elementum orci. Nunc et quam sagittis, lacinia
										turpis non, mattis sem.
									</p>
								</article>
							</div>
						</div>
						<br />
						<br />
					</div>
				</div>
			)}
		</>
	);
}

export default App;
