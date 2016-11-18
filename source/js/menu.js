(function(){
	var menuButton, navigationMenu, menuLogo, navigationList, prevWidth;
	prevWidth = window.innerWidth;
	menuButton = document.querySelector('.main-nav__button');
	navigationMenu = document.querySelector('.main-nav');
	menuLogo = document.querySelector('.main-nav__menu-logo');
	navigationList = document.querySelector('.main-nav__items');

	if(window.matchMedia("(max-width: 1200px)").matches){
		window.onload = function() {
			navigationMenu.classList.add('main-nav--overlap');
			menuLogo.classList.add('main-nav__menu-logo--closed-menu');
			navigationList.classList.add('main-nav__items--closed');

		};
	}

	window.addEventListener('resize', function() {

		if(window.innerWidth > prevWidth && (window.matchMedia("(min-width: 1200px)").matches)){
			navigationMenu.classList.remove('main-nav--overlap');
			menuLogo.classList.remove('main-nav__menu-logo--closed-menu');
			navigationList.classList.remove('main-nav__items--closed');
			menuButton.classList.remove('main-nav__button--close');
		} else if (window.innerWidth < prevWidth && (window.matchMedia("(max-width: 1200px)").matches)){
			navigationMenu.classList.add('main-nav--overlap');
			menuLogo.classList.add('main-nav__menu-logo--closed-menu');
			navigationList.classList.add('main-nav__items--closed');
		}

	});

	menuButton.addEventListener('tap', function(event){
		event.preventDefault();
			menuButton.classList.toggle('main-nav__button--close');
			menuLogo.classList.toggle('main-nav__menu-logo--closed-menu');
			navigationList.classList.toggle('main-nav__items--closed');
	});

})();

(function() {
  var links = document.querySelectorAll('a[href^="#"]'),
      i;

  for (i = 0; i<links.length; i++) {
    links[i].addEventListener('tap', function(event) {
      var timer = 1,
          attrName = this.getAttribute('href').slice(1),
          currentPos = this.parentNode.parentNode.offsetTop + this.offsetTop,
          stopPos = document.getElementById(attrName).offsetTop,
          distance = stopPos - pageYOffset,
          step = Math.round(distance / 50),
          nextStep = 0;

      event.preventDefault();
      for (i = nextStep; i <= stopPos; i+=step) {
        setTimeout(function(){ window.scrollTo(0, nextStep+=step); }, timer * 8);
        timer++;
      }
    }, false);
  }
})();