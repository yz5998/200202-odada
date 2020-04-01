$(function(){
    $('#typo')
    .on('mouseenter', function(){
        $(this).animate({
            color: '#cea9e5',
            backgroundColor : '#ae5e9b',
            fontSize : '50px'
        }, 1500, 'linear');
        $('header').css('color','#ae5e9b');
    })
    .on('mouseleave', function(){
        $(this).animate({
            color: '',
            backgroundColor : '',
            fontSize : ''
        });
        $('header').css('color','#000');
    });

    
})