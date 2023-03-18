import { useState } from "react";
function CusImage({ className, src, alt = "avatar", ...props }) {
	const [urlimage, setUrlImage] = useState("");
	let url =
		"https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f0f57f45f6caadfe0d721b0c5e232e1c~c5_100x100.jpeg?x-expires=1678359600&x-signature=GHovlFGBACYvd%2BEHYtSHkKzNNdA%3D";

	const handlError = () => {
		setUrlImage(url);
	};

	return (
		<img
			className={className}
			src={urlimage || src}
			alt={alt}
			{...props}
			onError={handlError}
		/>
	);
}

export default CusImage;
