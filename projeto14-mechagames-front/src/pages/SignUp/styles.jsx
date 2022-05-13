import styled from 'styled-components';

const SignUpContainer = styled.div`
	display: flex;
`;

const SignUpContainerLeft = styled.div`
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

const SignUpContainerRight = styled.div`
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
	}

	button:focus {
		outline: none;
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

export {SignUpContainer, SignUpContainerLeft, SignUpContainerRight, Form};
