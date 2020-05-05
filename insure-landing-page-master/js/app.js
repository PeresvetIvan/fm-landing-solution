class Landing {

    constructor() {
        // decor elements
        this.bannerDecorRight = document.querySelector('.banner__decor--right');
        this.bannerDecorLeft = document.querySelector('.banner__decor--left');
        this.adDecor = document.querySelector('.ad__decor');
        this.footerDecor = document.querySelector('.footer__decor');
        this.dekorDesktop; 
        console.log(innerWidth);
        // banner itself, banner content
        this.banner = document.querySelector('.banner');
        this.bannerContent = document.querySelector('.banner__content');
        // hamburger button
        this.hamburger = document.querySelector('.hamburger');
        this.hamburgerBtn = document.querySelector('.hamburger__btn');
        this.hamburgerWrap = document.querySelector('.hamburger__wrap');
        this.body = document.querySelector('body');
        // menu
        this.menu = document.querySelector('.menu');
        // dekorDesktop variable value depend on width of the browser  
        if (innerWidth < 750) {
            this.dekorDesktop = false;
        }
        else {
            this.dekorDesktop = true;
        }
        this.isMenuOpen = false;
    }

    switchDecor = () => {
        // if mobile resolution
        if (this.dekorDesktop) {
            this.bannerDecorRight.src="images/bg-pattern-intro-right-mobile.svg";
            this.bannerDecorLeft.src="images/bg-pattern-intro-left-mobile.svg";
            this.adDecor.src="images/bg-pattern-how-we-work-mobile.svg";
            this.footerDecor.src="images/bg-pattern-footer-mobile.svg";
            this.bannerContent.appendChild(this.bannerDecorLeft);
            this.dekorDesktop = false;
        }
        // if desktop resolution
        else {
            this.bannerDecorRight.src="images/bg-pattern-intro-right-desktop.svg";
            this.bannerDecorLeft.src="images/bg-pattern-intro-left-desktop.svg";
            this.adDecor.src="images/bg-pattern-how-we-work-desktop.svg";
            this.footerDecor.src="images/bg-pattern-footer-desktop.svg";
            this.banner.appendChild(this.bannerDecorLeft);
            this.dekorDesktop = true;
        }
    } 

    changeWidth = () => {    
        if ((innerWidth >= 750 && !this.dekorDesktop) || (innerWidth < 750 && this.dekorDesktop))  {
            this.switchDecor();
        }
    }

    menuSwitcher = () => {
        // if menu is open and user clicked on hamburger icon
        if (this.isMenuOpen) {
            this.hamburgerWrap.classList.remove('hamburger__wrap--open');
            this.hamburgerBtn.classList.remove('hamburger__btn--rotate');
            this.menu.classList.remove('menu--open');
            this.body.classList.remove('body--menu-open');
            this.isMenuOpen = false;
        }
        // if menu is close and user clicked on hamburger icon
        else {
            this.hamburgerWrap.classList.add('hamburger__wrap--open');
            this.hamburgerBtn.classList.add('hamburger__btn--rotate');
            this.menu.classList.add('menu--open');
            this.body.classList.add('body--menu-open');
            this.isMenuOpen = true;
        }
    }

    init() {
       addEventListener('resize', this.changeWidth);
       this.hamburger.addEventListener('click', this.menuSwitcher);
       if (this.dekorDesktop == true) {
        this.bannerDecorRight.src="images/bg-pattern-intro-right-desktop.svg";
        this.bannerDecorLeft.src="images/bg-pattern-intro-left-desktop.svg";
        this.adDecor.src="images/bg-pattern-how-we-work-desktop.svg";
        this.footerDecor.src="images/bg-pattern-footer-desktop.svg";
        this.dekorDesktop = true;
        this.banner.appendChild(this.bannerDecorLeft);
       } 
    }

}

const landing = new Landing();
landing.init();