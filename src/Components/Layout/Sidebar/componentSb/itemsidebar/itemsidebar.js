import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import Tippy from "@tippyjs/react/headless";

import CusImage from "../../../componentsC/cusimage/cusimage";
import Popper from "../../../componentsC/poper/popper";
import Button from "../../../componentsC/button/button";
import style from "./itemsidebar.module.scss";
const cx = classNames.bind(style);

function Itemsidebar({ data }) {
	useEffect(() => {
		// console.log(data.isFollow);
	}, [data]);
	return (
		<div>
			<Tippy
				interactive
				delay={[500, 0]}
				placement='bottom-start'
				render={(attrs) =>
					data.isFollow ? undefined : (
						<div className={cx("warpper-tip")} tabIndex='-1' {...attrs}>
							<Popper>
								<div className={cx("body-tip")}>
									<div className={cx("header-tippy-item")}>
										<CusImage
											className={cx("avatar-tippy-item")}
											src={data.avatar}
										/>
										<Button primary className={cx("bnt-follow")}>
											Follow
										</Button>
									</div>
									<a target='_blank' href='/asd'>
										<span className={cx("user-nickname")}>{data.nickname}</span>
										<span>
											{data.tick && (
												<FontAwesomeIcon
													className={cx("check-item")}
													icon={faCheckCircle}
												/>
											)}
										</span>
									</a>
									<br></br>
									<a target='_blank' href='/asd' className={cx("user-name")}>
										{data.name}
									</a>
									<p className={cx("user-view")}>
										<span className={cx("value-view")}>{data.follow}</span>
										<span className={cx("name-view")}>Follower</span>
										<span className={cx("value-view")}>{data.like}</span>
										<span className={cx("name-view")}>Thích</span>
									</p>
								</div>
							</Popper>
						</div>
					)
				}
			>
				<div className={cx("warpper-item")}>
					<CusImage className={cx("avatar-item")} src={data.avatar} />
					<div className={cx("info-item")}>
						<p>
							<span className={cx("nickname-item")}>{data.nickname}</span>
							<span>
								{data.tick && (
									<FontAwesomeIcon
										className={cx("check-item")}
										icon={faCheckCircle}
									/>
								)}
							</span>
						</p>
						<p className={cx("name-item")}>{data.name}</p>
					</div>
				</div>
			</Tippy>
		</div>
	);
}

export default Itemsidebar;
