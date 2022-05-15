import { useState, useEffect } from "react";
import homeAxios from "../../../adapters";
import { Wrapper } from "./styles";
import ProductCard from "./ProductCard";

export default () => {

    const [products, setProducts] = useState([]);


    useEffect(() => {
        const promise = homeAxios.get('/product?limit=6');
        promise.then(({data}) => setProducts(data));
    },[products]);

    return (
        <>
            <Wrapper>
                {
                    products.length > 0
                    ?products.map(({image,name,value,_id}) => { 
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
        </>
    );
};
