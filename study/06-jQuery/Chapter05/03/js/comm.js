$(function(){

    $('.page-header').each(function(){

        let $window = $(window),
            $header = $(this),
            헤더위치 = $header.offset().top;

        $window.on('scroll', function(){

            console.log(`윈도우의 스크롤 값 : ${$window.scrollTop()}`);
            console.log(`헤더의 위치 값 : ${$header.offset().top}`);

            // 만약 윈도우의 스크롤 값이 헤더의 위치값보다 커지면 
            if ($window.scrollTop() > 헤더위치) {
                // header에 .sticky 붙여준다.
                $header.addClass('sticky');
            }else{
                // 그 밖의 경우
                // header에 .sticky 빼준다.
                $header.removeClass('sticky');
            }
        });

        // 윈도우의 스크롤 이벤트를 발생시키는
        // (헤더의 초기 위치를 조정)
        $window.trigger('scroll');
    })

})