import {useState, useEffect, useRef} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {MdOutlineLock} from 'react-icons/md';
import {FiMail} from 'react-icons/fi';
import signInAxios from '../../adapters';
import {Button} from '../../components/authComponents';
import {
	SignInContainer,
	SignInContainerLeft,
	SignInContainerRight,
	Form,
} from './styles';
import MechaGamesLogo from './../../assets/images/mecha-games-logo.svg';
import ImagePageAuth from './../../assets/images/image-screen-auth.svg';

export default ({setToken}) => {
	const [data, setData] = useState({
		email: '',
		password: '',
	});
	const [dataLoading, setDataLoading] = useState(false);
	const navigate = useNavigate();
	const inputEmail = useRef(null);
	const inputPass = useRef(null);
	const [errorState, setErrorState] = useState({msg:''});
	const signIn = (e) => {
		e.preventDefault();
		setDataLoading(true);
		const URL = `/auth/login`;
		signInAxios
			.post(URL, {
				email: data.email,
				password: data.password,
			})
			.then(({data}) => {
				setToken(data.token);
				localStorage.setItem('user', data.token);
				navigate('/', {replace: true});
			})
			.catch((err) => {
				setErrorState({msg:err.response.data})
			})
			.finally(() => {
				setDataLoading(false);
			})
			.finally(() => {
				setDataLoading(false);
			});
	};
	const moveToInput = (element) => {

		element.current.setSelectionRange(0,0);
		element.current.focus();
	};
	useEffect(() => {
		const token = localStorage.getItem('user');
		if (token) {
			setToken(token);
			navigate('/', {replace: true});
		}
	},[]);

	useEffect(() => {
		if (errorState.msg === 'email not found') {
			moveToInput(inputEmail);
		} else if (errorState.msg === 'LoginSchema password=') {
			moveToInput(inputPass);
		}
	},[errorState]);

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
							disabled={dataLoading}
							className={dataLoading ? 'input-disabled' : ''}
							placeholder="E-mail"
							required
							value={data.email}
							ref={inputEmail}
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
							placeholder="Isert your password"
							required
							value={data.password}
							ref={inputPass}
							onChange={(e) =>
								setData({...data, password: e.target.value})
							}
						/>
						<MdOutlineLock className="icon_input" />
					</div>
					<Button isLoading={dataLoading} isDisabled={false}>
						Sign in now
					</Button>
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
