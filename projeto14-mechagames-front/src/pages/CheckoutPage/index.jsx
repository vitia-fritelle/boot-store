import {useState, useEffect, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import userContext from '../../contexts/userContext';
import Header from '../../components/mainComponents/Header';
import CheckoutAxios from '../../adapters';
import {
	CheckoutContainer,
	HeaderCheckout,
	ProductsContainerCheckout,
} from './styles';
import ProductCheckout from '../../components/mainComponents/ProductCheckout';

export default () => {

	const navigate = useNavigate();
	const {token} = useContext(userContext);
	const [total, setTotal] = useState(0);
	const [products, setProducts] = useState({});

	const totalCalculator = () => {
		let total = 0;
		for (const product in products) {
			total +=
				parseInt(products[`${product}`].value) *
				parseInt(products[`${product}`].quantity);
		}
		setTotal(total);
	};

	const productsCart = () => {
		const URL = '/cart';
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};

		CheckoutAxios.get(URL, config)
			.then(({data}) => {
				setProducts(data.products);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const purchasesCart = () => {
		const URL = '/checkout';
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};

		const body = {
			products
		}

		console.log(body)

		CheckoutAxios.post(URL, body, config)
			.then((response) => {
				navigate('/');
				localStorage.removeItem('usercart');
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const printaProdutos = () => {
		const lista = [];
		for (const product in products) {
			lista.push(
				<ProductCheckout
					key={products[`${product}`].name}
					image={products[`${product}`].image}
					name={products[`${product}`].name}
					value={products[`${product}`].value}
					quantity={products[`${product}`].quantity}
					setProducts={setProducts}
					products={products}
					identifier={product}
				/>
			);
		}
		return lista;
	};

	useEffect(() => {
		totalCalculator(); 
	}, [products]);
	useEffect(() => {
		productsCart();
	}, []);

	return (
		<>
			<Header />
			<CheckoutContainer>
				<HeaderCheckout>
					<p className="product">Product</p>
					<p className="name">Name</p>
					<p className="value">Value</p>
					<p className="qtd">Qtd</p>
				</HeaderCheckout>
				<ProductsContainerCheckout>
					{printaProdutos()}
				</ProductsContainerCheckout>
				<div className="checkout_position">
					<div className="confirm_checkout">
						<h2>
							TOTAL: <span>R${total}</span>
						</h2>
						<button onClick={purchasesCart}>Confirmar Compra</button>
					</div>
				</div>
			</CheckoutContainer>
		</>
	);
};
