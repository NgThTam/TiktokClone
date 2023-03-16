import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./menuitem.module.scss";
import Button from "../../../componentsC/button/button";
import { useRef, useState } from "react";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function MenuItem({ children, reset, items = [] }) {
	const inpRef = useRef();
	const [checkedd, setChecked] = useState(false);
	const [rdata, setdata] = useState([{ data: items }]);
	const dataItems = rdata[rdata.length - 1];
	reset.current = {
		resetTippy() {
			setdata((prev) => prev.slice(0, 1));
		},
	};
	const handleChange = (e) => {
		setChecked(e.target.checked);
	};
	const setColor = () => {
		return checkedd ? "dark" : "";
	};

	const toggleOF = () => {
		return (
			<span className={cx("icon-toggle")}>
				<label className={cx("switch")}>
					<input
						onChange={handleChange}
						ref={inpRef}
						className={cx("input")}
						type='checkbox'
					/>
					<span className={cx("slider", "round")}></span>
				</label>
			</span>
		);
	};

	const handleLanguage = (children) => {
		setdata((prev) => [...prev, children]);
	};
	const handleOnback = () => {
		setdata((prev) => prev.slice(0, prev.length - 1));
	};

	return (
		<div className={cx("warpper-menuitem", setColor())}>
			{rdata.length > 1 && (
				<Button
					leftIcon={<FontAwesomeIcon icon={faAngleLeft} />}
					className={cx("btn-menu-lv2")}
					classIcon={cx("title-menu-lv2")}
					onBack={handleOnback}
				>
					{dataItems.title}
				</Button>
			)}
			{dataItems.data.map((item, index) => {
				const ckeckToggle = !!item.toggle;
				return (
					<Button
						to={item.to}
						key={index}
						leftIcon={item.icon}
						className={cx("btn-menu-item", setColor())}
						classIcon={cx("icon-menu-item")}
						onClick={() => {
							item.children && handleLanguage(item.children);
						}}
					>
						{ckeckToggle && checkedd ? item.toggle.ttitle : item.title}
						{ckeckToggle && toggleOF()}
					</Button>
				);
			})}
		</div>
	);
}
export default MenuItem;
