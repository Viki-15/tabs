(function ($) {
    $(function () {

        $('ul.tabs-caption').on('click', 'li:not(.active)', function () {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs-content').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
})(jQuery);

$(function () {
    let $a = $('#comment_rating a');
    $a.click(function (event) {
        event.preventDefault();
        $a.removeClass('rating');
        $(this).addClass('rating');
    })
});

let count = $(('#count'));
$({
    Counter: 0
}).animate({
    Counter: count.text()
}, {
    duration: 3000,
    easing: 'linear',
    step: function () {
        count.text((this.Counter).toFixed(1));
    }
});