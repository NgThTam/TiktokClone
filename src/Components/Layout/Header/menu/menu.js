import {
	faCircleQuestion,
	faEarthAmericas,
	faEllipsisVertical,
	faKeyboard,
	faMoon,
	faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useRef, useContext } from "react";
import { loginContext } from "../../../Userlogin/login";
import styles from "./menu.module.scss";
import Popper from "../../componentsC/poper/popper";
import MenuItem from "./menuitem/menuitem";
import CusImage from "../../componentsC/cusimage/cusimage";

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
				{
					code: "vi",
					title: "Tiếng Việt (VN)",
				},
				{
					code: "en",
					title: "Tiếng Anh (Eng)",
				},
				{
					code: "vi",
					title: "Tiếng Việt (VN)",
				},
				{
					code: "en",
					title: "Tiếng Anh (Eng)",
				},
				{
					code: "vi",
					title: "Tiếng Việt (VN)",
				},
				{
					code: "en",
					title: "Tiếng Anh (Eng)",
				},
				{
					code: "vi",
					title: "Tiếng Việt (VN)",
				},
				{
					code: "en",
					title: "Tiếng Anh (Eng)",
				},
				{
					code: "vi",
					title: "Tiếng Việt (VN)",
				},
				{
					code: "en",
					title: "Tiếng Anh (Eng)",
				},
				{
					code: "vi",
					title: "Tiếng Việt (VN)",
				},
				{
					code: "en",
					title: "Tiếng Anh (Eng)",
				},
				{
					code: "vi",
					title: "Tiếng Việt (VN)",
				},
				{
					code: "en",
					title: "Tiếng Anh (Eng)",
				},
				{
					code: "vi",
					title: "Tiếng Việt (VN)",
				},
				{
					code: "en",
					title: "Tiếng Anh (Eng)",
				},
				{
					code: "vi",
					title: "Tiếng Việt (VN)",
				},
				{
					code: "en",
					title: "Tiếng Anh (Eng)",
				},
				{
					code: "vi",
					title: "Tiếng Việt (VN)",
				},
				{
					code: "en",
					title: "Tiếng Anh (Eng)",
				},
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
const dataMenuIsLogin = [
	...dataMenu,
	{
		icon: <FontAwesomeIcon icon={faRightFromBracket} />,
		title: "Đăng xuất",
	},
];

function Menu({ props, logOut }) {
	const resetT = useRef();
	const [isLogin] = useContext(loginContext);
	const data = isLogin.id ? dataMenuIsLogin : dataMenu;

	// useEffect(() => {
	// 	console.log(data);
	// }, [data]);

	return (
		//Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
		<div>
			<Tippy
				// visible={true}
				onHide={() => {
					resetT.current.resetTippy();
				}}
				delay={[null, 200]}
				interactive={true}
				placement='bottom-end'
				render={(attrs) => (
					<div
						className={cx("warpper-menu", !!isLogin.id && "warpper-menu-login")}
						tabIndex='-1'
						{...attrs}
					>
						<Popper>
							<MenuItem reset={resetT} items={data} logOut={logOut} />
						</Popper>
					</div>
				)}
			>
				{!!isLogin.id ? (
					<div className={cx("warpper-avatar")}>
						<CusImage src={isLogin.avatar} alt='avatar' />
					</div>
				) : (
					<div className={cx("warpper")}>
						<FontAwesomeIcon icon={faEllipsisVertical} />
					</div>
				)}
			</Tippy>
		</div>
	);
}
export default Menu;
