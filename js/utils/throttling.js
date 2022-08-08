export default function throttle(callback, timeout) {
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
