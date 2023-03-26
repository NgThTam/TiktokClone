import classNames from "classnames/bind";
import { useState } from "react";

import style from "./acsidebar.module.scss";
import Itemsidebar from "../itemsidebar/itemsidebar";
const cx = classNames.bind(style);

function Acsidebar({ title, datas }) {
	const [view, setView] = useState(false);
	const [dataAcount, setDataAccount] = useState(
		datas.length <= 5 ? datas : datas.slice(0, 5)
	);
	const handleView = () => {
		setView(view ? false : true);
		setDataAccount(view ? datas.slice(0, 5) : datas);
	};
	return (
		<div className={cx("account-sidebar")}>
			<p className={cx("header-acside")}>{title}</p>
			<div>
				{dataAcount.map((data) => (
					<Itemsidebar key={data.id} data={data} />
				))}
			</div>
			<p onClick={handleView} className={cx("footer-acside")}>
				{view ? "Ẩn bớt" : "Xem tất cả"}
			</p>
		</div>
	);
}

export default Acsidebar;
