import Home from "../Pages/Home/Home";
import Following from "../Pages/Following/Following";
import Upload from "../Pages/Upload/Upload";
import HeadeOnly from "../Components/Layout/HeaderOnly";
import Notpount from "../Pages/Notpount/notpount";
import { LayoutNot } from "../Pages/Notpount/notpount";

const publicRoutes = [
	{ path: "/", component: Home },
	{ path: "/following/:nickName", component: Following },
	{ path: "/upload", component: Upload, layout: HeadeOnly },
	{ path: "*", component: Notpount, layout: LayoutNot },
];
const privateRoytes = [];

export { publicRoutes, privateRoytes };
