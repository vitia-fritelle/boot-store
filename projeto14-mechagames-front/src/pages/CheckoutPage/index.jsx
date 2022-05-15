import Header from '../../components/mainComponents/Header';
import {
	CheckoutContainer,
	HeaderCheckout,
	ProductsContainerCheckout,
} from './styles';
import ProductCheckout from '../../components/mainComponents/ProductCheckout';

export default () => {
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
					<ProductCheckout />
					<ProductCheckout />
					<ProductCheckout />
					<ProductCheckout />
				</ProductsContainerCheckout>
				<div className="checkout_position">
					<div className="confirm_checkout">
						<h2>
							TOTAL: <span>R$1299.99</span>
						</h2>
						<button>Confirmar Compra</button>
					</div>
				</div>
			</CheckoutContainer>
		</>
	);
};
