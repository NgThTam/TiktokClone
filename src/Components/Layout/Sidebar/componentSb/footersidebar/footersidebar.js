import classNames from "classnames/bind";
import styles from "./footersidebar.module.scss";
const cx = classNames.bind(styles);
function Footersidebar() {
	return (
		<div className={cx("warpper-footer")}>
			<div>
				<a target='_blank' href='/'>
					Giới thiệu
				</a>
				<a target='_blank' href='/'>
					Bảng tin
				</a>
				<a target='_blank' href='/'>
					Liên hệ
				</a>
				<a target='_blank' href='/'>
					Sự nghiệp
				</a>
				<a target='_blank' href='/'>
					Byte Dance
				</a>
			</div>
			<div>
				<a target='_blank' href='/'>
					Tiktok for Good
				</a>
				<a target='_blank' href='/'>
					Quảng cáo
				</a>
				<a target='_blank' href='/'>
					Developers
				</a>
				<a target='_blank' href='/'>
					Minh bạch
				</a>
				<a target='_blank' href='/'>
					Tiktok Rewards
				</a>
				<a target='_blank' href='/'>
					Tiktok Browse
				</a>
				<a target='_blank' href='/'>
					Tiktok Embeds
				</a>
			</div>
			<div>
				<a target='_blank' href='/'>
					Trợ giúp
				</a>
				<a target='_blank' href='/'>
					An toàn
				</a>
				<a target='_blank' href='/'>
					Điều khoản
				</a>
				<a target='_blank' href='/'>
					Quyền riêng tư
				</a>
				<a target='_blank' href='/'>
					Cổng thông tin Tác giả
				</a>
				<a target='_blank' href='/'>
					Hướng dẫn Cộng đồng
				</a>
			</div>
			<div>Thêm</div>
			<span>© 2023 Tiktok</span>
		</div>
	);
}

export default Footersidebar;
