let Translations = {
	en: {
		home: 'Home',
		features: 'Features',
		video: 'Video',
		team: 'Team',
		achievements: 'Achievements',
		news: 'News',
		about: 'About',
		Languages: 'Languages',
		english: 'English',
		arabic: 'Arabic',
		title_slider: 'Azure.Cryptonit'
	},

	ar: {
		home: 'الصفحة الرئيسية',
		features: 'سمات',
		video: 'فيديو',
		team: 'الفريق',
		achievements: 'الإنجازات',
		news: 'أخر الأخبار',
		about: 'عن المشروع',
		Languages: 'اللغات',
		english: 'إنجليزي',
		arabic: 'عربي',
		title_slider: 'أزور كريبتونيت'
	}
};

let LanguagesSelector = document.querySelector('select');
let imgHome = document.querySelector('.active_img');

LanguagesSelector.addEventListener('change', (event) => {
	setLanguages(event.target.value);
	localStorage.setItem('lang', event.target.value);
});

document.addEventListener('DOMContentLoaded', () => {
	setLanguages(localStorage.getItem('lang'));
});
let setLanguages = (language) => {
	let elements = document.querySelectorAll('[data-trans]');
	elements.forEach((element) => {
		let translationKey = element.getAttribute('data-trans');
		element.textContent = Translations[language][translationKey];
	});
	document.dir = language === 'ar' ? 'rtl' : 'ltr';

	if (document.dir === 'rtl') {
		imgHome.classList.add('active_img');
	} else {
		imgHome.classList.remove('active_img');
	}
};

let allLiset = document.querySelectorAll('.navbar-nav .nav-item');
let allLisetLink = document.querySelectorAll('.navbar-nav .nav-link');

allLiset.forEach(function (el) {
	el.onclick = function() {
		allLiset.forEach(function(el) {
			el.classList.remove('active')
		})
		this.classList.add('active')
	}
});

allLisetLink.forEach(function (el) {
	el.onclick = function() {
		allLisetLink.forEach(function(el) {
			el.classList.remove('active')
		})
		this.classList.add('active')
	}
});
