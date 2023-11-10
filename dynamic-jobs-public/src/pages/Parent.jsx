import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {Outlet} from "react-router-dom";

const Parent = () => {
	return (
		<>
			<Navigation />
			<Outlet />
			<Footer />
		</>
	);
};

export default Parent;