<!DOCTYPE html>
<!--html lang-->
<!--zh-Hant-TW 繁體中文-->
<!--en 英文-->
<html lang="zh-Hant-TW">


<head>
  <?php include('../layout/head.php');?>
</head>


<body class="index member" id="member">

  <?php include('../layout/cg.php');?>

  <div class="cgAnimate">

    <?php include('../layout/header.php');?>

    <main>

      <!--設計師說這個mocaSBanner 商店不用出現-->


      <!--mocaSNav-->
      <article class="mocaSNav">

        <section class="secBox">

          <div class="scrollFrame">
            <nav class="navBar">
              <a class="link cgNot now" href="javascript:void(0)" data-class="memberBrick" title="">
                <p class="text">會員總覽</p>
              </a>
              <a class="link cgNot" href="javascript:void(0)" data-class="memberInformation" title="">
                <p class="text">會員資料管理</p>
              </a>
              <a class="link cgNot" href="javascript:void(0)" data-class="memberBooking" title="">
                <p class="text">報名管理</p>
              </a>
              <a class="link cgNot" href="javascript:void(0)" title="">
                <p class="text">申辦摩卡</p>
              </a>
            </nav>
          </div>

          <a class="searchArea logOutBtn" href="../member/logPage.php" title="">
            <img class="icon mCS_img_loaded" src="../../assets/img/menu/logout.png" alt="" title="">
            <p class="text">登出</p>
          </a>

        </section>

      </article>


      <div class="memberShot">
        <!--會員總覽 memberBrick-->
        <!--這裡背景不用開給她-->
        <article class="memberBrick shotList showUp">
          <section class="woodBlock blockA" style="background-color: #e5e5e5">
            <div class="textInfoBox">
              <h4 class="title">Welcome Back !</h4>
              <h5 class="subTitle">歡迎回來，佩蒂</h5>
            </div>

            <div class="selfieBox">
              <figure class="imgFrame">
                <img class="img" src="../../upload/fa2/member/selfie.jpg" alt="" title="">
              </figure>
            </div>

            <div class="breadBox">
              <div class="textBox">
                <p class="title">
                  <span>ACCOUNT</span>
                  <span>基本資料管理</span>
                </p>
                <p class="text">請填寫正確的會員資料，以確保後續在使用、驗證與會員福利等權益。</p>
              </div>
              <div class="btnStyle">
                <div class="btn styleB switchBtn" data-class="memberInformation">
                  <p class="text">進行會員資料管理</p>
                </div>
              </div>
            </div>
          </section>

          <section class="woodBlock blockB" style="background-color: #e83434; color: #fff;">
            <div class="textInfoBox">
              <h4 class="title">您的報名清單</h4>
              <h5 class="subTitle">BOOK LIST</h5>
            </div>

            <div class="numberBox">
              <span class="num">5</span>
              <p class="text">您目前的報名數量</p>
            </div>

            <div class="breadBox">
              <div class="textBox">
                <p class="text">隨時對感興趣的活動進行線上報名，現在就能管理您的報名資訊，開始自由的藝術探險、打造藝術的人生吧！</p>
              </div>
              <div class="btnStyle">
                <div class="btn styleB switchBtn" data-class="memberBooking">
                  <p class="text">進行報名管理</p>
                </div>
              </div>
            </div>
          </section>

          <!--在 woodBlock 加 subscribe 會顯示訂閱中  (客戶現在先不要)-->
          <!-- <section class="woodBlock blockB" style="background-color: #4c4c4c; color: #fff;">
            <div class="textInfoBox">
              <h4 class="title">當代摩卡報報</h4>
              <h5 class="subTitle">NEWSLETTER</h5>
            </div>

            <div class="mailBox">
              <span class="icon icon-chrismail"></span>
            </div>

            <div class="breadBox">
              <div class="textBox">
                <p class="text">感謝您對台北當代藝術館的支持，當代館推出MOCA電子報，將不定期發送近期各項展覽與系列教育活動資訊給朋友們。</p>
              </div>
              <div class="btnStyle">
                <div class="btn styleB unSub">
                  <p class="text">尚未訂閱</p>
                </div>
                <div class="btn styleB sub">
                  <p class="text">訂閱中</p>
                </div>
              </div>
            </div>
          </section> -->

          <section class="woodBlock blockB shopHam">
            <div class="bg show" style="background-image: url('../../upload/fa2/shop/ham01.jpg');"></div>
            <section class="hamBox show">
              <div class="shopTitleBox">
                <h2 class="title">MOCard</h2>
                <h3 class="subTitle">申辦摩卡 ，享受藝術生活。</h3>
                <span class="line"></span>
                <p class="text">擁有摩卡會員，隨時享有優惠活動及相關展覽與活動訊息，現在就展開享受藝術的生活，創造藝術的人生。</p>
              </div>

              <!--設計師說她暫時沒連結 等客戶之後自己要再上-->
              <div class="btnStyle">
                <a class="btn styleB cg" href="javascript:void(0)" title="">
                  <p class="text">即將登場，敬請期待！</p>
                </a>
              </div>
            </section>
          </section>
        </article>

        
        <!--會員基本資料 memberInformation-->
        <article class="memberInformation shotList">
          <div class="container">
            <div class="selfieBox">
              <figure class="imgFrame">
                <img class="img" src="../../upload/fa2/member/selfie.jpg" alt="" title="">
              </figure>
            </div>


            <div class="textInfoBox">
              <h4 class="title">Member Information</h4>
              <h5 class="subTitle">會員基本資料</h5>
            </div>
            <form id="form1" class="formA memberForm" action="">
              <div class="list w50 gap">
                <label class="lableTitle" for=""><span>NAME</span><span>姓名</span></label>
                <input type="text" name="" id="" value="" placeholder="李佩蒂">
              </div>

              <div class="list w50 gap">
                <label class="lableTitle" for=""><span>GENDER</span><span>性別</span></label>
                <div class="chrisSelect sexSelect" data-placeholder="請選擇您的性別">
                  <div class="dropShow">
                    <div class="showBox">
                      <p class="character"></p>
                    </div>
                    <span class="icon icon-christriangle-down"></span>
                  </div>

                  <ul class="dropList">
                    <li class="list">
                      <p class="character">男生</p>
                    </li>
                    <li class="list">
                      <p class="character">女生</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="list w50 gap">
                <label class="lableTitle" for=""><span>MOBILE</span><span>手機號碼</span></label>
                <input type="tel" name="" id="" value="" placeholder="912 345 678">
              </div>

              <div class="list w50 gap">
                <label class="lableTitle" for=""><span>NATIONALITY</span><span>國籍</span></label>
                <div class="chrisSelect nationSelect" data-placeholder="TAIWAN +886">
                  <div class="dropShow">
                    <div class="showBox">
                      <p class="character"></p>
                    </div>
                    <span class="icon icon-christriangle-down"></span>
                  </div>

                  <ul class="dropList">
                    <li class="list">
                      <p class="character">香港 +852</p>
                    </li>
                    <li class="list">
                      <p class="character">澳門 +853</p>
                    </li>
                    <li class="list">
                      <p class="character">美國 +011</p>
                    </li>
                    <li class="list">
                      <p class="character">香港 +852</p>
                    </li>
                    <li class="list">
                      <p class="character">澳門 +853</p>
                    </li>
                    <li class="list">
                      <p class="character">美國 +011</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="list w100 gap">
                <label class="lableTitle" for=""><span>BIRTH DATE</span><span>生日</span></label>
                <div class="chrisSelect w25 yearSelect" data-placeholder="年份">
                  <div class="dropShow">
                    <div class="showBox">
                      <p class="character"></p>
                    </div>
                    <span class="icon icon-christriangle-down"></span>
                  </div>

                  <ul class="dropList">
                    <li class="list">
                      <p class="character">1987</p>
                    </li>
                    <li class="list">
                      <p class="character">1988</p>
                    </li>
                    <li class="list">
                      <p class="character">1989</p>
                    </li>
                    <li class="list">
                      <p class="character">1990</p>
                    </li>
                    <li class="list">
                      <p class="character">1991</p>
                    </li>
                    <li class="list">
                      <p class="character">1992</p>
                    </li>
                    <li class="list">
                      <p class="character">1993</p>
                    </li>
                    <li class="list">
                      <p class="character">1994</p>
                    </li>
                    <li class="list">
                      <p class="character">1995</p>
                    </li>
                    <li class="list">
                      <p class="character">1996</p>
                    </li>
                    <li class="list">
                      <p class="character">1997</p>
                    </li>
                    <li class="list">
                      <p class="character">1998</p>
                    </li>
                    <li class="list">
                      <p class="character">1999</p>
                    </li>
                    <li class="list">
                      <p class="character">2000</p>
                    </li>
                    <li class="list">
                      <p class="character">2001</p>
                    </li>
                  </ul>
                </div>
                <div class="chrisSelect w25 monthSelect" data-placeholder="月份">
                  <div class="dropShow">
                    <div class="showBox">
                      <p class="character"></p>
                    </div>
                    <span class="icon icon-christriangle-down"></span>
                  </div>

                  <ul class="dropList">
                    <li class="list">
                      <p class="character">01</p>
                    </li>
                    <li class="list">
                      <p class="character">02</p>
                    </li>
                    <li class="list">
                      <p class="character">03</p>
                    </li>
                    <li class="list">
                      <p class="character">04</p>
                    </li>
                    <li class="list">
                      <p class="character">05</p>
                    </li>
                    <li class="list">
                      <p class="character">06</p>
                    </li>
                    <li class="list">
                      <p class="character">07</p>
                    </li>
                    <li class="list">
                      <p class="character">08</p>
                    </li>
                    <li class="list">
                      <p class="character">09</p>
                    </li>
                    <li class="list">
                      <p class="character">10</p>
                    </li>
                    <li class="list">
                      <p class="character">11</p>
                    </li>
                    <li class="list">
                      <p class="character">12</p>
                    </li>
                  </ul>
                </div>
                <div class="chrisSelect w25 dateSelect" data-placeholder="日期">
                  <div class="dropShow">
                    <div class="showBox">
                      <p class="character"></p>
                    </div>
                    <span class="icon icon-christriangle-down"></span>
                  </div>

                  <ul class="dropList">
                    <li class="list">
                      <p class="character">01</p>
                    </li>
                    <li class="list">
                      <p class="character">02</p>
                    </li>
                    <li class="list">
                      <p class="character">03</p>
                    </li>
                    <li class="list">
                      <p class="character">04</p>
                    </li>
                    <li class="list">
                      <p class="character">05</p>
                    </li>
                    <li class="list">
                      <p class="character">06</p>
                    </li>
                    <li class="list">
                      <p class="character">07</p>
                    </li>
                    <li class="list">
                      <p class="character">08</p>
                    </li>
                    <li class="list">
                      <p class="character">09</p>
                    </li>
                    <li class="list">
                      <p class="character">10</p>
                    </li>
                    <li class="list">
                      <p class="character">11</p>
                    </li>
                    <li class="list">
                      <p class="character">12</p>
                    </li>
                    <li class="list">
                      <p class="character">13</p>
                    </li>
                    <li class="list">
                      <p class="character">14</p>
                    </li>
                    <li class="list">
                      <p class="character">15</p>
                    </li>
                    <li class="list">
                      <p class="character">16</p>
                    </li>
                    <li class="list">
                      <p class="character">17</p>
                    </li>
                    <li class="list">
                      <p class="character">18</p>
                    </li>
                    <li class="list">
                      <p class="character">19</p>
                    </li>
                    <li class="list">
                      <p class="character">20</p>
                    </li>
                    <li class="list">
                      <p class="character">21</p>
                    </li>
                    <li class="list">
                      <p class="character">22</p>
                    </li>
                    <li class="list">
                      <p class="character">23</p>
                    </li>
                    <li class="list">
                      <p class="character">24</p>
                    </li>
                    <li class="list">
                      <p class="character">25</p>
                    </li>
                    <li class="list">
                      <p class="character">26</p>
                    </li>
                    <li class="list">
                      <p class="character">27</p>
                    </li>
                    <li class="list">
                      <p class="character">28</p>
                    </li>
                    <li class="list">
                      <p class="character">29</p>
                    </li>
                    <li class="list">
                      <p class="character">30</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="list w100 gap">
                <label class="lableTitle" for=""><span>ADDRESS</span><span>地址</span></label>
                <div class="chrisSelect w25 countrySelect" data-placeholder="國家">
                  <div class="dropShow">
                    <div class="showBox">
                      <p class="character"></p>
                    </div>
                    <span class="icon icon-christriangle-down"></span>
                  </div>

                  <ul class="dropList">
                    <li class="list">
                      <p class="character">台灣</p>
                    </li>
                    <li class="list">
                      <p class="character">香港</p>
                    </li>
                    <li class="list">
                      <p class="character">新加坡</p>
                    </li>
                    <li class="list">
                      <p class="character">馬來西亞</p>
                    </li>
                    <li class="list">
                      <p class="character">日本</p>
                    </li>
                    <li class="list">
                      <p class="character">韓國</p>
                    </li>
                    <li class="list">
                      <p class="character">法國</p>
                    </li>
                    <li class="list">
                      <p class="character">英國</p>
                    </li>
                    <li class="list">
                      <p class="character">美國</p>
                    </li>
                    <li class="list">
                      <p class="character">德國</p>
                    </li>
                  </ul>
                </div>
                <div class="chrisSelect w25 citySelect" data-placeholder="縣市">
                  <div class="dropShow">
                    <div class="showBox">
                      <p class="character"></p>
                    </div>
                    <span class="icon icon-christriangle-down"></span>
                  </div>

                  <ul class="dropList">
                    <li class="list">
                      <p class="character">台北市</p>
                    </li>
                    <li class="list">
                      <p class="character">新北市</p>
                    </li>
                    <li class="list">
                      <p class="character">基隆市</p>
                    </li>
                    <li class="list">
                      <p class="character">桃園市</p>
                    </li>
                    <li class="list">
                      <p class="character">新竹市</p>
                    </li>
                    <li class="list">
                      <p class="character">新竹縣</p>
                    </li>
                    <li class="list">
                      <p class="character">台中市</p>
                    </li>
                  </ul>
                </div>
                <div class="chrisSelect w25 areaSelect" data-placeholder="鄉鎮">
                  <div class="dropShow">
                    <div class="showBox">
                      <p class="character"></p>
                    </div>
                    <span class="icon icon-christriangle-down"></span>
                  </div>

                  <ul class="dropList">
                    <li class="list">
                      <p class="character">太平</p>
                    </li>
                    <li class="list">
                      <p class="character">大里</p>
                    </li>
                    <li class="list">
                      <p class="character">龍井</p>
                    </li>
                    <li class="list">
                      <p class="character">清水</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="list w100 gap addressArea">
                <input type="text" name="" id="" value="" placeholder="請輸入您的詳細地址">
              </div>

              <div class="list w100 gap mailBArea">
                <label class="lableTitle" for=""><span>BACKUP MAIL</span><span>備援信箱</span></label>
                <input type="email" name="" id="" value="" placeholder="請填寫有效信箱並確保資訊正確，將作為忘記帳號之救濟途徑">
              </div>

              <div class="list w100 gap letterArea">
                <label class="lableTitle" for=""><span>NEWSLETTER</span><span>電子報訂閱</span></label>
                <div class="chrisSelect letterSelect" data-placeholder="是，我願意接收當代摩卡報報">
                  <div class="dropShow">
                    <div class="showBox">
                      <p class="character"></p>
                    </div>
                    <span class="icon icon-christriangle-down"></span>
                  </div>

                  <ul class="dropList">
                    <li class="list">
                      <p class="character">是，我願意接收當代摩卡報報</p>
                    </li>
                    <li class="list">
                      <p class="character">否，我不願意接收當代摩卡報報</p>
                    </li>
                  </ul>
                </div>
              </div>
            </form>
            <button class="sendBtn send" type="button" form="form1">儲存設定</button>


            <div class="textInfoBox">
              <h4 class="title">Account & Password</h4>
              <h5 class="subTitle">帳號密碼設定</h5>
              <p class="text">若您需要重新設定帳號或密碼，我們將進行驗證手續，以確認此操作為您本人親自進行。<br/>為確保您的帳號使用安全，建議您每三個月更換一次密碼。</p>
            </div>
            <div class="mocaBtnBox btnStyle">
              <a class="btn styleB cgNot ajax_open openChAccount" href="javascript:void(0)" data-path="" data-id="">重設帳號</a>
              <a class="btn styleB cgNot ajax_open openChPassword" href="javascript:void(0)" data-path="" data-id="">重設密碼</a>
            </div>
            <div class="memberInfo">
              <p class="text">若您有停用會員帳號或刪除會員帳號之需求，請聯繫下方信箱，我們將有專人為您處理。<br/>若有其他疑問，也可以填寫聯絡表單，我們將盡快與您聯繫。</p>
              <div class="box">
                <a  class="mail" href="mailto:services@mocataipei.org.tw" title=""><span class="text">services@mocataipei.org.tw</span></a>
                <a  class="link cg" href="../contact/index.php" title=""><span class="text">聯絡我們</span></a>
              </div>
            </div>
          </div>
        </article>


        <!--報名管理 memberBooking-->
        <article class="memberBooking shotList">
          <div class="shopTitleBox">
            <h2 class="title">Booking Management</h2>
            <h3 class="subTitle">報名紀錄管理</h3>
          </div>

          <div class="chooseSelectBox">
            <div class="chrisSelect" data-placeholder="顯示全部報名紀錄">
              <div class="dropShow">
                <div class="showBox">
                  <p class="character"></p>
                </div>
                <span class="icon icon-chriskeyboard_arrow_down"></span>
              </div>

              <ul class="dropList">
                <li class="list">
                  <p class="character">顯示全部報名紀錄</p>
                </li>
                <li class="list">
                  <p class="character">現在的報名紀錄</p>
                </li>
                <li class="list">
                  <p class="character">歷史的報名紀錄</p>
                </li>
              </ul>
            </div>
          </div>

          <!--list + canceled = 被取消狀態-->
          <!--grayWord = 紅色提醒轉灰色-->
          <ul class="bookListFrame">
            <li class="list">
              <div class="textInfoArea child">
                <div class="numBox">
                  <span class="text">01</span>
                </div>
                <div class="textBox">
                  <a class="title cg cgB" href="javascript:void(0)" title="">
                    <p>「原」創就是力量－從傳統手藝到當代藝術</p>
                  </a>
                  <div class="loBox">
                    <p class="text">
                      <span class="name">時間</span>
                      <span class="txt">2018-11-18 14:00-18:00</span>
                    </p>
                    <p class="text">
                      <span class="name">地點</span>
                      <span class="txt">台北當代藝術館1F活動大廳</span>
                    </p>
                  </div>
                  <p class="noticeWord">為確保您的權益，請於報名三天內完成付款動作，逾時將釋出名額。</p>
                </div>
              </div>
              <div class="btnInfoArea child">
                <div class="stateBox">
                  <div class="stateChild">
                    <p class="title">報名資訊</p>
                    <a class="link openBookBtn" href="javascript:void(0)"><span class="icon icon-chrisbook_information"></span></a>
                  </div>
                  <div class="stateChild">
                    <p class="title">付款狀態</p>
                    <p class="name">等待付款</p>
                  </div>
                  <div class="stateChild">
                    <p class="title">活動狀態</p>
                    <p class="name">審核中</p>
                  </div>
                </div>
                <div class="btnStyle memberShot">
                  <div class="btn openCancelBox">
                    <p class="text">取消報名</p>
                  </div>
                </div>
              </div>

              <!--報名資訊視窗-->
              <div class="mBookBag hideBagType">
                <div class="for_scroll">
                  <div class="bg closeBtn"></div>
                  <div class="container">
                    <section class="bookBlock">
                      <div class="bookBox">
                        <div class="chrisCloseBtn closeBtn">
                          <div class="iconBox"></div>
                          <p class="text">CLOSE</p>
                        </div>

                        <div class="serialBox">
                          <p class="text">您的活動序號為</p>
                          <p class="number">AE586HJ37</p>
                        </div>

                        <div class="bunBox">
                          <h3 class="nameTitle">「原」創就是力量－從傳統手藝到當代藝術</h3>
                          <div class="stuffing">
                            <p class="title">活動場次</p>
                            <p class="text">2018/11/03  SAT. 14:00 - 15:30</p>
                          </div>
                          <div class="stuffing">
                            <p class="title">活動地點</p>
                            <p class="text">台北當代藝術館1F活動大廳</p>
                          </div>
                        </div>

                        <div class="formBox">
                          <div class="formHeadBox">
                            <p class="title">報名資訊</p>
                          </div>

                          <ul class="formBodyBox">
                            <li class="list">
                              <p class="title">一般定價 / 多人同行</p>
                              <div class="countBox">
                                <p class="item">票價 <span class="num">NT$ 4,000</span> /人</p>
                                <p class="item">人數 <span class="num">2</span></p>
                              </div>
                            </li>
                            <li class="list detail">
                              <span class="sNum">01</span>
                              <ul class="dBox">
                                <li class="dList">
                                  <p class="dTitle"><span class="en">NAME</span> <span class="cn">姓名</span></p>
                                  <p class="dText">王大明</p>
                                </li>
                                <li class="dList">
                                  <p class="dTitle"><span class="en">MOBILE</span> <span class="cn">手機號碼</span></p>
                                  <p class="dText">+886 912345678</p>
                                </li>
                                <li class="dList">
                                  <p class="dTitle"><span class="en">E-MAIL</span> <span class="cn">電子信箱</span></p>
                                  <p class="dText">mocataipei@gmail.com</p>
                                </li>
                                <li class="dList">
                                  <p class="dTitle"><span class="en">BIRTH DATE</span> <span class="cn">生日</span></p>
                                  <p class="dText">1996 . 05 . 18</p>
                                </li>
                              </ul>
                            </li>
                            <li class="list detail">
                              <span class="sNum">02</span>
                              <ul class="dBox">
                                <li class="dList">
                                  <p class="dTitle"><span class="en">NAME</span> <span class="cn">姓名</span></p>
                                  <p class="dText">張小美</p>
                                </li>
                                <li class="dList">
                                  <p class="dTitle"><span class="en">MOBILE</span> <span class="cn">手機號碼</span></p>
                                  <p class="dText">+886 912345678</p>
                                </li>
                                <li class="dList">
                                  <p class="dTitle"><span class="en">E-MAIL</span> <span class="cn">電子信箱</span></p>
                                  <p class="dText">prettymei@gmail.com</p>
                                </li>
                                <li class="dList">
                                  <p class="dTitle"><span class="en">BIRTH DATE</span> <span class="cn">生日</span></p>
                                  <p class="dText">1996 . 05 . 18</p>
                                </li>
                              </ul>
                            </li>
                          </ul>

                          <div class="numberBox">
                            <p class="text">您的報名人數為 <span class="num">2</span>人 ，</p>
                            <p class="text">費用總計為 <span class="num">NT$8,000</span></p>
                          </div>
                          
                          <section class="noticeBox">
                            <div class="articleBox">
                              <h5 class="nameTitle">
                                <span class="en">Notice</span>
                                <span class="cn">注意事項</span>
                              </h5>
                              <h6 class="title">上課須知</h6>
                              <p class="text">
                                1. 上課期間如遇颱風等天災，依臺北市政府規定公告停課，並另擇日補課。<br>
                                2. 本館保有所有課程變更之權力，活動因故無法執行，本館將另行通知上課日期。<br>
                                3. 現場繳費收據請妥善保存，開課第一天將依此辦理報到手續。<br>
                                4. 上課期間請務必攜配上課證。<br>
                              </p>
                            </div>
                          </section>
                        </div>
                      </div>
                      <div class="ufoBallBox">
                        <div class="confirmBtn ufoBall closeBtn">
                          <p class="text">OK</p>
                          <p class="text">確定</p>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </li>

            <li class="list canceled grayWord">
              <div class="textInfoArea child">
                <div class="numBox">
                  <span class="text">02</span>
                </div>
                <div class="textBox">
                  <a class="title cg cgB" href="javascript:void(0)" title="">
                    <p>大炳老師的敲敲木作坊</p>
                  </a>
                  <div class="loBox">
                    <p class="text">
                      <span class="name">時間</span>
                      <span class="txt">2018-11-18 14:00-18:00</span>
                    </p>
                    <p class="text">
                      <span class="name">地點</span>
                      <span class="txt">台北當代藝術館好玩藝教室</span>
                    </p>
                  </div>
                  <p class="noticeWord">為確保您的權益，請於報名三天內完成付款動作，逾時將釋出名額。</p>
                </div>
              </div>
              <div class="btnInfoArea child">
                <div class="stateBox">
                  <div class="stateChild">
                    <p class="title">報名資訊</p>
                    <a class="link openBookBtn" href="javascript:void(0)"><span class="icon icon-chrisbook_information"></span></a>
                  </div>
                  <div class="stateChild">
                    <p class="title">付款狀態</p>
                    <p class="name">逾時付款</p>
                  </div>
                  <div class="stateChild">
                    <p class="title">活動狀態</p>
                    <p class="name">報名失效</p>
                  </div>
                </div>
                <div class="btnStyle memberShot">
                  <div class="btn openCancelBox">
                    <p class="text">取消報名</p>
                  </div>
                </div>
              </div>

              <!--報名資訊視窗-->
              <div class="mBookBag hideBagType">
                <div class="for_scroll">
                  <div class="bg closeBtn"></div>
                  <div class="container">
                    <section class="bookBlock">
                      <div class="bookBox">
                        <div class="chrisCloseBtn closeBtn">
                          <div class="iconBox"></div>
                          <p class="text">CLOSE</p>
                        </div>

                        <div class="serialBox">
                          <p class="text">您的活動序號為</p>
                          <p class="number">AE586HJ37</p>
                        </div>

                        <div class="bunBox">
                          <h3 class="nameTitle">「原」創就是力量－從傳統手藝到當代藝術</h3>
                          <div class="stuffing">
                            <p class="title">活動場次</p>
                            <p class="text">2018/11/03  SAT. 14:00 - 15:30</p>
                          </div>
                          <div class="stuffing">
                            <p class="title">活動地點</p>
                            <p class="text">台北當代藝術館1F活動大廳</p>
                          </div>
                        </div>

                        <div class="formBox">
                          <div class="formHeadBox">
                            <p class="title">報名資訊</p>
                          </div>

                          <ul class="formBodyBox">
                            <li class="list">
                              <p class="title">一般定價 / 多人同行</p>
                              <div class="countBox">
                                <p class="item">票價 <span class="num">NT$ 4,000</span> /人</p>
                                <p class="item">人數 <span class="num">2</span></p>
                              </div>
                            </li>
                            <li class="list detail">
                              <span class="sNum">01</span>
                              <ul class="dBox">
                                <li class="dList">
                                  <p class="dTitle"><span class="en">NAME</span> <span class="cn">姓名</span></p>
                                  <p class="dText">王大明</p>
                                </li>
                                <li class="dList">
                                  <p class="dTitle"><span class="en">MOBILE</span> <span class="cn">手機號碼</span></p>
                                  <p class="dText">+886 912345678</p>
                                </li>
                                <li class="dList">
                                  <p class="dTitle"><span class="en">E-MAIL</span> <span class="cn">電子信箱</span></p>
                                  <p class="dText">mocataipei@gmail.com</p>
                                </li>
                                <li class="dList">
                                  <p class="dTitle"><span class="en">BIRTH DATE</span> <span class="cn">生日</span></p>
                                  <p class="dText">1996 . 05 . 18</p>
                                </li>
                              </ul>
                            </li>
                            <li class="list detail">
                              <span class="sNum">02</span>
                              <ul class="dBox">
                                <li class="dList">
                                  <p class="dTitle"><span class="en">NAME</span> <span class="cn">姓名</span></p>
                                  <p class="dText">張小美</p>
                                </li>
                                <li class="dList">
                                  <p class="dTitle"><span class="en">MOBILE</span> <span class="cn">手機號碼</span></p>
                                  <p class="dText">+886 912345678</p>
                                </li>
                                <li class="dList">
                                  <p class="dTitle"><span class="en">E-MAIL</span> <span class="cn">電子信箱</span></p>
                                  <p class="dText">prettymei@gmail.com</p>
                                </li>
                                <li class="dList">
                                  <p class="dTitle"><span class="en">BIRTH DATE</span> <span class="cn">生日</span></p>
                                  <p class="dText">1996 . 05 . 18</p>
                                </li>
                              </ul>
                            </li>
                          </ul>

                          <div class="numberBox">
                            <p class="text">您的報名人數為 <span class="num">2</span>人 ，</p>
                            <p class="text">費用總計為 <span class="num">NT$8,000</span></p>
                          </div>
                          
                          <section class="noticeBox">
                            <div class="articleBox">
                              <h5 class="nameTitle">
                                <span class="en">Notice</span>
                                <span class="cn">注意事項</span>
                              </h5>
                              <h6 class="title">上課須知</h6>
                              <p class="text">
                                1. 上課期間如遇颱風等天災，依臺北市政府規定公告停課，並另擇日補課。<br>
                                2. 本館保有所有課程變更之權力，活動因故無法執行，本館將另行通知上課日期。<br>
                                3. 現場繳費收據請妥善保存，開課第一天將依此辦理報到手續。<br>
                                4. 上課期間請務必攜配上課證。<br>
                              </p>
                            </div>
                          </section>
                        </div>
                      </div>
                      <div class="confirmBtn ufoBall closeBtn">
                        <p class="text">OK</p>
                        <p class="text">確定</p>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </li>

            <li class="list">
              <div class="textInfoArea child">
                <div class="numBox">
                  <span class="text">03</span>
                </div>
                <div class="textBox">
                  <a class="title cg cgB" href="javascript:void(0)" title="">
                    <p>如果你希望我說些什麼 我會說我看見一幅影像—海希利西特個展</p>
                  </a>
                  <div class="loBox">
                    <p class="text">
                      <span class="name">時間</span>
                      <span class="txt">2018-11-18 14:00-18:00</span>
                    </p>
                    <p class="text">
                      <span class="name">地點</span>
                      <span class="txt">台北當代藝術館1F活動大廳</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="btnInfoArea child">
                <div class="stateBox">
                  <div class="stateChild">
                    <p class="title">報名資訊</p>
                    <a class="link openBookBtn" href="javascript:void(0)"><span class="icon icon-chrisbook_information"></span></a>
                  </div>
                  <div class="stateChild">
                    <p class="title">付款狀態</p>
                    <p class="name">完成付款</p>
                  </div>
                  <div class="stateChild">
                    <p class="title">活動狀態</p>
                    <p class="name">報名成功</p>
                  </div>
                </div>
                <div class="btnStyle memberShot">
                  <div class="btn openCancelBox">
                    <p class="text">取消報名</p>
                  </div>
                </div>
              </div>

              <!--報名資訊視窗-->
              <div class="mBookBag hideBagType">
                <div class="for_scroll">
                  <div class="bg closeBtn"></div>
                  <div class="container">
                    <section class="bookBlock">
                      <div class="bookBox">
                        <div class="chrisCloseBtn closeBtn">
                          <div class="iconBox"></div>
                          <p class="text">CLOSE</p>
                        </div>

                        <div class="serialBox">
                          <p class="text">您的活動序號為</p>
                          <p class="number">AE586HJ37</p>
                        </div>

                        <div class="bunBox">
                          <h3 class="nameTitle">「原」創就是力量－從傳統手藝到當代藝術</h3>
                          <div class="stuffing">
                            <p class="title">活動場次</p>
                            <p class="text">2018/11/03  SAT. 14:00 - 15:30</p>
                          </div>
                          <div class="stuffing">
                            <p class="title">活動地點</p>
                            <p class="text">台北當代藝術館1F活動大廳</p>
                          </div>
                        </div>

                        <div class="formBox">
                          <div class="formHeadBox">
                            <p class="title">報名資訊</p>
                          </div>

                          <ul class="formBodyBox">
                            <li class="list">
                              <p class="title">一般定價 / 多人同行</p>
                              <div class="countBox">
                                <p class="item">票價 <span class="num">NT$ 4,000</span> /人</p>
                                <p class="item">人數 <span class="num">2</span></p>
                              </div>
                            </li>
                            <li class="list detail">
                              <span class="sNum">01</span>
                              <ul class="dBox">
                                <li class="dList">
                                  <p class="dTitle"><span class="en">NAME</span> <span class="cn">姓名</span></p>
                                  <p class="dText">王大明</p>
                                </li>
                                <li class="dList">
                                  <p class="dTitle"><span class="en">MOBILE</span> <span class="cn">手機號碼</span></p>
                                  <p class="dText">+886 912345678</p>
                                </li>
                                <li class="dList">
                                  <p class="dTitle"><span class="en">E-MAIL</span> <span class="cn">電子信箱</span></p>
                                  <p class="dText">mocataipei@gmail.com</p>
                                </li>
                                <li class="dList">
                                  <p class="dTitle"><span class="en">BIRTH DATE</span> <span class="cn">生日</span></p>
                                  <p class="dText">1996 . 05 . 18</p>
                                </li>
                              </ul>
                            </li>
                            <li class="list detail">
                              <span class="sNum">02</span>
                              <ul class="dBox">
                                <li class="dList">
                                  <p class="dTitle"><span class="en">NAME</span> <span class="cn">姓名</span></p>
                                  <p class="dText">張小美</p>
                                </li>
                                <li class="dList">
                                  <p class="dTitle"><span class="en">MOBILE</span> <span class="cn">手機號碼</span></p>
                                  <p class="dText">+886 912345678</p>
                                </li>
                                <li class="dList">
                                  <p class="dTitle"><span class="en">E-MAIL</span> <span class="cn">電子信箱</span></p>
                                  <p class="dText">prettymei@gmail.com</p>
                                </li>
                                <li class="dList">
                                  <p class="dTitle"><span class="en">BIRTH DATE</span> <span class="cn">生日</span></p>
                                  <p class="dText">1996 . 05 . 18</p>
                                </li>
                              </ul>
                            </li>
                          </ul>

                          <div class="numberBox">
                            <p class="text">您的報名人數為 <span class="num">2</span>人 ，</p>
                            <p class="text">費用總計為 <span class="num">NT$8,000</span></p>
                          </div>
                          
                          <section class="noticeBox">
                            <div class="articleBox">
                              <h5 class="nameTitle">
                                <span class="en">Notice</span>
                                <span class="cn">注意事項</span>
                              </h5>
                              <h6 class="title">上課須知</h6>
                              <p class="text">
                                1. 上課期間如遇颱風等天災，依臺北市政府規定公告停課，並另擇日補課。<br>
                                2. 本館保有所有課程變更之權力，活動因故無法執行，本館將另行通知上課日期。<br>
                                3. 現場繳費收據請妥善保存，開課第一天將依此辦理報到手續。<br>
                                4. 上課期間請務必攜配上課證。<br>
                              </p>
                            </div>
                          </section>
                        </div>
                      </div>
                      <div class="confirmBtn ufoBall closeBtn">
                        <p class="text">OK</p>
                        <p class="text">確定</p>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </li>

            <li class="list canceled">
              <div class="textInfoArea child">
                <div class="numBox">
                  <span class="text">04</span>
                </div>
                <div class="textBox">
                  <a class="title cg cgB" href="javascript:void(0)" title="">
                    <p>我的傳統你的眼－藝術國際展演中的文化流轉與轉譯</p>
                  </a>
                  <div class="loBox">
                    <p class="text">
                      <span class="name">時間</span>
                      <span class="txt">2018-11-18 14:00-18:00</span>
                    </p>
                    <p class="text">
                      <span class="name">地點</span>
                      <span class="txt">台北當代藝術館1F活動大廳</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="btnInfoArea child">
                <div class="stateBox">
                  <div class="stateChild">
                    <p class="title">報名資訊</p>
                    <a class="link openBookBtn" href="javascript:void(0)"><span class="icon icon-chrisbook_information"></span></a>
                  </div>
                  <div class="stateChild">
                    <p class="title">付款狀態</p>
                    <p class="name">退款中</p>
                  </div>
                  <div class="stateChild">
                    <p class="title">活動狀態</p>
                    <p class="name">取消報名</p>
                  </div>
                </div>
                <div class="btnStyle memberShot">
                  <div class="btn openCancelBox">
                    <p class="text">取消報名</p>
                  </div>
                </div>
              </div>

              <!--報名資訊視窗-->
              <div class="mBookBag hideBagType">
                <div class="for_scroll">
                  <div class="bg closeBtn"></div>
                  <div class="container">
                    <section class="bookBlock">
                      <div class="bookBox">
                        <div class="chrisCloseBtn closeBtn">
                          <div class="iconBox"></div>
                          <p class="text">CLOSE</p>
                        </div>

                        <div class="serialBox">
                          <p class="text">您的活動序號為</p>
                          <p class="number">AE586HJ37</p>
                        </div>

                        <div class="bunBox">
                          <h3 class="nameTitle">「原」創就是力量－從傳統手藝到當代藝術</h3>
                          <div class="stuffing">
                            <p class="title">活動場次</p>
                            <p class="text">2018/11/03  SAT. 14:00 - 15:30</p>
                          </div>
                          <div class="stuffing">
                            <p class="title">活動地點</p>
                            <p class="text">台北當代藝術館1F活動大廳</p>
                          </div>
                        </div>

                        <div class="formBox">
                          <div class="formHeadBox">
                            <p class="title">報名資訊</p>
                          </div>

                          <ul class="formBodyBox">
                            <li class="list">
                              <p class="title">一般定價 / 多人同行</p>
                              <div class="countBox">
                                <p class="item">票價 <span class="num">NT$ 4,000</span> /人</p>
                                <p class="item">人數 <span class="num">2</span></p>
                              </div>
                            </li>
                            <li class="list detail">
                              <span class="sNum">01</span>
                              <ul class="dBox">
                                <li class="dList">
                                  <p class="dTitle"><span class="en">NAME</span> <span class="cn">姓名</span></p>
                                  <p class="dText">王大明</p>
                                </li>
                                <li class="dList">
                                  <p class="dTitle"><span class="en">MOBILE</span> <span class="cn">手機號碼</span></p>
                                  <p class="dText">+886 912345678</p>
                                </li>
                                <li class="dList">
                                  <p class="dTitle"><span class="en">E-MAIL</span> <span class="cn">電子信箱</span></p>
                                  <p class="dText">mocataipei@gmail.com</p>
                                </li>
                                <li class="dList">
                                  <p class="dTitle"><span class="en">BIRTH DATE</span> <span class="cn">生日</span></p>
                                  <p class="dText">1996 . 05 . 18</p>
                                </li>
                              </ul>
                            </li>
                            <li class="list detail">
                              <span class="sNum">02</span>
                              <ul class="dBox">
                                <li class="dList">
                                  <p class="dTitle"><span class="en">NAME</span> <span class="cn">姓名</span></p>
                                  <p class="dText">張小美</p>
                                </li>
                                <li class="dList">
                                  <p class="dTitle"><span class="en">MOBILE</span> <span class="cn">手機號碼</span></p>
                                  <p class="dText">+886 912345678</p>
                                </li>
                                <li class="dList">
                                  <p class="dTitle"><span class="en">E-MAIL</span> <span class="cn">電子信箱</span></p>
                                  <p class="dText">prettymei@gmail.com</p>
                                </li>
                                <li class="dList">
                                  <p class="dTitle"><span class="en">BIRTH DATE</span> <span class="cn">生日</span></p>
                                  <p class="dText">1996 . 05 . 18</p>
                                </li>
                              </ul>
                            </li>
                          </ul>

                          <div class="numberBox">
                            <p class="text">您的報名人數為 <span class="num">2</span>人 ，</p>
                            <p class="text">費用總計為 <span class="num">NT$8,000</span></p>
                          </div>
                          
                          <section class="noticeBox">
                            <div class="articleBox">
                              <h5 class="nameTitle">
                                <span class="en">Notice</span>
                                <span class="cn">注意事項</span>
                              </h5>
                              <h6 class="title">上課須知</h6>
                              <p class="text">
                                1. 上課期間如遇颱風等天災，依臺北市政府規定公告停課，並另擇日補課。<br>
                                2. 本館保有所有課程變更之權力，活動因故無法執行，本館將另行通知上課日期。<br>
                                3. 現場繳費收據請妥善保存，開課第一天將依此辦理報到手續。<br>
                                4. 上課期間請務必攜配上課證。<br>
                              </p>
                            </div>
                          </section>
                        </div>
                      </div>
                      <div class="confirmBtn ufoBall closeBtn">
                        <p class="text">OK</p>
                        <p class="text">確定</p>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </li>

            <li class="list canceled">
              <div class="textInfoArea child">
                <div class="numBox">
                  <span class="text">05</span>
                </div>
                <div class="textBox">
                  <a class="title cg cgB" href="javascript:void(0)" title="">
                    <p>「原」創就是力量－從傳統手藝到當代藝術</p>
                  </a>
                  <div class="loBox">
                    <p class="text">
                      <span class="name">時間</span>
                      <span class="txt">2018-11-18 14:00-18:00</span>
                    </p>
                    <p class="text">
                      <span class="name">地點</span>
                      <span class="txt">台北當代藝術館1F活動大廳</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="btnInfoArea child">
                <div class="stateBox">
                  <div class="stateChild">
                    <p class="title">報名資訊</p>
                    <a class="link openBookBtn" href="javascript:void(0)"><span class="icon icon-chrisbook_information"></span></a>
                  </div>
                  <div class="stateChild">
                    <p class="title">付款狀態</p>
                    <p class="name">完成退款</p>
                  </div>
                  <div class="stateChild">
                    <p class="title">活動狀態</p>
                    <p class="name">取消報名</p>
                  </div>
                </div>
                <div class="btnStyle memberShot">
                  <div class="btn openCancelBox">
                    <p class="text">取消報名</p>
                  </div>
                </div>
              </div>

              <!--報名資訊視窗-->
              <div class="mBookBag hideBagType">
                <div class="for_scroll">
                  <div class="bg closeBtn"></div>
                  <div class="container">
                    <section class="bookBlock">
                      <div class="bookBox">
                        <div class="chrisCloseBtn closeBtn">
                          <div class="iconBox"></div>
                          <p class="text">CLOSE</p>
                        </div>

                        <div class="serialBox">
                          <p class="text">您的活動序號為</p>
                          <p class="number">AE586HJ37</p>
                        </div>

                        <div class="bunBox">
                          <h3 class="nameTitle">「原」創就是力量－從傳統手藝到當代藝術</h3>
                          <div class="stuffing">
                            <p class="title">活動場次</p>
                            <p class="text">2018/11/03  SAT. 14:00 - 15:30</p>
                          </div>
                          <div class="stuffing">
                            <p class="title">活動地點</p>
                            <p class="text">台北當代藝術館1F活動大廳</p>
                          </div>
                        </div>

                        <div class="formBox">
                          <div class="formHeadBox">
                            <p class="title">報名資訊</p>
                          </div>

                          <ul class="formBodyBox">
                            <li class="list">
                              <p class="title">一般定價 / 多人同行</p>
                              <div class="countBox">
                                <p class="item">票價 <span class="num">NT$ 4,000</span> /人</p>
                                <p class="item">人數 <span class="num">2</span></p>
                              </div>
                            </li>
                            <li class="list detail">
                              <span class="sNum">01</span>
                              <ul class="dBox">
                                <li class="dList">
                                  <p class="dTitle"><span class="en">NAME</span> <span class="cn">姓名</span></p>
                                  <p class="dText">王大明</p>
                                </li>
                                <li class="dList">
                                  <p class="dTitle"><span class="en">MOBILE</span> <span class="cn">手機號碼</span></p>
                                  <p class="dText">+886 912345678</p>
                                </li>
                                <li class="dList">
                                  <p class="dTitle"><span class="en">E-MAIL</span> <span class="cn">電子信箱</span></p>
                                  <p class="dText">mocataipei@gmail.com</p>
                                </li>
                                <li class="dList">
                                  <p class="dTitle"><span class="en">BIRTH DATE</span> <span class="cn">生日</span></p>
                                  <p class="dText">1996 . 05 . 18</p>
                                </li>
                              </ul>
                            </li>
                            <li class="list detail">
                              <span class="sNum">02</span>
                              <ul class="dBox">
                                <li class="dList">
                                  <p class="dTitle"><span class="en">NAME</span> <span class="cn">姓名</span></p>
                                  <p class="dText">張小美</p>
                                </li>
                                <li class="dList">
                                  <p class="dTitle"><span class="en">MOBILE</span> <span class="cn">手機號碼</span></p>
                                  <p class="dText">+886 912345678</p>
                                </li>
                                <li class="dList">
                                  <p class="dTitle"><span class="en">E-MAIL</span> <span class="cn">電子信箱</span></p>
                                  <p class="dText">prettymei@gmail.com</p>
                                </li>
                                <li class="dList">
                                  <p class="dTitle"><span class="en">BIRTH DATE</span> <span class="cn">生日</span></p>
                                  <p class="dText">1996 . 05 . 18</p>
                                </li>
                              </ul>
                            </li>
                          </ul>

                          <div class="numberBox">
                            <p class="text">您的報名人數為 <span class="num">2</span>人 ，</p>
                            <p class="text">費用總計為 <span class="num">NT$8,000</span></p>
                          </div>
                          
                          <section class="noticeBox">
                            <div class="articleBox">
                              <h5 class="nameTitle">
                                <span class="en">Notice</span>
                                <span class="cn">注意事項</span>
                              </h5>
                              <h6 class="title">上課須知</h6>
                              <p class="text">
                                1. 上課期間如遇颱風等天災，依臺北市政府規定公告停課，並另擇日補課。<br>
                                2. 本館保有所有課程變更之權力，活動因故無法執行，本館將另行通知上課日期。<br>
                                3. 現場繳費收據請妥善保存，開課第一天將依此辦理報到手續。<br>
                                4. 上課期間請務必攜配上課證。<br>
                              </p>
                            </div>
                          </section>
                        </div>
                      </div>
                      <div class="confirmBtn ufoBall closeBtn">
                        <p class="text">OK</p>
                        <p class="text">確定</p>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </li>

            <li class="list">
              <div class="textInfoArea child">
                <div class="numBox">
                  <span class="text">06</span>
                </div>
                <div class="textBox">
                  <a class="title cg cgB" href="javascript:void(0)" title="">
                    <p>大炳老師的敲敲木作坊</p>
                  </a>
                  <div class="loBox">
                    <p class="text">
                      <span class="name">時間</span>
                      <span class="txt">2018-11-18 14:00-18:00</span>
                    </p>
                    <p class="text">
                      <span class="name">地點</span>
                      <span class="txt">台北當代藝術館好玩藝教室</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="btnInfoArea child">
                <div class="stateBox">
                  <div class="stateChild">
                    <p class="title">報名資訊</p>
                    <a class="link openBookBtn" href="javascript:void(0)"><span class="icon icon-chrisbook_information"></span></a>
                  </div>
                  <div class="stateChild">
                    <p class="title">付款狀態</p>
                    <p class="name">完成付款</p>
                  </div>
                  <div class="stateChild">
                    <p class="title">活動狀態</p>
                    <p class="name">已開課</p>
                  </div>
                </div>
                <div class="btnStyle memberShot">
                  <div class="btn openCancelBox">
                    <p class="text">取消報名</p>
                  </div>
                </div>
              </div>

              <!--報名資訊視窗-->
              <div class="mBookBag hideBagType">
                <div class="for_scroll">
                  <div class="bg closeBtn"></div>
                  <div class="container">
                    <section class="bookBlock">
                      <div class="bookBox">
                        <div class="chrisCloseBtn closeBtn">
                          <div class="iconBox"></div>
                          <p class="text">CLOSE</p>
                        </div>

                        <div class="serialBox">
                          <p class="text">您的活動序號為</p>
                          <p class="number">AE586HJ37</p>
                        </div>

                        <div class="bunBox">
                          <h3 class="nameTitle">「原」創就是力量－從傳統手藝到當代藝術</h3>
                          <div class="stuffing">
                            <p class="title">活動場次</p>
                            <p class="text">2018/11/03  SAT. 14:00 - 15:30</p>
                          </div>
                          <div class="stuffing">
                            <p class="title">活動地點</p>
                            <p class="text">台北當代藝術館1F活動大廳</p>
                          </div>
                        </div>

                        <div class="formBox">
                          <div class="formHeadBox">
                            <p class="title">報名資訊</p>
                          </div>

                          <ul class="formBodyBox">
                            <li class="list">
                              <p class="title">一般定價 / 多人同行</p>
                              <div class="countBox">
                                <p class="item">票價 <span class="num">NT$ 4,000</span> /人</p>
                                <p class="item">人數 <span class="num">2</span></p>
                              </div>
                            </li>
                            <li class="list detail">
                              <span class="sNum">01</span>
                              <ul class="dBox">
                                <li class="dList">
                                  <p class="dTitle"><span class="en">NAME</span> <span class="cn">姓名</span></p>
                                  <p class="dText">王大明</p>
                                </li>
                                <li class="dList">
                                  <p class="dTitle"><span class="en">MOBILE</span> <span class="cn">手機號碼</span></p>
                                  <p class="dText">+886 912345678</p>
                                </li>
                                <li class="dList">
                                  <p class="dTitle"><span class="en">E-MAIL</span> <span class="cn">電子信箱</span></p>
                                  <p class="dText">mocataipei@gmail.com</p>
                                </li>
                                <li class="dList">
                                  <p class="dTitle"><span class="en">BIRTH DATE</span> <span class="cn">生日</span></p>
                                  <p class="dText">1996 . 05 . 18</p>
                                </li>
                              </ul>
                            </li>
                            <li class="list detail">
                              <span class="sNum">02</span>
                              <ul class="dBox">
                                <li class="dList">
                                  <p class="dTitle"><span class="en">NAME</span> <span class="cn">姓名</span></p>
                                  <p class="dText">張小美</p>
                                </li>
                                <li class="dList">
                                  <p class="dTitle"><span class="en">MOBILE</span> <span class="cn">手機號碼</span></p>
                                  <p class="dText">+886 912345678</p>
                                </li>
                                <li class="dList">
                                  <p class="dTitle"><span class="en">E-MAIL</span> <span class="cn">電子信箱</span></p>
                                  <p class="dText">prettymei@gmail.com</p>
                                </li>
                                <li class="dList">
                                  <p class="dTitle"><span class="en">BIRTH DATE</span> <span class="cn">生日</span></p>
                                  <p class="dText">1996 . 05 . 18</p>
                                </li>
                              </ul>
                            </li>
                          </ul>

                          <div class="numberBox">
                            <p class="text">您的報名人數為 <span class="num">2</span>人 ，</p>
                            <p class="text">費用總計為 <span class="num">NT$8,000</span></p>
                          </div>
                          
                          <section class="noticeBox">
                            <div class="articleBox">
                              <h5 class="nameTitle">
                                <span class="en">Notice</span>
                                <span class="cn">注意事項</span>
                              </h5>
                              <h6 class="title">上課須知</h6>
                              <p class="text">
                                1. 上課期間如遇颱風等天災，依臺北市政府規定公告停課，並另擇日補課。<br>
                                2. 本館保有所有課程變更之權力，活動因故無法執行，本館將另行通知上課日期。<br>
                                3. 現場繳費收據請妥善保存，開課第一天將依此辦理報到手續。<br>
                                4. 上課期間請務必攜配上課證。<br>
                              </p>
                            </div>
                          </section>
                        </div>
                      </div>
                      <div class="confirmBtn ufoBall closeBtn">
                        <p class="text">OK</p>
                        <p class="text">確定</p>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </li>

            <li class="list canceled">
              <div class="textInfoArea child">
                <div class="numBox">
                  <span class="text">07</span>
                </div>
                <div class="textBox">
                  <a class="title cg cgB" href="javascript:void(0)" title="">
                    <p>如果你希望我說些什麼 我會說我看見一幅影像—海希利西特個展</p>
                  </a>
                  <div class="loBox">
                    <p class="text">
                      <span class="name">時間</span>
                      <span class="txt">2018-11-18 14:00-18:00</span>
                    </p>
                    <p class="text">
                      <span class="name">地點</span>
                      <span class="txt">台北當代藝術館1F活動大廳</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="btnInfoArea child">
                <div class="stateBox">
                  <div class="stateChild">
                    <p class="title">報名資訊</p>
                    <a class="link openBookBtn" href="javascript:void(0)"><span class="icon icon-chrisbook_information"></span></a>
                  </div>
                  <div class="stateChild">
                    <p class="title">付款狀態</p>
                    <p class="name">免費</p>
                  </div>
                  <div class="stateChild">
                    <p class="title">活動狀態</p>
                    <p class="name">報名成功</p>
                  </div>
                </div>
                <div class="btnStyle memberShot">
                  <div class="btn openCancelBox">
                    <p class="text">取消報名</p>
                  </div>
                </div>
              </div>

              <!--報名資訊視窗-->
              <div class="mBookBag hideBagType">
                <div class="for_scroll">
                  <div class="bg closeBtn"></div>
                  <div class="container">
                    <section class="bookBlock">
                      <div class="bookBox">
                        <div class="chrisCloseBtn closeBtn">
                          <div class="iconBox"></div>
                          <p class="text">CLOSE</p>
                        </div>

                        <div class="serialBox">
                          <p class="text">您的活動序號為</p>
                          <p class="number">AE586HJ37</p>
                        </div>

                        <div class="bunBox">
                          <h3 class="nameTitle">「原」創就是力量－從傳統手藝到當代藝術</h3>
                          <div class="stuffing">
                            <p class="title">活動場次</p>
                            <p class="text">2018/11/03  SAT. 14:00 - 15:30</p>
                          </div>
                          <div class="stuffing">
                            <p class="title">活動地點</p>
                            <p class="text">台北當代藝術館1F活動大廳</p>
                          </div>
                        </div>

                        <div class="formBox">
                          <div class="formHeadBox">
                            <p class="title">報名資訊</p>
                          </div>

                          <ul class="formBodyBox">
                            <li class="list">
                              <p class="title">一般定價 / 多人同行</p>
                              <div class="countBox">
                                <p class="item">票價 <span class="num">NT$ 4,000</span> /人</p>
                                <p class="item">人數 <span class="num">2</span></p>
                              </div>
                            </li>
                            <li class="list detail">
                              <span class="sNum">01</span>
                              <ul class="dBox">
                                <li class="dList">
                                  <p class="dTitle"><span class="en">NAME</span> <span class="cn">姓名</span></p>
                                  <p class="dText">王大明</p>
                                </li>
                                <li class="dList">
                                  <p class="dTitle"><span class="en">MOBILE</span> <span class="cn">手機號碼</span></p>
                                  <p class="dText">+886 912345678</p>
                                </li>
                                <li class="dList">
                                  <p class="dTitle"><span class="en">E-MAIL</span> <span class="cn">電子信箱</span></p>
                                  <p class="dText">mocataipei@gmail.com</p>
                                </li>
                                <li class="dList">
                                  <p class="dTitle"><span class="en">BIRTH DATE</span> <span class="cn">生日</span></p>
                                  <p class="dText">1996 . 05 . 18</p>
                                </li>
                              </ul>
                            </li>
                            <li class="list detail">
                              <span class="sNum">02</span>
                              <ul class="dBox">
                                <li class="dList">
                                  <p class="dTitle"><span class="en">NAME</span> <span class="cn">姓名</span></p>
                                  <p class="dText">張小美</p>
                                </li>
                                <li class="dList">
                                  <p class="dTitle"><span class="en">MOBILE</span> <span class="cn">手機號碼</span></p>
                                  <p class="dText">+886 912345678</p>
                                </li>
                                <li class="dList">
                                  <p class="dTitle"><span class="en">E-MAIL</span> <span class="cn">電子信箱</span></p>
                                  <p class="dText">prettymei@gmail.com</p>
                                </li>
                                <li class="dList">
                                  <p class="dTitle"><span class="en">BIRTH DATE</span> <span class="cn">生日</span></p>
                                  <p class="dText">1996 . 05 . 18</p>
                                </li>
                              </ul>
                            </li>
                          </ul>

                          <div class="numberBox">
                            <p class="text">您的報名人數為 <span class="num">2</span>人 ，</p>
                            <p class="text">費用總計為 <span class="num">NT$8,000</span></p>
                          </div>
                          
                          <section class="noticeBox">
                            <div class="articleBox">
                              <h5 class="nameTitle">
                                <span class="en">Notice</span>
                                <span class="cn">注意事項</span>
                              </h5>
                              <h6 class="title">上課須知</h6>
                              <p class="text">
                                1. 上課期間如遇颱風等天災，依臺北市政府規定公告停課，並另擇日補課。<br>
                                2. 本館保有所有課程變更之權力，活動因故無法執行，本館將另行通知上課日期。<br>
                                3. 現場繳費收據請妥善保存，開課第一天將依此辦理報到手續。<br>
                                4. 上課期間請務必攜配上課證。<br>
                              </p>
                            </div>
                          </section>
                        </div>
                      </div>
                      <div class="confirmBtn ufoBall closeBtn">
                        <p class="text">OK</p>
                        <p class="text">確定</p>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </li>

            <li class="list canceled">
              <div class="textInfoArea child">
                <div class="numBox">
                  <span class="text">08</span>
                </div>
                <div class="textBox">
                  <a class="title cg cgB" href="javascript:void(0)" title="">
                    <p>我的傳統你的眼－藝術國際展演中的文化流轉與轉譯</p>
                  </a>
                  <div class="loBox">
                    <p class="text">
                      <span class="name">時間</span>
                      <span class="txt">2018-11-18 14:00-18:00</span>
                    </p>
                    <p class="text">
                      <span class="name">地點</span>
                      <span class="txt">台北當代藝術館1F活動大廳</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="btnInfoArea child">
                <div class="stateBox">
                  <div class="stateChild">
                    <p class="title">報名資訊</p>
                    <a class="link openBookBtn" href="javascript:void(0)"><span class="icon icon-chrisbook_information"></span></a>
                  </div>
                  <div class="stateChild">
                    <p class="title">付款狀態</p>
                    <p class="name">免費</p>
                  </div>
                  <div class="stateChild">
                    <p class="title">活動狀態</p>
                    <p class="name">已結束</p>
                  </div>
                </div>
                <div class="btnStyle memberShot">
                  <div class="btn openCancelBox">
                    <p class="text">取消報名</p>
                  </div>
                </div>
              </div>

              <!--報名資訊視窗-->
              <div class="mBookBag hideBagType">
                <div class="for_scroll">
                  <div class="bg closeBtn"></div>
                  <div class="container">
                    <section class="bookBlock">
                      <div class="bookBox">
                        <div class="chrisCloseBtn closeBtn">
                          <div class="iconBox"></div>
                          <p class="text">CLOSE</p>
                        </div>

                        <div class="serialBox">
                          <p class="text">您的活動序號為</p>
                          <p class="number">AE586HJ37</p>
                        </div>

                        <div class="bunBox">
                          <h3 class="nameTitle">「原」創就是力量－從傳統手藝到當代藝術</h3>
                          <div class="stuffing">
                            <p class="title">活動場次</p>
                            <p class="text">2018/11/03  SAT. 14:00 - 15:30</p>
                          </div>
                          <div class="stuffing">
                            <p class="title">活動地點</p>
                            <p class="text">台北當代藝術館1F活動大廳</p>
                          </div>
                        </div>

                        <div class="formBox">
                          <div class="formHeadBox">
                            <p class="title">報名資訊</p>
                          </div>

                          <ul class="formBodyBox">
                            <li class="list">
                              <p class="title">一般定價 / 多人同行</p>
                              <div class="countBox">
                                <p class="item">票價 <span class="num">NT$ 4,000</span> /人</p>
                                <p class="item">人數 <span class="num">2</span></p>
                              </div>
                            </li>
                            <li class="list detail">
                              <span class="sNum">01</span>
                              <ul class="dBox">
                                <li class="dList">
                                  <p class="dTitle"><span class="en">NAME</span> <span class="cn">姓名</span></p>
                                  <p class="dText">王大明</p>
                                </li>
                                <li class="dList">
                                  <p class="dTitle"><span class="en">MOBILE</span> <span class="cn">手機號碼</span></p>
                                  <p class="dText">+886 912345678</p>
                                </li>
                                <li class="dList">
                                  <p class="dTitle"><span class="en">E-MAIL</span> <span class="cn">電子信箱</span></p>
                                  <p class="dText">mocataipei@gmail.com</p>
                                </li>
                                <li class="dList">
                                  <p class="dTitle"><span class="en">BIRTH DATE</span> <span class="cn">生日</span></p>
                                  <p class="dText">1996 . 05 . 18</p>
                                </li>
                              </ul>
                            </li>
                            <li class="list detail">
                              <span class="sNum">02</span>
                              <ul class="dBox">
                                <li class="dList">
                                  <p class="dTitle"><span class="en">NAME</span> <span class="cn">姓名</span></p>
                                  <p class="dText">張小美</p>
                                </li>
                                <li class="dList">
                                  <p class="dTitle"><span class="en">MOBILE</span> <span class="cn">手機號碼</span></p>
                                  <p class="dText">+886 912345678</p>
                                </li>
                                <li class="dList">
                                  <p class="dTitle"><span class="en">E-MAIL</span> <span class="cn">電子信箱</span></p>
                                  <p class="dText">prettymei@gmail.com</p>
                                </li>
                                <li class="dList">
                                  <p class="dTitle"><span class="en">BIRTH DATE</span> <span class="cn">生日</span></p>
                                  <p class="dText">1996 . 05 . 18</p>
                                </li>
                              </ul>
                            </li>
                          </ul>

                          <div class="numberBox">
                            <p class="text">您的報名人數為 <span class="num">2</span>人 ，</p>
                            <p class="text">費用總計為 <span class="num">NT$8,000</span></p>
                          </div>
                          
                          <section class="noticeBox">
                            <div class="articleBox">
                              <h5 class="nameTitle">
                                <span class="en">Notice</span>
                                <span class="cn">注意事項</span>
                              </h5>
                              <h6 class="title">上課須知</h6>
                              <p class="text">
                                1. 上課期間如遇颱風等天災，依臺北市政府規定公告停課，並另擇日補課。<br>
                                2. 本館保有所有課程變更之權力，活動因故無法執行，本館將另行通知上課日期。<br>
                                3. 現場繳費收據請妥善保存，開課第一天將依此辦理報到手續。<br>
                                4. 上課期間請務必攜配上課證。<br>
                              </p>
                            </div>
                          </section>
                        </div>
                      </div>
                      <div class="confirmBtn ufoBall closeBtn">
                        <p class="text">OK</p>
                        <p class="text">確定</p>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </article>
      </div>


      <!--取消報名視窗-->
      <div class="mCancelBag hideBagType">
        <div class="for_scroll">
          <div class="bg closeBtn"></div>
          <div class="container">
            <div class="cancelBlock">
              <div class="mixBox">
                <div class="titleInfoBox">
                  <p class="title">Cancel Booking</p>
                  <p class="subTitle">取消報名</p>
                </div>

                <div class="textInfoBox">
                  <p class="text">親愛的會員您好，您確定要取消此報名嗎？</p>
                  <p class="name">大炳老師的敲敲木作坊</p>
                </div>

                <div class="typeInfoBox">
                  <p class="text">若您確定取消此報名，我們將在三個工作天內，由專員與您聯繫退款事宜。提醒您，我們將根據不同情況進行階段性退款，可參閱活動費用說明的退費辦法，謝謝。</p>
                </div>
              </div>

              <div class="btnInfoArea btnStyle">
                <div class="btn styleG closeBtn">
                  <p class="text">返回前頁</p>
                </div>
                <div class="btn styleR closeBtn agree">
                  <p class="text">確定取消</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--大頭貼視窗-->
      <div class="mSelfieBag hideBagType">
        <div class="for_scroll">
          <div class="bg closeBtn"></div>
          <div class="container">
            <div class="selfieBlock">
              <div class="mixBox">
                <div class="titleInfoBox">
                  <p class="title">Personal Photo</p>
                  <p class="subTitle">設定您的頭像</p>
                </div>

                <div class="selfieBox">
                  <figure class="imgFrame">
                    <img class="img" src="../../upload/fa2/member/selfie.jpg" alt="" title="">
                    <input class="uploadInput" type="file" accept=".jpg, .jpeg, .png">

                    <div class="hoverBox">
                      <span class="icon">+</span>
                      <p class="text">更換頭像</p>
                    </div>
                  </figure>
                </div>

                <!--data-default 預設圖片之路徑-->
                <div class="textInfoBox">
                  <p class="text">請上傳250*250(px)使吋的個人照片，<br/>檔案格式為jpg / png / gif，已完整您的個人資訊。</p>
                  <p class="text default" data-path="../../upload/fa2/member/selfie.jpg">使用預設圖片</p>
                </div>
              </div>

              <div class="btnInfoArea btnStyle">
                <div class="btn styleG closeBtn">
                  <p class="text">返回前頁</p>
                </div>
                <div class="btn styleR closeBtn agree">
                  <p class="text">儲存照片</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--重設帳號-->
      <div class="chAccount modelA hideAccountType">
        <!--背景-->
        <div class="bgDecoration degA">
          <img class="img" src="../../upload/fa2/member/bk02.png" alt="" title="">
        </div>
        <div class="bgDecoration degB">
          <img class="img" src="../../upload/fa2/member/bk03.png" alt="" title="">
        </div>

        <!--關閉畫面-->
        <div class="chrisCloseBtn closeDoor">
          <p class="text">CLOSE</p>
          <div class="iconBox"></div>
        </div>

        <!---->
        <div class="pageA">
          <div class="pageAbox pizzaBox showUp">
            <section class="mocaTitleSec">
              <h4 class="title">Change Your Account</h2>
              <h5 class="subTitle">更換您的帳號</h3>
              <p class="text">親愛的會員您好，請填寫您欲更換的E-mail，並輸入當前的會員密碼，我們會發送驗證連結至您設定的新信箱。</p>
            </section>

            <form id="formChAccount" class="formChAccount memberForm" action="">
              <div class="list w100">
                <label class="lableTitle" for=""><span>New Account</span><span>設定新帳號</span></label>
                <input type="email" name="" id="" value="" placeholder="請輸入您欲更換的電子信箱">
              </div>
              <div class="list w100 break">
                <label class="lableTitle" for=""><span>Account Confirm</span><span>再次輸入新帳號</span></label>
                <input type="email" name="" id="" value="" placeholder="">
              </div>
              <div class="list w100">
                <label class="lableTitle" for=""><span>Password</span><span>會員密碼</span></label>
                <input type="password" name="" id="" value="" placeholder="請輸入會員密碼">
              </div>
            </form>

            <div class="ctrlArea">
              <div class="link btnB callPageBbox">
                <span class="text">確定送出</span>
              </div>
            </div>
          </div>

          <div class="pageBbox pizzaBox">
            <section class="mocaTitleSec">
              <h4 class="title">Success !</h2>
              <h5 class="subTitle">驗證連結已發送</h3>
              <p class="text">親愛的會員您好，驗證連結已發送至您設定的新信箱，請在有效期限24小時內進行驗證手續，為確保您的會員帳號安全，請使用新的帳號進行重新登入。</p>
            </section>

            <div class="ctrlArea">
              <div class="link btnB closeDoor">
                <span class="text">確定</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--重設密碼-->
      <div class="chPassword modelA hideAccountType">
        <!--背景-->
        <div class="bgDecoration degA">
          <img class="img" src="../../upload/fa2/member/bk02.png" alt="" title="">
        </div>
        <div class="bgDecoration degB">
          <img class="img" src="../../upload/fa2/member/bk03.png" alt="" title="">
        </div>

        <!--關閉畫面-->
        <div class="chrisCloseBtn closeDoor">
          <p class="text">CLOSE</p>
          <div class="iconBox"></div>
        </div>

        <!---->
        <div class="pageA">
          <div class="pageAbox pizzaBox showUp">
            <section class="mocaTitleSec">
              <h4 class="title">Change Your Password</h2>
              <h5 class="subTitle">更換您的密碼</h3>
              <p class="text">親愛的會員您好，請填寫您欲更換的新密碼，並輸入當前使用的會員密碼，我們將會發送驗證連結至您註冊的信箱，以確認本操作為您本人進行。</p>
            </section>

            <form id="formChPassword" class="formChPassword memberForm" action="">
              <div class="list w100">
                <label class="lableTitle" for=""><span>New Password</span><span>設定新密碼</span></label>
                <input type="password" name="" id="" value="" placeholder="請將密碼設定至少八位數以上，並包含英文與數字">
              </div>
              <div class="list w100 break">
                <label class="lableTitle" for=""><span>Password Confirm</span><span>再次輸入新密碼</span></label>
                <input type="password" name="" id="" value="" placeholder="">
              </div>
              <div class="list w100">
                <label class="lableTitle" for=""><span>Password</span><span>當前使用密碼</span></label>
                <input type="password" name="" id="" value="" placeholder="">
              </div>
            </form>

            <div class="ctrlArea">
              <div class="link btnB callPageBbox">
                <span class="text">確定送出</span>
              </div>
            </div>
          </div>

          <div class="pageBbox pizzaBox">
            <section class="mocaTitleSec">
              <h4 class="title">Success !</h2>
              <h5 class="subTitle">驗證連結已發送</h3>
              <p class="text">親愛的會員您好，驗證連結已發送至您的帳號信箱，請在有效期限24小時內進行驗證手續，為確保您的會員帳號安全，請使用新的密碼進行重新登入。</p>
            </section>

            <div class="ctrlArea">
              <div class="link btnB closeDoor">
                <span class="text">確定</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <?php include('../layout/footer.php');?>

  </div>

</body>

<?php include('../layout/jsLayout.php');?> 
</html>