import classNames from "classnames/bind";
import { Link } from "react-router-dom";
// import { useEffect } from "react";
import style from "./menuitemsb.module.scss";
const cx = classNames.bind(style);

function MenuItemSidebar({ title, icon, to, onClick, className }) {
	// useEffect(() => {
	// 	console.log(dataid);
	// });
	return (
		<Link
			className={cx("warpper-menu-item", className)}
			to={to}
			onClick={onClick}
		>
			<span className={cx("menu-item-icon")}>{icon}</span>
			<span className={cx("menu-item-title")}>{title}</span>
		</Link>
	);
}

export default MenuItemSidebar;
