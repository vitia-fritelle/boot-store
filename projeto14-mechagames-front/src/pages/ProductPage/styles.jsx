import styled from 'styled-components';

export const ProductPageContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ProductInfoContainer = styled.div`
	text-align: center;
	width: 566px;
	height: 540px;

	h1 {
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 500;
		font-size: 20px;
		margin-bottom: 15px;
	}

	p {
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 400;
		font-size: 20px;
		color: #666666;
	}

	button {
		width: 421px;
		height: 45px;
		background: linear-gradient(90deg, #1a2980 0%, #26d0ce 100%);
		border-radius: 40px;
		font-style: normal;
		font-weight: 600;
		font-size: 30px;
		color: #ffffff;
		border: none;
		margin-top: 46px;
	}

	img {
		width: 340px;
		height: 352px;
	}
`;

export const ProductDescriptionContainer = styled.div`
	text-align: center;
	width: 566px;
	height: 540px;
	padding: 10px;

	h2 {
		margin-top: 30px;
		margin-bottom: 12px;
		font-weight: 600;
		font-size: 20px;
		background: linear-gradient(90deg, #1a2980 0%, #26d0ce 100%);

		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	p {
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 600;
		font-size: 15px;
		line-height: 25px;
	}
`;
