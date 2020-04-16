const seccionespagina = new fullpage("#fullpage",{

	autoScrolling: true, 
	fitToSection: false, 
	fitToSectionDelay: 300, 
	easing: 'easeInOutCubic', 
	scrollingSpeed: 700, 
	css3: true, 
	easingcss3: 'ease-out', 
	loopBottom: false, 

	navigation: true, 
	menu: '#menu', 
	anchors: ['inicio', 'compañeros', 'contacto'], 
	navigationTooltips: ['Inicio', 'compañeros', 'Contacto'], 
	showActiveTooltip: false, 

	sectionsColor : ['#000', '#c2c2c2', '#000'], 
	verticalCentered: true, 
});