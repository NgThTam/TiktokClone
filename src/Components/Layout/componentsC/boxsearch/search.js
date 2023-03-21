import {
	faMagnifyingGlass,
	faCircleXmark,
	faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";

import { useState, useEffect, useRef } from "react";

import Popper from "../poper/popper";
import Account from "../account/account";
import style from "./search.module.scss";
import useCusstate from "./useCusstate/useCusstate";

const cx = classNames.bind(style);

function Search() {
	const [listSearch, setListSearch] = useState([]);
	const [valueInput, setValueInput] = useState("");
	const [show, setShow] = useState(true);
	const [loading, setLoading] = useState(false);
	const inputRef = useRef();

	const valueInputTimeout = useCusstate(valueInput, 500);

	const handleClear = () => {
		setValueInput("");
		inputRef.current.focus();
	};

	useEffect(() => {
		if (!valueInputTimeout.trim()) {
			return;
		}
		setLoading(true);
		fetch(
			`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
				valueInputTimeout
			)}&type=less`
		)
			.then((res) => res.json())
			.then((data) => {
				let dtSearch = data.data;
				setListSearch(dtSearch);
				setLoading(false);
			});
	}, [valueInputTimeout]);

	return (
		//Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
		<div>
			<Tippy
				visible={valueInput && show && listSearch.length > 0}
				interactive={true}
				onClickOutside={() => {
					setShow(false);
				}}
				render={(attrs) => (
					<div className={cx("warpper-popper")} tabIndex='-1' {...attrs}>
						<Popper>
							<div className={cx("title-account-search")}>Tài khoản</div>
							<div className={cx("list-account-search")}>
								{listSearch.map((ac) => (
									<Account key={ac.id} data={ac} />
								))}
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
						{!!valueInput && !loading && (
							<button className={cx("clear")} onClick={handleClear}>
								<FontAwesomeIcon icon={faCircleXmark} />
							</button>
						)}
						{loading && (
							<button className={cx("load")}>
								<FontAwesomeIcon icon={faSpinner} />
							</button>
						)}
						<button
							className={cx("search-btn")}
							onMouseDown={(e) => e.preventDefault()}
						>
							<FontAwesomeIcon icon={faMagnifyingGlass} />
						</button>
					</div>
				</div>
			</Tippy>
		</div>
	);
}

export default Search;
