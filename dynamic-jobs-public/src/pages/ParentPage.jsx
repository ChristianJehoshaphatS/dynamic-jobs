import Navigation from "../components/NavBar";
import Footer from "../components/FooterMenu";
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
