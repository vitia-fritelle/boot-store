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
		cursor: pointer;
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
		height: 300px;
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
	&:hover {
		animation: mar alternate 1.5s infinite;
	}
	@keyframes mar {
		0% {
			background: linear-gradient(90deg, #1a2980 0%, #26d0ce 100%);
		}
		5% {
			background: linear-gradient(90deg, #1a2980 10%, #26d0ce 100%);
		}
		10% {
			background: linear-gradient(90deg, #1a2980 20%, #26d0ce 100%);
		}
		15% {
			background: linear-gradient(90deg, #1a2980 30%, #26d0ce 100%);
		}
		20% {
			background: linear-gradient(90deg, #1a2980 40%, #26d0ce 100%);
		}
		25% {
			background: linear-gradient(90deg, #1a2980 50%, #26d0ce 100%);
		}
		30% {
			background: linear-gradient(90deg, #1a2980 60%, #26d0ce 100%);
		}
		35% {
			background: linear-gradient(90deg, #1a2980 70%, #26d0ce 100%);
		}
		40% {
			background: linear-gradient(90deg, #1a2980 80%, #26d0ce 100%);
		}
		45% {
			background: linear-gradient(90deg, #1a2980 90%, #26d0ce 100%);
		}
		50% {
			background: linear-gradient(90deg, #1a2980 100%, #26d0ce 100%);
		}
		55% {
			background: linear-gradient(90deg, #1a2980 90%, #26d0ce 100%);
		}
		60% {
			background: linear-gradient(90deg, #1a2980 80%, #26d0ce 100%);
		}
		65% {
			background: linear-gradient(90deg, #1a2980 70%, #26d0ce 100%);
		}
		70% {
			background: linear-gradient(90deg, #1a2980 60%, #26d0ce 100%);
		}
		75% {
			background: linear-gradient(90deg, #1a2980 50%, #26d0ce 100%);
		}
		80% {
			background: linear-gradient(90deg, #1a2980 40%, #26d0ce 100%);
		}
		85% {
			background: linear-gradient(90deg, #1a2980 30%, #26d0ce 100%);
		}
		90% {
			background: linear-gradient(90deg, #1a2980 20%, #26d0ce 100%);
		}
		95% {
			background: linear-gradient(90deg, #1a2980 10%, #26d0ce 100%);
		}
		100% {
			background: linear-gradient(90deg, #1a2980 0%, #26d0ce 100%);
		}
	}
`;
