var tag = document.createElement('script')
tag.src = 'https://www.youtube.com/player_api'
var firstScriptTag = document.getElementsByTagName('script')[0]
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

var playerArray = new Object()
var $firstLoad = 1

export default function(list, swiperRef) {
  window.onYouTubeIframeAPIReady = function() {
    list.forEach((item) => {
      if (item.youtubeId) {
        // eslint-disable-next-line no-undef
        playerArray[item.youtubeId] = new YT.Player(item.youtubeId, {
          videoId: item.youtubeId,
          playerVars: {
            controls: 0,
            disablekb: 1,
            showinfo: 0,
            modestbranding: 1,
            enablejsapi: 0,
            rel: 0,
          },
          events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
          },
        })
      }
    })
  }

  async function onPlayerReady(event) {
    if (list[0].youtubeId && $firstLoad === 1) {
      //當輪播第一個為影片時且為初始載入網頁
      await swiperRef.autoplay.stop()
      event.target.playVideo()
    }
  }

  function onPlayerStateChange(event) {
    var state = event.target.getPlayerState()
    // // 播放結束
    if (state == 0) {
      swiperRef.autoplay.start()
      swiperRef.slideNext()
      event.target.stopVideo()
    }
  }

  swiperRef.on('slideNextTransitionStart', () => {
    const { realIndex } = swiperRef
    const id =
      realIndex === 0
        ? list[list.length - 1].youtubeId
        : list[realIndex - 1].youtubeId
    if (id) {
      //偵測若div內容為影片
      playerArray[id].pauseVideo()
      swiperRef.autoplay.start()
    }
  })

  swiperRef.on('slidePrevTransitionStart', () => {
    const { realIndex } = swiperRef
    const id =
      realIndex === list.length - 1
        ? list[0].youtubeId
        : list[realIndex + 1].youtubeId
    if (id) {
      //偵測若div內容為影片
      playerArray[id].pauseVideo()
      swiperRef.autoplay.start()
    }
  })

  swiperRef.on('slideChangeTransitionEnd', function() {
    $firstLoad = '0'
    const { realIndex } = swiperRef
    const id = list[realIndex].youtubeId
    // //偵測若div內容為影片
    if (id) {
      swiperRef.autoplay.stop()
      playerArray[id].playVideo()
    }
    return $firstLoad
  })
}



