///////////////////////////////////////
//            轉場href判斷           //
///////////////////////////////////////
var aHrefChangePageEffect = function(domClass) {
    var domClass = (domClass.length > 0) ? domClass : "a";
    $(domClass).not('.no-page-change').click(function(a) {
        a.preventDefault();
        var aHref = $(this).attr("href");
        var aTarget = $(this).attr("target"); //存取路徑
        var aArr = aHref.split("/");
        // var aArr = aHref.indexOf("/")>0?aHref.split("/"):aHref;
        var aFilePath = aArr.pop();
        var aFilePrevPath = aArr.pop();
        var aTargetPath = aFilePath.substr(0, 1); //抓取字串第一字元





        var locHref = location.href; //存取目前網址
        var locArr = locHref.split("/");
        var locFilePath = locArr.pop();
        var locFilePrevPath = locArr.pop();
        var locTargetPath = aFilePath.substr(0, 1); //抓取字串第一字元

        // if (aFilePath = locFilePath)

        if (aFilePath == "") { aFilePath = "index.html"; }
        if (locFilePath == "") { locFilePath = "index.html"; }
        if (aArr == "") { aFilePrevPath = locFilePrevPath; }


        if (aTarget == "_blank") {
            window.open(aHref); //傳遞另開視窗路徑至 window.open(aHref)
            aTarget = "";
        } else if (aHref.indexOf("jpg") >= 0) {
            // console.log("donotthing");
        } else if (aFilePrevPath != locFilePrevPath) {


            // 測試中
            // if ((locFilePrevPath = "style")) {
                cgselector.random(aHref);
                aHref = "";
                console.log("轉場動畫有啟動");
            // }


        } else if (aHref.indexOf("javascript") >= 0) {
            // console.log("donotthing");
        } else if (aFilePath != locFilePath && aTargetPath != "#" && locTargetPath != "#" && aHref != "") {

            // 測試中
            // if ((locFilePrevPath = "style")) {
                cgselector.random(aHref);
                aHref = "";
                console.log("轉場動畫有啟動");
            // }





        } else if (aTargetPath == "#") {
            //jquery.smooth-scroll//
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({ scrollTop: target.offset().top }, { duration: 900, easing: 'easeInOutCirc' });
            } //end if
        } //end else
    }) //end click function

}

// $(window).load(function() {
//     aHrefChangePageEffect('main a');
// }); 
//end ready

///////////////////////////////////////
//        Animlate selecor JQ        //
///////////////////////////////////////

var cgselector = {

    random: function(href) {
        var cgnumber = Math.floor((Math.random() * 3) + 1);
        var cgnumber = 1;
        switch (cgnumber) {
            case 1:
                pagechange.CG_A(href);
                aHref = "";
                break;
            case 2:
                pagechange.CG_A(href);
                aHref = "";
                break;
            case 3:
                pagechange.CG_A(href);
                aHref = "";
                break;
            default:
        }
    }
} //end function



///////////////////////////////////////
//           cgpagechangeA           //
///////////////////////////////////////

var pagechange = {
    //CG A////////////
    CG_A: function(href) {

        // 先滾動到上方
        $("html, body").animate({ scrollTop: $("body").offset().top }, { duration: 500, easing: 'easeInOutCirc' });


        setTimeout(function() {

            $("html").css("overflow", "hidden");

            $("body").css("overflow", "hidden");

            $("body").off().append("<div id='cgbg1'></div><div id='cgbg2'><img src='../../assset/img/cglogo1.svg'><img src='../../assset/img/cglogo2.svg'></div>");

            $(".navfloat").css("display", "none");
            $(".detail_nav").css("display", "none");

            // 開始內縮
            $("html").addClass("cgstart");





        }, 600);

        // 旋轉90deg
        setTimeout(function() {
            $("body").addClass("cgstart_rotate");
        }, 600);

        // 轉回0deg
        setTimeout(function() {
            $("body").removeClass("cgstart_rotate");

            // 讓原本的內容隱藏
            $("header").css("opacity", "0");
            $("main").css("opacity", "0");
            $("footer").css("opacity", "0");


            $("#cgbg1").animate({ opacity: "1" }, {
                queue: true,
                duration: 0,
                easing: "easeOutQuad",
            });
        }, 1000);

        setTimeout(function() {
            $("body").addClass("up");
        }, 1400);



        setTimeout(function() {
            $("html").removeClass("cgstart");
        }, 2200);

        $("body").delay(2200).animate({ opacity: "0" }, {
            queue: true,
            duration: 100,
            easing: "easeOutQuad",
            complete: function() {
                setTimeout(function() {
                    window.location.assign(href);
                }, 400);
            } //end complate
        }); //end last animate
        //end CG_A
    }
} //end function