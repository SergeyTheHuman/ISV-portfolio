function isMobile() {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)
}

const $sectionAbout = document.querySelector('.about')

if (window.location.pathname === '/page-about.html' && !isMobile() && window.innerWidth > 1023.98 && $sectionAbout) {
	let aboutWidth = $sectionAbout.offsetWidth
	let aboutHeight = $sectionAbout.offsetHeight

	let windowCenterX = 0
	let windowCenterY = 0

	let mouseX = 0
	let mouseY = 0

	let mouseXVelocity = 0
	let mouseYVelocity = 0

	const speed = 25

	document.addEventListener('mousemove', (e) => {
		windowCenterX = window.innerWidth / 2
		windowCenterY = window.innerHeight / 2

		mouseX = e.clientX - windowCenterX
		mouseY = e.clientY - windowCenterY

		mouseXVelocity = Math.abs(mouseX / window.innerWidth)
		mouseYVelocity = Math.abs(mouseY / window.innerHeight)
	})
	document.addEventListener('mouseover', (e) => {
		console.log(e.target)
	})

	setTransform()

	function setTransform() {
		const currentTransformX = $sectionAbout.getBoundingClientRect().x
		const currentTransformY = $sectionAbout.getBoundingClientRect().y

		let xTransform = currentTransformX
		let yTransform = currentTransformY

		if (mouseX > 0 && mouseY > 0) {
			currentTransformX < -(aboutWidth - window.innerWidth / 2)
				? (xTransform = xTransform)
				: (xTransform = currentTransformX - speed * mouseXVelocity)
			currentTransformY < -(aboutHeight - window.innerHeight / 2)
				? (yTransform = yTransform)
				: (yTransform = currentTransformY - speed * mouseYVelocity)
		} else if (mouseX > 0 && mouseY < 0) {
			currentTransformX < -(aboutWidth - window.innerWidth / 2)
				? (xTransform = xTransform)
				: (xTransform = currentTransformX - speed * mouseXVelocity)
			currentTransformY > window.innerHeight / 2 ? (yTransform = yTransform) : (yTransform = currentTransformY + speed * mouseYVelocity)
		} else if (mouseX < 0 && mouseY > 0) {
			currentTransformX > window.innerWidth / 2 ? (xTransform = xTransform) : (xTransform = currentTransformX + speed * mouseXVelocity)
			currentTransformY < -(aboutHeight - window.innerHeight / 2)
				? (yTransform = yTransform)
				: (yTransform = currentTransformY - speed * mouseYVelocity)
		} else if (mouseX < 0 && mouseY < 0) {
			currentTransformX > window.innerWidth / 2 && mouseX < 0
				? (xTransform = xTransform)
				: (xTransform = currentTransformX + speed * mouseXVelocity)
			currentTransformY > window.innerHeight / 2 && mouseY < 0
				? (yTransform = yTransform)
				: (yTransform = currentTransformY + speed * mouseYVelocity)
		}
		if (Math.abs(mouseX) < 100 && Math.abs(mouseY) < 100) {
			xTransform = currentTransformX
			yTransform = currentTransformY
		}
		$sectionAbout.style.cssText = `transform: translate(${xTransform}px,${yTransform}px)`

		requestAnimationFrame(setTransform)
	}
}
