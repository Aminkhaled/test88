$(document).ready(function () {
    $(window).scroll(function (){
        var scroll = $(window).scrollTop();
        if(scroll > 100){
            $('#nav').css('background','#fff')
            $('#nav-mobile').css('background','#fff')
        }else {
            $('#nav').css('background','rgba(255,255,255,0.6)')
            $('#nav-mobile').css('background','rgba(255,255,255,0.6)')

        }
    })
    new WOW().init();

    $('.icon-span').click(function (e){
        e.defaultPrevented;
        $('.nav-bottom-mobile').toggleClass('activee');
        $('.icon-span i').toggleClass('fa-times')
    });
    $('.current-lang').click(function (e){
        e.defaultPrevented;
        $('.lang-dropdown').toggleClass('activee');

    });

})
