$(window).resize(function(){
    let winW = $(window).width();  // 브라우저의 가로길이를 변수에 
    console.log('브라우저 가로길이?', winW);

    if( winW > 1023 && $('.menu_container').is(':hidden')){
        console.log('.menu_container가 안보여요');
        $('.menu_container').removeAttr('style');
    };
});

/** 스크롤이 되면 헤더 배경색 추가 **/
$(window).scroll(function(){
    $('#header_wrap').addClass('scroll');

    if($(window).scrollTop() == 0){   // .scrollTop()  : 스크롤바 위치를 알아오거나 정함
        $('#header_wrap').removeClass('scroll');
    }
});

/** 모바일 버전 : 햄버거 버튼 X 변경, 메뉴보임 **/
$('.m_menuBtn').click(function(){
    $('.m_menuBtn').toggleClass('on');

    $('.menu_container').fadeToggle();

});

// $('.m_menuBtn').click(function(){
//     $('.m_menuBtn').toggleClass('on');

//     if(().()){

//     } else {

//     }

// });



