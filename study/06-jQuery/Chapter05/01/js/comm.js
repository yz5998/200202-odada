$(function(){
    $('.slideshow').each(function(){

        var $slides = $(this).find('img'), // 모든 슬라이드
            슬라이드개수 = $slides.length,   // 슬라이드 점수
            현재슬라이드 = 0;              // 현재 슬라이드를 나타내는 인덱스

        // 첫번째 슬라이드에 페이드 인으로 표시
        $slides.eq(0).fadeIn();

        function 슬라이드동작(){

            var 다음슬라이드 = (현재슬라이드 + 1) % 슬라이드개수;

            $slides.eq(현재슬라이드).fadeOut();
            $slides.eq(다음슬라이드).fadeIn();


            현재슬라이드 = 다음슬라이드;

        }

        setInterval(슬라이드동작, 5000);

        


    })
})