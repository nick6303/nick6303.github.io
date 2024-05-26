var $indexSilder = $('.single-item');
//var $bannerPic = $(".video-slider .mask");


function youtubeSlick(){
if($indexSilder.is(":visible")){
    // slick
    $indexSilder.slick({
        arrows:false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        dots: true,
        fade:true
    });


    // 檢查是否為影片
    var $videoItem = $('.single-item .video-item');
    var $video_length = $videoItem.length;
    var $videoId = $indexSilder.find(".slick-current").attr('data-value');
    var $videoApi;
    var $firstLoad = 1;

    // // 檢查是否為safari 
    var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

    // // 如果是safari的時候把影片上方的span移除
    if (is_safari) {
        $videoItem.find("span").css("display", "none");
        $videoItem.find(".open-box").addClass("safari");
    }



    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var playerArray = new Array

    // // 設定影片參數
    for (var i = 0; i < $videoItem.length; i++) {
        $videoItem.eq(i).find(".videoBox").attr("id", ("player" + (i + 1)))
        $videoItem.eq(i).attr("data-numb", i);
        var varName = "player" + (i + 1)
        playerArray[i] = eval(varName = "")
    }


    window.onYouTubeIframeAPIReady = function () {
        for (var i = 0; i < $videoItem.length; i++) {
            var id = "player" + (i+1)
            var videoId =  $videoItem.eq(i).find(".videoBox").attr("data-videoId")
            playerArray[i] = new YT.Player(id, {
                videoId: videoId,
                playerVars: {
                    'controls': 0,
                    'disablekb':1,
                    'showinfo': 0,
                    'modestbranding': 1,
                    'enablejsapi': 0,
                    'rel': 0,
                },
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            });
        }
    };



    function onPlayerReady() {
        $videoApi = '1'; //return youtube api loaded was complele
        if($videoId == 'video' && $firstLoad === 1 && $("body").hasClass("guide")){
            //當輪播第一個為影片時且為初始載入網頁
            playerArray[0].playVideo();
            $indexSilder.slick('slickPause');
        } else if ($videoId == 'video' && $firstLoad === 1 && !mobile()) {
            //當輪播第一個為影片時且為初始載入網頁
            playerArray[0].playVideo();
            $indexSilder.slick('slickPause');
        }else if ($videoId == 'video' && $firstLoad === 1 && mobile()){
            // playerArray[0].playVideo();
            $indexSilder.slick('slickNext');
        }
        return $videoApi;
    }

    function onPlayerStateChange(event) {
        if ($indexSilder.find(".slick-current").hasClass("video-item")) {
            var numb = $indexSilder.find(".slick-current").attr("data-numb");
            var state = playerArray[numb].getPlayerState();
            // 播放結束
            if(state==0){
                $indexSilder.slick('slickPlay');
                $indexSilder.slick('slickNext');
                playerArray[numb].stopVideo();
            }else if (state==1 && mobile() && !$("body").hasClass("guide")){
                $indexSilder.slick('slickPause');
            }
        }
    }


    // 當影片在播時slick 把影片暫停
    $($indexSilder).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $videoId = $(this).find(".slick-current").attr('data-value');
        var numb = $(this).find(".slick-current").attr("data-numb");
        
        if($videoId == 'video' && $("body").hasClass("guide")){
            //偵測若div內容為影片
            playerArray[numb].pauseVideo();
            $indexSilder.slick('slickPlay');
        }else if ($videoId == 'video' && !mobile() && !is_safari) {
            //偵測若div內容為影片
            playerArray[numb].pauseVideo();
            $indexSilder.slick('slickPlay');
        }else if($videoId == 'video' && mobile()){
            $indexSilder.slick('slickPlay');
            playerArray[numb].stopVideo();
        }
    });


    // 當下一個為影片將slick動作暫停 並撥放影片
    $($indexSilder).on('afterChange', function (event, slick, currentSlide, nextSlide) {
        $firstLoad = '0';
        $videoId = $(this).find(".item").eq(currentSlide).attr('data-value');
        var numb = $(this).find(".slick-current").attr("data-numb")
        //偵測若div內容為影片
        if ($videoId !== 'img' && $("body").hasClass("guide")){
            $indexSilder.slick('slickPause');
            playerArray[numb].playVideo();
        }else if ($videoId !== 'img' && !mobile() && !is_safari) { 
            // $(".video-item[data-value=" + $videoId + "]").addClass('on');
            $indexSilder.slick('slickPause');
            playerArray[numb].playVideo();
        }
        else if($videoId !== 'img' && mobile()){
            // playerArray[numb].playVideo();
        }else {
            $videoId = 'img';
        }
        return $videoId, $firstLoad;
    });
    }
}

// 當畫面往下滑動會暫停播放影片及slick
// $(window).scroll(function () {
//     var $scrollTop = $("body, html").scrollTop();
//     var numb = $indexSilder.find(".slick-current").attr("data-numb")

//     if ($scrollTop > 75) {

//         if ($videoId = 'video' && !mobile && !is_safari) {
//             playerArray[numb].pauseVideo();
//             $indexSilder.slick('slickPause');
//         }
//         // 不是影片 
//         else {
//             $indexSilder.slick('slickPause');
//         }
//     } else {

//         if ($videoId = 'video' && !mobile && !is_safari) {
//             playerArray[numb].playVideo();
//             $indexSilder.slick('slickPause');
//         }
//         else {
//             $indexSilder.slick('slickPlay');
//         }
//     }
// });


//行動瀏覽器為點選播放{
// $(".open-box").click(function() {
//     $indexSilder.slick('slickPause');
//     $("body").append('<div class="videoLibox"><iframe src="" frameborder="0"></iframe><div class="liboxClose"><span></span></div></div>');
//     // 擷取影片id
//     var id = $(this).data("videoid");
//     // 網址重組
//     var href = "https://www.youtube.com/embed/" + id + "?rel=0;autoplay=1"
//     // 塞入網址
//     $(".videoLibox iframe").attr("src", href);
//     // 加入開啟動畫
//     $(".videoLibox").addClass("open");

//     // 關閉燈箱
//     $(".videoLibox .liboxClose").click(function() {
//         videoLiboxClose();
//     });

//     // 點選黑色部分關閉燈箱
//     $(document).click(function(e) {
//         if ($(e.target).hasClass("videoLibox")) {
//             videoLiboxClose();
//         }
//     });

// });

// function videoLiboxClose() {
//     $(".videoLibox").removeClass("open");
//     $(".videoLibox").addClass("close");
//     setTimeout(function() {
//         $(".videoLibox").remove();
//         $indexSilder.slick('slickPlay');
//     }, 1000);

// }