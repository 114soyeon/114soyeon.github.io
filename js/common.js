$(function(){
    // 스크롤시 헤더 색 변경
    var $header = $('header');

    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $header.addClass('scroll');
        }else{
            $header.removeClass('scroll');
        }
    });

    // gnb    
    $('.gnb a').on('click', function(e){
        e.preventDefault();

        var target = $(this).attr('href');
        var headerH = $('header').outerHeight();

        $('html, body').stop().animate({
            scrollTop: $(target).offset().top - headerH
        }, 700);
    });

    // skills 슬라이드
    var swiper = new Swiper(".swiper.skill", {
        slidesPerView: "auto",
        spaceBetween: 20,
        loop: true,
        speed: 4000,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        allowTouchMove: false, 
        breakpoints: {
            400: { 
                slidesPerView: 3,
                spaceBetween: 30
            },
            640: { 
                slidesPerView: 4
            },
            800: { 
                slidesPerView: 5,
                spaceBetween: 50
            },
            1400: {
                slidesPerView: 6,
                spaceBetween: 70
            }
        }		
    });

    // works 슬라이드
    var swiper2 = new Swiper(".swiper.works", {
        spaceBetween: 100,
        slidesPerView: 'auto',
        centeredSlides: true, 
        loop: true,
        autoplay: {
            delay: 5000,
        },
    });

    var swiper3 = new Swiper(".swiper.second", {
        spaceBetween: 100,
        slidesPerView: 'auto',
        centeredSlides: true, 
        loop: true,
        autoplay: {
            delay: 5000,
        },
    });

    // 탑버튼
    $("#top_btn").click(function() { 
		$('html, body').animate({ scrollTop : 0
		}, 500);
	});
});