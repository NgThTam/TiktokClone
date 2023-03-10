import Header from "../Header/Header";
function HeadeOnly({ children }) {
	return (
		<div>
			<Header />
			{children}
		</div>
	);
}

export default HeadeOnly;
