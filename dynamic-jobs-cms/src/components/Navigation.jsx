import {Link} from "react-router-dom";
const Navigation = () => {
	return (
		<nav className="navbar bg-indigo-900">
			<div className="dropdown">
				<label tabindex="0" className="btn btn-ghost btn-circle">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h7"
						/>
					</svg>
				</label>
				<ul
					tabindex="0"
					className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-slate-200"
				>
					<li>
						<Link to="/register">Register</Link>
					</li>
					<li>
						<Link to="/login">Login</Link>
					</li>
					<li>
						<Link to="/jobs">Jobs List</Link>
					</li>
					<li>
						<Link to="/companies">Companies List</Link>
					</li>
					<li>
						<Link to="/login">Log Out</Link>
					</li>
				</ul>
			</div>
			<div className="flex-1">
				<Link
					to="/login"
					className="btn btn-ghost normal-case text-xl text-slate-200"
				>
					Dynamic Jobs - Admin Panel
				</Link>
			</div>
			<div className="flex-none">
				<button className="btn btn-square btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						className="inline-block w-5 h-5 stroke-current"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
						></path>
					</svg>
				</button>
			</div>
		</nav>
	);
};

export default Navigation;
