<!DOCTYPE html>
<!--html lang-->
<!--zh-Hant-TW 繁體中文-->
<!--en 英文-->
<html lang="zh-Hant-TW">


<head>
  <?php include('../layout/head.php');?> 
</head>


<body class="index contact" id="contact">

  <?php include('../layout/cg.php');?>

  <div class="cgAnimate">

    <?php include('../layout/header.php');?>

    <main>

      <!--設計師說這個mocaSBanner 客戶可以選擇要不要出現-->
      <!--banner尺寸 1920*500-->
      <article class="mocaSBanner">

        <div class="bg xsBGshow" style="" data-large="../../upload/fa2/contact/Banner.jpg" data-small="../../upload/fa2/contact/Banner.jpg"></div>

        <section class="titleSec" style="color: #fff;">
          <h4 class="title">CONTACT US</h4>
          <h5 class="subTitle">連絡我們</h5>
        </section>

      </article>


      <!--mocaSNav-->
      <article class="mocaSNav">

        <section class="secBox">

          <div class="titleArea">
            <p class="title">CONTACT US 連絡我們</p>
          </div>

          <div class="scrollFrame">
            <nav class="navBar">
              <a class="link anchor now" href="#pageBodyA" title="">
                <p class="text">連絡表單</p>
              </a>
              <a class="link anchor" href="#pageBodyB" title="">
                <p class="text">連絡資訊</p>
              </a>
            </nav>
          </div>

          <div class="searchArea" style="display:none">
            <span class="icon icon-magnifier"></span>
            <p class="text">SEARCH</p>
          </div>

        </section>

      </article>


      <article class="pageBodyA contactPageBody">
        <section class="mocaTitleSec">
          <h2 class="title"><span>HELLO MOCA !</span><strong>歡迎填寫聯繫當代</strong></h2>
        </section>

        <form id="form1" class="contactForm" action="">
          <div class="list">
            <label class="lableTitle" for=""><span>NAME</span><span>姓名</span></label>
            <input type="text" name="" id="" value="" placeholder="">
          </div>

          <div class="list">
            <label class="lableTitle" for=""><span>SALUTATION</span><span>稱謂</span></label>
            <div class="chrisSelect salutaSelect" data-placeholder="請選擇您的稱謂">
              <div class="dropShow">
                <div class="showBox">
                  <p class="character"></p>
                </div>
                <span class="icon icon-chriskeyboard_arrow_down"></span>
              </div>

              <ul class="dropList">
                <li class="list">
                  <p class="character">先生</p>
                </li>
                <li class="list">
                  <p class="character">小姐</p>
                </li>
              </ul>
            </div>
          </div>

          <div class="list">
            <label class="lableTitle" for=""><span>CONTACT</span><span>聯繫電話</span></label>
            <input type="tel" name="" id="" value="" placeholder="">
          </div>

          <div class="list">
            <label class="lableTitle" for=""><span>E-MAIL</span><span>聯繫信箱</span></label>
            <input type="email" name="" id="" value="" placeholder="">
          </div>

          <div class="list">
            <label class="lableTitle" for=""><span>SUBJECT</span><span>聯絡主旨</span></label>
            <div class="chrisSelect subjectSelect" data-placeholder="請選擇您的聯絡主旨">
              <div class="dropShow">
                <div class="showBox">
                  <p class="character"></p>
                </div>
                <span class="icon icon-chriskeyboard_arrow_down"></span>
              </div>

              <ul class="dropList">
                <li class="list">
                  <p class="character">請問開放時間</p>
                </li>
                <li class="list">
                  <p class="character">請問門票的價格</p>
                </li>
                <li class="list">
                  <p class="character">請問學校團體有沒有折扣</p>
                </li>
                <li class="list">
                  <p class="character">館內可以照相嗎</p>
                </li>
                <li class="list">
                  <p class="character">如何租借語音導覽器</p>
                </li>
              </ul>
            </div>
          </div>

          <div class="list content">
            <label class="lableTitle" for=""><span>CONTENT</span><span>訊息內容</span></label>
            <textarea placeholder="請輸入您的訊息內容" name="" id=""></textarea>
          </div>

          <div class="list verifi">
            <label class="lableTitle" for=""><span>VERIFICATION</span><span>請輸入驗證碼</span></label>
            <input type="input" placeholder="點擊驗證碼可以刷新內容" name="" id="" value="">
            <img class="code" src="../../assets/img/code.png" alt="" title="">
          </div>
        </form>

        <div class="mocaBtnBox btnStyle">
          <button class="btn styleB w50 resetFormBtn" type="reset" form="form1">RESET清除重填</button>
          <button class="btn styleA w50 send" type="button" form="form1">SUBMIT提交表單</button>
        </div>
      </article>

      <article class="pageBodyB contactPageBody">
        <div class="mixBox">
          <p class="info">想進一步瞭解台北當代藝術館展覽相關問題，或是對台北當代藝術館有任何寶貴意見，都歡迎您與我們聯繫，我們將與您連絡！</p>

          <a class="mail" href="mailto:services@mocataipei.org.tw">services@mocataipei.org.tw</a>

          <div class="phoneBox">
            <p class="text">
              <span class="en">TEL</span>
              <span class="number">+886 2-2552-3721</span>
            </p>
            <p class="text">
              <span class="en">FAX</span>
              <span class="number">+886 2-2559-3874</span>
            </p>
          </div>

          <nav class="community">
            <a class="link" href="javascript:void(0)" title="">
                <span class="text">facebook</span>
                <span class="icon icon-facebook"></span>
            </a>
            <a class="link" href="javascript:void(0)" title="">
                <span class="text">instagram</span>
                <span class="icon icon-instagram"></span>
            </a>
            <a class="link" href="javascript:void(0)" title="">
                <span class="text">youtube</span>
                <span class="icon icon-youtube"></span>
            </a>
            <a class="link" href="javascript:void(0)" title="">
                <span class="text">wechat</span>
                <span class="icon icon-wechat"></span>
            </a>
            <a class="link" href="javascript:void(0)" title="">
                <span class="text">weibo</span>
                <span class="icon icon-sina-weibo"></span>
            </a>
          </nav>
        </div>
      </article>
    </main>

    <?php include('../layout/footer.php');?>

  </div>

</body>

<?php include('../layout/jsLayout.php');?> 
</html>