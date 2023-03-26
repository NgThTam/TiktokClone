import classNames from "classnames/bind";
import { useContext } from "react";

import Acsidebar from "../acsidebar/acsidebar";
import style from "./bodysidebar.module.scss";
import { loginContext } from "../../../../Userlogin/login";

const cx = classNames.bind(style);

const dataFakes = [
	{
		id: "test1",
		avatar:
			"https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/12158f6b99ba215d518c09ab61f18cdd~c5_100x100.jpeg?x-expires=1679994000&x-signature=fnzacF5pXCO2LGJmTl%2FG02zUp9Q%3D",
		nickname: "vietphuongthoa98",
		name: "Việt Phương Thoa",
		tick: true,
		follow: "12.4M",
		like: "499.8M",
		isFollow: false,
	},
	{
		id: "test2",
		avatar:
			"https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1679994000&x-signature=IV82XiNQyN7MCSfltsaZ8zZ36os%3D",
		nickname: "theanh28entertainment",
		name: "Theanh28 Entertainment",
		tick: true,
		follow: "8.8M",
		like: "714M",
		isFollow: false,
	},
	{
		id: "test3",
		avatar:
			"https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/39911deb09b62b80810dec42c0722bbd~c5_100x100.jpeg?x-expires=1680001200&x-signature=bzzJiqPJTxh2bDAP4llHQ9RbKCs%3D",
		nickname: "annhien_boiboi",
		name: "AnNhiên ❤️ BốiBối",
		tick: true,
		follow: "10.3M",
		like: "257.2M",
		isFollow: false,
	},
	{
		id: "test4",
		avatar:
			"https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/c0e5acb353efad347ae0ba5a87574f1d~c5_100x100.jpeg?x-expires=1679997600&x-signature=QoJCUlhfsw3aQiyvsg7cboVKbCU%3D",
		nickname: "tiin.vn",
		name: "Tiin.vn",
		tick: true,
		follow: "8.3M",
		like: "516.5M",
		isFollow: false,
	},
	{
		id: "test5",
		avatar:
			"https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/0ba6c8ba9eed06771b9ab7bfb5df5389~c5_100x100.jpeg?x-expires=1680001200&x-signature=su7i7KxIU0RTveb%2BPDLv71heYI8%3D",
		nickname: "vnnn.official",
		name: "VN NGÀY NAY",
		tick: false,
		follow: "5.1M",
		like: "182.3M",
		isFollow: false,
	},
	{
		id: "test6",
		avatar:
			"https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/219e56290d96b5c4dae4c7750fb94a5b~c5_100x100.jpeg?x-expires=1680001200&x-signature=pBFV1Ro3dtPPj%2BbXVOvDLuQlO0g%3D",
		nickname: "cciinnn",
		name: "CiiN",
		tick: true,
		follow: "10.3M",
		like: "263.6M",
		isFollow: false,
	},
	{
		id: "test7",
		avatar:
			"https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/7e9a4ea18f8eb9bd5d4cb8a99e3d7fc7~c5_100x100.jpeg?x-expires=1680001200&x-signature=hLj5d%2BrJXAi7GebNUGgSV3d%2BbWU%3D",
		nickname: "luongthingocha",
		name: "𝐍𝐠𝐚̂𝐧 𝐇𝐚̀ 🍌",
		tick: false,
		follow: "6.6M",
		like: "248.7M",
		isFollow: false,
	},
];
const dataFollow = [
	{
		id: "fl1",
		avatar:
			"https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/5d22181bd96466486253746cb91cad92~c5_100x100.jpeg?x-expires=1680015600&x-signature=DyPBFidizekOBj7Ns4A0H7HL2B0%3D",
		nickname: "ctudhct",
		name: "Trường Đại học Cần Thơ",
		tick: true,
		follow: "12.4M",
		like: "499.8M",
		isFollow: true,
	},
	{
		id: "fl2",
		avatar:
			"https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/3cd08cc22d419bbb95cb27da20099b42.jpeg?x-expires=1680015600&x-signature=iU0fQ0NR7CZ6AF2mi0LFPZej%2BuY%3D",
		nickname: "almonghut",
		name: "Lâm Ống Húc",
		tick: false,
		follow: "12.4M",
		like: "499.8M",
		isFollow: true,
	},
	{
		id: "fl3",
		avatar:
			"https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/936d26da8bd21c84067d0d48c99f39db~c5_100x100.jpeg?x-expires=1680015600&x-signature=NbicwzpSN5NUkBqdEJQ4oN57zUw%3D",
		nickname: "dklmh23",
		name: "faptvmoves",
		tick: false,
		follow: "12.4M",
		like: "499.8M",
		isFollow: true,
	},
	{
		id: "fl4",
		avatar:
			"https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/c69fdb46d76dc468df7a3c00e114e328.jpeg?x-expires=1680015600&x-signature=u%2BjN6RBbfnq%2BTSpB0T1ZCb44Rc8%3D",
		nickname: "tblyduc2412",
		name: "Lý Đức",
		tick: false,
		follow: "12.4M",
		like: "499.8M",
		isFollow: true,
	},
	{
		id: "fl5",
		avatar:
			"https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/7c211c8947d98a349c2d4c5d498b18b0~c5_100x100.jpeg?x-expires=1680015600&x-signature=aFWswJtfFN5zkwg1pWpqEIRCpb0%3D",
		nickname: "user66362463",
		name: "Nhã Nè",
		tick: false,
		follow: "12.4M",
		like: "499.8M",
		isFollow: true,
	},
	{
		id: "fl6",
		avatar:
			"https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/9447b60008a7c570ccb3982d16dfe6e3~c5_100x100.jpeg?x-expires=1680015600&x-signature=8mXouiBEjsvVPHMlr3X8akZ%2BUFA%3D",
		nickname: "truongthanhphu1",
		name: "Trương Thanh Phú",
		tick: true,
		follow: "12.4M",
		like: "499.8M",
		isFollow: true,
	},
];

function Bodysidebar() {
	const [isLogin] = useContext(loginContext);

	return (
		<div className={cx("warpper-body")}>
			<Acsidebar title='Tài khoản được đề xuất' datas={dataFakes} />
			{isLogin.id && (
				<Acsidebar title='Các tài khoản đang follow' datas={dataFollow} />
			)}
		</div>
	);
}

export default Bodysidebar;
