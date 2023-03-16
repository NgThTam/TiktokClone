import { createContext, useState } from "react";

const loginContext = createContext();

function Login({ children }) {
	const [isLogin, setLogin] = useState({
		id: "",
		avatar:
			"https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f0f57f45f6caadfe0d721b0c5e232e1c~c5_100x100.jpeg?x-expires=1678359600&x-signature=GHovlFGBACYvd%2BEHYtSHkKzNNdA%3D",
		name: "Nguyen Thanh Tam",
		userName: "ngthanhtam2303",
	});

	return (
		<loginContext.Provider value={[isLogin, setLogin]}>
			{children}
		</loginContext.Provider>
	);
}
export { loginContext };
export default Login;
