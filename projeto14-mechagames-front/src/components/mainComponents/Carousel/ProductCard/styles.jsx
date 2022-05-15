import styled from 'styled-components';

export default styled.figure`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	width: 300px;
	img {
		width: 152.4px;
		height: 146.4px;
		margin-bottom: 6.8px;
	}
	figcaption {
		width: 200px;
		height: 40px;
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 500;
		font-size: 15px;
		line-height: 22px;
		text-align: center;
		margin-bottom: 10px;
		color: #121212;
	}
	.price {
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 400;
		font-size: 15px;
		color: #666666;
	}
`;
