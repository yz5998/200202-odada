$(function(){

    // 변수 설정
    let $btn = $('#buttons1 button'),
        duration = 300,
        easing = 'swing';


    //1행
    // filter() 형제 요소 중에서 검색
    $btn.filter(':nth-child(-n+4)')
    .on('mouseover', function(){
        $(this).stop().animate({
            backgroundColor : '#ae5e9b',
            color : '#fff'
        }, duration, easing)
    })
    .on('mouseout', function(){
        $(this).stop().animate({
            backgroundColor : '#fff',
            color : '#ebc000'
        }, duration, easing)
    });

    // 2행
    $btn.filter(':nth-child(n+5):nth-child(-n+8)')
    .on('mouseover', function(){
        $(this).stop().animate({
            borderWidth : '10px',
            color : '#ae5e9b'
        }, duration, easing)
    })
    .on('mouseout', function(){
        $(this).stop().animate({
            borderWidth : '0px',
            color : '#ebc000'
        }, duration, easing)
    });

    //3행
    $btn.filter(':nth-child(n+9)')
    .on('mouseover', function(){
        // find()는 자식요소에서 검색
        $(this).find('.bg').stop().animate({
            width : '100%'
        }, duration, easing)
    })
    .on('mouseout', function(){
        // find()는 자식요소에서 검색
        $(this).find('.bg').stop().animate({
            width : '0%'
        }, duration, easing)
    });

})