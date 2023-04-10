// import classNames from "classnames/bind";

import Itemuservideo from "./componentHome/itemuservideo/itemuservideo";
// import style from "./home.module.scss";
// const cx = classNames.bind(style);

//fake api
const viewVideo = [
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
		videoTrend: {
			id: "test1",
			caption: "Sao trời dạo này nắng nóng thế nhỉii (dance cre: /*/ )",
			tag: "tat_106",
			hagTag: "",
			musicName: "Bật Tình Yêu Lên Remix - CUKAK",
			like: "59.2K",
			comment: "1823",
			share: "1668",
			bath: "/static/media/test.136ea517a290795d8cab.mp4",
		},
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
		videoTrend: {
			id: "test2",
			caption: "Cuộc sống <3 /*/",
			tag: "thanhtm2303",
			hagTag: "",
			musicName: "",
			like: "1232",
			comment: "6",
			share: "2",
			bath: "/static/media/test2.3dfe44d3909029e1ae77.mp4",
		},
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
		videoTrend: {
			id: "test1",
			caption: "Khi bao nhiêu khó khăn ❤️",
			tag: "",
			hagTag: "",
			musicName: "nhạc nền - Tú hyboi ? - 😶‍🌫️",
			like: "23.8K",
			comment: "134",
			share: "33",
			bath: "/static/media/test3.a6c9e67d16d395bd6d92.mp4",
		},
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
		videoTrend: {
			id: "test1",
			caption: "Đi thế này bao giờ cho hết đường Hậu Hoàng",
			tag: "",
			hagTag: "",
			musicName: "nhạc nền - Man Store - Let's Smile",
			like: "128K",
			comment: "1050",
			share: "1838",
			bath: "/static/media/test4.0e8e52798a26cfc3b01b.mp4",
		},
	},
];

function Home() {
	return (
		<div>
			{viewVideo.map((usVideo) => (
				<Itemuservideo key={usVideo.id} data={usVideo} />
			))}
		</div>
	);
}

export default Home;
