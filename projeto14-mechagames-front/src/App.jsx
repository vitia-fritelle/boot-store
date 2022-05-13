import GlobalStyle from "./styles/GlobalStyles.jsx";
import SignUp from "./pages/SignUp";
import {Routes, Route} from "react-router-dom";

export default () => {
	return (
		<>
			<GlobalStyle />
			<Routes>
				<Route path="sign-up" element={<SignUp />} />
			</Routes>
		</>
	);
};
