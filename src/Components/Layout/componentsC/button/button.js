import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./button.module.scss";

const cx = classNames.bind(styles);

function Button({
	to,
	href,
	primary = false,
	solid = false,
	large = false,
	leftIcon,
	rightIcon,
	children,
	onClick,
}) {
	let NameTag = "button";
	const props = {
		to,
		href,
		onClick,
	};

	if (to) {
		NameTag = Link;
	} else if (href) {
		NameTag = "a";
	}
	const classC = {
		primary,
		large,
		solid,
	};

	return (
		<NameTag className={cx("warpper", classC)} {...props}>
			{leftIcon && <span className={cx("left-icon")}>{leftIcon}</span>}
			<span className={cx("content")}>{children}</span>
			{rightIcon && <span className={cx("right-icon")}>{rightIcon}</span>}
		</NameTag>
	);
}

export default Button;
