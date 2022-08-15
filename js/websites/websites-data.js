export const websitesData = {
	smartShop: {
		title: 'Smart Shop',
		category: 'Интернет-магазин',
		description:
			'<em>Описание:</em> Нужно было сверстать интернет-магазин по макету в Figma, адаптировать под все устройства. Большой макет, много страниц разной сложности. Адаптация меню по макету для телефонов доставила проблем, сложный вариант с переходом на двойное меню с: снизу и сверху. Также сделал автоматический расчет цены с учетом скидки.',
		ui: '<em>Из UI-элементов:</em> модальные окна, слайдеры, ползунки с ценой, Яндекс карты, кастомизированные чекбоксы и радио-кнопки.',
		technologies:
			'<em>В работе использовались:</em> препроцессор Sass, шаблонизатор Pug, Javascript, сборка на Gulp + Webpack, SVG-спрайт. Наименование классов по БЭМ.',
		pages: [
			{
				name: `Главная`,
				link: `index.html`,
			},
			{
				name: `Каталог`,
				link: `page-catalog.html`,
			},
			{
				name: `О компании`,
				link: `page-about-us.html`,
			},
			{
				name: `Корзина`,
				link: `page-cart.html`,
			},
			{
				name: `Сравнение товаров`,
				link: `page-compare.html`,
			},
			{
				name: `Контакты`,
				link: `page-contacts.html`,
			},
			{
				name: `Дропшиппинг`,
				link: `page-dropshipping.html`,
			},
			{
				name: `Опт`,
				link: `page-wholesale.html`,
			},
			{
				name: `Избранные`,
				link: `page-favorite.html`,
			},
			{
				name: `Гарантии`,
				link: `page-garanty.html`,
			},
			{
				name: `Новости`,
				link: `page-news.html`,
			},
			{
				name: `Одна новость`,
				link: `index.html`,
			},
			{
				name: `Рассрочка`,
				link: `page-installment.html`,
			},
			{
				name: `Страница продукта`,
				link: `page-product-one.html`,
			},
			{
				name: `Акции`,
				link: `page-promos.html`,
			},
			{
				name: `Одна акция`,
				link: `page-promos-one.html`,
			},
			{
				name: `Вакансии`,
				link: `page-vacancies.html`,
			},
			{
				name: `Просмотренные`,
				link: `page-viewed.html`,
			},
			{
				name: `Личный кабинет - главная`,
				link: `page-account-main.html`,
			},
			{
				name: `Личный кабинет - избранные`,
				link: `page-account-favorite.html`,
			},
			{
				name: `Личный кабинет - смена пароля`,
				link: `page-account-pass.html`,
			},
			{
				name: `Личный кабинет - персональные данные`,
				link: `page-account-personal.html`,
			},
			{
				name: `Личный кабинет - история`,
				link: `page-account-history.html`,
			},
		],
		image: 'smart-shop.png',
	},
	ritmStyle: {
		title: 'Акватерапия RitmStyle',
		category: 'Корпоративный сайт',
		description:
			'<em>Описание:</em> Нужно было сверстать корпоративный сайт по макету в Figma, адаптировать под все устройства и интегрировать в CMS систему WordPress. Среднего размера макет. Также анимации при скролле, плавное появление блоков и текста.',
		ui: '<em>Из UI-элементов:</em> модальные окна, слайдеры, Яндекс карта, меню-бургер.',
		technologies:
			'<em>В работе использовались:</em> препроцессор Sass, шаблонизатор Pug, Javascript, сборка на Gulp + Webpack, SVG-спрайт, Php, Wordpress. Наименование классов по БЭМ.',
		pages: [
			{
				name: `Главная`,
				link: `home.php`,
			},
			{
				name: `Блог`,
				link: `page-blog.php`,
			},
			{
				name: `Новости`,
				link: `page-news.php`,
			},
			{
				name: `Страница поста`,
				link: `single.php`,
			},
		],
		image: 'RitmStyle.png',
	},
	nftsEvolved: {
		title: 'NTFS HAVE EVOLVED',
		category: 'Лэндинг',
		description:
			'Нужно было сверстать одностраничный лэндинг по макету в Figma и адаптировать под все устройства. Небольшого размера макет. Несколько анимаций, разные изображения для разных разрешений экрана, интересное построение самого сайта и его секций.',
		ui: 'Из UI-элементов могу выделить лишь интересные по форме кнопки и 3D анимации на картах сотрудников',
		technologies:
			'В работе использовались: препроцессор Sass, шаблонизатор Pug, Javascript, сборка на Gulp + Webpack, SVG-спрайт. Наименование классов по БЭМ.',
		pages: [
			{
				name: `Главная`,
				link: `index.html`,
			},
		],
		image: 'NFT.png',
	},
	hockey: {
		title: 'Сайт хоккейного клуба',
		category: 'Корпоративный сайт',
		description:
			'<em>Описание:</em> Нужно было сверстать корпоративный сайт по макету в Figma и адаптировать под все устройства. Среднего размера макет. Много декоративных фоновых элементов, которые было непросто адаптировать под все устройства и разрешения.',
		ui: '<em>Из UI-элементов:</em> модальные окна, много слайдеров, необычное меню-бургер.',
		technologies:
			'<em>В работе использовались:</em> препроцессор Sass, шаблонизатор Pug, Javascript, сборка на Gulp + Webpack, SVG-спрайт. Наименование классов по БЭМ.',
		pages: [
			{
				name: `Главная`,
				link: `index.html`,
			},
			{
				name: `Страница благодарности`,
				link: `thanks.html`,
			},
		],
		image: 'hockey.png',
	},
	advision: {
		title: 'Advision',
		category: 'Корпоративный сайт',
		description:
			'<em>Описание:</em> Нужно было сверстать корпоративный сайт по макету в Figma и адаптировать под все устройства. Небольшого размера макет, была предоставлена только главная страница.',
		ui: '<em>Из UI-элементов:</em> могу выделить только несколько слайдеров.',
		technologies: '<em>В работе использовались:</em> чистый CSS, чистый CSS, Javascript. Наименование классов по БЭМ.',
		pages: [
			{
				name: `Главная`,
				link: `index.html`,
			},
		],
		image: 'advision-website.png',
	},
}
