import Home from "../Pages/Home/Home";
import Following from "../Pages/Following/Following";
import Upload from "../Pages/Upload/Upload";
import HeadeOnly from "../Components/Layout/HeaderOnly";

const publicRoutes = [
	{ path: "/", component: Home },
	{ path: "/following", component: Following },
	{ path: "/upload", component: Upload, layout: HeadeOnly },
];
const privateRoytes = [];

export { publicRoutes, privateRoytes };
