import ProductImage from '../../../assets/images/product-image.svg';
import {ProductCheckoutContainer} from './styles';
import {useState} from 'react';

export default () => {
	const [inputValue, setInputValue] = useState(0);

	function handlePlus() {
		setInputValue((prevState) => prevState + 1);
	}
	function handleMinus() {
		setInputValue((prevState) => prevState - 1);
		if (inputValue <= 0) {
			setInputValue(0);
		}
	}

	console.log(inputValue);
	return (
		<>
			<ProductCheckoutContainer>
				<img src={ProductImage} alt="product-image" />
				<h1>God of War Collector's Edition</h1>
				<p>R$ 100,00</p>
				<div className="input-checkout">
					<button className="button-minus" onClick={handleMinus}>
						-
					</button>
					<input
						type="text"
						value={inputValue.toString()}
						onChange={(e) => {
							if (e.target.value === '') {
								setInputValue(0);
							} else {
								setInputValue(parseInt(e.target.value));
							}
						}}
					/>
					<button className="button-plus" onClick={handlePlus}>
						+
					</button>
				</div>
			</ProductCheckoutContainer>
		</>
	);
};
