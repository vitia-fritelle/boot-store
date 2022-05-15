import {useState, useEffect} from "react";
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io';
import homeAxios from "../../../adapters";
import {Container, Wrapper} from "./styles";
import ProductCard from "./ProductCard";

export default () => {

    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        const promise = homeAxios.get('/product');
        promise.then(({data}) => setProducts(data));
    },[]);

    const increasePage = () => setPage(page+1);
    const decreasePage = () => setPage(page-1);

    return (
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
                    ?products.slice(page*6,6*(page+1)).map(({image,name,value,_id}) => { 
                        return(
                            <li key={_id}>
                                <ProductCard
                                    name={name}
                                    image={image}
                                    value={value}
                                    id={_id}/>
                            </li>
                        );
                    })
                    :''
                }
            </Wrapper>
            {
                page !== Math.floor(products.length/6) 
                && <IoIosArrowForward 
                        className='arrow-right' 
                        onClick={increasePage}/>
            }
        </Container>
    );
};