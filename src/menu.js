$(function () {
    $('.menubtn-open').click(function () {
        $('.menu').fadeIn(210);
        $('.menubtn-open').fadeOut(210);
        $('.menubtn-close').fadeIn(210);
    })
    $('.menubtn-close').click(function () {
        $('.menu').fadeOut(210);
        $('.menubtn-open').fadeIn(210);
        $('.menubtn-close').fadeOut(210);
    });
});

$(function () {
    $('.menu_item').hover(function () {
        $(this).children('a').animate({
            'color': 'rgb(57, 155, 130)'
        }, 120);
    }, function () {
        $(this).children('a').animate({
            'color': '#000'
        }, 120);
    })
})
$(function () {
    $('.menubtn').hover(function () {
        $(this).children('svg').css({
            'stroke': 'rgb(57, 155, 130)'
        }, 120);
    }, function () {
        $(this).children('svg').css({
            'stroke': '#000'
        }, 120);
    })
})