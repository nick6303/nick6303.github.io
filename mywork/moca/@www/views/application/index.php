<!DOCTYPE html>
<!--html lang-->
<!--zh-Hant-TW 繁體中文-->
<!--en 英文-->
<html lang="zh-Hant-TW">


<head>
  <?php include('../layout/head.php');?> 
</head>


<body class="index application" id="application">

  <?php include('../layout/cg.php');?>

  <div class="cgAnimate">

    <?php include('../layout/header.php');?>

    <main>

      <!--設計師說這個mocaSBanner 客戶可以選擇要不要出現-->
      <!--banner尺寸 1920*500-->
      <article class="mocaSBanner">

        <div class="bg xsBGshow" style="" data-large="../../upload/fa2/application/Banner.jpg" data-small="../../upload/fa2/application/Banner.jpg"></div>

        <section class="titleSec" style="color: #fff;">
          <h4 class="title">APPLICATIONS</h4>
          <h5 class="subTitle">申請專區</h5>
        </section>

      </article>


      <!--mocaSNav-->
      <article class="mocaSNav">

        <section class="secBox">

          <div class="titleArea">
              <p class="title">APPLICATIONS 申請專區</p>
          </div>

          <div class="scrollFrame">
            <nav class="navBar">
              <a class="link cgNot ajax_cg now" href="../application/index.php" data-path="../application/exhibition.php" data-page="exhibition" title="">
                <p class="text">展覽申請</p>
              </a>
              <a class="link cgNot ajax_cg" href="../application/parctice.php" data-path="../application/parctice.php" data-page="parctice" title="">
                <p class="text">實習申請</p>
              </a>
              <a class="link cgNot ajax_cg" href="../application/court.php" data-path="../application/court.php" data-page="court" title="">
                <p class="text">場地租借</p>
              </a>
              <a class="link cgNot ajax_cg" href="../application/resident.php" data-path="../application/resident.php" data-page="resident" title="">
                <p class="text">駐校代表</p>
              </a>
              <a class="link cgNot ajax_cg" href="../application/volunteer.php" data-path="../application/volunteer.php" data-page="volunteer" title="">
                <p class="text">義工申請</p>
              </a>
              <a class="link cgNot ajax_cg" href="../application/artHouse.php" data-path="../application/artHouse.php" data-page="artHouse" title="">
                <p class="text">藝術宅急便</p>
              </a>
            </nav>
          </div>

          <div class="searchArea" style="display:none">
              <span class="icon icon-magnifier"></span>
              <p class="text">SEARCH</p>
          </div>

        </section>

      </article>


      <article class="mocaPageBody" data-page="exhibition">
        <section class="mocaTitleSec">
          <h2 class="title"><span>Exhibition Application</span><strong>展覽申請</strong></h2>
          <h3 class="subTitle">提升創作發表及藝術教育的連結效益</h3>
        </section>

        <div class="clickScrollArea">
          <div class="box">
            <a class="link anchor now" href="#appSec1" title="">
              <p class="text">展覽申請說明</p>
            </a>
            <a class="link anchor" href="#appSec2" title="">
              <p class="text">展覽場地圖片</p>
            </a>
            <a class="link anchor" href="#appSec3" title="">
              <p class="text">展覽申請文件下載</p>
            </a>
          </div>
        </div>

        <div class="appSec1 secCommon">
          <div class="appIcon">
            <img class="img" src="../../assets/img/application/appLight.png" alt="" title="">
          </div>

          <h5 class="appTitle">展覽申請說明</h5>

          <!--這裡有2種情形 只有1筆訊息 跟 1筆以上的訊息 這兩種情形-->
          <!--如果是1筆以上的情形 就在appTextInfo後面加一個 multiple 的 class-->
          <section class="appTextInfo">
            <div class="list">
              <div class="extendBox">
                <p class="infoText">台北當代藝術館提供兩個區域作為開放租借空間，分別為一樓活動大廳與戶外東側廣場，依據不同的使用時段收取相對應的費用，若需要提出申請，請於活動日前一個月提出，並下載場地租借簡章，填妥相關表單並確認資料完整無誤，將書面資料以掛號郵遞給我們，本館將進行審核作業，確認檔期與活動內容無誤後，將以電子信函通知申請單位。</p>

                <div class="memo">
                  <span class="line"></span>
                  <p class="text">或是您有任何疑問，歡迎洽詢本館承辦人員陳小姐，聯繫資訊如下。</p>
                  <p class="text">電子信箱 ：<span class="mac">mocarent@mocataipei.org.tw</span></p>
                  <p class="text">聯絡電話 ：<span class="mac">02 - 2552-3721 ( 分機212 )</span></p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div class="appSec2 secCommon">
          <div class="appIcon">
            <img class="img" src="../../assets/img/application/appPhoto.png" alt="" title="">
          </div>

          <h5 class="appTitle">展覽場地圖片</h5>

          <section class="appImgFrame">
            <p class="title">整體場域平面圖FLOOR PLAN</p>

            <!--815*385-->
            <div class="full">
              <figure class="imgFrame">
                <img class="img" src="../../upload/fa2/application/full.jpg" alt="" title="">
              </figure>
              <span class="bg"></span>
            </div>

            <p class="title">空間照片SPACE PHOTOS</p>

            <!--255*225-->
            <ul class="wall">
              <li class="list">
                <figure class="imgFrame">
                  <img class="img" src="../../upload/fa2/application/wall1.jpg" alt="" title="">

                  <div class="hoverBox">
                    <p class="text">VIEW</p>
                  </div>
                </figure>

                <p class="albumName">R102展間</p>
              </li>

              <li class="list">
                <figure class="imgFrame">
                  <img class="img" src="../../upload/fa2/application/wall2.jpg" alt="" title="">

                  <div class="hoverBox">
                    <p class="text">VIEW</p>
                  </div>
                </figure>

                <p class="albumName">R103展間</p>
              </li>

              <li class="list">
                <figure class="imgFrame">
                  <img class="img" src="../../upload/fa2/application/wall3.jpg" alt="" title="">

                  <div class="hoverBox">
                    <p class="text">VIEW</p>
                  </div>
                </figure>

                <p class="albumName">東側走廊</p>
              </li>
              <li class="list">
                <figure class="imgFrame">
                  <img class="img" src="../../upload/fa2/application/wall1.jpg" alt="" title="">

                  <div class="hoverBox">
                    <p class="text">VIEW</p>
                  </div>
                </figure>

                <p class="albumName">東側走廊</p>
              </li>
              <li class="list">
                <figure class="imgFrame">
                  <img class="img" src="../../upload/fa2/application/wall1.jpg" alt="" title="">

                  <div class="hoverBox">
                    <p class="text">VIEW</p>
                  </div>
                </figure>

                <p class="albumName">東側走廊</p>
              </li>
            </ul>
          </section>
        </div>

        <div class="appSec3 secCommon">
          <div class="appIcon">
            <img class="img" src="../../assets/img/application/appDownload.png" alt="" title="">
          </div>

          <h5 class="appTitle">展覽申請文件下載</h5>

          <ul class="appDownload">
            <li class="list">
              <a class="link" href="../../assets/img/dome.pdf" title="" download>
                <p class="text">Rule Of Exhibition Application 展覽申請簡章</p>
                <span class="icon" style="background-image: url(../../assets/img/downloadIcon.png)"></span>
              </a>
            </li>
            <li class="list">
              <a class="link" href="../../assets/img/dome.pdf" title="" download>
                <p class="text">Note Of Exhibition Application 展覽申請注意事項</p>
                <span class="icon" style="background-image: url(../../assets/img/downloadIcon.png)"></span>
              </a>
            </li>
          </ul>
        </div>

        <!--appSec2的燈箱-->
        <div class="appSec2Lbox">
          <div class="bg closeBtn"></div>
          <div class="for_scroll">
            <section class="content">
              <div class="closeBtn">
                <p class="text">CLOSE</p>
                <span class="a-btnClose__x"></span>
              </div>

              <!--860*500-->
              <div class="frameBox slickBox">
                <figure class="imgFrame">
                  <img class="img" src="../../upload/fa2/application/dd01.jpg" alt="" title="">

                  <figcaption class="note" style="color: #000">1這邊可以放照片的相關敘述，建議簡短即可。1這邊可以放照片的相關敘述，建議簡短即可。1這邊可以放照片的相關敘述，建議簡短即可。1這邊可以放照片的相關敘述，建議簡短即可。1這邊可以放照片的相關敘述，建議簡短即可。</figcaption>
                </figure>
                <figure class="imgFrame">
                  <img class="img" src="../../upload/fa2/application/dd02.jpg" alt="" title="">

                  <figcaption class="note" style="color: #000">2這邊可以放照片的相關敘述，建議簡短即可。</figcaption>
                </figure>
                <figure class="imgFrame">
                  <img class="img" src="../../upload/fa2/application/dd03.jpg" alt="" title="">

                  <figcaption class="note" style="color: #000">3這邊可以放照片的相關敘述，建議簡短即可。</figcaption>
                </figure>
                <figure class="imgFrame">
                  <img class="img" src="../../upload/fa2/application/dd04.jpg" alt="" title="">

                  <figcaption class="note" style="color: #000">4這邊可以放照片的相關敘述，建議簡短即可。</figcaption>
                </figure>
                <figure class="imgFrame">
                  <img class="img" src="../../upload/fa2/application/dd05.jpg" alt="" title="">

                  <figcaption class="note" style="color: #000">5這邊可以放照片的相關敘述，建議簡短即可。</figcaption>
                </figure>
              </div>
              <ul class="paginator">
                <li class="prev btn a-btn-prev">
                  <p class="text">previous</p>
                  <span class="icon"></span>
                </li>
                <li class="next btn a-btn-next">
                  <span class="icon"></span>
                  <p class="text">next</p>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </article>
    </main>

    <?php include('../layout/footer.php');?>

  </div>

</body>

<?php include('../layout/jsLayout.php');?> 
</html>