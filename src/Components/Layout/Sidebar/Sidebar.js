import classNames from "classnames/bind";
import style from "./sidebar.module.scss";
import Menusidebar from "./componentSb/menusidebar/menusidebar";
import Bodysidebar from "./componentSb/bodysidebar/bodysidebar";
const cx = classNames.bind(style);

function Sidebar() {
	return (
		<div className={cx("warpper")}>
			<Menusidebar />
			<Bodysidebar />
		</div>
	);
}

export default Sidebar;
