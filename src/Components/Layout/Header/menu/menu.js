import {
	faCircleQuestion,
	faEarthAmericas,
	faEllipsisVertical,
	faKeyboard,
	faMoon,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./menu.module.scss";
import Popper from "../../componentsC/poper/popper";
import MenuItem from "./menuitem/menuitem";

const cx = classNames.bind(styles);

const dataMenu = [
	{
		icon: <FontAwesomeIcon icon={faEarthAmericas} />,
		title: "Tiếng Việt",
		children: {
			title: "Ngôn ngữ",
			data: [
				{
					code: "vi",
					title: "Tiếng Việt (VN)",
				},
				{
					code: "en",
					title: "Tiếng Anh (Eng)",
				},
			],
		},
	},
	{
		icon: <FontAwesomeIcon icon={faCircleQuestion} />,
		title: "Phản hồi và trợ giúp",
		to: "/following",
	},
	{
		icon: <FontAwesomeIcon icon={faKeyboard} />,
		title: "Phím tắt và trợ phím",
	},
	{
		icon: <FontAwesomeIcon icon={faMoon} />,
		title: "Chế độ tối",
		toggle: {
			ttitle: "Chế độ sáng",
		},
	},
];

function Menu() {
	return (
		<Tippy
			// visible
			interactive={true}
			placement='bottom-end'
			render={(attrs) => (
				<div className={cx("warpper-menu")} tabIndex='-1' {...attrs}>
					<Popper>
						<MenuItem items={dataMenu} />
					</Popper>
				</div>
			)}
		>
			<div className={cx("warpper")}>
				<FontAwesomeIcon icon={faEllipsisVertical} />
			</div>
		</Tippy>
	);
}
export default Menu;
