import {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import pageTypeProductsAxios from '../../adapters';
import Header from '../../components/mainComponents/Header';
import {IoReturnUpBackOutline} from 'react-icons/io5';
import {
	TypeProductPageContainer,
	ProductsContainer,
	ProductContainer,
	ButtonReturn,
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
			<ButtonReturn>
				<IoReturnUpBackOutline
					className="back-button"
					onClick={() => navigate(-1)}
				/>
			</ButtonReturn>
			<TypeProductPageContainer>
				<h2>
					{typeProduct === 'acessórios'
						? 'Acessories & Peripherals'
						: typeProduct}
				</h2>
				<ProductsContainer>
					{dataProducts.map((product) => (
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
					))}
				</ProductsContainer>
			</TypeProductPageContainer>
		</>
	);
};
