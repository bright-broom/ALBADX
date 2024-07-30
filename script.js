// jQueryが読み込まれていることを確認する
$(document).ready(function() {
    // スムーズスクロール機能
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    // ページトップに戻るボタンの表示・非表示
    var $scrollButton = $('.scroll');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $scrollButton.fadeIn();
        } else {
            $scrollButton.fadeOut();
        }
    });

    // ページトップに戻る
    $scrollButton.on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 1000);
    });

    // コンタクトフォームのバリデーション
    $('.Form-Btn').on('click', function(event) {
        var isValid = true;
        $('.Form-Item-Input, .Form-Item-Textarea').each(function() {
            if ($(this).val() === '') {
                isValid = false;
                $(this).css('border-color', 'red');
            } else {
                $(this).css('border-color', '#ddd');
            }
        });
        if (!isValid) {
            event.preventDefault();
            alert('全ての必須項目を入力してください。');
        }
    });
});
