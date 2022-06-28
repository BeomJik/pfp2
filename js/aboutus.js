$(document).ready(function(){

    // title 글씨 슬라이드
    $("#title h2.h2").addClass("up");
    $("#title p.h3").addClass("up");

    // 대메뉴 크런트
    $("header ul.gnb li h2.h4:eq(0)").addClass("current");

    // 변수
    windowH = $(window).height();
    mainTop = $("main").offset().top;
    titleH = $("#title").innerHeight();
    mainsectionTop = $("main section:eq(1)").offset().top;
    foundingH = $("main #founding").innerHeight();
    medicineH = $("main #medicine").innerHeight();
    laboratoryH = $("main #laboratory").innerHeight();
    informationH = $("main #information").height();
    informationTop = $("main #information").offset().top;
    overviewH = $("main #overview").height();
    overviewTop = $("main #overview").offset().top;
    greetingsH = $("main #greetings").height();
    greetingsTop = $("main #greetings").offset().top;
    // 스크롤 이벤트
    $(window).scroll(function(){
        
        windowTop = $(window).scrollTop();
        // 스크롤 내리면  대메뉴 색 변경
        if(windowTop >= titleH / 5 ){
            $("header").addClass("white");
            $("header a").addClass("white");
        }
        if(windowTop <= titleH / 5 ){
            $("header").removeClass("white");
            $("header a").removeClass("white");
        }
        // 스크롤 내리면 대메뉴 올라감
        if(windowTop >= mainsectionTop / 3 ){
            $("header").addClass("slideHeader");
        }
        if(windowTop <= mainsectionTop / 3){
            $("header").removeClass("slideHeader");
        }
                    
        // 1974 진입시 글씨 up, 이미지 small
            if(windowTop >= foundingH / 3 ){
            $("main #founding .left").addClass("up");
            $("main #founding img").addClass("small");
        }
        if(windowTop <= foundingH / 3 ){
            $("main #founding .left").removeClass("up");
            $("main #founding img").removeClass("small");   
        }

        // 1991 진입시 글씨 up, 이미지 small
        if(windowTop >= foundingH + medicineH / 3 ){
            $("main #medicine .left").addClass("up");
            $("main #medicine img").addClass("small");
        }
        if(windowTop <= foundingH + medicineH / 3 ){
            $("main #medicine .left").removeClass("up");
            $("main #medicine img").removeClass("small");   
        }

        // 2006 진입시 글씨 up, 이미지 small
        if(windowTop >= foundingH + medicineH + laboratoryH / 3 ){
            $("main #laboratory .left").addClass("up");
            $("main #laboratory img").addClass("small");
        }
        if(windowTop <= foundingH + medicineH + laboratoryH / 3 ){
            $("main #laboratory .left").removeClass("up");
            $("main #laboratory img").removeClass("small");   
        }

        if(windowTop >= titleH + foundingH / 4 ){
            // 1974 투명해짐
            $("main #founding").addClass("clear"); 
        }
        if(windowTop <= titleH + foundingH / 4 ){  
            // 투명 해제
            $("main #founding").removeClass("clear");
        }

        if(windowTop >= titleH + foundingH + medicineH / 4 ){
            // 1991 투명해짐
            $("main #medicine").addClass("clear"); 
        }
        if(windowTop <= titleH + foundingH + medicineH / 4 ){  
            // 투명 해제
            $("main #medicine").removeClass("clear");
        }

        if(windowTop >= titleH + foundingH + medicineH + laboratoryH/ 4 ){
            // 2006 투명해짐
            $("main #laboratory").addClass("clear"); 
        }
        if(windowTop <= titleH + foundingH + medicineH + laboratoryH/ 4 ){  
            // 투명 해제
            $("main #laboratory").removeClass("clear");
        }

        // 회사정보
        if(windowTop >= informationTop - informationH ){
            // 회사정보 진입시 배경, 글씨 색 변경
            $("body").addClass("white");
        }
        if(windowTop <= informationTop - informationH ){
            // 회사정보 이탈시 배경, 글씨 색 변경 해제
            $("body").removeClass("white");

        }

        // 사업개요
        if(windowTop >= overviewTop - overviewH ){
            // 사업개요 진입시 배경, 글씨 색 변경
            $("body").addClass("white");
        }
        if(windowTop <= overviewTop - overviewH ){
            // 사업개요 이탈시 배경, 글씨 색 변경 해제
            $("body").removeClass("white");
        }

        // 대표 인사말
        if(windowTop >= greetingsTop - greetingsH ){
            // 대표 인사말 진입시 배경, 글씨 색 변경
            $("body").addClass("white");
        }
        if(windowTop <= greetingsTop - greetingsH ){
            // 대표 인사말 이탈시 배경, 글씨 색 변경 해제
            $("body").removeClass("white");
        }
    });

});