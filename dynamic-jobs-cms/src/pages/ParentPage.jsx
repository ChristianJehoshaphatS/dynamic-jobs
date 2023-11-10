import Navigation from "../components/NavBar";
import {Outlet} from "react-router-dom";

const Parent = () => {
	return (
		<>
			<Navigation />
			<Outlet />
		</>
	);
};

export default Parent;
