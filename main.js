let menu = document.querySelector('#menu-icon');
	let navbar = document.querySelector('.navbar');
	 
	menu.onclick = () =>{
	 
	    menu.classList.toggle('fa-times');
	    navbar.classList.toggle('active');
	}
	 
	window.onscroll = () =>{
	    menu.classList.remove('fa-times');
	    navbar.classList.remove('active');
	}


	document.addEventListener('DOMContentLoaded', () => {
		AOS.init({
			duration: 1000,
			easing: 'ease-in-out',
		});
	
		const projectsWrapper = document.querySelector('.projects-wrapper');
		let currentSlide = 0;
	
		window.showNextProjects = () => {
			if (currentSlide < 1) {
				currentSlide++;
				projectsWrapper.style.transform = `translateX(-${currentSlide * 50}%)`;
			}
		};
	
		window.showPreviousProjects = () => {
			if (currentSlide > 0) {
				currentSlide--;
				projectsWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
			}
		};
	});