$(function(){
    // 각 article에 마우스호버시 영상 재생
    $('.content article').mouseover(function(){
        $(this).find('video').get(0).play();
        // 제이쿼리에서는 비디오를 직접 컨트롤 할 수 없기 때문에,
        // 컨트롤을 위한 비디오를 호출해야한다. get(index)사용!
    }).mouseout(function(){
        $(this).find('video').get(0).pause();
    });

    // 각 article 클릭시 영상소개 보이기
    $('.content article').click(function(){
        let titText = $(this).find('h2').text();
        let contText = $(this).find('p').text();
        let vidSrc = $(this).find('video').attr('src');

        // console.log(titText);
        // console.log(contText);
        // console.log(vidSrc);
        $('.intro h2').text(titText);
        $('.intro p').text(contText);
        $('.intro video').attr({'src' : vidSrc});

        // 영상이 보이도록 : .intro에 on클래스명이 추가되도록
        $('.intro').addClass('on');

        // 영상 재생 되도록
        $('.intro video').get(0).play();

    });

    // close click
    $('.intro button').click(function(){
        $('.intro').removeClass('on');
        $('.intro video').get(0).pause();
    });


    // 프로필 show
    $('.header-button').click(function(){
        $('.about').addClass('on');
    });

    // 프로필 close
    $('.about button').click(function(){
        $('.about').removeClass('on');
    });

    

    // address show
    $('.header-button2').click(function(){
        $('.address').addClass('on');
    });

    // address close
    $('.address button').click(function(){
        $('.address').removeClass('on');
    });
    //////////////////////

});