<!DOCTYPE html>
<html lang="en">


<head>
  <?php include('../layout/head.php');?>
</head>


<body class="shopList shop" id="shop">

  <?php include('../layout/cg.php');?>

  <div class="cgAnimate">

    <?php include('../layout/header.php');?>

    <main>

      <!--設計師說這個mocaSBanner 商店不用出現-->


      <!--mocaSNav-->
      <article class="mocaSNav">

        <section class="secBox">

          <div class="titleArea">
              <p class="title">MOCART SHOP 藝術商店</p>
          </div>

          <div class="scrollFrame">
            <nav class="navBar">
              <a class="link cg cgB now" href="" title="">
                <p class="text">蜷川實花聯名商品</p>
              </a>
              <a class="link cg cgB" href="" title="">
                <p class="text">刊物年報</p>
              </a>
              <a class="link cg cgB" href="" title="">
                <p class="text">專屬摩卡</p>
              </a>
              <a class="link cg cgB" href="" title="">
                <p class="text">設計生活小物</p>
              </a>
              <a class="link cg cgB" href="" title="">
                <p class="text">藝術家商品</p>
              </a>
              <a class="link cg cgB" href="" title="">
                <p class="text">當代出品</p>
              </a>
            </nav>
          </div>

        </section>

      </article>


      <!--listText的背景跟文字顏色可以改-->
      <!--1920x650-->
      <!--414x736-->
      <article class="shopBannerSlick">
        <div class="list xsBGshow" style="background-image: url()" data-small="../../upload/fa2/shop/sbanner02.jpg" data-large="../../upload/fa2/shop/shopBanner02.jpg">
          <div class="listText" style="background-color: #cf105d; color: #fff;">
            <div class="titleBox shopTitleBox">
              <h3 class="title">2018 HIGHTLIGHT</h3>
              <h4 class="subTitle">蜷川實花展覽專刊</h4>
            </div>
            <p class="text">極富色彩與視覺魅力的畫面，讓觀看人的心思一瞬間就被擄獲並產生共鳴，絕對值得收藏的魅力特輯。</p>
          </div>
        </div>
        <div class="list xsBGshow" style="background-image: url()" data-small="../../upload/fa2/shop/sbanner01.jpg" data-large="../../upload/fa2/shop/shopBanner01.jpg">
          <div class="listText" style="background-color: #444444; color: #fff;">
            <div class="titleBox shopTitleBox">
              <h3 class="title">SPECIAL FEATURED</h3>
              <h4 class="subTitle">蜷川實花聯名商品</h4>
            </div>
            <p class="text">最新展覽周邊商品，不論是精美的明信片、，皆出自藝術家親手設計，找到自己喜愛的商品，打造生活樂趣！</p>
          </div>
        </div>
        <div class="list xsBGshow" style="background-image: url()" data-small="../../upload/fa2/shop/sbanner01.jpg" data-large="../../upload/fa2/shop/shopBanner01.jpg">
          <div class="listText" style="background-color: #ecbb65; color: #000;">
            <div class="titleBox shopTitleBox">
              <h3 class="title">SPECIAL FEATURED</h3>
              <h4 class="subTitle">蜷川實花聯名商品</h4>
            </div>
            <p class="text">最新展覽周邊商品，不論是精美的明信片、，皆出自藝術家親手設計，找到自己喜愛的商品，打造生活樂趣！</p>
          </div>
        </div>
      </article>


      <section class="mocaTitleSec">
        <h2 class="title"><span>Publication</span><strong>刊物年報</strong></h2>
      </section>


      <div class="clickScrollArea">
        <div class="box">
          <a class="link now" href="javascript:void(0)" title="">
            <p class="text">ALL 全部</p>
          </a>
          <a class="link" href="javascript:void(0)" title="">
            <p class="text">2018年度</p>
          </a>
          <a class="link" href="javascript:void(0)" title="">
            <p class="text">2010-2017年度</p>
          </a>
          <a class="link" href="javascript:void(0)" title="">
            <p class="text">2000-2009年度</p>
          </a>
          <a class="link" href="javascript:void(0)" title="">
            <p class="text">其他年度</p>
          </a>
        </div>
      </div>


      <!--加new 就會出現new小圈圈-->
      <!--圖片大小 200*165 以內-->
      <!-- mocaShop.blazy(); mocaWaypoint.shop(); -->
      <ul class="shopListFrame">
        <li class="list new">
          <a class="link cg cgB" href="../shop/shopDetail.php" title="">
            <figure class="imgFrame">
              <picture class="imgBox">
                <img class="b-lazy img" data-src="../../upload/fa2/shop/list01.jpg" src="../../assets/img/fakeImg/200x165.png" alt="" title="">
              </picture>

              <div class="noticeBox">
                <span class="text newTxt">NEW</span>
              </div>
            </figure>

            <div class="textFrame">
              <div class="textBox">
                <h4 class="title">胡說八道：胡金銓武藝新傳</h4>
                <h5 class="subTitle">King Hu: The Renaissance Man</h5>
              </div>
              <p class="price">
                <span class="currency">NT$</span>
                <span class="number">1350</span>
              </p>
            </div>
          </a>
        </li>

        <li class="list">
          <a class="link cg cgB" href="../shop/shopDetail.php" title="">
            <figure class="imgFrame">
              <picture class="imgBox">
                <img class="b-lazy img" data-src="../../upload/fa2/shop/list02.jpg" src="../../assets/img/fakeImg/200x165.png" alt="" title="">
              </picture>

              <div class="noticeBox">
                <span class="text newTxt">NEW</span>
              </div>
            </figure>

            <div class="textFrame">
              <div class="textBox">
                <h4 class="title">蘇孟鴻</h4>
                <h5 class="subTitle">Su Meng-hung</h5>
              </div>
              <p class="price">
                <span class="currency">NT$</span>
                <span class="number">300</span>
              </p>
            </div>
          </a>
        </li>

        <li class="list">
          <a class="link cg cgB" href="../shop/shopDetail.php" title="">
            <figure class="imgFrame">
              <picture class="imgBox">
                <img class="b-lazy img" data-src="../../upload/fa2/shop/list03.jpg" src="../../assets/img/fakeImg/200x165.png" alt="" title="">
              </picture>

              <div class="noticeBox">
                <span class="text newTxt">NEW</span>
              </div>
            </figure>

            <div class="textFrame">
              <div class="textBox">
                <h4 class="title">各搞各的：歧觀當代</h4>
                <h5 class="subTitle">Spectacle to each his own</h5>
              </div>
              <p class="price">
                <span class="currency">NT$</span>
                <span class="number">690</span>
              </p>
            </div>
          </a>
        </li>

        <li class="list">
          <a class="link cg cgB" href="../shop/shopDetail.php" title="">
            <figure class="imgFrame">
              <picture class="imgBox">
                <img class="b-lazy img" data-src="../../upload/fa2/shop/list04.jpg" src="../../assets/img/fakeImg/200x165.png" alt="" title="">
              </picture>

              <div class="noticeBox">
                <span class="text newTxt">NEW</span>
              </div>
            </figure>

            <div class="textFrame">
              <div class="textBox">
                <h4 class="title">科技禁區</h4>
                <h5 class="subTitle">Tech / No / Zone</h5>
              </div>
              <p class="price">
                <span class="currency">NT$</span>
                <span class="number">600</span>
              </p>
            </div>
          </a>
        </li>

        <li class="list">
          <a class="link cg cgB" href="../shop/shopDetail.php" title="">
            <figure class="imgFrame">
              <picture class="imgBox">
                <img class="b-lazy img" data-src="../../upload/fa2/shop/list05.jpg" src="../../assets/img/fakeImg/200x165.png" alt="" title="">
              </picture>

              <div class="noticeBox">
                <span class="text newTxt">NEW</span>
              </div>
            </figure>

            <div class="textFrame">
              <div class="textBox">
                <h4 class="title">輕且重的震撼</h4>
                <h5 class="subTitle">The Gravity Of The Immaterial</h5>
              </div>
              <p class="price">
                <span class="currency">NT$</span>
                <span class="number">700</span>
              </p>
            </div>
          </a>
        </li>

        <li class="list new">
          <a class="link cg cgB" href="../shop/shopDetail.php" title="">
            <figure class="imgFrame">
              <picture class="imgBox">
                <img class="b-lazy img" data-src="../../upload/fa2/shop/200x165.jpg" src="../../assets/img/fakeImg/200x165.png" alt="" title="">
              </picture>

              <div class="noticeBox">
                <span class="text newTxt">NEW</span>
              </div>
            </figure>

            <div class="textFrame">
              <div class="textBox">
                <h4 class="title">胡說八道：胡金銓武藝新傳</h4>
                <h5 class="subTitle">King Hu: The Renaissance Man</h5>
              </div>
              <p class="price">
                <span class="currency">NT$</span>
                <span class="number">1350</span>
              </p>
            </div>
          </a>
        </li>
      </ul>
    </main>

    <?php include('../layout/footer.php');?>

  </div>

</body>

<?php include('../layout/jsLayout.php');?> 
</html>