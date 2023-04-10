import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HTMLString from "react-html-string";
import {
	faCheckCircle,
	faCommentDots,
	faHeart,
	faMusic,
	faShare,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";

import style from "./uservideo.module.scss";
import ButtonVideo from "../buttonvideo/buttonvideo";

const cx = classNames.bind(style);
function UserVideo({ data }) {
	const dataVideo = data.videoTrend;
	const captionTag = () => {
		let tagA = `<a className="${cx("tag-a")}" href='/'>
				@${dataVideo.tag}
			</a>`;
		let caption = dataVideo.caption.replace("/*/", tagA);
		return caption;
	};

	return (
		<div className={cx("warrper-video")}>
			<div className={cx("inf-user")}>
				<h3>
					{data.nickname}
					{data.tick && (
						<FontAwesomeIcon
							className={cx("icon-check")}
							icon={faCheckCircle}
						/>
					)}
				</h3>
				<h4>{data.name}</h4>
			</div>
			<div className={cx("caption-tag")}>
				<span className={cx("caption")}>
					{dataVideo.caption.includes("/*/") ? (
						<HTMLString html={captionTag()} />
					) : (
						dataVideo.caption
					)}
				</span>
			</div>
			<div className={cx("music")}>
				<FontAwesomeIcon icon={faMusic} />
				<a href='/' target='_blank' className={cx("link-music")}>
					{dataVideo.musicName || "Âm thanh mặc định của video"}
				</a>
			</div>
			<div className={cx("video-detail")}>
				<div className={cx("video-view")}>
					<video className={cx("video")} src={dataVideo.bath} controls />
				</div>
				<div>
					<ButtonVideo iconTop={<FontAwesomeIcon icon={faHeart} />}>
						{dataVideo.like}
					</ButtonVideo>
					<ButtonVideo iconTop={<FontAwesomeIcon icon={faCommentDots} />}>
						{dataVideo.comment}
					</ButtonVideo>
					<ButtonVideo iconTop={<FontAwesomeIcon icon={faShare} />}>
						{dataVideo.share}
					</ButtonVideo>
				</div>
			</div>
		</div>
	);
}

export default UserVideo;
