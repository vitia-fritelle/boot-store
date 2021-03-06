import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../contexts/userContext';
import Header from '../../components/mainComponents/Header';
import Carousel from '../../components/mainComponents/Carousel';
import {
    Main, List, Nav, Li, Title, Subtitle,
} from './styles.jsx';
import Games from '../../assets/images/games.svg';
import Accessories from '../../assets/images/accessories.svg';
import Consoles from '../../assets/images/consoles.svg';

export default () => {
    const {token, setToken} = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(!token) {
            setToken(localStorage.getItem('user'))
        }
    },[]);
    return (
        <>
            <Header />
            <Title>Checkout the Store</Title>
            <Subtitle>NEW ON THE BOARD</Subtitle>
            <Main>
                <Carousel />
            </Main>
            <Nav>
                <p>
					Choose based on <span>Categories</span>
                </p>
                <List>
                    <Li onClick={() => navigate('/products/consoles')}>
                        <figure>
                            <img src={Consoles} alt="Consoles" />
                            <figcaption>Consoles</figcaption>
                        </figure>
                    </Li>
                    <Li onClick={() => navigate('/products/acessórios')}>
                        <figure>
                            <img src={Accessories} alt="Accessories" />
                            <figcaption>Accessories & Peripherals</figcaption>
                        </figure>
                    </Li>
                    <Li onClick={() => navigate('/products/games')}>
                        <figure>
                            <img src={Games} alt="Games" />
                            <figcaption>Games</figcaption>
                        </figure>
                    </Li>
                </List>
            </Nav>
        </>
    );
};
