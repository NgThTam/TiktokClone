import {
	faMagnifyingGlass,
	faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";

import { useState, useEffect, useRef } from "react";

import Popper from "../poper/popper";
import Account from "../account/account";
import style from "./search.module.scss";

const cx = classNames.bind(style);

function Search() {
	// const [listSearch, setListSearch] = useState([]);
	const [valueInput, setValueInput] = useState("");
	const [show, setShow] = useState(true);
	const inputRef = useRef();

	const handleClear = () => {
		setValueInput("");
		inputRef.current.focus();
	};

	useEffect(() => {
		console.log("asd");
	}, []);

	return (
		<Tippy
			visible={valueInput && show}
			interactive={true}
			onClickOutside={() => {
				setShow(false);
			}}
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
						ref={inputRef}
						onChange={(e) => {
							setValueInput(e.target.value);
						}}
						className={cx("input-search")}
						placeholder='Tìm kiếm tài khoản và video'
						value={valueInput}
						onFocus={() => {
							setShow(true);
						}}
					/>
					{valueInput && (
						<button className={cx("clear")} onClick={handleClear}>
							<FontAwesomeIcon icon={faCircleXmark} />
						</button>
					)}
					<button className={cx("search-btn")}>
						<FontAwesomeIcon icon={faMagnifyingGlass} />
					</button>
				</div>
			</div>
		</Tippy>
	);
}

export default Search;
