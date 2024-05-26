// 檢查是否為移動裝置
var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
var device = isAndroid || isiOS
// 檢查是否為safari 
var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)


////////////////////////////////////
//          主頁的js               //
////////////////////////////////////
/***************************************************************************************************************************/

// 紀錄初始冷氣相片的檔案位置
var originalImg = $(".makeframe .standardImg img").attr("src");

var customized = {
    scrollBar: function() {
        $(".sideNav .skinstyle").mCustomScrollbar({
            scrollInertia: 800,
            mouseWheel: {
                preventDefault: true,
                scrollAmount: 200
            },
            callbacks: {
                whileScrolling: function() {
                    // nav浮動
                    var titleHeight = $(".sideNav .skinstyle .title").innerHeight() + parseInt($(".sideNav .skinstyle .navBg").css("margin-top"))
                    var scrollTop = Math.abs(this.mcs.top)
                    if (scrollTop >= titleHeight) {
                        $(".sideNav .skinstyle .nav").addClass("fixed")
                    } else {
                        $(".sideNav .skinstyle .nav").removeClass("fixed")
                    }
                    _Blazy.customizeW();
                },
                onOverflowYNone: function() {
                    $(".sideNav .skinstyle").mCustomScrollbar("scrollTo", 0);
                    $(".sideNav .skinstyle .nav").removeClass("fixed");
                },
            }
        });

        $(".sideNav .accessories").mCustomScrollbar({
            scrollInertia: 800,
            mouseWheel: {
                preventDefault: true,
                scrollAmount: 200
            },
            callbacks: {
                whileScrolling: function() {
                    // nav浮動
                    var titleHeight = $(".sideNav .accessories .title").innerHeight() + parseInt($(".sideNav .accessories .navBg").css("margin-top"))
                    var scrollTop = Math.abs(this.mcs.top)
                    if (scrollTop >= titleHeight) {
                        $(".sideNav .accessories .nav").addClass("fixed");
                    } else {
                        $(".sideNav .accessories .nav").removeClass("fixed")
                    }

                    // 下一步按鈕文字收起
                    if (scrollTop > 10 && $(window).width() > 900) {
                        $(".sideNav .accessories .nextStep").addClass("hideWords");
                    } else {
                        $(".sideNav .accessories .nextStep").removeClass("hideWords");
                    }

                    var windowHeight = Math.floor($(window).height() / 3)

                    $(".sideNav .accessories .selectObjects .type").each(function() {
                        var eletop = Math.floor(this.getBoundingClientRect().top)

                        var targetMax = windowHeight - ($(this).height() / 2)

                        var targetMin = windowHeight + ($(this).height() / 2)
                        var i = $(this).index()
                        if (eletop >= targetMax && eletop <= targetMin) {
                            $(".sideNav .accessories .nav li").eq(i).addClass("active").siblings().removeClass("active");
                        }
                    });
                    _Blazy.customizeW();
                },
                onOverflowYNone: function() {
                    $(".sideNav .accessories").mCustomScrollbar("scrollTo", 0);
                    $(".sideNav .accessories .nav").removeClass("fixed");
                }
            },
        });
    },

    stepButon_click: function() {
        $(".sideNav .stepButon ul li").click(function() {
            // 面版挑選
            if ($(this).hasClass("openSkinstyle")) {
                customized.makeframeOpen();
                customized.skinstyleOpen();
            }
            // 配件加購
            else if ($(this).hasClass("openAccessories")) {
                customized.accessoriesOpen();
            }
            // 訂單明細
            else {
                $(".openAccessories,.openSkinstyle").removeClass("active");
                $(".orderForm").addClass("active");
                if ($(".accessories").hasClass("open")) {
                    customized.accessoriesClose();
                }
                if ($(".skinstyle").hasClass("open")) {
                    customized.skinstyleClose();
                }
                customized.orderDetailsOpen();
            }
        });
    },

    // 開啟makeframe
    makeframeOpen: function() {
        $(".orderDetails").css("display", "none");
        $(".sideNav").removeClass("step3");
        if ($(window).width() < 701) {
            $(".makeframe").css("display", "flex");
        } else {
            $(".makeframe").css("display", "block");
        }
    },

    // 加購明細開啟
    orderDetailsOpen: function() {
        $(".orderDetails").css("display", "block");
        $(".makeframe").css("display", "none");
        $(".sideNav").addClass("step3");
        _Blazy.customizeW();
        if ($(window).width() < 901) {
            $('.sideNav .stepButon ul').slick('slickGoTo', 2);
            $(".sideNav .stepButon ul").slick('slickSetOption', 'swipe', false);
        }
    },
    // 面板挑選開啟
    skinstyleOpen: function() {
        $(".accessories .nav").removeClass("fixed");
        $(".orderForm").removeClass("active");
        // 手機板
        if (device) {
            // 原本開啟
            if ($(".openSkinstyle").hasClass("active")) {
                customized.skinstyleClose();
                if ($(window).width() < 900) {
                    $(".sideNav .stepButon ul").slick('slickSetOption', 'swipe', true);
                }
            } else {
                $(".openSkinstyle").addClass("active");
                $(".skinstyle").slideDown(500);
                $(".skinstyle").addClass("open");
                if ($(window).width() < 900) {
                    $(".sideNav .stepButon ul").slick('slickSetOption', 'swipe', false);
                    $('.sideNav .stepButon ul').slick('slickGoTo', 0);
                }
            }
        }
        // 電腦版 
        else {
            $(".openSkinstyle").addClass("active");
            // 配件開啟的情況下
            if ($(".accessories").hasClass("open")) {
                // 關閉配件加購
                customized.accessoriesClose();
                $(".skinstyle").addClass("open");
            } else {
                $(".skinstyle").addClass("open");
            }
        }
        setTimeout(function() {
            _Blazy.customizeW();
        }, 500);
    },

    // 配件加購開啟
    accessoriesOpen: function() {
        $(".skinstyle .nav").removeClass("fixed");
        $(".orderForm").removeClass("active");
        // 手機板
        if (device) {
            // 原本開啟
            if ($(".openAccessories").hasClass("active")) {
                customized.accessoriesClose();
                if ($(window).width() < 900) {
                    $(".sideNav .stepButon ul").slick('slickSetOption', 'swipe', true);
                }
            } else {
                $(".openAccessories").addClass("active");
                $(".accessories").slideDown(500);
                $(".accessories").addClass("open");
                if ($(window).width() < 900) {
                    $(".sideNav .stepButon ul").slick('slickSetOption', 'swipe', false);
                    $('.sideNav .stepButon ul').slick('slickGoTo', 1);
                }
            }
        }
        // 電腦版 
        else {
            $(".openAccessories").addClass("active");
            // 面板挑選開啟的情況下
            if ($(".skinstyle").hasClass("open")) {
                // 關閉面板挑選              
                customized.skinstyleClose();
                $(".accessories").addClass("open");
            } else {
                $(".accessories").addClass("open");
            }
        }

        customized.scrollBar();

        $(window).resize(function() {
            blueBorderSize();
        });

        blueBorderSize();

        // 讓blueBorder自適應已點選的li寬高
        function blueBorderSize() {
            $(".sideNav .accessories .selectObjects ul .blueBorder").each(function() {
                var width = $(this).closest("ul").find("li.checked").innerWidth() + "px"
                var height = $(this).closest("ul").find("li.checked").innerHeight() + "px"
                var top = $(this).closest("ul").find("li.checked").position().top + "px"
                $(this).css({
                    "width": width,
                    "height": height,
                    "top": top
                })
            });
        }

        setTimeout(function() {
            _Blazy.customizeW();
        }, 500);
    },

    // 選擇面板的function開始-----------------------------------------   
    skinstyleClose: function() {
        $(".openSkinstyle").removeClass("active");
        $(".sideNav .skinstyle").removeClass("open");
        $(".sideNav .skinstyle").addClass("close");
        $(".sideNav .skinstyle .nav").removeClass("fixed");
        if (device) {
            $(".sideNav .skinstyle").slideUp(500);
            if ($(window).width() < 900) {
                $(".sideNav .stepButon ul").slick('slickSetOption', 'swipe', true);
            }
        }
        setTimeout(function() {
            $(".sideNav .skinstyle").removeClass("close");
        }, 500)
    },

    skinstyleClose_click: function() {
        // 點擊X關閉
        $(".sideNav .skinstyle .boxClose").click(function() {
            customized.skinstyleClose();
        });

        // 點擊半透明部分關閉
        $(".skinstyle").click(function(e) {
            if ($(e.target).hasClass("mCSB_container")) {
                customized.skinstyleClose();
            }
        });
    },

    chooseStyle: function() {
        // 轉換風格 1.東元客製款 2.自訂面板顏色 3.自行上傳圖片
        $(".sideNav .skinstyle .navBg .nav li").click(function() {
            $(this).addClass("active").siblings().removeClass("active");
            var i = $(this).index()
            $(".sideNav .skinstyle .choose>div").eq(i).addClass("active").siblings().removeClass("active");
        });

        // 選擇材質或顏色的面板
        $(".choose .material ._img,.choose .color ._img").click(function() {
            // 點選未點選的選項-更新圖片
            if (!$(this).closest("li").hasClass("active")) {
                var src = $(this).attr("data-src")
                $(".makeframe .standardImg img").attr("src", src);
                // 標示點選物件,移除其他物件的標記
                $(this).closest("li").addClass("active").siblings().removeClass("active");
                // 移除其他物件的標記
                if ($(this).closest(".material").length > 0) {
                    $(".sideNav .skinstyle .color li,.sideNav .skinstyle .upload li").removeClass("active");
                } else if ($(this).closest(".color").length > 0) {
                    $(".sideNav .skinstyle .material li,.sideNav .skinstyle .upload li").removeClass("active");
                }
                $(".orderDetails .productFrame").css("display", "flex");
            }
            // 點選已點選的選項-回復原本的圖片
            else {
                $(".makeframe .standardImg img").attr("src", originalImg);
                // 取消標記的物件
                $(this).closest("li").removeClass("active");
                $(".orderDetails .productFrame").css("display", "none");
            }

            // 關閉有canvas的div
            $(".makeframe .customizedCanvas").removeClass("active");
            // 開啟圖片版的div
            $(".makeframe .standardImg").addClass("active");

            // 移除選單
            customized.skinstyleClose();
        });

        // 自行上傳圖片
        $(".sideNav .skinstyle .uploadButton input").change(function(event) {
            // 取得檔案名子
            var fileName = $(this).val().split('/').pop().split('\\').pop();
            var filePath = $(this).val()
            if (this.files && this.files[0]) {
                var reader = new FileReader();
                // 等待圖片上傳完成後加入到結構中
                reader.onload = function(e) {

                    var image = new Image();

                    image.src = e.target.result;

                    image.onload = function() {

                        var height = this.height;
                        var width = this.width;

                        var price = $(".sideNav .skinstyle .uploadButton .price").text()
                        // 將新增的圖片加到選項之一
                        var html = '<li><div><div class="_img"><img src="' + e.target.result + '"  data-path="'+filePath+'" ><div class="hoverBox"><span class="iconN-hook"></span></div></div><p  class="name">' + fileName + '</p><p  class="price">' + price + '</p></div></li>'
                        $(".sideNav .skinstyle .choose .upload ul").off().append(html)

                        // 點選圖片

                        $(".sideNav .skinstyle .choose .upload li ._img").off().click(function() {
                            if (!$(this).closest("li").hasClass("active")) {
                                // 點選的圖片路徑
                                var src = $(this).find("img").attr("src");
                                // 啟動有canvas的div
                                $(".makeframe .standardImg").removeClass("active");
                                $(".makeframe .customizedCanvas").addClass("active")
                                // 移除原本的canvas
                                $(".makeframe #canvas canvas").remove();
                                customized.canvas(src);
                                // 標記點選的物件
                                $(this).closest("li").addClass("active").siblings().removeClass("active");
                                $(".orderDetails .productFrame").css("display", "flex");
                                var path =$(this).find("img").attr("data-path")
                                console.log(path)
                                // document.querySelector("#uploadImgBig").value=path
                                $("#uploadImgBig").val(path)

                            } else {
                                // 關閉有canvas的div
                                $(".makeframe .customizedCanvas").removeClass("active");
                                $(".makeframe .standardImg").addClass("active");
                                // 恢復原本的冷氣相片
                                $(".makeframe .standardImg img").attr("src", originalImg);
                                // 取消標記的物件
                                $(this).closest("li").removeClass("active");
                                $(".orderDetails .productFrame").css("display", "none");
                            }

                            // 其他物件移除標記
                            $(".sideNav .skinstyle .material li,.sideNav .skinstyle .color li").removeClass("active");

                            // 關閉選單
                            customized.skinstyleClose();
                        });
                    };
                }
                reader.readAsDataURL(this.files[0]);
            }
        });

    },

    canvas: function(src) {

        // 抓取適當的寬
        var width = $(".makeframe .srcbox").width()
        // 抓取適當的高
        var height = $(".makeframe .srcbox").height()

        // 設定基本canvas
        var app = new PIXI.Application(width, height, { transparent: true, preserveDrawingBuffer: true });
        document.querySelector(".makeframe #canvas").appendChild(app.view);
        // 是否可動
        app.stage.interactive = true;

        var container = new PIXI.Container();
        container.x = app.screen.width / 2;
        container.y = app.screen.height / 2;

        var container2 = new PIXI.Container();
        container2.x = app.screen.width / 2;
        container2.y = app.screen.height / 2;


        var dragGroup

        productImg();

        function productImg() {
            // 產品圖片
            var productImgSrc = $(".makeframe .productImg").attr("src")

            var productImg = PIXI.Sprite.fromImage(productImgSrc);
            productImg.anchor.set(0.5);
            productImg.width = app.screen.width;
            productImg.height = app.screen.height;
            container.addChild(productImg);

            app.stage.addChild(container);
        }

        upload(src)

        function upload(src) {

            var customizeImgSrc = src;

            var texture = PIXI.Texture.fromImage(customizeImgSrc);

            // Scale mode for pixelation
            texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

            // 創造客製圖片放置區塊
            var customizeImg = new PIXI.Sprite(texture);

            // 區塊是否可動
            customizeImg.interactive = true;

            // this button mode will mean the hand cursor appears when you roll over the image with your mouse
            customizeImg.buttonMode = true;
            // customizeImg.cursor = 'grab';

            // center the image's anchor point 圖片位置
            customizeImg.anchor.set(0.5);

            // make it a bit bigger, so it's easier to grab 圖片保持原大小避免失真
            customizeImg.scale.set(1);

            if (!device) {
                customizeImg.cursor = "grab";
            }

            // setup events for mouse + touch using
            //設定拖拉事件
            customizeImg
                .on('mousedown', onDragStart)
                .on('touchstart', onDragStart)
                .on('mouseup', onDragEnd)
                .on('mouseupoutside', onDragEnd)
                .on('touchend', onDragEnd)
                .on('touchendoutside', onDragEnd)
                .on('mousemove', onMouseMove)
                .on('touchmove', onDragMove)
                // 滾動縮放
                .on('mouseover', onScroll)
                // 回復預設滾動事件
                .on('mouseout', unbindScroll)

            ////////////////////////////
            //        按鈕事件         //
            ////////////////////////////
            // 放大按鈕
            $(".makeframe .zoomIn").click(function() {
                customizeImg.scale.x *= 1.05
                customizeImg.scale.y *= 1.05
            });

            // 縮小按鈕
            $(".makeframe .zoomOut").click(function() {
                customizeImg.scale.x *= 0.95
                customizeImg.scale.y *= 0.95
            });

            // 重整按鈕:連同位置一起重整
            $(".makeframe .reset").click(function() {
                customizeImg.scale.x = 1
                customizeImg.scale.y = 1
                customizeImg.x = 0
                customizeImg.y = 0
            });

            // 客製化面板邊框-需要為白色png圖片
            var frameSrc = $(".makeframe .frame").attr("src")
            var frame = PIXI.Sprite.fromImage(frameSrc);
            frame.anchor.set(0.5, 0.5);
            frame.width = app.screen.width
            frame.height = app.screen.height

            customizeImg.mask = frame
            // add all to the stage

            container2.addChild(customizeImg, frame);

            app.stage.addChild(container2);

            app.stage.setChildIndex(container2, 0);
        }

        function onScroll() {
            $this = this
            $(window).on("mousewheel", function(e) {
                e.preventDefault();
                if (e.deltaY < 0) {
                    $this.scale.x *= .95;
                    $this.scale.y *= .95;
                } else if (e.deltaY > 0) {
                    $this.scale.x *= 1.05;
                    $this.scale.y *= 1.05;
                }
            });
        }

        function unbindScroll() {
            $(window).unbind('mousewheel');
        }


        function onDragStart(event) {
            event.target.cursor = "grabbing"
            if (!this.dragging) {
                this.data = event.data;
                this.oldGroup = this.parentGroup;
                this.parentGroup = dragGroup;
                this.dragging = true;

                this.scale.x *= 1;
                this.scale.y *= 1;
                this.dragPoint = event.data.getLocalPosition(this.parent);
                this.dragPoint.x -= this.x;
                this.dragPoint.y -= this.y;
            }
        }

        function onDragEnd(event) {
            event.target.cursor = "grab"
            if (this.dragging) {
                this.dragging = false;
                this.parentGroup = this.oldGroup;
                this.scale.x /= 1;
                this.scale.y /= 1;
                // set the interaction data to null
                this.data = null;
            }
        }

        function onMouseMove() {
            if (this.dragging) {
                var newPosition = this.data.getLocalPosition(this.parent);
                this.x = newPosition.x - this.dragPoint.x;
                this.y = newPosition.y - this.dragPoint.y;
            }
        }

        var tracks = [];

        function onDragMove(event) {

            var $this = this
            // console.log(this.data.originalEvent.touches[0].clientX)
            if (this.data.originalEvent.touches.length === 1 && this.dragging) {
                var newPosition = this.data.getLocalPosition(this.parent);
                this.x = newPosition.x - this.dragPoint.x;
                this.y = newPosition.y - this.dragPoint.y;
            } else if (this.data.originalEvent.touches.length === 2) {
                var touch1x = this.data.originalEvent.touches[0].clientX
                touch1y = this.data.originalEvent.touches[0].clientY
                touch2x = this.data.originalEvent.touches[1].clientX
                touch2y = this.data.originalEvent.touches[1].clientY
                //計算兩者之間的距離
                var x = touch1x - touch2x
                var y = touch1y - touch2y
                var z = Math.sqrt((x * x) + (y * y))
                var z0 = tracks.pop()
                tracks.push(z)
                if (z > z0 && $this.scale.x < 0.5) {
                    $this.scale.x *= 1.02;
                    $this.scale.y *= 1.02;
                } else if (z < z0 && $this.scale.x > 0.1) {
                    $this.scale.x *= .98;
                    $this.scale.y *= .98;
                }
            }
        }
    },

    // 開啟面板材質預覽
    materialPreview: function() {
        $(".openPreview").click(function() {
            var imgSrc = $(this).closest("li").find("img").attr("src");
            var imgHtml = "<article class='materialPreview'><section class='topNav'><div class='back'><span></span><p>CLOSE</p></div></section><section class='_img'><img src='" + imgSrc + "'/></section></article>"
            $("body").append(imgHtml);
            $(".materialPreview").click(function() {
                $(this).addClass("close");
                setTimeout(function() {
                    $(".materialPreview").remove();
                }, 400);
            });
        });
    },
    // 選擇面板的function結束-----------------------------------------

    // 配件加購的function開始---------------------------------------
    accessoriesClose: function() {
        if ($(".orderDetails").css("display") == "block") {
            $(".orderForm").addClass("active");
        }
        $(".sideNav .accessories").removeClass("open");
        $(".sideNav .accessories").addClass("close");
        $(".accessories .nav li").eq(0).addClass("active").siblings().removeClass("active");
        $(".openAccessories").removeClass("active");
        $(".sideNav .accessories .nav").removeClass("fixed");
        if (device) {
            $(".sideNav .accessories").slideUp(500);
            if ($(window).width() < 900) {
                $(".sideNav .stepButon ul").slick('slickSetOption', 'swipe', true);
            }
        }
        setTimeout(function() {
            $(".sideNav .accessories").removeClass("close");
        }, 500)
    },
    accessoriesClose_click: function() {
        // 點擊下一步
        $(".sideNav .accessories .nextStep").click(function() {
            customized.accessoriesClose();
            // 開啟加購明細
            customized.orderDetailsOpen();
        });

        // 點擊半透明部分關閉
        $(".accessories").click(function(e) {
            if ($(e.target).hasClass("mCSB_container")) {
                customized.accessoriesClose();
            }
        });
    },

    accessoriesChoose: function() {
        $(".sideNav .accessories .selectObjects ul li").click(function(e) {
            if ($(".opentxt").has(e.target).length === 0) {
                $(this).addClass("checked").siblings().removeClass("checked");

                // 更變blueBorder的top 的高度、寬度 
                var top = $(this).position().top + "px"
                var height = $(this).innerHeight() + "px"
                $(this).closest("ul").find(".blueBorder").css({
                    "top": top,
                    "height": height
                });
            }
        });
    },

    toTop: function() {
        $(".sideNav .accessories .toTop").click(function() {
            $(".sideNav .accessories").mCustomScrollbar("scrollTo", 0, { scrollInertia: 1800 });
        });
    },

    // 配件加購的錨點
    anchor: function() {
        $(".sideNav .accessories .nav li").click(function() {
            var i = $(this).index()
            customized.anchorfunction(i)
        });

        $(".sideNav .accessories .nav select").change(function() {
            var i = $(this).val()
            customized.anchorfunction(i)
        })
    },

    anchorfunction: function(i) {
        var titleHeight = $(".sideNav .accessories .title").innerHeight()
        var navBgHeight = $(".sideNav .accessories .navBg").innerHeight() + parseInt($(".sideNav .accessories .navBg").css("margin-top"))
        var selectObjectsPaddingTop = parseInt($(".sideNav .accessories .selectObjects").css("padding-top"))
        var prevAll = $(".sideNav .accessories .selectObjects .type").eq(i).prevAll()
        var prevAllHeight = 0
        for (var x = 0; x < prevAll.length; x++) {
            var prevHeight = $(prevAll).eq(x).innerHeight() + parseInt($(prevAll).eq(x).css("margin-top"))
            var prevAllHeight = prevAllHeight + prevHeight
        }

        var scrollTo = prevAllHeight + titleHeight + navBgHeight + selectObjectsPaddingTop
        if (i != 0) {
            $(".sideNav .accessories").mCustomScrollbar("scrollTo", scrollTo, 1000);
        } else {
            $(".sideNav .accessories").mCustomScrollbar("scrollTo", 0, 1000);
        }
    },

    // 配件加購的function結束------------------------------------------

    // nav只有在手機板的slick
    stepButonSlick: function() {
        if ($(window).width() < 900) {
            $(".sideNav .stepButon ul").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                infinite: false,
                arrows: false,
            });
        }
    },

    // 字數限制
    wordlatest: function() {
        $(".sideNav .accessories .selectObjects ul li .inf .introdution").each(function() {
            wordlatest(30, this)
        });
    },

    // 訂單明細修改
    purchaseChange: function() {
        $(".orderDetails .productFrame .edit").click(function() {
            customized.skinstyleOpen();
            customized.makeframeOpen();
        });

        $(".orderDetails .purchase li .edit button").click(function() {
            customized.accessoriesOpen();
            var i = $(this).closest("li").index()
            setTimeout(function() {
                customized.anchorfunction(i)
            }, 600);
        });
    },

    all: function() {
        customized.stepButon_click();
        customized.scrollBar();
        customized.stepButonSlick();
        // 選擇面板的function
        customized.chooseStyle();
        customized.skinstyleClose_click();
        customized.materialPreview();
        // 配件加購的function
        customized.accessoriesClose_click();
        customized.accessoriesChoose();
        customized.toTop();
        customized.anchor();
        customized.wordlatest();
        // 訂單明細的function
        customized.purchaseChange();
    }
}



/***************************************************************************************************************************/

/***************************************************************************************************************************/
////////////////////////////////////
//           情境模擬燈箱          //
////////////////////////////////////

var situation = {
    open_click: function() {
        $(".openSituation").click(function() {
            situation.open();
            situation.canvas();
        });
    },

    open: function() {
        situation.toggleFullScreen();
        $(".situation").addClass("open");
    },

    close_click: function() {
        $(".situation .liboxClose").click(function() {
            situation.close();
        });
    },

    close: function() {
        situation.toggleFullScreen();
        $(".situation").removeClass("open");
        $(".situation").addClass("close");
        setTimeout(function() {
            $(".situation").removeClass("close");
            $(".situation .bgSelect .options").css("display", "none");
            $(".situation #canvas canvas").remove();
        }, 800);
    },

    shareSlick: function() {
        $(".situation .bgSelect .options .share ._slick").slick({
            slidesToShow: 8,
            slidesToScroll: 1,
            lazyLoad: 'ondemand',
            speed: 500,
            infinite: false,
            prevArrow: '.situation .share .arrows span.iconN-left',
            nextArrow: '.situation .share .arrows span.iconN-right',
            responsive: [{
                    breakpoint: 1501,
                    settings: {
                        slidesToShow: 7,
                    }
                },
                {
                    breakpoint: 1301,
                    settings: {
                        slidesToShow: 6,
                    }
                },
                {
                    breakpoint: 1151,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 801,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 601,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 401,
                    settings: {
                        slidesToShow: 1,
                        centerMode: true,
                        centerPadding: "0px",
                    }
                }
            ]
        });
    },

    selfUploadSlick: function() {
        $(".situation .bgSelect .options .selfUpload ._slick ul").slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            speed: 500,
            infinite: false,
            prevArrow: '.situation .selfUpload .arrows span.iconN-left',
            nextArrow: '.situation .selfUpload .arrows span.iconN-right',
            responsive: [{
                    breakpoint: 1601,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 1351,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 1151,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 1,
                        centerMode: true,
                        centerPadding: "0px",
                    }
                },
                {
                    breakpoint: 901,
                    settings: {
                        slidesToShow: 3,

                    }
                },
                {
                    breakpoint: 801,
                    settings: {
                        slidesToShow: 2,

                    }
                },
                {
                    breakpoint: 651,
                    settings: {
                        slidesToShow: 1,

                    }
                }
            ]
        });
    },

    resetSlick: function() {
        $(".situation .bgSelect .options .selfUpload ._slick ul").slick('unslick');
        situation.selfUploadSlick();
        $(".situation .bgSelect .options .share ._slick").slick('unslick');
        situation.shareSlick();
    },

    changeOption: function() {
        $(".situation .nav .share,.situation .nav .selfUpload").click(function() {
            $(this).addClass("active").siblings().removeClass("active");
            if ($(this).hasClass("share")) {
                $(".situation .options .share").addClass("active").siblings().removeClass("active");
                situation.resetSlick();

            } else if ($(this).hasClass("selfUpload")) {
                $(".situation .options .selfUpload").addClass("active").siblings().removeClass("active");
                situation.resetSlick();
            }

            if ($(".situation .bgSelect .options").css("display") == "none") {
                $(".situation .bgSelect .options").slideDown(500);
                situation.resetSlick();
                if (device) {
                    $(".situation .liboxClose,.situation .bgSelect .download").toggleClass("active")
                }
            }
        });

        $(".situation .bgSelect .nav .folding").click(function() {
            $(".situation .bgSelect .options").slideToggle(500);
            situation.resetSlick();
            if (device) {
                $(".situation .liboxClose ,.situation .bgSelect .download").toggleClass("active")
            }
        });
    },

    canvas: function() {
        // 抓取適當的寬
        var width = $(window).width()
        // 抓取適當的高
        var height = $(window).height()

        // 設定基本canvas
        var app = new PIXI.Application(width, height, { autoResize: true, transparent: true, preserveDrawingBuffer: true, autoPreventDefault: false });
        document.querySelector(".situation #canvas").appendChild(app.view);

        // 是否可動
        app.stage.interactive = false;

        var container = new PIXI.Container();
        container.x = 0;
        container.y = 0;
        container.width = app.screen.width;
        container.height = app.screen.height;

        var container2 = new PIXI.Container();
        container2.x = app.screen.width / 2;
        container2.y = app.screen.height / 6;

        var src = $(".situation .options ._slick li.active ._img").find("img").attr("src");

        bgImg(src);

        $(".situation .bgSelect .options .share ._slick li").click(function() {

            $(this).addClass("active").siblings().removeClass("active");
            $(".situation .bgSelect .options .selfUpload ._slick li").removeClass("active");

            var src = $(this).find("img").attr("src");
            bgImg(src);
        });

        // 圖片上傳
        $(".situation .bgSelect .upLoad input").off().change(function() {
            // 取得檔案名子
            var fileName = $(this).val().split('/').pop().split('\\').pop();

            if (this.files && this.files[0]) {

                var reader = new FileReader();

                // 等待圖片上傳完成後加入到結構中
                reader.onload = function(e) {

                    var image = new Image();
                    image.src = e.target.result;

                    image.onload = function() {

                        var height = this.height;
                        var width = this.width;

                        // if (width == 1920 || height == 1020) {
                        var html = '<li><div class="_img"><img src="' + e.target.result + '"><div class="checkbox"><span class="iconN-hook"></span></div></div><p>' + fileName + '</p></li>'
                        $(".situation .bgSelect .options .selfUpload ul").append(html)
                        // 重整slick
                        situation.resetSlick();

                        click_img();

                        return true;
                        // } else {
                        //     // 提示尺寸不合
                        //     alert("圖片尺寸不符合");
                        //     return false;
                        // }
                    };
                }
                reader.readAsDataURL(this.files[0]);
            }
        });

        click_img()

        function click_img() {
            // 點選圖片
            $(".situation .bgSelect .options .selfUpload ._slick li").click(function() {
                $(this).addClass("active").siblings().removeClass("active");
                $(".situation .bgSelect .options .share ._slick li").removeClass("active");
                var src = $(this).find("img").attr("src");
                bgImg(src);
            });
        }

        // 下載圖片
        $(".situation .bgSelect .download").click(function(e) {
            e.preventDefault();
            // var href = app.view.toDataURL("image/jpeg");
            // var download = "image.jpg"
            // $(this).attr("href",href)
            // $(this).attr("download", download)

            // 如果是ie

            app.view.toBlobHD(function(blob) {
                saveAs(blob, "image.png");
            });
        });

        function bgImg(src) {
            // 產品圖片
            var bgImgSrc = src
            var bgImg = PIXI.Sprite.fromImage(bgImgSrc);
            bgImg.anchor.set(0);

            bgImg.interactive = true;

            if (device && $(window).width() < $(window).height()) {
                bgImg.width = app.screen.height;
                bgImg.height = app.screen.width;
            } else {
                bgImg.width = app.screen.width;
                bgImg.height = app.screen.height;
            }

            container.addChild(bgImg);
            app.stage.removeChild(container)

            app.stage.addChild(container);
            app.stage.setChildIndex(container, 0);

            window.addEventListener('resize', horizontalOnly);

            horizontalOnly()

            // 強制橫版
            function horizontalOnly() {
                if (device) {
                    var width = document.documentElement.clientWidth;
                    var height = document.documentElement.clientHeight;
                    // 直版情形下
                    if (width < height) {

                        $(".situation").width(height).height(width);
                        $(".situation").css({
                            'top': (height - width) / 2,
                            'left': 0 - (height - width) / 2,
                            'transform': 'rotate(90deg)',
                            'transform-origin': '50% 50%'
                        });
                        setTimeout(function() {
                            app.renderer.resize(window.innerHeight, window.innerWidth);
                            bgImg.width = app.screen.width;
                            bgImg.height = app.screen.height;
                        }, 500);
                    }
                    // 橫版情形下
                    else if (width > height) {

                        $(".situation").width(width).height(height);
                        $(".situation").css({
                            'top': 0,
                            'left': 0,
                            'transform': 'none',
                            'transform-origin': '50% 50%'
                        });
                        setTimeout(function() {
                            app.renderer.resize(window.innerWidth, window.innerHeight);
                            bgImg.width = app.screen.width;
                            bgImg.height = app.screen.height;
                        }, 500);
                    }
                } else {
                    app.renderer.resize(window.innerWidth, window.innerHeight);
                    bgImg.width = app.screen.width;
                    bgImg.height = app.screen.height;
                }
            }
        }

        // 自動擷取冷氣的寬高

        if ($(".makeframe .standardImg").hasClass("active")) {
            var productWidth = $(".makeframe .standardImg img").width()
            var productHeight = $(".makeframe .standardImg img").height()
        } else if ($(".makeframe .customizedCanvas").hasClass("active")) {
            var productWidth = $(".makeframe .customizedCanvas .frame").width()
            var productHeight = $(".makeframe .customizedCanvas .frame").height()
        }

        productImg(productHeight, productWidth, 0.2);

        function productImg(height, width, scaleWithScreen) {
            // 使用者上傳的圖片的位置

            if ($(".makeframe .standardImg").hasClass("active")) {
                var productImgSrc = $(".makeframe .standardImg img").attr("src");
            } else if ($(".makeframe .customizedCanvas").hasClass("active")) {
                var productImgSrc = document.querySelector(".customizedCanvas #canvas canvas").toDataURL()
            }

            var texture = PIXI.Texture.fromImage(productImgSrc);

            // Scale mode for pixelation
            texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

            // 創造客製圖片放置區塊
            var productImg = new PIXI.Sprite(texture);


            // 區塊是否可動
            productImg.interactive = true;

            // this button mode will mean the hand cursor appears when you roll over the image with your mouse
            productImg.buttonMode = true;
            if (!device) {
                productImg.cursor = "url('../../assets/img/icon/mouse.svg'), auto";
            }

            // center the image's anchor point 圖片位置
            productImg.anchor.set(0.5, 0);

            // make it a bit bigger, so it's easier to grab 圖片保持原大小避免失真
            var productImgWidth = productImg.width = app.screen.width * scaleWithScreen;

            productImg.height = (height / width) * productImgWidth

            // productImg.scale.set(1);

            container2.addChild(productImg);

            app.stage.addChild(container2);

            //設定拖拉事件
            productImg
                .on('mousedown', onDragStart)
                .on('touchstart', onDragStart)
                .on('mouseup', onDragEnd)
                .on('mouseupoutside', onDragEnd)
                .on('touchend', onDragEnd)
                .on('touchendoutside', onDragEnd)
                .on('mousemove', onMouseMove)
                .on('touchmove', onDragMove)
                // 滾動縮放
                .on('mouseover', onScroll)
                // 回復預設滾動事件
                .on('mouseout', unbindScroll)

            window.addEventListener('resize', resize);

            function resize() {
                var productImgWidth = productImg.width = app.screen.width * scaleWithScreen;
                productImg.height = (height / width) * productImgWidth
                container2.x = app.screen.width / 2;
                container2.y = app.screen.height / 6;
            }
        }

        function onScroll() {
            $this = this
            $(window).on("mousewheel", function(e) {
                e.preventDefault();
                if (e.deltaY < 0 && $this.scale.x > 0.2) {
                    $this.scale.x *= .95;
                    $this.scale.y *= .95;
                } else if (e.deltaY > 0 && $this.scale.x < 1) {
                    $this.scale.x *= 1.05;
                    $this.scale.y *= 1.05;
                }
            });
        }

        function unbindScroll() {
            $(window).unbind('mousewheel');
        }

        var dragGroup

        function onDragStart(event) {
            // 電腦版才有
            if (!device) {
                event.target.cursor = "url('../../assets/img/icon/hand.svg'), auto";
            }
            if (!this.dragging) {
                this.data = event.data;
                this.oldGroup = this.parentGroup;
                this.parentGroup = dragGroup;
                this.dragging = true;

                this.scale.x *= 1;
                this.scale.y *= 1;
                this.dragPoint = event.data.getLocalPosition(this.parent);
                this.dragPoint.x -= this.x;
                this.dragPoint.y -= this.y;
            }
        }

        function onDragEnd(event) {
            // 電腦版才有
            if (!device) {
                event.target.cursor = "url('../../assets/img/icon/mouse.svg'), auto";
            }
            if (this.dragging) {
                this.dragging = false;
                this.parentGroup = this.oldGroup;
                this.scale.x /= 1;
                this.scale.y /= 1;
                // set the interaction data to null
                this.data = null;
            }
        }


        function onMouseMove(event) {
            if (this.dragging) {
                var newPosition = this.data.getLocalPosition(this.parent);
                this.x = newPosition.x - this.dragPoint.x;
                this.y = newPosition.y - this.dragPoint.y;
            }
        }

        var tracks = [];

        function onDragMove(event) {

            var $this = this
            // console.log(this.data.originalEvent.touches[0].clientX)
            if (this.data.originalEvent.touches.length === 1 && this.dragging) {
                var newPosition = this.data.getLocalPosition(this.parent);
                this.x = newPosition.x - this.dragPoint.x;
                this.y = newPosition.y - this.dragPoint.y;
            } else if (this.data.originalEvent.touches.length === 2) {
                var touch1x = this.data.originalEvent.touches[0].clientX
                touch1y = this.data.originalEvent.touches[0].clientY
                touch2x = this.data.originalEvent.touches[1].clientX
                touch2y = this.data.originalEvent.touches[1].clientY
                //計算兩者之間的距離
                var x = touch1x - touch2x
                var y = touch1y - touch2y
                var z = Math.sqrt((x * x) + (y * y))
                var z0 = tracks.pop()
                tracks.push(z)
                if (z > z0 && $this.scale.x < 0.8) {
                    $this.scale.x *= 1.02;
                    $this.scale.y *= 1.02;
                } else if (z < z0 && $this.scale.x > 0.1) {
                    $this.scale.x *= .98;
                    $this.scale.y *= .98;
                }
            }
        }
    },

    // 自動全螢幕
    toggleFullScreen: function() {

        var doc = window.document;
        var docEl = doc.documentElement;

        var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
        if (!is_safari) {
            // 原code 保留↓
            // !doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement

            // 開啟情境模擬時全螢幕
            if (!$(".situation").hasClass("open")) {
                requestFullScreen.call(docEl);
            }
            // 關閉情境模擬時 關閉全螢幕
            else {
                cancelFullScreen.call(doc);
            }
        }
    },

    all: function() {
        situation.open_click();
        situation.close_click();
        situation.shareSlick();
        situation.selfUploadSlick();
        situation.changeOption();
    }
}
/***************************************************************************************************************************/



$(document).ready(function() {
    customized.all();
    situation.all();
});