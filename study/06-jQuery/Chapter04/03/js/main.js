$(function(){
    // 
    var duration = 300;

    let $btn = $('#buttons2 button');

    // buttons2 ----------------------------------------
    $btn.each(function(index){
        // var pos = Math.random() * 80 - 40;
        var pos = index * 40 - 40;
        $(this).css('top', pos);
    })
    .on('mouseover', function(){
        $(this).stop(true).animate({
            backgroundColor: '#faee00',
            color: '#000'
        }, duration);
        $(this).find('img:first-child').stop(true).animate({opacity: 0}, duration);
        $(this).find('img:nth-child(2)').stop(true).animate({opacity: 1}, duration);
    })
    .on('mouseout', function(){
        $(this).stop(true).animate({
            backgroundColor: '#fff',
            color: '#01b169',
        }, duration);
        $(this).find('img:first-child').stop(true).animate({opacity: 1}, duration);
        $(this).find('img:nth-child(2)').stop(true).animate({opacity: 0}, duration);
    });


});
