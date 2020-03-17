$(function(){

    //#header 를 모두 선택해서
    $('#header').each(function(){

        let $window = $(window),
            $header = $(this),
            헤더의높이값 = $header.offset().top;

        // 윈도우의 스크롤 이벤트를 모니터링
        // 창이 스크롤 할 때마다 작업을 수행
        $(window).on('scroll', function(){
            // 윈도우의 스크롤 양을 확인하고
            // 헤더의 기본 위치를 지나가면 클래스 부여
            // 그렇지 않으면 삭제
            if( $(window).scrollTop() > 헤더의높이값 ){
                // 참일 때 실행문
                $header.addClass('sticky');
            } else {
                // 그 밖에 아무 조건에 해당하지 않을 경우..
                $header.removeClass('sticky');
            }
        });
    });

    //modal
    // .col1 를 찾아서
    $('.col1').each(function(){

        let $모달 = $('.modal-wrap'),
            $공지사항목록 = $('.col1 .cont li');

        // 공지사항의 2번째 글을 클릭했을 때
        $공지사항목록.eq(1).on('click', function(event){
            event.preventDefault();
            // .modal-wrap에 on 클래스 추가
            $모달.addClass('on');
        })

        // #modal의 button을 클릭했을 때
        $모달.find('button').on('click', function(){
            $모달.removeClass('on');
        })

    })


})