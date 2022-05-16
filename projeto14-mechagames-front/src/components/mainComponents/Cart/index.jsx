import { useContext, useEffect , useState } from 'react';
import {GiShoppingCart} from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import { StyledAside, StyledContainer, StyledList, CartButton } from './styles';
import cartAxios from '../../../adapters';
import userContext from '../../../contexts/userContext';

export default ({setFlag}) => {
    
    const [objeto, setObjeto] = useState({})
    const [buttonFlag, setButtonFlag] = useState(true);
    const {token} = useContext(userContext);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const obj = {};
            try {
                let {products: storage} = await JSON.parse(localStorage.getItem("usercart"));
                for (const item of storage) {
                    const {name, image, value, _id} = item;
                    if(obj[`${_id}`]) {
                        obj[`${_id}`].quantity++;
                    } else {
                        obj[`${_id}`] = {
                            name,
                            image,
                            value,
                            quantity: 1
                        };
                    }
                }
                for (const item in obj) {
                    obj[`${item}`].quantity = obj[`${item}`].quantity.toString();
                }
                setObjeto(obj);
                await cartAxios.put(
                    '/cart',
                    {products: obj},
                    {headers:{Authorization: `Bearer ${token}`}}
                );
            } catch (e) {
                if(e instanceof TypeError) {
                    setButtonFlag(false)
                }
            }
        })();
    },[]);

    const imprimeLista = () => {
        const lista = [];
        for (const item in objeto) {
            lista.push(objeto[`${item}`])
        }
        return lista;
    };

    return (
        <StyledContainer>
            <div onClick={() => setFlag(false)}/>
            <StyledAside>
                <figure>
                    <figcaption>Chart</figcaption>
                    <GiShoppingCart className='cart'/>
                </figure>
                <StyledList>
                    {imprimeLista().map(({name,image,value,quantity}) => {
                        return (
                            <li key={name}>
                                <Item
                                    name={name}
                                    image={image}
                                    value={value}
                                    quantity={quantity}
                                />
                            </li>
                        );
                    })}
                </StyledList>
                {buttonFlag && token && <CartButton onClick={() => navigate('/checkout')}>Checkout</CartButton>}
            </StyledAside>
        </StyledContainer>
    );
};

const Item = ({name, image, value, quantity}) => {
    return (
        <>
            <p>{quantity}x {name}</p>
            <p>{(parseFloat(value)*parseInt(quantity,10)).toFixed(2)}</p>
        </>
    );
}
