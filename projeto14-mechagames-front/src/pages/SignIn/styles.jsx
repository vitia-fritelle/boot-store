import styled from 'styled-components';

const SignInContainer = styled.div`
	display: flex;
`;

const SignInContainerRight = styled.div`
	width: 50%;
	height: 100vh;
	background: linear-gradient(90deg, #1a2980 0%, #26d0ce 100%);
	display: flex;
	align-items: center;
	justify-content: center;

	img {
		width: 440px;
		height: 388px;
	}
`;

const SignInContainerLeft = styled.div`
	width: 50%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;

	img {
		width: 150px;
		height: 150px;
		margin-top: 46px;
		margin-bottom: 65px;
	}

	p {
		font-family: 'Source Sans Pro';
		font-style: normal;
		font-weight: 300;
		font-size: 20px;
		color: #000000;
	}
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;

	input {
		width: 420px;
		height: 57px;
		background: #eaeaea;
		border-radius: 5px;
		border: none;
		padding-left: 50px;
		margin-bottom: 20px;
		font-family: 'Source Sans Pro';
		font-size: 20px;
		font-weight: 300;

		&:focus {
			outline: none;
			border: 2px solid blue;
		}
		&::placeholder {
			font-style: regular;
			font-weight: 400;
			font-size: 20px;
			color: #919191;
		}

	}

	input:last-child {
		margin-bottom: 100px;
	}

	input:focus::placeholder {
		color: transparent;
	}

	.input_container {
		position: relative;
		padding: 0;
		margin: 0;

		.icon_input {
			position: absolute;
			top: 0;
			left: 0;
			margin-top: 13px;
			margin-left: 10px;
			font-size: 30px;
			color: #919191;
		}
	}

	.error_password {
		border: 1px solid rgba(245, 0, 0, 0.5);
	}

	button {
		width: 420px;
		height: 66px;
		background: linear-gradient(90deg, #1a2980 0%, #26d0ce 100%);
		border-radius: 5px;
		border: none;
		color: #ffffff;
		font-style: normal;
		font-weight: 600;
		font-size: 30px;
		margin-bottom: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		overflow: hidden;
		position: relative;
		inset: 4px;
		
		&:focus {
			outline: none;
		}
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
			50%{
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
	}

	.button-disabled {
		background: rgba(93, 93, 94, 0.5);
	}

	.text-danger {
		font-family: 'Source Sans Pro';
		font-style: normal;
		font-weight: 300;
		font-size: 15px;
		color: #000000;
		margin-bottom: 20px;
	}
`;

export {
    SignInContainer, SignInContainerLeft, SignInContainerRight, Form,
};
