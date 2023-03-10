import classNames from "classnames/bind";
import styles from "./popper.module.scss";

const cx = classNames.bind(styles);

function Popper({ children }) {
	return <div className={cx("warrap")}>{children}</div>;
}
export default Popper;
