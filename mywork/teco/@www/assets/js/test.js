function test() {
    // 抓取適當的寬
    var width = $(".testbox1 .srcbox").width()
    // 抓取適當的高
    var height = $(".testbox1 .srcbox").height()

    // 設定基本canvas
    var app = new PIXI.Application(width, height, { transparent: true, preserveDrawingBuffer: true });
    document.querySelector(".testbox1 #canvas").appendChild(app.view);
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

    // 圖片上傳
    $(".testbox1 .upload input").change(function() {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $(".testbox1 .customizeImg").attr('src', e.target.result);
                
                upload();
            }
            reader.readAsDataURL(this.files[0]);
        }
    });



    function productImg() {

        // 產品圖片
        var productImgSrc = $(".testbox1 .productImg").attr("src")

        var productImg = PIXI.Sprite.fromImage(productImgSrc);
        productImg.anchor.set(0.5);
        productImg.width = app.screen.width;
        productImg.height = app.screen.height;
        container.addChild(productImg);

        app.stage.addChild(container);
    }

    function upload() {

        // create a texture from an image path
        // 使用者上傳的圖片的位置
        var customizeImgSrc = $(".testbox1 .customizeImg").attr("src");
        var texture = PIXI.Texture.fromImage(customizeImgSrc);

        // Scale mode for pixelation
        texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

        // 創造客製圖片放置區塊
        var customizeImg = new PIXI.Sprite(texture);

        // 區塊是否可動
        customizeImg.interactive = true;

        // this button mode will mean the hand cursor appears when you roll over the image with your mouse
        customizeImg.buttonMode = true;
        customizeImg.cursor = 'grab';

        // center the image's anchor point 圖片位置
        customizeImg.anchor.set(0.5);

        // make it a bit bigger, so it's easier to grab 圖片保持原大小避免失真
        customizeImg.scale.set(1);



        // setup events for mouse + touch using
        //設定拖拉事件
        customizeImg
            .on('mousedown', onDragStart)
            .on('touchstart', onDragStart)
            .on('mouseup', onDragEnd)
            .on('mouseupoutside', onDragEnd)
            .on('touchend', onDragEnd)
            .on('touchendoutside', onDragEnd)
            .on('mousemove', onDragMove)
            .on('touchmove', onDragMove);

        ////////////////////////////
        //        按鈕事件         //
        ////////////////////////////


        // 放大按鈕
        $(".testbox1 .zoomIn").click(function() {
            customizeImg.scale.x *= 1.05
            customizeImg.scale.y *= 1.05
        });

        // 縮小按鈕
        $(".testbox1 .zoomOut").click(function() {
            customizeImg.scale.x *= 0.95
            customizeImg.scale.y *= 0.95
        });

        // 重整按鈕:連同位置一起重整
        $(".testbox1 .reset").click(function() {
            customizeImg.scale.x = 1
            customizeImg.scale.y = 1
            customizeImg.x = 0
            customizeImg.y = 0
        });

        // 下載圖片
        $(".testbox1 .downLoad").click(function() {

            var imgData = app.view.toDataURL();

            $(".testbox1 .testImg").attr("src", imgData);

            // 上傳圖片相對於中間點位置
            var position = "<p>上傳圖片中心點與冷氣框架左上角距離: " + customizeImg.getGlobalPosition().x + "," + customizeImg.getGlobalPosition().y + "</p>"
            // $(".data").append(position)

            // 圖片縮放大小
            var scale = "<p>圖片縮放大小: " + customizeImg.scale.x + "</p>"
            // $(".data").append(scale)

            // 圖片檢視寬度
            var width = "<p>圖片檢視寬度: " + customizeImg.width + "</p>"
            // $(".data").append(width)

            // 圖片檢視高度
            var height = "<p>圖片檢視高度: " + customizeImg.height + "</p>"
            // $(".data").append(height)

            // 冷氣框架寬度
            var frameWidth = "<p>冷氣框架寬度: " + frame.width + "</p>"
            // $(".data").append(frameWidth)

            // 冷氣框架寬度
            var frameHeight = "<p>冷氣框架寬度: " + frame.height + "</p>"
            // $(".data").append(frameHeight)

            var html = position + scale + width + height + frameWidth + frameHeight
            $(".testbox1 .data").html(html)

        });

        // 客製化面板邊框-需要為黑色png圖片
        var frameSrc = $(".testbox1 .frame").attr("src")
        var frame = PIXI.Sprite.fromImage(frameSrc);
        frame.anchor.set(0.5, 0.5);
        frame.width = app.screen.width
        frame.height = app.screen.height

        customizeImg.mask = frame
        // add all to the stage

        container2.removeChild(container2.children[1]);
        container2.removeChild(container2.children[0]);
        container2.addChild(customizeImg, frame);


        app.stage.addChild(container2);

        app.stage.setChildIndex(container2, 0);


    }


    function onDragStart(event) {
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

    function onDragEnd() {
        if (this.dragging) {
            this.dragging = false;
            this.parentGroup = this.oldGroup;
            this.scale.x /= 1;
            this.scale.y /= 1;
            // set the interaction data to null
            this.data = null;
        }
    }

    function onDragMove() {
        if (this.dragging) {
            var newPosition = this.data.getLocalPosition(this.parent);
            this.x = newPosition.x - this.dragPoint.x;
            this.y = newPosition.y - this.dragPoint.y;
        }
    }
}


function test2() {
    // 抓取適當的寬
    var width = $(window).width()
    // 抓取適當的高
    var height = $(window).height()

    // 設定基本canvas
   

    var app = new PIXI.Application(width, height, {autoResize: true, transparent: true, preserveDrawingBuffer: true,autoPreventDefault:false });
    document.querySelector(".testbox2 #canvas").appendChild(app.view);

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


    var src = $(".testbox2 .bgs ul li:first-child").find("img").attr("src");

    bgImg(src);

    $(".testbox2 .bgs ul li").click(function() {
        var src = $(this).find("img").attr("src");
        bgImg(src);
    });


    var dragGroup


    function bgImg(src) {

        // 產品圖片
        var bgImgSrc = src
        var bgImg = PIXI.Sprite.fromImage(bgImgSrc);
        bgImg.anchor.set(0);

        bgImg.interactive = true;

        bgImg.width = app.screen.width;
        bgImg.height = app.screen.height;

        container.addChild(bgImg);

        app.stage.addChild(container);

        app.stage.setChildIndex(container, 0);


        window.addEventListener('resize', resize);

        function resize() {
            app.renderer.resize(window.innerWidth, window.innerHeight);

            bgImg.width = app.screen.width;

            bgImg.height = app.screen.height;
        }
    }

    productImg(275, 800, 0.5);

    function productImg(height, width, scaleWithScreen) {
        // create a texture from an image path
        // 使用者上傳的圖片的位置
        var productImgSrc = "../../upload/testsvg.png"
        var texture = PIXI.Texture.fromImage(productImgSrc);

        // Scale mode for pixelation
        texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

        // 創造客製圖片放置區塊
        var productImg = new PIXI.Sprite(texture);


        // 區塊是否可動
        productImg.interactive = true;

        // this button mode will mean the hand cursor appears when you roll over the image with your mouse
        productImg.buttonMode = true;
        productImg.cursor = 'grab';

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
            .on('mousemove', onDragMove)
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
        if (this.dragging) {
            this.dragging = false;
            this.parentGroup = this.oldGroup;
            this.scale.x /= 1;
            this.scale.y /= 1;
            // set the interaction data to null
            this.data = null;

        }
    }

    function onDragMove(event) {
        if (this.dragging) {
            var newPosition = this.data.getLocalPosition(this.parent);
            this.x = newPosition.x - this.dragPoint.x;
            this.y = newPosition.y - this.dragPoint.y;
        }
    }
}




$(document).ready(function() {
    test();

    test2();




    window.addEventListener('touchstart', touchtest);

    var array = new Array


    function touchtest(e) {
        if (e.targetTouches.length == 2) {
            alert("2")
        }

    }

    // window.addEventListener('touchend', touchtend);

    // function touchtend(e) {
    //     console.log(e.touches.length)
    // }
});