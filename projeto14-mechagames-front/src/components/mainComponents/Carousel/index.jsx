import { useState, useEffect } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

import homeAxios from '../../../adapters';
import { Container, DivContainer, Wrapper } from './styles';
import ProductCard from './ProductCard';
import DotIndicator from './DotIndicator';

export default () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        const promise = homeAxios.get('/product');
        promise.then(({ data }) => setProducts(data));
    }, []);

    const increasePage = () => setPage(page + 1);
    const decreasePage = () => setPage(page - 1);

    const useKeyPress = (targetKey) => {
        const [keyPressed, setKeyPressed] = useState(false);

        const downHandler = ({ key }) => key === targetKey && setKeyPressed(true);

        const upHandler = ({ key }) => key === targetKey && setKeyPressed(false);

        useEffect(() => {
            window.addEventListener('keydown', downHandler);
            window.addEventListener('keyup', upHandler);
        }, []);

        return keyPressed;
    };

    const rightPress = useKeyPress('ArrowRight');
    const leftPress = useKeyPress('ArrowLeft');

    useEffect(() => {
        if (rightPress && page < Math.floor(products.length / 6)) {
            increasePage();
        } else if (leftPress && page > 0) {
            decreasePage();
        }
    }, [rightPress, leftPress]);

    return (
        <DivContainer>
            <Container>
                {
                    page !== 0
                    && <IoIosArrowBack
                        className='arrow-left'
                        onClick={decreasePage}/>
                }
                <Wrapper>
                    {
                        products.length > 0
                            ? products.slice(page * 6, 6 * (page + 1)).map(({
                                image, name, value, _id,
                            }) => (
                                <li key={_id}>
                                    <ProductCard
                                        name={name}
                                        image={image}
                                        value={value}
                                        id={_id}/>
                                </li>
                            ))
                            : ''
                    }
                </Wrapper>
                {
                    page !== Math.floor(products.length / 6)
                    && <IoIosArrowForward
                        className='arrow-right'
                        onClick={increasePage}/>
                }
            </Container>
            <DotIndicator
                position={page}
                setPosition={setPage}
                slides={Array(Math.ceil(products.length / 6)).fill(1)}
                className="dots"/>
        </DivContainer>
    );
};
