var $indexSilder = $('.banner ._slick ul');

// slick
$($indexSilder).slick({
    cssEase: 'linear',
    adaptiveHeight: true,
    pauseOnHover: false,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    speed: 800,
    arrows: false,
    dots: true,
    fade: true,
    appendDots: $(".banner .dots"),
});

// 檢查是否為影片
var $videoItem = $('.banner ._slick ul .video-item');
var $video_length = $videoItem.length;
var $videoId = $indexSilder.find(".slick-current").attr('data-value');
var $videoApi;
var $firstLoad = 1;

// 檢查是否為safari 
var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

 // 如果是safari的時候把影片上方的span移除
if(is_safari){
    $videoItem.find("span").css("display","none");
    $videoItem.find(".open-box").addClass("safari");
}

// 檢查是否為移動裝置
var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
var device = isAndroid || isiOS
var mobile = device && $(window).width() < 850 

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player = Array();
$state = ""


// 設定影片參數

////////////////////
//      player1   // 
////////////////////
var player1

////////////////////
//      player2   // 
////////////////////
var player2;

window.onYouTubeIframeAPIReady = function() {
    ////////////////////
    //      player1   // 
    ////////////////////
    player1 = new YT.Player("player1", {
        videoId: "wzclxenwTNc",
        playerVars: {
            controls: 0,
            showinfo: 0,
            modestbranding: 1,
            enablejsapi: 1,
            rel: 0,
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });

    ////////////////////
    //      player2   // 
    ////////////////////
    player2 = new YT.Player("player2", {
        videoId: "z-NGwhrfi98",
        playerVars: {
            controls: 0,
            showinfo: 0,
            modestbranding: 1,
            enablejsapi: 1,
            rel: 0,
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
};

function onPlayerReady() {
    $videoApi = '1'; //return youtube api loaded was complele

    if ($videoId == 'video' && $firstLoad === 1 && mobile) {
        //當輪播第一個為影片時且為初始載入網頁

        player1.playVideo();
        $indexSilder.slick('slickPause');
    }
    return $videoApi;
}

// 在影片載入加入動畫
function onPlayerStateChange(event) {

    ////////////////////
    //      player1   // 
    ////////////////////
    if ($indexSilder.find(".slick-current").has("#player1").length === 1) {
        $state1 = player1.getPlayerState();
        switch ($state1) {
            // not yet play
            case 0:
                $(".video-item[data-value=" + $videoId + "]").removeClass('on');
                $indexSilder.slick('slickPlay');
                //$bannerPic.fadeIn(1000);
                break;
                //on play
            case 1:
                $(".video-item[data-value=" + $videoId + "]").addClass('on');
                //$bannerPic.fadeOut(1000);
                break;
        }
    }

    ////////////////////
    //      player2   // 
    ////////////////////
    if ($indexSilder.find(".slick-current").has("#player2").length === 1) {
        $state2 = player2.getPlayerState();
        switch ($state2) {
            // not yet play
            case 0:
                $(".video-item[data-value=" + $videoId + "]").removeClass('on');
                $indexSilder.slick('slickPlay');
                //$bannerPic.fadeIn(1000);
                break;
                //on play
            case 1:
                $(".video-item[data-value=" + $videoId + "]").addClass('on');
                //$bannerPic.fadeOut(1000);
                break;
        }
    }
}



// 當影片在播時slick 把影片暫停
$($indexSilder).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $videoId = $(this).find(".list-item").eq(currentSlide).attr('data-value');
    ////////////////////
    //      player1   // 
    ////////////////////
    $player1 = $(this).find(".list-item").eq(currentSlide).has("#player1").length;
    ////////////////////
    //      player2   // 
    ////////////////////
    $player2 = $(this).find(".list-item").eq(currentSlide).has("#player2").length;
    ////////////////////
    //      player1   // 
    ////////////////////
    if ($videoId = 'video' && $player1 == 1 && !mobile && !is_safari) {
        //偵測若div內容為影片
        player1.pauseVideo();
        $indexSilder.slick('slickPlay');

    }

    ////////////////////
    //      player2   // 
    ////////////////////
    if ($videoId = 'video' && $player2 == 1 && !mobile && !is_safari) {
        player2.pauseVideo();
        $indexSilder.slick('slickPlay');
    }
});


// 當下一個為影片將slick動作暫停 並撥放影片
$($indexSilder).on('afterChange', function(event, slick, currentSlide, nextSlide) {
    $firstLoad = '0';
    $videoId = $(this).find(".list-item").eq(currentSlide).attr('data-value');

    ////////////////////
    //      player1   //
    ////////////////////
    $player1 = $(this).find(".list-item").eq(currentSlide).has("#player1").length;

    ////////////////////
    //      player2   // 
    ////////////////////
    $player2 = $(this).find(".list-item").eq(currentSlide).has("#player2").length;

    ////////////////////
    //      player1   // 
    ////////////////////
    if ($videoId != 'img' && $player1 === 1 && !mobile && !is_safari) { //偵測若div內容為影片
        // $(".video-item[data-value=" + $videoId + "]").addClass('on');
        $indexSilder.slick('slickPause');
        player1.playVideo();
    }

    ////////////////////
    //      player2   // 
    ////////////////////
    if ($videoId != 'img' && $player2 === 1 && !mobile && !is_safari) {
        // $(".video-item[data-value=" + $videoId + "]").addClass('on');
        $indexSilder.slick('slickPause');
        player2.playVideo();
    } else {
        $videoId = 'img';
    }
    return $videoId, $firstLoad;
});



// 當畫面往下滑動會暫停播放影片及slick
$(window).scroll(function() {
    var $scrollTop = $("body, html").scrollTop();
    $player1 = $indexSilder.find(".slick-current").has("#player1").length;
    $player2 = $indexSilder.find(".slick-current").has("#player2").length;

    if ($scrollTop > 75) {

        ////////////////////
        //      player1   //
        ////////////////////
        if ($videoId = 'video' && $player1 === 1 && !mobile && !is_safari) {　
            player1.pauseVideo();
            $indexSilder.slick('slickPause');
        }
        ////////////////////
        //      player2   //
        ////////////////////　
        else if ($videoId = 'video' && $player2 === 1 && !mobile && !is_safari) {　
            player2.pauseVideo();
            $indexSilder.slick('slickPause');　
        }
        // 不是影片 
        else { $indexSilder.slick('slickPause'); }
    } else {

        ////////////////////
        //      player1   //
        ////////////////////
        if ($videoId = 'video' && $player1 === 1 && !mobile && !is_safari) {　　
            player1.playVideo();
            $indexSilder.slick('slickPause');
        }
        ////////////////////
        //      player2   //
        ////////////////////
        else if ($videoId = 'video' && $player2 === 1 && !mobile && !is_safari) {　
            player2.playVideo();
            $indexSilder.slick('slickPause');
        } else {
            $indexSilder.slick('slickPlay');
        }
    }
});


//行動瀏覽器為點選播放{
$(".open-box").click(function() {
    $indexSilder.slick('slickPause');

    $("body").append('<div class="videoLibox"><iframe src="" frameborder="0"></iframe><div class="liboxClose"><span></span></div></div>');
    // 擷取影片id
    var id = $(this).data("videoid");
    // 網址重組
    var href = "https://www.youtube.com/embed/" + id + "?rel=0;autoplay=1"
    // 塞入網址
    $(".videoLibox iframe").attr("src", href);
    // 加入開啟動畫
    $(".videoLibox").addClass("open");
    // 關閉燈箱
    $(".videoLibox .liboxClose").click(function() {
        videoLiboxClose();
    });
    // 點選黑色部分關閉燈箱
    $(document).click(function(e) {
        if ($(e.target).hasClass("videoLibox")) {
            videoLiboxClose();
        }
    });
});

function videoLiboxClose() {
    $(".videoLibox").removeClass("open");
    $(".videoLibox").addClass("close");
    setTimeout(function() {
        $(".videoLibox").remove();
        $indexSilder.slick('slickPlay');
    }, 1000);

}