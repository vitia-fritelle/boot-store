import styled from 'styled-components';
export const StyledHeader = styled.header`
	width: 100%;
	height: 143px;

	background: rgba(255, 255, 255, 0.5);
	box-shadow: 0px 6px 4px rgba(71, 105, 157, 0.33);
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: space-around;
	position: relative;

	.brand {
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		align-items: center;
		img {
			height: 112px;
			margin-right: 22px;
		}

		h3 {
			height: 46px;
			font-family: 'Source Sans Pro';
			font-style: normal;
			font-weight: 600;
			font-size: 40px;
			line-height: 50px;
			background: linear-gradient(90deg, #1a2980 0%, #26d0ce 100%);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			background-clip: text;
		}
	}

	.icons-header {
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		align-items: center;
		.magnifying-glass {
			width: 35px;
			height: 35px;
			color: #23b0bf;
			cursor: pointer;
			margin-right: 30px;
		}

		.cart {
			width: 35px;
			height: 35px;
			color: #23b0bf;
			cursor: pointer;
			transform: scaleX(-1);
		}
	}
	.fixed_image {
		height: 100px;
		position: absolute;
		right: 0;
		top: 0;
		z-index: 1;
	}
`;

export const HeaderButton = styled.button`
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 600;
	font-size: 30px;
	line-height: 45px;
	width: 160px;
	height: 50px;
	border: none;
	color: #ffffff;
	cursor: pointer;
	margin-left: 40px;
	border-radius: 40px;
	background: linear-gradient(90deg, #1a2980 0%, #26d0ce 100%);
	z-index: 2;
`;
