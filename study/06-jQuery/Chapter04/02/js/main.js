$(function(){
    // 
    var duration = 300;

    // images ----------------------------------------
    var $images = $('#images p');

    // images 첫번째 이미지
    $images.filter(':nth-child(1)')
        .on('mouseover', function(){
            $(this).find('strong, span').stop(true).animate({opacity: 1}, duration);
        })
        .on('mouseout', function(){
            $(this).find('strong, span').stop(true).animate({opacity: 0}, duration);
        });

    // images 두번째 이미지
    $images.filter(':nth-child(2)')
        .on('mouseover', function(){
            $(this).find('strong').stop(true).animate({opacity: 1, left: '0%'}, duration);
            $(this).find('span').stop(true).animate({opacity: 1}, duration);
        })
        .on('mouseout', function(){
            $(this).find('strong').stop(true).animate({opacity: 0, left: '-200%'}, duration);
            $(this).find('span').stop(true).animate({opacity: 0}, duration);
        });

    // images 세번째 이미지
    $images.filter(':nth-child(3)')
        .on('mouseover', function(){
            $(this).find('strong').stop(true).animate({bottom: '0px'}, duration);
            $(this).find('span').stop(true).animate({opacity: 1}, duration);
            $(this).find('img').stop(true).animate({top: '-20px'}, duration * 1.3);
        })
        .on('mouseout', function(){
            $(this).find('strong').stop(true).animate({bottom: '-80px'}, duration);
            $(this).find('span').stop(true).animate({opacity: 0}, duration);
            $(this).find('img').stop(true).animate({top: '0px'}, duration);
        });

});
