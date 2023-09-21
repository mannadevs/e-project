"user strict";

// Preloader
$(window).on("load", function () {
    $(".preloader").fadeOut(1000);
});

// Menu Click Event
let trigger = $(".header-trigger");
let dropdown = $(".menu");
if (trigger || dropdown) {
    trigger.each(function () {
        $(this).on("click", function (e) {
            e.stopPropagation();
            dropdown.slideToggle();
            trigger.toggleClass("active");
        });
    });
    dropdown.each(function () {
        $(this).on("click", function (e) {
            e.stopPropagation();
        });
    });
    $(document).on("click", function () {
        if (parseInt(screenSize) < parseInt(991)) {
            dropdown.slideUp();
            trigger.removeClass("active");
        }
    });
}

// Submenu Click Event
$(".menu .menu-item .menu-link").on("click", function (e) {
    if (parseInt(screenSize) < parseInt(991)) {
        $(this).siblings(".sub-menu").slideToggle();
    }
});

//Menu Dropdown
$("ul>li>.sub-menu").parent("li").addClass("has-submenu");

// Detect Screen Size
let screenSize = window.innerWidth;
window.addEventListener("resize", function (e) {
    screenSize = window.innerWidth;
});

// Sticky Menu
var header = document.querySelector(".header");
if (header) {
    window.addEventListener("scroll", function () {
        header.classList.toggle("sticky", window.scrollY > 0);
    });
}

// Scroll To Top Event
var scrollTop = $(".scrollToTop");
$(window).on("scroll", function () {
    if ($(this).scrollTop() < 500) {
        scrollTop.removeClass("active");
    } else {
        scrollTop.addClass("active");
    }
});

// Click event to scroll to top
$(".scrollToTop").on("click", function () {
    $("html, body").animate(
        {
            scrollTop: 0,
        },
        300
    );
    return false;
});

// Banner Slider Part
$(".banner-slider-wrapper").slick({
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    centerMode: false,
    dots: true,
    arrows: true,
    nextArrow: '<i class="las la-arrow-right slick-arrow arrow-right"></i>',
    prevArrow: '<i class="las la-arrow-left  slick-arrowarrow-left"></i> ',
});

if ($(".header-shop-item").length) {
    var headershopToggleBtn = $(".header-shop-toggle-btn");
    var headershopContent = $(".mini-shop-item");
    var headershopCloseBtn = $(".mini-shop-close");
    var body = $("body");

    headershopToggleBtn.on("click", function (e) {
        headershopContent.toggleClass("mini-shop-item-toggle");
        e.stopPropagation();
    });

    headershopCloseBtn.on("click", function (e) {
        headershopContent.removeClass("mini-shop-item-toggle");
        e.stopPropagation();
    });

    body.on("click", function () {
        headershopContent.removeClass("mini-shop-item-toggle");
    })
        .find(headershopContent)
        .on("click", function (e) {
            e.stopPropagation();
        });
}

$(".calculate-shipping-label").on("click", function () {
    $(".calculate-shipping-form").slideToggle(1000);
});

$(".country-list-label").on("click", function () {
    $(".countries-wrapper").slideToggle(1000);
});
