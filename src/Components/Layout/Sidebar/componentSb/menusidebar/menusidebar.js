import classNames from "classnames/bind";
// import { useState, useEffect } from "react";
import style from "./menusidebar.module.scss";
import MenuItemSidebar from "../menuitemsb/menuitemsb";
import * as Icons from "../../../../../assets/icons/icons";
const cx = classNames.bind(style);

const dataMenu = [
	{
		id: "menu1",
		title: "Dành cho bạn",
		to: "/",
		Icon: Icons.HomeIcon,
		IconActive: Icons.HomeIconActive,
	},
	{
		id: "menu2",
		title: "Đang Follow",
		to: "/following/@menu2",
		Icon: Icons.Follow,
		IconActive: Icons.FollowActive,
	},
	{
		id: "menu3",
		title: "LIVE",
		to: "/live",
		Icon: Icons.Live,
		IconActive: Icons.LiveActive,
	},
];

function Menusidebar() {
	// const [active, setActive] = useState("menu1");
	// useEffect(() => {
	// 	console.log(window.location.pathname);
	// });
	return (
		<div className={cx("warpper-menu")}>
			{dataMenu.map((itemmenu) => (
				<MenuItemSidebar
					key={itemmenu.id}
					title={itemmenu.title}
					icon={
						itemmenu.to === window.location.pathname ? (
							<itemmenu.IconActive />
						) : (
							<itemmenu.Icon />
						)
					}
					to={itemmenu.to}
					// onClick={() => {
					// 	setActive(itemmenu.id);
					// }}
					className={cx(
						itemmenu.to === window.location.pathname && "menu-active"
					)}
				/>
			))}
		</div>
	);
}

export default Menusidebar;
