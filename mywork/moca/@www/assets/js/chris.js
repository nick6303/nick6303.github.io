//所有功能JS的家


//resize 後啟動 (fires after resize)
//使用範例
// ChrisDelay(function(){
//     console.log('Chris帥');
// }, 500);
function ChrisDelay(a, b) {

    var doneResizing = a,
        ms = b;
    var id;

    $(window).resize(function() {
        clearTimeout(id);
        id = setTimeout(doneResizing, ms);
    });

}

function fixVh() {
    var vh = window.innerHeight * 0.01;

    document.documentElement.style.setProperty('--vh', vh + 'px');
}


/*youtube API*/
function wddYoutube(_target) {
    //產tag
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    //
    var gyNumber = 0;
    var video_firstview = [];
    window.onYouTubeIframeAPIReady = function() {
        $(_target).each(function() {
            //給id
            var _id = 'wdd' + gyNumber;
            $(this).find('.replaceTag').attr('id', _id);

            //抓id 跟 videoID
            var _thisID = $(this).find('.replaceTag').attr('id'),
                _thisVID = $(this).find('.replaceTag').attr('data-videoid');

            //抓寬高
            var mom = $(this),
                momWidth = mom.width();
            momHeight = momWidth / 2;

            // ChrisDelay(function(){
            //     var reMomWidth  = mom.width(),
            //         reMomHeight = reMomWidth / 2;

            //     mom.find('iframe').css('height', reMomHeight);
            // }, 500);

            //產影片
            video_firstview[gyNumber] = new YT.Player(_thisID, {
                // width: momWidth,
                // height: momHeight,
                videoId: _thisVID,
                playerVars: {
                    'rel': 0,
                    'showinfo': 0,
                    'controls': 1,
                    'autoplay': 0,
                    'loop': 0,
                    'modestbranding': 1,
                },
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange,
                }
            });
            gyNumber++;
        });
    }

    function onPlayerReady(event) {
        //   event.target.playVideo();
        $(_target).closest('.slickBox').addClass('show');
    }

    /*影片狀態改變時*/
    function onPlayerStateChange(event) {

        var a = event.data;

        if (a == 1) {

            $('.slickBox .tipBox').addClass('hide');

        } else if (a == 2) {

            $('.slickBox .tipBox').removeClass('hide');

        }

    }
}
/*youtube API*/


/*chrisSequence*/
function chrisSequence(object, movieS, waitS) {
    //ex: chrisSequence('.banana .list', '.5', '.5');
    //ex: chrisSequence('.banana .list', .5, .5);
    var _object = $(object);

    movieS = movieS / 1;
    waitS = waitS / 1;

    for (var index = 0; index < _object.length; index++) {

        waitS = waitS + 0.1;

        _object.eq(index).css({
            'transition-property': 'opacity',
            'transition-duration': movieS + 's',
            'transition-timing-function': 'ease',
            'transition-delay': waitS + 's'
        });

    }

}
/*chrisSequence*/


/*scroll to down*/
function bannerScrollDown(object) {

    var down = $('.chrisScrolldown'),
        banner = $(object);

    down.click(function() {
        $("html,body").animate({
            scrollTop: banner.height()
        }, 1000, "easeOutCubic");
    });
}
/*scroll to down*/


/*waypoint model*/
function waypoing_set(target, distance, context) {
    //ex: waypoing_set( 'body', '100%' );
    //ex: waypoing_set( 'body', '100%', '.container' );

    var aims = target,
        dist = distance;

    // if ( scrollEle ) {
    //     var ele = scrollEle;
    // }else {
    //     var ele = 'html,body';
    // }

    $(aims).each(function(index, element) {

        $(element).waypoint(function() {

            $(element).addClass('show');

        }, {
            offset: dist,
        });

    });

    //         }, { 
    //             offset: '90%',
    //             context: $('.privacyFakeBox'),
    //             element: $('.privacyFakeBox .for_scroll')
    //         });

}
/*waypoint model*/


/*uploadEventBind*/
function uploadEventBind() {

    $('.uploadBox').on('click', '.uploadBtn', function() {

        var parent = $(this).closest('.uploadBox');

        parent.find('.uploadInput').click();

    });

    $('.uploadInput').on('change', function() {

        var objectEle = $(this);

        var jsParent = this.parentElement;

        previewFile(objectEle, jsParent);

    });

}

function previewFile(objectEle, jsParent) {
    // var preview = document.querySelector('img'); //selects the query named img
    // var file    = document.querySelector('input[type=file]').files[0]; //sames as here
    // var reader  = new FileReader();


    var preview = objectEle.closest('.styleBox').find('.logo');
    var file = jsParent.children[1].files[0]; //sames as here
    var reader = new FileReader();

    reader.onloadend = function() {
        // preview.src = reader.result;(js way)
        preview.attr('src', reader.result); //(jq way)
    }

    if (file) {
        reader.readAsDataURL(file); //reads the data as a URL
    } else {
        preview.src = "";
    }
}
/*uploadEventBind*/

/*uploadSelfie*/
function uploadSelfie() {

    $('.uploadInput').on('change', function() {

        var objectEle = $(this);

        var jsParent = this.parentElement;

        previewFile(objectEle, jsParent);
    });

}

function previewFile(objectEle, jsParent) {
    // var preview = document.querySelector('img'); //selects the query named img
    // var file    = document.querySelector('input[type=file]').files[0]; //sames as here
    // var reader  = new FileReader();

    var preview = objectEle.closest('.imgFrame').find('.img');
    var file = jsParent.children[1].files[0]; //sames as here
    var reader = new FileReader();

    reader.onloadend = function() {
        // preview.src = reader.result;(js way)
        // preview.attr('src', reader.result);//(jq way)
        preview.attr('src', reader.result);
    }

    if (file) {
        reader.readAsDataURL(file); //reads the data as a URL
    } else {
        preview.src = "";
    }
}
/*uploadSelfie*/


/*backToTopBtn*/
function backToTop(a, b) {

    var _object = $(a),
        _time = b;

    _object.on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, _time);
    });

}
/*backToTopBtn*/


/*檢查是否為移動裝置*/
function nickCheckDevice() {

    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    var device = isAndroid || isiOS;

    return device;

}
/*檢查是否為移動裝置*/


/*scrollbar*/
function getScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
}

function lock_bScroll() {

    var checkDevice = nickCheckDevice();

    var a = window.innerWidth;

    var b = document.documentElement.clientWidth;

    var body = $('body');

    var distance = $(window).scrollTop();

    if (checkDevice === false) {

        if (a != b) {
            //pc有scrollBar
            body
                .css({
                    'padding-right': '17px',
                    'overflow-y': 'hidden'
                });
        } else {
            //pc無scrollBar(safari)
            body
                .css({
                    'padding-right': '',
                    'overflow-y': 'hidden'
                });
        }

    } else {
        //行動裝置
        setTimeout(function() {

            body
                .css({
                    'position': 'fixed',
                    'overflow-y': 'hidden',
                    'top': -(distance),
                    'z-index': '-10',
                    'width': '100%',
                    'height': 'calc(var(--vh, 1vh) * 100)',
                });

        }, 500);
    }

    return distance;

}

function unlock_bScroll() {

    var body = $('body');

    body.css({
        'position': '',
        'overflow-y': '',
        'padding-right': '',
        'top': '',
        'width': '',
        'height': '',
    });
}
/*scrollbar*/


/*clickScroll*/
var clickScroll = {
        //ex: clickScroll.scroll('.backTopBtn', '.ajaxVisitDetail', '700');
        scroll: function(btn, scrollObject, a) {

            if (a) {
                var time = a;
            } else {
                var time = 1000
            }

            $(btn).on('click', function() {
                $(scrollObject).animate({
                    scrollTop: 0
                }, time);
            });
        }
    }
    /*clickScroll*/


/*大圖換小圖*/
function xsBGLoad() {
    var winWidth = $(window).width();
    if (winWidth < 768) {
        $('.xsBGshow').each(function() {
            var smallsrc = $(this).data('small');
            $(this).css('background-image', 'url("' + smallsrc + '")');
        });
    } else {
        $('.xsBGshow').each(function() {
            var largesrc = $(this).data('large');
            $(this).css('background-image', 'url("' + largesrc + '")');
        });
    }
}
/*大圖換小圖*/


/*nodeScroll*/
var nodeScroll = {
        //ex: nodeScroll.click('.reserFormLbox .scrollBtn', '.reserFormLbox'); →滾動 reserFormLbox
        //ex: nodeScroll.click('.reserFormLbox .scrollBtn'); →滾動 html,body
        click: function(a, element) {

            $(a).on('click', function() {

                var obj = '.' + $(a).attr('data-obj');

                var target = $(obj);

                //判斷要滾動的是 html,body 還是 其他(燈箱)
                if (element) {
                    objScroll = $(element);

                    var dist = target.position().top;
                } else {
                    objScroll = $('html, body');

                    var dist = target.offset().top;
                }

                //滾動
                if (target.length) {
                    objScroll.animate({ scrollTop: dist }, { duration: 900 });
                }

            });
        }
    }
    /*nodeScroll*/


/*dotdot*/
function dotdot(height) {
    var descMinHeight = height;
    var desc = $('.desc');
    var descWrapper = $('.desc-wrapper');

    // show more button if desc too long
    if (desc.height() > descWrapper.height()) {
        $('.exAbout .moreBtn').addClass('show');
    }

    var moreInfoBtn = $('.exAbout .moreBtn .btn'),
        contentBox = $('.exAbout .contentBox'),
        boxDistance = '';

    // When clicking more/less button
    $('.more-info').click(function() {

        boxDistance = contentBox.offset().top - ($(window).height() / 2);

        var fullHeight = $('.desc').height();

        if ($(this).hasClass('expand')) {
            // contract
            $('html, body').animate({ scrollTop: boxDistance }, { duration: 300 });
            setTimeout(function() {
                $('.desc-wrapper').animate({ 'height': descMinHeight }, 300);
            }, 400);
        } else {
            // expand 
            $('.desc-wrapper').css({ 'height': descMinHeight, 'max-height': 'none' }).animate({ 'height': fullHeight }, 300);
        }

        $(this).toggleClass('expand');
        $('.desc-wrapper').toggleClass('in');
        return false;
    });
}
/*dotdot*/


/*chrisSelect*/
// $.fn.fuck_you = function() {
//     this.on('click',function(){
//         console.log('zz');
//     });
// };
// $('.fa-trash').fuck_you();
function chrisSelect(a) {

    var object = $(a),
        dropShow = object.find('.dropShow'),
        listBox = object.find('.dropList'),
        listText = '',
        placeholder = $(a).attr('data-placeholder');

    //placeholder 預設文字  
    dropShow.find('.character').html(placeholder);


    //打開下拉選單
    object.on('click', function(e) {

        nowListBox = $(this).find('.dropList');

        if (object.hasClass('open') == false) {

            nowListBox.slideDown();
            $(this).addClass('open');

        } else {

            if (!$(e.target.parentElement).hasClass('notAllow')) {
                nowListBox.slideUp();
                $(this).removeClass('open');
            }

        }

    });


    //list內容點擊變換
    listBox.on('click', '.list .character', function(e) {

        if (!$(e.target.parentElement).hasClass('notAllow')) {
            listText = $(this)[0].innerText;
            dropShow.find('.character').html(listText);

            if ($(this).hasClass('linking')) {
                if ($(this).data().identity === 'student') {
                    $('[data-type="otheronly"]').fadeOut(0)
                    $('[data-type="salarymanonly"]').fadeOut(0)
                    $('[data-type="studentonly"]').fadeIn(300)
                } else if ($(this).data().identity === 'salaryman') {
                    $('[data-type="otheronly"]').fadeOut(0)
                    $('[data-type="studentonly"]').fadeOut(0)
                    $('[data-type="salarymanonly"]').fadeIn(300)
                } else {
                    $('[data-type="studentonly"]').fadeOut(0)
                    $('[data-type="salarymanonly"]').fadeOut(0)
                    $('[data-type="otheronly"]').fadeIn(300)
                }
            }
        }
    });


    //點擊他處 下拉選單會關閉
    $(document).click(function(e) {
        if ($(a).has(e.target).length === 0) {
            listBox.slideUp();
            listBox.closest('.chrisSelect').removeClass('open');
        }
    })



    //reset按鈕功能(待補)

    //應該還要再加一個 預設字元
    //用意是 讓使用者可以設定 預設的選項是什麼
    //而reset的時候 也可以回到預設的選項
    //順序為 預設優先 再來是placeholder

}
var selectTest = {
        resetSelect: function(obj) {
            //重置 Form表單 裡的下拉選單的已選項目
            var resetBtn = $('.resetFormBtn');

            if (obj) {
                var objForm = $(obj);
            } else {
                var objForm = $('form');
            }

            resetBtn.on('click', function() {
                //afterCall 是 clone出來的東西，希望在表單按下reset的時候 能夠把clone出來的list給刪除

                var chrisSelect = objForm.find('.chrisSelect');

                var afterCallObj = objForm.find('.afterCall');

                for (var index = 0; index < chrisSelect.length; index++) {

                    var placeholder = chrisSelect.eq(index).attr('data-placeholder');

                    var text = chrisSelect.eq(index).find('.dropShow .character');

                    text.html(placeholder);

                    //刪除 被新增的結構
                    afterCallObj.remove();

                }

            });
        }
    }
    /*chrisSelect*/


/*random取字*/
function randLetter(number) {

    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    if (number) {
        var num = number;
    } else {
        var num = letters.length;
    }

    var letter = letters[Math.floor(Math.random() * num)];
    return letter
}

function wordCombine(wordLength) {

    var a = '';

    for (var i = 0; i < wordLength; i++) {

        var a = randLetter() + a;

    }

    return a;

}
/*random取字*/


/*input focus*/
var chInputFocus = {
        //使用範例: chInputFocus.inputFocus('.formLog', 'list');

        inputFocus: function(father, son) {
            var parent = document.querySelectorAll(father),
                children = '';

            for (var index = 0; index < parent.length; index++) {
                children = parent[index].getElementsByClassName(son);

                for (var i = 0; i < children.length; i++) {
                    children[i].onclick = function() {

                        if (this.querySelector('input')) {
                            var a = Array.apply(null, this.querySelectorAll('input')).length;
                            if (a == 1) {
                                this.querySelector('input').focus();
                            }
                        }
                        if (this.querySelector('textarea')) {
                            this.querySelector('textarea').focus();
                        }
                    };
                }
            }
        },
    }
    /*input focus*/


/*CG動畫*/
function cgLoadin() {

    setTimeout(function() {
        $('.wddLoad').addClass('fadeOut');
    }, 100);

    if (!$('.wddLoad').hasClass('cgB')) {
        setTimeout(function() {
            $('.wddLoad').remove();
        }, 600);
    } else {
        $('.wddLoad').remove();
    }

}
/*CG動畫*/

/*大圖換小圖*/
function xsBGLoad(w) {
    var winWidth = $(window).width();

    // var winWidth = window.innerWidth;

    var w = w || 768;

    if (winWidth <= w) {
        $('.xsBGshow').each(function() {
            var smallsrc = $(this).data('small');
            $(this).css('background-image', 'url("' + smallsrc + '")');
        });
    } else {
        $('.xsBGshow').each(function() {
            var largesrc = $(this).data('large');
            $(this).css('background-image', 'url("' + largesrc + '")');
        });
    }

    // return w
}
/*大圖換小圖*/
/*============================================================================================================================================*/
/*============================================================================================================================================*/
/*============================================================================================================================================*/

/*ajax換內容(第一步)*/
var ajaxContent = {
        active: function(a, b) {
            var pageHead = $(a);

            pageHead.on('click', '.ajax_cg', function() {

                var path = $(this).attr('data-path'),
                    page = $(this).attr('data-page');

                ajaxContent.lbox(path, page, b);
            });
        },
        lbox: function(path, page, b) {
            $.ajax({
                    url: path,
                })
                .done(function(data) {

                    var pageBody = $(b);

                    pageBody[0].innerHTML = "";

                    pageBody
                        .attr('style', '')
                        .attr('data-page', page);

                    pageBody
                        .removeClass('show')
                        .html(data);


                    setTimeout(function() {
                        ajaxBody.detect();
                    }, 100);

                    setTimeout(function() {
                        pageBody.addClass('show')
                    }, 200);
                })
        }
    }
    /*ajax換內容*/


/*ajaxBody(第二步)*/
var ajaxBody = {
        detect: function() {
            //此處只用來執行 ajaxBody要執行的功能
            var id = $('body').attr('id');

            switch (id) {
                case 'visit':
                    ajaxBody.visit();
                    break;

                case 'application':
                    ajaxBody.application();
                    break;

                case 'about':
                    ajaxBody.about();
                    break;

                case 'exhibition':
                    ajaxBody.exhibition();
                    break;

                case 'discover':
                    ajaxBody.discover();
                    break;

                case 'card':
                    ajaxBody.card();
                    break;

                default:
                    break;
            }
        },
        visit: function() {
            var a = $('.mocaPageBody').attr('data-page');

            switch (a) {
                case 'visit':
                    visitFunction.waterfall();

                    ajaxLBox.active('.ajax_open');

                    waypoing_set('.wallFrame .wall', '90%');
                    break;
                case 'visitTour':
                    visitFunction.reserFromLbox();
                    break;
                case 'visitReserv':
                    visitFunction.reserFromLbox();
                    break;
                default:
                    break;
            }
        },
        application: function() {
            var a = $('.mocaPageBody').attr('data-page');

            mocaWaypoint.application();

            switch (a) {
                case 'exhibition':
                    appFunction.slick('.appSec2Lbox');
                    appFunction.openFrameBox();
                    appFunction.closeFrameBox();

                    appFunction.addLine();
                    appFunction.description();

                    appFunction.scrollBar();
                    break;

                case 'parctice':
                    appFunction.slick('.appSec2Lbox');
                    appFunction.openFrameBox();
                    appFunction.closeFrameBox();

                    appFunction.addLine();
                    appFunction.description();

                    appFunction.scrollBar();
                    break;

                case 'court':
                    appFunction.slick('.appSec2Lbox');
                    appFunction.openFrameBox();
                    appFunction.closeFrameBox();

                    appFunction.addLine();
                    appFunction.description();

                    appFunction.scrollBar();
                    break;

                case 'resident':
                    appFunction.dropSelect();
                    appFunction.resetSelect();
                    appFunction.agreeBtn();

                    appFunction.addLine();
                    appFunction.description();

                    appFunction.scrollBar();

                    chInputFocus.inputFocus('.appFrom', 'keyInBox');
                    break;

                case 'volunteer':
                    appFunction.dropSelect();
                    appFunction.resetSelect();
                    appFunction.agreeBtn();

                    appFunction.addLine();
                    appFunction.description();

                    appFunction.scrollBar();

                    //LANGUAGE 語言能力
                    appFunction.language();

                    chInputFocus.inputFocus('.appFrom', 'keyInBox');
                    break;

                case 'artHouse':
                    appFunction.dropSelect();
                    appFunction.resetSelect();
                    appFunction.agreeBtn();

                    appFunction.addLine();
                    appFunction.description();

                    appFunction.scrollBar();

                    chInputFocus.inputFocus('.appFrom', 'keyInBox');
                    break;

                default:
                    break;
            }
        },
        exhibition: function() {
            var a = $('.mocaPageBody').attr('data-page');

            mocaWaypoint.exListPage();

            switch (a) {
                case 'exhibition':
                    var bLazy = new Blazy({
                        offset: 100 // Loads images 100px before they're visible
                    });

                    //
                    waypoing_set('.listFrameBox2 .list', '90%');
                    break;

                case 'exhibitionList':
                    var bLazy = new Blazy({
                        offset: 100 // Loads images 100px before they're visible
                    });

                    //
                    exListPage.switchLink();

                    //
                    exListPage.sBoxSelect();
                    break;

                case 'eventList':
                    var bLazy = new Blazy({
                        offset: 100 // Loads images 100px before they're visible
                    });

                    //
                    exListPage.switchLink();

                    //
                    exListPage.sBoxSelect();

                    //
                    waypoing_set('.listFrameBox2 .list', '90%');
                    break;

                default:
                    break;
            }
        },
        discover: function() {
            var a = $('.mocaPageBody').attr('data-page');

            mocaWaypoint.discover();

            ajaxLBox.active('.ajax_open');

            var clickScrollArea_box = $('.clickScrollArea .box').width()
            console.log(clickScrollArea_box)
            //
            if ($(".clickScrollArea")) {
                // $(".clickScrollArea").mCustomScrollbar({
                //     axis: "x",
                //     mouseWheel: { axis: "y" },
                //     autoHideScrollbar: true,
                // });
                var ps1 = new PerfectScrollbar('.clickScrollArea',{
                    useBothWheelAxes: true,
                    clickScrollArea: true,
                });
                ChrisDelay(function() {
                    ps1.update();
                }, 0)


            }

            ;

            //
            var bLazy = new Blazy({
                offset: 100 // Loads images 100px before they're visible
            });

            discover.oddFunc();

            switch (a) {
                case 'discover':
                    //
                    discover.clickScrollArea();
                    break;
                case 'artist':
                    break;
                default:
                    break;
            }
        }
    }
    /*ajaxBody*/


/*Ajax lightBox(燈箱)*/
var ajaxLBox = {
        wddBoolean: false,
        active: function(a) {

            var lbox_switch = $(a);

            lbox_switch.on('click', function() {

                var lbox_checked = ajaxLBox.wddBoolean;

                if (lbox_checked == false) {

                    var a = $(this).attr('data-page');

                    var b = $(this).attr('data-id');

                    ajaxLBox.wddBoolean = true;

                    var dist = $(window).scrollTop();

                    ajaxLBox.lbox(a, b, dist);

                    lock_bScroll();

                }

            });
        },
        lbox: function(lbox_page, lbox_id, dist) {
            $.ajax({
                    url: lbox_page,
                })
                .done(function(data) {

                    $("body").append("<article class='hide_lightbox " + lbox_id + "' data-dist='" + dist + "'></article>");

                    $(".hide_lightbox").html(data);

                    ajaxLBox.func();

                    /*給燈箱一個 open 讓動畫作動*/
                    if ($(".hide_lightbox").length > 0) {

                        setTimeout(function() {

                            $(".hide_lightbox").addClass('open');

                        }, 100);

                    }
                })
        },
        func: function() {
            //styleLightBox 燈箱
            if ($('.ajaxVisitDetail').length > 0) {
                setTimeout(function() {
                    var bLazy = new Blazy({
                        container: '.ajaxVisitDetail',
                        offset: 100 // Loads images 100px before they're visible
                    });
                }, 100);

                //關閉按鈕事件
                ajaxLBox.close(800);

                //shareBtn
                var lettuce = $('.ajaxVisitDetail .lettuce'),
                    community = lettuce.find('.community');
                lettuce.on('click', '.shareBtn', function() {
                    if (!community.hasClass('out')) {
                        community.addClass('out');
                    } else {
                        community.removeClass('out');
                    }
                });

                //waypoint
                setTimeout(function() {

                    $('.ajaxVisitDetail .container > *').each(function(index, element) {

                        $(element).waypoint(function() {

                            $(element).addClass('show');

                        }, {
                            context: '.ajaxVisitDetail',
                            offset: '90%',
                        });

                    });

                    $('.ajaxVisitDetail .eggTower > *').each(function(index, element) {

                        $(element).waypoint(function() {

                            $(element).addClass('show');

                        }, {
                            context: '.ajaxVisitDetail',
                            offset: '90%',
                        });

                    });

                    $('.ajaxVisitDetail .container .colaBox > *').each(function(index, element) {

                        $(element).waypoint(function() {

                            $(element).addClass('show');

                        }, {
                            context: '.ajaxVisitDetail',
                            offset: '90%',
                        });

                    });

                }, 0);

                //畫線 與 scroll滾動
                visitFunction.drawAndScroll();
            }
        },
        close: function(time) {
            var ajaxCloseBtn = $('.hide_lightbox .ajax_close');

            if (time) {
                time = time;
            } else {
                //預設1秒
                time = 1000;
            }

            ajaxCloseBtn.on('click', function() {

                var obj = $(this).closest('.hide_lightbox');

                var dist = obj.attr('data-dist');

                var lbox_checked = ajaxLBox.wddBoolean;

                if (lbox_checked === true) {

                    ajaxLBox.wddBoolean = false;

                    obj.addClass('close');

                    setTimeout(function() {

                        obj.closest('.hide_lightbox').remove();

                        unlock_bScroll();
                        window.scrollTo(1, dist);

                    }, time);

                }

            });
        }
    }
    /*Ajax lightBox*/


/*mocaWaypoint*/
var mocaWaypoint = {
        visit: function() {
            waypoing_set('.mocaPageBody', '90%');
        },
        application: function() {
            waypoing_set('.mocaPageBody', '90%');

            waypoing_set('.clickScrollArea', '90%');

            waypoing_set('.secCommon', '90%');
        },
        discover: function() {
            waypoing_set('.mocaPageBody', '90%');

            waypoing_set('.clickScrollArea', '90%');

            waypoing_set('.fullFrame .imgFrame > *', '90%');

            waypoing_set('.tripleFrame .tirpleBox .imgFrame .imgBox', '90%');

            waypoing_set('.tripleFrame .tirpleBox .imgFrame .caption', '90%');

            waypoing_set('.smallFrame > *', '90%');

            waypoing_set('.smallFrame', '90%');
        },
        contact: function() {
            waypoing_set('.mocaTitleSec', '90%');

            waypoing_set('.contactForm', '90%');

            waypoing_set('.btnStyle', '90%');

            waypoing_set('.mixBox', '90%');
        },
        mocaMenu: function() {
            // waypoing_set( '.mocaMenu .wayObj', '93%', '.mocaMenu' );
            $('.mocaMenu .wayObj').each(function(index, element) {

                $(element).waypoint(function() {

                    $(element).addClass('show');

                }, {
                    offset: '93%',
                    context: '.mocaMenu'
                });

            });
        },
        shop: function() {
            waypoing_set('.shopBannerSlick', '90%');

            waypoing_set('.shopListFrame > .list', '90%');

            waypoing_set('.shopBeer .shopTitleBox > *', '90%');

            waypoing_set('.slickFrameBox', '90%');

            waypoing_set('.shopSerial .list > *', '93%');

            waypoing_set('.shopHam > *', '93%');

            //list
            waypoing_set('.shopList  .mocaTitleSec > .title', '90%');

            waypoing_set('.shopList  .clickScrollArea', '90%');

            //detail
            waypoing_set('.shopDetailBoard > *', '90%');

            waypoing_set('.shopDetailPresent > *', '90%');

            waypoing_set('.shopDetailProduct > *', '90%');

            waypoing_set('.shopDetailSpecifi > *', '90%');

            waypoing_set('.shopDetailSpecifi .tableFrame > *', '90%');

            waypoing_set('.shopDetailLike > *', '90%');
        },
        exListPage: function() {
            waypoing_set('.mocaPageBody', '90%');

            waypoing_set('.clickScrollArea', '90%');

            waypoing_set('.listFrameBox .list', '90%');

            // waypoing_set( '.secMac .fBox', '90%' );
        },
        exDetail: function() {
            waypoing_set('.bannerSec', '90%');
            waypoing_set('.leftBox', '90%');
            waypoing_set('.rightBox', '90%');
            waypoing_set('.scrollBro', '90%');
            waypoing_set('.detailContent .contentFrame', '90%');

            waypoing_set('.exAbout .mediaBox', '90%');
            waypoing_set('.exAbout .contentBox', '90%');
            // waypoing_set( '.exAbout .moreBtn', '90%' );

            waypoing_set('.exArtists .bearBox', '90%');
            waypoing_set('.exArtists .bearTextBox', '90%');

            waypoing_set('.exArtworks .btnStyle', '90%');

            waypoing_set('.exEvent .formHead', '90%');
            waypoing_set('.exEvent .formBody', '90%');
            waypoing_set('.exEvent .btnStyle', '90%');

            waypoing_set('.exKid .kidArea > *', '90%');
        },
        footer: function() {
            //如果要開啟就要在參觀資訊這種單元 在切換子分類的時候要跑一次waypoint refreash
            // waypoing_set( 'footer > *', '100%' );
        }
    }
    /*mocaWaypoint*/


/*mocaSNav*/
var mocaSNav = {
        active: function() {
            mocaSNav.navBar();

            mocaSNav.search();
        },
        navBar: function() {
            var navBar = $('.mocaSNav .navBar'),
                secBox = $('.mocaSNav .secBox');

            if (navBar) {
                var dist = navBar.offset().top;

                navBar.on('click', '.link', function() {
                    $(this).siblings().removeClass('now');
                    $(this).addClass('now');
                });

                //上滑出現navBar
                mocaSNav.scroll(dist, secBox);

                //
                mocaSNav.scrollBar();
            }
        },
        search: function() {
            var search = $('.mocaSNav .searchArea'),
                width = search.width();

            var pos = $('header .buttons').width();

            var scrollFrame = $('.mocaSNav .scrollFrame .navBar'),
                searchArea = $('.mocaSNav .searchArea'),
                frameWidth = '',
                offsetLeft = '';

            //
            search.css('right', pos - width);

            //
            if (window.innerWidth < 1024) {
                // offsetLeft = scrollFrame.offset().left;
                // width      = search.width();

                // pos = ( offsetLeft - width - 10) + 'px';
                // searchArea.css('right', pos);
                search.css('right', 'auto');
            } else {
                search.css('right', pos - width);
            }

            //
            ChrisDelay(function() {
                if (window.innerWidth < 1024) {
                    // offsetLeft = scrollFrame.offset().left;
                    // width      = search.width();

                    // pos = ( offsetLeft - width - 10 ) + 'px';
                    // searchArea.css('right', pos);
                    search.css('right', 'auto');
                } else {
                    width = search.width();
                    pos = $('header .buttons').width();

                    search.css('right', pos - width);
                }
            }, 100);
        },
        scroll: function(dist, secBox) {
            var lastScrollTop = 0;
            $(window).scroll(function(event) {
                var st = $(this).scrollTop();
                if (st > lastScrollTop) {
                    // downscroll code
                    secBox.removeClass('fixed');
                    $('.mocaSNav').removeClass('fix')
                } else {
                    // upscroll code
                    if (st > dist) {
                        //add
                        secBox.addClass('fixed');
                        $('.mocaSNav').addClass('fix')
                    } else {
                        //remove
                        secBox.removeClass('fixed');
                        $('.mocaSNav').removeClass('fix')
                    }
                }
                lastScrollTop = st;
            });
        },
        scrollBar: function() {
            //
            var scrollBar = $('.mocaSNav .scrollFrame');
            if (scrollBar.length > 0) {
                var ps1 = new PerfectScrollbar('.mocaSNav .scrollFrame',{
                    useBothWheelAxes: true,
                });
                // $(".mocaSNav .scrollFrame").mCustomScrollbar({
                //     axis: "x",
                //     mouseWheel: { axis: "y" },
                //     autoHideScrollbar: true,
                // });
            } else {
                return;
            }

            if (nickCheckDevice() == true) {
                scrollBar.addClass('scrollHide');
            } else {
                scrollBar.removeClass('scrollHide');
            }

            ChrisDelay(function() {
                ps1.update();
                if (nickCheckDevice() == true) {
                    scrollBar.addClass('scrollHide');
                } else {
                    scrollBar.removeClass('scrollHide');
                }
            }, 500);
        }
    }
    /*mocaSNav*/


/*callVideoBox*/
var callVideoBox = {
        fire: function(a) {

            var obj = $(a);

            var videoBox = $('.chVideobox');

            //
            $(obj).on('click', '.videoPlayBtn', function() {

                videoBox.addClass('open');

                var videoID = $(this).closest('.hasVideo').attr('data-videoid');

                var videoSrc = 'https://www.youtube.com/embed/' + videoID + '?rel=0;autoplay=1'

                var iFrame = videoBox.find('.video').attr('src', videoSrc);

            });

            //
            videoBox.on('click', '.closeBtn', function() {

                videoBox.addClass('close');

                videoBox.find('.video').attr('src', '');

                setTimeout(function() {

                    videoBox.removeClass('open close');

                }, 500);

            });

        }
    }
    /*callVideoBox*/


/*visit 單元*/
var visitFunction = {
    waterfall: function() {

        $('.grid').masonry({
            itemSelector: '.grid-item',
            horizontalOrder: true,
        })

    },
    drawAndScroll: function() {
        var lightBox = $('.ajaxVisitDetail'),
            lineFrame = lightBox.find('.colaBox'),
            roadBg = lineFrame.find('.roadBg'),
            list = lineFrame.find('.straw'),
            listSumH = 0;

        var yogurtBox = document.querySelector(".yogurtBox"),
            colaBox = document.querySelector(".colaBox"),
            boxTop = '',
            colaTop = '',
            number = '';

        var obj = $('.yogurtBox'),
            img = obj.find('.img'),
            imgH = '';

        //
        for (var index = 0; index < list.length; index++) {

            listSumH = listSumH + list.eq(index).height();

        }
        roadBg.css('max-height', (listSumH - 50) + 'px');

        //
        if (yogurtBox || colaBox) {

            $('.ajaxVisitDetail').scroll(function() {
                browserH = $(window).height();
                colaTop = colaBox.getBoundingClientRect().top - browserH;

                //
                if (colaTop <= -100) {

                    number = Math.abs(colaTop);

                    roadBg.css('height', number + 'px');
                }

                //
                if (yogurtBox) {
                    boxTop = yogurtBox.getBoundingClientRect().top;

                    //
                    if (boxTop <= 0) {
                        // console.log('active');
                        var aaa = window.innerWidth - document.querySelector('.ajaxVisitDetail .for_scroll').clientWidth;

                        if (aaa == 0) {
                            obj.addClass('fixed');
                            obj.find('.imgFrame').css('padding-right', '');
                        } else {
                            obj.addClass('fixed');
                            obj.find('.imgFrame').css('padding-right', aaa + 'px');
                        }

                    } else {
                        // console.log('not');

                        obj.removeClass('fixed');
                        obj.find('.imgFrame').css('padding-right', '');
                    }
                }
            });

            // $('.ajaxVisitDetail').mCustomScrollbar({
            //     mouseWheel: {
            //         enable: true,
            //         scrollAmount: 200
            //     },
            //     callbacks: {
            //         whileScrolling:function(){

            //             browserH = $(window).height();
            //             colaTop  = colaBox.getBoundingClientRect().top - browserH;

            //             //
            //             if ( colaTop <= -100 ) {

            //                 number = Math.abs(colaTop);

            //                 roadBg.css('height', number + 'px');
            //             }

            //             //
            //             if ( yogurtBox ) {
            //                 boxTop = yogurtBox.getBoundingClientRect().top;

            //                     //
            //                 if ( boxTop <= 0 ) {
            //                     // console.log('active');

            //                     obj.addClass('fixed');


            //                 }else {
            //                     // console.log('not');

            //                     obj.removeClass('fixed');
            //                 }
            //             }
            //         }
            //     }
            // });

        } else {
            $('.ajaxVisitDetail').scroll(function() {
                // visitFunction.loadImage();
            });
            // $('.ajaxVisitDetail').mCustomScrollbar({
            //     mouseWheel: {
            //         enable: true,
            //         scrollAmount: 200
            //     },
            //     callbacks: {
            //         whileScrolling:function(){

            //             visitFunction.loadImage();
            //         }
            //     },
            // });
        }

        //點擊回到最上
        $('.hide_lightbox .backTopBtn').on('click', function() {
            $('.hide_lightbox').animate({
                scrollTop: 0
            }, 700);
            // $('.ajaxVisitDetail').mCustomScrollbar("scrollTo",'top');
        });
    },
    loadImage: function() {
        //chris的低級自製b-lazy 哇哈哈
        var faEle = document.querySelector('.ajaxVisitDetail');
        obj = faEle.getElementsByClassName('b-lazy'),
            windowH = 0,
            dist = 0;

        for (var index = 0; index < obj.length; index++) {

            var a = obj[index].getBoundingClientRect().top;

            windowH = $(window).height();

            dist = windowH - a; //物件 距離螢幕底部的距離

            distPercent = Math.floor((dist / windowH) * 100); //換算成百分比

            if (distPercent > 15 && !obj[index].classList.contains('chrisLoaded')) {
                var src = obj[index].getAttribute('data-src');

                obj[index].setAttribute('src', src);
                obj[index].classList.add('chrisLoaded');
                obj[index].removeAttribute('data-src');
            }
        }
    },

    reserFromLbox: function() {
        var openBtn = $('.openFromBtn'),
            fromBox = $('.reserFormLbox'),
            closeBtn = fromBox.find('.chrisCloseBtn');

        var dist = '';

        //燈箱scrollBar
        !mobile() ? fromBox.niceScroll() : fromBox.css('overflow-y', 'scroll');

        //打開事件
        openBtn.on('click', function() {

            fromBox.addClass('open');

            dist = lock_bScroll();

            var WhichPage = $(this).data('url');
            var OptionList = $('.mcdonald .mcMenu .menuBox .name');
            var FormList = $('.mcdonald .mcFrame .frame');

            if (WhichPage == '當代藝術館導覽') {
                OptionList.eq(0).addClass('now');
                OptionList.eq(1).removeClass('now');
                OptionList.eq(2).removeClass('now');
                FormList.eq(0).addClass('static');
                FormList.eq(1).removeClass('static');
                FormList.eq(2).removeClass('static');

            } else if (WhichPage == '公共藝術導覽') {
                OptionList.eq(0).removeClass('now');
                OptionList.eq(1).addClass('now');
                OptionList.eq(2).removeClass('now');
                FormList.eq(0).removeClass('static');
                FormList.eq(1).addClass('static');
                FormList.eq(2).removeClass('static');

            } else if (WhichPage == '預約自行參觀') {

                OptionList.eq(0).removeClass('now');
                OptionList.eq(1).removeClass('now');
                OptionList.eq(2).addClass('now');
                FormList.eq(0).removeClass('static');
                FormList.eq(1).removeClass('static');
                FormList.eq(2).addClass('static');
            }

            history.pushState(WhichPage, '', $('.base-url').val() + "/Visit/團體預約/" + WhichPage)
        });

        //關閉事件
        closeBtn.on('click', function() {

            fromBox.addClass('close');

            setTimeout(function() {

                fromBox.removeClass('open close');

                unlock_bScroll();
                window.scrollTo(1, dist);

            }, 800);

            history.pushState('', '', $('.base-url').val() + "/Visit/團體預約/");
        });

        //下拉選單
        visitFunction.dropSelect();

        //input
        setTimeout(function() {
            chInputFocus.inputFocus('.appFrom', 'keyInBox');
        }, 0);

        //確認按鈕
        appFunction.agreeBtn();

        //切換類別
        visitFunction.switchType();

        //點擊滾動
        nodeScroll.click('.reserFormLbox .scrollBtn', '.reserFormLbox');

        //
        var ps1 = new PerfectScrollbar('.reserFormLbox .mcMenu',{
            useBothWheelAxes: true,
        });
        ChrisDelay(function() {
            ps1.update();
        }, 500);

        var device = nickCheckDevice();
        if(device == true){
            ps1.destroy();
            ps1 = null;
            $('.reserFormLbox .mcMenu').css({
                'overflow': 'hidden',
                'overflow-x': 'scroll'
            })
        }else{
            var ps1 = new PerfectScrollbar('.reserFormLbox .mcMenu',{
                useBothWheelAxes: true,
            });
            $('.reserFormLbox .mcMenu').css({
                'overflow': '',
                'overflow-x': ''
            })
        }


    },
    dropSelect: function() {
        //groupTypes
        chrisSelect('.groupType');
        $('.groupType .dropList').niceScroll();

        //visitorNumber
        chrisSelect('.visitorNumber');
        $('.visitorNumber .dropList').niceScroll();

        //tourTime
        chrisSelect('.tourTime');
        $('.tourTime .dropList').niceScroll();

        //tourDay
        chrisSelect('.tourDay');
        $('.tourDay .dropList').niceScroll();

        //tourMonth
        chrisSelect('.tourMonth');
        $('.tourMonth .dropList').niceScroll();

        //tourYear
        chrisSelect('.tourYear');
        $('.tourYear .dropList').niceScroll();

        //
        appFunction.resetSelect();
    },
    switchType: function() {
        var switchBtn = $('.mcMenu');

        var nameLength = switchBtn.find('.name'),
            frameLength = $('.mcFrame .frame');

        //給id
        for (var index = 0; index < nameLength.length; index++) {

            var a = 'id' + index;

            nameLength.eq(index).attr('data-id', index);

        }

        //點擊切換事件
        switchBtn.on('click', '.name', function() {

            switchBtn.find('.name').removeClass('now');

            $(this).addClass('now');

            //
            var id = $(this).attr('data-id');

            frameLength.removeClass('static');

            frameLength.eq(id).addClass('static');

            var staticcc = $(this).attr('data-check');

            history.pushState(staticcc, '', $('.base-url').val() + "/Visit/團體預約/" + staticcc)
        });
    }
}

/*application 單元*/
var appFunction = {

    //燈箱開關 跟 燈箱slick
    openFrameBox: function() {
        /*每次呼叫後都要重綁*/
        var openBtn = $('.appSec2 .wall .imgFrame');

        openBtn.on('click', function() {
            $('.appSec2Lbox').addClass('open');

            //
            dist = $(window).scrollTop();
            $('body').attr('data-dist', dist);
            lock_bScroll();
        });
    },
    closeFrameBox: function() {
        /*每次呼叫後都要重綁*/
        var closeBtn = $('.appSec2Lbox .closeBtn');

        closeBtn.on('click', function() {
            $('.appSec2Lbox').addClass('close');
            setTimeout(function() {
                $('.appSec2Lbox').removeClass('open close');

                $('body').attr('data-dist', '');

                unlock_bScroll();
                window.scrollTo(1, dist);
            }, 1150);
        });
    },
    slick: function(a) {
        /*每次呼叫後都要重綁*/
        var obj = $(a).find('.slickBox');

        obj.on('init', function(event, slick) {
            obj.addClass('show');
        });

        obj.slick({
            infinite: true,
            speed: 750,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            // fade: true,
            prevArrow: $(a).find('.prev'),
            nextArrow: $(a).find('.next'),
        });
    },

    //表單 跟 下拉選單
    dropSelect: function() {
        //schoolBox
        chrisSelect('.schoolGrade');
        $('.schoolGrade .dropList').mCustomScrollbar();

        //serveTime
        chrisSelect('.gp1 .time');
        $('.gp1 .time .dropList').mCustomScrollbar();
        chrisSelect('.gp1 .day');
        $('.gp1 .day .dropList').mCustomScrollbar();

        //serveTime
        chrisSelect('.gp2 .time');
        $('.gp2 .time .dropList').mCustomScrollbar();
        chrisSelect('.gp2 .day');
        $('.gp2 .day .dropList').mCustomScrollbar();

        //career
        chrisSelect('.gp125 .student');
        $('.gp125 .student .dropList').mCustomScrollbar();
        chrisSelect('.gp125 .grade');
        $('.gp125 .grade .dropList').mCustomScrollbar();

        //artHouse
        chrisSelect('.artTopic');
        $('.artTopic .dropList').mCustomScrollbar();
    },
    resetSelect: function() {
        var resetBtn = $('.btnStyle .resetFormBtn');

        resetBtn.on('click', function() {

            var chrisSelect = $('form .chrisSelect');

            var afterCallObj = $('form .afterCall');

            for (var index = 0; index < chrisSelect.length; index++) {

                var placeholder = chrisSelect.eq(index).attr('data-placeholder');

                var text = chrisSelect.eq(index).find('.dropShow .character');

                text.html(placeholder);

                //刪除 被新增的結構
                afterCallObj.remove();

            }

        });
    },
    agreeBtn: function() {
        var objBtn = $('.agreeBtnArea');

        objBtn.on('click', '.icon', function() {

            var btnFather = $(this).closest('.agreeBtn');

            if (!btnFather.hasClass('confirm')) {
                btnFather.addClass('confirm');
            } else {
                btnFather.removeClass('confirm');
            }

        });
    },

    //說明縮放
    addLine: function() {
        var textInfo = $('.appTextInfo.multiple'),
            lineNum = textInfo.find('.list');

        for (var index = 0; index < lineNum.length; index++) {

            var span = '<span class="line"></span>';

            lineNum.eq(index).append(span);

        }
    },
    description: function() {
        var textInfo = $('.appTextInfo');

        if (textInfo.hasClass('multiple')) {

            textInfo.on('click', '.switchBtn', function() {

                var now = $(this).closest('.list');

                if (!now.hasClass('open')) {

                    setTimeout(function() {
                        now.siblings('.list').removeClass('open');
                        now.addClass('open');
                    }, 0);


                    now.siblings('.list').find('.extendBox').slideUp();
                    now.find('.extendBox').slideDown();

                } else {

                    now.removeClass('open');
                    now.find('.extendBox').slideUp();

                }

            });

        }
    },

    //clickScrollArea scrollBar
    scrollBar: function() {
        //
        var scrollBar = $('.clickScrollArea .box');

        if (scrollBar.length > 0) {
            var ps1 = new PerfectScrollbar('.clickScrollArea .box',{
                useBothWheelAxes: true,
            });
            console.log(ps1.reach.x)
        } else {
            return;
        }

        if (nickCheckDevice() == true) {
            scrollBar.addClass('scrollHide');
        } else {
            scrollBar.removeClass('scrollHide');
        }

        ChrisDelay(function() {
            ps1.update();
            if (nickCheckDevice() == true) {
                scrollBar.addClass('scrollHide');
            } else {
                scrollBar.removeClass('scrollHide');
            }
        }, 500);
    },

    //LANGUAGE 語言能力
    language: function() {
        var father = $('.appFormSec .language'),
            son = father.find('.son');

        for (var index = 0; index < son.length; index++) {

            //
            // var className = 'sonLn' + index;

            // son.eq(index).attr('data-id', className);

            //
            var langType = son.eq(index).find('.langType'),
                langLv = son.eq(index).find('.langLv');

            var langTypeList = langType.find('.dropList'),
                langLvList = langLv.find('.dropList');

            chrisSelect(langType);
            langTypeList.mCustomScrollbar();

            chrisSelect(langLv);
            langLvList.mCustomScrollbar();

        }

        appFunction.increase(father, son);

        appFunction.delete(father, son);
    },
    increase: function(father, son) {

        var origin = father.find('.originType')[0].outerHTML;

        var groupBox = father.find('.groupBox');

        father.on('click', '.increaseBtn', function() {
            //
            groupBox.append(origin);

            var thisObj = groupBox.find('.originType');

            thisObj.addClass('son afterCall');

            //
            // var sonLength = father.find('.son').length - 1;

            // var className = 'sonLn' + sonLength;

            // thisObj.attr('data-id', className);

            //
            var langType = thisObj.find('.langType'),
                langLv = thisObj.find('.langLv');

            var langTypeList = langType.find('.dropList'),
                langLvList = langLv.find('.dropList');

            chrisSelect(langType);
            langTypeList.mCustomScrollbar();

            chrisSelect(langLv);
            langLvList.mCustomScrollbar();

            setTimeout(function() {
                thisObj.removeClass('originType');
            }, 0);

        });

    },
    delete: function(father) {
        father.on('click', '.delete', function() {

            var obj = $(this).closest('.group');

            obj.remove();

            //
            // var son = father.find('.son');

            // for (var index = 0; index < son.length; index++) {

            //     var className = 'sonLn' + index;

            //     son.eq(index).attr('data-id', className);

            // }
        });
    }
}

/*exhibition 展覽活動 單元*/
var exhibition = {
    detailBannerSlick: function() {

        $('.bannerSec .slickBox').on('init', function(event, slick) {
            var a = '<li class="prev"><span class="icon icon-chriskeyboard_arrow_left"></span></li>',
                b = '<li class="next"><span class="icon icon-chriskeyboard_arrow_right"></span></li>';

            $('.slick-dots').append(a);
            $('.slick-dots').append(b);
        });

        $('.bannerSec .slickBox').slick({
            dots: true,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            arrows: true,
            customPaging: function(slider, i) {
                // this example would render "tabs" with titles
                return '<span class="dot"></span>';
            },
        });

        $('.bannerSec .prev').click(function() {
            $('.bannerSec .slickBox').slick('slickPrev');
        })
        $('.bannerSec .next').click(function() {
            $('.bannerSec .slickBox').slick('slickNext');
        })
    },
    artSlick: function() {
        var type100 = '.full .typeBox100';

        $(type100).each(function() {

            var obj = $(this).find('.bearBox'),
                objText = $(this).find('.bearTextBox');

            if (obj.find('.imgFrame').length > 1) {

                obj.slick({
                    arrows: false,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 750,
                    fade: true,
                    cssEase: 'linear',
                    asNavFor: objText
                });

                objText.slick({
                    arrows: false,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 750,
                    fade: true,
                    cssEase: 'linear',
                    draggable: false,
                    asNavFor: obj
                });

                obj.closest('.typeBox100').on('click', '.prev', function() {
                    obj.slick('slickPrev');
                });
                obj.closest('.typeBox100').on('click', '.next', function() {
                    obj.slick('slickNext');
                });


                //
                var objHeight = obj.height();

                obj.siblings('.slickBtnArea').css('height', objHeight);
            }

            ChrisDelay(function() {
                var objHeight = obj.height();

                obj.siblings('.slickBtnArea').css('height', objHeight);
            }, 500);

        });

        $('.fade').slick({
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            slide: 'div',
            cssEase: 'linear'
        });

    },
    moreSlick: function() {
        var type100 = '.more .typeBox100';

        $(type100).each(function() {

            var obj = $(this).find('.bearBox');

            if (obj.find('.imgFrame').length > 1) {

                obj.slick({
                    arrows: false,
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    speed: 750,
                    responsive: [{
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                            }
                        },
                    ]
                });

                obj.closest('.typeBox100').on('click', '.prev', function() {
                    obj.slick('slickPrev');
                });
                obj.closest('.typeBox100').on('click', '.next', function() {
                    obj.slick('slickNext');
                });
            }

        });
    },
    scrollLink: function() {
        //錨點移動
        var obj = $('.detailContent');

        var scrollSec = $('.scrollBro .sec'),
            link = $('.scrollBro .link');

        for (var index = 0; index < obj.length; index++) {

            var content = 'content' + index;

            obj.eq(index).addClass(content).attr('data-id', content);

        }

        for (var index = 0; index < scrollSec.find('.link').length; index++) {

            var content = '#content' + index;

            link.eq(index).attr('href', content);

        }
    },
    eventFromScroll: function() {
        //表格滾動
        var obj = $('.formBody'),
            list = obj.find('.list'),
            numberShow = obj.attr('data-show');

        var height = 0;

        for (var index = 0; index < numberShow; index++) {

            height = list.eq(index).outerHeight() + height;

            obj.css('max-height', height);

        }

        //more btn
        var moreBtn = $('.exEvent .btnStyle .btn'),
            list6H = list.eq(numberShow).outerHeight();

        var checkDevice = nickCheckDevice();

        if (checkDevice == true || window.innerWidth < 768) {

            $('.eventForm .formBody').mCustomScrollbar();

        } else {
            moreBtn.on('click', function() {
                $('.eventForm .formBody').mCustomScrollbar();
                setTimeout(function() {
                    $('.eventForm .formBody').mCustomScrollbar('scrollTo', list6H);
                }, 0);
            });
        }

        ChrisDelay(function() {
            if (checkDevice == true || window.innerWidth < 768) {

                $('.eventForm .formBody').mCustomScrollbar();

            }
        }, 500);
    },
    scrollBro: function() {
        //shareBtn
        var shareBtn = $('.scrollBro .shareBtn'),
            shareObj = $('.scrollBro .community'),
            link = shareObj.find('.link');

        shareBtn.on('click', function() {
            shareObj.slideToggle();
        });

        link.on('click', function() {
            shareObj.slideToggle();
        });

        //scroll sticky
        var scrollBro = $('.scrollBro');

        var dist = scrollBro.offset().top;

        var lastScrollTop = 0;
        $(window).scroll(function(event) {
            var st = $(this).scrollTop();

            if (st > lastScrollTop) {
                // downscroll code
                scrollBro.removeClass('fixed');
            } else {
                // upscroll code
                if (st > dist) {
                    //add
                    scrollBro.addClass('fixed');
                } else {
                    //remove
                    scrollBro.removeClass('fixed');
                }
            }
            lastScrollTop = st;
        });

        //scroll
        var trainT = [],
            trainB = [];
        var content = $('.detailContent'),
            scrollBroLink = scrollBro.find('.sec .link');
        $(window).scroll(function() {

            var st = $(this).scrollTop();

            for (var index = 0; index < content.length; index++) {

                trainT[index] = content.eq(index).offset().top;
                trainB[index] = trainT[index] + content.eq(index).outerHeight();

            }

            //判斷st 介於 trainT 跟 trainB
            for (var index = 0; index < trainT.length; index++) {

                if (st > trainT[index] && st < trainB[index]) {
                    scrollBroLink.removeClass('now');
                    scrollBroLink.eq(index).addClass('now');
                }

            }

        });

        //
        var ps1 = new PerfectScrollbar('.scrollBro .sec', {
            useBothWheelAxes: true,
        });
        var scrollBar = scrollBro.find('.sec');
        if (scrollBar.length > 0) {
            var ps1 = new PerfectScrollbar('.scrollBro .sec', {
                useBothWheelAxes: true,
            });
        } else {
            return;
        }

        if (nickCheckDevice() == true) {
            scrollBar.addClass('scrollHide');
        } else {
            scrollBar.removeClass('scrollHide');
        }

        ChrisDelay(function() {
            ps1.update();
            if (nickCheckDevice() == true) {
                scrollBar.addClass('scrollHide');
            } else {
                scrollBar.removeClass('scrollHide');
            }
        }, 500);
    },

    //燈箱
    fakeBox: function() {
        var obj = $('body'),
            fakeBox = $('.ajaxExhibitionDetail');

        var dist = '';

        //open
        obj.on('click', '.openFakeBox', function() {

            if (!fakeBox.hasClass('open')) {

                //
                dist = $(window).scrollTop();
                $('body').attr('data-dist', dist);
                lock_bScroll();

                //
                fakeBox.addClass('open');

                //
                setTimeout(function() {
                    exhibition.audioMix();
                }, 0);

                //hide soundBall
                $('.soundBall').removeClass('showUp');
            }

        });

        //open(右下角小按鈕 soundBall)
        obj.on('click', '.smallFakeBtn', function() {

            if (!fakeBox.hasClass('open')) {

                //
                dist = $(window).scrollTop();
                $('body').attr('data-dist', dist);
                lock_bScroll();

                //
                fakeBox.addClass('open');

                //hide soundBall
                $('.soundBall').removeClass('showUp');
            }

        });

        //close
        fakeBox.on('click', '.ajax_close', function() {

            var btn = $(this);
            dist = $('body').attr('data-dist');

            fakeBox.addClass('close');
            history.replaceState('', '', $('.base-url').val() + "/ExhibitionAndEvent/Info/" + $('#PageTitle').val());
            setTimeout(function() {

                fakeBox.removeClass('open close');
                $('body').attr('data-dist', '');

                unlock_bScroll();
                window.scrollTo(1, dist);

                // if (!$('.soundBall').hasClass('showUp')) {
                //     $('.soundBall').addClass('showUp');
                // }

                // 縮小判斷
                btn.hasClass('amplitude-stop') ? $('.soundBall').removeClass('showUp') : $('.soundBall').addClass('showUp')

            }, 1000);

        });

    },
    recFrameScroll: function() {
        //左邊scroll
        var obj = $('.imgRecFrame'),
            box = obj.find('.imgRecBox');
        img = box.find('.img');

        var ctrlBtn = $('.ctrlBtnArea');

        box.eq(0).addClass('now');

        //
        for (var index = 0; index < box.length; index++) {
            box.eq(index).attr('data-id', index);
        }

        //手機的時候 滑的部分要把 $(window).height() 改成跟 rightSec 一樣高(待補)
        var wHeight = '';
        if ($(window).width() <= 1024) {
            // wHeight = $(window).height() * 0.7;
            wHeight = 500;
        } else {
            wHeight = $(window).height()
        }
        ChrisDelay(function() {
            if ($(window).width() <= 1024) {
                // wHeight = $(window).height() * 0.7;
                wHeight = 500;
            } else {
                wHeight = $(window).height()
            }
        }, 500);

        ctrlBtn.on('click', '.btn', function() {
            var target = obj.find('.now');

            if ($(this).hasClass('prev')) {
                //上一張

                var goal = target.prev();

                if (goal.length == 0) {
                    return
                }


                // var dist = goal.find('.img').position().top;

                // var num = '-' + dist;


                if (goal.attr('data-id') == 0) {
                    var num = 0;
                } else {
                    var dist = goal.position().top + goal.height();

                    var num = '-' + (dist - wHeight);
                }

                var move = 'translateY(' + num + 'px)';

                obj.css('transform', move);

                target.removeClass('now');
                goal.addClass('now');
            } else {
                //下一張

                var goal = target.next();

                if (goal.length == 0) {
                    return
                }

                var dist = goal.position().top + goal.height();

                var num = '-' + (dist - wHeight);

                var move = 'translateY(' + num + 'px)';

                obj.css('transform', move);

                target.removeClass('now');
                goal.addClass('now');
            }
        });
    },
    scrollBarlbox: function() {
        //右邊scroll

        if ($(window).width() <= 1024) {
            $('.leftSec .tigerBeer').mCustomScrollbar("disable", true);
        } else {
            $('.leftSec .tigerBeer').mCustomScrollbar({
                theme: "dark",
            });
        }

        ChrisDelay(function() {
            if ($(window).width() <= 1024) {
                $('.leftSec .tigerBeer').mCustomScrollbar("disable");
            } else {
                $('.leftSec .tigerBeer').mCustomScrollbar("update");
            }
        }, 500);
    },
    bHeadArea: function() {
        var head = $('.bHeadArea'),
            list = head.find('.list'),
            obj = $('.tigerKitchen .kitBox');

        for (var index = 0; index < list.length; index++) {

            list.eq(index).attr('data-id', index);

        }

        head.on('click', '.list', function() {
            var id = $(this).attr('data-id');

            obj.removeClass('now');
            obj.eq(id).addClass('now');

            list.removeClass('now');
            $(this).addClass('now');
        });
    },
    audioSwitchArea: function() {
        //音頻區域切換
        var obj = $('.langSwitchArea'),
            list = obj.find('.list'),
            content = $('.allAudioBox .audioContent');

        for (var index = 0; index < list.length; index++) {

            list.eq(index).attr('data-id', index);

        }

        obj.on('click', '.list', function() {
            var id = $(this).attr('data-id');

            $(this).siblings().removeClass('now');
            $(this).addClass('now');

            content.removeClass('now');
            content.eq(id).addClass('now');
        });
    },
    auIndex: '',
    setting: '',
    audioMix: function() {
        var beOpenBox = $('.ajaxExhibitionDetail.open');
        var objBox = beOpenBox.find('.allAudioBox'),
            audioFrame = objBox.find('.audioFrame');

        //
        exhibition.setting = {
            "songs": [],
            "playlists": {},
            "callbacks": {
                'before_play': function() {
                    $('.audioFrame').removeClass('playing');
                    $('.audioFrame').siblings('.textFrame').removeClass('showWave');
                },
                'after_play': function() {
                    var app = '.audioFrame[data-list="au' + Amplitude.getActiveIndex() + '"]',
                        index = 'au' + Amplitude.getActiveIndex();

                    setTimeout(function() {
                        $(app).addClass('playing');
                        //show波浪圖
                        $(app).siblings('.textFrame').addClass('showWave');
                    }, 0);

                    //檢查是否為靜音狀態
                    if ($(app).hasClass('beMuted')) {
                        Amplitude.audio().muted = true;
                    } else {
                        Amplitude.audio().muted = false;
                    }
                },
                'after_stop': function() {

                    $('.audioFrame').eq(exhibition.auIndex).removeClass('playing');
                    $('.audioFrame').siblings('.textFrame').removeClass('showWave');
                },
                'time_update': function() {
                    var app = '.audioFrame[data-list="au' + Amplitude.getActiveIndex() + '"]';

                    var progress = Amplitude.getSongPlayedPercentage() / 100;

                    $(app).find('.amplitude-song-played-progress').attr('value', progress);
                },
                'stop': function() {
                    console.log('Audio has been stopped.')
                }
            }
        }

        var url = '',
            list = '',
            id = '',
            dTime = '',
            nowFrame = '';
        for (var index = 0; index < audioFrame.length; index++) {
            nowFrame = audioFrame.eq(index);

            url = nowFrame.find('audio source').attr('src');

            list = nowFrame.attr('data-list');

            id = nowFrame.find('audio').attr('id', list);

            exhibition.setting.songs[index] = { "url": url, };

            exhibition.setting.playlists[list] = [index];

            // document.getElementById('au0').load();

            //給時間
            dTime = exhibition.countMusicDuration(list);

            if (dTime.length == 2) {
                //有分位
                nowFrame.find('.duration .amplitude-duration-minutes').html(dTime[0]);
                nowFrame.find('.duration .amplitude-duration-seconds').html(dTime[1]);
            }
            if (dTime.length == 1) {
                //沒有分位
                nowFrame.find('.duration .amplitude-duration-seconds').html(dTime[0]);
            }
        }


        Amplitude.init(exhibition.setting);

        // console.log( setting.songs[3] = {"url": "../../upload/fa2/exhibition/aaa.mp3",} );

        // console.log( setting.playlists['test3'] = [3] );

        // console.log( setting.playlists );

        // console.log( setting.songs );

    },
    audioBtn: function() {
        //按鈕事件綁定
        $('.audioFrame').on('click', '.ctrArea', function() {
            var audioFrame = $(this).closest('.audioFrame');

            exhibition.auIndex = audioFrame.attr('data-index');
        });

        $('.ctrArea .stop').on('click', function() {
            $(this).closest('.audioFrame').removeClass('playing');
            $(this).closest('.audioFrame').siblings('.textFrame').removeClass('showWave');
        });

        //靜音判斷
        $('.muteArea').on('click', '.mute', function() {
            if (!$(this).closest('.audioFrame').hasClass('beMuted')) {
                $(this).closest('.audioFrame').addClass('beMuted');
                Amplitude.audio().muted = true;
            } else {
                $(this).closest('.audioFrame').removeClass('beMuted');
                Amplitude.audio().muted = false;
            }
        });
    },
    countMusicDuration: function(int) {
        var aDuration = Math.floor(document.getElementById(int).duration) || 0,
            numA = '',
            numB = '';

        // document.getElementById('au0').onloadstart = function() {
        //     alert("Starting to load video123");
        // };

        // console.log(aDuration);

        if (aDuration > 60) {
            //商數 + 餘數
            // console.log( parseInt( aDuration / 60 ) );
            // console.log( aDuration % 60 );
            if (parseInt(aDuration / 60) < 10) {
                numA = '0' + parseInt(aDuration / 60);
            } else {
                numA = aDuration % 60;
            }

            if (aDuration % 60 < 10) {
                numB = '0' + aDuration % 60;
            } else {
                numB = aDuration % 60;
            }

            return [numA, numB]
        }
        if (aDuration <= 60) {
            //餘數
            // console.log(aDuration % 60);
            if (aDuration % 60 < 10) {
                numB = ('0' + aDuration % 60);
            } else {
                numB = aDuration % 60;
            }

            return [numB]
        }
    },

    //報名視窗
    bookWindow: function() {
        var obj = $('.eventForm .apply'),
            box = $('.bookWindow');

        //
        $('.bookWindow').mCustomScrollbar();

        obj.on('click', '.link', function() {

            if (!box.hasClass('open')) {

                //
                dist = $(window).scrollTop();
                $('body').attr('data-dist', dist);
                lock_bScroll();

                //
                box.addClass('open');
            }

        });

        box.on('click', '.closeBtn', function() {

            dist = $('body').attr('data-dist');

            box.addClass('close');

            setTimeout(function() {

                box.removeClass('open close');
                $('body').attr('data-dist', '');

                unlock_bScroll();
                window.scrollTo(1, dist);

            }, 1000);
        });
    },
    //exSmallBox
    exSmallBox: function() {
        var obj = $('.exDetailBigMac .box'),
            box = $('.exSmallBox');

        //
        box.mCustomScrollbar();

        //
        obj.on('click', '.openSmallBox', function() {
            if (!box.hasClass('open')) {
                //
                dist = $(window).scrollTop();
                $('body').attr('data-dist', dist);
                lock_bScroll();

                //
                box.addClass('open');
            }

            if ($(this).hasClass('cost')) {
                box.find('.costBox').addClass('show');
            }
            if ($(this).hasClass('admission')) {
                box.find('.admissionBox').addClass('show');
            }
        });

        //
        box.on('click', '.closeBtn', function() {

            dist = $('body').attr('data-dist');

            box.addClass('close');

            setTimeout(function() {

                box.removeClass('open close');
                box.find('.extraGum').removeClass('show');
                $('body').attr('data-dist', '');

                unlock_bScroll();
                window.scrollTo(1, dist);

            }, 1000);
        });

        //點擊回到最上
        box.on('click', '.backTopBtn', function() {
            box.mCustomScrollbar("scrollTo", 'top');
        });
    },
    //process詳細活動資訊
    contentBox: function() {
        var obj = $('.eventForm .list'),
            closeBtn = $('.eventForm .processBox .closeSlideUpBtn');

        obj.on('click', '.contentBox', function() {

            var box = $(this).closest('.list').find('.processBox');

            $(this).closest('.list').siblings().find('.processBox').removeClass('open').slideUp();

            box.addClass('open').slideDown();

            // $('.eventForm .formBody').mCustomScrollbar();
        });

        closeBtn.on('click', function() {
            var target = $(this).closest('.processBox');

            target.slideUp().removeClass('open');
        });
    }
}
var exListPage = {
    switchLink: function() {
        var obj = $('.clickScrollArea');

        obj.on('click', '.link', function() {

            if (!$(this).hasClass('openSbox')) {

                $(this).siblings().removeClass('now');

                $(this).addClass('now');
            }
        });

        //開啟搜尋頁
        exListPage.sBox();
    },
    sBox: function() {
        var obj = $('.clickScrollArea'),
            target = $('.searchKFC'),
            banana = target.find('.bananaBox .banana');

        //
        $('.searchKFC').mCustomScrollbar();

        //開啟搜尋頁
        obj.on('click', '.openSbox', function() {

            var id = $(this).attr('data-box');

            var box = '.searchKFC.' + id;

            if (obj.find('.link.now').hasClass('history')) {
                $(box).addClass('history');
            }

            if (!$(box).hasClass('open')) {

                setTimeout(function() {
                    $(box).addClass('open');
                }, 0);

                //
                dist = $(window).scrollTop();
                $('body').attr('data-dist', dist);
                lock_bScroll();

                //
                for (var index = 0; index < banana.length; index++) {

                    var a = banana.eq(index);

                    chrisSequence('.banana:eq(' + index + ') .list', .7, 1.2);
                }

            }

        });

        //close搜尋頁
        target.on('click', '.closeBtn', function() {

            var searchKFC = $(this).closest('.searchKFC');

            if (searchKFC.hasClass('open')) {

                searchKFC.addClass('close');

                //
                chrisSequence('.banana .list', 0, -10);

                setTimeout(function() {

                    searchKFC.removeClass('open close history');

                    $('body').attr('data-dist', '');

                    unlock_bScroll();
                    window.scrollTo(1, dist);

                }, 1000);

            }

        });

        //list
        banana.on('click', '.list', function() {
            $(this).toggleClass('choose');
        });

    },
    sBoxSelect: function() {
        //searchA
        chrisSelect('.searchA .year');
        $('.searchA .year .dropList').mCustomScrollbar();
    }
}

/*DISCOVER 探索當代*/
var discover = {
    clickScrollArea: function() {
        var obj = $('.clickScrollArea');

        obj.on('click', '.link', function() {

            var _this = $(this);

            _this.addClass('now').siblings('.link').removeClass('now');

        });
    },
    oddFunc: function() {
        //
        var obj = $('.smallFrame');
        obj.removeClass('return');
        $('.smallFrame:odd').addClass('return');
    }
}

/*contact 聯絡我們*/
var contact = {
    select: function() {
        //salutaSelect
        chrisSelect('.salutaSelect');
        $('.salutaSelect .dropList').mCustomScrollbar();

        //subjectSelect
        chrisSelect('.subjectSelect');
        $('.subjectSelect .dropList').mCustomScrollbar();

        //重置下拉選單的已選項目
        appFunction.resetSelect();
    },

}

/*shop 藝術商店*/
var mocaShop = {
    bannerSlick: function() {
        $('.shopBannerSlick').on('init', function(event, slick) {
            var a = '<li class="prev"><span class="icon icon-chriskeyboard_arrow_left"></span></li>',
                b = '<li class="next"><span class="icon icon-chriskeyboard_arrow_right"></span></li>';

            $('.slick-dots').append(a);
            $('.slick-dots').append(b);
        });

        $('.shopBannerSlick').slick({
            autoplay: true,
            autoplaySpeed: 3000,
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            fade: true,
            arrows: false,
            customPaging: function(slider, i) {
                // this example would render "tabs" with titles
                return '<span class="dot"></span>';
            },
        });

        $('.shopBannerSlick .prev').click(function() {
            $('.shopBannerSlick').slick('slickPrev');
        })
        $('.shopBannerSlick .next').click(function() {
            $('.shopBannerSlick').slick('slickNext');
        })
    },
    shopBeerSlick: function(showNum, listWidth, object, objectFather) {

        var setting = {
            lazyLoad: 'ondemand',
            autoplay: true,
            autoplaySpeed: 3000,
            dots: false,
            infinite: true,
            slidesToShow: showNum,
            slidesToScroll: 1,
            speed: 1000,
            arrows: false,
            draggable: false,
            adaptiveHeight: false,
            responsive: [{
                    //fire when 1559px
                    breakpoint: 1560,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    //fire when 1365px
                    breakpoint: 1366,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    //fire when 1023px
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    //fire when 767px
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        }

        var object = $(object);

        for (var index = 0; index < object.length; index++) {

            var jName = 'collection' + index,
                bName = '.collection' + index;

            var _this = object.eq(index);

            var listNum = _this.find('.list').length;

            _this.attr('data-listnum', listNum);

            var arrowBox = _this.closest(objectFather).find('.leftRightBox'),
                arrowWidth = ((showNum * listWidth) + 60) + 'px';

            arrowBox.css('max-width', arrowWidth);


            //
            _this.addClass(jName);

            $(bName).slick(setting);

        }

        //頁面一開始載入先執行一次，之後每次breakpoint再執行一次
        mocaShop.judgeLeftRight(object);
        object.on('breakpoint', function(event, slick, breakpoint) {

            mocaShop.judgeLeftRight(object);

        });

        // $('.shopBeerSlick').slick( setting );

        $(objectFather).on('click', '.prev', function() {
            $(object).slick('slickPrev');
        });
        $(objectFather).on('click', '.next', function() {
            $(object).slick('slickNext');
        });
    },
    picChange: function() {
        xsBGLoad(414);
        $(window).resize(function() {
            xsBGLoad(414);
        });
    },
    judgeLeftRight: function(object) {
        for (var index = 0; index < object.length; index++) {
            var _this = object.eq(index);
            number = _this.attr('data-listnum');
            nowListNum = _this.find('.list').length;

            if (number < nowListNum) {
                _this.closest('.slickFrameBox').find('.leftRightBox').addClass('showUp');
            } else {
                _this.closest('.slickFrameBox').find('.leftRightBox').removeClass('showUp');
            }

        }
    },
    blazy: function() {
        var bLazy = new Blazy({
            offset: 100,
            success: function(ele) {
                Waypoint.refreshAll();
            }
        });
    },
    scrollAreaSlick: function() {
        //
        var scrollBar = $('.clickScrollArea');
        if (scrollBar.length > 0) {
            var ps1 = new PerfectScrollbar('.clickScrollArea', {
                useBothWheelAxes: true,
            });
        } else {
            return;
        }

        if (nickCheckDevice() == true) {
            scrollBar.addClass('scrollHide');
        } else {
            scrollBar.removeClass('scrollHide');
        }

        ChrisDelay(function() {
            ps1.update();
            if (nickCheckDevice() == true) {
                scrollBar.addClass('scrollHide');
            } else {
                scrollBar.removeClass('scrollHide');
            }
        }, 500);
        // var object  = $('.clickScrollArea .box'),
        //     listNum = object.find('.link').length;

        // var objW = 0;

        // for (var index = 0; index < object.find('.link').length; index++) {

        //     objW = object.find('.link').eq(index).outerWidth(true) + objW;

        // }

        // object.attr('data-width', objW);

        // object.closest('.clickScrollArea').css('max-width', objW+'px');

        // var setting = {
        //     arrows: false,
        //     infinite: false,
        //     speed: 300,
        //     slidesToShow: listNum,
        //     slidesToScroll: 1,
        //     variableWidth: true,
        //     responsive: [
        //         {
        //             breakpoint: objW,
        //             settings: {
        //                 slidesToShow: 1,
        //                 centerMode: true,
        //                 focusOnSelect: true,
        //             }
        //         },
        //     ]
        // }

        // object.on('afterChange', function(event, slick){
        //     slick.$slides.removeClass('now');
        //     object.find('.slick-current').addClass('now');
        // });

        // object.slick( setting );
    },
    scrollFrameSlick: function() {
        //
        var scrollBar = $('.mocaSNav .scrollFrame');
        if (scrollBar.length > 0) {
            var ps1 = new PerfectScrollbar('.mocaSNav .scrollFrame', {
                useBothWheelAxes: true,
            });
        } else {
            return;
        }

        if (nickCheckDevice() == true) {
            scrollBar.addClass('scrollHide');
        } else {
            scrollBar.removeClass('scrollHide');
        }

        ChrisDelay(function() {
            ps1.update();
            if (nickCheckDevice() == true) {
                scrollBar.addClass('scrollHide');
            } else {
                scrollBar.removeClass('scrollHide');
            }
        }, 500);
        //slickScroll
        // var object  = $('.scrollFrame .navBar'),
        //     listNum = object.find('.link').length;

        // var objW = 0;

        // for (var index = 0; index < object.find('.link').length; index++) {

        //     objW = object.find('.link').eq(index).outerWidth(true) + objW;

        // }

        // object.attr('data-width', objW);

        // object.closest('.scrollFrame').css('max-width', objW+'px');

        // var setting = {
        //     arrows: false,
        //     infinite: false,
        //     speed: 300,
        //     slidesToShow: listNum,
        //     slidesToScroll: 1,
        //     variableWidth: true,
        //     responsive: [
        //         {
        //             breakpoint: objW,
        //             settings: {
        //                 slidesToShow: 1,
        //                 centerMode: true,
        //                 focusOnSelect: true,
        //             }
        //         },
        //     ]
        // }

        // object.on('afterChange', function(event, slick){
        //     slick.$slides.removeClass('now');
        //     object.find('.slick-current').addClass('now');
        // });

        // object.slick( setting );
    },
    randomList: function() {
        //for shop index shopSerial
        var list = $('.shopSerial .list .legBox');

        for (var index = 0; index < list.length; index++) {

            var number = randLetter(4);

            list.eq(index).addClass(number);

        }
    },

    //detail
    detailPresent: function() {

        var pandoraBox = $('.pandoraBox'),
            walletSlick = $('.walletSlick'),
            list = walletSlick.find('.list');

        if (list.length <= 1) {
            walletSlick.addClass('noArrow');
        }

        //背景圖
        pandoraBox.slick({
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            fade: true,
            arrows: false,
            asNavFor: '.walletSlick'
        });

        //
        walletSlick.slick({
            lazyLoad: 'ondemand',
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            fade: true,
            arrows: false,
            asNavFor: '.pandoraBox'
        });

        $('.walletSlick .prev').click(function() {
            walletSlick.slick('slickPrev');
        })
        $('.walletSlick .next').click(function() {
            walletSlick.slick('slickNext');
        })
    },
    boardSlick: function() {
        var board = $('.shopDetailBoard'),
            object = board.find('.boardSlickFrame'),
            list = object.find('.list');

        if (list.length <= 1) {
            $('.leftRightBox').addClass('hide');
            object.find('.slick-dots').addClass('hide');
        }

        var setting = {
            lazyLoad: 'ondemand',
            autoplay: true,
            autoplaySpeed: 3000,
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            fade: true,
            arrows: false,
            customPaging: function(slider, i) {
                // this example would render "tabs" with titles
                return '<span class="dot"></span>';
            },
        }

        object.slick(setting);

        board.on('click', '.prev', function() {
            object.slick('slickPrev');
        })
        board.on('click', '.next', function() {
            object.slick('slickNext');
        })
    },
}

/*member 會員*/
var mocaMember = {
    switchLink: function() {
        var obj = $('.scrollFrame .navBar');
        switchBtn = $('.member.index');

        obj.on('click', '.link', function() {
            $(this).siblings('.link').removeClass('now');
            $(this).addClass('now');

            if ($(this).attr('data-class')) {
                var a = $(this).attr('data-class'),
                    b = '.' + a;
                $('.shotList').removeClass('showUp');
                $(b).addClass('showUp');
            }
        });

        switchBtn.on('click', '.switchBtn', function() {
            if ($(this).attr('data-class')) {
                var a = $(this).attr('data-class'),
                    b = '.' + a;
                $('.shotList').removeClass('showUp');
                $(b).addClass('showUp');

                //
                obj.find('.link').removeClass('now');
                obj.find('.link[data-class="' + a + '"]').addClass('now');
            }
        });
    },
    select: function() {
        //salutaSelect
        chrisSelect('.chooseSelectBox .chrisSelect');
        $('.chooseSelectBox .chrisSelect .dropList').mCustomScrollbar();

        //memberInformation
        chrisSelect('.formA .sexSelect');
        $('.formA .sexSelect .dropList').mCustomScrollbar();

        chrisSelect('.formA .nationSelect');
        $('.formA .nationSelect .dropList').mCustomScrollbar();

        chrisSelect('.formA .yearSelect');
        $('.formA .yearSelect .dropList').mCustomScrollbar();

        chrisSelect('.formA .monthSelect');
        $('.formA .monthSelect .dropList').mCustomScrollbar();

        chrisSelect('.formA .dateSelect');
        $('.formA .dateSelect .dropList').mCustomScrollbar();

        chrisSelect('.formA .countrySelect');
        $('.formA .countrySelect .dropList').mCustomScrollbar();

        chrisSelect('.formA .citySelect');
        $('.formA .citySelect .dropList').mCustomScrollbar();

        chrisSelect('.formA .areaSelect');
        $('.formA .areaSelect .dropList').mCustomScrollbar();

        chrisSelect('.formA .letterSelect');
        $('.formA .letterSelect .dropList').mCustomScrollbar();
    },

    //
    countList: function() {
        //更新book list id
        var object = $('.memberBooking .bookListFrame'),
            list = object.find('.list');

        for (var index = 0; index < list.length; index++) {

            list.eq(index).attr('data-num', index);

            if (index < 9) {
                var number = '0' + (index + 1);

                list.eq(index).find('.numBox')[0].innerText = number;
            } else {
                var number = index + 1;

                list.eq(index).find('.numBox')[0].innerText = number;
            }

        }
    },
    cancelApply: function() {
        //取消報名
        var object = $('.memberShot'),
            closeBtn = $('.mCancelBag .closeBtn'),
            mCancelBag = $('.mCancelBag'),
            bookBox = object.find('.bookListFrame');

        mCancelBag.mCustomScrollbar();

        //
        object.on('click', '.openCancelBox', function() {

            if (!mCancelBag.hasClass('open') && !$(this).closest('.list').hasClass('canceled')) {
                mCancelBag.addClass('open');

                //
                dist = $(window).scrollTop();
                $('body').attr('data-dist', dist);
                lock_bScroll();

                //
                var num = $(this).closest('.list').attr('data-num');

                mCancelBag.attr('data-num', num);
            }

        });

        //
        closeBtn.on('click', function() {

            var bag = $(this).closest('.hideBagType');

            bag.addClass('close');

            setTimeout(function() {
                bag.removeClass('open close');

                mCancelBag.removeAttr('data-num');

                unlock_bScroll();
                window.scrollTo(1, dist);

                $('body').attr('data-dist', '');
            }, 1000);

        });
    },
    bookInformation: function(btn, list) {
        var openBtn = $(btn),
            closeBtn = openBtn.find('.closeBtn'),
            dist = '',
            bookBag = $('.mBookBag'),
            noticeBox = bookBag.find('.noticeBox'),
            list = list || '.list';

        //
        openBtn.on('click', '.openBookBtn', function() {
            var obj = $(this).closest(list),
                bookBag = obj.find('.mBookBag');

            if (!bookBag.hasClass('open')) {
                bookBag.addClass('open');

                //
                dist = $(window).scrollTop();
                $('body').attr('data-dist', dist);
                lock_bScroll();
            }
        });

        //
        closeBtn.on('click', function() {

            var bag = $(this).closest('.hideBagType');

            bag.addClass('close');

            setTimeout(function() {
                bag.removeClass('open close');

                unlock_bScroll();
                window.scrollTo(1, dist);

                $('body').attr('data-dist', '');
            }, 1000);

        });

        //
        noticeBox.mCustomScrollbar();
    },
    hideBagType: function(obj, box) {
        var object = $(obj),
            closeBtn = $(box).find('.closeBtn'),
            hideBag = $(box),
            dist = '';

        hideBag.mCustomScrollbar();

        //
        object.on('click', function() {

            if (!hideBag.hasClass('open')) {
                hideBag.addClass('open');

                //
                dist = $(window).scrollTop();
                $('body').attr('data-dist', dist);
                lock_bScroll();

                //
                var num = $(this).closest('.list').attr('data-num');

                hideBag.attr('data-num', num);
            }

        });

        //
        closeBtn.on('click', function() {

            var bag = $(this).closest('.hideBagType');

            bag.addClass('close');

            setTimeout(function() {
                bag.removeClass('open close');

                hideBag.removeAttr('data-num');

                unlock_bScroll();
                window.scrollTo(1, dist);

                $('body').attr('data-dist', '');
            }, 1000);

        });
    },
    mSelfie: function() {
        var object = $('.mSelfieBag'),
            selfieBox = object.find('.selfieBox'),
            headStick = $('.memberInformation .selfieBox .img');

        //使用預設圖片
        object.on('click', '.default', function() {

            var path = $(this).attr('data-path');

            selfieBox.find('img').attr('src', path);
        });

        //
        object.on('click', '.agree', function() {
            var imgPath = selfieBox.find('img').attr('src');

            headStick.attr('src', imgPath);
        });
    },

    //logPage
    logPageSelect: function() {
        //logPage
        chrisSelect('.formRegister .nationSelect');
        $('.formRegister .nationSelect .dropList').mCustomScrollbar();
    },

    registerFire: function() {
        //
        $('.registAccount').mCustomScrollbar();
        $('.serviceRuleHideBox .content').mCustomScrollbar();
        $('.fAccountA').mCustomScrollbar();

        if(nickCheckDevice() == true){
            $('.registAccount').mCustomScrollbar('destroy')
            $('.fAccountA').mCustomScrollbar('destroy');
            $('.hideAccountType').css({
                'overflow-y': 'scroll'
            })
            $('.fAccountA').css({
                'overflow-y': 'scroll'
            })
        }else{
            $('.registAccount').mCustomScrollbar()
            $('.hideAccountType').css({
                'overflow-y': ''
            })
            $('.fAccountA').css({
                'overflow-y': 'scroll'
            })
        }

        $(window).resize(function() {
            if(nickCheckDevice() == true){
                $('.registAccount').mCustomScrollbar('destroy')
                $('.fAccountA').mCustomScrollbar('destroy');
                $('.hideAccountType').css({
                    'overflow-y': 'scroll'
                })
                $('.fAccountA').css({
                    'overflow-y': 'scroll'
                })
            }else{
                $('.registAccount').mCustomScrollbar()
                $('.hideAccountType').css({
                    'overflow-y': ''
                })
                $('.fAccountA').css({
                    'overflow-y': 'scroll'
                })
            }
        })

        //
        selectTest.resetSelect('.formRegister');

        //
        mocaMember.registerCtrl();

        //
        mocaMember.registerService();
    },
    registerCtrl: function() {
        //
        var logFrame = $('.logFrame'),
            openBtn = logFrame.find('.regist'),
            registPage = $('.registAccount'),
            closeBtn = registPage.find('.closeRegist'),
            callBpage = registPage.find('.callPageBbox'),
            pageAbox = registPage.find('.pageAbox'),
            pageBbox = registPage.find('.pageBbox'),
            checkIcon = registPage.find('.serviceRule .iconBox');

        //
        var dist = '';

        openBtn.on('click', function() {

            if (!registPage.hasClass('open')) {

                dist = $(window).scrollTop();
                registPage.addClass('open');
                lock_bScroll();
            }

        });

        //
        closeBtn.on('click', function() {
            registPage.addClass('close');

            //食神歸位
            setTimeout(function() {
                registPage.removeClass('open close');
                pageAbox.addClass('showUp');
                pageBbox.removeClass('showUp confirm');
                checkIcon.removeClass('red');
                unlock_bScroll();
                window.scrollTo(1, dist);
            }, 600);
        });

        //
        callBpage.on('click', function() {
            if (pageBbox.hasClass('confirm')) {
                pageAbox.removeClass('showUp');
                pageBbox.addClass('showUp');
            }
        });

        //
        checkIcon.on('click', function() {
            $(this).toggleClass('red');
            pageBbox.toggleClass('confirm');
        });
    },
    registerService: function() {
        //會員服務條款
        var registPage = $('.registAccount'),
            obj = $('.serviceRuleHideBox'),
            openBtn = registPage.find('.openRule'),
            closeBtn = obj.find('.closeRule'),
            agreeBtn = obj.find('.agree'),
            pageBbox = registPage.find('.pageBbox');

        openBtn.on('click', function() {
            if (!obj.hasClass('open')) {
                obj.addClass('open');
            }
        });

        closeBtn.on('click', function() {
            obj.addClass('close');

            setTimeout(function() {
                obj.removeClass('open close');
            }, 900);
        });

        agreeBtn.on('click', function() {
            registPage.find('.serviceRule .iconBox').addClass('red');
            pageBbox.addClass('confirm');
        });
    },

    modelA: function(openBtn, obj, frame) {
        //
        var logFrame = $(frame),
            openBtn = logFrame.find(openBtn),
            objPage = $(obj),
            closeBtn = objPage.find('.closeDoor'),
            callBpage = objPage.find('.callPageBbox'),
            pageAbox = objPage.find('.pageAbox'),
            pageBbox = objPage.find('.pageBbox');

        var dist = '';

        //
        openBtn.on('click', function() {

            if (!objPage.hasClass('open')) {
                objPage.addClass('open');

                //
                dist = $(window).scrollTop();
                $('body').attr('data-dist', dist);
                lock_bScroll();
            }

        });

        //
        closeBtn.on('click', function() {
            objPage.addClass('close');

            //食神歸位
            setTimeout(function() {
                objPage.removeClass('open close');
                pageAbox.addClass('showUp');
                pageBbox.removeClass('showUp');

                //
                $('body').attr('data-dist', '');
                unlock_bScroll();
                window.scrollTo(1, dist);
            }, 600);
        });

        //
        callBpage.on('click', function() {
            pageAbox.removeClass('showUp');
            pageBbox.addClass('showUp');
        });
    },
    fAccountFire: function() {
        mocaMember.modelA('.openFaccount', '.fAccountA', '.logFrame');
    },
    fPasswordFire: function() {
        mocaMember.modelA('.openFpassword', '.fPasswordA', '.logFrame');
    },
    rePasswordFire: function() {
        mocaMember.modelA('', '.RePassword', '.logFrame');
    },
    chAccountFire: function() {
        mocaMember.modelA('.openChAccount', '.chAccount', '.member.index');
    },
    chPasswordFire: function() {
        mocaMember.modelA('.openChPassword', '.chPassword', '.member.index');
    },

    //驗證
    verification: function(obj) {
        //會員服務條款
        var obj = $(obj),
            closeBtn = obj.find('.closeRule');

        closeBtn.on('click', function() {
            obj.addClass('close');

            setTimeout(function() {
                obj.removeClass('open close');
            }, 900);
        });
    }
}

/*privacy 隱私權*/
var mocaPrivacy = {
        fire: function() {
            var openBtn = $('.openPrivacy'),
                fakeBox = $('.privacyFakeBox');

            //
            fakeBox.mCustomScrollbar();

            //
            openBtn.on('click', function() {

                if (!fakeBox.hasClass('open')) {
                    fakeBox.addClass('open');

                    //
                    dist = $(window).scrollTop();
                    $('body').attr('data-dist', dist);
                    lock_bScroll();

                }

            });

            //
            fakeBox.on('click', '.closeBtn', function() {
                dist = $('body').attr('data-dist');

                fakeBox.addClass('close');

                fakeBox.find('.goldCross').removeClass('show');

                setTimeout(function() {

                    fakeBox.removeClass('open close');
                    $('body').attr('data-dist', '');

                    unlock_bScroll();
                    window.scrollTo(1, dist);

                }, 1000);
            });

            //
            mocaPrivacy.slideContent();

            //點擊回到最上
            fakeBox.on('click', '.backTopBtn', function() {
                fakeBox.mCustomScrollbar("scrollTo", 'top');
            });
        },
        slideContent: function() {
            var crossWave = $('.crossWave');

            crossWave.on('click', '.open', function() {
                var list = $(this).closest('.list');

                list.siblings('.list').removeClass('openIt').find('.content').slideUp();
                list.addClass('openIt').find('.content').slideDown();
            });

            crossWave.on('click', '.close', function() {
                var list = $(this).closest('.list');

                list.removeClass('openIt').find('.content').slideUp();
            });
        }
    }
    /*privacy 隱私權*/

/*mocaMenu*/
var mocaMenu = {
        fire: function() {
            var openBtn = $('.menuBt'),
                menuBox = $('.mocaMenu'),
                closeBtn = menuBox.find('.closeBtn'),
                eleArray = {};

            //
            menuBox.mCustomScrollbar({
                callbacks: {
                    whileScrolling: function() {
                        Waypoint.refreshAll();
                    }
                }
            });

            if(nickCheckDevice() == true){
                menuBox.mCustomScrollbar('destroy')
                $('.mocaMenu').css({
                    'overflow-y': 'scroll'
                })
            }else{
                menuBox.mCustomScrollbar()
                $('.mocaMenu').css({
                    'overflow-y': ''
                })
            }

            $(window).resize(function() {
                if(nickCheckDevice() == true){
                    menuBox.mCustomScrollbar('destroy')
                    $('.mocaMenu').css({
                        'overflow-y': 'scroll'
                    })
                }else{
                    menuBox.mCustomScrollbar()
                    $('.mocaMenu').css({
                        'overflow-y': ''
                    })
                }
            })

            //
            openBtn.on('click', function() {

                var checkDevice = nickCheckDevice();

                var a = window.innerWidth;

                var b = document.documentElement.clientWidth;

                if (!menuBox.hasClass('open')) {
                    menuBox.addClass('open');

                    //
                    dist = $(window).scrollTop();
                    $('body').attr('data-dist', dist);
                    lock_bScroll();
                    if (checkDevice === false && a != b) {
                        $('.hdContent .buttons').css('right', '17px');
                    }

                    //
                    setTimeout(function() {
                        mocaWaypoint.mocaMenu();
                    }, 0);
                }

            });

            //
            closeBtn.on('click', function() {

                dist = $('body').attr('data-dist');

                menuBox.addClass('close');

                menuBox.find('.wayObj').removeClass('show');

                setTimeout(function() {

                    menuBox.removeClass('open close');

                    unlock_bScroll();
                    window.scrollTo(1, dist);
                    $('body').attr('data-dist', '');
                    $('.hdContent .buttons').css('right', '');

                }, 1000);

            });
        },
    }
    /*mocaMenu*/

/*mocaSearch*/
var mocaSearch = {
        // fire(){
        //     console.log('123456kk');
        // }
        fire: function() {
            var openBtn = $('.openSearch'),
                openMBtn = $('.mocaMenu .openMSearch'),
                fakeBox = $('.searchFakeBox'),
                searchBar = $('.mocaSNav .forSearch');

            //
            fakeBox.mCustomScrollbar();

            if(nickCheckDevice() == true){
                fakeBox.mCustomScrollbar('destroy')
                $('.searchFakeBox').css({
                    'overflow-y': 'scroll'
                })
            }else{
                fakeBox.mCustomScrollbar()
                $('.searchFakeBox').css({
                    'overflow-y': ''
                })
            }

            $(window).resize(function() {
                if(nickCheckDevice() == true){
                    fakeBox.mCustomScrollbar('destroy')
                    $('.searchFakeBox').css({
                        'overflow-y': 'scroll'
                    })
                }else{
                    fakeBox.mCustomScrollbar()
                    $('.searchFakeBox').css({
                        'overflow-y': ''
                    })
                }
            })

            //header buttons 下的 searchBtn
            openBtn.on('click', function() {
                if (!fakeBox.hasClass('open')) {

                    fakeBox.addClass('open lockBar');

                    //
                    dist = $(window).scrollTop();
                    $('body').attr('data-dist', dist);
                    lock_bScroll();
                }
            });

            //menu 裡的 searchBtn
            openMBtn.on('click', function() {
                if (!fakeBox.hasClass('open')) {

                    fakeBox.addClass('open');
                }
            });

            //searchBar 裡的 searchBtn
            searchBar.on('click', '.box', function() {
                if (!fakeBox.hasClass('open')) {

                    fakeBox.addClass('open lockBar');

                    //
                    dist = $(window).scrollTop();
                    $('body').attr('data-dist', dist);
                    lock_bScroll();
                }
            });

            //close
            fakeBox.on('click', '.chrisCloseBtn', function() {

                fakeBox.addClass('close');

                if (fakeBox.hasClass('lockBar')) {

                    dist = $('body').attr('data-dist');

                    setTimeout(function() {

                        fakeBox.removeClass('open close lockBar');
                        $('body').attr('data-dist', '');

                        unlock_bScroll();
                        window.scrollTo(1, dist);

                    }, 600);
                } else {
                    setTimeout(function() {

                        fakeBox.removeClass('open close');

                    }, 700);
                }
            });

            //clickSearch
        }
    }
    /*mocaSearch*/

/*today'on*/
var openExhibit = {
        fire: function() {
            var headerButtons = $('header .buttons');

            var checkDevice = nickCheckDevice();

            var a = window.innerWidth;

            var b = document.documentElement.clientWidth;

            headerButtons.on('click', function() {
                if (checkDevice === false && a == b) {
                    headerButtons.css('right', '');
                }
            });
        }
    }
    /*today'on*/


/*============================================================================================================================================*/
/*============================================================================================================================================*/
/*============================================================================================================================================*/
//各單元頁面 執行的地方
$(document).ready(function() {

    var thisPage = $('body').attr('id');

    //進場
    cgLoadin();

    //隱私權
    mocaPrivacy.fire();

    //MENU選單
    mocaMenu.fire();

    //search頁面
    mocaSearch.fire();

    //頁腳動畫
    mocaWaypoint.footer();

    //today's on
    openExhibit.fire();

    

    $(window).resize(function() { fixVh() });

    if (thisPage == 'news') {

        mocaSNav.active();

        //大圖換小圖
        xsBGLoad();
        $(window).resize(function() { xsBGLoad(); });

    }

    if (thisPage == 'support') {

        mocaSNav.active();

        //input
        setTimeout(function() {
            chInputFocus.inputFocus('.a-table-form', 'a-table-row');
        }, 500);
    }

    if (thisPage == 'visit') {

        ajaxBody.detect();

        //綁定按鈕 跟 受體
        ajaxContent.active('.mocaSNav', '.mocaPageBody');

        mocaSNav.active();

        mocaWaypoint.visit();

        //大圖換小圖
        xsBGLoad();
        $(window).resize(function() { xsBGLoad(); });
    }

    if (thisPage == 'application') {

        //ajax完就呼叫一次
        ajaxBody.detect();

        //綁定按鈕 跟 受體
        ajaxContent.active('.mocaSNav', '.mocaPageBody');

        mocaSNav.active();

        mocaWaypoint.application();

        //大圖換小圖
        xsBGLoad();
        $(window).resize(function() { xsBGLoad(); });
    }

    if (thisPage == 'discover') {

        //ajax完就呼叫一次
        ajaxBody.detect();

        //綁定按鈕 跟 受體
        // ajaxContent.active('.mocaSNav', '.mocaPageBody');

        mocaSNav.active();

        mocaWaypoint.discover();

        //大圖換小圖
        xsBGLoad();
        $(window).resize(function() { xsBGLoad(); });
    }

    if (thisPage == 'contact') {

        mocaSNav.active();

        mocaWaypoint.contact();

        //下拉選單
        contact.select();

        //大圖換小圖
        xsBGLoad();
        $(window).resize(function() { xsBGLoad(); });

        //input
        setTimeout(function() {
            chInputFocus.inputFocus('.contactForm', 'list');
        }, 500);
    }

    if (thisPage == 'shop') {
        //
        mocaShop.bannerSlick();
        mocaShop.picChange();

        //clickScrollArea切換class
        discover.clickScrollArea();

        //
        mocaShop.blazy();

        //
        mocaWaypoint.shop();

        //
        mocaShop.scrollAreaSlick();
        mocaShop.scrollFrameSlick();

        if ($('body').hasClass('index')) {
            //
            mocaShop.shopBeerSlick(5, 280, '.shopBeerSlick', '.slickFrameBox');
            //
            mocaShop.randomList();
        }

        if ($('body').hasClass('shopDetail')) {
            //
            mocaShop.shopBeerSlick(4, 260, '.shopListFrame', '.momLa');
            //
            mocaShop.detailPresent();
            //
            mocaShop.boardSlick();
        }
    }

    if (thisPage == 'member') {

        if ($('body').hasClass('index')) {
            //
            mocaShop.scrollFrameSlick();

            //
            mocaMember.switchLink();

            //
            mocaMember.select();

            //更新book list id
            // mocaMember.countList();
            //取消報名
            mocaMember.cancelApply();
            //報名資訊
            mocaMember.bookInformation('.memberBooking .bookListFrame .list');

            //上傳大頭照
            uploadSelfie();
            //selfie
            mocaMember.mSelfie();
            //大頭貼視窗
            mocaMember.hideBagType('.memberInformation .selfieBox', '.mSelfieBag');

            //更換帳號
            mocaMember.chAccountFire();
            chInputFocus.inputFocus('.formChAccount', 'list');

            //更換密碼
            mocaMember.chPasswordFire();
            chInputFocus.inputFocus('.formChPassword', 'list');
        }

        if ($('body').hasClass('logPage')) {
            //登入表單
            chInputFocus.inputFocus('.formLog', 'list');

            //註冊表單
            chInputFocus.inputFocus('.formRegister', 'list');

            //忘記帳號
            chInputFocus.inputFocus('.formFaccount', 'list');

            //忘記密碼
            chInputFocus.inputFocus('.formFpassword', 'list');

            //重設密碼
            chInputFocus.inputFocus('.formRpassword', 'list');

            //
            mocaMember.logPageSelect();

            //註冊帳號
            mocaMember.registerFire();

            //忘記帳號
            mocaMember.fAccountFire();

            //忘記密碼
            mocaMember.fPasswordFire();

            //重設密碼
            mocaMember.rePasswordFire();

            //驗證
            mocaMember.verification('.successHideBox');
            mocaMember.verification('.timeoutHideBox');
        }
    }

    if (thisPage == 'exhibition') {

        if ($('body').hasClass('exhibitionDetail')) {
            //
            exhibition.detailBannerSlick();

            exhibition.artSlick();

            exhibition.moreSlick();

            //
            exhibition.scrollLink();
            exhibition.scrollBro();

            //設計師說不要這功能了
            // exhibition.eventFromScroll();

            //
            callVideoBox.fire('.mediaBox');

            //
            dotdot(310);

            //
            exhibition.fakeBox()
                //=============================//
                //燈箱左邊 scroll事件
            exhibition.recFrameScroll();

            //右邊scrollbar
            exhibition.scrollBarlbox();

            //bHeadArea切換事件
            exhibition.bHeadArea();

            //音頻區域切換
            exhibition.audioSwitchArea();

            //按鈕事件綁定
            exhibition.audioBtn();
            //=============================//

            //報名資訊
            if ($('.exEvent.detailContent').hasClass('schedule')) {
                mocaMember.bookInformation('.exEvent .formBody .list', '.box');
            } else {
                mocaMember.bookInformation('.exEvent .formBody .list', '.mac');
            }

            //
            exhibition.exSmallBox();
            exhibition.contentBox();

            //
            mocaSNav.scrollBar();

            //
            mocaWaypoint.exDetail();
        }

        if ($('body').hasClass('exhibition')) {

            //ajax完就呼叫一次
            ajaxBody.detect();

            //綁定按鈕 跟 受體
            ajaxContent.active('.mocaSNav', '.mocaPageBody');

            mocaSNav.active();

            mocaWaypoint.exListPage();

        }

    }

    console.log('main OK');

});