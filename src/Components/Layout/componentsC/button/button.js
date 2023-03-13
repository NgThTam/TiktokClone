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
	className,
	classIcon,
	leftIcon,
	rightIcon,
	children,
	onClick,
	onBack,
}) {
	let NameTag = "button";
	const props = {
		to,
		href,
		onClick,
	};
	const propsIcon = {
		onClick: onBack,
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
		<NameTag className={cx("warpper", className, classC)} {...props}>
			{leftIcon && (
				<span className={cx("left-icon", classIcon)} {...propsIcon}>
					{leftIcon}
				</span>
			)}
			<span className={cx("content")}>{children}</span>
			{rightIcon && (
				<span className={cx("right-icon", classIcon)}>{rightIcon}</span>
			)}
		</NameTag>
	);
}

export default Button;
