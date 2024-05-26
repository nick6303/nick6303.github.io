<!DOCTYPE html>
<!--html lang-->
<!--zh-Hant-TW 繁體中文-->
<!--en 英文-->
<html lang="zh-Hant-TW">


<head>
  <?php include('../layout/head.php');?> 
</head>


<body class="index discover" id="discover">

  <?php include('../layout/cg.php');?>

  <div class="cgAnimate">

    <?php include('../layout/header.php');?>

    <main>

      <!--設計師說這個mocaSBanner 客戶可以選擇要不要出現-->
      <!--banner尺寸 1920*500-->
      <article class="mocaSBanner">

        <div class="bg xsBGshow" style="" data-large="../../upload/fa2/application/Banner.jpg" data-small="../../upload/fa2/application/Banner.jpg"></div>

        <section class="titleSec" style="color: #fff;">
          <h4 class="title">DISCOVER MOCA</h4>
          <h5 class="subTitle">探索當代</h5>
        </section>

      </article>


      <!--mocaSNav-->
      <article class="mocaSNav">

        <section class="secBox">

          <div class="titleArea">
              <p class="title">DISCOVER MOCA 探索當代</p>
          </div>

          <div class="scrollFrame">
            <nav class="navBar">
              <a class="link cgNot ajax_cg now" href="../discover/index.php" data-path="../discover/discover.php" data-page="discover" title="">
                <p class="text">當代建築</p>
              </a>
              <a class="link cgNot ajax_cg" href="../discover/artist.php" data-path="../discover/artist.php" data-page="artist" title="">
                <p class="text">公共藝術</p>
              </a>
              <a class="link cgNot ajax_cg" href="../discover/artist.php" data-path="../discover/artist.php" data-page="artist" title="">
                <p class="text">公共藝術</p>
              </a>
            </nav>
          </div>

          <div class="searchArea" style="display:none">
              <span class="icon icon-magnifier"></span>
              <p class="text">SEARCH</p>
          </div>

        </section>

      </article>


      <article class="mocaPageBody discoverPageBody" data-page="discover">
        <section class="mocaTitleSec">
          <h2 class="title"><span>MOCA Building</span><strong>當代建築</strong></h2>
          <h3 class="subTitle">讓你一目了然當代特色建築風貌</h3>
        </section>

        <div class="clickScrollArea">
          <div class="box">
            <a class="link now" href="javascript:void(0)" title="">
              <p class="text">ALL 全部</p>
            </a>
            <a class="link" href="javascript:void(0)" title="">
              <p class="text">當代一部曲</p>
            </a>
            <a class="link" href="javascript:void(0)" title="">
              <p class="text">當代二部曲</p>
            </a>
            <a class="link" href="javascript:void(0)" title="">
              <p class="text">當代三部曲</p>
            </a>
          </div>
        </div>

        <div class="fullFrame colaPig">
          <figure class="imgFrame">
            <a class="cgNot ajax_open imgBox" href="../discover/ajaxVisitDetail.php" data-page="../discover/ajaxVisitDetail.php" data-id="ajaxVisitDetail" title="">
              <img class="b-lazy img" data-src="../../upload/fa2/discover/yo01.jpg" src="../../assets/img/fakeImg/1480x550.png" alt="" title="">
            </a>

            <figcaption class="caption">
              <h4 class="imgTitle">TAIWAN RENGA RED BRICK</h4>
              <h5 class="imgSubTitle">維多利亞紅磚文化</h5>
              <p class="imgText">館身特有的紅磚牆，要回朔到近藤十郎建造建成小學校時採用英式砌牆法，以台灣煉瓦株式會社所產出的一級磚，簡稱TR紅磚為主...</p>
            </figcaption>
          </figure>
        </div>

        <!--tripleFrame預設置中-->
        <!--若要靠左排 在tripleFrame 加left-->
        <!--若要靠右排 在tripleFrame 加right-->
        <ul class="tripleFrame colaPig">
          <li class="tirpleBox">
            <figure class="imgFrame">
              <picture class="">
                <a class="cgNot ajax_open imgBox" href="../discover/ajaxVisitDetail.php" data-page="../discover/ajaxVisitDetail.php" data-id="ajaxVisitDetail" title="">
                  <img class="b-lazy img" data-src="../../upload/fa2/discover/ok01.jpg" src="../../assets/img/fakeImg/450x330.png" alt="" title="">
                </a>
              </picture>

              <figcaption class="caption">
                <h4 class="imgTitle">WELCOME TO THE GALAXY RAILWAY</h4>
                <h5 class="imgSubTitle">雙連聲態</h5>
              </figcaption>
            </figure>
          </li>
          <li class="tirpleBox">
            <figure class="imgFrame">
              <a class="cgNot ajax_open imgBox" href="../discover/ajaxVisitDetail.php" data-page="../discover/ajaxVisitDetail.php" data-id="ajaxVisitDetail" title="">
                <img class="b-lazy img" data-src="../../upload/fa2/discover/ok02.jpg" src="../../assets/img/fakeImg/450x330.png" alt="" title="">
              </a>

              <figcaption class="caption">
                <h4 class="imgTitle">NEW YORK ODD : BALLOON DOG</h4>
                <h5 class="imgSubTitle">紐約怪談：氣球狗</h5>
              </figcaption>
            </figure>
          </li>
          <li class="tirpleBox">
            <figure class="imgFrame">
              <a class="cgNot ajax_open imgBox" href="../discover/ajaxVisitDetail.php" data-page="../discover/ajaxVisitDetail.php" data-id="ajaxVisitDetail" title="">
                <img class="b-lazy img" data-src="../../upload/fa2/discover/ok03.jpg" src="../../assets/img/fakeImg/450x330.png" alt="" title="">
              </a>

              <figcaption class="caption">
                <h4 class="imgTitle">WELCOME TO THE GALAXY RAILWAY</h4>
                <h5 class="imgSubTitle">歡迎光臨銀鐵道車站</h5>
              </figcaption>
            </figure>
          </li>
        </ul>

        <div class="smallFrame colaPig">
          <div class="textFrame">
            <div class="textBox">
              <h4 class="imgTitle">CLOCK TOWER</h4>
              <h5 class="imgSubTitle">扮演對稱關鍵的鐘樓</h5>
              <p class="imgText">建築保留至今的重要特色之一，即強調中軸線的意象鐘樓與角隅對稱的翼塔。這座西式的銅質鐘樓，尖端設有避雷針。此鐘樓並無...</p>
            </div>

            <a class="cgNot ajax_open btnStyle" href="../discover/ajaxVisitDetail.php" data-page="../discover/ajaxVisitDetail.php" data-id="ajaxVisitDetail" title="">
              <div class="btn styleB">
                <p class="text">MORE</p>
              </div>
            </a>
          </div>

          <figure class="imgFrame">
            <a class="cgNot ajax_open imgBox" href="../discover/ajaxVisitDetail.php" data-page="../discover/ajaxVisitDetail.php" data-id="ajaxVisitDetail" title="">
              <img class="b-lazy img" data-src="../../upload/fa2/discover/yo02.jpg" src="../../assets/img/fakeImg/475x530.png" alt="" title="">
            </a>
          </figure>
        </div>

        <div class="smallFrame colaPig return">
          <div class="textFrame">
            <div class="textBox">
              <h4 class="imgTitle">CLOCK TOWER</h4>
              <h5 class="imgSubTitle">扮演對稱關鍵的鐘樓</h5>
              <p class="imgText">建築保留至今的重要特色之一，即強調中軸線的意象鐘樓與角隅對稱的翼塔。這座西式的銅質鐘樓，尖端設有避雷針。此鐘樓並無...</p>
            </div>

            <a class="cgNot ajax_open btnStyle" href="../discover/ajaxVisitDetail.php" data-page="../discover/ajaxVisitDetail.php" data-id="ajaxVisitDetail" title="">
              <div class="btn styleB">
                <p class="text">MORE</p>
              </div>
            </a>
          </div>

          <figure class="imgFrame">
            <a class="cgNot ajax_open imgBox" href="../discover/ajaxVisitDetail.php" data-page="../discover/ajaxVisitDetail.php" data-id="ajaxVisitDetail" title="">
              <img class="b-lazy img" data-src="../../upload/fa2/discover/yo03.jpg" src="../../assets/img/fakeImg/475x530.png" alt="" title="">
            </a>
          </figure>
        </div>

        <div class="fullFrame colaPig">
          <figure class="imgFrame">
            <a class="cgNot ajax_open imgBox" href="../discover/ajaxVisitDetail.php" data-page="../discover/ajaxVisitDetail.php" data-id="ajaxVisitDetail" title="">
              <img class="b-lazy img" data-src="../../upload/fa2/discover/yo04.jpg" src="../../assets/img/fakeImg/1480x550.png" alt="" title="">
            </a>

            <figcaption class="caption">
              <h4 class="imgTitle">BUILD ROOF</h4>
              <h5 class="imgSubTitle">屋頂中等級最高的廡殿頂</h5>
              <p class="imgText">藝術館主樓特殊的屋頂型式為中國古代建築的廡殿頂，日語稱之為寄棟造，為中國、日本、朝鮮古代建築的一種屋頂樣式。在中國...</p>
            </figcaption>
          </figure>
        </div>
      </article>
    </main>

    <?php include('../layout/footer.php');?>

  </div>

</body>

<?php include('../layout/jsLayout.php');?> 
</html>