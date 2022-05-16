import { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyles.jsx';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import ProductPage from './pages/ProductPage';
import TypeProductPage from './pages/ProductTypePage';
import Home from './pages/Home';
import CheckoutPage from './pages/CheckoutPage';
import UserContext from './contexts/userContext';

export default () => {
    const [token, setToken] = useState('');
    return (
        <UserContext.Provider value={{ token, setToken }}>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/sign-in"
                    element={<SignIn setToken={setToken} />}
                />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/product/:idProduct" element={<ProductPage />} />
                <Route
                    path="/products/:typeProduct"
                    element={<TypeProductPage />}
                />
                <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
        </UserContext.Provider>
    );
};
