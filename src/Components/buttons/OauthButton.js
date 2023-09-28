export const OauthButton = ({ logo, name, action, comp }) => {
	return (
		comp ? comp : <div onClick={action} className='d-f b-r btn'>
			<img src={logo} alt='' className='logo' />
			<p className='m-s'>Login with {name}</p>
		</div>
	)
}