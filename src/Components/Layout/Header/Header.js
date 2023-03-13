import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMagnifyingGlass,
	faCircleXmark,
	faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import { Link } from "react-router-dom";
import style from "./header.module.scss";
import Popper from "../componentsC/poper/popper";
import Account from "../componentsC/account/account";
import Button from "../componentsC/button/button";
import Image from "../componentsC/iconmini/imagelogo";
import Menu from "./menu/menu";
// import { useEffect } from "react";

const cx = classNames.bind(style);

function Header() {
	// useEffect(() => {
	// 	console.log(typeof Tippy);
	// });
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
				<Tippy
					// visible={true}
					interactive={true}
					render={(attrs) => (
						<div className={cx("warpper-popper")} tabIndex='-1' {...attrs}>
							<Popper>
								<div className={cx("title-account-search")}>Tài khoản</div>
								<div className={cx("list-account-search")}>
									<Account />
									<Account />
								</div>
							</Popper>
						</div>
					)}
				>
					<div className={cx("container-search")}>
						<div className={cx("form-search")}>
							<input
								className={cx("input-search")}
								placeholder='Tìm kiếm tài khoản và video'
							/>
							<button className={cx("clear")}>
								<FontAwesomeIcon icon={faCircleXmark} />
							</button>
							<button className={cx("search-btn")}>
								<FontAwesomeIcon icon={faMagnifyingGlass} />
							</button>
						</div>
					</div>
				</Tippy>
				<div className={cx("login-container")}>
					<Button solid leftIcon={<FontAwesomeIcon icon={faPlus} />}>
						Tải lên
					</Button>
					<Button primary>Đăng nhập</Button>
					<Image />
					<Menu />
				</div>
			</header>
		</div>
	);
}

export default Header;
