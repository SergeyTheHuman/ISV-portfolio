import { isWebp } from './components/isWebp.js'

isWebp()

const zSpacing = -1500
let lastPosition = 0
let zValues = []

const $frames = Array.from(document.querySelectorAll('.frame'))

function resetScrollAfterReload(params) {
	setTimeout(() => {
		window.scrollTo(0, 0)
	}, 200)
}

function initFramesZPositions() {
	$frames.forEach((frame, index) => {
		zValues.push(index * zSpacing)
		frame.style.cssText = `transform: translateZ(${zValues[index]}px);`
	})
}

function setBodyHeight() {
	const bodyHeight = ($frames.length - 1) * Math.abs(zSpacing)
	const html = document.querySelector('html')
	html.style.setProperty('--body-height', `${bodyHeight}px`)
}

function updateFramesZPosition(delta) {
	$frames.forEach((frame, index) => {
		zValues[index] += delta * -2
		console.log(zValues[index], delta)
		frame.style.cssText = `transform: translateZ(${zValues[index]}px);`
	})
}

setBodyHeight()
resetScrollAfterReload()
initFramesZPositions()

window.addEventListener('scroll', () => {
	let top = document.documentElement.scrollTop
	let delta = lastPosition - top

	lastPosition = top
	updateFramesZPosition(delta)
})

console.log(document.documentElement.scrollTop)
