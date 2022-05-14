import {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {BiUserCircle} from 'react-icons/bi';
import {FiMail} from 'react-icons/fi';
import {MdOutlineLock} from 'react-icons/md';
import singUpAxios from '../../adapters';
import {
	SignUpContainer,
	SignUpContainerLeft,
	SignUpContainerRight,
	Form,
} from './styles';
import MechaGamesLogo from './../../assets/images/mecha-games-logo.svg';
import ImagePageAuth from './../../assets/images/image-screen-auth.svg';
import {Button} from '../../components/authComponents';

export default () => {
	const [data, setData] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	});
	const [dataLoading, setDataLoading] = useState(false);
	const [buttonDisabled, setButtonDisabled] = useState(true);

	const navigate = useNavigate();

	const signUp = (e) => {
		e.preventDefault();

		setDataLoading(true);

		const URL = `/auth/sign-up`;

		singUpAxios
			.post(URL, {
				name: data.name,
				email: data.email,
				password: data.password,
				confirmPassword: data.confirmPassword,
			})
			.then(() => {
				navigate('/');
			})
			.catch((err) => {
				console.log({
					message:
						'Sign Up error! Check your credentials and try again',
					err,
				});
			})
			.finally(() => {
				setDataLoading(false);
			});
	};

	const arePasswordsEqual = () => data.confirmPassword === data.password;
	const isConfirmPasswordEmpty = () => data.confirmPassword === '';
	const isButtonDisabled = () => {
		if (!isConfirmPasswordEmpty() && arePasswordsEqual()) {
			setButtonDisabled(false);
		} else {
			setButtonDisabled(true);
		}
	};
	const borderIsRed = () => {
		if (arePasswordsEqual() && dataLoading) {
			return 'input_disabled';
		} else if (
			!arePasswordsEqual() &&
			!dataLoading &&
			data.confirmPassword.length > 0
		) {
			return 'error_password';
		} else if (!arePasswordsEqual() && dataLoading) {
			return 'error_password input_disabled';
		} else {
			return '';
		}
	};

	useEffect(isButtonDisabled, [data.password, data.confirmPassword]);

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
							disabled={dataLoading}
							className={dataLoading ? 'input-disabled' : ''}
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
							disabled={dataLoading}
							className={dataLoading ? 'input-disabled' : ''}
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
							disabled={dataLoading}
							className={dataLoading ? 'input-disabled' : ''}
							placeholder="Senha"
							required
							value={data.password}
							onChange={(e) => {
								setData({
									...data,
									password: e.target.value,
								});
							}}
						/>
						<MdOutlineLock className="icon_input" />
					</div>
					<div className="input_container">
						<input
							type="password"
							disabled={dataLoading}
							className={borderIsRed()}
							placeholder="Confirme a senha"
							required
							value={data.confirmPassword}
							onChange={(e) => {
								setData({
									...data,
									confirmPassword: e.target.value,
								});
							}}
						/>
						<MdOutlineLock className="icon_input" />
					</div>
					<Button isLoading={dataLoading} isDisabled={buttonDisabled}>
						Sign up now
					</Button>
				</Form>
				<Link to="/sign-in">
					<p>Already have a account? Sign in</p>
				</Link>
			</SignUpContainerRight>
		</SignUpContainer>
	);
};
