// import Tippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
// import classNames from "classnames/bind";
// import styles from "./tippydefault.module.scss";

// const cx = classNames.bind(styles);

const TippyDefault = ({ content, visible, interactive = false, children }) => {
	const attrTippy = {
		interactive,
	};
	return (
		<div>
			<Tippy visible={visible} {...attrTippy} content={content}>
				{children}
			</Tippy>
		</div>
	);
};

export default TippyDefault;
