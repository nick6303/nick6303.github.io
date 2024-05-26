<!DOCTYPE html>
<!--html lang-->
<!--zh-Hant-TW 繁體中文-->
<!--en 英文-->
<html lang="zh-Hant-TW">


<head>
  <?php include('../layout/head.php');?> 
</head>


<body class="index exhibition" id="exhibition">

  <?php include('../layout/cg.php');?>

  <div class="cgAnimate">

    <?php include('../layout/header.php');?>

    <main>

      <!--設計師說這個mocaSBanner 客戶可以選擇要不要出現-->
      <!--banner尺寸 1920*500-->
      <article class="mocaSBanner" style="display:none">

        <div class="bg" style="background-image: url(../../upload/fa2/application/Banner.jpg)"></div>

        <!-- <section class="titleSec">
          <h4 class="title">PLAN YOUR VISIT</h4>
          <h5 class="subTitle">參觀資訊</h5>
        </section> -->

      </article>


      <!--mocaSNav-->
      <article class="mocaSNav">

        <section class="secBox">

          <div class="titleArea">
            <p class="title">EXHIBITIONS & EVENTS 展覽活動</p>
          </div>

          <div class="scrollFrame">
            <nav class="navBar">
              <a class="link cgNot ajax_cg now" href="../exhibition/index.php" data-path="../exhibition/exhibition.php" data-page="exhibition" title="">
                <p class="text">WHAT'S NEW</p>
              </a>
              <a class="link cgNot ajax_cg" href="../exhibition/exhibitionList.php" data-path="../exhibition/exhibitionList.php" data-page="exhibitionList" title="">
                <p class="text">當代展覽</p>
              </a>
              <a class="link cgNot ajax_cg" href="../exhibition/eventList.php" data-path="../exhibition/eventList.php" data-page="eventList" title="">
                <p class="text">當代活動</p>
              </a>
            </nav>
          </div>

          <div class="searchArea" style="display:none">
              <span class="icon icon-magnifier"></span>
              <p class="text">SEARCH</p>
          </div>

        </section>

        <!--searchBar 在 search後 才出現-->
        <!-- <section class="secBox forSearch">
          <div class="titleArea">
            <p class="title">SEARCH RESULT 搜尋結果</p>
          </div>

          <div class="searchBtn">
            <div class="box">
              <p class="text">進行重新搜尋</p>
              <span class="icon icon-magnifier"></span>
            </div>
          </div>
        </section> -->

      </article>


      <article class="mocaPageBody exListPageBody" data-page="exhibition">
        <div class="secMac">
          <section class="mocaTitleSec">
            <h2 class="title">RECOMMEND FOR YOU</h2>
            <h3 class="subTitle">媒體科技與當代藝術的完美融合</h3>
          </section>

          <!--wfull 1500x740-->
          <!--w450 450x240-->
          <!--wHalf h2 710x925-->
          <!--wHalf h1 710x380-->
          <!--wHalf h1 center 445*270-->
          <div class="listFrameBox2">
            <div class="list wFull showFull">
              <div class="imgKing">
                <a class="link cgB cg" href="../../views/exhibition/eventDetail.php" title="">
                  <figure class="imgFrame">
                    <img class="b-lazy img" data-src="../../upload/fa2/exhibition/pizza01.jpg" src="../../assets/img/fakeImg/1480x730.png" alt="" title="">
                  </figure>

                  <div class="fullBox">
                    <div class="box">
                      <span class="en">FULL</span>
                      <span class="cn">已額滿</span>
                    </div>
                  </div>
                </a>
                <a class="link online cgB cg" href="../../views/exhibition/eventDetail.php" title="">
                  <p class="text">BOOK 線上報名</p>
                </a>
              </div>

              <a class="showBox cgB cg" href="../../views/exhibition/exhibitionDetail.php" title="">
                <div class="whenBoxB">
                  <div class="when">
                    <span class="year">2018</span>
                    <p class="day">11 / 03 <span class="en">Sat.</span></p>
                  </div>
                  <span class="line"></span>
                  <div class="when">
                    <span class="year">2018</span>
                    <p class="day">11 / 03 <span class="en">Sat.</span></p>
                  </div>
                </div>
                <div class="textBox">
                  <h4 class="pTitle">失重樂園－河口洋一郎的衍化論</h4>
                  <h5 class="pSubTitle">Zero-Gravity Paradise : Kawaguchi Yoichiro's Algorithmic Evolution</h5>
                </div>
              </a>
            </div>

            <div class="list w450 showFull">
              <div class="imgKing">
                <a class="link cgB cg" href="../../views/exhibition/eventDetail.php" title="">
                  <figure class="imgFrame">
                    <img class="b-lazy img" data-src="../../upload/fa2/exhibition/kk01.jpg" src="../../assets/img/fakeImg/450x240.png" alt="" title="">
                  </figure>

                  <div class="fullBox">
                    <div class="box">
                      <span class="en">FULL</span>
                      <span class="cn">已額滿</span>
                    </div>
                  </div>
                </a>
                <a class="link online cgB cg" href="../../views/exhibition/eventDetail.php" title="">
                  <p class="text">BOOK 線上報名</p>
                </a>
              </div>

              <a class="textFrame" href="../../views/exhibition/eventDetail.php" title="">
                <div class="titleBox">
                  <h3 class="imgTitle">《寫給宇宙的明信片》童書繪本</h3>
                  <h4 class="imgSubTitle">Pala Fun - moca x  Community Arts festival</h4>
                </div>

                <div class="whenBox">
                  <div class="dateBox">
                    <div class="date">
                      <span class="day">2018 / 11 / 03</span>
                      <span class="en">Sat.</span>
                    </div>
                  </div>

                  <div class="timeBox">
                    <p class="text">14:00 - 18:00</p>
                  </div>
                </div>
              </a>
            </div>

            <div class="list w450">
              <div class="imgKing">
                <a class="link cgB cg" href="../../views/exhibition/eventDetail.php" title="">
                  <figure class="imgFrame">
                    <img class="b-lazy img" data-src="../../upload/fa2/exhibition/kk02.jpg" src="../../assets/img/fakeImg/450x240.png" alt="" title="">
                  </figure>
                </a>
                <a class="link online cgB cg" href="../../views/exhibition/eventDetail.php" title="">
                  <p class="text">BOOK 線上報名</p>
                </a>
              </div>

              <a class="textFrame" href="../../views/exhibition/eventDetail.php" title="">
                <div class="titleBox">
                  <h3 class="imgTitle">《寫給宇宙的明信片》童書繪本</h3>
                  <h4 class="imgSubTitle">Pala Fun - moca x  Community Arts festival</h4>
                </div>

                <div class="whenBox">
                  <div class="dateBox">
                    <div class="date">
                      <span class="day">2018 / 11 / 03</span>
                      <span class="en">Sat.</span>
                      <span class="line">-</span>
                      <span class="day">11 / 03</span>
                      <span class="en">Sat.</span>
                    </div>
                  </div>

                  <div class="timeBox">
                    <p class="text">14:00 - 18:00</p>
                  </div>
                </div>
              </a>
            </div>

            <div class="list w450 showOnline">
              <div class="imgKing">
                <a class="link cgB cg" href="../../views/exhibition/eventDetail.php" title="">
                  <figure class="imgFrame">
                    <img class="b-lazy img" data-src="../../upload/fa2/exhibition/kk03.jpg" src="../../assets/img/fakeImg/450x240.png" alt="" title="">
                  </figure>
                </a>
                <a class="link online cgB cg" href="../../views/exhibition/eventDetail.php" title="">
                  <p class="text">BOOK 線上報名</p>
                </a>
              </div>

              <a class="textFrame" href="../../views/exhibition/eventDetail.php" title="">
                <div class="titleBox">
                  <h3 class="imgTitle">《寫給宇宙的明信片》童書繪本</h3>
                  <h4 class="imgSubTitle">Pala Fun - moca x  Community Arts festival</h4>
                </div>

                <div class="whenBox">
                  <div class="dateBox">
                    <div class="date">
                      <span class="day">2018 / 11 / 03</span>
                      <span class="en">Sat.</span>
                      <span class="line">-</span>
                      <span class="day">2018 / 11 / 03</span>
                      <span class="en">Sat.</span>
                    </div>
                  </div>

                  <div class="timeBox">
                    <p class="text">14:00 - 18:00</p>
                  </div>
                </div>
              </a>
            </div>

            <div class="list wHalf h2 showFull">
              <div class="box">
                <div class="imgKing">
                  <a class="link cgB cg" href="../../views/exhibition/eventDetail.php" title="">
                    <figure class="imgFrame">
                      <img class="b-lazy img" data-src="../../upload/fa2/exhibition/bj01.jpg" src="../../assets/img/fakeImg/710x925.png" alt="" title="">
                    </figure>

                    <div class="fullBox">
                      <div class="box">
                        <span class="en">FULL</span>
                        <span class="cn">已額滿</span>
                      </div>
                    </div>
                  </a>
                  <a class="link online cgB cg" href="../../views/exhibition/eventDetail.php" title="">
                    <p class="text">BOOK 線上報名</p>
                  </a>
                </div>

                <a class="showBox cgB cg" href="../../views/exhibition/exhibitionDetail.php" title="">
                  <div class="whenBoxB">
                    <div class="when">
                      <span class="year">2018</span>
                      <p class="day">11 / 03 <span class="en">Sat.</span></p>
                    </div>
                    <span class="line"></span>
                    <div class="when">
                      <span class="year">2018</span>
                      <p class="day">11 / 03 <span class="en">Sat.</span></p>
                    </div>
                  </div>
                  <div class="textBox">
                    <h4 class="pTitle">失重樂園－河口洋一郎的衍化論</h4>
                    <h5 class="pSubTitle">Zero-Gravity Paradise : Kawaguchi Yoichiro's Algorithmic Evolution</h5>
                  </div>
                </a>
              </div>
            </div>

            <div class="list wHalf h1">
              <div class="box">
                <div class="imgKing">
                  <a class="link cgB cg" href="../../views/exhibition/eventDetail.php" title="">
                    <figure class="imgFrame">
                      <img class="b-lazy img" data-src="../../upload/fa2/exhibition/bj02.jpg" src="../../assets/img/fakeImg/710x380.png" alt="" title="">
                    </figure>

                    <div class="fullBox">
                      <div class="box">
                        <span class="en">FULL</span>
                        <span class="cn">已額滿</span>
                      </div>
                    </div>
                  </a>
                  <a class="link online cgB cg" href="../../views/exhibition/eventDetail.php" title="">
                    <p class="text">BOOK 線上報名</p>
                  </a>
                </div>

                <a class="showBox cgB cg" href="../../views/exhibition/exhibitionDetail.php" title="">
                  <div class="whenBoxB">
                    <div class="when">
                      <span class="year">2018</span>
                      <p class="day">11 / 03 <span class="en">Sat.</span></p>
                    </div>
                    <span class="line"></span>
                    <div class="when">
                      <span class="year">2018</span>
                      <p class="day">11 / 03 <span class="en">Sat.</span></p>
                    </div>
                  </div>
                  <div class="textBox">
                    <h4 class="pTitle">失重樂園－河口洋一郎的衍化論</h4>
                    <h5 class="pSubTitle">Zero-Gravity Paradise : Kawaguchi Yoichiro's Algorithmic Evolution</h5>
                  </div>
                </a>
              </div>
            </div>

            <div class="list wHalf h1 showOnline">
              <div class="box">
                <div class="imgKing">
                  <a class="link cgB cg" href="../../views/exhibition/eventDetail.php" title="">
                    <figure class="imgFrame">
                      <img class="b-lazy img" data-src="../../upload/fa2/exhibition/bj03.jpg" src="../../assets/img/fakeImg/710x380.png" alt="" title="">
                    </figure>

                    <div class="fullBox">
                      <div class="box">
                        <span class="en">FULL</span>
                        <span class="cn">已額滿</span>
                      </div>
                    </div>
                  </a>
                  <a class="link online cgB cg" href="../../views/exhibition/eventDetail.php" title="">
                    <p class="text">BOOK 線上報名</p>
                  </a>
                </div>

                <a class="showBox cgB cg" href="../../views/exhibition/exhibitionDetail.php" title="">
                  <div class="whenBoxB">
                    <div class="when">
                      <span class="year">2018</span>
                      <p class="day">11 / 03 <span class="en">Sat.</span></p>
                    </div>
                    <span class="line"></span>
                    <div class="when">
                      <span class="year">2018</span>
                      <p class="day">11 / 03 <span class="en">Sat.</span></p>
                    </div>
                  </div>
                  <div class="textBox">
                    <h4 class="pTitle">失重樂園－河口洋一郎的衍化論</h4>
                    <h5 class="pSubTitle">Zero-Gravity Paradise : Kawaguchi Yoichiro's Algorithmic Evolution</h5>
                  </div>
                </a>
              </div>
            </div>

            <div class="list wHalf h1 showFull">
              <div class="imgKing">
                <a class="link cgB cg" href="../../views/exhibition/eventDetail.php" title="">
                  <figure class="imgFrame">
                    <img class="b-lazy img" data-src="../../upload/fa2/exhibition/ok01.jpg" src="../../assets/img/fakeImg/710x380.png" alt="" title="">
                  </figure>

                  <div class="fullBox">
                    <div class="box">
                      <span class="en">FULL</span>
                      <span class="cn">已額滿</span>
                    </div>
                  </div>
                </a>
                <a class="link online cgB cg" href="../../views/exhibition/eventDetail.php" title="">
                  <p class="text">BOOK 線上報名</p>
                </a>
              </div>

              <a class="showBox cgB cg" href="../../views/exhibition/exhibitionDetail.php" title="">
                <div class="whenBoxB">
                  <div class="when">
                    <span class="year">2018</span>
                    <p class="day">11 / 03 <span class="en">Sat.</span></p>
                  </div>
                  <span class="line"></span>
                  <div class="when">
                    <span class="year">2018</span>
                    <p class="day">11 / 03 <span class="en">Sat.</span></p>
                  </div>
                </div>
                <div class="textBox">
                  <h4 class="pTitle">失重樂園－河口洋一郎的衍化論</h4>
                  <h5 class="pSubTitle">Zero-Gravity Paradise : Kawaguchi Yoichiro's Algorithmic Evolution</h5>
                </div>
              </a>
            </div>

            <div class="list wHalf h1 center showOnline">
              <div class="boxH3">
                <div class="imgKing">
                  <a class="link cgB cg" href="../../views/exhibition/eventDetail.php" title="">
                    <figure class="imgFrame">
                      <img class="b-lazy img" data-src="../../upload/fa2/exhibition/ok02.jpg" src="../../assets/img/fakeImg/445x270.png" alt="" title="">
                    </figure>

                    <div class="fullBox">
                      <div class="box">
                        <span class="en">FULL</span>
                        <span class="cn">已額滿</span>
                      </div>
                    </div>
                  </a>
                  <a class="link online cgB cg" href="../../views/exhibition/eventDetail.php" title="">
                    <p class="text">BOOK 線上報名</p>
                  </a>
                </div>

                <a class="textFrame" href="../../views/exhibition/exhibitionDetail.php" title="">
                  <div class="titleBox">
                    <h3 class="imgTitle">《寫給宇宙的明信片》童書繪本</h3>
                    <h4 class="imgSubTitle">Pala Fun - moca x  Community Arts festival</h4>
                  </div>

                  <div class="whenBox">
                    <div class="dateBox">
                      <div class="date">
                        <span class="day">2018 / 11 / 03</span>
                        <span class="en">Sat.</span>
                      </div>
                    </div>

                    <div class="timeBox">
                      <p class="text">14:00 - 18:00</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div class="list wHalf h1 center">
              <div class="boxH3">
                <div class="imgKing">
                  <a class="link cgB cg" href="../../views/exhibition/eventDetail.php" title="">
                    <figure class="imgFrame">
                      <img class="b-lazy img" data-src="../../upload/fa2/exhibition/ok02.jpg" src="../../assets/img/fakeImg/445x270.png" alt="" title="">
                    </figure>

                    <div class="fullBox">
                      <div class="box">
                        <span class="en">FULL</span>
                        <span class="cn">已額滿</span>
                      </div>
                    </div>
                  </a>
                  <a class="link online cgB cg" href="../../views/exhibition/eventDetail.php" title="">
                    <p class="text">BOOK 線上報名</p>
                  </a>
                </div>

                <a class="textFrame" href="../../views/exhibition/exhibitionDetail.php" title="">
                  <div class="titleBox">
                    <h3 class="imgTitle">《寫給宇宙的明信片》童書繪本</h3>
                    <h4 class="imgSubTitle">Pala Fun - moca x  Community Arts festival</h4>
                  </div>

                  <div class="whenBox">
                    <div class="dateBox">
                      <div class="date">
                        <span class="day">2018 / 11 / 03</span>
                        <span class="en">Sat.</span>
                      </div>
                    </div>

                    <div class="timeBox">
                      <p class="text">14:00 - 18:00</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div class="list wHalf h1">
              <div class="imgKing">
                <a class="link cgB cg" href="../../views/exhibition/eventDetail.php" title="">
                  <figure class="imgFrame">
                    <img class="b-lazy img" data-src="../../upload/fa2/exhibition/ok01.jpg" src="../../assets/img/fakeImg/710x380.png" alt="" title="">
                  </figure>

                  <div class="fullBox">
                    <div class="box">
                      <span class="en">FULL</span>
                      <span class="cn">已額滿</span>
                    </div>
                  </div>
                </a>
                <a class="link online cgB cg" href="../../views/exhibition/eventDetail.php" title="">
                  <p class="text">BOOK 線上報名</p>
                </a>
              </div>

              <a class="showBox cgB cg" href="../../views/exhibition/exhibitionDetail.php" title="">
                <div class="whenBoxB">
                  <div class="when">
                    <span class="year">2018</span>
                    <p class="day">11 / 03 <span class="en">Sat.</span></p>
                  </div>
                  <span class="line"></span>
                  <div class="when">
                    <span class="year">2018</span>
                    <p class="day">11 / 03 <span class="en">Sat.</span></p>
                  </div>
                </div>
                <div class="textBox">
                  <h4 class="pTitle">失重樂園－河口洋一郎的衍化論</h4>
                  <h5 class="pSubTitle">Zero-Gravity Paradise : Kawaguchi Yoichiro's Algorithmic Evolution</h5>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="secMac">
          <section class="mocaTitleSec">
            <h2 class="title">there are ONGOING</h2>
            <h3 class="subTitle">我們還有這些值得您一探究竟</h3>
          </section>

          <div class="listFrameBox2">
            <div class="list wHalf h2 showFull">
              <div class="box">
                <div class="imgKing">
                  <a class="link cgB cg" href="../../views/exhibition/eventDetail.php" title="">
                    <figure class="imgFrame">
                      <img class="b-lazy img" data-src="../../upload/fa2/exhibition/bj01.jpg" src="../../assets/img/fakeImg/710x925.png" alt="" title="">
                    </figure>

                    <div class="fullBox">
                      <div class="box">
                        <span class="en">FULL</span>
                        <span class="cn">已額滿</span>
                      </div>
                    </div>
                  </a>
                  <a class="link online cgB cg" href="../../views/exhibition/eventDetail.php" title="">
                    <p class="text">BOOK 線上報名</p>
                  </a>
                </div>

                <a class="showBox cgB cg" href="../../views/exhibition/exhibitionDetail.php" title="">
                  <div class="whenBoxB">
                    <div class="when">
                      <span class="year">2018</span>
                      <p class="day">11 / 03 <span class="en">Sat.</span></p>
                    </div>
                    <span class="line"></span>
                    <div class="when">
                      <span class="year">2018</span>
                      <p class="day">11 / 03 <span class="en">Sat.</span></p>
                    </div>
                  </div>
                  <div class="textBox">
                    <h4 class="pTitle">失重樂園－河口洋一郎的衍化論</h4>
                    <h5 class="pSubTitle">Zero-Gravity Paradise : Kawaguchi Yoichiro's Algorithmic Evolution</h5>
                  </div>
                </a>
              </div>
            </div>

            <div class="list wHalf h1">
              <div class="box">
                <div class="imgKing">
                  <a class="link cgB cg" href="../../views/exhibition/eventDetail.php" title="">
                    <figure class="imgFrame">
                      <img class="b-lazy img" data-src="../../upload/fa2/exhibition/bj02.jpg" src="../../assets/img/fakeImg/710x380.png" alt="" title="">
                    </figure>

                    <div class="fullBox">
                      <div class="box">
                        <span class="en">FULL</span>
                        <span class="cn">已額滿</span>
                      </div>
                    </div>
                  </a>
                  <a class="link online cgB cg" href="../../views/exhibition/eventDetail.php" title="">
                    <p class="text">BOOK 線上報名</p>
                  </a>
                </div>

                <a class="showBox cgB cg" href="../../views/exhibition/exhibitionDetail.php" title="">
                  <div class="whenBoxB">
                    <div class="when">
                      <span class="year">2018</span>
                      <p class="day">11 / 03 <span class="en">Sat.</span></p>
                    </div>
                    <span class="line"></span>
                    <div class="when">
                      <span class="year">2018</span>
                      <p class="day">11 / 03 <span class="en">Sat.</span></p>
                    </div>
                  </div>
                  <div class="textBox">
                    <h4 class="pTitle">失重樂園－河口洋一郎的衍化論</h4>
                    <h5 class="pSubTitle">Zero-Gravity Paradise : Kawaguchi Yoichiro's Algorithmic Evolution</h5>
                  </div>
                </a>
              </div>
            </div>

            <div class="list wHalf h1 showOnline">
              <div class="box">
                <div class="imgKing">
                  <a class="link cgB cg" href="../../views/exhibition/eventDetail.php" title="">
                    <figure class="imgFrame">
                      <img class="b-lazy img" data-src="../../upload/fa2/exhibition/bj03.jpg" src="../../assets/img/fakeImg/710x380.png" alt="" title="">
                    </figure>

                    <div class="fullBox">
                      <div class="box">
                        <span class="en">FULL</span>
                        <span class="cn">已額滿</span>
                      </div>
                    </div>
                  </a>
                  <a class="link online cgB cg" href="../../views/exhibition/eventDetail.php" title="">
                    <p class="text">BOOK 線上報名</p>
                  </a>
                </div>

                <a class="showBox cgB cg" href="../../views/exhibition/exhibitionDetail.php" title="">
                  <div class="whenBoxB">
                    <div class="when">
                      <span class="year">2018</span>
                      <p class="day">11 / 03 <span class="en">Sat.</span></p>
                    </div>
                    <span class="line"></span>
                    <div class="when">
                      <span class="year">2018</span>
                      <p class="day">11 / 03 <span class="en">Sat.</span></p>
                    </div>
                  </div>
                  <div class="textBox">
                    <h4 class="pTitle">失重樂園－河口洋一郎的衍化論</h4>
                    <h5 class="pSubTitle">Zero-Gravity Paradise : Kawaguchi Yoichiro's Algorithmic Evolution</h5>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="secMac">
          <section class="mocaTitleSec">
            <h2 class="title">This Month on view</h2>
            <h3 class="subTitle">11月精彩活動不間斷 歡迎大家一起參與藝術饗宴</h3>
          </section>

          <div class="listFrameBox2">
            <div class="list wHalf h1 showFull">
              <div class="imgKing">
                <a class="link cgB cg" href="../../views/exhibition/eventDetail.php" title="">
                  <figure class="imgFrame">
                    <img class="b-lazy img" data-src="../../upload/fa2/exhibition/ok01.jpg" src="../../assets/img/fakeImg/710x380.png" alt="" title="">
                  </figure>

                  <div class="fullBox">
                    <div class="box">
                      <span class="en">FULL</span>
                      <span class="cn">已額滿</span>
                    </div>
                  </div>
                </a>
                <a class="link online cgB cg" href="../../views/exhibition/eventDetail.php" title="">
                  <p class="text">BOOK 線上報名</p>
                </a>
              </div>

              <a class="showBox cgB cg" href="../../views/exhibition/exhibitionDetail.php" title="">
                <div class="whenBoxB">
                  <div class="when">
                    <span class="year">2018</span>
                    <p class="day">11 / 03 <span class="en">Sat.</span></p>
                  </div>
                  <span class="line"></span>
                  <div class="when">
                    <span class="year">2018</span>
                    <p class="day">11 / 03 <span class="en">Sat.</span></p>
                  </div>
                </div>
                <div class="textBox">
                  <h4 class="pTitle">失重樂園－河口洋一郎的衍化論</h4>
                  <h5 class="pSubTitle">Zero-Gravity Paradise : Kawaguchi Yoichiro's Algorithmic Evolution</h5>
                </div>
              </a>
            </div>

            <div class="list wHalf h1 center showOnline">
              <div class="boxH3">
                <div class="imgKing">
                  <a class="link cgB cg" href="../../views/exhibition/eventDetail.php" title="">
                    <figure class="imgFrame">
                      <img class="b-lazy img" data-src="../../upload/fa2/exhibition/ok02.jpg" src="../../assets/img/fakeImg/445x270.png" alt="" title="">
                    </figure>

                    <div class="fullBox">
                      <div class="box">
                        <span class="en">FULL</span>
                        <span class="cn">已額滿</span>
                      </div>
                    </div>
                  </a>
                  <a class="link online cgB cg" href="../../views/exhibition/eventDetail.php" title="">
                    <p class="text">BOOK 線上報名</p>
                  </a>
                </div>

                <a class="textFrame" href="../../views/exhibition/exhibitionDetail.php" title="">
                  <div class="titleBox">
                    <h3 class="imgTitle">《寫給宇宙的明信片》童書繪本</h3>
                    <h4 class="imgSubTitle">Pala Fun - moca x  Community Arts festival</h4>
                  </div>

                  <div class="whenBox">
                    <div class="dateBox">
                      <div class="date">
                        <span class="day">2018 / 11 / 03</span>
                        <span class="en">Sat.</span>
                      </div>
                    </div>

                    <div class="timeBox">
                      <p class="text">14:00 - 18:00</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div class="list wHalf h1 center">
              <div class="boxH3">
                <div class="imgKing">
                  <a class="link cgB cg" href="../../views/exhibition/eventDetail.php" title="">
                    <figure class="imgFrame">
                      <img class="b-lazy img" data-src="../../upload/fa2/exhibition/ok02.jpg" src="../../assets/img/fakeImg/445x270.png" alt="" title="">
                    </figure>

                    <div class="fullBox">
                      <div class="box">
                        <span class="en">FULL</span>
                        <span class="cn">已額滿</span>
                      </div>
                    </div>
                  </a>
                  <a class="link online cgB cg" href="../../views/exhibition/eventDetail.php" title="">
                    <p class="text">BOOK 線上報名</p>
                  </a>
                </div>

                <a class="textFrame" href="../../views/exhibition/exhibitionDetail.php" title="">
                  <div class="titleBox">
                    <h3 class="imgTitle">《寫給宇宙的明信片》童書繪本</h3>
                    <h4 class="imgSubTitle">Pala Fun - moca x  Community Arts festival</h4>
                  </div>

                  <div class="whenBox">
                    <div class="dateBox">
                      <div class="date">
                        <span class="day">2018 / 11 / 03</span>
                        <span class="en">Sat.</span>
                      </div>
                    </div>

                    <div class="timeBox">
                      <p class="text">14:00 - 18:00</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div class="list wHalf h1">
              <div class="imgKing">
                <a class="link cgB cg" href="../../views/exhibition/eventDetail.php" title="">
                  <figure class="imgFrame">
                    <img class="b-lazy img" data-src="../../upload/fa2/exhibition/ok01.jpg" src="../../assets/img/fakeImg/710x380.png" alt="" title="">
                  </figure>

                  <div class="fullBox">
                    <div class="box">
                      <span class="en">FULL</span>
                      <span class="cn">已額滿</span>
                    </div>
                  </div>
                </a>
                <a class="link online cgB cg" href="../../views/exhibition/eventDetail.php" title="">
                  <p class="text">BOOK 線上報名</p>
                </a>
              </div>

              <a class="showBox cgB cg" href="../../views/exhibition/exhibitionDetail.php" title="">
                <div class="whenBoxB">
                  <div class="when">
                    <span class="year">2018</span>
                    <p class="day">11 / 03 <span class="en">Sat.</span></p>
                  </div>
                  <span class="line"></span>
                  <div class="when">
                    <span class="year">2018</span>
                    <p class="day">11 / 03 <span class="en">Sat.</span></p>
                  </div>
                </div>
                <div class="textBox">
                  <h4 class="pTitle">失重樂園－河口洋一郎的衍化論</h4>
                  <h5 class="pSubTitle">Zero-Gravity Paradise : Kawaguchi Yoichiro's Algorithmic Evolution</h5>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="secMac">
          <section class="mocaTitleSec">
            <h2 class="title">PLAN FOR WEEKEND</h2>
            <h3 class="subTitle">還在找尋假日好去處嗎?  展開豐富又精采的旅程吧！</h3>
          </section>

          <div class="listFrameBox2">
            <div class="list w450 showFull">
              <div class="imgKing">
                <a class="link cgB cg" href="../../views/exhibition/eventDetail.php" title="">
                  <figure class="imgFrame">
                    <img class="b-lazy img" data-src="../../upload/fa2/exhibition/kk01.jpg" src="../../assets/img/fakeImg/450x240.png" alt="" title="">
                  </figure>

                  <div class="fullBox">
                    <div class="box">
                      <span class="en">FULL</span>
                      <span class="cn">已額滿</span>
                    </div>
                  </div>
                </a>
                <a class="link online cgB cg" href="../../views/exhibition/eventDetail.php" title="">
                  <p class="text">BOOK 線上報名</p>
                </a>
              </div>

              <a class="textFrame" href="../../views/exhibition/eventDetail.php" title="">
                <div class="titleBox">
                  <h3 class="imgTitle">《寫給宇宙的明信片》童書繪本</h3>
                  <h4 class="imgSubTitle">Pala Fun - moca x  Community Arts festival</h4>
                </div>

                <div class="whenBox">
                  <div class="dateBox">
                    <div class="date">
                      <span class="day">2018 / 11 / 03</span>
                      <span class="en">Sat.</span>
                    </div>
                  </div>

                  <div class="timeBox">
                    <p class="text">14:00 - 18:00</p>
                  </div>
                </div>
              </a>
            </div>

            <div class="list w450">
              <div class="imgKing">
                <a class="link cgB cg" href="../../views/exhibition/eventDetail.php" title="">
                  <figure class="imgFrame">
                    <img class="b-lazy img" data-src="../../upload/fa2/exhibition/kk02.jpg" src="../../assets/img/fakeImg/450x240.png" alt="" title="">
                  </figure>
                </a>
                <a class="link online cgB cg" href="../../views/exhibition/eventDetail.php" title="">
                  <p class="text">BOOK 線上報名</p>
                </a>
              </div>

              <a class="textFrame" href="../../views/exhibition/eventDetail.php" title="">
                <div class="titleBox">
                  <h3 class="imgTitle">《寫給宇宙的明信片》童書繪本</h3>
                  <h4 class="imgSubTitle">Pala Fun - moca x  Community Arts festival</h4>
                </div>

                <div class="whenBox">
                  <div class="dateBox">
                    <div class="date">
                      <span class="day">2018 / 11 / 03</span>
                      <span class="en">Sat.</span>
                      <span class="line">-</span>
                      <span class="day">11 / 03</span>
                      <span class="en">Sat.</span>
                    </div>
                  </div>

                  <div class="timeBox">
                    <p class="text">14:00 - 18:00</p>
                  </div>
                </div>
              </a>
            </div>

            <div class="list w450 showOnline">
              <div class="imgKing">
                <a class="link cgB cg" href="../../views/exhibition/eventDetail.php" title="">
                  <figure class="imgFrame">
                    <img class="b-lazy img" data-src="../../upload/fa2/exhibition/kk03.jpg" src="../../assets/img/fakeImg/450x240.png" alt="" title="">
                  </figure>
                </a>
                <a class="link online cgB cg" href="../../views/exhibition/eventDetail.php" title="">
                  <p class="text">BOOK 線上報名</p>
                </a>
              </div>

              <a class="textFrame" href="../../views/exhibition/eventDetail.php" title="">
                <div class="titleBox">
                  <h3 class="imgTitle">《寫給宇宙的明信片》童書繪本</h3>
                  <h4 class="imgSubTitle">Pala Fun - moca x  Community Arts festival</h4>
                </div>

                <div class="whenBox">
                  <div class="dateBox">
                    <div class="date">
                      <span class="day">2018 / 11 / 03</span>
                      <span class="en">Sat.</span>
                      <span class="line">-</span>
                      <span class="day">2018 / 11 / 03</span>
                      <span class="en">Sat.</span>
                    </div>
                  </div>

                  <div class="timeBox">
                    <p class="text">14:00 - 18:00</p>
                  </div>
                </div>
              </a>
            </div>

            <div class="list w450 showFull">
              <div class="imgKing">
                <a class="link cgB cg" href="../../views/exhibition/eventDetail.php" title="">
                  <figure class="imgFrame">
                    <img class="b-lazy img" data-src="../../upload/fa2/exhibition/kk01.jpg" src="../../assets/img/fakeImg/450x240.png" alt="" title="">
                  </figure>

                  <div class="fullBox">
                    <div class="box">
                      <span class="en">FULL</span>
                      <span class="cn">已額滿</span>
                    </div>
                  </div>
                </a>
                <a class="link online cgB cg" href="../../views/exhibition/eventDetail.php" title="">
                  <p class="text">BOOK 線上報名</p>
                </a>
              </div>

              <a class="textFrame" href="../../views/exhibition/eventDetail.php" title="">
                <div class="titleBox">
                  <h3 class="imgTitle">《寫給宇宙的明信片》童書繪本</h3>
                  <h4 class="imgSubTitle">Pala Fun - moca x  Community Arts festival</h4>
                </div>

                <div class="whenBox">
                  <div class="dateBox">
                    <div class="date">
                      <span class="day">2018 / 11 / 03</span>
                      <span class="en">Sat.</span>
                    </div>
                  </div>

                  <div class="timeBox">
                    <p class="text">14:00 - 18:00</p>
                  </div>
                </div>
              </a>
            </div>

            <div class="list w450">
              <div class="imgKing">
                <a class="link cgB cg" href="../../views/exhibition/eventDetail.php" title="">
                  <figure class="imgFrame">
                    <img class="b-lazy img" data-src="../../upload/fa2/exhibition/kk02.jpg" src="../../assets/img/fakeImg/450x240.png" alt="" title="">
                  </figure>
                </a>
                <a class="link online cgB cg" href="../../views/exhibition/eventDetail.php" title="">
                  <p class="text">BOOK 線上報名</p>
                </a>
              </div>

              <a class="textFrame" href="../../views/exhibition/eventDetail.php" title="">
                <div class="titleBox">
                  <h3 class="imgTitle">《寫給宇宙的明信片》童書繪本</h3>
                  <h4 class="imgSubTitle">Pala Fun - moca x  Community Arts festival</h4>
                </div>

                <div class="whenBox">
                  <div class="dateBox">
                    <div class="date">
                      <span class="day">2018 / 11 / 03</span>
                      <span class="en">Sat.</span>
                      <span class="line">-</span>
                      <span class="day">11 / 03</span>
                      <span class="en">Sat.</span>
                    </div>
                  </div>

                  <div class="timeBox">
                    <p class="text">14:00 - 18:00</p>
                  </div>
                </div>
              </a>
            </div>

            <div class="list w450 showOnline">
              <div class="imgKing">
                <a class="link cgB cg" href="../../views/exhibition/eventDetail.php" title="">
                  <figure class="imgFrame">
                    <img class="b-lazy img" data-src="../../upload/fa2/exhibition/kk03.jpg" src="../../assets/img/fakeImg/450x240.png" alt="" title="">
                  </figure>
                </a>
                <a class="link online cgB cg" href="../../views/exhibition/eventDetail.php" title="">
                  <p class="text">BOOK 線上報名</p>
                </a>
              </div>

              <a class="textFrame" href="../../views/exhibition/eventDetail.php" title="">
                <div class="titleBox">
                  <h3 class="imgTitle">《寫給宇宙的明信片》童書繪本</h3>
                  <h4 class="imgSubTitle">Pala Fun - moca x  Community Arts festival</h4>
                </div>

                <div class="whenBox">
                  <div class="dateBox">
                    <div class="date">
                      <span class="day">2018 / 11 / 03</span>
                      <span class="en">Sat.</span>
                      <span class="line">-</span>
                      <span class="day">2018 / 11 / 03</span>
                      <span class="en">Sat.</span>
                    </div>
                  </div>

                  <div class="timeBox">
                    <p class="text">14:00 - 18:00</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </article>
    </main>

    <?php include('../layout/footer.php');?>

  </div>

</body>

<?php include('../layout/jsLayout.php');?> 
</html>