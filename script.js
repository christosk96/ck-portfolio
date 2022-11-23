document.addEventListener('DOMContentLoaded', function () {


    ///// portfolio slider /////
    var numberOfSlides = document.querySelectorAll('.swiper-slide').length;
    new Swiper('.swiper', {
        loop: false,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 16,
            },
            701: {
                slidesPerView: 2,
                spaceBetween: 32,
            },
            1151: {
                slidesPerView: 3,
                spaceBetween: 56,
            }
        },
        navigation: {
            nextEl: '.portfolio__slide .portfolio__slide-right',
            prevEl: '.portfolio__slide .portfolio__slide-left',
        }
    })


    ///////////////STICKY MENU////////////////////////
    var menu = document.getElementsByClassName("header")[0];
    if (window.pageYOffset >= 32) { // fix middle load page issue
        menu.classList.add('header__sticky');
    }
    var lastScroll = 0;
    window.addEventListener("scroll", function () {
        var currentScroll = window.pageYOffset;
        if (currentScroll <= 32) {
            menu.classList.remove('header__sticky');
            return;
        } else {
            menu.classList.add('header__sticky');
        }
        lastScroll = currentScroll;
    })

    ///// DARK THEME /////
    var prevActiveTheme = localStorage.getItem("theme-color");
    document.documentElement.setAttribute("data-theme", prevActiveTheme ? prevActiveTheme : "light");
    var themeToggle = document.getElementsByClassName('color__toggle')[0];
    themeToggle.onclick = function () {
        var currentTheme = document.documentElement.getAttribute("data-theme");
        var switchToTheme = currentTheme === "dark" ? "light" : "dark";
        localStorage.setItem("theme-color", switchToTheme)
        document.documentElement.setAttribute("data-theme", switchToTheme);
    }

    // Back to top
    var trigger = document.getElementsByClassName('header__logo', 'home')[0];
    trigger.onclick = function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // ACTIVE SECTION
    var sections = document.querySelectorAll("section");
    var navLi = document.querySelectorAll(".header .header__nav .header__nav-links li");
    window.onscroll = function () {
        var current = "";
        sections.forEach((section) => {
            var sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 400) {
                current = section.getAttribute("id");
            }
        });
        navLi.forEach((li) => {
            li.classList.remove("active");
            if (li.classList.contains(current)) {
                li.classList.add("active");
            }
        });
    }

    //// AOS ANIMATION ////////
    AOS.init({
        once: true,
        offset: 10,
        duration: 600,
        easing: 'cubic-bezier(0.42, 0, 0.12, 1.28)'
    })


    //////////MOBILE MENU////////////
    var mobileMenuToggle = document.getElementsByClassName('mobile__toggle')[0];
    mobileMenuToggle.onclick = function () {
        document.querySelector(".header__nav").classList.toggle('active');
    }
});