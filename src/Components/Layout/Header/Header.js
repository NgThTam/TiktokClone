import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import { useContext, useMemo } from "react";
import { loginContext } from "../../Userlogin/login";
import style from "./header.module.scss";
import Button from "../componentsC/button/button";
import Image from "../componentsC/iconmini/imagelogo";
import Menu from "./menu/menu";
import Search from "../componentsC/boxsearch/search";
// import Logout from "./logout/logout";
import { useEffect } from "react";

const cx = classNames.bind(style);

function Header() {
	const [isLogin, setLogin] = useContext(loginContext);
	const { handleLogin } = useMemo(() => {
		const handleLogin = () => {
			setLogin((prev) => {
				return { ...prev, id: "oke" };
			});
		};
		const handleLogout = () => {
			setLogin((prev) => {
				return { ...prev, id: "" };
			});
		};
		return { handleLogin, handleLogout };
	}, [setLogin]);
	useEffect(() => {
		// console.log(isLogin);
	}, [isLogin]);
	return (
		<div className={cx("warpper")}>
			<header className={cx("header")}>
				<div className={cx("logo-container")}>
					<Link to={"/"}>
						<img
							width={118}
							height={35}
							src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/1200px-TikTok_logo.svg.png'
							alt='tiktok'
						></img>
					</Link>
				</div>
				<Search />
				<div className={cx("login-container")}>
					<Button solid leftIcon={<FontAwesomeIcon icon={faPlus} />}>
						Tải lên
					</Button>
					{!!isLogin.id === false && (
						<Button primary onClick={handleLogin}>
							Đăng nhập
						</Button>
					)}
					<Image />
					<Menu />
				</div>
			</header>
		</div>
	);
}

export default Header;
