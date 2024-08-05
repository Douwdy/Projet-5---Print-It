// Array de toutes les slides + la tagline associé
const slides = [
	{
		"image":"slide1.webp",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.webp",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.webp",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.webp",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	},
]

// Position initale du carousel 
let currentIndex = 0;

function showSlide(index) {
	// Mise à jour de l'index actuel
	currentIndex = (index + slides.length) % slides.length;
	const banner = document.getElementById('banner');
	// Insertion de la slide actuelle
	banner.innerHTML = `
		<img class="banner-img" src="./assets/images/slideshow/${slides[currentIndex].image}" alt="Banner Print-it">
		<p>${slides[currentIndex].tagLine}</p>
		<div class="dots"></div>
		<img src="./assets/images/arrow_left.png" alt="Flèche de gauche" class="arrow arrow_left">
		<img src="./assets/images/arrow_right.png" alt="Flèche de droite" class="arrow arrow_right">
	`;

	// Mise à jour des bullet points
	// _ = Element actuel du slider
	// index = position actuelle dans le array
	const dots = document.querySelector('.dots');
	slides.forEach((_, index) => {
		const dot = document.createElement('span');
		dot.classList.add('dot');
		if (index === currentIndex) {
			dot.classList.add('dot_selected');
		}
		dots.appendChild(dot);
	});

	// Fonction de changement de slide
	document.querySelector('.arrow_left').addEventListener('click', () => {
		showSlide(currentIndex - 1);
	});

	document.querySelector('.arrow_right').addEventListener('click', () => {
		showSlide(currentIndex + 1);
	});
}

// Appel de la fonction pour afficher la slide
showSlide(currentIndex);

// Défilement automatique des slides avec un délais de 5s
setInterval(() => {
	showSlide(currentIndex + 1);
}, 5000);
