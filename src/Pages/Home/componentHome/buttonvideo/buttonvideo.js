import classNames from "classnames/bind";
import styles from "./buttonvideo.module.scss";

const cx = classNames.bind(styles);
function ButtonVideo({ children, iconTop }) {
	return (
		<button className={cx("warrper-but")}>
			<span>{iconTop}</span>
			{children}
		</button>
	);
}
export default ButtonVideo;
