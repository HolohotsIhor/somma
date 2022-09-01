@@include('../../node_modules/jquery/dist/jquery.min.js');
@@include('../../node_modules/bootstrap/dist/js/bootstrap.bundle.js');
@@include('../../node_modules/owl.carousel/dist/owl.carousel.min.js');
@@include('../libs/burger/burger.js');
@@include('../libs/scroll-to-top/scroll-to-top.js');

$(document).ready(function(d) {
    /* Owl carousel */
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        nav: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 100000,
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

    // When the user scrolls the page, execute myFunction
    window.onscroll = function() {myFunction()};
    const header = d.getElementById("header");
    const logo = d.getElementById("logo");
    const logoLight = d.getElementById("logo-light");
    const sticky = header.offsetTop;

    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
            logo.classList.add("sticky");
            logoLight.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
            logo.classList.remove("sticky");
            logoLight.classList.remove("sticky");
        }
    }
}(document));