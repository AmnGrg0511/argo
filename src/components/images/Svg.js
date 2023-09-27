import { ReactSVG } from 'react-svg'

export const Svg = ({src, classes, animate}) => (
	<ReactSVG
		afterInjection={error => {
			if (error) {
				console.error(error)
				return
			}
		}}
		beforeInjection={svg => {
			classes.forEach(cls => {svg.classList.add(cls)})
			animate && svg.classList.add('animated')
		}}
		evalScripts="always"
		fallback={() => <span>Error!</span>}
		loading={() => <span></span>}
		onClick={() => {
			console.log('wrapper onClick')
		}}
		renumerateIRIElements={false}
		src={src}
		useRequestCache={false}
	/>
)