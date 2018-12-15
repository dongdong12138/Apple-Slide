var $buttons = $('.image-small > a')
for (var i = 0; i < $buttons.length; i ++) {
    $($buttons[i]).on('click', (e) => {
        var index = $(e.currentTarget).index()
        $('.image-wrapper').css({
            transform: 'translateX(-'+ index*920 +'px)'
        })
        $(e.currentTarget).addClass('active')
            .siblings('.active').removeClass('active')
    })
}

$('.wrapper').on('click', (e) => {
    e.stopPropagation()
})

$(document).on('click', () => {
    $('.image-small > a').removeClass('active')
})