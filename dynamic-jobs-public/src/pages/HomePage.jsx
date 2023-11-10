import {Link} from "react-router-dom";

const Home = ({showJobsPage}) => {
	return (
		<div id="Home" className="min-h-[100dvh]">
			<div
				className="hero min-h-screen"
				style={{
					backgroundImage:
						"url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
				}}
			>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-center text-neutral-content">
					<div className="max-w-md">
						<h1 className="mb-5 text-5xl font-bold">Hello there</h1>
						<p className="mb-5">
							Welcome to Dynamic Jobs where you can find ideal jobs to apply to.
						</p>
						<Link to="/jobs">
							<button className="btn btn-primary" onClick={showJobsPage}>
								Get Started
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
