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

        if (aFilePath == "") { aFilePath = "index.html"; }
        if (locFilePath == "") { locFilePath = "index.html"; }
        if (aArr == "") { aFilePrevPath = locFilePrevPath; }


        if (aTarget == "_blank") {
            window.open(aHref); //傳遞另開視窗路徑至 window.open(aHref)
            aTarget = "";
        } else if (aHref.indexOf("jpg") >= 0) {
            // console.log("donotthing");
        } else if (aFilePrevPath != locFilePrevPath) {
            cgselector.random(aHref);
            aHref = "";
        } else if (aHref.indexOf("javascript") >= 0) {
            // console.log("donotthing");
        } else if (aFilePath != locFilePath && aTargetPath != "#" && locTargetPath != "#" && aHref != "") {
            cgselector.random(aHref);
            aHref = "";
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
        // 3 種換場特效;
        var cgnumber = Math.floor((Math.random() * 3) + 1);
        // var cgnumber = 2;
        switch (cgnumber) {
            case 1:
                pagechange.CG_A(href);
                aHref = "";
                break;
            case 2:
                pagechange.CG_B(href);
                aHref = "";
                break;
            case 3:
                pagechange.CG_C(href);
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
        $("main").append("<div id='CG_Abg'><div class='CG_Abg1'></div><div class='CG_Abg2'></div></div>");

        $("body").delay(1200).animate({ opacity: "0" }, {
            queue: true,
            duration: 200,
            easing: "easeOutQuad",
            complete: function() {
                setTimeout(function() {
                    window.location.assign(href);
                }, 100);
            } //end complate
        }); //end last animate
    }, //end CG_A

    //CG_B////////////
    CG_B: function(href) {
        $("main").append("<div id='CG_Bbg'></div>");

        $("body").delay(1200).animate({ opacity: "0" }, {
            queue: true,
            duration: 200,
            easing: "easeOutQuad",
            complete: function() {
                setTimeout(function() {
                    window.location.assign(href);
                }, 100);
            } //end complate
        }); //end last animate
    }, //end CG_B
    //CG_C////////////
    CG_C: function(href) {
        $("main").append("<div id='CG_Cbg'><div class='CG_Cbg1'></div><div class='CG_Cbg2'></div></div>");

        $("body").delay(1200).animate({ opacity: "0" }, {
            queue: true,
            duration: 200,
            easing: "easeOutQuad",
            complete: function() {
                setTimeout(function() {
                    window.location.assign(href);
                }, 100);
            } //end complate
        }); //end last animate
    } //end CG_C

} //end function