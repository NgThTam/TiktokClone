import classNames from "classnames/bind";
import style from "./sidebar.module.scss";
import Menusidebar from "./componentSb/menusidebar/menusidebar";
const cx = classNames.bind(style);

function Sidebar() {
	return (
		<div className={cx("warpper")}>
			<Menusidebar />
		</div>
	);
}

export default Sidebar;
