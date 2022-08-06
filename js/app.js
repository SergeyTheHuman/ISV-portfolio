import { isWebp } from './components/isWebp.js'

isWebp()

const $frames = Array.from(document.querySelectorAll('.slider__frame'))
const $html = document.querySelector('html')

const zSpacing = -20000
const transition = 1500
let lastPosition = 0
let zValues = []

const bodyHeight = ($frames.length - 1) * Math.abs(zSpacing)

function throttle(callback, timeout) {
	let timer = null

	return function perform(...args) {
		if (timer) return

		callback(...args)
		timer = setTimeout(() => {
			clearTimeout(timer)
			timer = null
		}, timeout)
	}
}

function resetScrollAfterReload(params) {
	setTimeout(() => {
		window.scrollTo(0, 0)
	}, 200)
}

function initFramesZPositions() {
	$frames.forEach((frame, index) => {
		zValues.push(index * zSpacing)
		console.log(zValues[index] === 0)
		if (zValues[index] === 0) {
			frame.style.cssText = `opacity: 1; transform: translateZ(${zValues[index]}px)`
			return
		}
		frame.style.cssText = `transform: translateZ(${zValues[index]}px);`
	})
}

function setCssVars() {
	$html.style.setProperty('--body-height', `${bodyHeight}px`)
	$html.style.setProperty('--transition-duration', `${transition / 1000}s`)
}

function updateFramesZPosition(delta) {
	$frames.forEach((frame, index) => {
		zValues[index] += delta * -2
		frame.style.cssText = `transform: translateZ(${zValues[index]}px);`
	})
}

setCssVars()
resetScrollAfterReload()
initFramesZPositions()

window.addEventListener('scroll', () => {
	let top = document.documentElement.scrollTop
	let delta = lastPosition - top

	lastPosition = top
	// updateFramesZPosition(delta)

	throttledChangeFrame(delta)
})

const throttledChangeFrame = throttle(changeFrame, transition)

function changeFrame(delta) {
	if (zValues[0] === 0 && delta > 0) return
	if (zValues[zValues.length - 1] === 0 && delta < 0) return
	$frames.forEach((frame, index) => {
		delta < 0 ? (zValues[index] -= zSpacing) : (zValues[index] += zSpacing)
		if (zValues[index] === 0) {
			frame.style.cssText = `opacity: 1; transform: translateZ(${zValues[index]}px)`
			return
		}
		frame.style.cssText = `transform: translateZ(${zValues[index]}px);`
	})
}
