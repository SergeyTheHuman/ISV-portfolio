import { isWebp } from './utils/isWebp.js'
import './components/scroll-3d.js'
import './components/treasure-map.js'
import Accordion from 'accordion-js'
import { getRandomInteger } from './utils/utils.js'
import { websitesData } from './websites/websites-data.js'

isWebp()

// Accordions
const $cardsCols = document.querySelectorAll('.slide__cards-col')

// "Bubbles"
const $technologyCards = document.querySelectorAll('.card-technology')
let borderRadiusProps = []
let borderRadiusPropsInvert = []

// Modals
const $websiteCards = document.querySelectorAll('.portfolio__item')
const $websiteModal = document.querySelector('.website-modal')
const $websiteModalOverlay = document.querySelector('.modal-overlay')
let isModalOpened = false

// Header small
const $headerSmallNav = document.querySelector('.header-small__nav')
const $headerSmallLogo = document.querySelector('.header-small__logo')

// Accordions init ======= START
if ($cardsCols) {
	$cardsCols.forEach((el) => {
		const accordion = new Accordion(el, {
			duration: 300,
			showMultiple: false,
		})
	})
}
// Accordions init ======= END

// "Bubbles" logic ======= START
function getRandomBorderRadius(el) {
	let borderRadiusValues = []
	for (let i = 0; i < 8; i++) {
		borderRadiusValues.push(getRandomInteger(20, 80))
	}
	let borderRadius = `border-radius: ${borderRadiusValues[0]}% ${borderRadiusValues[1]}% ${borderRadiusValues[2]}% ${borderRadiusValues[3]}% / ${borderRadiusValues[4]}% ${borderRadiusValues[5]}% ${borderRadiusValues[6]}% ${borderRadiusValues[7]}%`
	let borderRadiusInvert = `border-radius: ${100 - borderRadiusValues[0]}% ${100 - borderRadiusValues[1]}% ${100 - borderRadiusValues[2]}% ${
		100 - borderRadiusValues[3]
	}% / ${100 - borderRadiusValues[4]}% ${100 - borderRadiusValues[5]}% ${100 - borderRadiusValues[6]}% ${100 - borderRadiusValues[7]}%`

	borderRadiusProps.push(borderRadius)
	borderRadiusPropsInvert.push(borderRadiusInvert)

	el.style.cssText = borderRadius
}

if ($technologyCards && window.innerWidth > 1023) {
	$technologyCards.forEach((el, idx) => {
		getRandomBorderRadius(el)
		el.addEventListener('mouseenter', () => {
			el.style.cssText = borderRadiusPropsInvert[idx]
		})
		el.addEventListener('mouseleave', () => {
			el.style.cssText = borderRadiusProps[idx]
		})
	})
}
// "Bubbles" logic ======= END

document.addEventListener('click', (e) => {
	console.log(e.target)
	// Modals logic on portfolio page  ======= START
	if ($websiteCards && $websiteModal) {
		if (e.target.closest('.portfolio__item') && !isModalOpened) {
			const card = e.target.closest('.portfolio__item')
			const cardWebsite = card.getAttribute('data-website-id')
			renderWebsiteModal(websitesData[cardWebsite], $websiteModal)

			$websiteModal.classList.add('modal--opened')
			$websiteModalOverlay.classList.add('modal--opened')

			isModalOpened = true
		}
		if (e.target.closest('.website-modal__cross') || e.target.closest('.modal-overlay')) {
			$websiteModal.classList.remove('modal--opened')
			$websiteModalOverlay.classList.remove('modal--opened')

			setTimeout(() => {
				clearWebsiteModal($websiteModal)
				isModalOpened = false
			}, 300)
		}
	}
	// Modals logic on portfolio page  ======= END

	// Header small logic ======= START
	if (e.target.closest('.header-small__logo')) {
		$headerSmallNav.classList.toggle('opened')
		$headerSmallLogo.classList.toggle('opened')
	}
	// Header small logic ======= START
})

// Modals logic on portfolio page  ======= START
function renderWebsiteModal(websiteInfo, modal) {
	try {
		const $modalTitle = modal.querySelector('.website-modal__title')
		const $modalCategory = modal.querySelector('.website-modal__category')
		const $modalDescription = modal.querySelector('.website-modal__descr')
		const $modalUI = modal.querySelector('.website-modal__ui')
		const $modalTechnologies = modal.querySelector('.website-modal__technologies')
		const $modalPagesQuantity = modal.querySelector('.website-modal__quantity')
		const $modalPagesList = modal.querySelector('.website-modal__list')
		const $modalImage = modal.querySelector('.website-modal__img')

		$modalTitle.insertAdjacentHTML('afterbegin', websiteInfo.title)
		$modalCategory.insertAdjacentHTML('afterbegin', websiteInfo.category)
		$modalDescription.insertAdjacentHTML('afterbegin', websiteInfo.description)
		$modalUI.insertAdjacentHTML('afterbegin', websiteInfo.ui)
		$modalTechnologies.insertAdjacentHTML('afterbegin', websiteInfo.technologies)
		$modalPagesQuantity.textContent = `Количество страниц - ${websiteInfo.pages.length}`
		$modalPagesList.insertAdjacentHTML('afterbegin', getPagesListHTML(websiteInfo.pages))
		if (document.querySelector('html').classList.contains('webp')) {
			$modalImage.setAttribute('src', `images/websites/${websiteInfo.image.split('.')[0]}.webp`)
		} else {
			$modalImage.setAttribute('src', `images/websites/${websiteInfo.image}`)
		}
		$modalImage.setAttribute('alt', `${websiteInfo.image.split('.')[0]}`)
	} catch (error) {
		console.log(error)
	}

	function getPagesListHTML(linksInfo) {
		let html = ``
		for (const link of linksInfo) {
			html += `
			<li class="website-modal__li">
				<a class="website-modal__link" href="${link.link}" data-hover-name="${link.name}">${link.name}</a>
			</li>
			`
		}
		return html
	}
}

function clearWebsiteModal(modal) {
	try {
		const $modalTitle = modal.querySelector('.website-modal__title')
		const $modalCategory = modal.querySelector('.website-modal__category')
		const $modalDescription = modal.querySelector('.website-modal__descr')
		const $modalUI = modal.querySelector('.website-modal__ui')
		const $modalTechnologies = modal.querySelector('.website-modal__technologies')
		const $modalPagesQuantity = modal.querySelector('.website-modal__quantity')
		const $modalPagesList = modal.querySelector('.website-modal__list')
		const $modalImage = modal.querySelector('.website-modal__img')

		$modalTitle.innerHTML = ''
		$modalCategory.innerHTML = ''
		$modalDescription.innerHTML = ''
		$modalUI.innerHTML = ''
		$modalTechnologies.innerHTML = ''
		$modalPagesQuantity.innerHTML = ''
		$modalPagesList.innerHTML = ''
		$modalImage.setAttribute('src', ``)
		$modalImage.setAttribute('alt', ``)
	} catch (error) {
		console.log(error)
	}
}

if ($websiteCards && $websiteModal) {
	document.addEventListener('keydown', (e) => {
		if (isModalOpened && (e.code === `Escape` || e.keyCode === `27`)) {
			$websiteModal.classList.remove('modal--opened')
			$websiteModalOverlay.classList.remove('modal--opened')

			setTimeout(() => {
				clearWebsiteModal($websiteModal)
				isModalOpened = false
			}, 300)
		}
	})
}
// Modals logic on portfolio page  ======= END

// ===
if (window.location.pathname === '/') {
	console.log('Вы на главной')
} else if (window.location.pathname.includes('/page-portfolio.html')) {
	console.log('Вы на странице портфолио')
}
