$(document).ready(function() {
    const toggleMenu = $(".toggle-menu");
    const sandwich = $(".toggle-menu__sandwich");
    const topMenu =  $(".top_mnu");
    const topText = $(".top_text");

    /* Burger */
    toggleMenu.click(function() {
        sandwich.toggleClass("active");
    });
    /* Burger. Hover */
    toggleMenu.click(function() {
        topMenu.fadeOut(300);
        sandwich.toggleClass("active");
        topText.css("opacity", "1");
    });

    /* Burger. Open and close */
    toggleMenu.click(function() {
        if (topMenu.is(":visible")) {
            topText.css("opacity", "1");
            topMenu.fadeOut(300);
            sandwich.removeClass("active");
        } else {
            topText.css("opacity", ".1");
            topMenu.fadeIn(300);
            sandwich.addClass("active");
        }
    });
});