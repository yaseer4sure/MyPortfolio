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
		const prevButton = document.querySelector('.prev-btn');
		const nextButton = document.querySelector('.next-btn');
		let currentSlide = 0;

		// Function to hide navigation buttons on small screens
		const handleResize = () => {
			if (window.innerWidth <= 768) {
				prevButton.style.display = 'none';
				nextButton.style.display = 'none';
			} else {
				prevButton.style.display = 'block';
				nextButton.style.display = 'block';
			}
		};

		handleResize();
		window.addEventListener('resize', handleResize);
	
		// Navigation functionality for larger screens
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

		const themeToggle = document.getElementById('theme-toggle');
		const currentTheme = localStorage.getItem('theme') || 'light';

		// Apply the saved theme on page load
		document.documentElement.setAttribute('data-theme', currentTheme);

		// Set the initial icon based on the current theme
		themeToggle.classList.add(currentTheme === 'dark' ? 'fa-sun' : 'fa-moon');

		// Toggle theme on icon click
		themeToggle.addEventListener('click', () => {
			const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
			document.documentElement.setAttribute('data-theme', newTheme);
			localStorage.setItem('theme', newTheme); // Save the theme preference

			// Update the icon
			themeToggle.classList.toggle('fa-moon');
			themeToggle.classList.toggle('fa-sun');
		});
	});