$(function(){
    $('#typo')
    .on('mouseenter', function(){
        $(this).stop().animate({
            color: '#cea9e5',
            backgroundColor : '#ae5e9b',
            fontSize : '50px'
        }, 1500, 'linear');
        $('header').css('color','#ae5e9b');
    })
    .on('mouseleave', function(){
        $(this).stop().animate({
            color: '#fff',
            backgroundColor : '#3498db',
            fontSize : '110px'
        });
        $('header').css('color','#000');
    });

    
})