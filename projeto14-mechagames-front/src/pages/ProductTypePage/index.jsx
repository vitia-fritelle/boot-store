import {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import pageTypeProductsAxios from '../../adapters';
import Header from '../../components/mainComponents/Header';
import ProductImage from '../../assets/images/product-image.svg';
import {
	TypeProductPageContainer,
	ProductsContainer,
	ProductContainer,
} from './styles';

export default () => {
	const {typeProduct} = useParams();
	const [dataProducts, setDataProducts] = useState([]);
	const navigate = useNavigate();

	const typeProductPage = () => {
		const URL = `/product?type=${typeProduct}`;

		pageTypeProductsAxios
			.get(URL)
			.then(({data}) => {
				setDataProducts(data);
			})
			.catch((err) => {
				console.log({
					message: 'Page type product error!',
					err,
				});
			});
	};

	useEffect(() => {
		typeProductPage();
	}, []);

	return (
		<>
			<Header />
			<TypeProductPageContainer>
				<h2>
					{typeProduct === 'acessórios'
						? 'Acessórios & Periférios'
						: typeProduct}
				</h2>
				<ProductsContainer>
					{dataProducts.map((product) => {
						return (
							<ProductContainer key={product._id}>
								<img
									src={product.image}
									alt="product-image"
									onClick={() =>
										navigate(`/product/${product._id}`)
									}
								/>
								<h1>{product.name}</h1>
								<p>R${parseFloat(product.value).toFixed(2)}</p>
							</ProductContainer>
						);
					})}
				</ProductsContainer>
			</TypeProductPageContainer>
		</>
	);
};
