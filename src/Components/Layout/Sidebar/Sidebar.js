import classNames from "classnames/bind";
import style from "./sidebar.module.scss";
const cx = classNames.bind(style);

function Sidebar() {
	return <div className={cx("warpper")}>sidebar</div>;
}

export default Sidebar;
