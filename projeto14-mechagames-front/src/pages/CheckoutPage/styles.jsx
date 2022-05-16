import styled from 'styled-components';

export const CheckoutContainer = styled.div`
	.confirm_checkout button {
		width: 421px;
		height: 50px;
		background: linear-gradient(90deg, #1a2980 0%, #26d0ce 100%);
		border-radius: 40px;
		border: none;
		font-style: normal;
		font-weight: 600;
		font-size: 30px;
		color: #ffffff;
		cursor: pointer;
	}
	.confirm_checkout {
		width: 400px;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 50px;
	}

	.checkout_position {
		display: flex;
		justify-content: flex-end;
		margin-right: 150px;
	}

	h2 {
		font-style: normal;
		font-weight: 600;
		font-size: 30px;
		margin-bottom: 5px;
	}

	span {
		font-style: normal;
		font-weight: 400;
		font-size: 30px;
		color: #666666;
	}
`;

export const HeaderCheckout = styled.div`
	margin-top: 87px;
	margin-left: 170px;
	display: flex;
	width: 730px;

	p {
		font-style: normal;
		font-weight: 600;
		font-size: 30px;
	}

	.product {
		margin-right: 140px;
	}
	.name {
		margin-right: 130px;
	}

	.value {
		margin-right: 85px;
	}
`;

export const ProductsContainerCheckout = styled.div`
	height: 450px;
	width: 800px;
	margin-left: 170px;
	overflow-y: scroll;

	::-webkit-scrollbar-track {
		background-color: #dbdbdb;
	}
	::-webkit-scrollbar {
		width: 6px;
		background: #98c7ee;
	}
	::-webkit-scrollbar-thumb {
		background: linear-gradient(90deg, #1a2980 0%, #26d0ce 100%);
		border-radius: 5px;
	}
`;
