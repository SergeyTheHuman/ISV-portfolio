import { isWebp } from './utils/isWebp.js'
import './components/scroll-3d.js'
import Accordion from 'accordion-js'

const $cardsCols = document.querySelectorAll('.slide__cards-col')
const $technologyCards = document.querySelectorAll('.card-technology')

$cardsCols.forEach((el) => {
	const accordion = new Accordion(el, {
		duration: 300,
		showMultiple: false,
	})
})

isWebp()

let borderRadiusProps = []
let borderRadiusPropsInvert = []

function getRandomBorderRadius(el) {
	let borderRadiusValues = []
	for (let i = 0; i < 8; i++) {
		borderRadiusValues.push(Math.round(Math.random() * 100))
	}
	let borderRadius = `border-radius: ${borderRadiusValues[0]}% ${borderRadiusValues[1]}% ${borderRadiusValues[2]}% ${borderRadiusValues[3]}% / ${borderRadiusValues[4]}% ${borderRadiusValues[5]}% ${borderRadiusValues[6]}% ${borderRadiusValues[7]}%`
	let borderRadiusInvert = `border-radius: ${100 - borderRadiusValues[0]}% ${100 - borderRadiusValues[1]}% ${100 - borderRadiusValues[2]}% ${
		100 - borderRadiusValues[3]
	}% / ${100 - borderRadiusValues[4]}% ${100 - borderRadiusValues[5]}% ${100 - borderRadiusValues[6]}% ${100 - borderRadiusValues[7]}%`

	borderRadiusProps.push(borderRadius)
	borderRadiusPropsInvert.push(borderRadiusInvert)

	el.style.cssText = borderRadius
}

$technologyCards.forEach((el, idx) => {
	getRandomBorderRadius(el)
	el.addEventListener('mouseenter', () => {
		el.style.cssText = borderRadiusPropsInvert[idx]
	})
	el.addEventListener('mouseleave', () => {
		el.style.cssText = borderRadiusProps[idx]
	})
})
