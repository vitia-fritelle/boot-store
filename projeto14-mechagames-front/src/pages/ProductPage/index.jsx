import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import pageProductsAxios from '../../adapters';
import Header from '../../components/mainComponents/Header';
import {
    ProductPageContainer,
    ProductInfoContainer,
    ProductDescriptionContainer,
} from './styles';

export default () => {
    const {idProduct} = useParams();
    const [productData, setProductData] = useState({});

    const pageProduct = () => {
        const URL = `/product/${idProduct}`;

        pageProductsAxios
            .get(URL)
            .then(({data}) => {
                setProductData(data);
            })
            .catch((err) => {
                console.log({
                    message: 'Page product error!',
                    err,
                });
            });
    };

    useEffect(() => {
        pageProduct();
    }, []);

    const addToCart = () => {
        const cart = JSON.parse(localStorage.getItem('usercart'));
        const newProductCart = {
            _id: productData._id,
            image: productData.image,
            name: productData.name,
            value: productData.value,
            quantity: '1',
        };
        if (cart) {
            cart.products.push(newProductCart);
            localStorage.setItem('usercart', JSON.stringify(cart));
        } else {
            localStorage.setItem(
                'usercart',
                JSON.stringify({products: [newProductCart]})
            );
        }
    };

    return (
        <>
            <Header />
            <ProductPageContainer>
                <ProductInfoContainer>
                    <img src={productData.image} alt="Product" />
                    <h1>{productData.name}</h1>
                    <p>R${parseFloat(productData.value).toFixed(2)}</p>
                    <button onClick={() => addToCart()}>Add to cart</button>
                </ProductInfoContainer>
                <ProductDescriptionContainer>
                    <h2>Product Description</h2>
                    <p>{productData.description}</p>
                </ProductDescriptionContainer>
            </ProductPageContainer>
        </>
    );
};
