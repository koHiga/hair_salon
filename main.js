$(function($) {
    var pageTop = $('#to_top');    
    pageTop.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 30) {
            pageTop.fadeIn();
        } else {
            pageTop.fadeOut();
        }
    });
    //スクロールしてトップ
    pageTop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});