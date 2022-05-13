import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import {
	SignInContainer,
	SignInContainerLeft,
	SignInContainerRight,
	Form,
} from './styles';
import {BiUserCircle} from 'react-icons/bi';
import {FiMail} from 'react-icons/fi';
import {SpinnerInfinity} from 'spinners-react';

import MechaGamesLogo from './../../assets/images/mecha-games-logo.svg';
import ImagePageAuth from './../../assets/images/image-screen-auth.svg';

export default () => {
	const [data, setData] = useState({
		name: '',
		email: '',
	});

	const [dataLoading, setDataLoading] = useState({
		loading: false,
		classNameLoading: '',
	});

	const navigate = useNavigate();

	const signIn = (e) => {
		e.preventDefault();

		setDataLoading({
			...dataLoading,
			loading: true,
			classNameLoading: 'input-disabled',
		});

		const URL = `http://localhost:5000/auth/login`;

		axios
			.post(URL, {
				name: data.name,
				email: data.email,
				password: data.password,
				confirmPassword: data.confirmPassword,
			})
			.then(() => {
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

	return (
		<SignInContainer>
			<SignInContainerLeft>
				<img
					className="logo"
					src={MechaGamesLogo}
					alt="mecha-games-logo"
				/>
				<Form onSubmit={signIn}>
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
					{dataLoading.loading === false ? (
						<button type="submit">Sign in now</button>
					) : (
						<button type="button" disabled>
							<SpinnerInfinity
								color="rgba(255, 255, 255, 1)"
								size="70"
							/>
						</button>
					)}
				</Form>
				<Link to="/sign-up">
					<p>Don't have a account? Sign up now!</p>
				</Link>
			</SignInContainerLeft>
			<SignInContainerRight>
				<img src={ImagePageAuth} alt="image-auth-screen" />
			</SignInContainerRight>
		</SignInContainer>
	);
};
