export function throttle(callback, timeout) {
	let timer = null

	return function (...args) {
		if (timer) return

		callback(...args)
		timer = setTimeout(() => {
			clearTimeout(timer)
			timer = null
		}, timeout)
	}
}

export function getRandomInteger(min, max) {
	let rand = min + Math.random() * (max + 1 - min)
	return Math.floor(rand)
}