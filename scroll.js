// pagetopボタンの表示/非表示を制御するスクリプト
$(document).ready(function() {
    var $scroll = $('.scroll');
    var $scrollShow = $('.scroll-show');

    $scroll.hide();

    $(window).on('scroll', function() {
        if ($(this).scrollTop() >= 300) {
            $scroll.fadeIn(500).addClass('scroll-show');
        } else {
            $scroll.fadeOut(500).removeClass('scroll-show');
        }
    });
});

// スムーススクロールのスクリプト
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();

        var target = $(this).attr('href') === '#' ? 0 : $($(this).attr('href')).offset().top;

        $('html, body').animate({ scrollTop: target }, 500);
    });
});
