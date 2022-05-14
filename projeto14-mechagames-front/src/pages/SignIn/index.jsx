import {useState, useEffect, useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {MdOutlineLock} from 'react-icons/md';
import {FiMail} from 'react-icons/fi';
import signInAxios from '../../adapters';
import { Button } from '../../components/authComponents';
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

	const signIn = (e) => {
		e.preventDefault();
		setDataLoading(true);
		const URL = `/auth/login`;
		(
			signInAxios
			.post(URL, {
				email: data.email,
				password: data.password
			})
			.then(({data}) => {
				setToken(data.token);
				localStorage.setItem('user',data.token);
				navigate('/',{replace: true});
			})
			.catch((err) => {
				console.log({
					message:
						'Sign Up error! Check your credentials and try again',
					err,
				});
				
			}).finally(() => {
				setDataLoading(false);
			})
		);
	};

	useEffect(() => {
		const token = localStorage.getItem('user');
		if(token) {
			setToken(token);
			navigate('/',{replace: true});
		}
	});

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
							type="email"
							disabled={dataLoading}
							className={dataLoading?'input-disabled':''}
							placeholder="Email"
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
							className={dataLoading?'input-disabled':''}
							placeholder="Insira a sua senha"
							required
							value={data.password}
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
