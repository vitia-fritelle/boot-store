import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import {
	SignUpContainer,
	SignUpContainerLeft,
	SignUpContainerRight,
	Form,
} from './styles';
import {BiUserCircle} from 'react-icons/bi';
import {FiMail} from 'react-icons/fi';
import {MdOutlineLock} from 'react-icons/md';
import {SpinnerInfinity} from 'spinners-react';

import MechaGamesLogo from './../../assets/images/mecha-games-logo.svg';
import ImagePageAuth from './../../assets/images/image-screen-auth.svg';

export default () => {
	const [data, setData] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	});
	const [buttonCadastrar, setButtonCadastrar] = useState({
		disabled: true,
		classNameDisabled: 'button-disabled',
	});
	const [errorConfirmPassword, setErrorConfirmPassword] = useState({
		classNameError: '',
	});
	const [dataLoading, setDataLoading] = useState({
		loading: false,
		classNameLoading: '',
	});

	const navigate = useNavigate();

	const signUp = (e) => {
		e.preventDefault();

		setDataLoading({
			...dataLoading,
			loading: true,
			classNameLoading: 'input-disabled',
		});

		const URL = `http://localhost:5000/sign-up`;

		axios
			.post(URL, {
				name: data.name,
				email: data.email,
				password: data.password,
				confirmPassword: data.confirmPassword,
			})
			.then((res) => {
				setDataLoading({
					...dataLoading,
					loading: false,
					classNameLoading: '',
				});
				navigate('/');
			})
			.catch((err) => {
				console.log({
					message:
						'Sign Up error! Check your credentials and try again',
					err,
				});
				setDataLoading({
					...dataLoading,
					loading: false,
					classNameLoading: '',
				});
			});
	};

	useEffect(() => {
		if (
			data.confirmPassword !== '' &&
			data.password !== data.confirmPassword
		) {
			setErrorConfirmPassword({classNameError: 'error_password'});
			setButtonCadastrar({
				...buttonCadastrar,
				disabled: true,
				classNameDisabled: 'button-disabled',
			});
		} else if (
			data.confirmPassword !== '' &&
			data.confirmPassword === data.password
		) {
			setErrorConfirmPassword({classNameError: ''});
			setButtonCadastrar({
				...buttonCadastrar,
				disabled: false,
				classNameDisabled: '',
			});
		}
	}, [data.confirmPassword, data.password]);

	return (
		<SignUpContainer>
			<SignUpContainerLeft>
				<img src={ImagePageAuth} alt="image-auth-screen" />
			</SignUpContainerLeft>
			<SignUpContainerRight>
				<img
					className="logo"
					src={MechaGamesLogo}
					alt="mecha-games-logo"
				/>
				<Form onSubmit={signUp}>
					<div className="input_container">
						<input
							type="text"
							disabled={dataLoading.loading}
							className={dataLoading.classNameLoading}
							placeholder="Nome"
							required
							value={data.name}
							onChange={(e) =>
								setData({...data, name: e.target.value})
							}
						/>
						<BiUserCircle className="icon_input" />
					</div>
					<div className="input_container">
						<input
							type="email"
							disabled={dataLoading.loading}
							className={dataLoading.classNameLoading}
							placeholder="E-mail"
							required
							value={data.email}
							onChange={(e) =>
								setData({...data, email: e.target.value})
							}
						/>
						<FiMail className="icon_input" />
					</div>
					<div className="input_container">
						<input
							type="password"
							disabled={dataLoading.loading}
							className={
								(dataLoading.classNameLoading, data.error)
							}
							placeholder="Senha"
							required
							value={data.password}
							onChange={(e) =>
								setData({
									...data,
									password: e.target.value,
								})
							}
						/>
						<MdOutlineLock className="icon_input" />
					</div>
					<div className="input_container">
						<input
							type="password"
							disabled={dataLoading.loading}
							className={`${dataLoading.classNameLoading} ${errorConfirmPassword.classNameError}`}
							placeholder="Confirme a senha"
							required
							value={data.confirmPassword}
							onChange={(e) =>
								setData({
									...data,
									confirmPassword: e.target.value,
								})
							}
						/>
						<MdOutlineLock className="icon_input" />
					</div>
					{dataLoading.loading === false ? (
						<button
							type="submit"
							disabled={buttonCadastrar.disabled}
							className={buttonCadastrar.classNameDisabled}>
							Sign in now
						</button>
					) : (
						<button type="button" disabled>
							<SpinnerInfinity
								color="rgba(255, 255, 255, 1)"
								size="70"
							/>
						</button>
					)}
				</Form>
				<Link to="/">
					<p>Already have a account? Sign in</p>
				</Link>
			</SignUpContainerRight>
		</SignUpContainer>
	);
};
