import styled from 'styled-components';

export const ProductCheckoutContainer = styled.div`
	display: flex;
	margin-top: 20px;
	display: flex;
	width: 750px;
	justify-content: space-between;
	align-items: center;

	input {
		width: 54px;
		height: 31px;
		background: linear-gradient(90deg, #1a2980 0%, #26d0ce 100%), #c4c4c4;
		border-radius: 40px;
		border: none;
		text-align: center;
		color: #ffffff;
		font-style: normal;
		font-weight: 400;
		font-size: 20px;

		&:focus {
			outline: none;
		}
	}

	.input-checkout {
		button {
			border-radius: 40px;
			width: 30px;
			height: 30px;
			border: none;
			font-size: 20px;
		}
	}

	img {
		width: 129px;
	}

	h1 {
		font-style: normal;
		font-weight: 500;
		font-size: 20px;
		width: 230px;
		text-align: center;
		word-break: break-word;
	}
	p {
		font-style: normal;
		font-weight: 400;
		font-size: 20px;
		color: #666666;
	}
`;
