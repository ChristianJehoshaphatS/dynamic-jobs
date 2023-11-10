import Navigation from "../components/Navigation";
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
