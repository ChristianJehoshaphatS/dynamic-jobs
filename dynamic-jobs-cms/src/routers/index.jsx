import {createBrowserRouter} from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Jobs from "../pages/Jobs";
import Companies from "../pages/Companies";
import AddEditForm from "../pages/AddEditForm";
import Parent from "../pages/Parent";
import AddCompany from "../pages/AddCompany";

const router = createBrowserRouter([
	{
		element: <Parent />,
		children: [
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/register",
				element: <Register />,
			},
			{
				path: "/jobs",
				element: <Jobs />,
			},
			{
				path: "/companies",
				element: <Companies />,
			},
			{
				path: "/addCompany",
				element: <AddCompany />,
			},
			{
				path: "/addJob",
				element: <AddEditForm addJob={true} />,
			},
			{
				path: "/editJob/:id",
				element: <AddEditForm addJob={false} />,
			},
		],
	},
]);

export default router;
