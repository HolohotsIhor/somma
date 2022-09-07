$(document).ready(function() {
    const scrollUp = $('.scrollup');

    /* Scrool to top */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            scrollUp.fadeIn();
        } else {
            scrollUp.fadeOut();
        }
    });

    scrollUp.click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 0);
        return false;
    });
});