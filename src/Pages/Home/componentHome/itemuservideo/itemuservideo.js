import classNames from "classnames/bind";

import UserVideo from "../uservideo/uservideo";
import style from "./itemuservideo.module.scss";
const cx = classNames.bind(style);
function Itemuservideo({ data }) {
	return (
		<div className={cx("warrper-userv")}>
			<img className={cx("avatar-uservideo")} src={data.avatar} alt='' />
			<UserVideo data={data} />
		</div>
	);
}

export default Itemuservideo;
