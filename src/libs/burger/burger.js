$(document).ready(function() {
    const toggleMenu = $(".toggle-menu");
    const sandwich = $(".toggle-menu__sandwich");
    const topMenu =  $(".top-menu");
    const menuParent = $(".menu-item-has-children");

    /* Burger */
    toggleMenu.click(function() {
        sandwich.toggleClass("active");
        topMenu.toggleClass("active");
    });

    menuParent.click(function() {
        $(this).toggleClass("active");
    });
});
