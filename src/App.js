import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routers";
import DefaultLayout from "./Components/Layout/DefaultLayout";

function App() {
	return (
		<Router>
			<div className='App'>
				<Routes>
					{publicRoutes.map((route, index) => {
						let Layout = DefaultLayout;
						const Compon = route.component;
						if (route.layout) {
							Layout = route.layout;
						} else if (route.layout === null) {
							Layout = Fragment;
						}

						return (
							<Route
								key={index}
								path={route.path}
								element={
									<Layout>
										<Compon />
									</Layout>
								}
							/>
						);
					})}
				</Routes>
			</div>
		</Router>
	);
}

export default App;
