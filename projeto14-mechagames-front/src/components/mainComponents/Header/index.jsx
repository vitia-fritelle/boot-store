import {useNavigate} from "react-router-dom";
import {StyledHeader, HeaderButton} from "./styles.jsx";
import {BiSearch} from 'react-icons/bi';
import {GiShoppingCart} from 'react-icons/gi';
import MechaGamesLogo from '../../../assets/images/mecha-games-logo.svg';
import Controllers from '../../../assets/images/controllers.svg';

export default () => {
    const navigate = useNavigate();
    return (
        <StyledHeader>
            <div className="brand">
                <img
                    className="logo"
                    src={MechaGamesLogo}
                    alt="mecha-games-logo"
                />
                <h3>MECHA GAMES</h3>
            </div>
            <div className="icons-header">
                <BiSearch className="magnifying-glass"/>
                <GiShoppingCart className="cart"/>
                <HeaderButton onClick={() => navigate('/sign-in')}>
                    login
                </HeaderButton>
            </div>
            <img className="fixed_image" src={Controllers} alt="controllers" />
        </StyledHeader>
    );
}