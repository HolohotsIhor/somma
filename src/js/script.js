@@include('../../node_modules/jquery/dist/jquery.min.js');
@@include('../../node_modules/bootstrap/dist/js/bootstrap.bundle.js');
@@include('../../node_modules/owl.carousel/dist/owl.carousel.min.js');
@@include('../libs/burger/burger.js');
@@include('../libs/scroll-to-top/scroll-to-top.js');

$(document).ready(function(d, w) {
    /* Owl carousel */
    const owl = $(".owl-slider");
    const owlClients = $(".clients__owl-carousel");
    const headerItem = $("#header");
    const subMenu = $(".header__menu .sub-menu");
    const parentMenuItem = $(".menu-item-has-children");
    const isMenuActive = false;

    subMenu.addClass('fadeInLeftBigFast');

    owl.owlCarousel({
        nav: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            960: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });

    owlClients.owlCarousel({
        nav: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            960: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    // When the user scrolls the page, execute myFunction
    w.onscroll = function() {myFunction()};
    const header = d.getElementById("header");
    const logo = d.getElementById("logo");
    const logoLight = d.getElementById("logo-light");
    const sticky = header.offsetTop;

    function myFunction() {
        if (w.pageYOffset > sticky) {
            header.classList.add("sticky");
            logo.classList.add("sticky");
            logoLight.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
            logo.classList.remove("sticky");
            logoLight.classList.remove("sticky");
        }
    }

    /* Scrool animation */
    const addAnimation = (className, addClassName) => {
        $(className).each(function() {
            const imagePos = $(this).offset().top;
            const topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 800) {
                $(this).addClass(`${addClassName}`);
                $(this).css('opacity', '1');
            }
        });
    };

    $(w).scroll(function() {
        addAnimation('.mov', 'fadeIn');
        addAnimation('.mov-left', 'fadeInLeftBig');
        addAnimation('.mov-right', 'fadeInRightBig');
        addAnimation('.mov-bounce', 'bounce');
    });

    /* Burger */
    parentMenuItem.click(function() {
        $(this).toggleClass('active');
        logo.classList.add("sticky");
        logoLight.classList.add("sticky");

        if (!isMenuActive) {
            headerItem.addClass("sticky");
            isMenuActive = true;
        }
    });
}(document, window));
