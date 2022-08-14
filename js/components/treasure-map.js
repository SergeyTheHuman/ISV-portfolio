const $sectionAbout = document.querySelector('.about')

let aboutWidth = $sectionAbout.getBoundingClientRect().width
let aboutHeight = $sectionAbout.getBoundingClientRect().height

let windowCenterX = window.innerWidth / 2
let windowCenterY = window.innerHeight / 2

document.addEventListener('mousemove', (e) => {
	let mouseX = e.clientX - windowCenterX
	let mouseY = e.clientY - windowCenterY

	let mouseXVelocity = Math.abs(mouseX / window.innerWidth)
	let mouseYVelocity = Math.abs(mouseY / window.innerHeight)

	if (Math.abs(mouseX) > 100 || Math.abs(mouseY) > 100) {
		setTransform(mouseX, mouseY, mouseXVelocity, mouseYVelocity)
	}
})

function setTransform(x, y, XVelocity, YVelocity, speed = 5) {
	const currentTransformX = $sectionAbout.getBoundingClientRect().x
	const currentTransformY = $sectionAbout.getBoundingClientRect().y

	let xTransform = $sectionAbout.getBoundingClientRect().x
	let yTransform = $sectionAbout.getBoundingClientRect().y

	if (x > 0 && y > 0) {
		currentTransformX < -(aboutWidth - window.innerWidth / 2) ? (xTransform = xTransform) : (xTransform = currentTransformX - speed * XVelocity)
		currentTransformY < -(aboutHeight - window.innerHeight / 2) ? (yTransform = yTransform) : (yTransform = currentTransformY - speed * YVelocity)
		$sectionAbout.style.cssText = `transform: translate(${xTransform}px,${yTransform}px)`
	} else if (x > 0 && y < 0) {
		currentTransformX < -(aboutWidth - window.innerWidth / 2) ? (xTransform = xTransform) : (xTransform = currentTransformX - speed * XVelocity)
		currentTransformY > window.innerHeight / 2 ? (yTransform = yTransform) : (yTransform = currentTransformY + speed * YVelocity)
		$sectionAbout.style.cssText = `transform: translate(${xTransform}px,${yTransform}px)`
	} else if (x < 0 && y > 0) {
		currentTransformX > window.innerWidth / 2 ? (xTransform = xTransform) : (xTransform = currentTransformX + speed * XVelocity)
		currentTransformY < -(aboutHeight - window.innerHeight / 2) ? (yTransform = yTransform) : (yTransform = currentTransformY - speed * YVelocity)
		$sectionAbout.style.cssText = `transform: translate(${xTransform}px,${yTransform}px)`
	} else if (x < 0 && y < 0) {
		currentTransformX > window.innerWidth / 2 && x < 0 ? (xTransform = xTransform) : (xTransform = currentTransformX + speed * XVelocity)
		currentTransformY > window.innerHeight / 2 && y < 0 ? (yTransform = yTransform) : (yTransform = currentTransformY + speed * YVelocity)
		$sectionAbout.style.cssText = `transform: translate(${xTransform}px,${yTransform}px)`
	}

	// requestAnimationFrame(function () {
	// 	setTransform(x, y)
	// })
}

console.log(aboutWidth, aboutHeight)
