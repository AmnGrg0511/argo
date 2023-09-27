import { Svg } from '../../Components/images/Svg';
import { useState, useRef, useEffect } from 'react';
import { OauthButton } from '../../Components/buttons/OauthButton';

export const Feature = ({ img, heading, title, subtitle, rev, oAuth }) => {
	const classes = [];
	const [animate, setAnimate] = useState(false);
	const ref = useRef(null);

	useEffect(() => {
		const current_ref = ref.current
		const observer = new IntersectionObserver(
			([e]) => {
				if (e.isIntersecting) {
					setAnimate(true);
					observer.unobserve(current_ref);
				}
			},
			{ threshold: 0.5 }
		);
		if (current_ref) {
			observer.observe(current_ref);
		}

		return () => {
			if (current_ref) {
				observer.unobserve(current_ref);
			}
		};
	}, [heading]);

	return (
		<div>
			<div ref={ref} className={`d-s ${rev ? 'f-r' : ''}`}>
				<div className='w-m m-m c'>
					<Svg src={img} classes={classes} animate={animate} />
				</div>
				<div className="m-s">
					<h1>{heading}</h1>
					<h3>{title}</h3>
					<p> {subtitle}</p>
					<OauthButton {...oAuth} />
				</div>
			</div>
		</div>
	)
}