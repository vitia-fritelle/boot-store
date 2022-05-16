import { useEffect } from 'react';
import {GiShoppingCart} from 'react-icons/gi';
import { StyledAside, StyledContainer } from './styles';

export default () => {
    
    const obj = {};
    useEffect(() => {
        const storage = JSON.parse(localStorage.getItem("userchart"));
        console.log(storage)
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
    })

    const imprimeLista = () => {
        const lista = [];
        for (item in obj) {
            lista.push(obj[`${item}`])
        }
        return lista;
    }

    return (
        <StyledContainer>
            <StyledAside>
                <figure>
                    <figcaption>Chart</figcaption>
                    <GiShoppingCart/>
                </figure>
                {imprimeLista()}
            </StyledAside>
        </StyledContainer>
    );
};

