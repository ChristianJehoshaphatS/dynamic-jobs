import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import Jobs from "../pages/Jobs";
import Detail from "../pages/Detail";
import Parent from "../pages/Parent";

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
