import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/HomePage";
import Jobs from "../pages/JobsPage";
import Detail from "../pages/DetailPage";
import Parent from "../pages/ParentPage";

const router = createBrowserRouter([
	{
		element: <Parent />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/jobs",
				element: <Jobs />,
			},
			{
				path: "/jobs/:id",
				element: <Detail />,
			},
		],
	},
]);

export default router;
