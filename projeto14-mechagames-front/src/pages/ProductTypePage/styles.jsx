import styled from 'styled-components';

export const TypeProductPageContainer = styled.div`
	width: 100%;
	height: 100%;

	h2 {
		background: linear-gradient(90deg, #1a2980 0%, #26d0ce 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		font-style: normal;
		font-weight: 600;
		font-size: 30px;
		line-height: 45px;
		margin-left: 110px;
		margin-top: 120px;
		text-transform: capitalize;
	}
`;

export const ProductsContainer = styled.div`
	width: 840px;
	min-height: 555px;
	flex-wrap: wrap;
	display: flex;
	margin-left: 110px;
	margin-top: 50px;
	gap: 10px;
`;

export const ProductContainer = styled.div`
	display: flex;
	text-align: center;
	flex-direction: column;
	align-items: center;
	width: 200px;
	min-height: 240px;

	img {
		width: 160px;
		height: 160px;
		cursor: pointer;
	}

	h1 {
		width: 200px;
		font-style: normal;
		font-weight: 600;
		font-size: 15px;
		margin-bottom: 10px;
	}

	p {
		font-style: normal;
		font-weight: 400;
		font-size: 15px;
		color: #666666;
	}
`;

export const ButtonReturn = styled.div`
	margin-top: 20px;
	margin-left: 50px;
	cursor: pointer;
	.back-button {
		height: 50px;
		width: 50px;
		color: #44c3fd;
	}
`;
