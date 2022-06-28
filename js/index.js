$(function(){

    // 변수
    mainTop = $("main").offset().top;
    mainBusinessTop = $("main section:eq(1)").offset().top;
    pharmaceuticals = $("main #pharmaceuticals");
    trade = $("main #trade");
    tradeBusiness1 = $("main #trade hgroup h2.h2:eq(0)");
    tradeBusiness2 = $("main #trade hgroup h2.h2:eq(1)");
    pharmaceuticalsBusiness1 = $("main #pharmaceuticals hgroup h2.h2:eq(0)");
    pharmaceuticalsBusiness2 = $("main #pharmaceuticals hgroup h2.h2:eq(1)");
    more = $("main #trade .more, main #pharmaceuticals .more");

    // 타이틀 애니메이션
    $("#title .slide .t"+tSN).children().not("iframe").addClass("slideUp");
    var tSN= $(".swiper-pagination-bullet-active").index() + 1;
    $("#title .slide .t"+tSN).siblings().children().not("iframe").removeClass("slideUp");
    $("#title .slide .t"+tSN).children().not("iframe").addClass("slideUp");
    setInterval(titleAni,0);
    function titleAni () {
        tSN= $(".swiper-pagination-bullet-active").index() + 1;
        $("#title .slide .t"+tSN).siblings().children().not("iframe").removeClass("slideUp");
        $("#title .slide .t"+tSN).children().not("iframe").addClass("slideUp");
    }

    // 사업부분 제목 클릭시 위치 이동
    $(tradeBusiness1).click(function(){
        $("html,body").animate({scrollTop : mainBusinessTop + 50 });
        return false;
    });
    $(tradeBusiness2).click(function(){
        $("html,body").animate({scrollTop : mainBusinessTop + 50 });
        return false;
    });
    $(pharmaceuticalsBusiness1).click(function(){
        $("html,body").animate({scrollTop : mainBusinessTop + 50 });
        return false;
    });
    $(pharmaceuticalsBusiness2).click(function(){
        $("html,body").animate({scrollTop : mainBusinessTop + 50 });
        return false;
    });

    // 제약사업 부분 hide
    $(pharmaceuticals).hide();
    // 무역사업 제목 addclass
    $(tradeBusiness1).addClass("red");

    // 무역사업 부분 제목 클릭시 show 및 addClass, 제약사업 hide 및 removeClas
    $(pharmaceuticalsBusiness1).click(function(){
        $(pharmaceuticals).hide();
        $(trade).show();
        $(tradeBusiness1).addClass("red");
        $(pharmaceuticalsBusiness2).removeClass("blue");
        $(more).removeClass("blue");
        $(more).addClass("red");
        return false;
    });
    // 제약사업 부분 제목 클릭시 show 및 addClass, 제약사업 hide 및 removeClas .more
    $(tradeBusiness2).click(function(){
        $(trade).hide();
        $(pharmaceuticals).show();                
        $(pharmaceuticalsBusiness2).addClass("blue");
        $(tradeBusiness1).removeClass("red");
        $(more).removeClass("red");
        $(more).addClass("blue");
        return false;
    });

//<!-- 타이틀 슬라이드 -->
    var swiper = new Swiper("#title .swiper", {            
        effect: "fade",
        loop: true,
        navigation: {
            nextEl: "#title .swiper-button-next",
            prevEl: "#title .swiper-button-prev",
        },
        pagination: {
            el: "#title .swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
    });
//<!-- 나아갑니다 슬라이드 -->
    var swiper = new Swiper("#go .swiper", {            
        effect: "fade",
        loop: true,
        fadeEffect: { 
            crossFade: true 
        },
        navigation: {
            nextEl: "#go .swiper-button-next",
            prevEl: "#go .swiper-button-prev",
        },
        pagination: {
            el: "#go .swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
//<!-- 나아갑니다 -->
    // 번호 카운트
    $("#go .goSlideBtnA").after("<div class='count'><span class='cCount'></span><span class='tCount'></span></div>");

    var cNumber = $("#go .swiper-pagination-bullet-active").index() + 1;
    // 전체 카운트
    $(".tCount").text("0"+$("#go .swiper-pagination-bullet").length);
    // 카운트 증가
    $("#go .cCount").text("0"+cNumber);
    
    setInterval(goCount,0);
    function goCount (){
        var cNumber = $("#go .swiper-pagination-bullet-active").index() + 1;
        // 카운트 증가
        $("#go .cCount").text("0"+cNumber);
    }
});
