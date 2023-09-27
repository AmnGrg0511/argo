import pair from '../assets/pair.svg';
import startup from '../assets/startup.svg';
import project from '../assets/project.svg';
import practice from '../assets/practice.svg';
import compete from '../assets/compete.svg';
import google from '../assets/logos/google.svg';
import github from '../assets/logos/github.svg';
import facebook from '../assets/logos/facebook.svg';
import stackOverflow from '../assets/logos/stack-overflow.svg';
import linkedin from '../assets/logos/linkedin.svg';
import { Feature } from './Home/Feature';

const features = [
	{
		img: startup,
		heading: 'Learn the skills of tomorrow',
		title: 'Live coding classes and sessions',
		subtitle: 'Learning how to program teaches you how to think',
		oAuth: {
			name: 'Google',
			logo: google,
			action: ()=>{}
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
			action: ()=>{}
		}
	},
	{
		img: pair,
		heading: 'Learn with your peers',
		title: 'Code sharing and pair programming',
		subtitle: 'Learning is fun with friends',
		oAuth: {
			name: 'facebook',
			logo: facebook,
			action: ()=>{}
		}
	},
	{
		img: practice,
		heading: 'Learn while practicing',
		title: 'Huge library of practice problems',
		subtitle: 'Practice makes a programmer perfect',
		oAuth: {
			name: 'stackoverflow',
			logo: stackOverflow,
			action: ()=>{}
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
			action: ()=>{}
		}
	},
]

export const Home = () => {

	return (
		<>
			{features.map( (feature, i) => (
				<Feature key={i} {...feature} rev={i%2===1}/>
			))}
		</>
	)
}