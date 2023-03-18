import { useEffect } from "react";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./account.module.scss";
import CusImage from "../cusimage/cusimage";
const cx = classNames.bind(styles);
function Account({ data }) {
	useEffect(() => {
		// console.log(data);
	});

	return (
		<Link to={`/following/@${data.nickname}`}>
			<div className={cx("warpper")}>
				<CusImage className={cx("avatar")} src={data.avatar} />
				<div className={cx("user")}>
					<h4 className={cx("name-user")}>
						{data.nickname}
						<span className={cx("tick")}>
							{data.tick && <FontAwesomeIcon icon={faCheckCircle} />}
						</span>
					</h4>
					<p className={cx("name")}>{data.full_name}</p>
				</div>
			</div>
		</Link>
	);
}
export default Account;
