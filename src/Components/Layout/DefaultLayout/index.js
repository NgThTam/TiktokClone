import classNames from "classnames/bind";
import style from "./layout.module.scss";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
const cx = classNames.bind(style);
function DefaultLayout({ children }) {
	return (
		<div>
			<Header />
			<div className={cx("container")}>
				<div className={cx("container-content")}>
					<Sidebar />
					<div className={cx("content")}>{children}</div>
				</div>
			</div>
		</div>
	);
}

export default DefaultLayout;
