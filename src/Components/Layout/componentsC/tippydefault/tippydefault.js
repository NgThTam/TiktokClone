import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from "./tippydefault.module.scss";

const cx = classNames.bind(styles);

const TippyDefault = ({ content, visible, interactive = false, children }) => {
	const attrTippy = {
		interactive,
	};
	return (
		<Tippy
			visible={visible}
			{...attrTippy}
			render={() => {
				return <div className={cx("warpper-tippy")}>{content}</div>;
			}}
		>
			{children}
		</Tippy>
	);
};

export default TippyDefault;
