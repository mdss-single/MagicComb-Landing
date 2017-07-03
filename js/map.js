ymaps.ready(function () {
	var myMap = new ymaps.Map('map', {
			center: [56.359434, 43.851728],
			zoom: 16
		}, {
			searchControlProvider: 'yandex#search'
		}),

		// Создаём макет содержимого.
		MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
			'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
		),

		myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
			hintContent: 'Собственный значок метки',
			balloonContent: 'Это красивая метка'
		}, {
			// Опции.
			// Необходимо указать данный тип макета.
			iconLayout: 'default#image',
			// Своё изображение иконки метки.
			iconImageHref: 'i/map__dot.png',
			// Размеры метки.
			iconImageSize: [145, 127],
			// Смещение левого верхнего угла иконки относительно
			// её "ножки" (точки привязки).
			iconImageOffset: [-45, -124]
		});

	myMap.geoObjects
		.add(myPlacemark)
		.add(myPlacemarkWithContent);
});