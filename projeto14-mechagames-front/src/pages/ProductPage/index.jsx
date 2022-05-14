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

	return (
		<>
			<Header />
			<ProductPageContainer>
				<ProductInfoContainer>
					<img src={productData.image} alt="Product" />
					<h1>{productData.name}</h1>
					<p>R${parseFloat(productData.value).toFixed(2)}</p>
					<button>Adicionar ao carrinho</button>
				</ProductInfoContainer>
				<ProductDescriptionContainer>
					<h2>Descrição do Produto</h2>
					<p>{productData.description}</p>
				</ProductDescriptionContainer>
			</ProductPageContainer>
		</>
	);
};
