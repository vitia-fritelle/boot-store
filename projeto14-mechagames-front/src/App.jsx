import GlobalStyle from './styles/GlobalStyles.jsx';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import ProductPage from './pages/ProductPage';
import {Routes, Route} from 'react-router-dom';

export default () => {
	return (
		<>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<SignIn />} />
				<Route path="sign-up" element={<SignUp />} />
				<Route path="/products/:idProduct" element={<ProductPage />} />
			</Routes>
		</>
	);
};
