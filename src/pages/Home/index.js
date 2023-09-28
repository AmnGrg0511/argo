import pair from '../../assets/pair.svg';
import startup from '../../assets/startup.svg';
import project from '../../assets/project.svg';
import practice from '../../assets/practice.svg';
import compete from '../../assets/compete.svg';
import google from '../../assets/logos/google.svg';
import github from '../../assets/logos/github.svg';
import facebook from '../../assets/logos/facebook.svg';
import gitlab from '../../assets/logos/gitlab.svg';
import linkedin from '../../assets/logos/linkedin.svg';
import { Feature } from './Feature';
import { useGoogleLogin } from '@react-oauth/google';
import FacebookLogin from '@greatsumini/react-facebook-login';
import { useLinkedIn } from 'react-linkedin-login-oauth2';

export const Home = () => {

	const google_login = useGoogleLogin({
		onSuccess: tokenResponse => console.log(tokenResponse),
	});

	const { linkedInLogin } = useLinkedIn({
		clientId: process.env.REACT_APP_LINKEDIN_CLIENT_ID,
		redirectUri: process.env.REACT_APP_LINKEDIN_REDIRECT_URI,
		scope: 'email',
		onSuccess: (code) => {
			console.log(code);
		}
	});

	const client_id = process.env.REACT_APP_GITHUB_CLIENT_ID
	const redirect_uri = process.env.REACT_APP_GITHUB_REDIRECT_URI
	const githubOAuthURL = 'https://github.com/login/oauth/authorize?scope=user&'

	const github_login = () => {
		window.location.href = `${githubOAuthURL}client_id=${client_id}&redirect_uri=${redirect_uri}`
	}

	const app_id = process.env.REACT_APP_GITLAB_CLIENT_ID
	const callback_uri = process.env.REACT_APP_GITLAB_REDIRECT_URI
	const gitlabOAuthURL = `https://gitlab.com/oauth/authorize?response_type=code&scope=read_user&`

	const gitlab_login = () => {
		window.location.href = `${gitlabOAuthURL}client_id=${app_id}&redirect_uri=${callback_uri}`
	}

	const features = [
		{
			img: startup,
			heading: 'Learn the skills of tomorrow',
			title: 'Live coding classes and sessions',
			subtitle: 'Learning how to program teaches you how to think',
			oAuth: {
				name: 'Google',
				logo: google,
				action: google_login
			}
		},
		{
			img: pair,
			heading: 'Learn with your peers',
			title: 'Code sharing and pair programming',
			subtitle: 'Learning is fun with friends',
			oAuth: {
				comp:
					<FacebookLogin
						appId="871741344387309"
						scope="public_profile,email"
						fields="name,email,picture"
						children={<div className='d-f b-r btn'>
							<img src={facebook} alt='' className='logo' />
							<p className='m-s'>Login with facebook</p>
						</div>}
					/>
			}
		},
		{
			img: compete,
			heading: 'Learn and compete',
			title: 'Regular coding contests',
			subtitle: 'Healthy competition makes one strive to be better',
			oAuth: {
				name: 'linkedIn',
				logo: linkedin,
				action: linkedInLogin
			}
		},
		{
			img: project,
			heading: 'Learn by actually doing',
			title: 'Interactive Coding playground',
			subtitle: 'Nobody can learn how to swim without stepping into water',
			oAuth: {
				name: 'github',
				logo: github,
				action: github_login
			}
		},
		{
			img: practice,
			heading: 'Learn while practicing',
			title: 'Huge library of practice problems',
			subtitle: 'Practice makes a programmer perfect',
			oAuth: {
				name: 'gitlab',
				logo: gitlab,
				action: gitlab_login
			}
		},
	]

	return (
		<>
			{features.map((feature, i) => (
				<Feature key={i} {...feature} rev={i % 2 === 1} />
			))}
		</>
	)
}