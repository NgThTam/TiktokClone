import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import imageNF from "../../assets/images/404error.png";
import style from "./notpount.module.scss";

const cx = classNames.bind(style);
function Notpount() {
	return (
		<div className={cx("warpper-not")}>
			{
				// eslint-disable-next-line
				<img className={cx("image-not")} src={imageNF} />
			}
			<Link className={cx("link-not")} to={"/"}>
				Go back home
			</Link>
		</div>
	);
}

export const LayoutNot = ({ children }) => {
	return <>{children}</>;
};

export default Notpount;
