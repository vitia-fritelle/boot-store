import ProductImage from '../../../assets/images/product-image.svg';
import {ProductCheckoutContainer} from './styles';
import {useState, useEffect} from 'react';

export default ({name, image, value, products, setProducts, identifier}) => {
	const [inputValue, setInputValue] = useState(1);

	function handlePlus() {
		setInputValue((prevState) => prevState + 1);
	}
	function handleMinus() {
		setInputValue((prevState) => prevState - 1);
		if (inputValue <= 0) {
			setInputValue(0);
		}
	}

	useEffect(() => {
		setProducts({
			...products,
			[`${identifier}`]: {
				name,
				image,
				value,
				quantity: inputValue.toString(),
			},
		});
	}, [inputValue]);

	return (
		<>
			<ProductCheckoutContainer>
				<img src={image} alt="product-image" />
				<h1>{name}</h1>
				<p>R${value}</p>
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
