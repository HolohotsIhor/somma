@@include('../../node_modules/jquery/dist/jquery.min.js');
@@include('../../node_modules/bootstrap/dist/js/bootstrap.bundle.js');
@@include('../../node_modules/owl.carousel/dist/owl.carousel.min.js');
@@include('../libs/burger/burger.js');
@@include('../libs/scroll-to-top/scroll-to-top.js');

$(document).ready(function() {
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
});
