<!DOCTYPE html>
<!--html lang-->
<!--zh-Hant-TW 繁體中文-->
<!--en 英文-->
<html lang="zh-Hant-TW">


<head>
  <?php include('../layout/head.php');?> 
</head>


<body class="index visit" id="visit">

  <?php include('../layout/cg.php');?>

  <div class="cgAnimate">

    <?php include('../layout/header.php');?>

    <main>


      <!--設計師說這個mocaSBanner 客戶可以選擇要不要出現-->
      <!--banner尺寸 1920*500-->
      <article class="mocaSBanner">

        <div class="bg xsBGshow" style="" data-large="../../upload/fa2/visit/visitBanner.jpg" data-small="../../upload/fa2/about/banner.jpg"></div>

        <section class="titleSec" style="color: #fff;">
          <h4 class="title">PLAN YOUR VISIT</h4>
          <h5 class="subTitle">參觀資訊</h5>
        </section>

      </article>
      

      <!--mocaSNav-->
      <article class="mocaSNav">

        <section class="secBox">

          <div class="titleArea">
            <p class="title">PLAN YOUR VISIT 參觀資訊</p>
          </div>

          <div class="scrollFrame">
            <nav class="navBar">
              <a class="link cgNot ajax_cg now" href="../visit/index.php" data-path="../visit/visit.php" data-page="visit" title="">
                <p class="text">主題路線</p>
              </a>
              <a class="link cgNot ajax_cg" href="../visit/visitTicket.php" data-path="../visit/visitTicket.php" data-page="visitTicket" title="">
                <p class="text">時間與票價</p>
              </a>
              <a class="link cgNot ajax_cg" href="../visit/visitTour.php" data-path="../visit/visitTour.php" data-page="visitTour" title="">
                <p class="text">導覽服務</p>
              </a>
              <a class="link cgNot ajax_cg" href="../visit/visitFacility.php" data-path="../visit/visitFacility.php" data-page="visitFacility" title="">
                <p class="text">友善設施</p>
              </a>
              <a class="link cgNot ajax_cg" href="../visit/visitTransport.php" data-path="../visit/visitTransport.php" data-page="visitTransport" title="">
                <p class="text">交通資訊</p>
              </a>
              <a class="link cgNot ajax_cg" href="../visit/visitReserv.php" data-path="../visit/visitReserv.php" data-page="visitReserv" title="">
                <p class="text">團體預約</p>
              </a>
            </nav>
          </div>

          <div class="searchArea" style="display:none">
            <span class="icon icon-magnifier"></span>
            <p class="text">SEARCH</p>
          </div>

        </section>

      </article>


      <!--大圖 680*760-->
      <!--小圖 680*430-->
      <article class="mocaPageBody" data-page="visit">
        <section class="mocaTitleSec">
          <h2 class="title"><span>Topic Route</span><strong>主題路線</strong></h2>
          <h3 class="subTitle">豐富又有趣的主題路線 體驗當代的多彩多姿</h3>
        </section>

        <div class="wallFrame grid">
          <section class="wall grid-item">
            <figure class="imgFrame">
              <a class="cgNot ajax_open" href="../visit/ajaxVisitDetail.php" data-page="../visit/ajaxVisitDetail.php" data-id="ajaxVisitDetail" title="">
                <img class="img" src="../../upload/fa2/visit/wall1.jpg" alt="" title="">

                <div class="hoverArea" style="color: #fff;">
                  <div class="bg" style="background-color: #da2c2c;"></div>
                  <div class="mathBox">
                    <span class="num">5</span>
                    <span class="text">景點總數 (個)</span>
                  </div>
                  <span class="line" style="background-color: #fff;"></span>
                  <div class="mathBox">
                    <span class="num">2.5</span>
                    <span class="text">總時程 (時)</span>
                  </div>
                </div>
              </a>
            </figure>

            <div class="textBox">
              <h2 class="title">TOUR FOR <strong>PUBLIC ART WALK</strong></h2>
              <h3 class="subTitle">公共藝術散步路線</h3>
              <p class="text">沿著台北街道細細尋找當代的公共藝術品，可能是在一個不經意的轉角或是在人來人往的車站，讓城市工滿藝術氣息。</p>
            </div>
          </section>

          <section class="wall grid-item">
            <figure class="imgFrame">
              <a class="cgNot ajax_open" href="../visit/ajaxVisitDetail.php" data-page="../visit/ajaxVisitDetail.php" data-id="ajaxVisitDetail" title="">
                <img class="img" src="../../upload/fa2/visit/wall2.jpg" alt="" title="">

                <div class="hoverArea" style="color: #fff;">
                  <div class="bg" style="background-color: #da2c2c;"></div>
                  <div class="mathBox">
                    <span class="num">5</span>
                    <span class="text">景點總數 (個)</span>
                  </div>
                  <span class="line" style="background-color: #fff;"></span>
                  <div class="mathBox">
                    <span class="num">2.5</span>
                    <span class="text">總時程 (時)</span>
                  </div>
                </div>
              </a>
            </figure>

            <div class="textBox">
              <h2 class="title">TOUR FOR <strong>KIDS AND FAMILIES</strong></h2>
              <h3 class="subTitle">親子同樂路線</h3>
              <p class="text">一起來體驗當代為親子量身打造的驚艷景點，充滿創意又有趣的內容，來一場適合全家老小一起探險玩樂的探險吧！</p>
            </div>
          </section>

          <section class="wall grid-item">
            <figure class="imgFrame">
              <a class="cgNot ajax_open" href="../visit/ajaxVisitDetail.php" data-page="../visit/ajaxVisitDetail.php" data-id="ajaxVisitDetail" title="">
                <img class="img" src="../../upload/fa2/visit/wall3.jpg" alt="" title="">

                <div class="hoverArea" style="color: #fff;">
                  <div class="bg" style="background-color: #da2c2c;"></div>
                  <div class="mathBox">
                    <span class="num">5</span>
                    <span class="text">景點總數 (個)</span>
                  </div>
                  <span class="line" style="background-color: #fff;"></span>
                  <div class="mathBox">
                    <span class="num">2.5</span>
                    <span class="text">總時程 (時)</span>
                  </div>
                </div>
              </a>
            </figure>

            <div class="textBox">
              <h2 class="title">TOUR FOR <strong>KIDS AND FAMILIES</strong></h2>
              <h3 class="subTitle">親子同樂路線</h3>
              <p class="text">一起來體驗當代為親子量身打造的驚艷景點，充滿創意又有趣的內容，來一場適合全家老小一起探險玩樂的探險吧！</p>
            </div>
          </section>

          <section class="wall grid-item">
            <figure class="imgFrame">
              <a class="cgNot ajax_open" href="../visit/ajaxVisitDetail.php" data-page="../visit/ajaxVisitDetail.php" data-id="ajaxVisitDetail" title="">
                <img class="img" src="../../upload/fa2/visit/wall1.jpg" alt="" title="">

                <div class="hoverArea" style="color: #fff;">
                  <div class="bg" style="background-color: #da2c2c;"></div>
                  <div class="mathBox">
                    <span class="num">5</span>
                    <span class="text">景點總數 (個)</span>
                  </div>
                  <span class="line" style="background-color: #fff;"></span>
                  <div class="mathBox">
                    <span class="num">2.5</span>
                    <span class="text">總時程 (時)</span>
                  </div>
                </div>
              </a>
            </figure>

            <div class="textBox">
              <h2 class="title">TOUR FOR <strong>KIDS AND FAMILIES</strong></h2>
              <h3 class="subTitle">親子同樂路線</h3>
              <p class="text">一起來體驗當代為親子量身打造的驚艷景點，充滿創意又有趣的內容，來一場適合全家老小一起探險玩樂的探險吧！</p>
            </div>
          </section>

          <section class="wall grid-item">
            <figure class="imgFrame">
              <a class="cgNot ajax_open" href="../visit/ajaxVisitDetail.php" data-page="../visit/ajaxVisitDetail.php" data-id="ajaxVisitDetail" title="">
                <img class="img" src="../../upload/fa2/visit/wall1.jpg" alt="" title="">

                <div class="hoverArea" style="color: #fff;">
                  <div class="bg" style="background-color: #da2c2c;"></div>
                  <div class="mathBox">
                    <span class="num">5</span>
                    <span class="text">景點總數 (個)</span>
                  </div>
                  <span class="line" style="background-color: #fff;"></span>
                  <div class="mathBox">
                    <span class="num">2.5</span>
                    <span class="text">總時程 (時)</span>
                  </div>
                </div>
              </a>
            </figure>

            <div class="textBox">
              <h2 class="title">TOUR FOR <strong>PUBLIC ART WALK</strong></h2>
              <h3 class="subTitle">公共藝術散步路線</h3>
              <p class="text">沿著台北街道細細尋找當代的公共藝術品，可能是在一個不經意的轉角或是在人來人往的車站，讓城市工滿藝術氣息。</p>
            </div>
          </section>

          <section class="wall grid-item">
            <figure class="imgFrame">
              <a class="cgNot ajax_open" href="../visit/ajaxVisitDetail.php" data-page="../visit/ajaxVisitDetail.php" data-id="ajaxVisitDetail" title="">
                <img class="img" src="../../upload/fa2/visit/wall2.jpg" alt="" title="">

                <div class="hoverArea" style="color: #fff;">
                  <div class="bg" style="background-color: #da2c2c;"></div>
                  <div class="mathBox">
                    <span class="num">5</span>
                    <span class="text">景點總數 (個)</span>
                  </div>
                  <span class="line" style="background-color: #fff;"></span>
                  <div class="mathBox">
                    <span class="num">2.5</span>
                    <span class="text">總時程 (時)</span>
                  </div>
                </div>
              </a>
            </figure>

            <div class="textBox">
              <h2 class="title">TOUR FOR <strong>KIDS AND FAMILIES</strong></h2>
              <h3 class="subTitle">親子同樂路線</h3>
              <p class="text">一起來體驗當代為親子量身打造的驚艷景點，充滿創意又有趣的內容，來一場適合全家老小一起探險玩樂的探險吧！</p>
            </div>
          </section>

          <section class="wall grid-item">
            <figure class="imgFrame">
              <a class="cgNot ajax_open" href="../visit/ajaxVisitDetail.php" data-page="../visit/ajaxVisitDetail.php" data-id="ajaxVisitDetail" title="">
                <img class="img" src="../../upload/fa2/visit/wall3.jpg" alt="" title="">

                <div class="hoverArea" style="color: #fff;">
                  <div class="bg" style="background-color: #da2c2c;"></div>
                  <div class="mathBox">
                    <span class="num">5</span>
                    <span class="text">景點總數 (個)</span>
                  </div>
                  <span class="line" style="background-color: #fff;"></span>
                  <div class="mathBox">
                    <span class="num">2.5</span>
                    <span class="text">總時程 (時)</span>
                  </div>
                </div>
              </a>
            </figure>

            <div class="textBox">
              <h2 class="title">TOUR FOR <strong>KIDS AND FAMILIES</strong></h2>
              <h3 class="subTitle">親子同樂路線</h3>
              <p class="text">一起來體驗當代為親子量身打造的驚艷景點，充滿創意又有趣的內容，來一場適合全家老小一起探險玩樂的探險吧！</p>
            </div>
          </section>

          <section class="wall grid-item">
            <figure class="imgFrame">
              <a class="cgNot ajax_open" href="../visit/ajaxVisitDetail.php" data-page="../visit/ajaxVisitDetail.php" data-id="ajaxVisitDetail" title="">
                <img class="img" src="../../upload/fa2/visit/wall1.jpg" alt="" title="">

                <div class="hoverArea" style="color: #fff;">
                  <div class="bg" style="background-color: #da2c2c;"></div>
                  <div class="mathBox">
                    <span class="num">5</span>
                    <span class="text">景點總數 (個)</span>
                  </div>
                  <span class="line" style="background-color: #fff;"></span>
                  <div class="mathBox">
                    <span class="num">2.5</span>
                    <span class="text">總時程 (時)</span>
                  </div>
                </div>
              </a>
            </figure>

            <div class="textBox">
              <h2 class="title">TOUR FOR <strong>KIDS AND FAMILIES</strong></h2>
              <h3 class="subTitle">親子同樂路線</h3>
              <p class="text">一起來體驗當代為親子量身打造的驚艷景點，充滿創意又有趣的內容，來一場適合全家老小一起探險玩樂的探險吧！</p>
            </div>
          </section>
        </div>
      </article>
    </main>

    <?php include('../layout/footer.php');?>

  </div>

</body>

<?php include('../layout/jsLayout.php');?> 
</html>