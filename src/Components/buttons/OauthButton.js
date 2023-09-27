export const OauthButton = ({logo, name, action}) => {
	return (
		<div className='d-f b-r btn'>
			<img src={logo} alt='' className='logo'/>
			<p className='m-s'>Login with {name}</p>
		</div>
	)
}