<!DOCTYPE html>
<!--html lang-->
<!--zh-Hant-TW 繁體中文-->
<!--en 英文-->
<html lang="zh-Hant-TW">

<head>
  <?php include('../layout/head.php');?> 
</head>

<body class="index" id="news">

  <?php include('../layout/cg.php');?>

  <div class="cgAnimate">

    <?php include('../layout/header.php');?>

    <main>

      <!--設計師說這個mocaSBanner 客戶可以選擇要不要出現-->
      <!--banner尺寸 1920*500-->
      <article class="mocaSBanner">

        <div class="bg xsBGshow" style="" data-large="../../upload/fa2/application/Banner.jpg" data-small="../../upload/fa2/application/Banner.jpg"></div>

        <section class="titleSec" style="color: #fff;">
          <h4 class="title">LASTEST MEWS</h4>
          <h5 class="subTitle">最新消息</h5>
        </section>

      </article>


      <article class="mocaSNav">

        <section class="secBox">

          <div class="titleArea">
              <p class="title">LASTEST MEWS 最新消息</p>
          </div>

          <div class="scrollFrame">
              <nav class="navBar">
                  <a class="link cgNot now" href="indexContent.html" data-src="indexContent.html" data-ajaxTarget="ajaxContent" onclick="ajax(this)">
                      <p class="text">最新消息</p>
                  </a>
                  <a class="link cgNot" href="indexContent.html" data-src="indexContent.html" data-ajaxTarget="ajaxContent" onclick="ajax(this)">
                      <p class="text">園區公告</p>
                  </a>
                  <a class="link cgNot" href="indexContent.html" data-src="indexContent.html" data-ajaxTarget="ajaxContent" onclick="ajax(this)">
                      <p class="text">展演資訊</p>
                  </a>
                  <a class="link cgNot" href="indexContent.html" data-src="indexContent.html" data-ajaxTarget="ajaxContent" onclick="ajax(this)">
                      <p class="text">新聞發布</p>
                  </a>
              </nav>
          </div>

          <div class="searchArea">
              <span class="icon icon-magnifier"></span>
              <p class="text">SEARCH</p>
          </div>

        </section>

      </article>

      <article class="ajaxContent">
        <section class="_title">
          <p class="en">News Overview <span>消息總覽</span></p>
          <p class="ch">讓你掌握最即時的當代動態</p>
          <div class="year">
            <!-- 後端請注意:下方data-src請放入ajax內容的位置-->
            <div class="ajax active" data-src="2018.html" data-ajaxTarget="masonry" onclick="ajax(this);">
              <p>2018</p>
            </div>
            <!--後端請注意:下方data-src請放入ajax內容的位置-->
            <div class="ajax" data-src="2018.html" data-ajaxTarget="masonry" onclick="ajax(this);">
              <p>2017</p>
            </div>
            <!--後端請注意:下方data-src請放入ajax內容的位置-->
            <div class="ajax" data-src="2018.html" data-ajaxTarget="masonry" onclick="ajax(this);">
              <p>2016</p>
            </div>
            <div class="dropDown"><span class="selectMenu">
                <p>YEAR  其他年分</p></span>
              <ul>
                <!--後端請注意:下方data-src請放入ajax內容的位置-->
                <li data-src="2018.html" data-ajaxTarget="masonry" onclick="ajax(this);">
                  <p>2018</p>
                </li>
                <!--後端請注意:下方data-src請放入ajax內容的位置-->
                <li data-src="2018.html" data-ajaxTarget="masonry" onclick="ajax(this);">
                  <p>2017</p>
                </li>
                <!--後端請注意:下方data-src請放入ajax內容的位置-->
                <li data-src="2018.html" data-ajaxTarget="masonry" onclick="ajax(this);">
                  <p>2016</p>
                </li>
                <!--後端請注意:下方data-src請放入ajax內容的位置-->
                <li data-src="2018.html" data-ajaxTarget="masonry" onclick="ajax(this);">
                  <p>2015</p>
                </li>
                <!--後端請注意:下方data-src請放入ajax內容的位置-->
                <li data-src="2018.html" data-ajaxTarget="masonry" onclick="ajax(this);">
                  <p>2014</p>
                </li>
                <!--後端請注意:下方data-src請放入ajax內容的位置-->
                <li data-src="2018.html" data-ajaxTarget="masonry" onclick="ajax(this);">
                  <p>2013</p>
                </li>
                <!--後端請注意:下方data-src請放入ajax內容的位置-->
                <li data-src="2018.html" data-ajaxTarget="masonry" onclick="ajax(this);">
                  <p>2012</p>
                </li>
                <!--後端請注意:下方data-src請放入ajax內容的位置-->
                <li data-src="2018.html" data-ajaxTarget="masonry" onclick="ajax(this);">
                  <p>2011</p>
                </li>
                <!--後端請注意:下方data-src請放入ajax內容的位置-->
                <li data-src="2018.html" data-ajaxTarget="masonry" onclick="ajax(this);">
                  <p>2010</p>
                </li>
                <!--後端請注意:下方data-src請放入ajax內容的位置-->
                <li data-src="2018.html" data-ajaxTarget="masonry" onclick="ajax(this);">
                  <p>2009</p>
                </li>
                <!--後端請注意:下方data-src請放入ajax內容的位置-->
                <li data-src="2018.html" data-ajaxTarget="masonry" onclick="ajax(this);">
                  <p>2008</p>
                </li>
                <!--後端請注意:下方data-src請放入ajax內容的位置-->
                <li data-src="2018.html" data-ajaxTarget="masonry" onclick="ajax(this);">
                  <p>2007</p>
                </li>
                <!--後端請注意:下方data-src請放入ajax內容的位置-->
                <li data-src="2018.html" data-ajaxTarget="masonry" onclick="ajax(this);">
                  <p>2006</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section class="masonry">
          <!-- ---------------------由此開始ajax或include--------------------->
          <ul>
            <div class="grid-size"></div>
            <!-- 後端請注意: 此處有四種模式 :
            1.大 big 
            2.中 middle
            3.純文字 textOnly  (基本上大小跟"中"一樣 只是只有背景顏色 沒有圖片)
            4.小 small (後端請注意: 請在後台幫我標註 如果要上小的 就一定要一次上兩個)
            -->
            <li class="big"><a href="detail.html">
                <figure>
                  <!-- 後端請注意:圖瑱建議尺寸 730*730--><img class="b-lazy" src="../../assets/img/blazy_blank.svg" data-src="../../upload/fa2/news/index/bigImg_730_730.jpg" alt="">
                </figure>
                <div class="_text">
                  <div class="dateAndType">
                    <div class="date">
                      <p> SEP. 27</p>
                    </div>
                    <div class="type">
                      <p>最新消息</p>
                    </div>
                  </div>
                  <div class="words">
                    <h6>MOCA台北當代藝術館15歲啦！快來和我們一起慶祝這特別的日子</h6>
                  </div>
                </div></a></li>
            <li class="middle"><a href="detail.html">
                <figure>
                  <!-- 後端請注意:圖瑱建議尺寸 730*350--><img class="b-lazy" src="../../assets/img/blazy_blank.svg" data-src="../../upload/fa2/news/index/middleImg_730_350.jpg" alt="">
                </figure>
                <div class="_text">
                  <div class="dateAndType">
                    <div class="date">
                      <p>SEP. 22  </p>
                    </div>
                    <div class="type">
                      <p>園區公告</p>
                    </div>
                  </div>
                  <div class="words">
                    <h6>有著過人勇氣與冒險精神的世界級攝影大師</h6>
                  </div>
                </div></a></li>
            <li class="small"><a href="detail.html">
                <figure>
                  <!-- 後端請注意:圖瑱建議尺寸 350*230--><img class="b-lazy" src="../../assets/img/blazy_blank.svg" data-src="../../upload/fa2/news/index/smallImg_350_230.jpg" alt="">
                </figure>
                <div class="_text">
                  <div class="dateAndType">
                    <div class="date">
                      <p>SEP. 18</p>
                    </div>
                    <div class="type">
                      <p>新聞發布</p>
                    </div>
                  </div>
                  <div class="words">
                    <!-- 後端請注意:字數限制-->
                    <h6>藝術移動工作室Portable Studio</h6>
                  </div>
                </div></a></li>
            <li class="small"><a href="detail.html">
                <figure>
                  <!-- 後端請注意:圖瑱建議尺寸 350*230--><img class="b-lazy" src="../../assets/img/blazy_blank.svg" data-src="../../upload/fa2/news/index/smallImg2_350_230.jpg" alt="">
                </figure>
                <div class="_text">
                  <div class="dateAndType">
                    <div class="date">
                      <p>AGU. 13  </p>
                    </div>
                    <div class="type">
                      <p>展演資訊</p>
                    </div>
                  </div>
                  <div class="words">
                    <!-- 後端請注意:字數限制-->
                    <h6>視覺與肢體共創 <br/>一場獨一無二的身體演出！</h6>
                  </div>
                </div></a></li>
            <li class="textOnly"><a href="detail.html">
                <!-- 後端請注意:此處的背景顏色要讓客戶自己決定-->
                <div class="_text" style="background-color: #e83434">
                  <div class="dateAndType">
                    <div class="date">
                      <p>SEP. 12</p>
                    </div>
                    <div class="type">
                      <p>園區公告</p>
                    </div>
                  </div>
                  <div class="words">
                    <h6>台北當代藝術館第30期義工錄取名單</h6>
                    <!-- 後端請注意:字數限制 65個字以內-->
                    <p>非常感謝大家熱烈報名，最新一期的義工徵選名單出爐囉！歡迎點選附件查看內容，若你也有興趣加入義工行列，可以關注我們的官網最新動態...</p>
                  </div>
                </div></a></li>
            <li class="big"><a href="detail.html">
                <figure>
                  <!-- 後端請注意:圖瑱建議尺寸 730*730--><img class="b-lazy" src="../../assets/img/blazy_blank.svg" data-src="../../upload/fa2/news/index/bigImg2_730_730.jpg" alt="">
                </figure>
                <div class="_text">
                  <div class="dateAndType">
                    <div class="date">
                      <p>JUL. 19  </p>
                    </div>
                    <div class="type">
                      <p>最新消息</p>
                    </div>
                  </div>
                  <div class="words">
                    <h6>兒童與藝術的對話：當孩子塗鴉時，創意的美學教養從此開始</h6>
                  </div>
                </div></a></li>
            <li class="small"><a href="detail.html">
                <figure>
                  <!-- 後端請注意:圖瑱建議尺寸 350*230--><img class="b-lazy" src="../../assets/img/blazy_blank.svg" data-src="../../upload/fa2/news/index/smallImg3_350_230.jpg" alt="">
                </figure>
                <div class="_text">
                  <div class="dateAndType">
                    <div class="date">
                      <p>SEP. 20  </p>
                    </div>
                    <div class="type">
                      <p>最新消息</p>
                    </div>
                  </div>
                  <div class="words">
                    <!-- 後端請注意:字數限制-->
                    <h6>薩滿能量市集 x 邊緣工事 <br/> x 南西世足嘉年華</h6>
                  </div>
                </div></a></li>
            <li class="small"><a href="detail.html">
                <figure>
                  <!-- 後端請注意:圖瑱建議尺寸 350*230--><img class="b-lazy" src="../../assets/img/blazy_blank.svg" data-src="../../upload/fa2/news/index/smallImg4_350_230.jpg" alt="">
                </figure>
                <div class="_text">
                  <div class="dateAndType">
                    <div class="date">
                      <p>AGU. 24</p>
                    </div>
                    <div class="type">
                      <p>園區公告</p>
                    </div>
                  </div>
                  <div class="words">
                    <!-- 後端請注意:字數限制-->
                    <h6>《 自由小屋 》屋主招募計畫</h6>
                  </div>
                </div></a></li>
          </ul>
        </section>
      </article>

    </main>

    <?php include('../layout/footer.php');?>

  </div>

</body>

<?php include('../layout/jsLayout.php');?>
<script>
  function ajax(target){
      if(!$(target).hasClass("active")){
  
          //加上標示已啟動的class
          $(target).addClass("active").siblings().removeClass("active").find("ul li").removeClass("active")
          // ajax內容位置
          var src = $(target).attr("data-src")
          // ajax內容放置的地方
          var box = "." + $(target).attr("data-ajaxTarget")
  
          // 計算移動時間
          var time = Math.floor(($(window).scrollTop()/($("body").innerHeight()-$(window).height()))*1000+400)
          // $("html,body").animate({
          //     scrollTop: 0
          // }, time, 'easeOutCubic');
  
          // 滑動同時加入移除動畫
          $(box + ">*").addClass("out")
  
          setTimeout(function () {
              $.ajax({
                  // 載入資料
                      url: src,
                  })
                  .done(function (data) {
                      // 移除原本的內容
                      $(box + ">*").remove()
                      // 將資料塞入結構
                      $(box).html(data);
                      // 重新啟動入場動畫
                      _Blazy.newsW();
                      _waypoint.newsW();
                      news.all();
                      // 重啟下拉選單
                      dropDown();
                  });
          }, 1000);
      }
  }
</script>
</html>