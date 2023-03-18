import { useEffect, useState } from "react";

function useCusstate(value, time) {
	const [state, setState] = useState(value);
	useEffect(() => {
		const timeId = setTimeout(() => {
			setState(value);
		}, time);

		return () => {
			clearTimeout(timeId);
		};
		// eslint-disable-next-line
	}, [value]);

	return state;
}

export default useCusstate;
