$(document).ready(function() {
    const scrollUp = $('.scrollup');

    /* Scrool animation */
    const addAnimation = (className, addClassName) => {
        $(className).each(function() {
            const imagePos = $(this).offset().top;
            const topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 800) {
                $(this).addClass(`${addClassName} animated`);
                $(this).css('opacity', '1');
            }
        });
    };

    $(window).scroll(function() {
        addAnimation('.mov', 'fadeInLeft');
        addAnimation('.movIn', 'zoomInRight');
    });

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