import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./account.module.scss";
const cx = classNames.bind(styles);
function Account() {
	return (
		<div className={cx("warpper")}>
			<img
				className={cx("avatar")}
				src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f0f57f45f6caadfe0d721b0c5e232e1c~c5_100x100.jpeg?x-expires=1678359600&x-signature=GHovlFGBACYvd%2BEHYtSHkKzNNdA%3D'
				alt='avatar'
			/>
			<div className={cx("user")}>
				<h4 className={cx("name-user")}>
					nthanhtam2303
					<span className={cx("tick")}>
						<FontAwesomeIcon icon={faCheckCircle} />
					</span>
				</h4>
				<p className={cx("name")}>Nguyen Thanh Tam</p>
			</div>
		</div>
	);
}
export default Account;
