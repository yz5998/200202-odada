$(function(){

    //  변수 설정
    let $imgs = $('#images p'),
        duration = 300;

    // 첫번째 이미지
    $imgs.filter(':first-child')
    .on('mouseover',function(){
        $(this).find('strong, span').stop().animate({
            opacity : 1
        },duration)
    })
    .on('mouseout',function(){
        $(this).find('strong, span').stop().animate({
            opacity : 0
        },duration)
    });

    //두번째 이미지
    $imgs.filter(':nth-child(2)')
    .on('mouseover', function(){
        $(this).find('strong').stop().animate({
            left : 0,
            opacity : 1
        }, duration);
        $(this).find('span').stop().animate({
            opacity : 1
        }, duration)
    })
    .on('mouseout', function(){
        $(this).find('strong').stop().animate({
            left : '-200%',
            opacity : 0
        }, duration);
        $(this).find('span').stop().animate({
            opacity : 0
        }, duration)
    });

    // 세번째 이미지
    $imgs.filter(':last-child')
    .on('mouseover', function(){
        $(this).find('strong').stop().animate({
            bottom : 0
        }, duration);
        $(this).find('span').stop().animate({
            opacity : 1
        }, duration);
        $(this).find('img').stop().animate({
            top: '-20px'
        });
    })
    .on('mouseout', function(){
        $(this).find('strong').stop().animate({
            bottom : '-80px'
        }, duration);
        $(this).find('span').stop().animate({
            opacity : 0
        }, duration);
        $(this).find('img').stop().animate({
            top: '0'
        });
    });


})