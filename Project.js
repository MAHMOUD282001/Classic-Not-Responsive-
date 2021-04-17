$(function(){
    'use strict';

    var myHeader = $('.header');

    var mySlider = $('.bxslider');

    myHeader.height($(window).height());

    $(window).resize(function(){

        myHeader.height($(window).height());

        mySlider.each(function(){

            $(this).css("paddingTop", ($(window).height() - $(".bxslider li").height()) /2);
    
        })

    })

    //Links Add Active Class

    $('.links li a').on("click",function(){

        $(this).parent().addClass('active').siblings().removeClass('active');
    })

    /* $('.links li').on("mouseleave",function(){

    //     

    //     $(".links li:first-child").addClass('active');

    //     

    //     $(this).removeClass('active');

    //})

    */



    //Adjust BxSlider List Item Center



    mySlider.each(function(){

        $(this).css("paddingTop", ($(window).height() - $(".bxslider li").height()) /2);

    })

    //Trigger The Bx Slider


    mySlider.bxSlider({
        pager: false
    });


    //Smooth Scroll To Services

    $(".links li a").click(function(){

        $('html,body').animate({

            scrollTop: $('#' + $(this).data('value')).offset().top
        },1000)
    })

    //Auto Slider Code

    (function autoSlider(){
        $(".slider .active").each(function(){
            
            if(!$(this).is(":last-child")){

                $(this).delay(3000).fadeOut(1000, function(){

                    $(this).removeClass('active').next().addClass('active').fadeIn();

                    autoSlider();

                })
            }else{

                $(this).delay(3000).fadeOut(1000, function(){

                    $(this).removeClass('active');

                    $(".slider div").eq(0).addClass('active').fadeIn();

                    autoSlider();

        })
    }
})

}());



})


//Trigger mixItUp

var mixer = mixitup('.gallary');

var mixer = mixitup(containerEl);

var mixer = mixitup(containerEl, {
    selectors: {
        target: '.blog-item'
    },
    animation: {
        duration: 300
    }
});


